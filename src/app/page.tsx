import type { Metadata } from "next";
import { DEFAULT_OG_IMAGE } from "@/lib/site";
import Link from "next/link";
import { categories } from "@/data/categories";
import { getFeaturedProducts } from "@/data/products";
import { guides } from "@/data/guides";
import { ProductCard } from "@/components/ProductCard";
import { TrustStrip } from "@/components/TrustStrip";
import { DisclosureLine } from "@/components/DisclosureLine";

export const metadata: Metadata = {
  title: {
    absolute: "BrewWorth — Honest picks for better home coffee",
  },
  description:
    "Expert home espresso picks: best machines under $400, grinders, pour-over, and travel gear — with clear verdicts and Amazon Associate links.",
  openGraph: {
    title: "BrewWorth — Honest picks for better home coffee",
    description:
      "Expert home espresso picks: best machines under $400, grinders, pour-over, and travel gear — with clear verdicts and Amazon Associate links.",
    url: "/",
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: "BrewWorth — Honest picks for better home coffee",
    description:
      "Expert home espresso picks: best machines under $400, grinders, pour-over, and travel gear — with clear verdicts and Amazon Associate links.",
    images: [DEFAULT_OG_IMAGE.url],
  },
  alternates: { canonical: "/" },
};

export default function HomePage() {
  const featured = getFeaturedProducts().slice(0, 6);
  const topGuides = [
    "best-espresso-machines-under-400",
    "espresso-machine-buying-guide",
    "best-espresso-grinders",
  ]
    .map((slug) => guides.find((g) => g.slug === slug))
    .filter((g): g is NonNullable<typeof g> => Boolean(g));

  return (
    <div className="space-y-16">
      <section className="relative overflow-hidden rounded-3xl border border-amber-900/15 bg-[#ebe0d2] px-6 py-14 sm:px-12 sm:py-20">
        <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-[#8b4513]/20 blur-3xl" />
        <div className="absolute -bottom-20 left-1/3 h-56 w-56 rounded-full bg-[#3d2314]/15 blur-3xl" />
        <div className="relative max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8b4513]">
            Home espresso gear, edited
          </p>
          <h1 className="mt-3 font-serif text-4xl leading-tight text-[#2a1a12] sm:text-5xl">
            Buy the right machine once — skip the upgrade regret
          </h1>
          <p className="mt-4 text-lg text-[#4a3728]">
            BrewWorth is an expert coffee niche guide: espresso machines,
            grinders, pour-over, and travel kits with clear verdicts, honest
            cons, and Amazon Associate links — no invented brand scores.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/guides/best-espresso-machines-under-400"
              className="inline-flex min-h-11 items-center rounded-full bg-[#3d2314] px-5 py-2.5 text-sm font-semibold text-[#f6efe6] hover:bg-[#2a1a12]"
            >
              Best under $400
            </Link>
            <Link
              href="/categories/espresso-machines"
              className="inline-flex min-h-11 items-center rounded-full border border-amber-900/30 bg-white/60 px-5 py-2.5 text-sm font-semibold text-[#3d2314] hover:bg-white"
            >
              Espresso machines
            </Link>
            <Link
              href="/guides"
              className="inline-flex min-h-11 items-center rounded-full border border-amber-900/20 px-5 py-2.5 text-sm font-semibold text-[#4a3728] hover:bg-white/50"
            >
              Top buying guides
            </Link>
          </div>
          <DisclosureLine className="mt-5" />
        </div>
      </section>

      <section>
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="font-serif text-3xl text-[#2a1a12]">
              Start with a guide
            </h2>
            <p className="mt-1 text-[#5c4a3a]">
              High-intent reads that send you to the right cart — not every
              upgrade.
            </p>
          </div>
          <Link
            href="/guides"
            className="hidden text-sm font-medium text-[#4a3728] underline underline-offset-4 sm:inline"
          >
            All guides
          </Link>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {topGuides.map((g) => (
            <Link
              key={g.slug}
              href={`/guides/${g.slug}`}
              className="rounded-2xl border border-amber-900/15 bg-white p-5 transition hover:border-amber-800/40 hover:shadow-sm"
            >
              <p className="text-xs text-[#7a6555]">{g.readingTime}</p>
              <h3 className="mt-2 font-serif text-xl text-[#2a1a12]">
                {g.title}
              </h3>
              <p className="mt-2 line-clamp-2 text-sm text-[#5c4a3a]">
                {g.description}
              </p>
              <span className="mt-3 inline-block text-sm font-semibold text-[#8b4513]">
                Read guide →
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section>
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="font-serif text-3xl text-[#2a1a12]">
              Shop by category
            </h2>
            <p className="mt-1 text-[#5c4a3a]">
              Machines, grinders, pour-over, travel, scales, accessories, and
              cleaning — start where the setup needs it.
            </p>
          </div>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {categories.map((c) => (
            <Link
              key={c.slug}
              href={`/categories/${c.slug}`}
              className="rounded-2xl border border-amber-900/15 bg-white p-5 transition hover:border-amber-800/40 hover:shadow-sm"
            >
              <p className="text-xs font-semibold uppercase tracking-wider text-[#7a6555]">
                Category
              </p>
              <h3 className="mt-1 font-serif text-xl text-[#2a1a12]">
                {c.name}
              </h3>
              <p className="mt-2 line-clamp-2 text-sm text-[#5c4a3a]">
                {c.description}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section>
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="font-serif text-3xl text-[#2a1a12]">Top picks</h2>
            <p className="mt-1 text-[#5c4a3a]">
              Featured gear we&apos;d put on our own counters first.
            </p>
          </div>
          <Link
            href="/products"
            className="hidden text-sm font-medium text-[#4a3728] underline underline-offset-4 sm:inline"
          >
            View all
          </Link>
        </div>
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

      <TrustStrip />

      <section>
        <h2 className="font-serif text-3xl text-[#2a1a12]">Buying guides</h2>
        <p className="mt-1 text-[#5c4a3a]">
          Longer reads with internal links to the products we mention.
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {guides.map((g) => (
            <Link
              key={g.slug}
              href={`/guides/${g.slug}`}
              className="rounded-2xl border border-amber-900/15 bg-white p-6 hover:border-amber-800/40"
            >
              <p className="text-xs text-[#7a6555]">
                {g.readingTime} · {g.publishedAt}
              </p>
              <h3 className="mt-2 font-serif text-xl text-[#2a1a12]">
                {g.title}
              </h3>
              <p className="mt-2 text-sm text-[#5c4a3a]">{g.description}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
