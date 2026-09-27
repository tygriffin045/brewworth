import fs from "fs";
import { products } from "../src/data/products.ts";
import { guides } from "../src/data/guides.ts";
import type { Product, Guide } from "../src/data/types.ts";

const additions: Product[] = [
  {
    slug: "bodum-bistro-frother",
    name: "Bodum Bistro Electric Milk Frother",
    brand: "Bodum",
    category: "frothers-accessories",
    tagline: "Hot and cold froth in a compact nonstick pitcher",
    summary:
      "The Bistro is Bodum’s compact electric frother for hot or cold foam and heated milk — a wand-free path to cappuccino texture when you own a Dedica, Flair, or travel maker without strong steam. Automatic temperature control and boil-dry protection keep weekday milk drinks simple; it’s not latte-art microfoam from a commercial wand.",
    priceBand: "About $50",
    budget: "budget",
    priceMin: 40,
    priceMax: 70,
    imageGradient: "from-stone-800 via-neutral-700 to-zinc-950",
    imageAlt: "Bodum Bistro electric milk frother product photo",
    imageUrl: "/products/B08HB4YG87.jpg",
    featured: false,
    amazonAsin: "B08HB4YG87",
    amazonQuery: "Bodum Bistro electric milk frother",
    pros: [
      "Hot and cold froth modes",
      "Simple one-touch weekday milk drinks",
      "Boil-dry protection",
      "Compact footprint",
    ],
    cons: [
      "Not commercial-wand microfoam",
      "Nonstick needs gentle cleaning",
      "Capacity limited vs large pitchers",
    ],
    whoItsFor:
      "Manual espresso and travel-kit owners who want milk drinks without a strong steam wand.",
    specs: [
      { label: "Capacity", value: "~13.5 oz / 400 ml class" },
      { label: "Modes", value: "Hot froth / cold froth / heat" },
      { label: "Vessel", value: "Nonstick stainless" },
      { label: "Brand", value: "Bodum" },
      { label: "Best with", value: "Dedica / Flair / Nano" },
    ],
    relatedSlugs: ["delonghi-dedica", "subminimal-nanofoamer", "milk-frothing-pitcher"],
  },
  {
    slug: "hoomil-12oz-pitcher",
    name: "HOOMIL 12oz Stainless Milk Frothing Pitcher",
    brand: "HOOMIL",
    category: "frothers-accessories",
    tagline: "Budget 12oz pitcher with spout markings for practice drinks",
    summary:
      "A inexpensive 12oz stainless pitcher with interior volume marks — useful as a second pitcher for single cappuccinos or for practicing latte art without babying a Rattleware. Spout quality varies by batch; treat it as a starter or spare, not a lifelong heirloom.",
    priceBand: "About $15",
    budget: "budget",
    priceMin: 10,
    priceMax: 20,
    imageGradient: "from-slate-700 via-stone-600 to-zinc-900",
    imageAlt: "HOOMIL 12oz stainless milk frothing pitcher product photo",
    imageUrl: "/products/B087TL2BR9.jpg",
    featured: false,
    amazonAsin: "B087TL2BR9",
    amazonQuery: "HOOMIL 12oz milk frothing pitcher",
    pros: [
      "Very affordable spare pitcher",
      "Interior volume marks help dosing milk",
      "12oz size suits single drinks",
      "Dishwasher-safe stainless",
    ],
    cons: [
      "Spout less precise than Rattleware",
      "Build is entry-level",
      "Not a flex for latte-art competition",
    ],
    whoItsFor:
      "Beginners practicing milk drinks who want a cheap 12oz pitcher or a spare.",
    specs: [
      { label: "Size", value: "12 oz / ~350 ml" },
      { label: "Material", value: "304 stainless" },
      { label: "Marks", value: "Interior volume lines" },
      { label: "Brand", value: "HOOMIL" },
      { label: "Use", value: "Steaming / practice" },
    ],
    relatedSlugs: ["milk-frothing-pitcher", "milk-pitcher-20oz", "subminimal-nanofoamer"],
  },
  {
    slug: "silicone-tamping-mat",
    name: "Silicone Espresso Tamping Mat",
    brand: "Ezebesta",
    category: "frothers-accessories",
    tagline: "Flat non-slip silicone pad to protect counters while tamping",
    summary:
      "A simple food-grade silicone tamping mat protects counters and keeps the portafilter from skating while you tamp. Choose this if you want a flat, washable pad; choose a walnut+silicone corner mat if you want a station that also corrals accessories.",
    priceBand: "About $12",
    budget: "budget",
    priceMin: 8,
    priceMax: 18,
    imageGradient: "from-neutral-800 via-stone-700 to-zinc-950",
    imageAlt: "Silicone espresso tamping mat product photo",
    imageUrl: "/products/B09FJRJPRF.jpg",
    featured: false,
    amazonAsin: "B09FJRJPRF",
    amazonQuery: "silicone espresso tamping mat",
    pros: [
      "Protects counters from tamp force",
      "Non-slip under portafilters",
      "Easy to rinse",
      "Cheap station upgrade",
    ],
    cons: [
      "No accessory “corner” like wood mats",
      "Can stain from coffee oils",
      "Generic branding",
    ],
    whoItsFor:
      "Anyone tamping on stone or wood counters who wants basic surface protection.",
    specs: [
      { label: "Material", value: "Food-grade silicone" },
      { label: "Shape", value: "Flat pad (~8×8 in class)" },
      { label: "Use", value: "Tamping / drip catch" },
      { label: "Care", value: "Hand wash / dishwasher" },
      { label: "Brand", value: "Ezebesta" },
    ],
    relatedSlugs: ["tamping-mat", "normcore-v4-tamper", "breville-bambino"],
  },
  {
    slug: "maestri-s1-mini-scale",
    name: "Maestri House S1 Mini Espresso Scale",
    brand: "Maestri House",
    category: "kettles-scales",
    tagline: "Compact 0.1g USB-C shot scale for tight drip trays",
    summary:
      "The S1 Mini is a slim rechargeable espresso scale with 0.1g resolution and timer modes — built for portafilter dosing and shot yield on crowded drip trays. Choose it when you want something smaller/cheaper than Acaia; keep expectations realistic on long-term durability versus café scales.",
    priceBand: "About $25",
    budget: "budget",
    priceMin: 18,
    priceMax: 35,
    imageGradient: "from-zinc-800 via-stone-700 to-amber-950",
    imageAlt: "Maestri House S1 mini espresso scale product photo",
    imageUrl: "/products/B0CBK9QHLY.jpg",
    featured: false,
    amazonAsin: "B0CBK9QHLY",
    amazonQuery: "Maestri House S1 mini espresso scale",
    pros: [
      "Fits tight drip trays",
      "0.1g resolution with timer",
      "USB-C rechargeable",
      "Strong value vs Acaia",
    ],
    cons: [
      "Build not café-indestructible",
      "Auto-off quirks on some units",
      "Not flow-rate graphing",
    ],
    whoItsFor:
      "Home baristas dialing dose and yield who want a compact scale under $30.",
    specs: [
      { label: "Resolution", value: "0.1 g" },
      { label: "Capacity", value: "2 kg class" },
      { label: "Power", value: "USB-C rechargeable" },
      { label: "Modes", value: "Espresso / pour-over timers" },
      { label: "Brand", value: "Maestri House" },
    ],
    relatedSlugs: ["maestri-espresso-scale", "timemore-black-mirror", "acaia-pearl"],
  },
];

