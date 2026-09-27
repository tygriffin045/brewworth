import type { Metadata } from "next";
import { DEFAULT_OG_IMAGE } from "@/lib/site";
import Link from "next/link";
import { notFound } from "next/navigation";
import { categories, getCategory } from "@/data/categories";
import { getProductsByCategory } from "@/data/products";
import { getGuidesForCategory } from "@/data/guides";
import { ProductCard } from "@/components/ProductCard";
import { DisclosureLine } from "@/components/DisclosureLine";
import { JsonLd } from "@/components/JsonLd";
import { SITE_URL } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

const CATEGORY_INTRO: Record<string, string> = {
  "espresso-machines":
    "Match heat-up speed, steam workflow, and portafilter size to your mornings — then pair with a real espresso grinder. Start with our under-$400 shortlist if you’re buying your first machine.",
  grinders:
    "Shot quality jumps more from a capable burr grinder than from most machine upgrades. We prioritize espresso-capable steps, consistency, and repairability over badge chasing.",
  "pour-over":
    "Clean filter cups that pair with any espresso bar — V60, Switch, Chemex, AeroPress, Kalita, and SCA-minded drip. Pick a ritual you’ll keep on weekdays.",
  "kettles-scales":
    "Temperature control and 0.1g resolution remove guesswork from bloom, ratio, and dialing. Start affordable; upgrade when you’re logging shots daily.",
  "travel-espresso":
    "Manual levers and portable electrics for hotels, camping, and offices — real pressure without a full countertop setup. Pack light, brew intentionally.",
  "frothers-accessories":
    "Milk texture, tampers, pitchers, and puck screens that turn a machine into a real home barista station — buy after machine + grinder, not before.",
  "cleaning-maintenance":
    "Backflush detergent, descaler, and blind baskets keep shots sweet and valves healthy. The unsexy kit that protects every other purchase on this site.",
};

const CATEGORY_GUIDE_LINKS: Record<string, string> = {
  "espresso-machines": "/guides/best-espresso-machines-under-400",
  grinders: "/guides/best-espresso-grinders",
  "pour-over": "/guides/best-pour-over-setups-2026",
  "kettles-scales": "/guides/best-coffee-scales-for-espresso",
  "travel-espresso": "/guides/best-travel-espresso-makers",
  "frothers-accessories": "/guides/best-milk-frothers-latte-art",
  "cleaning-maintenance": "/guides/cleaning-maintenance-essentials",
};

/** Extra high-intent guides surfaced on specific category pages. */
const CATEGORY_SPOTLIGHT_GUIDES: Record<string, { href: string; label: string }[]> = {
  "espresso-machines": [
    { href: "/guides/breville-bambino-vs-bambino-plus", label: "Bambino vs Bambino Plus" },
    { href: "/guides/best-espresso-machine-with-built-in-grinder", label: "Best machines with a built-in grinder" },
  ],
  grinders: [
    { href: "/guides/best-pour-over-grinder-under-200", label: "Best pour-over grinder under $200" },
  ],
  "pour-over": [
    { href: "/guides/best-pour-over-grinder-under-200", label: "Best pour-over grinder under $200" },
  ],
};

export function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) return { title: "Category not found" };
  const title = `${category.name} — BrewWorth picks`;
  const description = `${category.description} Compare featured picks with clear verdicts and Amazon Associate links.`;
  return {
    title: { absolute: title },
    description,
    openGraph: {
      title,
      description,
      url: `/categories/${slug}`,
      images: [DEFAULT_OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [DEFAULT_OG_IMAGE.url],
    },
    alternates: { canonical: `/categories/${slug}` },
  };
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) notFound();

  const items = getProductsByCategory(slug);
  const featured = items.filter((p) => p.featured).slice(0, 3);
  const featuredSlugs = new Set(featured.map((p) => p.slug));
  const rest = items.filter((p) => !featuredSlugs.has(p.slug));
  const relatedGuides = getGuidesForCategory(
    slug,
    items.map((p) => p.slug),
    3,
  );
  const intro = CATEGORY_INTRO[slug] ?? category.description;
  const primaryGuide = CATEGORY_GUIDE_LINKS[slug];
  const catUrl = `${SITE_URL}/categories/${slug}`;
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Products",
        item: `${SITE_URL}/products`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: category.name,
        item: catUrl,
      },
    ],
  };

  return (
    <div>
      <JsonLd data={breadcrumbLd} />
      <p className="text-xs font-semibold uppercase tracking-wider text-stone-500">
        Category
      </p>
      <h1 className="mt-1 font-serif text-4xl text-stone-900">
        {category.name}
      </h1>
      <p className="mt-3 max-w-2xl text-stone-600">{intro}</p>
      <DisclosureLine className="mt-3" />
      <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-stone-500">
        <Link href="/products" className="underline underline-offset-2">
          All products
        </Link>
        <span>·</span>
        <span>
          {items.length} in this category
        </span>
        {primaryGuide && (
          <>
            <span>·</span>
            <Link
              href={primaryGuide}
              className="font-medium text-[#6b3410] underline underline-offset-2"
            >
              Related buying guide
            </Link>
          </>
        )}
        {(CATEGORY_SPOTLIGHT_GUIDES[slug] ?? []).map((g) => (
          <span key={g.href} className="contents">
            <span>·</span>
            <Link
              href={g.href}
              className="font-medium text-[#6b3410] underline underline-offset-2"
            >
              {g.label}
            </Link>
          </span>
        ))}
      </div>

      {featured.length > 0 && (
        <section className="mt-10">
          <h2 className="font-serif text-2xl text-stone-900">Featured picks</h2>
          <p className="mt-1 text-sm text-stone-600">
            Start here if you want our strongest recommendations in this
            category.
          </p>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((p, i) => (
              <ProductCard
                key={p.slug}
                product={p}
                priority={i === 0}
                showAffiliateCta
              />
            ))}
          </div>
        </section>
      )}

      <section className="mt-12">
        <h2 className="font-serif text-2xl text-stone-900">
          {featured.length > 0 ? "All in this category" : "Picks"}
        </h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {(featured.length > 0 ? rest : items).map((p) => (
            <ProductCard key={p.slug} product={p} showAffiliateCta />
          ))}
        </div>
      </section>

      {relatedGuides.length > 0 && (
        <section className="mt-14">
          <h2 className="font-serif text-2xl text-stone-900">
            Guides that mention this gear
          </h2>
          <ul className="mt-4 space-y-3">
            {relatedGuides.map((g) => (
              <li key={g.slug}>
                <Link
                  href={`/guides/${g.slug}`}
                  className="font-medium text-[#6b3410] underline underline-offset-4"
                >
                  {g.title}
                </Link>
                <p className="mt-0.5 text-sm text-stone-600">{g.description}</p>
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}
