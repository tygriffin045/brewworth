import type { Metadata } from "next";
import { DEFAULT_OG_IMAGE } from "@/lib/site";
import Image from "next/image";
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
  const title = guide.metaTitle ?? guide.title;
  const description = guide.metaDescription ?? guide.description;
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
  const picks = (guide.picks ?? [])
    .map((pick) => ({ pick, product: getProduct(pick.productSlug) }))
    .filter(
      (x): x is { pick: typeof x.pick; product: NonNullable<typeof x.product> } =>
        Boolean(x.product),
    );
  const faqLd =
    guide.faqs && guide.faqs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: guide.faqs.map((f) => ({
            "@type": "Question",
            name: f.question,
            acceptedAnswer: { "@type": "Answer", text: f.answer },
          })),
        }
      : null;
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
      <JsonLd
        data={faqLd ? [articleLd, breadcrumbLd, faqLd] : [articleLd, breadcrumbLd]}
      />
      <p className="text-xs text-stone-500">
        <Link href="/guides" className="hover:text-stone-800">
          Guides
        </Link>{" "}
        · {guide.readingTime} · {guide.publishedAt}
      </p>
      <h1 className="mt-3 font-serif text-4xl leading-tight text-stone-900">
        {guide.title}
      </h1>
      <p className="mt-4 text-lg text-stone-700">
        {guide.intro ?? guide.description}
      </p>
      <DisclosureLine className="mt-3" />

      {picks.length > 0 && (
        <section
          id="quick-picks"
          className="mt-8 rounded-2xl border border-amber-900/15 bg-[#ebe0d2]/50 p-5 sm:p-6"
        >
          <h2 className="font-serif text-2xl text-[#2a1a12]">Quick picks</h2>
          <ul className="mt-4 divide-y divide-amber-900/10">
            {picks.map(({ pick, product: p }) => (
              <li
                key={p.slug}
                className="flex flex-col gap-3 py-4 sm:flex-row sm:items-center sm:justify-between"
              >
                <div className="min-w-0">
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-[#8b4513]">
                    {pick.label}
                  </p>
                  <a
                    href={`#pick-${p.slug}`}
                    className="font-serif text-lg text-[#2a1a12] hover:underline"
                  >
                    {p.name}
                  </a>
                  <p className="mt-0.5 text-sm text-[#5c4a3a]">{pick.verdict}</p>
                </div>
                <AffiliateButton
                  productSlug={p.slug}
                  productName={p.name}
                  amazonAsin={p.amazonAsin}
                  amazonQuery={p.amazonQuery}
                  label="Check price"
                  className="shrink-0 [&_a]:min-h-11 [&_a]:py-2.5 [&_a]:text-xs"
                />
              </li>
            ))}
          </ul>
        </section>
      )}

      {picks.length === 0 && topPicks.length > 0 && (
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

      {picks.length > 0 && (
        <section className="mt-12">
          <h2 className="font-serif text-3xl text-stone-900">
            The picks, reviewed
          </h2>
          <div className="mt-6 space-y-8">
            {picks.map(({ pick, product: p }) => (
              <article
                key={p.slug}
                id={`pick-${p.slug}`}
                className="scroll-mt-24 rounded-2xl border border-amber-900/15 bg-white p-5 sm:p-6"
              >
                <div className="flex flex-col gap-5 sm:flex-row">
                  {p.imageUrl && (
                    <Link
                      href={`/products/${p.slug}`}
                      className="relative mx-auto h-40 w-40 shrink-0 overflow-hidden rounded-xl bg-[#ebe0d2]"
                    >
                      <Image
                        src={p.imageUrl}
                        alt={p.imageAlt}
                        fill
                        sizes="160px"
                        className="object-contain p-3"
                      />
                    </Link>
                  )}
                  <div className="min-w-0 flex-1">
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-[#8b4513]">
                      {pick.label}
                    </p>
                    <h3 className="font-serif text-2xl text-[#2a1a12]">
                      <Link href={`/products/${p.slug}`} className="hover:underline">
                        {p.name}
                      </Link>
                    </h3>
                    <p className="mt-2 text-stone-700">{pick.verdict}</p>
                  </div>
                </div>
                <div className="mt-5 grid gap-5 sm:grid-cols-2">
                  <div>
                    <h4 className="text-sm font-semibold text-emerald-900">Pros</h4>
                    <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-stone-700">
                      {pick.pros.map((x) => (
                        <li key={x}>{x}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-rose-900">Cons</h4>
                    <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-stone-700">
                      {pick.cons.map((x) => (
                        <li key={x}>{x}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <p className="mt-5 rounded-lg bg-[#ebe0d2]/60 px-3 py-2 text-sm text-[#3d2314]">
                  <span className="font-semibold">Who it suits: </span>
                  {pick.bestFor}
                </p>
                <div className="mt-4 flex flex-wrap items-center gap-4">
                  <AffiliateButton
                    productSlug={p.slug}
                    productName={p.name}
                    amazonAsin={p.amazonAsin}
                    amazonQuery={p.amazonQuery}
                    label="Check price on Amazon"
                  />
                  <Link
                    href={`/products/${p.slug}`}
                    className="text-sm font-medium text-[#6b3410] underline underline-offset-4"
                  >
                    Full review
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}

      {guide.criteria && (
        <section className="mt-12">
          <h2 className="font-serif text-2xl text-stone-900">
            {guide.criteria.heading}
          </h2>
          <dl className="mt-4 space-y-4">
            {guide.criteria.points.map((pt) => (
              <div key={pt.title}>
                <dt className="font-semibold text-stone-900">{pt.title}</dt>
                <dd className="mt-1 leading-relaxed text-stone-700">{pt.body}</dd>
              </div>
            ))}
          </dl>
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

      {guide.seeAlso && guide.seeAlso.length > 0 && (
        <nav className="mt-10 rounded-2xl border border-amber-900/15 bg-white p-5">
          <h2 className="font-serif text-xl text-stone-900">Keep reading</h2>
          <ul className="mt-3 space-y-2">
            {guide.seeAlso.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="font-medium text-[#6b3410] underline underline-offset-4"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}

      {guide.faqs && guide.faqs.length > 0 && (
        <section className="mt-14">
          <h2 className="font-serif text-2xl text-stone-900">
            Frequently asked questions
          </h2>
          <div className="mt-4 space-y-5">
            {guide.faqs.map((f) => (
              <div key={f.question}>
                <h3 className="font-semibold text-stone-900">{f.question}</h3>
                <p className="mt-1 leading-relaxed text-stone-700">{f.answer}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {picks.length === 0 && (
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
      )}

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
