# 🌍 Guide Multilingue - Las Galeras Divers

## Langues Disponibles

Le site est disponible en **3 langues** :
- 🇫🇷 **Français** (par défaut)
- 🇬🇧 **English**
- 🇪🇸 **Español**

## Comment ça Fonctionne

### Sélecteur de Langue

Un sélecteur de langue est intégré dans le header (navigation) du site. Il permet aux visiteurs de :
- Voir la langue actuelle avec son drapeau et code (FR, EN, ES)
- Cliquer pour ouvrir un menu déroulant
- Sélectionner une autre langue

La préférence linguistique est **sauvegardée automatiquement** dans le navigateur (localStorage).

### Structure des Traductions

Les traductions sont organisées dans des fichiers JSON :

```
src/locales/
├── fr.json  # Français
├── en.json  # English
└── es.json  # Español
```

## Modifier les Traductions

### 1. Éditer un Texte Existant

Pour modifier une traduction, éditez le fichier JSON correspondant :

**Exemple - Changer le titre Hero :**

```json
// Dans src/locales/fr.json
{
  "hero": {
    "title": "Plongez au Cœur d'un",
    "titleHighlight": "Paradis Préservé"
  }
}

// Dans src/locales/en.json
{
  "hero": {
    "title": "Dive into the Heart of a",
    "titleHighlight": "Preserved Paradise"
  }
}

// Dans src/locales/es.json
{
  "hero": {
    "title": "Sumérgete en el Corazón de un",
    "titleHighlight": "Paraíso Preservado"
  }
}
```

### 2. Ajouter une Nouvelle Traduction

Pour ajouter un nouveau texte traduit :

**Étape 1 :** Ajouter la clé dans les 3 fichiers JSON

```json
// fr.json
{
  "newSection": {
    "title": "Nouveau Titre",
    "description": "Description en français"
  }
}

// en.json
{
  "newSection": {
    "title": "New Title",
    "description": "Description in English"
  }
}

// es.json
{
  "newSection": {
    "title": "Nuevo Título",
    "description": "Descripción en español"
  }
}
```

**Étape 2 :** Utiliser dans un composant

```jsx
import { useLanguage } from '../contexts/LanguageContext'

const MyComponent = () => {
  const { t } = useLanguage()
  
  return (
    <div>
      <h2>{t('newSection.title')}</h2>
      <p>{t('newSection.description')}</p>
    </div>
  )
}
```

## Structure des Fichiers JSON

Chaque fichier de traduction contient les sections suivantes :

```json
{
  "nav": { ... },           // Navigation du header
  "hero": { ... },          // Section d'accueil
  "about": { ... },         // À propos
  "services": { ... },      // Services (4 services)
  "pricing": { ... },       // Tarifs
  "gallery": { ... },       // Galerie
  "testimonials": { ... },  // Témoignages
  "contact": { ... },       // Contact
  "footer": { ... }         // Footer
}
```

## Utiliser les Traductions dans les Composants

### Import du Hook

```jsx
import { useLanguage } from '../contexts/LanguageContext'
```

### Utilisation Basique

```jsx
const MyComponent = () => {
  const { t, language, changeLanguage } = useLanguage()
  
  return (
    <div>
      {/* Traduire un texte */}
      <h1>{t('hero.title')}</h1>
      
      {/* Afficher la langue actuelle */}
      <p>Current language: {language}</p>
      
      {/* Changer de langue programmatiquement */}
      <button onClick={() => changeLanguage('es')}>
        Switch to Spanish
      </button>
    </div>
  )
}
```

### Accès aux Propriétés Imbriquées

Les traductions utilisent la notation par points :

```jsx
// Pour accéder à services.baptism.title
t('services.baptism.title')

// Pour accéder à about.feature1Title
t('about.feature1Title')
```

## Bonnes Pratiques

### 1. Cohérence des Clés

Utilisez **les mêmes clés** dans les 3 fichiers JSON :

✅ **Bon :**
```json
// Tous les fichiers ont la même structure
{ "hero": { "title": "..." } }
```

❌ **Mauvais :**
```json
// fr.json a "titre", en.json a "title"
```

### 2. Noms de Clés Descriptifs

Utilisez des noms clairs et hiérarchiques :

