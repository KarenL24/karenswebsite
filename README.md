# Karen's Website - Next.js

This is a [Next.js](https://nextjs.org/) project converted from a static HTML site.

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

- `app/` - Next.js App Router directory
  - `layout.tsx` - Root layout component
  - `page.tsx` - Main page component
  - `globals.css` - Global styles (converted from style.css)
- `public/assets/` - Static assets (images, fonts, etc.)
- `package.json` - Dependencies and scripts

## Build for Production

```bash
npm run build
npm start
```

## Deploy to Vercel

The project is already configured for Vercel deployment. Simply push to your GitHub repository and Vercel will automatically deploy it.

Or deploy manually:

```bash
vercel
```

## Changes from Original

- Converted from static HTML to Next.js React components
- Moved assets to `public/assets/` directory
- Converted CSS to Next.js global styles
- Added TypeScript support
- Optimized for Next.js Image component
- Removed old `vercel.json` (Next.js handles routing automatically)
