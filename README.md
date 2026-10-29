# Daniel Gur — Portfolio

Next.js (App Router, TypeScript, Tailwind) portfolio, with:

- **Sanity** CMS, embedded at `/studio`, content fetched in `src/sanity/lib/queries.ts`
- **Resend** for the contact form (`src/app/api/contact/route.ts`)
- **GSAP** for animation (`src/components/GsapHero.tsx` shows the pattern via `@gsap/react`'s `useGSAP`)
- **Vercel** for hosting

## Setup

1. `npm install`
2. Copy `.env.example` to `.env.local` and fill in:
   - `NEXT_PUBLIC_SANITY_PROJECT_ID` / `NEXT_PUBLIC_SANITY_DATASET` — from `npx sanity login` then `npx sanity init`
   - `RESEND_API_KEY`, `RESEND_FROM_EMAIL`, `CONTACT_EMAIL_TO` — from [resend.com](https://resend.com)
3. `npm run dev` — site at `localhost:3000`, Sanity Studio at `localhost:3000/studio`

## Content model

- `project` — portfolio case studies (title, slug, summary, body, cover image, tags, live/repo URLs)
- `siteSettings` — singleton for bio, avatar, social links

Add/edit content in the Studio; the homepage queries it live, with a graceful empty state if no Sanity project is configured yet.

## Deploy

```bash
vercel login
vercel link
vercel env add NEXT_PUBLIC_SANITY_PROJECT_ID
vercel env add NEXT_PUBLIC_SANITY_DATASET
vercel env add RESEND_API_KEY
vercel env add RESEND_FROM_EMAIL
vercel env add CONTACT_EMAIL_TO
vercel --prod
```
