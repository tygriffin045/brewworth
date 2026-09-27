# BrewWorth

**Honest picks for better home coffee**

BrewWorth is a Next.js affiliate marketing site for home espresso and coffee gear — machines, grinders, kettles, scales, frothers, and barista accessories. Catalog entries use real Amazon products with verified ASINs where available; affiliate URLs go through `src/lib/affiliate.ts` with tag `brewworth20-20`.

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS
- Typed product / category / guide data in `src/data`

## Run locally

```bash
npm install
cp .env.example .env.local   # optional; defaults to brewworth20-20
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build
npm start
```

## Affiliate links

All product CTAs use `getAffiliateUrl(...)` from `src/lib/affiliate.ts`.

- Prefer `amazonAsin` → `https://www.amazon.com/dp/ASIN?tag=brewworth20-20`
- Else `amazonQuery` → Amazon search with the same tag
- Override tag with `NEXT_PUBLIC_AMAZON_ASSOCIATE_TAG` if needed
- Buy buttons use `rel="nofollow sponsored noopener noreferrer"`

Never use `deskworth20-20` on this site.

## Add a product

1. Open `src/data/products.ts`
2. Add a `Product` object (slug, category, pros/cons, specs, `relatedSlugs`, `amazonQuery`, optional `amazonAsin`)
3. Only use verified ASINs — never invent them. If unsure, omit `amazonAsin` and rely on `amazonQuery`
4. Optionally mark `featured: true` for the homepage
5. Link it from a guide in `src/data/guides.ts` if relevant
6. Optional: drop a product image at `public/products/{ASIN}.jpg` and set `imageUrl` — ProductCard falls back to the gradient placeholder if missing

Categories live in `src/data/categories.ts`. Types are in `src/data/types.ts`.

## Main routes

| Route | Description |
| --- | --- |
| `/` | Homepage |
| `/products` | Index + category/budget filters |
| `/products/[slug]` | Product review |
| `/categories/[slug]` | Category listing |
| `/compare` | Espresso machines side-by-side |
| `/guides` | Guide index |
| `/guides/[slug]` | Buying guide |
| `/about` | About |
| `/affiliate-disclosure` | FTC-style disclosure |

## Deploy to Vercel

1. Push this repo to GitHub
2. Import the project at [vercel.com/new](https://vercel.com/new)
3. Framework preset: Next.js
4. Add `NEXT_PUBLIC_AMAZON_ASSOCIATE_TAG=brewworth20-20` in Project → Settings → Environment Variables (or rely on the code default)
5. Deploy

## License

Private project starter for BrewWorth. Replace disclosure/contact copy before a public launch.