for (const a of additions) {
  if (!fs.existsSync("public" + a.imageUrl)) throw new Error("missing " + a.imageUrl);
  if (products.some((p) => p.slug === a.slug)) continue;
  products.push(a);
}

const slugSet = new Set(products.map((p) => p.slug));
for (const p of products) {
  p.relatedSlugs = p.relatedSlugs.filter((s) => slugSet.has(s));
}

const newGuides: Guide[] = [
  {
    slug: "best-batch-brew-and-pour-over-stations",
    title: "Best Batch Brew & Pour-Over Stations for Espresso Homes",
    description:
      "How to add filter coffee done right — Switch, AeroPress XL, and Moccamaster — without abandoning your espresso bar.",
    readingTime: "9 min read",
    publishedAt: "2026-09-18",
    productSlugs: [
      "moccamaster-kbgv-select",
      "hario-switch-02",
      "hario-switch-02-set",
      "aeropress-xl",
      "aeropress-original",
      "hario-v60-02",
      "chemex-classic-6-cup",
      "fellow-stagg-ekg",
      "timemore-black-mirror",
      "timemore-chestnut-c3",
    ],
    sections: [
      {
        heading: "Espresso households still need a filter path",
        body: "Even dedicated espresso drinkers burn out on milk drinks. A second brew method keeps beans interesting and guests happy. The question isn’t “pour-over or drip?” — it’s whether you want ritual (Switch/V60), speed-for-two (AeroPress XL), or automatic excellence (Moccamaster).",
      },
      {
        heading: "Switch vs classic V60 vs AeroPress XL",
        body: "Hario Switch is the most forgiving paper-filter path: steep, then open the valve. Classic V60 rewards pour skill and a gooseneck. AeroPress XL keeps immersion simplicity with bigger yield for sharing. If you’re new to filter, start Switch or AeroPress; graduate to V60 when you enjoy the pour.",
      },
      {
        heading: "When Moccamaster is the right automatic",
        body: "Technivorm’s KBGV Select exists for mornings when you want a full carafe at SCA brew temperature without standing over a kettle. It’s not “set and forget forever” — grind fresh, use good water, clean the brew basket — but it’s the drip machine specialty coffee actually respects. Pair with a brew-capable grinder (Ode / Infinity / C2S).",
      },
      {
        heading: "Station layout that doesn’t fight espresso",
        body: "Keep the gooseneck and scale near the pour-over cone; park Moccamaster on a separate zone so espresso steam and drip don’t collide. One burr grinder can serve both if it has enough range — or keep a hand grinder for filter so you don’t ruin espresso dial-in.",
      },
    ],
  },
  {
    slug: "espresso-cleaning-routine-that-actually-sticks",
    title: "An Espresso Cleaning Routine That Actually Sticks",
    description:
      "Backflush detergent vs tablets vs descaler — what each bottle is for, and a weekly cadence that protects taste.",
    readingTime: "8 min read",
    publishedAt: "2026-09-19",
    productSlugs: [
      "urnex-cafiza",
      "puly-caff-plus",
      "espresso-cleaning-tablets",
      "espresso-descaler",
      "blind-basket-58mm",
      "timemore-grinder-brush",
      "breville-knock-box-mini",
    ],
    sections: [
      {
        heading: "Three different jobs: oils, minerals, mess",
        body: "Coffee oils foul group heads and baskets — that’s detergent (Cafiza/Puly) with a blind basket. Minerals from water need a descaler on the manufacturer’s schedule. Multipurpose tablets can help with light residue but don’t replace a proper backflush powder on semi-autos. A brush and knock box keep the daily mess from becoming a weekend project.",
      },
      {
        heading: "A cadence you can remember",
        body: "Daily: wipe steam wand, purge, knock pucks, brush the basket. Weekly (or every 30–50 shots): detergent backflush if your machine supports it; soak baskets and portafilter. Every 1–3 months (water-dependent): descale per the manual. Skip inventing chemistry — match the product to the job.",
      },
      {
        heading: "Why taste dies when you skip cleaning",
        body: "Rancid oils taste bitter and mute sweetness long before the machine “fails.” Descaling late shows up as temperature instability and weird flow. If shots suddenly taste hollow, clean before you buy a new grinder.",
      },
      {
        heading: "Our kit shortlist",
        body: "Cafiza or Puly + blind basket for backflush machines; a dedicated descaler; a grinder brush; a knock box. Tablets are optional backup for drip/super-autos — not a substitute for detergent on a Gaggia or Silvia.",
      },
    ],
  },
  {
    slug: "budget-hand-grinders-for-travel-and-filter",
    title: "Budget Hand Grinders for Travel and Filter Coffee",
    description:
      "C2S vs Skerton Pro vs Comandante — what you actually get when you leave the electric grinder at home.",
    readingTime: "8 min read",
    publishedAt: "2026-09-19",
    productSlugs: [
      "timemore-chestnut-c3",
      "hario-skerton-pro",
      "comandante-c40",
      "hario-switch-02",
      "aeropress-original",
      "aeropress-xl",
      "wacaco-nanopresso",
      "outin-nano",
    ],
    sections: [
      {
        heading: "Hand grinders are about consistency, not romance",
        body: "A good hand mill exists so travel and filter coffee don’t collapse into blade-grinder dust. Alignment, burr geometry, and capacity matter more than Instagram wood finishes. Match the mill to the brew method you’ll actually use on the road.",
      },
      {
        heading: "C2S vs Skerton Pro vs Comandante",
        body: "TIMEMORE C2S is the value metal-body pick for pour-over and AeroPress. Hario Skerton Pro is the Amazon-easy ceramic option with a stabilized axis — fine for filter, not an espresso specialist. Comandante C40 is the premium hand-grinder benchmark when you want particle quality and resale value. Don’t buy Comandante hoping it magically makes Nanopresso taste like a Slayer.",
      },
      {
        heading: "Pairing with travel brewers",
        body: "AeroPress / Switch love medium-fine consistency from C2S or Skerton Pro. Portable espresso (Nanopresso, OutIn) needs finer grinding and more patience — many travelers still pre-grind at home into a sealed vial for true portables. Honesty beats optimism.",
      },
      {
        heading: "Our recommendation",
        body: "Most people: C2S for filter travel. Tightest budget / easy replacement: Skerton Pro. Forever tool: Comandante. Then pick Switch or AeroPress as the brew companion before you chase another electric gadget.",
      },
    ],
  },
];

