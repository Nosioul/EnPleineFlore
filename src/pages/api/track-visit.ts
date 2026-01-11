import type { NextApiRequest, NextApiResponse } from 'next';
import { google } from 'googleapis';
import path from 'path';

const SPREADSHEET_ID = '1BOIRo37MAzk-91YRdaPhGEX4TpfeQ4YXROz5FveBNEo';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { page, userAgent, referrer } = req.body;

    // Charger les credentials (depuis variable d'environnement en production, fichier en local)
    let auth;
    if (process.env.GOOGLE_CREDENTIALS) {
      // En production (Vercel)
      const credentials = JSON.parse(process.env.GOOGLE_CREDENTIALS);
      auth = new google.auth.GoogleAuth({
        credentials,
        scopes: ['https://www.googleapis.com/auth/spreadsheets'],
      });
    } else {
      // En local
      const credentialsPath = path.join(process.cwd(), 'google-credentials.json');
      auth = new google.auth.GoogleAuth({
        keyFile: credentialsPath,
        scopes: ['https://www.googleapis.com/auth/spreadsheets'],
      });
    }

    const sheets = google.sheets({ version: 'v4', auth });

    // Obtenir l'adresse IP du visiteur
    const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress || 'Unknown';

    // Obtenir la géolocalisation (seulement si l'IP n'est pas locale)
    let country = 'Unknown';
    let city = 'Unknown';

    const ipStr = typeof ip === 'string' ? ip : String(ip);
    if (ip && ip !== 'Unknown' && ip !== '::1' && ip !== '127.0.0.1' && !ipStr.startsWith('192.168')) {
      try {
        const geoResponse = await fetch(`https://ipapi.co/${ip}/json/`);
        if (geoResponse.ok) {
          const geoData = await geoResponse.json();
          country = geoData.country_name || 'Unknown';
          city = geoData.city || 'Unknown';
        }
      } catch (error) {
        console.error('Error fetching geolocation:', error);
      }
    }

    // Obtenir la date et l'heure actuelles
    const now = new Date();
    const dateStr = now.toLocaleDateString('fr-FR');
    const timeStr = now.toLocaleTimeString('fr-FR');

    // Déterminer le type d'appareil
    const ua = userAgent || '';
    let deviceType = 'Desktop';
    if (/mobile/i.test(ua)) {
      deviceType = 'Mobile';
    } else if (/tablet|ipad/i.test(ua)) {
      deviceType = 'Tablet';
    }

    // Déterminer le navigateur
    let browser = 'Unknown';
    if (ua.includes('Chrome')) browser = 'Chrome';
    else if (ua.includes('Firefox')) browser = 'Firefox';
    else if (ua.includes('Safari')) browser = 'Safari';
    else if (ua.includes('Edge')) browser = 'Edge';

    // Récupérer uniquement la dernière ligne du tableau
    const existingData = await sheets.spreadsheets.values.get({
      spreadsheetId: SPREADSHEET_ID,
      range: 'A:J', // 10 colonnes maintenant (9 + Nb visites)
    });

    const rows = existingData.data.values || [];
    const lastRow = rows.length > 1 ? rows[rows.length - 1] : null;

    // Vérifier si la dernière ligne a la même IP
    if (lastRow && lastRow[7] === ip) {
      // Même IP → on met à jour la ligne existante
      const existingPages = lastRow[2] || ''; // Pages visitées
      const existingVisitCount = parseInt(lastRow[9] || '1'); // Nb visites

      // Ajouter la nouvelle page aux pages existantes
      const pagesArray = existingPages.split(', ').filter((p: string) => p);
      if (!pagesArray.includes(page)) {
        pagesArray.push(page);
      }

      const updatedValues = [
        [
          dateStr, // Date mise à jour
          timeStr, // Heure mise à jour
          pagesArray.join(', '), // Pages cumulées
          deviceType,
          browser,
          country,
          city,
          ip,
          referrer || 'Direct',
          (existingVisitCount + 1).toString(), // Incrémenter Nb visites
        ],
      ];

      // Mettre à jour la dernière ligne
      await sheets.spreadsheets.values.update({
        spreadsheetId: SPREADSHEET_ID,
        range: `A${rows.length}:J${rows.length}`,
        valueInputOption: 'USER_ENTERED',
        requestBody: {
          values: updatedValues,
        },
      });
    } else {
      // IP différente → créer une nouvelle ligne
      const newValues = [
        [
          dateStr,
          timeStr,
          page,
          deviceType,
          browser,
          country,
          city,
          ip,
          referrer || 'Direct',
          '1', // Première visite
        ],
      ];

      await sheets.spreadsheets.values.append({
        spreadsheetId: SPREADSHEET_ID,
        range: 'A:J',
        valueInputOption: 'USER_ENTERED',
        requestBody: {
          values: newValues,
        },
      });
    }

    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error tracking visit:', error);
    res.status(500).json({ success: false, error: 'Failed to track visit' });
  }
}
