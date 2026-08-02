# Luméra Luxury Spa — Angular 22

A responsive, single-page luxury spa website inspired by the supplied peach-and-deep-blue reference design.

## Included
- Responsive desktop/mobile navigation
- Full-screen hero section
- Services, wellness commitment, testimonial, pricing, gallery and footer
- Angular-powered booking modal with validation and success state
- SEO title/description and accessible labels
- No paid UI library

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
Angular creates a static deployable site under `dist/lumera-spa/browser/`.

## Important before going live
1. Replace the sample business name, address, phone, email, prices and copy.
2. Replace the external Unsplash image URLs with licensed photos owned by the spa, preferably compressed WebP/AVIF files in `public/images/`.
3. The booking form currently demonstrates front-end behavior only. Connect it to Formspree, Netlify Forms, Firebase, Supabase, or your own API to actually save/send requests.
4. Add a privacy policy before collecting customer details.

## Netlify
- Push this folder to GitHub.
- In Netlify: **Add new site → Import from Git**.
- Build command: `npm run build`
- Publish directory: `dist/lumera-spa/browser`
- Add a file named `public/_redirects` containing `/* /index.html 200` if you later add Angular routes.

## Vercel
- Import the GitHub repository.
- Framework preset: Angular
- Build command: `npm run build`
- Output directory: `dist/lumera-spa/browser`

## Firebase Hosting
```bash
npm install -g firebase-tools
firebase login
firebase init hosting
# Public directory: dist/lumera-spa/browser
# Configure as a single-page app: Yes
npm run build
firebase deploy
```

## GitHub Pages
For a repository named `lumera-spa`:
```bash
npm run build -- --base-href /lumera-spa/
```
Publish the contents of `dist/lumera-spa/browser` using a GitHub Actions Pages workflow or a deployment package such as `angular-cli-ghpages`.