for (const g of newGuides) {
  if (guides.some((x) => x.slug === g.slug)) continue;
  // filter productSlugs to existing
  g.productSlugs = g.productSlugs.filter((s) => slugSet.has(s));
  guides.push(g);
}

function emitProduct(p: Product): string {
  const o: Record<string, unknown> = { ...p };
  if (!o.amazonAsin) delete o.amazonAsin;
  let json = JSON.stringify(o, null, 2).replace(/"([^"]+)":/g, "$1:").replace(/\n/g, "\n  ");
  return `  ${json}`;
}
function emitGuide(g: Guide): string {
  let json = JSON.stringify(g, null, 2).replace(/"([^"]+)":/g, "$1:").replace(/\n/g, "\n  ");
  return `  ${json}`;
}

const prodOriginal = fs.readFileSync("src/data/products.ts", "utf8");
const prodHelpers = prodOriginal.match(/\nexport function[\s\S]*$/)?.[0] ?? "";
fs.writeFileSync(
  "src/data/products.ts",
  `import type { Product } from "./types";\n\nexport const products: Product[] = [\n` +
    products.map(emitProduct).join(",\n") +
    `\n];\n` +
    prodHelpers,
);

const guideOriginal = fs.readFileSync("src/data/guides.ts", "utf8");
const guideHelpers = guideOriginal.match(/\nexport function[\s\S]*$/)?.[0] ?? "";
fs.writeFileSync(
  "src/data/guides.ts",
  `import type { Guide } from "./types";\n\nexport const guides: Guide[] = [\n` +
    guides.map(emitGuide).join(",\n") +
    `\n];\n` +
    guideHelpers,
);

console.log(
  JSON.stringify(
    {
      productCount: products.length,
      guideCount: guides.length,
      addedProducts: additions.map((a) => a.slug),
      addedGuides: newGuides.map((g) => g.slug),
    },
    null,
    2,
  ),
);
