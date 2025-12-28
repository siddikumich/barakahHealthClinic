# GitHub Repository Setup Guide

Follow these steps to create a GitHub repository and push your code.

## Step 1: Create GitHub Repository

1. Go to [GitHub.com](https://github.com) and sign in
2. Click the **"+"** icon in the top right corner
3. Select **"New repository"**

4. Fill in the repository details:
   - **Repository name**: `barakah-health-clinic` (or your preferred name)
   - **Description**: "Website for Barakah Health Clinic - free preventive health services"
   - **Visibility**: Choose **Public** or **Private**
     - Public: Anyone can see your code
     - Private: Only you (and collaborators) can see it
   - **DO NOT** check "Initialize this repository with a README" (we already have one)
   - **DO NOT** add .gitignore or license (we already have these)

5. Click **"Create repository"**

## Step 2: Connect Your Local Repository to GitHub

After creating the repository, GitHub will show you commands. Use these:

### Option A: If you haven't created the repo yet (use this)

```bash
git remote add origin https://github.com/YOUR_USERNAME/barakah-health-clinic.git
git branch -M main
git push -u origin main
```

Replace `YOUR_USERNAME` with your actual GitHub username.

### Option B: If you already created the repo

GitHub will show you the exact commands. They'll look like:

```bash
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git
git branch -M main
git push -u origin main
```

## Step 3: Push Your Code

Run the commands from Step 2. You'll be prompted for your GitHub credentials:
- **Username**: Your GitHub username
- **Password**: Use a **Personal Access Token** (not your regular password)

### Creating a Personal Access Token:

1. Go to GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Click "Generate new token (classic)"
3. Give it a name like "Barakah Project"
4. Select scopes: Check **"repo"** (this gives full repository access)
5. Click "Generate token"
6. **Copy the token immediately** (you won't see it again!)
7. Use this token as your password when pushing

## Step 4: Verify

1. Go to your GitHub repository page
2. You should see all your files there
3. Your code is now on GitHub! 🎉

## Next Steps: Deploy

Now that your code is on GitHub, you can:

1. **Deploy with Vercel/Netlify** (automatic deployments on push)
2. **Deploy with Firebase Hosting** (manual or CI/CD)
3. **Share your repository** with collaborators

## Troubleshooting

**"remote origin already exists"**
```bash
git remote remove origin
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git
```

**"Authentication failed"**
- Make sure you're using a Personal Access Token, not your password
- Check that the token has "repo" scope

**"Permission denied"**
- Verify your GitHub username is correct
- Make sure the repository name matches exactly

## Quick Reference

After initial setup, to push future changes:

```bash
git add .
git commit -m "Your commit message"
git push
```

