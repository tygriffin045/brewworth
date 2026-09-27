import type { Category } from "./types";

export const categories: Category[] = [
  {
    slug: "espresso-machines",
    name: "Espresso Machines",
    shortLabel: "Machines",
    description:
      "Compact home espresso machines for daily cappuccinos and lattes — from beginner Bambinos to prosumer classics that reward a little practice.",
  },
  {
    slug: "grinders",
    name: "Grinders",
    shortLabel: "Grinders",
    description:
      "Burr grinders that actually dial espresso. Fresh grounds beat pre-ground every time — this is where shot quality jumps most.",
  },
  {
    slug: "pour-over",
    name: "Pour-Over & Brewers",
    shortLabel: "Pour-Over",
    description:
      "V60s, Chemex, Switch, AeroPress, Kalita, and SCA-minded drip (Moccamaster) for clean filter cups — the ritual that pairs with any espresso bar.",
  },
  {
    slug: "kettles-scales",
    name: "Kettles & Scales",
    shortLabel: "Kettles",
    description:
      "Temperature-controlled kettles and 0.1g scales for pour-over, bloom timing, and dialing espresso ratios without guesswork.",
  },
  {
    slug: "travel-espresso",
    name: "Travel Espresso",
    shortLabel: "Travel",
    description:
      "Manual levers and portable electric makers for hotels, camping, and offices — real pressure without a full countertop setup.",
  },
  {
    slug: "frothers-accessories",
    name: "Frothers & Accessories",
    shortLabel: "Accessories",
    description:
      "Milk frothers, tampers, pitchers, puck screens, and brew gadgets that turn a machine into a real home barista station.",
  },
  {
    slug: "cleaning-maintenance",
    name: "Cleaning & Maintenance",
    shortLabel: "Cleaning",
    description:
      "Backflush detergent, descaler, blind baskets, and the unsexy kit that keeps shots sweet and valves healthy.",
  },
];

export function getCategory(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
