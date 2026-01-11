import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

// Stocker les RDV déjà traités en mémoire (simple et efficace)
const processedAppointments = new Set<string>();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { email, name, date, time } = req.query;

    if (!email || !name || !date || !time) {
      return res.status(400).json({ message: 'Paramètres manquants' });
    }

    // Créer une clé unique pour ce RDV
    const appointmentKey = `${email}-${date}-${time}`;

    // Vérifier si ce RDV a déjà été traité
    if (processedAppointments.has(appointmentKey)) {
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
              <p>Ce rendez-vous a déjà été refusé. Aucun email supplémentaire n'a été envoyé.</p>
              <p style="margin-top: 20px; font-size: 14px; color: #999;">Vous pouvez fermer cette fenêtre.</p>
            </div>
          </body>
        </html>
      `);
    }

    // Marquer ce RDV comme traité
    processedAppointments.add(appointmentKey);

    // Configurer nodemailer pour Gmail
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    // Récupérer l'URL du site
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://en-pleine-flore.vercel.app';

    // Email de refus au client avec bouton pour reprendre RDV
    const declineMailOptions = {
      from: process.env.GMAIL_USER,
      to: email as string,
      subject: 'Proposition de nouveau rendez-vous - En Pleine Flore',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #f44336;">Rendez-vous non disponible</h2>
          <p>Bonjour ${name},</p>
          <p>Nous sommes désolés, mais le créneau que vous aviez demandé n'est malheureusement pas disponible :</p>
          <div style="background-color: #ffebee; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #f44336;">
            <p style="margin: 5px 0;"><strong>📅 Date demandée :</strong> ${date}</p>
            <p style="margin: 5px 0;"><strong>🕐 Heure demandée :</strong> ${time}</p>
          </div>
          <p>Nous vous invitons à choisir une autre date qui vous conviendrait :</p>
          <div style="text-align: center; margin: 30px 0;">
            <a href="${siteUrl}/rendez-vous" style="display: inline-block; background: linear-gradient(135deg, #f97316 0%, #ea580c 100%); color: white; padding: 16px 32px; text-decoration: none; border-radius: 8px; font-weight: bold; font-size: 16px;">
              📅 Reprendre un rendez-vous
            </a>
          </div>
          <p>Nous nous excusons pour ce désagrément et espérons pouvoir vous rencontrer très bientôt.</p>
          <p>Cordialement,</p>
          <p style="color: #666; font-size: 12px; margin-top: 30px;">L'équipe En Pleine Flore</p>
        </div>
      `,
    };

    await transporter.sendMail(declineMailOptions);

    // Retourner une page HTML de succès
    res.status(200).send(`
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Rendez-vous refusé</title>
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
              color: #f44336;
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
            <div class="warning-icon">📧</div>
            <h1>Email envoyé</h1>
            <p>Un email a été envoyé à <strong>${email}</strong> pour proposer un nouveau rendez-vous.</p>
            <p style="margin-top: 20px; font-size: 14px; color: #999;">Vous pouvez fermer cette fenêtre.</p>
          </div>
        </body>
      </html>
    `);
  } catch (error) {
    console.error('Error declining appointment:', error);
    res.status(500).json({
      success: false,
      error: 'Erreur lors du refus du rendez-vous',
    });
  }
}
