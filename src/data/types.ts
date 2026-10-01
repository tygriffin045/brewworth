export type CategorySlug =
  | "coffee-canisters"
  | "espresso-machines"
  | "grinders"
  | "kettles-scales"
  | "frothers-accessories"
  | "pour-over"
  | "travel-espresso"
  | "cleaning-maintenance"
  | "coffee-storage";

export type BudgetBand = "budget" | "mid" | "premium";

export interface ProductSpec {
  label: string;
  value: string;
}

export interface Product {
  slug: string;
  name: string;
  brand: string;
  category: CategorySlug;
  tagline: string;
  summary: string;
  priceBand: string;
  budget: BudgetBand;
  priceMin: number;
  priceMax: number;
  imageGradient: string;
  imageAlt: string;
  /** Local product image under /products when available */
  imageUrl?: string;
  featured: boolean;
  pros: string[];
  cons: string[];
  whoItsFor: string;
  specs: ProductSpec[];
  relatedSlugs: string[];
  /** Amazon ASIN when known — preferred for affiliate links */
  amazonAsin?: string;
  /** Amazon search query used until a real ASIN is set */
  amazonQuery: string;
}

export interface Category {
  slug: CategorySlug;
  name: string;
  description: string;
  shortLabel: string;
}

export interface GuidePick {
  productSlug: string;
  /** Short award label, e.g. "Best overall" */
  label: string;
  /** One-line verdict shown in the quick-pick summary */
  verdict: string;
  pros: string[];
  cons: string[];
  bestFor: string;
}

export interface GuideFaq {
  question: string;
  answer: string;
}

export interface Guide {
  slug: string;
  title: string;
  description: string;
  readingTime: string;
  publishedAt: string;
  productSlugs: string[];
  sections: { heading: string; body: string }[];
  /** Optional SEO overrides (fall back to title/description) */
  metaTitle?: string;
  metaDescription?: string;
  /** Optional short intro shown under the H1 instead of description */
  intro?: string;
  /** Optional ranked picks with pros/cons — renders quick-pick summary + detailed reviews */
  picks?: GuidePick[];
  /** Optional buying-criteria bullets */
  criteria?: { heading: string; points: { title: string; body: string }[] };
  /** Optional internal "see also" links */
  seeAlso?: { href: string; label: string }[];
  /** Optional FAQ — renders on page and as FAQPage JSON-LD */
  faqs?: GuideFaq[];
}
