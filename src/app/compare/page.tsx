import type { Metadata } from "next";
import { DEFAULT_OG_IMAGE } from "@/lib/site";
import Link from "next/link";
import { getProduct } from "@/data/products";
import { AffiliateButton } from "@/components/AffiliateButton";

export const metadata: Metadata = {
  title: "Espresso machine comparison",
  description:
    "Side-by-side comparison of three BrewWorth espresso machines across budget, mid-range, and convenience.",
  openGraph: {
    title: "Espresso machine comparison",
    description:
      "Side-by-side comparison of three BrewWorth espresso machines across budget, mid-range, and convenience.",
    url: "/compare",
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: "Espresso machine comparison",
    description:
      "Side-by-side comparison of three BrewWorth espresso machines across budget, mid-range, and convenience.",
    images: [DEFAULT_OG_IMAGE.url],
  },
  alternates: { canonical: "/compare" },
};

const slugs = [
  "breville-bambino-plus",
  "gaggia-classic-pro",
  "delonghi-dedica",
] as const;

const rows: { label: string; key: (slug: string) => string }[] = [
  { label: "Price band", key: (s) => getProduct(s)!.priceBand },
  { label: "Budget tier", key: (s) => getProduct(s)!.budget },
  {
    label: "Boiler",
    key: (s) =>
      getProduct(s)!.specs.find((x) => x.label === "Boiler")?.value || "—",
  },
  {
    label: "Portafilter",
    key: (s) =>
      getProduct(s)!.specs.find((x) => x.label === "Portafilter")?.value ||
      "—",
  },
  {
    label: "Steam / milk",
    key: (s) => {
      const p = getProduct(s)!;
      return (
        p.specs.find((x) => x.label === "Milk" || x.label === "Steam")
          ?.value || "—"
      );
    },
  },
  {
    label: "Warranty",
    key: (s) =>
      getProduct(s)!.specs.find((x) => x.label === "Warranty")?.value || "—",
  },
  {
    label: "Best for",
    key: (s) => getProduct(s)!.whoItsFor.split(".")[0] + ".",
  },
];

export default function ComparePage() {
  const machines = slugs.map((s) => getProduct(s)!);

  return (
    <div>
      <h1 className="font-serif text-4xl text-stone-900">
        Espresso machine comparison
      </h1>
      <p className="mt-2 max-w-2xl text-stone-600">
        Three real home espresso machines — Breville Bambino Plus convenience,
        Gaggia Classic Pro craft, and De&apos;Longhi Dedica slim budget — so
        you can match the machine to your mornings. Read the{" "}
        <Link
          href="/guides/breville-vs-gaggia-vs-delonghi"
          className="underline underline-offset-2"
        >
          full brand comparison guide
        </Link>{" "}
        for context.
      </p>

      <div className="mt-10 overflow-x-auto rounded-2xl border border-stone-200 bg-white">
        <table className="min-w-[720px] w-full text-left text-sm">
          <thead>
            <tr className="border-b border-stone-200 bg-stone-50">
              <th className="px-4 py-4 font-medium text-stone-500">Feature</th>
              {machines.map((d) => (
                <th key={d.slug} className="px-4 py-4">
                  <Link
                    href={`/products/${d.slug}`}
                    className="font-serif text-lg text-stone-900 hover:underline"
                  >
                    {d.name}
                  </Link>
                  <p className="mt-1 text-xs font-normal text-stone-500">
                    {d.brand}
                  </p>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr
                key={row.label}
                className="border-b border-stone-100 align-top"
              >
                <th className="px-4 py-3 font-medium text-stone-500">
                  {row.label}
                </th>
                {slugs.map((slug) => (
                  <td key={slug} className="px-4 py-3 text-stone-800">
                    {row.key(slug)}
                  </td>
                ))}
              </tr>
            ))}
            <tr className="align-top">
              <th className="px-4 py-4 font-medium text-stone-500">Shop</th>
              {machines.map((d) => (
                <td key={d.slug} className="px-4 py-4">
                  <AffiliateButton
                    productSlug={d.slug}
                    productName={d.name}
                    amazonAsin={d.amazonAsin}
                    amazonQuery={d.amazonQuery}
                  />
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
