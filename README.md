# Infirmière 68000 - Site Web Professionnel

![Next.js](https://img.shields.io/badge/Next.js-16.0.0-black)
![React](https://img.shields.io/badge/React-19.2.0-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-blue)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.23.24-purple)

Site web professionnel pour une infirmière libérale dans le Haut-Rhin (68000), développé avec Next.js et Strapi CMS.

## 🚀 Fonctionnalités

-  **Design moderne et responsive** avec Tailwind CSS
-  **Navigation animée** avec barre glissante utilisant Framer Motion
-  **Formulaire de contact** avec validation et envoi d'emails
-  **CMS Strapi** pour la gestion de contenu
-  **Animations fluides** et transitions
-  **SEO optimisé** avec métadonnées dynamiques
-  **Performance optimisée** avec Next.js 16

## 🛠️ Technologies

### Frontend

-  **Next.js 16** - Framework React
-  **React 19** - Bibliothèque UI
-  **Tailwind CSS 4** - Framework CSS
-  **Framer Motion** - Animations
-  **React Email** - Templates d'emails

### Backend

-  **Strapi CMS** - Headless CMS
-  **Resend** - Service d'envoi d'emails
-  **Node.js** - Runtime JavaScript

## 📦 Installation

### Prérequis

-  Node.js 18+
-  npm ou pnpm
-  Git

### 1. Cloner le repository

```bash
git clone https://github.com/votre-username/infirmiere68000.git
cd infirmiere68000
```

### 2. Installation des dépendances

#### Frontend

```bash
cd frontend
npm install
```

#### Backend (Strapi)

```bash
cd backend
npm install
```

### 3. Configuration des variables d'environnement

#### Frontend (.env.local)

```env
NEXT_PUBLIC_STRAPI_URL=http://localhost:1337
RESEND_API_KEY=your_resend_api_key
```

#### Backend (.env)

```env
HOST=0.0.0.0
PORT=1337
APP_KEYS=your_app_keys
API_TOKEN_SALT=your_api_token_salt
ADMIN_JWT_SECRET=your_admin_jwt_secret
TRANSFER_TOKEN_SALT=your_transfer_token_salt
JWT_SECRET=your_jwt_secret
```

## 🚀 Démarrage

### Développement

1. **Démarrer Strapi (Backend)**

```bash
cd backend
npm run develop
```

2. **Démarrer Next.js (Frontend)**

```bash
cd frontend
npm run dev
```

3. **Accéder aux applications**

-  Frontend: http://localhost:3000
-  Strapi Admin: http://localhost:1337/admin

### Production

```bash
# Build frontend
cd frontend
npm run build
npm start

# Build backend
cd backend
npm run build
npm start
```

## 📁 Structure du projet

```
infirmiere68000/
├── frontend/                 # Application Next.js
│   ├── app/                 # App Router (Next.js 13+)
│   │   ├── api/            # API Routes
│   │   ├── contact/        # Page contact
│   │   └── page.jsx       # Page d'accueil
│   ├── components/         # Composants React
│   │   ├── contact/        # Composants contact
│   │   ├── home/          # Composants accueil
│   │   └── ui/            # Composants UI
│   ├── actions/           # Server Actions
│   └── public/            # Assets statiques
├── backend/                # Strapi CMS
│   ├── src/
│   │   ├── api/           # API Strapi
│   │   └── extensions/    # Extensions
│   └── public/uploads/    # Médias
└── README.md
```

## 🎨 Fonctionnalités principales

### Navigation animée

-  Barre de navigation avec animation fluide
-  Détection automatique de la page active
-  Animation au survol des éléments

### Formulaire de contact

-  Validation côté client et serveur
-  Envoi d'emails avec React Email
-  Templates d'emails professionnels

### CMS Strapi

-  Gestion de contenu intuitive
-  API REST et GraphQL
-  Upload de médias

## 🔧 Scripts disponibles

### Frontend

```bash
npm run dev          # Développement
npm run build        # Build production
npm run start        # Serveur production
npm run lint         # Linting
```

### Backend

```bash
npm run develop      # Développement Strapi
npm run build        # Build production
npm run start        # Serveur production
```

## 📝 Configuration

### Strapi CMS

1. Accéder à http://localhost:1337/admin
2. Créer un compte administrateur
3. Configurer les types de contenu
4. Générer les tokens API

### Emails

1. Créer un compte Resend
2. Obtenir la clé API
3. Configurer le domaine d'envoi
4. Ajouter la clé dans les variables d'environnement

## 🚀 Déploiement

### Vercel (Frontend)

```bash
# Installer Vercel CLI
npm i -g vercel

# Déployer
vercel --prod
```

### Railway/Heroku (Backend)

```bash
# Variables d'environnement à configurer
HOST=0.0.0.0
PORT=1337
DATABASE_URL=your_database_url
```

## 🤝 Contribution

1. Fork le projet
2. Créer une branche feature (`git checkout -b feature/AmazingFeature`)
3. Commit les changements (`git commit -m 'Add some AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier [LICENSE](LICENSE) pour plus de détails.

## 👥 Auteur

**GraphandCo**

-  Website: [graphandco.com](https://graphandco.com)
-  Email: contact@graphandco.com

## 🙏 Remerciements

-  [Next.js](https://nextjs.org/) - Framework React
-  [Strapi](https://strapi.io/) - Headless CMS
-  [Tailwind CSS](https://tailwindcss.com/) - Framework CSS
-  [Framer Motion](https://www.framer.com/motion/) - Animations
-  [Resend](https://resend.com/) - Service d'emails

---

⭐ N'hésitez pas à donner une étoile si ce projet vous a aidé !
