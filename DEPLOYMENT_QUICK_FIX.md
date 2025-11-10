# 🚀 Fix des Erreurs 404 et CSP

## Problèmes Identifiés
1. ❌ Chemins en double : `/las-galeras-divers/las-galeras-divers/`
2. ❌ Google Fonts bloquées par CSP
3. ❌ Fichiers 404

## ✅ Solution Rapide

### Étape 1 : Rebuild du projet

```bash
cd /Users/syl/cedric
npm run build
```

### Étape 2 : Déployer sur le serveur

```bash
# Se connecter au serveur
ssh user@votre-serveur

# Aller dans le dossier du site
cd /var/www/las-galeras-divers

# Supprimer l'ancien dist
rm -rf dist

# Uploader le nouveau dist depuis votre machine locale
# Sur votre Mac, depuis le dossier cedric :
scp -r dist user@votre-serveur:/var/www/las-galeras-divers/
```

### Étape 3 : Mettre à jour la configuration nginx

```bash
# Sur le serveur
sudo nano /etc/nginx/sites-available/las-galeras-divers.com

# Copier le contenu du fichier nginx.conf (voir ci-dessous)
# Sauvegarder : Ctrl+O, Enter, Ctrl+X

# Tester la configuration
sudo nginx -t

# Si OK, recharger nginx
sudo systemctl reload nginx
```

### Étape 4 : Vérifier

Ouvrir `https://www.las-galeras-divers.com` dans votre navigateur.

## 📝 Configuration Nginx Complète

Voir le fichier `nginx.conf` dans ce dossier.

**Points clés :**
- ✅ `root` pointe vers `/var/www/las-galeras-divers/dist`
- ✅ CSP autorise Google Fonts
- ✅ SPA routing configuré
- ✅ Compression gzip activée
- ✅ Cache des assets configuré

## 🔧 Alternative : Déploiement avec rsync

```bash
# Depuis votre Mac
rsync -avz --delete dist/ user@votre-serveur:/var/www/las-galeras-divers/dist/
```

## ⚠️ Si vous avez encore des erreurs

Vider le cache du navigateur :
- Chrome/Edge : `Cmd+Shift+Delete` (Mac) ou `Ctrl+Shift+Delete` (Windows)
- Cocher "Images et fichiers en cache"
- Cliquer sur "Effacer les données"

## 📱 Test Post-Déploiement

1. ✅ La page se charge sans erreur 404
2. ✅ Les Google Fonts s'affichent correctement
3. ✅ Pas d'erreur CSP dans la console
4. ✅ Les images se chargent
5. ✅ Le changement de langue fonctionne

