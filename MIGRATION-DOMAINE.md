# Migration vers en-pleine-flore.com

## ✅ Modifications effectuées

Tous les liens ont été mis à jour de `https://en-pleine-flore.vercel.app` vers `https://en-pleine-flore.com`

### Fichiers modifiés

1. **[SEO.tsx](src/components/SEO.tsx)**
   - URL par défaut : `https://en-pleine-flore.com`
   - Toutes les métadonnées Open Graph pointent vers le nouveau domaine

2. **[_document.tsx](src/pages/_document.tsx)**
   - Organization Schema : `https://en-pleine-flore.com`
   - Website Schema : `https://en-pleine-flore.com`
   - Logo URL : `https://en-pleine-flore.com/favicon.png`

3. **[produit-unimate.tsx](src/pages/produit-unimate.tsx)**
   - URL SEO : `https://en-pleine-flore.com/produit-unimate`

4. **[sitemap.xml](public/sitemap.xml)**
   - Toutes les URLs : `https://en-pleine-flore.com/*`
   - Toutes les images : `https://en-pleine-flore.com/images/*`

5. **[robots.txt](public/robots.txt)**
   - Sitemap URL : `https://en-pleine-flore.com/sitemap.xml`

## 🚀 Prochaines étapes

### 1. Attendre la propagation DNS (1-2 heures)
- Le domaine est configuré sur Vercel ✅
- Les DNS doivent se propager
- Vérifier l'email de confirmation du registrar

### 2. Tester le nouveau domaine
Une fois la propagation terminée :
```
https://en-pleine-flore.com
```

Devrait afficher votre site avec :
- ✅ HTTPS automatique (SSL)
- ✅ Toutes les pages fonctionnelles
- ✅ Métadonnées correctes

### 3. Déployer les changements
```bash
git add .
git commit -m "🌐 Migration domaine: en-pleine-flore.com"
git push
```

### 4. Mettre à jour Google Search Console
1. Allez sur Google Search Console
2. Ajoutez la nouvelle propriété : `https://en-pleine-flore.com`
3. Soumettez le nouveau sitemap : `https://en-pleine-flore.com/sitemap.xml`
4. Demandez l'indexation des pages principales

### 5. Redirections (optionnel mais recommandé)
Vercel gère automatiquement les redirections :
- `en-pleine-flore.vercel.app` → `en-pleine-flore.com`
- `www.en-pleine-flore.com` → `en-pleine-flore.com`

## 📊 Vérifications

### Vérifier que tout fonctionne
- [ ] `https://en-pleine-flore.com` affiche le site
- [ ] `https://en-pleine-flore.com/robots.txt` accessible
- [ ] `https://en-pleine-flore.com/sitemap.xml` accessible
- [ ] Certificat SSL actif (cadenas dans le navigateur)
- [ ] Email de vérification confirmé

### URLs à tester
- [ ] https://en-pleine-flore.com/
- [ ] https://en-pleine-flore.com/produit-unimate
- [ ] https://en-pleine-flore.com/produit-balance
- [ ] https://en-pleine-flore.com/programme
- [ ] https://en-pleine-flore.com/debuter
- [ ] https://en-pleine-flore.com/pourquoi
- [ ] https://en-pleine-flore.com/tiktok

## 🎯 Résultat attendu

Une fois la propagation DNS terminée :
- ✅ Votre site sera accessible sur `en-pleine-flore.com`
- ✅ Meilleur SEO pour "en pleine flore"
- ✅ URL professionnelle
- ✅ Ancien lien Vercel redirigera automatiquement

## ⏱️ Délai
- **Propagation DNS** : 15 minutes à 48 heures (généralement 1-2 heures)
- **Indexation Google** : 3-7 jours après soumission

## 📝 Notes importantes
- L'ancien lien `en-pleine-flore.vercel.app` continuera de fonctionner
- Vercel redirigera automatiquement vers le nouveau domaine
- Aucune perte de trafic ou de SEO

**Tout est prêt ! Il ne reste plus qu'à attendre la propagation DNS.** 🚀
