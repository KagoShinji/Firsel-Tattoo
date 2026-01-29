# Deploying Firsel Tattoo to Vercel (Free)

Vercel is the creator of Next.js and offers a very generous free tier ("Hobby") that is perfect for this portfolio site.

## ⚠️ Important Limitation: Booking Data

Your current booking system saves data to a **local JSON file** (`data/bookings.json`).
**This file system storage WILL NOT work on Vercel.**

Vercel's cloud environment is "serverless" and "ephemeral" - meaning any file written to disk disappears after the request finishes.

### Options:
1.  **Portfolio Only (Recommended for now)**: Deploy the site as a showcase. The "Booking" form will appear to work, but the data won't actually save permanently or you might see errors.
2.  **Add a Real Database (Advanced)**: To make bookings work for real, you would need to connect to a database like Vercel Postgres, Supabase, or MongoDB.

## Step-by-Step Deployment

### 1. Create a GitHub Repository
1.  Go to [github.com/new](https://github.com/new) and create a repository named `firsel-tattoo`.
2.  Push your code to GitHub:
    ```bash
    git init
    git add .
    git commit -m "Initial commit"
    git branch -M main
    git remote add origin https://github.com/YOUR_USERNAME/firsel-tattoo.git
    git push -u origin main
    ```

### 2. Deploy on Vercel
1.  Go to [vercel.com](https://vercel.com) and sign up/login (you can login with GitHub).
2.  Click **"Add New..."** -> **"Project"**.
3.  Import the `firsel-tattoo` repository you just created.
4.  Vercel will auto-detect Next.js.
5.  Click **"Deploy"**.

Wait a minute, and your site will be live at `https://firsel-tattoo.vercel.app` (or similar)!

### 3. (Optional) Custom Domain
If you buy a domain (e.g., `firseltattoo.com`), you can add it in the Vercel Project Settings > Domains.
