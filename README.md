# FADE STUDIO — Unisex Grooming & Hair Studio

> *"Cut clean. Look sharp."*

A luxury, editorial multi-page website for **FADE STUDIO**, a premium unisex grooming and hair studio located in Indiranagar, Bengaluru. Built with **Astro** (static output), plain CSS, vanilla JavaScript, GSAP animations, Lenis smooth scrolling, and direct WhatsApp reservation integration.

---

## ✂️ Brand Overview
- **Brand Name**: FADE STUDIO
- **Palette**:
  - Warm Ivory: `#F4F1EB` / `#FAF8F5`
  - Deep Charcoal: `#1A1A1C` / `#121214`
  - Muted Gold: `#B89B5E` / `#9E824A`
- **Typography**:
  - Headings: *Instrument Serif* (mix of regular and italic)
  - Body & UI: *Urbanist* (clean geometric sans-serif)

---

## 📁 Project Structure

```text
fade-studio/
├── public/
│   ├── assets/                 # Photography & studio assets
│   ├── favicon.svg             # Brand SVG favicon
│   └── favicon.ico             # Fallback favicon
├── src/
│   ├── components/             # Reusable Astro UI components
│   │   ├── Drawer.astro        # Mobile navigation drawer
│   │   ├── Footer.astro        # Site footer with brand gradient
│   │   ├── Navbar.astro        # Sticky header & active page links
│   │   ├── Popup.astro         # Universal modal dialog
│   │   └── Preloader.astro     # Brand preloader (0-100% counter)
│   ├── layouts/
│   │   └── BaseLayout.astro    # Shared HTML shell, meta, and scripts
│   ├── pages/                  # Static Astro pages (13 total)
│   │   ├── 404.astro
│   │   ├── about.astro
│   │   ├── book.astro          # WhatsApp direct reservation hub
│   │   ├── contact.astro
│   │   ├── gallery.astro
│   │   ├── index.astro         # Home page with preloader & hero
│   │   ├── men.astro
│   │   ├── offers.astro
│   │   ├── pricing.astro
│   │   ├── privacy.astro
│   │   ├── services.astro
│   │   ├── terms.astro
│   │   └── women.astro
│   ├── scripts/
│   │   └── main.js             # GSAP, ScrollTrigger & Lenis animations
│   ├── styles/
│   │   └── global.css          # Mobile-first CSS stylesheet
│   └── config.js               # WhatsApp number & salon constants
├── astro.config.mjs            # Astro static build configuration
├── package.json
└── README.md
```

---

## 📲 Booking & WhatsApp Configuration

All bookings route directly through WhatsApp without requiring databases or login systems.

To change the studio's WhatsApp number or default message, edit `src/config.js`:

```javascript
// src/config.js
export const WHATSAPP_NUMBER = '919876543210'; // Replace with your 10-digit number + country code
export const WHATSAPP_DEFAULT_TEXT = 'Hi FADE STUDIO, I want to book an appointment.';
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_DEFAULT_TEXT)}`;
```

---

## 🚀 Commands

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Runs the live local server at `http://localhost:4321`.

### 3. Build Static Production Site
```bash
npm run build
```
Generates a static production bundle inside the `dist/` folder.

### 4. Preview Production Build
```bash
npm run preview
```
Previews the built static site locally at `http://localhost:4321`.

---

## 🌐 Free Deployment Guide

### Option A: Deploy on Vercel (Recommended)
1. Push your repository to GitHub:
   ```bash
   git push origin main
   ```
2. Go to [vercel.com](https://vercel.com) and log in with your GitHub account.
3. Click **Add New...** → **Project**.
4. Import the **Fade-Studio** repository.
5. Vercel automatically detects **Astro**:
   - **Framework Preset**: `Astro`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
6. Click **Deploy**. Your site will be live with free SSL in under 1 minute!

### Option B: Deploy on Netlify
1. Log in to [netlify.com](https://netlify.com) with GitHub.
2. Click **Add new site** → **Import an existing project**.
3. Select the **Fade-Studio** repository.
4. Netlify automatically fills:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
5. Click **Deploy site**.
