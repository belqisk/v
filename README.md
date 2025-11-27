# Vocabulary Learning App (Next.js App Router)

## 🚨 IMPORTANT: Clean Up Before Deployment
To avoid "Blank Page" issues on Vercel, you **MUST DELETE** the following files from your project root if they exist. They conflict with Next.js:
- ❌ `index.html`
- ❌ `index.tsx`
- ❌ `App.tsx`
- ❌ `types.ts` (We use `lib/types.ts`)
- ❌ `constants.ts` (We use `lib/constants.ts`)

## Directory Structure
Ensure your project looks like this:
```
/vocab-app
  ├── app/                  # Next.js App Router
  │   ├── layout.tsx        # Root layout
  │   ├── page.tsx          # Home page
  │   └── globals.css       # Global styles
  ├── components/           # UI Components
  ├── lib/                  # Shared types and constants
  ├── public/               # Static assets
  ├── next.config.js
  ├── tailwind.config.js
  ├── postcss.config.js     # Required for Tailwind
  └── package.json
```

## Deployment
1. Push to GitHub.
2. Import to Vercel.
3. Vercel will automatically detect Next.js.
4. Deploy.
