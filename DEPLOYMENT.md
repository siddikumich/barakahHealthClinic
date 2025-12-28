# Deployment Guide

This guide covers multiple deployment options for your Barakah Health Clinic website.

## Option 1: Firebase Hosting (Recommended - Free)

Since you're already using Firebase, this is the easiest option and integrates perfectly.

### Step 1: Build Your Project

```bash
npm run build
```

This creates an optimized production build in the `dist` folder.

### Step 2: Initialize Firebase Hosting

```bash
firebase login
firebase init hosting
```

When prompted:
- **What do you want to use as your public directory?** → `dist`
- **Configure as a single-page app?** → `Yes`
- **Set up automatic builds and deploys with GitHub?** → `No` (or Yes if you want CI/CD)
- **File dist/index.html already exists. Overwrite?** → `No`

### Step 3: Deploy

```bash
npm run build
firebase deploy --only hosting
```

Your site will be live at: `https://your-project-id.web.app`

### Step 4: Custom Domain (Optional)

1. Go to Firebase Console > Hosting
2. Click "Add custom domain"
3. Follow the instructions to connect your domain

---

## Option 2: Vercel (Free & Very Easy)

Vercel is excellent for React apps and offers automatic deployments.

### Step 1: Install Vercel CLI

```bash
npm install -g vercel
```

### Step 2: Deploy

```bash
npm run build
vercel
```

Follow the prompts:
- Set up and deploy? → `Y`
- Which scope? → Select your account
- Link to existing project? → `N`
- Project name? → `barakah-health-clinic` (or your choice)
- Directory? → `./dist`
- Override settings? → `N`

Your site will be live immediately at a `vercel.app` URL.

### Step 3: Connect to GitHub (Optional - for auto-deployments)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your GitHub repository
4. Vercel will automatically deploy on every push

---

## Option 3: Netlify (Free & Easy)

Similar to Vercel, great for React apps.

### Step 1: Install Netlify CLI

```bash
npm install -g netlify-cli
```

### Step 2: Deploy

```bash
npm run build
netlify deploy --prod --dir=dist
```

Follow the prompts to create an account and deploy.

### Step 3: Connect to GitHub (Optional)

1. Go to [netlify.com](https://netlify.com)
2. Click "Add new site" → "Import an existing project"
3. Connect your GitHub repository
4. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`

---

## Option 4: GitHub Pages (Free)

Good for static sites, but requires some setup.

### Step 1: Install gh-pages

```bash
npm install --save-dev gh-pages
```

### Step 2: Update package.json

Add these scripts:

```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

### Step 3: Deploy

```bash
npm run deploy
```

Your site will be at: `https://your-username.github.io/barakahProject`

---

## Important Notes Before Deploying

### 1. Environment Variables

If you need to hide your Firebase config (recommended for production):

1. Create `.env.production`:
```
VITE_FIREBASE_API_KEY=your_key
VITE_FIREBASE_AUTH_DOMAIN=your_domain
# etc...
```

2. Update `src/firebase/config.js` to use:
```javascript
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  // etc...
}
```

### 2. Update Firebase Security Rules

Before going live, update your Firestore rules for production:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /flyers/{flyerId} {
      allow read: if true;
      allow create, update, delete: if request.auth != null && 
        request.auth.token.email.matches('.*@barakahclinic\\.com$'); // Only specific domain
    }
  }
}
```

### 3. Test Your Build Locally

```bash
npm run build
npm run preview
```

Visit the preview URL to make sure everything works.

---

## Recommended: Firebase Hosting

Since you're using Firebase, I recommend Firebase Hosting because:
- ✅ Free tier (generous limits)
- ✅ Integrated with your Firebase project
- ✅ Easy custom domain setup
- ✅ Fast CDN
- ✅ SSL certificates included

---

## Quick Deploy Commands

### Firebase Hosting:
```bash
npm run build && firebase deploy --only hosting
```

### Vercel:
```bash
npm run build && vercel --prod
```

### Netlify:
```bash
npm run build && netlify deploy --prod --dir=dist
```

---

## Troubleshooting

**Build fails?**
- Check for console errors: `npm run build`
- Make sure all imports are correct
- Check that environment variables are set

**404 errors on routes?**
- Make sure you configured as a single-page app
- Check your hosting provider's redirect rules

**Firebase errors?**
- Verify your Firebase config is correct
- Check Firestore security rules
- Ensure Authentication is enabled

