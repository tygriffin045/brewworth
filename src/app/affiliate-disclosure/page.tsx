import type { Metadata } from "next";
import { DEFAULT_OG_IMAGE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Affiliate disclosure",
  description:
    "FTC affiliate disclosure for BrewWorth — how commissions work in plain language.",
  openGraph: {
    title: "Affiliate disclosure",
    description:
      "FTC affiliate disclosure for BrewWorth — how commissions work in plain language.",
    url: "/affiliate-disclosure",
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: "Affiliate disclosure",
    description:
      "FTC affiliate disclosure for BrewWorth — how commissions work in plain language.",
    images: [DEFAULT_OG_IMAGE.url],
  },
  alternates: { canonical: "/affiliate-disclosure" },
};

export default function AffiliateDisclosurePage() {
  return (
    <article className="max-w-3xl">
      <h1 className="font-serif text-4xl text-[#2a1a12]">
        Affiliate disclosure
      </h1>
      <p className="mt-4 text-lg text-[#4a3728]">
        BrewWorth participates in the Amazon Associates Program and other
        affiliate marketing programs. Here is what that means in plain language.
      </p>

      <h2 className="mt-10 font-serif text-2xl text-[#2a1a12]">
        We may earn a commission
      </h2>
      <p className="mt-3 text-[#4a3728]">
        Some links on this site are affiliate links. If you click one and buy
        something, we may receive a commission from the retailer. You do not pay
        more because you used our link.
      </p>

      <h2 className="mt-10 font-serif text-2xl text-[#2a1a12]">
        Opinions are still ours
      </h2>
      <p className="mt-3 text-[#4a3728]">
        Affiliate relationships do not buy rankings or force positive reviews.
        We describe tradeoffs — including cons — because trust matters more than
        a single conversion. We link to real Amazon product pages when available.
        We do not show prices; Amazon&apos;s live checkout price always
        wins.
      </p>

      <h2 className="mt-10 font-serif text-2xl text-[#2a1a12]">
        Amazon Associates
      </h2>
      <p className="mt-3 text-[#4a3728]">
        As an Amazon Associate, BrewWorth earns from qualifying purchases. Buy
        buttons on product pages take you to Amazon with our tracking ID so we
        can be credited if you purchase.
      </p>

      <h2 className="mt-10 font-serif text-2xl text-[#2a1a12]">Questions</h2>
      <p className="mt-3 text-[#4a3728]">
        This disclosure is intended to comply with FTC endorsement guidelines
        requiring clear, conspicuous notice of material connections.
      </p>
    </article>
  );
}
