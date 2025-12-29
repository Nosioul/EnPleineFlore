# 🚀 GUIDE COMPLET - EN PLEINE FLORE! ❤️🔥

## ✅ CE QUI EST PRÊT :
- ✅ **Site complet avec 5 pages**
- ✅ **Page Balance créée et fonctionnelle**
- ✅ **Tous les imports corrigés** (../components au lieu de @/components)
- ✅ **Vos 8 images intégrées**
- ✅ **Tous les boutons → https://shop2.unicity.com/c/125413749**

---

## 📋 INSTRUCTIONS POUR LANCER LE SITE

### ÉTAPE 1️⃣ : Installer Node.js
1. Allez sur **https://nodejs.org**
2. Téléchargez la version **LTS** 
3. Installez (cliquez "Suivant" partout)

### ÉTAPE 2️⃣ : Ouvrir un terminal
- **Windows** : Clic droit dans le dossier → "Ouvrir dans Terminal"
- **Mac** : Clic droit → "Nouveau terminal au dossier"

### ÉTAPE 3️⃣ : Installer les dépendances
Tapez cette commande :
```bash
npm install
```
Attendez 1-2 minutes ⏰

### ÉTAPE 4️⃣ : Lancer le site
Tapez cette commande :
```bash
npm run dev
```

### ÉTAPE 5️⃣ : Voir votre site !
Ouvrez votre navigateur et allez sur :
```
http://localhost:3000
```

🎉 **C'EST TOUT ! Le site fonctionne !**

---

## 📁 STRUCTURE DU PROJET

```
en-pleine-flore-v2/
├── public/
│   └── images/          ← VOS IMAGES SONT ICI
│       ├── *.jpg
│       └── *.png
├── src/
│   ├── components/      ← Composants réutilisables
│   │   ├── Header.tsx   (Navigation)
│   │   ├── Footer.tsx   (Pied de page)
│   │   ├── SEO.tsx      (Référencement)
│   │   └── Logo.tsx     (Logo SVG)
│   ├── pages/           ← Pages du site
│   │   ├── index.tsx        → http://localhost:3000/
│   │   ├── produit-unimate.tsx  → http://localhost:3000/produit-unimate
│   │   ├── produit-balance.tsx  → http://localhost:3000/produit-balance
│   │   ├── programme.tsx    → http://localhost:3000/programme
│   │   └── pourquoi.tsx     → http://localhost:3000/pourquoi
│   └── styles/
│       └── globals.css  ← Styles Tailwind
├── package.json
├── tailwind.config.js
├── next.config.js
└── tsconfig.json
```

---

## ⚠️ IMPORTANT - CE QUI A ÉTÉ CORRIGÉ

### ✅ Les imports sont maintenant comme ça :
```typescript
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
```

### ❌ PAS comme ça :
```typescript
import Header from '@/components/Header';  // ERREUR
```

---

## 🔧 PERSONNALISATION

### Changer le lien affilié :
1. Ouvrez VS Code (ou n'importe quel éditeur)
2. Faites Ctrl+Shift+F (recherche globale)
3. Recherchez : `https://shop2.unicity.com/c/125413749`
4. Remplacez par votre lien
5. Sauvegardez tous les fichiers

### Changer les images :
1. Allez dans `/public/images/`
2. Remplacez les fichiers par vos propres images
3. Gardez les mêmes noms ou modifiez dans les pages

### Changer les couleurs :
Fichier : `tailwind.config.js`
- Orange : `flore-orange` 
- Vert : `flore-green`

---

## 🌐 METTRE EN LIGNE (GRATUIT!)

### Option 1 : Vercel (le plus simple)
1. Allez sur **https://vercel.com**
2. Créez un compte gratuit
3. Cliquez "New Project"
4. Uploadez votre dossier
5. Cliquez "Deploy"
6. **En ligne en 2 minutes !** ✨

### Option 2 : Netlify
1. Allez sur **https://netlify.com**
2. Glissez votre dossier
3. C'est en ligne !

---

## ❓ PROBLÈMES POSSIBLES

### "npm: command not found"
→ **Solution** : Installez Node.js (étape 1)

### "Port 3000 already in use"
→ **Solution** : 
```bash
npm run dev -- -p 3001
```
Puis allez sur http://localhost:3001

### Page blanche/noire
→ **Solution** : 
1. Arrêtez le serveur (Ctrl+C)
2. Supprimez le dossier `.next`
3. Relancez `npm run dev`

### Erreur 404
→ **Solution** : Allez d'abord sur http://localhost:3000
(pas directement sur /produit-balance)

---

## 📱 TEST MOBILE

Pour tester sur votre téléphone :
1. Trouvez votre IP locale : `ipconfig` (Windows) ou `ifconfig` (Mac)
2. Sur votre téléphone, allez sur : `http://[VOTRE-IP]:3000`
3. Exemple : `http://192.168.1.100:3000`

---

## 🎯 CHECKLIST FINALE

- [ ] Node.js installé ?
- [ ] Terminal ouvert dans le bon dossier ?
- [ ] `npm install` fait ?
- [ ] `npm run dev` lancé ?
- [ ] http://localhost:3000 ouvert ?

Si tout est coché = **ÇA MARCHE !** 🎉

---

## 💬 RAPPEL

**Toutes les pages fonctionnent :**
- ✅ Accueil
- ✅ Unimate (produit)
- ✅ Balance (produit) 
- ✅ Programme Feel Great
- ✅ Pourquoi nous

**Tous les boutons "Acheter" vont vers :**
→ https://shop2.unicity.com/c/125413749

---

**Créé avec ❤️ pour En pleine flore!**
**Le site est 100% FONCTIONNEL !**
