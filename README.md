# NTS Scaffolding Private Limited - Website

A modern, professional, responsive website for NTS Scaffolding — India's trusted scaffolding rental company with over 45 years of experience.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion

## Getting Started

1. **Install dependencies**
   ```bash
   cd nts-scaffolding
   npm install
   ```

2. **Run development server**
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000)

## Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
nts-scaffolding/
├── src/
│   ├── app/           # App Router pages & layouts
│   ├── components/    # Reusable UI components
│   └── data/          # Static data (projects)
├── public/
└── package.json
```

## Features

- **Home Page:** Hero, About, Services, Why Choose Us
- **Projects Page:** Filterable project grid (Infrastructure / Industrial / Commercial)
- **Contact Page:** Contact form, company info, Google Maps embed
- **Design:** Industrial theme, smooth animations, fully responsive
- **SEO:** Meta tags, semantic headings, JSON-LD organization schema
- **Loading:** Scaffolding-themed loading animation on route changes

## Contact Form

The contact form currently shows a success message on submit. To connect it to your backend or form service (e.g., Formspree, email API), update the `handleSubmit` function in `src/app/contact/page.tsx`.
