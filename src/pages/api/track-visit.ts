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

    // Déterminer la résolution (Tel/PC/Tablette/Autre)
    const ua = userAgent || '';
    let resolution = 'PC';
    if (/mobile/i.test(ua) && !/tablet|ipad/i.test(ua)) {
      resolution = 'Tel';
    } else if (/tablet|ipad/i.test(ua)) {
      resolution = 'Tablette';
    } else if (!ua || ua === '') {
      resolution = 'Autre';
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
      range: 'A:M', // 13 colonnes maintenant
    });

    const rows = existingData.data.values || [];
    const lastRow = rows.length > 1 ? rows[rows.length - 1] : null;

    // Vérifier si la dernière ligne a la même IP ET le même User Agent
    const lastRowIp = lastRow ? lastRow[7] : null;
    const lastRowUserAgent = lastRow ? lastRow[8] : null;

    // Détecter si c'est une conversion (clic sur bouton achat)
    const isConversion = page.includes('Click:');
    const conversionText = isConversion ? page.split('Click: ')[1] || 'Oui' : '';

    if (lastRow && lastRowIp === ip && lastRowUserAgent === userAgent) {
      // Même IP + même User Agent → on met à jour la ligne existante
      const existingPages = lastRow[2] || ''; // Pages visitées
      const existingVisitCount = parseInt(lastRow[10] || '1'); // Nb visites
      const existingConversion = lastRow[11] || ''; // Conversion existante

      // Ajouter la nouvelle page aux pages existantes (sauf si c'est un clic)
      const pagesArray = existingPages.split(', ').filter((p: string) => p);
      if (!pagesArray.includes(page) && !isConversion) {
        pagesArray.push(page);
      }

      // Mettre à jour la conversion si c'est un clic
      let conversion = existingConversion;
      if (isConversion && conversionText && !conversion.includes(conversionText)) {
        conversion = conversion && conversion !== '-' ? `${conversion}, ${conversionText}` : conversionText;
      }

      const updatedValues = [
        [
          dateStr, // Date mise à jour
          timeStr, // Heure mise à jour
          pagesArray.join(', '), // Pages cumulées
          resolution, // Tel/PC/Tablette/Autre
          browser,
          country,
          city,
          ip,
          userAgent, // User Agent
          referrer || 'Direct',
          (existingVisitCount + 1).toString(), // Incrémenter Nb visites
          conversion || '-', // Conversion
          'Récurrent', // Type visiteur
        ],
      ];

      // Mettre à jour la dernière ligne
      await sheets.spreadsheets.values.update({
        spreadsheetId: SPREADSHEET_ID,
        range: `A${rows.length}:M${rows.length}`,
        valueInputOption: 'USER_ENTERED',
        requestBody: {
          values: updatedValues,
        },
      });
    } else {
      // IP différente OU User Agent différent → créer une nouvelle ligne
      const newValues = [
        [
          dateStr,
          timeStr,
          page,
          resolution, // Tel/PC/Tablette/Autre
          browser,
          country,
          city,
          ip,
          userAgent, // User Agent
          referrer || 'Direct',
          '1', // Première visite
          isConversion ? conversionText : '-', // Conversion
          'Nouveau', // Type visiteur
        ],
      ];

      await sheets.spreadsheets.values.append({
        spreadsheetId: SPREADSHEET_ID,
        range: 'A:M',
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
