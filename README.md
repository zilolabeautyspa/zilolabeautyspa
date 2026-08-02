# Zilola Beauty Spa Angular Website

A component-based Angular recreation of the Zilola Beauty Spa base design.

## Pages

- `/` Home
- `/services` Services
- `/bridal` Bridal packages and consultation form
- `/about` About Zilola

## Structure

- `shared/header` reusable navigation
- `shared/footer` reusable footer
- `shared/booking-modal` global booking modal
- `pages/*` separate routed page components
- `core/services/booking.service.ts` shared modal state

## Run locally

```bash
npm install
npm start
```

Open `http://localhost:4200`.

## Production build

```bash
npm run build
```

Netlify publish directory:

```text
dist/zilola-beauty-spa/browser
```

The included `public/_redirects` file enables Angular routes on Netlify.

## Notes

The forms are frontend demonstrations. Connect them to Netlify Forms, Formspree, Firebase, or a backend API before using them for real appointment requests.

The current photos use externally hosted Unsplash images. Replace them with Zilola-owned photos under `public/images` before final launch.
