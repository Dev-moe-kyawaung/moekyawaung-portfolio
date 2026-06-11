# Moe Kyaw Aung — Premium Cyber-Neon Portfolio

A production-ready, data-driven **Next.js** App Router portfolio with a cyber-neon visual system (Neon Cyan + Hot Pink + Electric Yellow), CRT scanlines, animated grid background, rotating avatar ring, and premium motion.

## Features

- Next.js (App Router) + TypeScript + Tailwind CSS + Framer Motion.
- Data-driven content via `lib/site.ts` and `lib/data.ts`.
- Sticky navbar (Myanmar labels), typing hero, rotating avatar ring, gradient hero text.
- Skills with scroll-based progress bars.
- Services with sweeping light-beam hover effect.
- Projects with demo + source links to GitHub repos.
- App collection gallery.
- Contact form with React Hook Form + Zod validation and Myanmar error messages.
- Back-to-top button.
- Premium add-ons: Dark/Light toggle, animated cursor, particle background, resume download, multi-language (Burmese / English), MDX-ready blog.
- Deployment ready for Vercel, Firebase Hosting, GitHub Pages, and Cloudflare Pages.

## Getting Started

```bash
npm install
npm run dev
```
## Open: http://localhost:3000
## Project Structure
```txet
app/
  layout.tsx
  page.tsx
  globals.css
  api/contact/route.ts
components/
  Navbar.tsx
  Hero.tsx
  About.tsx
  Skills.tsx
  Services.tsx
  Projects.tsx
  AppCollection.tsx
  Contact.tsx
  BackToTop.tsx
  SectionHeading.tsx
  TypingText.tsx
  ProgressBar.tsx
  GlowOrb.tsx
  SocialLinks.tsx
  ThemeProvider.tsx
  AnimatedCursor.tsx
  ParticleBackground.tsx
  MultiLanguage.tsx
  LanguageSwitcher.tsx
  ResumeDownload.tsx
hooks/
  useScrollReveal.ts
lib/
  site.ts
  data.ts
  validations.ts
public/
  avatar.png
  og-cover.png
  screenshots/
```
## Data and Assets
Update profile info in lib/site.ts.
Update projects/socials/app collection in lib/data.ts.
Use real files for public/avatar.png, public/og-cover.png, and public/resume.pdf.
Put resume.pdf in public/ if you want a real PDF download link.

## Development
```bash
npm run dev
npm run build
```
## Static Export
If you deploy to Firebase Hosting, GitHub Pages, or Cloudflare Pages as a static site:

```bash
npm run build
npm run export
```
This produces `./out`.

> Note: Static exports are ideal for GitHub Pages, Firebase Hosting, and Cloudflare Pages static sites. For SSR/API-heavy deployments, use Vercel.

## Deploy to Vercel

1. Push the repo to GitHub.
2. Go to Vercel and import the repository.
3. Keep the default Next.js settings.
4. Deploy.

Recommended build settings:

- Build Command: `npm run build`
- Output: `.next`

## Deploy to Firebase Hosting

1. Install Firebase CLI:

```bash
npm i -g firebase-tools
firebase login
```

2. Initialize hosting:

```bash
firebase init hosting
```

- Public directory: `out`
- Configure as a single-page app: Yes

3. Build and export:

```bash
npm run build
npm run export
```

4. Deploy:

```bash
firebase deploy --only hosting
```

## Deploy to GitHub Pages

1. Enable GitHub Pages in repository settings.
2. Add a GitHub Action workflow that publishes `./out` to GitHub Pages.
3. Build/export on push to `main`.

## Deploy to Cloudflare Pages

### Static site

1. Create a Cloudflare Pages project.
2. Connect your GitHub repository.
3. Use these build settings:
   - Build command: `npm run build && npm run export`
   - Build output directory: `out`

### Dynamic Next.js

For richer Next.js behavior, use Cloudflare's Next.js support/next-on-pages workflow.

## Premium Add-ons

### Dark/Light Mode
Included via `ThemeProvider.tsx`.

### Animated Cursor
Included via `AnimatedCursor.tsx`.

### Particle Background
Included via `ParticleBackground.tsx`.

### Multi-language
Included via `MultiLanguage.tsx` and `LanguageSwitcher.tsx`.

### Resume Download
Included via `ResumeDownload.tsx`.

## Troubleshooting

- If Tailwind classes are missing, verify `tailwind.config.ts` content paths.
- If external images fail, use static assets in `public/`.
- For email/contact delivery, replace the `/api/contact` stub with a real service.
