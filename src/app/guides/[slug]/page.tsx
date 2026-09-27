import type { Metadata } from "next";
import { DEFAULT_OG_IMAGE } from "@/lib/site";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getGuide, getRelatedGuides, guides } from "@/data/guides";
import { getProduct } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";
import { AffiliateButton } from "@/components/AffiliateButton";
import { DisclosureLine } from "@/components/DisclosureLine";
import { JsonLd } from "@/components/JsonLd";
import { SITE_URL, SITE_NAME } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return guides.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) return { title: "Guide not found" };
  const title = guide.title;
  const description = guide.description;
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `/guides/${slug}`,
      type: "article",
      images: [DEFAULT_OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [DEFAULT_OG_IMAGE.url],
    },
    alternates: { canonical: `/guides/${slug}` },
  };
}

export default async function GuidePage({ params }: Props) {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) notFound();

  const linkedProducts = guide.productSlugs
    .map((s) => getProduct(s))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));
  const topPicks = linkedProducts.slice(0, 3);
  const relatedGuides = getRelatedGuides(guide.slug, 3);
  const guideUrl = `${SITE_URL}/guides/${guide.slug}`;
  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: guide.title,
    description: guide.description,
    datePublished: guide.publishedAt,
    mainEntityOfPage: guideUrl,
    author: { "@type": "Organization", name: SITE_NAME },
  };
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Guides",
        item: `${SITE_URL}/guides`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: guide.title,
        item: guideUrl,
      },
    ],
  };

  return (
    <article className="max-w-3xl">
      <JsonLd data={[articleLd, breadcrumbLd]} />
      <p className="text-xs text-stone-500">
        <Link href="/guides" className="hover:text-stone-800">
          Guides
        </Link>{" "}
        · {guide.readingTime} · {guide.publishedAt}
      </p>
      <h1 className="mt-3 font-serif text-4xl leading-tight text-stone-900">
        {guide.title}
      </h1>
      <p className="mt-4 text-lg text-stone-700">{guide.description}</p>
      <DisclosureLine className="mt-3" />

      {topPicks.length > 0 && (
        <section className="mt-8 rounded-2xl border border-amber-900/15 bg-[#ebe0d2]/50 p-5 sm:p-6">
          <h2 className="font-serif text-2xl text-[#2a1a12]">
            Our picks at a glance
          </h2>
          <p className="mt-1 text-sm text-[#5c4a3a]">
            Jump to a product or check live Amazon pricing — then read the full
            guide below.
          </p>
          <div className="mt-5 grid gap-4 sm:grid-cols-3">
            {topPicks.map((p) => (
              <div
                key={p.slug}
                className="flex flex-col rounded-xl border border-amber-900/10 bg-white p-4"
              >
                <Link
                  href={`/products/${p.slug}`}
                  className="font-serif text-lg text-[#2a1a12] hover:underline"
                >
                  {p.name}
                </Link>
                <p className="mt-1 line-clamp-2 text-xs text-[#5c4a3a]">
                  {p.tagline}
                </p>
                <p className="mt-2 text-sm font-medium text-[#3d2314]">
                  {p.priceBand}
                </p>
                <AffiliateButton
                  productSlug={p.slug}
                  productName={p.name}
                  amazonAsin={p.amazonAsin}
                  amazonQuery={p.amazonQuery}
                  label="Check price"
                  className="mt-3 [&_a]:min-h-11 [&_a]:w-full [&_a]:py-2.5 [&_a]:text-center [&_a]:text-xs"
                />
              </div>
            ))}
          </div>
        </section>
      )}

      <div className="mt-10 space-y-10">
        {guide.sections.map((section) => (
          <section key={section.heading}>
            <h2 className="font-serif text-2xl text-stone-900">
              {section.heading}
            </h2>
            <p className="mt-3 leading-relaxed text-stone-700">{section.body}</p>
          </section>
        ))}
      </div>

      <section className="mt-14">
        <h2 className="font-serif text-2xl text-stone-900">
          Products mentioned
        </h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {linkedProducts.map((p) => (
            <ProductCard key={p.slug} product={p} showAffiliateCta />
          ))}
        </div>
      </section>

      {relatedGuides.length > 0 && (
        <section className="mt-14">
          <h2 className="font-serif text-2xl text-stone-900">Related guides</h2>
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
    </article>
  );
}
