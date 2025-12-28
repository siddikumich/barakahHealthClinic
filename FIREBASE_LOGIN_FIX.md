# Firebase Login Issue - Fix Guide

## Problem
You're getting: "Failed to get Firebase project barakahproject-ad45b"

## Solution

### Step 1: Login to Firebase

Run this command in your terminal (it will open a browser):

```bash
npx firebase-tools login
```

**Important:** This must be run in your terminal (not through the AI), as it needs to open your browser.

### Step 2: Verify Login

After logging in, check if you can see your projects:

```bash
npx firebase-tools projects:list
```

You should see `barakahproject-ad45b` in the list.

### Step 3: Verify Project Access

If the project doesn't appear, you might need to:

1. **Check Firebase Console:**
   - Go to https://console.firebase.google.com/
   - Make sure you're logged in with the correct Google account
   - Verify the project `barakahproject-ad45b` exists

2. **Check Project Permissions:**
   - In Firebase Console, go to Project Settings → Users and permissions
   - Make sure your account has "Owner" or "Editor" role

3. **Try Different Account:**
   - If you created the project with a different Google account, logout and login with that account:
   ```bash
   npx firebase-tools logout
   npx firebase-tools login
   ```

### Step 4: Use Correct Project

If you have multiple Firebase projects, make sure you're using the right one:

```bash
# List all projects
npx firebase-tools projects:list

# Use a specific project
npx firebase-tools use barakahproject-ad45b
```

### Step 5: Deploy Again

Once logged in and project is selected:

```bash
npm run build
npx firebase-tools deploy --only hosting
```

## Common Issues

**"No projects found"**
- You're not logged in → Run `npx firebase-tools login`
- Wrong Google account → Logout and login with correct account

**"Permission denied"**
- Your account doesn't have access to the project
- Ask the project owner to add you as a collaborator

**"Project not found"**
- Check the project ID in `.firebaserc` matches your Firebase project
- Verify the project exists in Firebase Console

