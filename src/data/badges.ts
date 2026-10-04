// Generated 2026-10-04 by /workspace/top10/badges (choose.py + gen.py) from live Amazon prices of each category's Top 10.
// Prices and the full price table live in /badges.json (not rendered). Re-run the scripts to refresh.
export type BadgeKind = "premium" | "bang" | "value";

export const BADGE_PICKS: Record<string, { badge: BadgeKind; slug: string; line: string }[]> = {
  "espresso-machines": [{ badge: "premium", slug: "breville-barista-pro", line: "Among the highest-end picks in this Top 10, and well rated on Amazon." }, { badge: "bang", slug: "breville-barista-express", line: "Mid-priced Amazon Best Seller with far more Amazon ratings than any other machine in this Top 10." }, { badge: "value", slug: "breville-bambino", line: "Among the lowest-priced picks in this Top 10, and an Amazon Best Seller." }],
  "pour-over": [{ badge: "premium", slug: "aeropress-xl", line: "Highest-end pick in this Top 10: the XL AeroPress for press, pour-over, and espresso-style brewing." }, { badge: "bang", slug: "hario-v60-02", line: "Mid-priced Amazon Best Seller: the ceramic V60 dripper in size 02." }, { badge: "value", slug: "bodum-34oz-pour-over-coffee-maker", line: "Lowest-priced pick in this Top 10, still well rated on Amazon: borosilicate glass with a reusable stainless steel filter." }],
};
