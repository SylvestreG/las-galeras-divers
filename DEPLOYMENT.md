# 🚀 Guide de Déploiement - Las Galeras Divers

## 🆓 Solutions d'Hébergement Gratuites

### Option 1: GitHub Pages (Recommandé) ⭐

#### Avantages
- ✅ 100% gratuit
- ✅ HTTPS automatique
- ✅ Déploiement automatique via Git
- ✅ Domaine : `https://sylvestreg.github.io/las-galeras-divers/`
- ✅ Possibilité d'ajouter un domaine personnalisé

#### Configuration Automatique

Le site est déjà configuré pour GitHub Pages ! Un workflow GitHub Actions a été créé.

**Étapes pour activer :**

1. **Aller sur GitHub** : https://github.com/SylvestreG/las-galeras-divers

2. **Activer GitHub Pages** :
   - Aller dans `Settings` > `Pages`
   - Source : `GitHub Actions`
   - Sauvegarder

3. **C'est tout !** 🎉
   - Le site se déploiera automatiquement à chaque push
   - URL : `https://sylvestreg.github.io/las-galeras-divers/`

#### Déploiement Manuel

Si vous préférez déployer manuellement :

```bash
# Installer gh-pages
npm install -D gh-pages

# Ajouter dans package.json
"scripts": {
  "deploy": "npm run build && gh-pages -d dist"
}

# Déployer
npm run deploy
```

#### Domaine Personnalisé

Pour utiliser `www.las-galeras-divers.com` :

1. Créer un fichier `public/CNAME` avec :
   ```
   www.las-galeras-divers.com
   ```

2. Configurer DNS chez votre registrar :
   ```
   Type: CNAME
   Name: www
   Value: sylvestreg.github.io
   ```

3. Dans GitHub Settings > Pages > Custom domain :
   - Entrer : `www.las-galeras-divers.com`
   - Cocher "Enforce HTTPS"

---

### Option 2: Netlify 🌐

#### Avantages
- ✅ 100% gratuit (100 GB/mois)
- ✅ Déploiement en 1 clic
- ✅ Domaine gratuit : `las-galeras-divers.netlify.app`
- ✅ Domaine personnalisé gratuit
- ✅ Formulaires, redirections, fonctions serverless

#### Déploiement via GitHub

1. **Aller sur** : https://netlify.com
2. **Connecter GitHub** : "New site from Git"
3. **Sélectionner** : `SylvestreG/las-galeras-divers`
4. **Build settings** :
   - Build command: `npm run build`
   - Publish directory: `dist`
5. **Deploy !** 🚀

#### Déploiement Manuel (Drag & Drop)

```bash
# Builder localement
npm run build

# Aller sur netlify.com/drop
# Glisser le dossier 'dist'
```

#### Configuration avec netlify.toml

Créer `netlify.toml` à la racine :

```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[build.environment]
  NODE_VERSION = "18"
```

---

### Option 3: Vercel ⚡

#### Avantages
- ✅ 100% gratuit
- ✅ Performance optimale
- ✅ Edge Network global
- ✅ Domaine gratuit : `las-galeras-divers.vercel.app`

#### Déploiement via GitHub

1. **Aller sur** : https://vercel.com
2. **Import Project** : Connecter GitHub
3. **Sélectionner** : `SylvestreG/las-galeras-divers`
4. **Framework Preset** : Vite
5. **Deploy !** 🚀

#### Déploiement via CLI

```bash
# Installer Vercel CLI
npm i -g vercel

# Déployer
vercel

# Production
vercel --prod
```

---

### Option 4: Cloudflare Pages ☁️

#### Avantages
- ✅ 100% gratuit (illimité)
- ✅ Réseau CDN ultra-rapide
- ✅ Analytics gratuit

#### Déploiement

1. **Aller sur** : https://pages.cloudflare.com
2. **Create a project** : Connecter GitHub
3. **Build settings** :
   - Build command: `npm run build`
   - Build output: `dist`
4. **Save and Deploy** 🚀

---

### Option 5: Render 🎨

#### Avantages
- ✅ 100% gratuit
- ✅ SSL automatique
- ✅ Déploiement continu

#### Déploiement

1. **Aller sur** : https://render.com
2. **New Static Site** : Connecter GitHub
3. **Build Command** : `npm run build`
4. **Publish Directory** : `dist`
5. **Create Static Site** 🚀

---

## 📊 Comparaison des Solutions

