import Link from "next/link";
import { AFFILIATE_DISCLOSURE_SHORT } from "@/lib/affiliate";

const items = [
  {
    title: "We brew what we’d recommend",
    body: "Picks reflect practical home espresso use, not paid rankings or invented scores.",
  },
  {
    title: "Clear affiliate disclosure",
    body: "If we earn a commission, we say so in plain language.",
  },
  {
    title: "Amazon Associate links",
    body: "Buy buttons go to Amazon with our Associates tag. We may earn a commission at no extra cost to you.",
  },
];

export function TrustStrip() {
  return (
    <section className="rounded-2xl border border-amber-800/25 bg-[#ebe0d2]/80 px-5 py-6 sm:px-8">
      <p className="text-xs text-[#7a6555]">
        {AFFILIATE_DISCLOSURE_SHORT}{" "}
        <Link
          href="/affiliate-disclosure"
          className="font-medium text-[#6b3410] underline underline-offset-2"
        >
          Full disclosure
        </Link>
      </p>
      <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-[#8b4513]/90">
            How BrewWorth works
          </p>
          <h2 className="mt-1 font-serif text-2xl text-[#2a1a12]">
            Affiliate transparency, not hype
          </h2>
        </div>
        <Link
          href="/affiliate-disclosure"
          className="text-sm font-medium text-[#6b3410] underline underline-offset-4"
        >
          Read our FTC disclosure →
        </Link>
      </div>
      <div className="mt-6 grid gap-5 sm:grid-cols-3">
        {items.map((item) => (
          <div key={item.title}>
            <p className="font-medium text-[#2a1a12]">{item.title}</p>
            <p className="mt-1 text-sm text-[#5c4a3a]">{item.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
