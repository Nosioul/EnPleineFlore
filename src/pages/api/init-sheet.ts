import type { NextApiRequest, NextApiResponse } from 'next';
import { google } from 'googleapis';
import path from 'path';

const SPREADSHEET_ID = '1BOIRo37MAzk-91YRdaPhGEX4TpfeQ4YXROz5FveBNEo';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Accepter GET et POST pour faciliter les tests
  if (req.method !== 'POST' && req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    // Charger les credentials
    const credentialsPath = path.join(process.cwd(), 'google-credentials.json');
    const auth = new google.auth.GoogleAuth({
      keyFile: credentialsPath,
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });

    // Ajouter les en-têtes
    const headers = [
      [
        'Date',
        'Heure',
        'Page visitée',
        'Type d\'appareil',
        'Navigateur',
        'IP',
        'Source',
      ],
    ];

    await sheets.spreadsheets.values.update({
      spreadsheetId: SPREADSHEET_ID,
      range: 'A1:G1',
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: headers,
      },
    });

    res.status(200).json({ success: true, message: 'Headers added successfully' });
  } catch (error) {
    console.error('Error initializing sheet:', error);
    res.status(500).json({ success: false, error: 'Failed to initialize sheet' });
  }
}
