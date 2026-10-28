import { fit } from "@/lib/meta-fit";
import { ItemListLd } from "@/components/SeoLd";
import type { Metadata } from "next";
import { DEFAULT_OG_IMAGE } from "@/lib/site";
import Link from "next/link";
import { notFound } from "next/navigation";
import { categories, getCategory } from "@/data/categories";
import { getTopPicks, getThreePicks } from "@/data/top10";
import { AffiliateButton } from "@/components/AffiliateButton";
import { StickyAffiliateBar } from "@/components/StickyAffiliateBar";
import { getGuidesForCategory } from "@/data/guides";
import { Top10List } from "@/components/Top10List";
import { JsonLd } from "@/components/JsonLd";
import { SITE_URL } from "@/lib/site";
import { BadgePicks } from "@/components/BadgePicks";

type Props = { params: Promise<{ slug: string }> };

const CATEGORY_INTRO: Record<string, string> = {
  "espresso-machines":
    "Match heat-up speed, steam workflow, and portafilter size to your mornings — then pair with a real espresso grinder. Start with our entry-level shortlist if you’re buying your first machine.",
  grinders:
    "Shot quality jumps more from a capable burr grinder than from most machine upgrades. We prioritize espresso-capable steps, consistency, and repairability over badge chasing.",
  "pour-over":
    "Clean filter cups that pair with any espresso bar — V60, Switch, Chemex, AeroPress, Kalita, and SCA-minded drip. Pick a ritual you’ll keep on weekdays.",
  "kettles-scales":
    "A 0.1g scale removes guesswork from bloom, ratio, and dialing. Start affordable; upgrade when you’re logging shots daily.",
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
  "kettles-scales": [{ href: "/guides/gifts-for-coffee-lovers", label: "Gifts for coffee lovers" }],
  "coffee-canisters": [{ href: "/guides/gifts-for-coffee-lovers", label: "Gifts for coffee lovers" }],
  "frothers-accessories": [{ href: "/guides/gifts-for-coffee-lovers", label: "Gifts for coffee lovers" }],
  "espresso-machines": [
    { href: "/guides/breville-bambino-vs-bambino-plus", label: "Bambino vs Bambino Plus" },
    { href: "/guides/best-espresso-machine-with-built-in-grinder", label: "Best machines with a built-in grinder" },
  ],
  grinders: [
    { href: "/guides/best-pour-over-grinder-under-200", label: "Best budget pour-over grinder" },
  ],
  "pour-over": [
    { href: "/guides/gifts-for-coffee-lovers", label: "Gifts for coffee lovers" },
    { href: "/guides/best-pour-over-grinder-under-200", label: "Best budget pour-over grinder" },
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
  const description = fit(`${category.description} Our Top 10 with pros, cons, and budget tiers.`, 160);
  return {
    title: { absolute: title },
    description,
    openGraph: {
      type: "website",
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

  const items = getTopPicks(slug);
  const relatedGuides = getGuidesForCategory(
    slug,
    items.map((p) => p.slug),
    3,
  );
  const intro = CATEGORY_INTRO[slug] ?? category.description;
  const lead = getThreePicks(slug)?.best ?? items[0];
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
      <ItemListLd name={`Top ${items.length} ${category.name}`} items={items.map((p) => ({ name: p.name, path: `/products/${p.slug}` }))} />
      <JsonLd data={breadcrumbLd} />
      <p className="text-xs font-semibold uppercase tracking-wider text-stone-500">
        Category
      </p>
      <h1 className="mt-1 font-serif text-4xl text-stone-900">
        {category.name}
      </h1>
      <p className="mt-3 max-w-2xl text-stone-600">{intro}</p>
      {lead && (
        <div
          className="mt-5 flex flex-col gap-3 rounded-2xl border-2 border-[#9a3f12]/25 bg-white p-4 sm:flex-row sm:items-center sm:justify-between"
          data-top-cta
        >
          <p className="text-sm text-stone-700">
            <span className="font-bold uppercase tracking-wide text-[#9a3f12]">Best Overall:</span>{" "}
            <Link href={`/products/${lead.slug}`} className="font-semibold text-stone-900 underline underline-offset-2">
              {lead.name}
            </Link>
          </p>
          <AffiliateButton
            productSlug={lead.slug}
            productName={lead.name}
            amazonAsin={lead.amazonAsin}
            amazonQuery={lead.amazonQuery}
            placement="category_top"
            className="shrink-0"
          />
        </div>
      )}
      <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-stone-500">
        <Link href="/products" className="underline underline-offset-2">
          All products
        </Link>
        <span>·</span>
        <span>
          Top {items.length} picks
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

      <BadgePicks category={slug} />
      <Top10List items={items} heading={`Top ${items.length} ${category.name}`} />
      {lead && (
        <StickyAffiliateBar
          productSlug={lead.slug}
          productName={lead.name}
          amazonAsin={lead.amazonAsin}
          amazonQuery={lead.amazonQuery}
          label="Best Overall"
          placement="category_sticky"
        />
      )}

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