✅ **Bon :**
```json
{
  "services": {
    "baptism": {
      "title": "...",
      "description": "..."
    }
  }
}
```

❌ **Mauvais :**
```json
{
  "text1": "...",
  "text2": "..."
}
```

### 3. Textes Courts vs Longs

Pour les **textes courts** :
```json
{
  "button": "Réserver"
}
```

Pour les **textes longs** :
```json
{
  "description": "Un long texte peut tenir sur plusieurs lignes dans le JSON. Il sera rendu normalement dans l'interface."
}
```

## Changer la Langue par Défaut

Pour changer la langue par défaut, éditer `src/contexts/LanguageContext.jsx` :

```jsx
const [language, setLanguage] = useState(() => {
  const savedLang = localStorage.getItem('language')
  return savedLang || 'en'  // Changer 'fr' en 'en' ou 'es'
})
```

## SEO et Langues

Le site met automatiquement à jour l'attribut `lang` du HTML selon la langue sélectionnée :

```html
<!-- Français -->
<html lang="fr">

<!-- Anglais -->
<html lang="en">

<!-- Espagnol -->
<html lang="es">
```

Ceci est important pour le SEO et l'accessibilité.

## Ajouter une 4ème Langue

Pour ajouter une nouvelle langue (par exemple l'allemand) :

### Étape 1 : Créer le fichier de traduction

Créer `src/locales/de.json` et traduire tous les textes.

### Étape 2 : Importer dans le Context

```jsx
// Dans src/contexts/LanguageContext.jsx
import fr from '../locales/fr.json'
import en from '../locales/en.json'
import es from '../locales/es.json'
import de from '../locales/de.json'  // Ajouter

const translations = { fr, en, es, de }  // Ajouter 'de'
```

### Étape 3 : Ajouter au sélecteur

```jsx
// Dans src/components/LanguageSwitcher.jsx
const languages = [
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' }  // Ajouter
]
```

## Test des Traductions

Pour tester toutes les langues :

1. Lancer le site : `npm run dev`
2. Cliquer sur le sélecteur de langue dans le header
3. Sélectionner chaque langue et vérifier :
   - Tous les textes sont traduits
   - Aucun texte ne manque
   - Les traductions ont du sens dans le contexte

## Dépannage

### Le texte n'est pas traduit

**Problème :** Un texte reste en français même en anglais.

**Solution :** Vérifier que :
1. La clé existe dans `en.json` et `es.json`
2. Le composant utilise `t('la.bonne.cle')`
3. Pas de fautes de frappe dans la clé

### Le sélecteur de langue ne s'affiche pas

**Solution :** Vérifier que `LanguageSwitcher` est importé dans `Header.jsx`

### La langue ne se sauvegarde pas

**Solution :** Vérifier que le localStorage est activé dans le navigateur (mode navigation privée peut bloquer)

## Exemple Complet

Voici un exemple complet d'ajout d'une nouvelle section traduite :

**1. Ajouter dans les 3 fichiers JSON :**

```json
// fr.json
{
  "newFeature": {
    "title": "Nouvelle Fonctionnalité",
    "subtitle": "Découvrez notre nouveau service",
    "cta": "En savoir plus"
  }
}

// en.json
{
  "newFeature": {
    "title": "New Feature",
    "subtitle": "Discover our new service",
    "cta": "Learn more"
  }
}

// es.json
{
  "newFeature": {
    "title": "Nueva Función",
    "subtitle": "Descubre nuestro nuevo servicio",
    "cta": "Saber más"
  }
}
```

**2. Créer le composant :**

```jsx
import React from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import './NewFeature.css'

const NewFeature = () => {
  const { t } = useLanguage()
  
  return (
    <section className="new-feature">
      <div className="container">
        <h2>{t('newFeature.title')}</h2>
        <p>{t('newFeature.subtitle')}</p>
        <button className="btn btn-primary">
          {t('newFeature.cta')}
        </button>
      </div>
    </section>
  )
}

export default NewFeature
```

**3. Ajouter dans App.jsx :**

```jsx
import NewFeature from './components/NewFeature'

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <NewFeature />  {/* Ajouter ici */}
      ...
    </div>
  )
}
```

---

**Le site est maintenant entièrement multilingue ! 🌍**

Français 🇫🇷 • English 🇬🇧 • Español 🇪🇸

