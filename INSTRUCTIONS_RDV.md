# Configuration du système de prise de rendez-vous

## Ce qui a été créé ✅

1. **Page frontend** : [/rendez-vous](src/pages/rendez-vous.tsx)
   - Formulaire de prise de RDV avec date/heure
   - Validation des champs
   - Messages de confirmation/erreur

2. **API route** : [/api/create-appointment](src/pages/api/create-appointment.ts)
   - Création automatique d'événement Google Calendar
   - Envoi d'emails de confirmation (client + vous)
   - Invitation Google Calendar automatique

## Configuration requise 🔧

### Étape 1 : Créer un Gmail dédié (RECOMMANDÉ)

1. Allez sur https://accounts.google.com/signup
2. Créez un nouveau compte Gmail, par exemple :
   - `contact.enpleinflore@gmail.com`
   - `rdv.enpleinflore@gmail.com`
   - Ou un nom similaire de votre choix

### Étape 2 : Activer la validation en 2 étapes

1. Connectez-vous à votre nouveau Gmail
2. Allez sur https://myaccount.google.com/security
3. Cliquez sur "Validation en 2 étapes"
4. Suivez les instructions pour l'activer (nécessaire pour les mots de passe d'application)

### Étape 3 : Générer un mot de passe d'application

1. Une fois la validation en 2 étapes activée, allez sur :
   https://myaccount.google.com/apppasswords
2. Dans "Sélectionner une application", choisissez "Mail"
3. Dans "Sélectionner un appareil", choisissez "Autre" et entrez "Site En Pleine Flore"
4. Cliquez sur "Générer"
5. **Copiez le mot de passe de 16 caractères** (format : xxxx xxxx xxxx xxxx)
6. **IMPORTANT** : Vous avez déjà le mot de passe : `zgpl pmzl jkqf yyrc`

### Étape 4 : Configurer les variables d'environnement

#### En local (développement)

Créez ou modifiez le fichier `.env.local` à la racine du projet :

```bash
# Google API Credentials (déjà configuré)
GOOGLE_CREDENTIALS={"type":"service_account",...}

# Gmail pour envoi d'emails
GMAIL_USER=votre.nouveau.gmail@gmail.com
GMAIL_APP_PASSWORD=zgpl pmzl jkqf yyrc
```

Remplacez `votre.nouveau.gmail@gmail.com` par l'adresse Gmail que vous avez créée.

#### En production (Vercel)

1. Allez dans votre dashboard Vercel
2. Sélectionnez votre projet
3. Allez dans **Settings** > **Environment Variables**
4. Ajoutez ces deux variables :
   - `GMAIL_USER` = votre.nouveau.gmail@gmail.com
   - `GMAIL_APP_PASSWORD` = zgpl pmzl jkqf yyrc
5. Redéployez votre application

### Étape 5 : Activer l'API Google Calendar

1. Allez sur https://console.cloud.google.com/
2. Sélectionnez le projet qui contient vos credentials Google actuels
3. Allez dans **API et services** > **Bibliothèque**
4. Recherchez "Google Calendar API"
5. Cliquez sur "Activer"

**IMPORTANT** : Les credentials de votre fichier `google-credentials.json` doivent avoir les permissions Calendar. Le code a déjà été configuré pour utiliser le bon scope.

### Étape 6 : Partager le Calendar avec votre ami

1. Ouvrez Google Calendar : https://calendar.google.com
2. Connectez-vous avec le compte associé à `google-credentials.json`
3. Sur la gauche, trouvez votre calendrier principal
4. Cliquez sur les 3 points à côté > "Paramètres et partage"
5. Dans "Partager avec des personnes en particulier", cliquez "Ajouter des contacts"
6. Entrez l'email de votre ami
7. Choisissez le niveau d'accès : "Apporter des modifications aux événements" (pour qu'il puisse modifier) ou "Voir tous les détails de l'événement" (lecture seule)
8. Cliquez "Envoyer"

Votre ami recevra un email et pourra voir tous les RDV dans son propre Google Calendar !

## Comment tester 🧪

1. Démarrez votre serveur en local :
   ```bash
   npm run dev
   ```

2. Allez sur http://localhost:3000/rendez-vous

3. Remplissez le formulaire avec un email de test (le vôtre)

4. Vérifiez :
   - ✅ Vous recevez un email de confirmation
   - ✅ Vous recevez une invitation Google Calendar
   - ✅ L'événement apparaît dans votre Google Calendar
   - ✅ Votre ami voit aussi l'événement (si vous avez partagé le calendar)

## Structure du RDV dans Google Calendar 📅

Chaque rendez-vous créé contient :
- **Titre** : "RDV avec [Nom du client]"
- **Description** : Nom, email, téléphone, message du client
- **Participants** : L'email du client (il reçoit l'invitation automatiquement)
- **Durée** : 1 heure (modifiable dans le code si besoin)
- **Rappels** :
  - Email 1 jour avant
  - Notification 30 minutes avant

## Emails envoyés 📧

### Au client :
- Email de confirmation joli avec les détails du RDV
- Invitation Google Calendar (automatique via l'API)

### À vous :
- Email de notification avec toutes les infos du client
- Visible dans votre Google Calendar partagé avec votre ami

## Personnalisation possible 🎨

### Modifier la durée du RDV
Dans [create-appointment.ts](src/pages/api/create-appointment.ts) ligne 50 :
```typescript
endDateTime.setHours(startDateTime.getHours() + 1); // Changez +1 en +0.5 pour 30 min
```

### Ajouter un lien Zoom automatique
Dans le même fichier, ajoutez dans la description de l'événement :
```typescript
description: `
Nom: ${name}
Email: ${email}
Lien Zoom: https://zoom.us/j/VOTRE_ID_ZOOM

Message:
${message || 'Aucun message'}
`.trim(),
```

### Modifier le template email
Modifiez les sections `clientMailOptions` et `adminMailOptions` dans [create-appointment.ts](src/pages/api/create-appointment.ts)

## Dépannage 🔧

### "Error creating appointment"
- Vérifiez que l'API Google Calendar est activée
- Vérifiez que `GMAIL_USER` et `GMAIL_APP_PASSWORD` sont bien configurés
- Regardez les logs dans la console

### Les emails ne partent pas
- Vérifiez que vous avez bien créé un mot de passe d'application (pas votre mot de passe Gmail normal)
- Vérifiez que la validation en 2 étapes est activée
- Testez avec https://ethereal.email/ pour debug

### L'événement n'apparaît pas dans Calendar
- Vérifiez que l'API Calendar est activée dans Google Cloud Console
- Vérifiez que votre `google-credentials.json` a les bonnes permissions
- Le scope Calendar est déjà ajouté dans le code

## Support 💬

Si vous avez des questions ou des problèmes, vérifiez :
1. Les logs du serveur (`npm run dev`)
2. La console du navigateur (F12)
3. Les emails de Google si l'API a été refusée

## Sécurité 🔒

**IMPORTANT** :
- Ne commitez JAMAIS le fichier `.env.local` dans Git
- Ne partagez JAMAIS votre `GMAIL_APP_PASSWORD`
- Le fichier `.env.local` est déjà dans `.gitignore`
