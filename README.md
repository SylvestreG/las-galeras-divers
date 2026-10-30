# Las Galeras Divers - Site Web

Site web statique pour Las Galeras Divers, centre de plongée PADI à Las Galeras, République Dominicaine.

## 🌊 Caractéristiques

- **React** - Framework moderne pour une UI interactive
- **Vite** - Build tool rapide pour génération de site statique
- **Multilingue** - 🇫🇷 Français, 🇬🇧 English, 🇪🇸 Español avec sélecteur intégré
- **Responsive Design** - Compatible mobile, tablette et desktop
- **SEO Optimisé** - Meta tags, structured data, et keywords optimisés
- **Composants Modulaires** - Architecture maintenable et réutilisable
- **Configuration JSON** - Tarifs et liens sociaux facilement modifiables
- **Charte Graphique** - Couleurs orange (#F5A623) et turquoise (#4ECDC4)

## 📋 Prérequis

- Node.js 16+ et npm/yarn installés
- Un navigateur web moderne

## 🚀 Installation

1. **Installer les dépendances**
```bash
npm install
```

## 💻 Développement

Lancer le serveur de développement :

```bash
npm run dev
```

Le site sera accessible à l'adresse `http://localhost:5173`

## 🏗️ Build Production

Générer les fichiers statiques pour la production :

```bash
npm run build
```

Les fichiers statiques seront générés dans le dossier `dist/`

## 👀 Prévisualisation

Prévisualiser le build de production localement :

```bash
npm run preview
```

## 📦 Déploiement

Le site est entièrement statique et peut être déployé sur n'importe quel serveur web ou plateforme d'hébergement :

### Option 1: Serveur Web Traditionnel (Apache, Nginx, etc.)

1. Générer le build : `npm run build`
2. Copier le contenu du dossier `dist/` vers votre serveur web
3. Configurer votre serveur pour servir les fichiers

### Option 2: Netlify

1. Connecter votre dépôt Git à Netlify
2. Configuration de build :
   - Build command: `npm run build`
   - Publish directory: `dist`
3. Déployer !

### Option 3: Vercel

1. Installer Vercel CLI : `npm i -g vercel`
2. Lancer : `vercel`
3. Suivre les instructions

### Option 4: GitHub Pages

1. Installer gh-pages : `npm install -D gh-pages`
2. Ajouter dans `package.json` :
```json
"scripts": {
  "deploy": "npm run build && gh-pages -d dist"
}
```
3. Déployer : `npm run deploy`

### Option 5: Hébergement Simple (FTP)

1. `npm run build`
2. Uploader le contenu du dossier `dist/` via FTP
3. C'est tout !

## 🌍 Système Multilingue

Le site est disponible en **3 langues** :
- 🇫🇷 **Français** (langue par défaut)
- 🇬🇧 **English**
- 🇪🇸 **Español**

Un sélecteur de langue est intégré dans le header. La préférence linguistique est sauvegardée automatiquement.

### Modifier les Traductions

Éditer les fichiers dans `src/locales/` :
- `fr.json` - Traductions françaises
- `en.json` - English translations
- `es.json` - Traducciones españolas

**Exemple :**
```json
{
  "hero": {
    "title": "Plongez au Cœur d'un",
    "cta1": "Réserver Maintenant"
  }
}
```

📖 **Guide complet** : Voir `MULTILINGUAL_GUIDE.md` pour plus de détails

## ⚙️ Configuration

### Modifier les Tarifs et Informations

Éditer le fichier `src/config.json` :

```json
{
  "siteInfo": {
    "phone": "+1 829 675 3260",
    "email": "contact@las-galeras-divers.com",
    ...
  },
  "socialMedia": {
    "instagram": "https://www.instagram.com/Lasgalerasdivers",
    "facebook": "https://www.facebook.com/Lasgalerasdivers",
    ...
  },
  "pricing": {
    "services": [
      {
        "name": "Discovery / Baptême",
        "price": 5000,
        ...
      }
    ]
  }
}
```

### Modifier les Images

Remplacer les images dans `public/assets/` :

- `logo.png` - Logo du centre
- `hero-bg.jpg` - Image de fond de la page d'accueil
- `about-main.jpg` - Image section À propos
- `gallery-1.jpg` à `gallery-9.jpg` - Images de la galerie
- `bapteme.jpg`, `formation.jpg`, `fundive.jpg`, `night-dive.jpg` - Images des services

### Modifier les Couleurs

Éditer les variables CSS dans `src/index.css` :

```css
:root {
  --primary-orange: #F5A623;
  --primary-turquoise: #4ECDC4;
  --secondary-blue: #3A9FC7;
  ...
}
```

## 📁 Structure du Projet

```
las-galeras-divers/
├── public/
│   ├── assets/           # Images et ressources
│   └── favicon.png       # Favicon du site
├── src/
│   ├── components/       # Composants React
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Services.jsx
│   │   ├── Pricing.jsx
│   │   ├── Gallery.jsx
│   │   ├── Testimonials.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   └── LanguageSwitcher.jsx
│   ├── contexts/         # React Contexts
│   │   └── LanguageContext.jsx  # Système multilingue
│   ├── locales/          # Fichiers de traduction
│   │   ├── fr.json       # Français
│   │   ├── en.json       # English
│   │   └── es.json       # Español
│   ├── App.jsx          # Composant principal
│   ├── App.css          # Styles globaux
│   ├── index.css        # Variables CSS et styles de base
│   ├── main.jsx         # Point d'entrée React
│   └── config.json      # Configuration (prix, liens)
├── index.html           # Template HTML avec SEO
├── package.json         # Dépendances
├── vite.config.js       # Configuration Vite
└── README.md           # Ce fichier
```

## 🎨 Composants

### Header
Navigation sticky avec menu mobile responsive

### Hero
Section d'accueil avec image de fond et CTA

### About
Présentation du centre avec statistiques

### Services
Grid de cartes présentant les services

### Pricing
Tarifs avec filtres par catégorie

### Gallery
Galerie photos avec lightbox

### Testimonials
Témoignages clients

### Contact
Informations de contact et carte

### Footer
Footer avec liens et informations

## 🔍 SEO

Le site inclut :
- Meta tags optimisés (title, description, keywords)
- Open Graph tags pour les réseaux sociaux
- Structured Data (JSON-LD) pour les moteurs de recherche
- Tags géographiques pour le référencement local
- Sitemap automatique via Vite

## 🌐 Navigateurs Supportés

- Chrome (dernières versions)
- Firefox (dernières versions)
- Safari (dernières versions)
- Edge (dernières versions)
- Navigateurs mobiles (iOS Safari, Chrome Android)

## 📱 Responsive Design

Le site s'adapte automatiquement à toutes les tailles d'écran :
- Mobile : < 768px
- Tablette : 768px - 968px
- Desktop : > 968px

## 🐛 Dépannage

### Le site ne démarre pas
```bash
# Supprimer node_modules et réinstaller
rm -rf node_modules package-lock.json
npm install
```

### Les images ne s'affichent pas
- Vérifier que les images sont dans `public/assets/`
- Vérifier les chemins dans les composants (commencent par `/assets/`)

### Erreur de build
```bash
# Nettoyer le cache Vite
rm -rf node_modules/.vite
npm run build
```

## 📞 Support

Pour toute question sur le code :
- Consulter la documentation de [React](https://react.dev)
- Consulter la documentation de [Vite](https://vitejs.dev)

Pour les questions sur le centre de plongée :
- Email : contact@las-galeras-divers.com
- Téléphone : +1 829 675 3260
- Instagram/Facebook : @Lasgalerasdivers

## 📄 Licence

© 2025 Las Galeras Divers. Tous droits réservés.

---

**Plongez au Cœur d'un Paradis Préservé** 🌊🐠🤿


## 🏝️ Page « Découvrir Las Galeras »

La page `/que-faire-a-las-galeras/` (entrée de menu « Découvrir Las Galeras ») présente les plages, activités et excursions de Las Galeras et de la péninsule de Samaná, en dehors de la plongée. Elle est purement informative : pas de tarifs, pas de réservation.

- **Textes** : clé `discover` (et `seo.discover` pour le titre/description) dans `src/locales/fr.json`, `en.json`, `es.json`, `de.json` et `it.json` (les cinq langues sont traduites).
- **Structure** : liste des plages et activités dans `src/data/discoverSections.js`, composant `src/pages/DiscoverPage.jsx`.
- **Photos** : déposer un fichier `public/assets/discover-<slug>.webp` et il est utilisé automatiquement au prochain build (comme la galerie). Slugs disponibles : `hero`, `playa-rincon`, `playa-fronton`, `playa-madama`, `playa-colorada`, `la-playita`, `hiking`, `climbing`, `el-limon`, `horse-riding`, `quad-buggy`, `whales`, `boat-trips`, `fishing`, `ziplines`, `samana-cayo-levantado`, `santo-domingo`, `gastronomy`. Sans photo, une vignette colorée avec une icône est affichée. `npm run convert-webp` convertit les JPG/PNG déposés dans `public/assets/` en WebP.
- **SEO** : au build, la page est écrite en statique dans `dist/que-faire-a-las-galeras/index.html` avec son propre titre, sa description, ses balises Open Graph et son URL canonique (`vite-plugins/prerender-routes.js`). Elle est déclarée dans `public/sitemap.xml`.

## ❓ Page « FAQ »

La page `/faq-plongee-las-galeras/` (entrée de menu « FAQ ») regroupe 61 questions-réponses sur la plongée à Las Galeras, en 10 thèmes : découvrir la plongée, niveaux et formations PADI, plongées pour les certifiés, sites de plongée, faune et flore, météo, sécurité et santé, organisation des sorties, réservations et annulations, pourquoi choisir Las Galeras Divers.

- **Textes** : clé `faq` (et `seo.faq` pour le titre/description) dans `src/locales/{fr,en,es,de,it}.json`. Chaque question est un objet `{ "q": "…", "a": [ … ] }` ; une réponse est une liste de blocs : un texte (paragraphe), `{ "list": [ … ] }` (liste à puces) ou `{ "table": { "headers": [ … ], "rows": [[ … ]] } }` (tableau). Ajouter, retirer ou réordonner des questions se fait directement dans ces fichiers, dans les cinq langues.
- **Structure** : ordre et icônes des thèmes dans `src/data/faqSections.js`, composant `src/pages/FaqPage.jsx` (sommaire par thème, accordéon, liens directs vers un thème `#safety` ou une question `#safety-q9`).
- **Photo du bandeau** : `public/assets/gallery-4.webp` (constante `FAQ_HERO_IMAGE` dans `src/data/faqSections.js`).
- **SEO** : version statique `dist/faq-plongee-las-galeras/index.html` avec titre, description, Open Graph, URL canonique et données structurées `FAQPage` (schema.org, générées par `vite-plugins/faq-json-ld.js`) ; entrée dans `public/sitemap.xml`.
