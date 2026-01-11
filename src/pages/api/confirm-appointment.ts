import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';
import { google } from 'googleapis';
import path from 'path';

const SPREADSHEET_ID = '1BOIRo37MAzk-91YRdaPhGEX4TpfeQ4YXROz5FveBNEo';
const VALIDATION_SHEET = 'validation';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { email, name, date, time, eventId } = req.query;

    if (!email || !name || !date || !time) {
      return res.status(400).json({ message: 'Paramètres manquants' });
    }

    // Charger les credentials Google
    let auth;
    if (process.env.GOOGLE_CREDENTIALS) {
      const credentials = JSON.parse(process.env.GOOGLE_CREDENTIALS);
      auth = new google.auth.GoogleAuth({
        credentials,
        scopes: [
          'https://www.googleapis.com/auth/spreadsheets',
          'https://www.googleapis.com/auth/calendar',
        ],
      });
    } else {
      const credentialsPath = path.join(process.cwd(), 'google-credentials.json');
      auth = new google.auth.GoogleAuth({
        keyFile: credentialsPath,
        scopes: [
          'https://www.googleapis.com/auth/spreadsheets',
          'https://www.googleapis.com/auth/calendar',
        ],
      });
    }

    const sheets = google.sheets({ version: 'v4', auth });

    // Vérifier si ce RDV a déjà été traité dans Google Sheets
    try {
      const existingData = await sheets.spreadsheets.values.get({
        spreadsheetId: SPREADSHEET_ID,
        range: `${VALIDATION_SHEET}!A:D`,
      });

      const rows = existingData.data.values || [];

      // Chercher si ce RDV existe déjà (Email, Date, Heure)
      const existingRow = rows.find((row: string[]) =>
        row[0] === email && row[1] === date && row[2] === time
      );

      if (existingRow) {
        const status = existingRow[3]; // Colonne Statut
        const statusText = status === 'validé'
          ? 'validé'
          : 'refusé';

        return res.status(200).send(`
          <!DOCTYPE html>
          <html>
            <head>
              <meta charset="UTF-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <title>Déjà traité</title>
              <style>
                body {
                  font-family: Arial, sans-serif;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  min-height: 100vh;
                  margin: 0;
                  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                }
                .container {
                  background: white;
                  padding: 40px;
                  border-radius: 16px;
                  box-shadow: 0 10px 40px rgba(0,0,0,0.2);
                  text-align: center;
                  max-width: 500px;
                }
                .warning-icon {
                  font-size: 64px;
                  margin-bottom: 20px;
                }
                h1 {
                  color: #FF9800;
                  margin-bottom: 10px;
                }
                p {
                  color: #666;
                  line-height: 1.6;
                }
              </style>
            </head>
            <body>
              <div class="container">
                <div class="warning-icon">⚠️</div>
                <h1>Déjà traité</h1>
                <p>Demande déjà traitée: ${statusText}</p>
                <p style="margin-top: 20px; font-size: 14px; color: #999;">Vous pouvez fermer cette fenêtre.</p>
              </div>
            </body>
          </html>
        `);
      }
    } catch (error) {
      console.error('Erreur lors de la lecture de Google Sheets:', error);
      // Si l'onglet n'existe pas encore, on continue
    }

    // Enregistrer ce RDV comme validé dans Google Sheets
    const newRow = [
      email as string,
      date as string,
      time as string,
      'validé',
    ];

    try {
      await sheets.spreadsheets.values.append({
        spreadsheetId: SPREADSHEET_ID,
        range: `${VALIDATION_SHEET}!A:D`,
        valueInputOption: 'USER_ENTERED',
        requestBody: {
          values: [newRow],
        },
      });
    } catch (error) {
      console.error('Erreur lors de l\'écriture dans Google Sheets:', error);
      // On continue quand même pour envoyer l'email
    }

    // Mettre à jour l'événement dans Google Calendar si eventId est fourni
    if (eventId) {
      try {
        const calendar = google.calendar({ version: 'v3', auth });

        // Récupérer l'événement actuel pour garder ses détails
        const existingEvent = await calendar.events.get({
          calendarId: '85c754fb0c43f672ffe00dbfd1e1f1c6dc3e1e25cf34dcc1b81c80ed2f642495@group.calendar.google.com',
          eventId: eventId as string,
        });

        // Mettre à jour seulement le titre de l'événement
        await calendar.events.update({
          calendarId: '85c754fb0c43f672ffe00dbfd1e1f1c6dc3e1e25cf34dcc1b81c80ed2f642495@group.calendar.google.com',
          eventId: eventId as string,
          requestBody: {
            ...existingEvent.data,
            summary: `☑️RDV avec ${name} validé`,
          },
        });
      } catch (error) {
        console.error('Erreur lors de la mise à jour de l\'événement:', error);
        // On continue quand même pour envoyer l'email
      }
    }

    // Configurer nodemailer pour Gmail
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    // Email de confirmation au client
    const confirmationMailOptions = {
      from: process.env.GMAIL_USER,
      to: email as string,
      subject: 'Votre rendez-vous est confirmé - En Pleine Flore',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #4CAF50;">Rendez-vous confirmé ✓</h2>
          <p>Bonjour ${name},</p>
          <p>Nous avons le plaisir de vous confirmer votre rendez-vous :</p>
          <div style="background-color: #e8f5e9; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #4CAF50;">
            <p style="margin: 5px 0; font-size: 16px;"><strong>📅 Date :</strong> ${date}</p>
            <p style="margin: 5px 0; font-size: 16px;"><strong>🕐 Heure :</strong> ${time}</p>
          </div>
          <p>Nous avons hâte de vous rencontrer !</p>
          <p>À très bientôt,</p>
          <p style="color: #666; font-size: 12px; margin-top: 30px;">L'équipe En Pleine Flore</p>
        </div>
      `,
    };

    await transporter.sendMail(confirmationMailOptions);

    // Retourner une page HTML de succès
    res.status(200).send(`
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Rendez-vous confirmé</title>
          <style>
            body {
              font-family: Arial, sans-serif;
              display: flex;
              justify-content: center;
              align-items: center;
              min-height: 100vh;
              margin: 0;
              background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            }
            .container {
              background: white;
              padding: 40px;
              border-radius: 16px;
              box-shadow: 0 10px 40px rgba(0,0,0,0.2);
              text-align: center;
              max-width: 500px;
            }
            .success-icon {
              font-size: 64px;
              margin-bottom: 20px;
            }
            h1 {
              color: #4CAF50;
              margin-bottom: 10px;
            }
            p {
              color: #666;
              line-height: 1.6;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="success-icon">✅</div>
            <h1>Rendez-vous confirmé !</h1>
            <p>Un email de confirmation a été envoyé à <strong>${email}</strong></p>
            <p style="margin-top: 20px; font-size: 14px; color: #999;">Vous pouvez fermer cette fenêtre.</p>
          </div>
        </body>
      </html>
    `);
  } catch (error) {
    console.error('Error confirming appointment:', error);
    res.status(500).json({
      success: false,
      error: 'Erreur lors de la confirmation du rendez-vous',
    });
  }
}
