# Firebase Setup Instructions

This guide will help you set up Firebase for authentication and database functionality.

## Step 1: Create a Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Add project" or select an existing project
3. Follow the setup wizard:
   - Enter project name: "Barakah Health Clinic" (or your preferred name)
   - Enable Google Analytics (optional)
   - Click "Create project"

## Step 2: Register Your Web App

1. In your Firebase project, click the web icon (`</>`)
2. Register your app:
   - App nickname: "Barakah Website"
   - Check "Also set up Firebase Hosting" (optional)
   - Click "Register app"
3. Copy the Firebase configuration object

## Step 3: Add Firebase Config

1. Open `src/firebase/config.js`
2. Replace the placeholder values with your actual Firebase config:

```javascript
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.firebasestorage.app",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
  measurementId: "YOUR_MEASUREMENT_ID"
};
```

## Step 4: Enable Authentication

1. In Firebase Console, go to **Authentication** > **Sign-in method**
2. Click on **Email/Password**
3. Enable it and click **Save**

## Step 5: Create Firestore Database

1. In Firebase Console, go to **Firestore Database**
2. Click **Create database**
3. Choose **Start in test mode** (for development)
4. Select a location (choose closest to your users)
5. Click **Enable**

## Step 6: Set Up Firestore Security Rules

1. Go to **Firestore Database** > **Rules**
2. Replace the rules with:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Flyers collection - anyone can read, only authenticated users can write
    match /flyers/{flyerId} {
      allow read: if true;
      allow create, update, delete: if request.auth != null;
    }
  }
}
```

3. Click **Publish**

## Step 7 & 8: Image Storage (OPTIONAL - SKIP IF USING FREE PLAN)

**Note:** The app now stores images as base64 directly in Firestore (completely free, no Storage needed!)

If you want to use Firebase Storage instead (for larger images), follow these steps:

### Step 7: Set Up Storage (for Images)

1. In Firebase Console, go to **Storage**
2. Click **Get started**
3. Start in **test mode** (for development)
4. Click **Next** > **Done**

### Step 8: Set Up Storage Security Rules

1. Go to **Storage** > **Rules**
2. Replace the rules with:

```javascript
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /flyers/{allPaths=**} {
      allow read: if true;
      allow write: if request.auth != null;
    }
  }
}
```

3. Click **Publish**

**Current Setup:** Images are stored as base64 in Firestore documents. This is free but has a 1MB limit per document. The app automatically compresses large images to fit within this limit.

## Step 9: Create Admin User

1. Go to **Authentication** > **Users**
2. Click **Add user**
3. Enter email and password for your board director
4. Click **Add user**

## Step 10: Test the Setup

1. Start your development server: `npm run dev`
2. Navigate to `/login`
3. Log in with the admin credentials you created
4. Go to `/events` and try adding a flyer
5. Log out and verify flyers are view-only for non-authenticated users

## Important Notes

- **For Production**: Update Firestore and Storage rules to be more restrictive
- **Environment Variables**: Consider moving Firebase config to environment variables for security
- **Multiple Admins**: You can add more users in Firebase Console > Authentication > Users

## Troubleshooting

- **"Firebase: Error (auth/invalid-api-key)"**: Check that your config values are correct
- **"Permission denied"**: Verify your Firestore/Storage security rules are published
- **Images not uploading**: Check Storage rules and ensure Storage is enabled

## Next Steps

- Set up custom domain (optional)
- Configure Firebase Hosting for production deployment
- Add more authentication methods if needed (Google, etc.)
- Set up email verification for new users

