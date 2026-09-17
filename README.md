# Site Web REIFO — Réseau d’Entraide des Immigrants Francophones de l’Ontario

Site web institutionnel bilingue (Français / Anglais) pour le **REIFO**, organisme à but non lucratif dédié à l'intégration sociale, éducative, sportive et communautaire des immigrants francophones dans la région de Halton en Ontario.

---

## 🚀 Technologies

- **Framework** : [Next.js 16 (App Router)](https://nextjs.org/)
- **Langage** : TypeScript
- **Style** : Tailwind CSS v4 avec palette de marque REIFO personnalisée
- **Internationalisation** : Système bilingue FR/EN via `LanguageContext`
- **Composants** : React 19 avec architecture modulaire et mobile-first

---

## 📋 Fonctionnalités Principales

1. **Accueil immersif** : Présentation du REIFO, des 5 volets d'intervention, des prochains événements, de la galerie et formulaire de contact rapide.
2. **Nos 5 Volets d'Action** :
   - Sport & Santé (activités physiques récréatives, saines habitudes de vie)
   - Intégration des Immigrants (accueil, orientation, mise en réseau)
   - Appui & Intégration Scolaire (système scolaire ontarien, tutorat, devoirs)
   - Promotion de la Francophonie (activités culturelles, alphabétisation)
   - Volet Social & Solidarité (sorties familiales, entraide communautaire)
3. **Galerie interactive** : Photos authentiques filtrables par catégorie (Sport, Vie communautaire, etc.) avec visionneuse plein écran (Lightbox).
4. **Formulaires fonctionnels connectés à l'API** (`/api/contact`) :
   - Formulaire de contact général
   - Formulaire de candidature bénévole (`/benevolat`)
   - Formulaire d'adhésion membre (`/devenir-membre`)
5. **En-tête permanent (Sticky Header)** : Fond blanc opaque permanent assurant une lisibilité maximale lors du défilement.

---

## 🛠️ Installation et Démarrage

```bash
# 1. Cloner ou ouvrir le projet
cd reifo

# 2. Installer les dépendances
npm install

# 3. Configurer les variables d'environnement (optionnel)
cp .env.example .env.local

# 4. Lancer le serveur de développement
npm run dev
```

L'application est disponible sur [http://localhost:3000](http://localhost:3000).

---

## 📬 Configuration des Formulaires & Webhooks

Le point de terminaison API [`/api/contact`](app/api/contact/route.ts) valide les données côté serveur et enregistre chaque soumission.

Pour transmettre automatiquement les messages reçus à un service externe (Make, Zapier, Slack, Discord, ou un CMS externe), définissez la variable d'environnement suivante dans votre fichier `.env.local` :

```env
CONTACT_WEBHOOK_URL=https://votre-webhook-url.com
CONTACT_RECIPIENT_EMAIL=contact@reifo.ca
```

---

## 📦 Construction pour Production

```bash
npm run build
npm run start
```
