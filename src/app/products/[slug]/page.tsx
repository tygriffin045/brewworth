import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getProduct,
  getRelatedProducts,
  products,
} from "@/data/products";
import { getCategory } from "@/data/categories";
import { getGuidesForProduct } from "@/data/guides";
import { AffiliateButton } from "@/components/AffiliateButton";
import { ProductCard } from "@/components/ProductCard";
import { DisclosureLine } from "@/components/DisclosureLine";
import { JsonLd } from "@/components/JsonLd";
import { SITE_URL } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return { title: "Product not found" };
  const title = `${product.name} review — ${product.tagline}`;
  const description =
    product.summary.length > 155
      ? `${product.summary.slice(0, 152)}…`
      : product.summary;
  return {
    title,
    description,
    openGraph: {
      title: product.name,
      description,
      url: `/products/${slug}`,
      ...(product.imageUrl
        ? { images: [{ url: product.imageUrl, alt: product.imageAlt }] }
        : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: product.name,
      description,
    },
    alternates: { canonical: `/products/${slug}` },
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const category = getCategory(product.category);
  const related = getRelatedProducts(product);
  const relatedGuides = getGuidesForProduct(product.slug, 3);
  const productUrl = `${SITE_URL}/products/${product.slug}`;
  const imageAbs = product.imageUrl
    ? product.imageUrl.startsWith("http")
      ? product.imageUrl
      : `${SITE_URL}${product.imageUrl}`
    : undefined;
  const productLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.summary,
    brand: { "@type": "Brand", name: product.brand },
    ...(imageAbs ? { image: [imageAbs] } : {}),
  };
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
      ...(category
        ? [
            {
              "@type": "ListItem" as const,
              position: 2,
              name: category.name,
              item: `${SITE_URL}/categories/${category.slug}`,
            },
            {
              "@type": "ListItem" as const,
              position: 3,
              name: product.name,
              item: productUrl,
            },
          ]
        : [
            {
              "@type": "ListItem" as const,
              position: 2,
              name: product.name,
              item: productUrl,
            },
          ]),
    ],
  };

  return (
    <article>
      <JsonLd data={[productLd, breadcrumbLd]} />
      <nav className="text-sm text-stone-500" aria-label="Breadcrumb">
        <Link href="/products" className="hover:text-stone-800">
          Products
        </Link>
        <span className="mx-2">/</span>
        {category && (
          <>
            <Link
              href={`/categories/${category.slug}`}
              className="hover:text-stone-800"
            >
              {category.name}
            </Link>
            <span className="mx-2">/</span>
          </>
        )}
        <span className="text-stone-700">{product.name}</span>
      </nav>

      <div className="mt-6 grid gap-10 lg:grid-cols-2">
        <div
          className={`relative aspect-[4/3] overflow-hidden rounded-3xl border border-stone-200 bg-stone-50 bg-gradient-to-br ${product.imageGradient}`}
        >
          {product.imageUrl ? (
            <Image
              src={product.imageUrl}
              alt={product.imageAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-contain p-6"
              priority
            />
          ) : (
            <div
              className="absolute inset-0 opacity-35 mix-blend-overlay bg-[radial-gradient(circle_at_25%_20%,white,transparent_50%)]"
              role="img"
              aria-label={product.imageAlt}
            />
          )}
        </div>
        <div>
          <p className="text-xs uppercase tracking-wider text-stone-500">
            {product.brand} · {category?.name}
          </p>
          <h1 className="mt-2 font-serif text-4xl text-stone-900">
            {product.name}
          </h1>
          <p className="mt-3 rounded-xl border border-amber-900/15 bg-[#ebe0d2]/60 px-4 py-3 text-base font-medium text-[#3d2314]">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-[#8b4513]">
              Verdict
            </span>
            <br />
            {product.tagline}
          </p>
          <p className="mt-4 text-stone-600">{product.summary}</p>
          <AffiliateButton
            productSlug={product.slug}
            productName={product.name}
            amazonAsin={product.amazonAsin}
            amazonQuery={product.amazonQuery}
            className="mt-6 [&_a]:min-h-11"
          />
          <DisclosureLine className="mt-3" />
        </div>
      </div>

      <div className="mt-14 grid gap-8 md:grid-cols-2">
        <section className="rounded-2xl border border-emerald-200 bg-emerald-50/50 p-6">
          <h2 className="font-serif text-2xl text-stone-900">Pros</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-stone-700">
            {product.pros.map((pro) => (
              <li key={pro}>{pro}</li>
            ))}
          </ul>
        </section>
        <section className="rounded-2xl border border-rose-200 bg-rose-50/40 p-6">
          <h2 className="font-serif text-2xl text-stone-900">Cons</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-stone-700">
            {product.cons.map((con) => (
              <li key={con}>{con}</li>
            ))}
          </ul>
        </section>
      </div>

      <section className="mt-10 rounded-2xl border border-stone-200 bg-white p-6">
        <h2 className="font-serif text-2xl text-stone-900">Who it&apos;s for</h2>
        <p className="mt-3 text-stone-700">{product.whoItsFor}</p>
      </section>

      <section className="mt-10">
        <h2 className="font-serif text-2xl text-stone-900">Specs</h2>
        <dl className="mt-4 divide-y divide-stone-200 rounded-2xl border border-stone-200 bg-white">
          {product.specs.map((spec) => (
            <div
              key={spec.label}
              className="flex justify-between gap-4 px-5 py-3 text-sm"
            >
              <dt className="text-stone-500">{spec.label}</dt>
              <dd className="font-medium text-stone-900">{spec.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      {relatedGuides.length > 0 && (
        <section className="mt-14">
          <h2 className="font-serif text-2xl text-stone-900">
            Guides that mention this product
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

      {related.length > 0 && (
        <section className="mt-14">
          <h2 className="font-serif text-2xl text-stone-900">
            Related products
          </h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p) => (
              <ProductCard key={p.slug} product={p} showAffiliateCta />
            ))}
          </div>
        </section>
      )}

      {/* Mobile sticky CTA — uses existing AffiliateButton (Optim-owned) */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-amber-900/15 bg-[#f6efe6]/95 p-3 backdrop-blur md:hidden">
        <AffiliateButton
          productSlug={product.slug}
          productName={product.name}
          amazonAsin={product.amazonAsin}
          amazonQuery={product.amazonQuery}
          label="Check price on Amazon"
          className="[&_a]:min-h-11 [&_a]:w-full [&_a]:py-3 [&_a]:text-center"
        />
      </div>
      <div className="h-20 md:hidden" aria-hidden />
    </article>
  );
}
