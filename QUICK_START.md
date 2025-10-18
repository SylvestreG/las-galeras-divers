# 🚀 Démarrage Rapide - Las Galeras Divers

## Installation et Lancement (3 étapes)

### 1. Installer les dépendances
```bash
npm install
```

### 2. Lancer le serveur de développement
```bash
npm run dev
```
→ Ouvrir http://localhost:5173 dans votre navigateur

### 3. Générer le site statique pour production
```bash
npm run build
```
→ Les fichiers seront dans le dossier `dist/`

## 🎯 Modifications Rapides

### 🌍 Changer les Traductions
Éditer les fichiers dans `src/locales/` :
- `fr.json` - Textes en français
- `en.json` - Textes en anglais
- `es.json` - Textes en espagnol

📖 **Guide détaillé** : Voir `MULTILINGUAL_GUIDE.md`

### Changer les Tarifs
Éditer `src/config.json` → section `pricing.services`

### Modifier les Liens Sociaux
Éditer `src/config.json` → section `socialMedia`

### Changer le Téléphone/Email
Éditer `src/config.json` → section `siteInfo`

### Remplacer les Images
Copier vos nouvelles images dans `public/assets/` avec les mêmes noms

### Modifier les Couleurs
Éditer `src/index.css` → variables CSS en haut du fichier

## 📤 Déployer le Site

### Option Simple (FTP)
1. `npm run build`
2. Upload le contenu de `dist/` sur votre serveur

### Option Gratuite (Netlify)
1. Créer un compte sur netlify.com
2. Glisser-déposer le dossier `dist/`
3. C'est en ligne !

### Option GitHub Pages
1. `npm install -D gh-pages`
2. Ajouter `"deploy": "npm run build && gh-pages -d dist"` dans package.json
3. `npm run deploy`

## 📋 Structure des Sections

Le site contient ces sections (dans l'ordre) :
1. **Hero** - Bannière d'accueil avec image de fond
2. **About** - À propos du centre avec statistiques
3. **Services** - Les 4 services principaux (Baptême, Formation, Fun Dive, Nuit)
4. **Pricing** - Tous les tarifs avec filtres
5. **Gallery** - Galerie de 9 photos avec lightbox
6. **Testimonials** - 4 témoignages clients
7. **Contact** - Informations de contact et carte

## 🎨 Charte Graphique

- **Orange Principal** : #F5A623 (boutons, accents)
- **Turquoise** : #4ECDC4 (liens, éléments mer)
- **Bleu Foncé** : #2C3E50 (textes, footer)
- **Bleu Clair** : #E8F6F5 (arrière-plans)

## ✅ Checklist Avant Mise en Ligne

- [ ] Vérifier tous les tarifs dans config.json
- [ ] Tester les 3 langues (FR, EN, ES) avec le sélecteur
- [ ] Vérifier toutes les traductions dans chaque langue
- [ ] Tester tous les liens (Instagram, Facebook, WhatsApp)
- [ ] Vérifier le numéro de téléphone et l'email
- [ ] Remplacer les images si nécessaire
- [ ] Tester le site sur mobile
- [ ] Vérifier les meta tags SEO dans index.html
- [ ] Lancer `npm run build` sans erreur

## 🆘 Problèmes Courants

**Le site ne démarre pas**
```bash
rm -rf node_modules
npm install
npm run dev
```

**Les images ne s'affichent pas**
→ Vérifier que les images sont dans `public/assets/`

**Erreur de build**
```bash
rm -rf node_modules/.vite
npm run build
```

## 📞 Besoin d'Aide ?

- Lire le README.md complet
- Documentation React : https://react.dev
- Documentation Vite : https://vitejs.dev

---

**Bon courage avec votre site ! 🌊**

