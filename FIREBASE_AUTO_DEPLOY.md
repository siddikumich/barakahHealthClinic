# Firebase Hosting with Automatic GitHub Deployment

Complete guide to deploy your website to Firebase and set up automatic deployments from GitHub.

## Part 1: Initial Firebase Deployment

### Step 1: Login to Firebase

```bash
firebase login
```

This will open your browser to authenticate. Click "Allow" to grant access.

### Step 2: Initialize Firebase Hosting (if not done already)

```bash
firebase init hosting
```

When prompted:
- **Select Firebase features:** Choose `Hosting` (use spacebar to select, Enter to confirm)
- **Select a Firebase project:** Choose `barakahproject-ad45b` (or your project)
- **What do you want to use as your public directory?** → Type `dist` and press Enter
- **Configure as a single-page app?** → Type `y` (yes) and press Enter
- **Set up automatic builds and deploys with GitHub?** → Type `n` (we'll set this up manually)
- **File dist/index.html already exists. Overwrite?** → Type `n` (no)

### Step 3: Build Your Project

```bash
npm run build
```

This creates the production build in the `dist` folder.

### Step 4: Deploy to Firebase

```bash
firebase deploy --only hosting
```

Your site will be live at: `https://barakahproject-ad45b.web.app` (or your project URL)

---

## Part 2: Set Up Automatic GitHub Deployment

### Step 1: Get Firebase Service Account Token

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click the **gear icon** (⚙️) → **Project settings**
3. Go to the **Service accounts** tab
4. Click **"Generate new private key"**
5. Click **"Generate key"** in the popup
6. A JSON file will download - **SAVE THIS FILE SECURELY** (you'll need it in Step 3)

### Step 2: Add GitHub Secrets

1. Go to your GitHub repository: `https://github.com/siddikumich/barakahHealthClinic`
2. Click **Settings** (top menu)
3. Click **Secrets and variables** → **Actions** (left sidebar)
4. Click **"New repository secret"**

Add these secrets one by one:

#### Secret 1: FIREBASE_SERVICE_ACCOUNT
- **Name:** `FIREBASE_SERVICE_ACCOUNT`
- **Value:** Open the JSON file you downloaded, copy the **entire contents**, and paste it here
- Click **"Add secret"**

#### Secret 2-7: Firebase Environment Variables
Add each of these as separate secrets:

- **Name:** `VITE_FIREBASE_API_KEY`
  **Value:** Your Firebase API key (from your `.env` file)

- **Name:** `VITE_FIREBASE_AUTH_DOMAIN`
  **Value:** Your auth domain (from your `.env` file)

- **Name:** `VITE_FIREBASE_PROJECT_ID`
  **Value:** `barakahproject-ad45b`

- **Name:** `VITE_FIREBASE_STORAGE_BUCKET`
  **Value:** Your storage bucket (from your `.env` file)

- **Name:** `VITE_FIREBASE_MESSAGING_SENDER_ID`
  **Value:** Your messaging sender ID (from your `.env` file)

- **Name:** `VITE_FIREBASE_APP_ID`
  **Value:** Your app ID (from your `.env` file)

- **Name:** `VITE_FIREBASE_MEASUREMENT_ID`
  **Value:** Your measurement ID (from your `.env` file)

### Step 3: Commit the GitHub Actions Workflow

The workflow file is already created at `.github/workflows/firebase-deploy.yml`. Commit and push it:

```bash
git add .github/workflows/firebase-deploy.yml
git commit -m "Add automatic Firebase deployment workflow"
git push
```

### Step 4: Test Automatic Deployment

1. Make a small change to your website (e.g., update a text in `src/pages/Home.jsx`)
2. Commit and push:
   ```bash
   git add .
   git commit -m "Test automatic deployment"
   git push
   ```
3. Go to your GitHub repository
4. Click the **Actions** tab (top menu)
5. You should see a workflow running called "Deploy to Firebase Hosting"
6. Wait 2-3 minutes for it to complete
7. Your website will automatically update!

---

## How It Works

Every time you push to the `main` branch:
1. GitHub Actions automatically runs
2. It installs dependencies
3. Builds your project with the environment variables
4. Deploys to Firebase Hosting
5. Your site updates automatically!

---

## Manual Deployment (Alternative)

If you want to deploy manually without GitHub Actions:

```bash
npm run build
firebase deploy --only hosting
```

---

## Troubleshooting

### "Firebase: Error (auth/invalid-api-key)"
- Check that all environment variable secrets are set correctly in GitHub
- Verify the values match your `.env` file

### "Permission denied" during deployment
- Make sure the `FIREBASE_SERVICE_ACCOUNT` secret contains the full JSON
- Verify the service account has Hosting permissions in Firebase Console

### Build fails in GitHub Actions
- Check the Actions tab for error messages
- Make sure all secrets are added correctly
- Verify your `package.json` has the correct build script

### Website not updating
- Check GitHub Actions tab to see if deployment succeeded
- Verify you pushed to the `main` branch
- Check Firebase Console > Hosting for deployment status

---

## Quick Reference

**Manual deploy:**
```bash
npm run build && firebase deploy --only hosting
```

**Check deployment status:**
- GitHub: Repository → Actions tab
- Firebase: Console → Hosting

**View live site:**
- `https://barakahproject-ad45b.web.app`
- Or your custom domain if configured

---

## Next Steps

- ✅ Your site is deployed
- ✅ Automatic deployments are set up
- 🔄 Every push to `main` updates your site automatically!

