# FADE STUDIO — Unisex Grooming & Hair Studio

> *"Cut clean. Look sharp."*

A luxury, editorial multi-page website for **FADE STUDIO**, a premium unisex grooming and hair studio located in Indiranagar, Bengaluru. Designed with an editorial aesthetic, high typography standards, smooth interactive animations, and responsive architecture.

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

## 📄 Pages Included (13 Full Pages)

1. **Home (`index.html`)**: Preloader with live counter, hero section, pinned horizontal cards on desktop & swipe carousel on mobile, statement section, moments gallery, and master craftsmen preview.
2. **Services (`services.html`)**: Complete services catalog with category tabs, duration, pricing in INR, and booking CTAs.
3. **Men's Grooming (`men.html`)**: Dedicated men's haircuts, skin fades, beard sculpts, and hot towel shaves.
4. **Women's Styling (`women.html`)**: Precision cuts, blowouts, balayage, botanical hair spas, and bridal beauty.
5. **Pricing Table (`pricing.html`)**: Transparent pricing with card-style transformation on mobile phones and full comparison grid on desktop.
6. **Studio Gallery (`gallery.html`)**: Filterable portfolio grid (4 → 3 → 2 → 1 columns) with interactive swipe-to-dismiss lightbox modal.
7. **Our Story & Team (`about.html`)**: Salon philosophy, founding story, hygiene standards, and master barber bios.
8. **Reservation Desk (`book.html`)**: Online appointment booking with stylist selection, date/time pickers, and inline validation.
9. **Contact & Studio Hours (`contact.html`)**: Address, hours, interactive contact inquiry form, direct `tel:` / `mailto:` links, and location directions.
10. **Special Offers (`offers.html`)**: First-visit discounts, grooming memberships, and bridal packages.
11. **Privacy Policy (`privacy.html`)**: Client data and privacy terms.
12. **Terms of Service (`terms.html`)**: Studio booking rules, cancellation policy, and etiquette.
13. **404 Not Found (`404.html`)**: Branded custom 404 page with navigation redirects.

---

## 📱 Mobile-First Responsive Architecture
- **Full Viewport Support**: Tested and verified across 320px, 375px, 414px, 768px, 1024px, and landscape orientations.
- **Zero Horizontal Overflow**: Fluid typography and spacing using `clamp()`, `min()`, `max()`, and dynamic units (`100dvh`).
- **Touch Navigation**: 44px × 44px hamburger menu trigger opening a full-height slide-in drawer with background scroll lock, backdrop dismissal, and keyboard accessibility.
- **Form Inputs**: 48px minimum height and 16px font size to prevent automatic iOS Safari zooming.
- **Safe Area Insets**: Full support for `env(safe-area-inset-*)` around notches and mobile home indicators.

---

## 🚀 Tech Stack
- **HTML5**: Semantic tags, ARIA accessibility attributes, `viewport-fit=cover`.
- **CSS3**: Mobile-first architecture, CSS Grid, Flexbox, CSS Variables.
- **JavaScript (Vanilla)**:
  - GSAP & ScrollTrigger for animations and responsive desktop pinning.
  - Custom slide-in drawer controller with backdrop tap, Escape key, and auto-reset.
  - Touch swipe-down lightbox dismissal.
  - Real-time form validation.

---

## 💻 Local Preview
To preview the website locally:

```bash
# Using Python
python -m http.server 8080

# Or using Node.js
npx serve .
```

Open `http://localhost:8080` in any modern web browser.
