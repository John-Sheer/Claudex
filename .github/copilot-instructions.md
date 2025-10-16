# Instructions Copilot pour le Projet Claudex

## Architecture du Projet

Ce projet est une application web simple avec la structure suivante :

```
📁 Claudex/
├── 📄 index.html      # Page d'accueil principale
├── 📄 BB.html         # Page des produits BB
├── 📄 SNB.html        # Page des produits SNB
├── 📁 assets/         # Ressources statiques
│   ├── 📁 CSS/        # Feuilles de style
│   │   └── style.css
│   └── 📁 js/         # Scripts JavaScript
│       ├── main.js
│       └── script.js
└── 📁 media/          # Contenu multimédia
```

## Technologies Utilisées

- **Frontend**: HTML5 avec Bootstrap 5.3.2
- **CSS**: Utilisation de Bootstrap pour le styling de base + CSS personnalisé
- **JavaScript**: Scripts personnalisés dans le dossier `assets/js/`
- **Serveur**: XAMPP (Apache) pour le développement local

## Conventions Importantes

1. **Structure des Pages**:
   - Les pages principales sont à la racine du projet
   - Conventions de nommage: `index.html` (accueil), `BB.html` (produits BB), `SNB.html` (produits SNB)

2. **Assets**:
   - Les ressources statiques sont organisées dans le dossier `assets/`
   - CSS personnalisé dans `assets/CSS/style.css`
   - JavaScript dans `assets/js/`

3. **Navigation**:
   - Navigation principale centrée avec des boutons Bootstrap
   - Utilisation des classes Bootstrap pour la mise en page responsive

## Développement

### Configuration Locale
- Le projet doit être placé dans le dossier `htdocs` de XAMPP
- Accès via `http://localhost/Claudex/`

### Patterns de Style
- Utilisation intensive des classes Bootstrap pour la mise en page
- Classes communes : 
  - `container` pour le conteneur principal
  - `text-center` pour le centrage du texte
  - `d-flex` pour la disposition flexible
  - Classes Bootstrap de spacing (`mb-4`, `gap-3`, etc.)

## Points d'Intégration

1. **Bootstrap CDN**:
   ```html
   <!-- CSS -->
   <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
   <!-- JavaScript -->
   <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
   ```

2. **Ressources Locales**:
   - CSS personnalisé: `<link rel="stylesheet" href="styles.css">`
   - Scripts JS: Importés selon les besoins depuis `assets/js/`