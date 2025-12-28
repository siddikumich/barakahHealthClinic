# Custom Domain Setup for Firebase Hosting

## Step 1: Get a Domain Name

If you don't have a domain yet, you can buy one from:
- **Google Domains** (now Squarespace Domains)
- **Namecheap**
- **GoDaddy**
- **Cloudflare** (often cheapest)

Popular options for your clinic:
- `barakahhealthclinic.org`
- `barakahclinic.org`
- `barakahhealth.org`

## Step 2: Add Custom Domain in Firebase

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your project: **barakahproject-ad45b**
3. Click **Hosting** in the left sidebar
4. Click **"Add custom domain"** button
5. Enter your domain name (e.g., `barakahhealthclinic.org`)
6. Click **Continue**

## Step 3: Verify Domain Ownership

Firebase will show you DNS records to add. You have two options:

### Option A: A Record (Recommended - Simpler)

Firebase will give you:
- **Type:** A
- **Name:** @ (or leave blank)
- **Value:** IP addresses (Firebase will provide 2-4 IPs)

Add these A records in your domain registrar's DNS settings.

### Option B: CNAME Record

Firebase will give you:
- **Type:** CNAME
- **Name:** www (or @)
- **Value:** `your-project.web.app` (Firebase provides this)

Add this CNAME record.

## Step 4: Update DNS Records

1. Go to your domain registrar's website (where you bought the domain)
2. Find **DNS Settings** or **Domain Management**
3. Add the DNS records Firebase provided:
   - For A records: Add all IP addresses Firebase gives you
   - For CNAME: Add the CNAME record
4. Save the changes

## Step 5: Wait for DNS Propagation

- DNS changes can take **15 minutes to 48 hours** to propagate
- Usually takes **1-2 hours** for most domains
- Firebase will automatically detect when DNS is configured correctly

## Step 6: SSL Certificate (Automatic)

- Firebase automatically provisions a **free SSL certificate**
- This happens automatically once DNS is verified
- Your site will be accessible via `https://yourdomain.org`

## Step 7: Verify Setup

Once DNS propagates:
1. Go back to Firebase Console → Hosting
2. You should see your custom domain listed
3. Status should show "Connected" with a green checkmark
4. Visit your domain in a browser - it should work!

## Common Domain Registrars - Where to Find DNS Settings

### Google Domains / Squarespace
- Go to your domain → DNS → Custom records

### Namecheap
- Domain List → Manage → Advanced DNS

### GoDaddy
- My Products → DNS → Manage DNS

### Cloudflare
- Select domain → DNS → Records

## Troubleshooting

**"DNS not verified" after 24 hours:**
- Double-check DNS records are correct
- Make sure you added ALL A records (not just one)
- Wait a bit longer (some DNS can be slow)

**"SSL certificate pending":**
- This is normal - can take up to 24 hours
- Firebase will email you when it's ready

**Domain not loading:**
- Check DNS propagation: https://www.whatsmydns.net
- Verify records are correct in your registrar
- Make sure you're using the right domain (not a subdomain)

## Example DNS Configuration

If Firebase gives you these A records:
```
A    @    151.101.1.195
A    @    151.101.65.195
```

Add both in your DNS settings.

## Cost

- **Custom domain:** FREE (included with Firebase Hosting)
- **SSL certificate:** FREE (automatic)
- **Domain purchase:** ~$10-15/year (one-time purchase from registrar)

## Next Steps

After your domain is connected:
- Your site will be live at both:
  - `https://yourdomain.org` (custom domain)
  - `https://barakahproject-ad45b.web.app` (Firebase domain)
- Both URLs work and redirect properly
- All future deployments automatically work with your custom domain!

