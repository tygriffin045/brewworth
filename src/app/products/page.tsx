import type { Metadata } from "next";
import { DEFAULT_OG_IMAGE } from "@/lib/site";
import { products } from "@/data/products";
import { ProductFilters } from "@/components/ProductFilters";

export const metadata: Metadata = {
  title: "All products — espresso machines, grinders & more",
  description:
    "Browse BrewWorth home coffee picks: espresso machines, grinders, pour-over, travel, and accessories. Filter by category and budget with clear verdicts.",
  openGraph: {
    title: "All products — espresso machines, grinders & more",
    description:
      "Browse BrewWorth home coffee picks: espresso machines, grinders, pour-over, travel, and accessories. Filter by category and budget with clear verdicts.",
    url: "/products",
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: "All products — espresso machines, grinders & more",
    description:
      "Browse BrewWorth home coffee picks: espresso machines, grinders, pour-over, travel, and accessories. Filter by category and budget with clear verdicts.",
    images: [DEFAULT_OG_IMAGE.url],
  },
  alternates: { canonical: "/products" },
};

export default function ProductsIndexPage() {
  return (
    <div>
      <h1 className="font-serif text-4xl text-stone-900">All products</h1>
      <p className="mt-2 max-w-2xl text-stone-600">
        Filter by category and budget band. Every product page includes pros,
        cons, who it&apos;s for, and a link to check the current price.
      </p>
      <div className="mt-8">
        <ProductFilters products={products} />
      </div>
    </div>
  );
}
