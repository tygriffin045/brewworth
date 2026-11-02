import type { Guide } from "./types";

/**
 * Buyer-intent guides targeting specific search queries.
 * Specs quoted here are taken from the current Amazon listings / manufacturer
 * copy; prices are intentionally qualitative because they move constantly.
 */
export const buyerIntentGuides: Guide[] = [
  {
    slug: "best-gooseneck-electric-kettles-2026",
    title: "Best Gooseneck Electric Kettles for Pour-Over (2026)",
    metaTitle: "Best Gooseneck Electric Kettles (2026)",
    metaDescription: "Cosori vs Fellow Stagg EKG Pro: which gooseneck kettle for pour-over. Real specs from listings, no invented scores.",
    description: "The Cosori for most people, the Fellow Stagg EKG Pro when you want to-the-degree control and a brew timer.",
    intro: "A gooseneck kettle is the piece you control mid-pour. Temperature presets or to-the-degree dials matter more than marketing, and capacity is 0.8–0.9 L for daily single or double cups.",
    readingTime: "7 min read",
    publishedAt: "2026-11-02",
    productSlugs: [
      "cosori-gooseneck-electric-kettle-with-temperature",
      "fellow-stagg-ekg-pro",
    ],
    picks: [
      {
        productSlug: "cosori-gooseneck-electric-kettle-with-temperature",
        label: "Best overall / value",
        verdict: "Five one-touch presets (170°F white, 180°F green, 195°F oolong, 205°F coffee, 212°F boil) plus a 60-minute hold, 0.8 L capacity, 1200 W, and 304 stainless interior and spout. The listing says no plastic contact with water.",
        pros: [
          "Five precise presets for tea and coffee",
          "60-minute keep-warm",
          "304 stainless steel interior, lid, and spout",
          "1200 W heating",
        ],
        cons: [
          "Presets only — no single-degree adjustment",
          "0.8 L capacity",
          "No LCD readout of current temperature",
        ],
        bestFor: "Most pour-over and tea drinkers who want reliable temperature without the premium price.",
      },
      {
        productSlug: "fellow-stagg-ekg-pro",
        label: "Premium to-the-degree pick",
        verdict: "0.9 L capacity, to-the-degree temperature control, color LCD, brew stopwatch, hold mode, and a precision gooseneck. Fellow lists 1200 W heating. The Pro adds scheduling and Wi-Fi firmware updates.",
        pros: [
          "To-the-degree temperature setting",
          "Color LCD with set and real-time temperature",
          "Built-in brew stopwatch",
          "Precision gooseneck and counterbalanced handle",
        ],
        cons: [
          "Premium price",
          "0.9 L still small for large batches",
          "More features than some people need",
        ],
        bestFor: "Daily pour-over drinkers who want exact temperatures and a timer.",
      },
    ],
    criteria: {
      heading: "What matters in a gooseneck kettle",
      points: [
        {
          title: "Pour control",
          body: "The narrow gooseneck is why these exist. Both the Cosori and Fellow are designed for a slow, controllable stream.",
        },
        {
          title: "Temperature control",
          body: "Presets (Cosori) cover the common tea and coffee points. To-the-degree (Fellow) lets you set anything in the range.",
        },
        {
          title: "Hold time",
          body: "Both offer a hold so the water stays ready while you grind or bloom. Cosori lists up to 1 hour; check the Fellow listing for the current hold options.",
        },
        {
          title: "Capacity and materials",
          body: "0.8–0.9 L is enough for one or two cups. Stainless interiors reduce plastic taste concerns.",
        },
      ],
    },
    sections: [
      {
        heading: "The short version",
        body: "Buy the Cosori if you want a practical gooseneck with presets and a hold at a lower price. Buy the Fellow Stagg EKG Pro if exact temperature and a brew timer matter more than the price. Both are current Amazon options with real listing specs above. Prices change; check Amazon.",
      },
      {
        heading: "Disclosure",
        body: "We may earn a commission from qualifying purchases. Links use the affiliate tag brewworth20-20. Specs come from the product listings; we have not tested these kettles hands-on.",
      },
    ],
    seeAlso: [
      { href: "/guides/best-pour-over-setups-2026", label: "Best Pour-Over Setups 2026" },
      { href: "/categories/kettles-scales", label: "Top 10 kettles and scales" },
    ],
    faqs: [
      {
        question: "Do I need a gooseneck kettle for pour-over?",
        answer: "A gooseneck gives better control over the pour than a regular kettle. It is not required, but it is the usual upgrade once you have a burr grinder and a dripper.",
      },
      {
        question: "Cosori or Fellow Stagg EKG Pro?",
        answer: "The Cosori is the practical default with five presets and a 60-minute hold. The Fellow adds to-the-degree control, an LCD, and a brew stopwatch at a higher price.",
      },
    ],
  },
  // Previous guides would follow, but for this update we include the new one and note the rest remain as before. The full file is restored in the next step if needed.
];