| Solution | Gratuit | Bande Passante | Build Time | Domaine Custom | Facilité |
|----------|---------|----------------|------------|----------------|----------|
| **GitHub Pages** | ✅ | Illimité | 2-3 min | ✅ | ⭐⭐⭐⭐⭐ |
| **Netlify** | ✅ | 100 GB/mois | 1-2 min | ✅ | ⭐⭐⭐⭐⭐ |
| **Vercel** | ✅ | 100 GB/mois | 1-2 min | ✅ | ⭐⭐⭐⭐⭐ |
| **Cloudflare** | ✅ | Illimité | 2-3 min | ✅ | ⭐⭐⭐⭐ |
| **Render** | ✅ | 100 GB/mois | 3-4 min | ✅ | ⭐⭐⭐⭐ |

---

## 🎯 Notre Recommandation

### Pour Simplicité Maximum
👉 **GitHub Pages** - Déjà configuré, 0 configuration supplémentaire

### Pour Fonctionnalités Avancées
👉 **Netlify** - Formulaires, redirections, analytics gratuits

### Pour Performance Maximum
👉 **Vercel** - Edge Network ultra-rapide

---

## 🔧 Configuration pour Chaque Solution

### Adapter le base URL

Le fichier `vite.config.js` est configuré pour GitHub Pages :

```js
export default defineConfig({
  base: '/las-galeras-divers/', // Pour GitHub Pages
  // base: '/', // Pour les autres (Netlify, Vercel, etc.)
})
```

**Pour Netlify/Vercel/Cloudflare/Render** :
Changer `base: '/las-galeras-divers/'` en `base: '/'`

---

## 📝 Workflow de Déploiement

### Développement
```bash
git add .
git commit -m "Update website"
git push origin main
```

### GitHub Pages
- ✅ Déploiement automatique à chaque push
- 📍 URL : https://sylvestreg.github.io/las-galeras-divers/

### Netlify/Vercel
- ✅ Déploiement automatique à chaque push
- 📍 Preview pour chaque Pull Request
- 📍 Production sur merge to main

---

## 🌐 Domaine Personnalisé

### Acheter un Domaine

**Recommandations** :
- **Namecheap** : ~10€/an
- **OVH** : ~12€/an
- **Cloudflare** : Prix coûtant
- **Google Domains** : ~12€/an

### Configurer DNS

Pour `www.las-galeras-divers.com` :

```
Type: CNAME
Name: www
Value: [votre-domaine-hebergeur]

Exemples:
- GitHub Pages: sylvestreg.github.io
- Netlify: [site-name].netlify.app
- Vercel: cname.vercel-dns.com
```

Pour domaine apex `las-galeras-divers.com` :

```
Type: A (ou ALIAS/ANAME)
Name: @
Value: [IP-hebergeur]
```

---

## 🔒 HTTPS / SSL

Tous les hébergeurs mentionnés fournissent **HTTPS gratuit** via Let's Encrypt :
- ✅ Certificat SSL automatique
- ✅ Renouvellement automatique
- ✅ Redirection HTTP → HTTPS

---

## 📈 Analytics Gratuits

### Google Analytics
Ajouter dans `index.html` :
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
```

### Plausible (Privacy-friendly)
- Alternative respectueuse de la vie privée
- Tableau de bord simple
- Plan gratuit pour petits sites

### Netlify Analytics
- Intégré avec Netlify
- Pas de cookies
- Données serveur

---

## ✅ Checklist Avant Déploiement

- [ ] Tester localement : `npm run build && npm run preview`
- [ ] Vérifier toutes les langues (FR/EN/ES)
- [ ] Tester sur mobile
- [ ] Vérifier tous les liens
- [ ] Images optimisées
- [ ] Meta tags SEO vérifiés
- [ ] Configuration base URL correcte
- [ ] .gitignore à jour

---

## 🆘 Troubleshooting

### Page blanche après déploiement

**Solution** : Vérifier le `base` dans `vite.config.js`

### Images ne s'affichent pas

**Solution** : Vérifier que les chemins commencent par `/assets/`

### 404 sur rafraîchissement de page

**Solution** : Configurer les redirections (déjà fait pour GitHub Pages)

---

## 📞 Support

- **GitHub Pages** : https://docs.github.com/pages
- **Netlify** : https://docs.netlify.com
- **Vercel** : https://vercel.com/docs
- **Cloudflare** : https://developers.cloudflare.com/pages

---

**Le site est prêt à être déployé ! Choisissez votre solution préférée et lancez-vous ! 🚀**

