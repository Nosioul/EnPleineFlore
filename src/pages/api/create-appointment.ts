import type { NextApiRequest, NextApiResponse } from 'next';
import { google } from 'googleapis';
import nodemailer from 'nodemailer';
import path from 'path';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { name, email, phone, date, time, message } = req.body;

    // Validation
    if (!name || !email || !date || !time) {
      return res.status(400).json({ message: 'Champs requis manquants' });
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

    const calendar = google.calendar({ version: 'v3', auth });

    // Créer la date/heure de début et fin (RDV de 1h par défaut)
    const [hours, minutes] = time.split(':');
    const startDateTime = new Date(date);
    startDateTime.setHours(parseInt(hours), parseInt(minutes), 0);

    const endDateTime = new Date(startDateTime);
    endDateTime.setHours(startDateTime.getHours() + 1);

    // Créer l'événement dans Google Calendar
    const event = {
      summary: `RDV avec ${name}`,
      description: `
Nom: ${name}
Email: ${email}
Téléphone: ${phone || 'Non fourni'}

Message:
${message || 'Aucun message'}
      `.trim(),
      start: {
        dateTime: startDateTime.toISOString(),
        timeZone: 'Europe/Paris',
      },
      end: {
        dateTime: endDateTime.toISOString(),
        timeZone: 'Europe/Paris',
      },
      reminders: {
        useDefault: false,
        overrides: [
          { method: 'email', minutes: 24 * 60 }, // 1 jour avant
          { method: 'popup', minutes: 30 }, // 30 min avant
        ],
      },
    };

    const calendarResponse = await calendar.events.insert({
      calendarId: '85c754fb0c43f672ffe00dbfd1e1f1c6dc3e1e25cf34dcc1b81c80ed2f642495@group.calendar.google.com',
      requestBody: event,
      sendUpdates: 'none', // Ne pas envoyer d'invitations via Google Calendar
    });

    // Configurer nodemailer pour Gmail
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD, // Mot de passe d'application Google
      },
    });

    // Email de confirmation au client
    const clientMailOptions = {
      from: process.env.GMAIL_USER,
      to: email,
      subject: 'Confirmation de votre rendez-vous - En Pleine Flore',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #4CAF50;">Rendez-vous confirmé ✓</h2>
          <p>Bonjour ${name},</p>
          <p>Votre rendez-vous a bien été enregistré pour le :</p>
          <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin: 20px 0;">
            <p style="margin: 5px 0;"><strong>Date :</strong> ${new Date(date).toLocaleDateString('fr-FR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
            <p style="margin: 5px 0;"><strong>Heure :</strong> ${time}</p>
          </div>
          <p>Nous vous contacterons prochainement pour confirmer ce rendez-vous.</p>
          ${message ? `<p><strong>Votre message :</strong><br>${message}</p>` : ''}
          <p>À bientôt !</p>
          <p style="color: #666; font-size: 12px; margin-top: 30px;">En Pleine Flore</p>
        </div>
      `,
    };

    // Email de notification pour vous (envoyé à 3 adresses)
    const adminMailOptions = {
      from: process.env.GMAIL_USER,
      to: ['louison.charm@gmail.com', 'mijocharme@gmail.com', 'en.pleine.flore@gmail.com'],
      subject: `Nouveau RDV : ${name} - ${new Date(date).toLocaleDateString('fr-FR')} à ${time}`,
      html: `
        <div style="font-family: Arial, sans-serif;">
          <h2 style="color: #2196F3;">Nouveau rendez-vous reçu</h2>
          <p><strong>Nom :</strong> ${name}</p>
          <p><strong>Email :</strong> ${email}</p>
          <p><strong>Téléphone :</strong> ${phone || 'Non fourni'}</p>
          <p><strong>Date :</strong> ${new Date(date).toLocaleDateString('fr-FR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
          <p><strong>Heure :</strong> ${time}</p>
          ${message ? `<p><strong>Message :</strong><br>${message}</p>` : ''}
          <p style="margin-top: 20px; color: #666;">L'événement a été ajouté à votre Google Calendar.</p>
        </div>
      `,
    };

    // Envoyer les emails
    await transporter.sendMail(clientMailOptions);
    await transporter.sendMail(adminMailOptions);

    res.status(200).json({
      success: true,
      message: 'Rendez-vous créé avec succès',
      eventId: calendarResponse.data.id,
    });
  } catch (error) {
    console.error('Error creating appointment:', error);
    res.status(500).json({
      success: false,
      error: 'Erreur lors de la création du rendez-vous',
    });
  }
}
