import type { NextApiRequest, NextApiResponse } from 'next';
import { google } from 'googleapis';
import { Resend } from 'resend';
import path from 'path';

const resend = new Resend(process.env.RESEND_API_KEY);

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
      summary: `✖️A confirmer RDV: ${name}`,
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

    const eventId = calendarResponse.data.id;

    // Email de confirmation au client
    const clientMailHTML = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="text-align: center; padding: 20px 0; border-bottom: 2px solid #f97316;">
            <img src="https://en-pleine-flore.com/favicon.png" alt="En Pleine Flore" style="width: 80px; height: 80px;" />
          </div>
          <h2 style="color: #FF9800;">📅 Demande de rendez-vous reçue</h2>
          <p>Bonjour ${name},</p>
          <p>Nous avons bien reçu votre <strong>demande de rendez-vous</strong> pour le :</p>
          <div style="background-color: #fff3e0; padding: 15px; border-radius: 5px; margin: 20px 0; border-left: 4px solid #FF9800;">
            <p style="margin: 5px 0;"><strong>📅 Date souhaitée :</strong> ${new Date(date).toLocaleDateString('fr-FR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
            <p style="margin: 5px 0;"><strong>🕐 Heure souhaitée :</strong> ${time}</p>
          </div>
          <div style="background-color: #e3f2fd; padding: 15px; border-radius: 5px; margin: 20px 0; border-left: 4px solid #2196F3;">
            <p style="margin: 0; color: #1565c0;">
              ℹ️ <strong>Votre rendez-vous n'est pas encore confirmé.</strong><br>
              Nous allons vérifier nos disponibilités et vous enverrons un email de confirmation dans les plus brefs délais.
            </p>
          </div>
          ${message ? `<p><strong>Votre message :</strong><br>${message}</p>` : ''}
          <p>Merci pour votre confiance !</p>
          <p style="color: #666; font-size: 12px; margin-top: 30px;">L'équipe En Pleine Flore</p>
        </div>
      `;

    // Construire les URLs de confirmation/refus
    // Déterminer l'URL de base (Vercel ou localhost)
    let baseUrl;
    if (process.env.VERCEL_URL) {
      // En production sur Vercel
      baseUrl = `https://${process.env.VERCEL_URL}`;
    } else if (process.env.NEXT_PUBLIC_SITE_URL) {
      // Variable d'environnement personnalisée
      baseUrl = process.env.NEXT_PUBLIC_SITE_URL;
    } else {
      // En local
      baseUrl = 'http://localhost:3000';
    }

    const confirmUrl = `${baseUrl}/api/confirm-appointment?email=${encodeURIComponent(email)}&name=${encodeURIComponent(name)}&date=${encodeURIComponent(new Date(date).toLocaleDateString('fr-FR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }))}&time=${encodeURIComponent(time)}&eventId=${encodeURIComponent(eventId || '')}`;
    const declineUrl = `${baseUrl}/api/decline-appointment?email=${encodeURIComponent(email)}&name=${encodeURIComponent(name)}&date=${encodeURIComponent(new Date(date).toLocaleDateString('fr-FR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }))}&time=${encodeURIComponent(time)}&eventId=${encodeURIComponent(eventId || '')}`;

    // Email de notification pour vous (envoyé à 3 adresses)
    const adminMailHTML = `
        <div style="font-family: Arial, sans-serif; max-width: 600px;">
          <div style="text-align: center; padding: 20px 0; border-bottom: 2px solid #f97316;">
            <img src="https://en-pleine-flore.com/favicon.png" alt="En Pleine Flore" style="width: 80px; height: 80px;" />
          </div>
          <h2 style="color: #2196F3;">Nouveau rendez-vous reçu</h2>

          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 8px 0;"><strong>👤 Nom :</strong> ${name}</p>
            <p style="margin: 8px 0;"><strong>📧 Email :</strong> ${email}</p>
            <p style="margin: 8px 0;"><strong>📱 Téléphone :</strong> ${phone || 'Non fourni'}</p>
            <p style="margin: 8px 0;"><strong>📅 Date :</strong> ${new Date(date).toLocaleDateString('fr-FR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
            <p style="margin: 8px 0;"><strong>🕐 Heure :</strong> ${time}</p>
            ${message ? `<p style="margin: 8px 0;"><strong>💬 Message :</strong><br>${message}</p>` : ''}
          </div>

          <p style="font-size: 16px; font-weight: bold; color: #333; margin-top: 30px;">Ce rendez-vous vous convient-il ?</p>

          <div style="text-align: center; margin: 30px 0;">
            <a href="${confirmUrl}" style="display: inline-block; background: #4CAF50; color: white; padding: 14px 32px; text-decoration: none; border-radius: 6px; font-weight: bold; margin: 0 10px; font-size: 16px;">
              ✅ OUI - Confirmer
            </a>
            <a href="${declineUrl}" style="display: inline-block; background: #f44336; color: white; padding: 14px 32px; text-decoration: none; border-radius: 6px; font-weight: bold; margin: 0 10px; font-size: 16px;">
              ❌ NON - Refuser
            </a>
          </div>

          <p style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; color: #666; font-size: 13px;">
            ℹ️ L'événement a été ajouté à votre Google Calendar "RDV En-pleine-flore"
          </p>
        </div>
      `;

    // Envoyer les emails avec Resend
    await resend.emails.send({
      from: 'En Pleine Flore <contact@en-pleine-flore.com>',
      to: email,
      subject: 'Demande de rendez-vous reçue - En Pleine Flore',
      html: clientMailHTML,
    });

    await resend.emails.send({
      from: 'En Pleine Flore <contact@en-pleine-flore.com>',
      to: ['louison.charm@gmail.com', 'mijocharme@gmail.com', 'en.pleine.flore@gmail.com'],
      subject: `Nouveau RDV : ${name} - ${new Date(date).toLocaleDateString('fr-FR')} à ${time}`,
      html: adminMailHTML,
    });

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
