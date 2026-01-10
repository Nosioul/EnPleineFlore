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

    // Charger les credentials
    const credentialsPath = path.join(process.cwd(), 'google-credentials.json');
    const auth = new google.auth.GoogleAuth({
      keyFile: credentialsPath,
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });

    // Obtenir l'adresse IP du visiteur
    const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress || 'Unknown';

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

    // Préparer les données à ajouter
    const values = [
      [
        dateStr,
        timeStr,
        page,
        deviceType,
        browser,
        ip,
        referrer || 'Direct',
      ],
    ];

    // Ajouter une ligne au Google Sheet
    await sheets.spreadsheets.values.append({
      spreadsheetId: SPREADSHEET_ID,
      range: 'A:G', // Sans le nom de la feuille, utilise la première feuille par défaut
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values,
      },
    });

    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error tracking visit:', error);
    res.status(500).json({ success: false, error: 'Failed to track visit' });
  }
}
