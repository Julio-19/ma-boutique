# 🛍️ Ma Boutique — Site de vente en ligne

Site de boutique en ligne simple avec paiement à la livraison.  
Publié gratuitement sur **GitHub Pages**.

## 📁 Structure
```
boutique/
├── index.html        ← Page produit (lien à partager sur Facebook)
├── admin.html        ← Dashboard admin (accès privé)
├── css/style.css     ← Styles
└── js/data.js        ← Données produits + numéro WhatsApp
```

## ⚙️ Configuration avant publication

### 1. Numéro WhatsApp
Dans `js/data.js`, ligne 3 :
```js
const WHATSAPP_NUMBER = "22900000000"; // ← Ton numéro sans +
```

### 2. Mot de passe admin
Dans `admin.html`, cherche :
```js
const ADMIN_PWD = "admin1234"; // ← Change ce mot de passe !
```

### 3. Nom de ta boutique
Dans `index.html` et `admin.html`, cherche :
```html
<a href="index.html" class="logo">✨ Ma Boutique</a>
```

### 4. Produits par défaut
Modifie le tableau `DEFAULT_PRODUCTS` dans `js/data.js`.

## 🚀 Publication sur GitHub Pages (GRATUIT)

1. Crée un compte sur [github.com](https://github.com)
2. Crée un **nouveau dépôt public** (ex : `ma-boutique`)
3. Upload tous les fichiers du dossier
4. Va dans **Settings → Pages → Branch: main → Save**
5. Ton site sera disponible sur :  
   `https://TON-PSEUDO.github.io/ma-boutique/`

## 🔗 Partage Facebook / WhatsApp
Partage le lien direct vers un produit :
```
https://TON-PSEUDO.github.io/ma-boutique/?id=1
https://TON-PSEUDO.github.io/ma-boutique/?id=2
```

## 🔐 Accès admin
```
https://TON-PSEUDO.github.io/ma-boutique/admin.html
```
Mot de passe par défaut : `admin1234` (à changer impérativement !)
