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

    // Vérifier si l'onglet "validation" existe déjà
    const spreadsheet = await sheets.spreadsheets.get({
      spreadsheetId: SPREADSHEET_ID,
    });

    const validationSheetExists = spreadsheet.data.sheets?.some(
      (sheet) => sheet.properties?.title === 'validation'
    );

    // Créer l'onglet "validation" s'il n'existe pas
    if (!validationSheetExists) {
      await sheets.spreadsheets.batchUpdate({
        spreadsheetId: SPREADSHEET_ID,
        requestBody: {
          requests: [
            {
              addSheet: {
                properties: {
                  title: 'validation',
                },
              },
            },
          ],
        },
      });
    }

    // Ajouter les en-têtes dans l'onglet "validation"
    const headers = [
      [
        'Email',
        'Date',
        'Heure',
        'Statut',
      ],
    ];

    await sheets.spreadsheets.values.update({
      spreadsheetId: SPREADSHEET_ID,
      range: 'validation!A1:D1',
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: headers,
      },
    });

    res.status(200).json({
      success: true,
      message: 'Onglet "validation" créé et en-têtes ajoutés avec succès'
    });
  } catch (error) {
    console.error('Error initializing validation sheet:', error);
    res.status(500).json({
      success: false,
      error: 'Erreur lors de l\'initialisation de l\'onglet validation'
    });
  }
}
