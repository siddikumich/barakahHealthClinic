# Firebase Key Rotation Guide

Since your Firebase keys were exposed in git history, follow these steps to rotate them.

## Step 1: Generate New API Key in Firebase Console

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your project: **YOUR_PROJECT_NAME**
3. Click the **gear icon** (⚙️) → **Project settings**
4. Go to the **General** tab
5. Scroll down to **Your apps** section
6. Find your web app (the one with the config)
7. Click the **"Regenerate key"** button next to the API Key
   - Or you can add a new web app and get new keys
8. **Copy the new API key** (you'll need it in Step 3)

## Step 2: Update Firebase Security Rules (Optional but Recommended)

While you're in Firebase Console, review your security rules:

1. Go to **Firestore Database** → **Rules**
2. Make sure your rules are secure
3. Go to **Authentication** → **Settings** → Review authorized domains

## Step 3: Update Your Local .env File

1. Open your `.env` file in the project root
2. Replace the old `VITE_FIREBASE_API_KEY` with the new one from Step 1
3. Save the file

**Note:** The other values (authDomain, projectId, etc.) should stay the same unless you created a completely new app.

## Step 4: Test Your Application

1. Restart your dev server:
   ```bash
   npm run dev
   ```

2. Test:
   - Login functionality
   - Adding/deleting flyers
   - Database operations

## Step 5: Update Production/Deployment Environment Variables

If you've already deployed, update environment variables in your hosting platform:

### For Vercel:
- Go to Project Settings → Environment Variables
- Update `VITE_FIREBASE_API_KEY`

### For Netlify:
- Go to Site Settings → Environment Variables
- Update `VITE_FIREBASE_API_KEY`

### For Firebase Hosting:
- Set environment variables in your hosting configuration
- Or use Firebase Functions with environment config

## Step 6: Revoke Old API Key (Optional)

After confirming everything works with the new key:

1. Go back to Firebase Console → Project Settings
2. You can restrict or delete the old API key
3. **Warning:** Only do this after confirming the new key works everywhere!

## Important Notes

- ⚠️ **Old keys will stop working** once you restrict/delete them
- ✅ **New keys work immediately** after updating your .env file
- 🔄 **Other developers** need to update their `.env` files too
- 📝 **Update deployment platforms** with new keys

## Verification

After updating, verify:
- ✅ Login works
- ✅ Database reads/writes work
- ✅ Image uploads work (if using Storage)
- ✅ All Firebase services function correctly

