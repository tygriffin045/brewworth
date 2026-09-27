import type { Guide } from "./types";
import { buyerIntentGuides } from "./guides-buyer-intent";

export const guides: Guide[] = [
  ...buyerIntentGuides,
  {
    slug: "best-espresso-machines-under-400",
    title: "Best Espresso Machines Under $400 for Beginners",
    description: "What actually matters under $400 — heat-up time, steam, portafilter size, and why the grinder matters more than the badge on the machine.",
    readingTime: "9 min read",
    publishedAt: "2026-08-18",
    productSlugs: [
      "breville-bambino",
      "delonghi-dedica",
      "gaggia-classic-pro",
      "gaggia-classic-evo-pro",
      "baratza-encore-esp"
    ],
    sections: [
      {
        heading: "Under $400 is about workflow, not café trophies",
        body: "At this budget you’re buying heat-up speed, a usable steam wand, and a machine that won’t fight you every morning. The Breville Bambino wins for most beginners: near-instant heat-up and a compact footprint. The De’Longhi Dedica is the slim apartment pick. The Gaggia Classic Evo Pro sometimes dips near this range on sale — it’s more prosumer, with a 58mm portafilter and a steeper learning curve."
      },
      {
        heading: "Budget for the grinder or you’ll hate the machine",
        body: "A $300 machine with pre-ground or a blade grinder will taste worse than a $200 machine paired with a Baratza Encore ESP. Fresh, fine, consistent grounds are the difference between sour/bitter roulette and a shot you look forward to. If your total budget is $400, consider Bambino + used/sale grinder — or Dedica + Encore ESP if you can stretch slightly."
      },
      {
        heading: "Steam, baskets, and expectations",
        body: "Single-boiler and thermoblock machines need a pause between brewing and steaming. That’s normal. Pressurized baskets forgive bad grind; non-pressurized baskets taste better once your grinder is ready. Don’t chase dual-boiler dreams under $400 — chase consistency and a routine you’ll keep."
      },
      {
        heading: "Our shortlist",
        body: "Most beginners: Breville Bambino. Tightest counters: De’Longhi Dedica. Want to learn “real” espresso and own a 58mm ecosystem: Gaggia Classic Evo Pro (watch for sales). Pair any of them with the Encore ESP and a cheap scale before you buy fancy accessories."
      }
    ]
  },
  {
    slug: "breville-vs-gaggia-vs-delonghi",
    title: "Breville vs Gaggia vs De’Longhi: Which Home Espresso Machine?",
    description: "Side-by-side thinking for three popular paths — Bambino convenience, Classic Pro craft, and Dedica slim budget — so you buy the workflow you’ll actually use.",
    readingTime: "10 min read",
    publishedAt: "2026-09-02",
    productSlugs: [
      "breville-bambino",
      "breville-bambino-plus",
      "breville-barista-pro",
      "gaggia-classic-pro",
      "gaggia-classic-evo-pro",
      "delonghi-dedica",
      "delonghi-la-specialista"
    ],
    sections: [
      {
        heading: "Breville: speed and guided convenience",
        body: "Breville’s Bambino and Bambino Plus prioritize fast heat-up and approachable milk drinks. The Plus adds automatic milk texturing if you want weekday consistency with less wand practice. Move up to the Barista Pro when you want ThermoJet speed plus a built-in grinder. Choose Breville when mornings are rushed and you value a polished, low-friction routine over a commercial-style portafilter ecosystem."
      },
      {
        heading: "Gaggia: craft, 58mm, and long-term mods",
        body: "The Classic Pro / Classic Evo Pro path is for people who want to learn espresso as a skill. Brass or updated Evo boilers, 58mm portafilter, and a huge accessory/mod community. Shots improve with technique and a good grinder. Choose Gaggia if you enjoy dialing variables and plan to keep the machine for years."
      },
      {
        heading: "De’Longhi: slim budget to guided Specialista",
        body: "The Dedica Style wins on width and price. La Specialista steps up with sensor grinding, a tamp station, and dual heating for faster milk drinks. Choose Dedica when space and budget are the hard constraints; choose Specialista when you want Italian guided convenience without a full dual-boiler."
      },
      {
        heading: "How to decide in one minute",
        body: "Hate waiting and want milk drinks fast → Bambino / Bambino Plus / Barista Pro. Want to learn and maybe mod later → Classic Evo Pro. Tiny counter and tight budget → Dedica. Want guided grind+tamp → La Specialista. Then open our comparison page for a feature table, and don’t skip the grinder."
      }
    ]
  },
  {
    slug: "best-espresso-grinders",
    title: "Best Espresso Grinders: Budget to Mid-Range",
    description: "Why the grinder is the real espresso upgrade — Encore ESP, Smart Grinder Pro, Fellow Opus, and Sette 270Wi compared for home baristas.",
    readingTime: "8 min read",
    publishedAt: "2026-08-28",
    productSlugs: [
      "baratza-encore-esp",
      "breville-smart-grinder-pro",
      "fellow-opus",
      "eureka-mignon-specialita",
      "baratza-sette-270wi",
      "capresso-infinity"
    ],
    sections: [
      {
        heading: "If you only upgrade one thing, upgrade the grinder",
        body: "Espresso needs fine, consistent particles. Blade grinders and grocery pre-ground can’t hold a dialed shot. A dedicated burr grinder with espresso-capable steps (or stepless control) is the highest-ROI purchase in a home setup — often more important than jumping from a good entry machine to a nicer one."
      },
      {
        heading: "Baratza Encore ESP: the default recommendation",
        body: "The Encore ESP brings finer espresso steps to Baratza’s repairable Encore platform. It’s the grinder we point most Bambino and Classic Pro owners toward under ~$250. You’re buying consistency, parts support, and a clear upgrade path without jumping to $700 niche grinders."
      },
      {
        heading: "When to step up: Opus, Specialita, Sette 270Wi",
        body: "Fellow’s Opus wins on design and all-purpose range. Eureka’s Mignon Specialita is the quiet stepless step-up. Baratza’s Sette 270Wi adds grind-by-weight dosing for people who pull shots daily and hate timed-dose drift. None of them replace good beans and a scale — they just remove more variables."
      },
      {
        heading: "Buying tips that save frustration",
        body: "Single-dose when you can, weigh your dose, and change one variable at a time. Stepped grinders are fine — micro-adjust with dose and yield. Keep the machine’s pressurized basket until the grinder is dialed, then move to non-pressurized baskets for better taste."
      }
    ]
  },
  {
    slug: "home-barista-setup-under-500",
    title: "Complete Home Barista Setup Under $500",
    description: "A realistic cart: machine + grinder + scale + pitcher — phased so you taste progress without blowing the budget on day one.",
    readingTime: "11 min read",
    publishedAt: "2026-09-10",
    productSlugs: [
      "breville-bambino",
      "delonghi-dedica",
      "baratza-encore-esp",
      "timemore-black-mirror",
      "maestri-espresso-scale",
      "milk-frothing-pitcher",
      "aeropress-original",
      "fellow-stagg-ekg",
      "subminimal-nanofoamer",
      "flair-neo-flex",
      "wacaco-nanopresso"
    ],
    sections: [
      {
        heading: "The $500 reality check",
        body: "You cannot buy a dual-boiler flagship, a flat-burr dream grinder, and an Acaia scale for $500. You can build a setup that makes satisfying espresso and milk drinks every day. Prioritize: (1) capable entry machine, (2) espresso-capable grinder, (3) 0.1g scale, (4) pitcher. Accessories come after taste is dialed."
      },
      {
        heading: "Phase 1: machine + grinder",
        body: "Path A: Breville Bambino + watch for Encore ESP sales (may nudge over $500 — worth it). Path B: De’Longhi Dedica + Baratza Encore ESP to stay closer to budget. Path C: used/refurb Classic Evo Pro if you find one, but only with a real grinder in the cart. Never spend the whole budget on the machine alone."
      },
      {
        heading: "Phase 2: scale, pitcher, and milk",
        body: "Add a TIMEMORE or Maestri-class scale and a 12oz pitcher. If steam is weak, a NanoFoamer can bridge milk texture while you learn. Weigh dose in and yield out — espresso stops being mysterious once numbers replace vibes."
      },
      {
        heading: "Phase 3: weekend brewers (optional)",
        body: "An AeroPress covers travel and “I don’t want to pull a shot” mornings for ~$40. A Fellow Stagg EKG is a later pour-over luxury if filter coffee is part of your week. Under $500, finish espresso fundamentals before collecting gear."
      }
    ]
  },
  {
    slug: "best-pour-over-setups-2026",
    title: "Best Pour-Over Setups 2026",
    description: "V60 vs Chemex vs Clever vs Kalita Wave vs Stagg XF — complete kits with kettle, scale, and grinder so filter coffee isn’t an afterthought.",
    readingTime: "12 min read",
    publishedAt: "2026-09-12",
    productSlugs: [
      "hario-v60-02",
      "chemex-classic-6-cup",
      "clever-dripper",
      "kalita-wave-155",
      "fellow-stagg-xf",
      "fellow-stagg-ekg",
      "fellow-ode-gen-2",
      "comandante-c40",
      "timemore-black-mirror",
      "acaia-pearl"
    ],
    sections: [
      {
        heading: "Pour-over is a system, not a dripper",
        body: "A $25 V60 with a boiling kettle and grocery grind will taste muddy. The stack that actually works: burr grinder (Ode Gen 2, Comandante, or a solid hand mill), gooseneck kettle with temperature control (Stagg EKG), 0.1g scale with timer, and a dripper that matches your patience. Buy the system once; stop shopping for magic cones."
      },
      {
        heading: "Pick your dripper by personality",
        body: "Hario V60-02: maximum control, maximum recipe rabbit holes — our default for people who enjoy technique. Chemex 6-Cup: clean, guest-friendly carafe coffee with bonded filters. Clever Dripper: immersion-then-release forgiveness when you don’t want to spiral-pour before email. Kalita Wave 155: flat-bottom evenness for 1–2 cups. Fellow Stagg XF: insulated larger brews with Fellow aesthetics."
      },
      {
        heading: "Three kits we’d actually buy",
        body: "Beginner weekday kit: Clever + Stagg EKG + TIMEMORE scale + any decent burr grinder. Enthusiast single-cup: V60 ceramic + Stagg EKG + Ode Gen 2 or Comandante + Acaia Pearl if you’re deep in flow-rate nerdery. Hosting kit: Chemex 6-Cup + Stagg EKG + Ode Gen 2. Don’t buy three drippers before you own a kettle and scale."
      },
      {
        heading: "Water, ratios, and expectations",
        body: "Start around 1:16 coffee-to-water, 200–205°F for medium roasts, and change one variable at a time. Flat-bottom drippers forgive more; V60 punishes uneven pours and bad grind. If your espresso bar already has a scale and kettle, pour-over is a $30 dripper away — not another $500 rabbit hole."
      }
    ]
  },
  {
    slug: "best-travel-espresso-makers",
    title: "Best Travel Espresso Makers 2026",
    description: "Nanopresso vs Picopresso vs OutIn Nano vs Pixapresso vs Flair — which portable actually deserves bag space.",
    readingTime: "10 min read",
    publishedAt: "2026-09-14",
    productSlugs: [
      "wacaco-nanopresso",
      "wacaco-picopresso",
      "outin-nano",
      "wacaco-pixapresso",
      "flair-neo-flex",
      "timemore-chestnut-c3",
      "aeropress-original"
    ],
    sections: [
      {
        heading: "Travel espresso has three honest jobs",
        body: "Hotel coffee is usually bad. Your portable only needs to beat that bar. Job one: real pressure and a fresh puck. Job two: weight and cleanup you’ll actually tolerate. Job three: heat — either borrow a kettle or bring a self-heating electric. Everything else is marketing."
      },
      {
        heading: "Manual: Nanopresso, Picopresso, Flair NEO Flex",
        body: "Nanopresso is the lightweight classic — hand pump, no batteries, surprising crema for the size. Picopresso is the enthusiast upgrade with a naked basket that teaches puck prep on the road. Flair NEO Flex sits between travel and home: lever pressure with a gauge, still no steam, excellent when you have a kitchen counter for a week. All of them need hot water and a grinder (Chestnut C2S/C3-class or pre-ground done the day you leave)."
      },
      {
        heading: "Electric: OutIn Nano and Pixapresso",
        body: "OutIn Nano heats onboard and runs from USB-C — the pick when hotel kettles are missing or sketchy. Wacaco’s Pixapresso pushes electric convenience further with drink modes. You’re trading battery management and weight for fewer borrowed appliances. Neither replaces a Barista Pro at home; both beat lobby drip."
      },
      {
        heading: "What we’d pack",
        body: "One bag, maximum control: Picopresso + Chestnut hand grinder + collapsible kettle if needed. One bag, minimum fuss: OutIn Nano + pre-dosed beans. “I also want filter”: AeroPress always wins as the backup. Leave the steam wand dreams at home — pack a tiny frother only if milk drinks are non-negotiable."
      }
    ]
  },
  {
    slug: "espresso-machine-buying-guide",
    title: "Espresso Machine Buying Guide: How to Choose",
    description: "ThermoJet vs boiler, 54mm vs 58mm, all-in-one vs separate grinder — the decision framework we use before recommending a machine.",
    readingTime: "14 min read",
    publishedAt: "2026-09-08",
    productSlugs: [
      "breville-bambino",
      "breville-barista-pro",
      "breville-barista-touch-impress",
      "gaggia-classic-evo-pro",
      "rancilio-silvia",
      "delonghi-la-specialista",
      "baratza-encore-esp",
      "eureka-mignon-specialita"
    ],
    sections: [
      {
        heading: "Start with drinks-per-day and patience, not brand loyalty",
        body: "Two cappuccinos before standup wants fast heat-up and simple milk (Bambino Plus, Barista Pro, La Specialista). One careful shot on weekends can thrive on a Classic Evo Pro or Silvia with a serious grinder. If you hate tinkering, do not buy a temperature-surfing single boiler because Reddit said it’s “more authentic.”"
      },
      {
        heading: "Heat systems: ThermoJet, thermoblock, single boiler",
        body: "ThermoJet (Bambino / Barista Pro) prioritizes speed. Thermoblocks (many Dedica/Specialista paths) heat quickly with some temperature quirks. Traditional single boilers (Gaggia, Silvia) hold more thermal mass and reward technique — or PID mods later. Dual boilers are wonderful and usually above the budgets most readers start with."
      },
      {
        heading: "54mm vs 58mm and the accessory trap",
        body: "Breville’s 54mm ecosystem is excellent and self-contained. Gaggia/Silvia 58mm opens a huge third-party world (bottomless portafilters, puck screens, precision baskets). Neither diameter makes better espresso by itself — your grinder and prep do. Buy baskets and WDT tools after the machine and grinder, not before."
      },
      {
        heading: "All-in-one vs machine + grinder",
        body: "Barista Pro / Touch Impress / La Specialista reduce counter appliances and decision fatigue. Separate machine + Encore ESP / Sette / Eureka usually tastes better at the same spend once you care about dialing. Our rule: if you already know you’ll upgrade the grinder in six months, start separate. If you need one box that works Friday morning, start all-in-one."
      },
      {
        heading: "The checklist before you click Buy",
        body: "(1) Where will it live, measured. (2) Grinder plan funded. (3) Water hardness plan (descaler on the shelf). (4) Milk wand vs auto froth preference. (5) Willingness to clean a group head weekly. If you can’t answer those, you’re shopping for a fantasy café — pause and read our under-$500 setup guide first."
      }
    ]
  },
  {
    slug: "best-milk-frothers-latte-art",
    title: "Best Milk Frothers for Latte Art Beginners",
    description: "Steam wand vs NanoFoamer vs electric pitchers — how to get microfoam without a $2,000 dual boiler.",
    readingTime: "9 min read",
    publishedAt: "2026-09-11",
    productSlugs: [
      "subminimal-nanofoamer",
      "bodum-barista-frother",
      "milk-frothing-pitcher",
      "milk-pitcher-20oz",
      "breville-bambino-plus",
      "breville-barista-touch-impress",
      "delonghi-dedica"
    ],
    sections: [
      {
        heading: "Latte art is milk texture first, pouring second",
        body: "If the milk is bubbly dish foam, no pitcher will save you. You want glossy microfoam — paint-like, not soap bubbles. That can come from a strong steam wand, an automatic wand (Bambino Plus / Touch Impress), or a dedicated frother when the machine’s steam is weak."
      },
      {
        heading: "When to use the wand you already have",
        body: "Bambino, Classic Evo Pro, Silvia, and Barista Pro wands can all make art-capable foam with practice: purge, tip just below the surface for stretch, then bury for texture, finish around 140–150°F. A 12oz pitcher for single drinks; 20oz when you’re practicing or pouring two. Watch the vortex, not the internet’s “perfect tulip” overlays."
      },
      {
        heading: "NanoFoamer and electric frothers as bridges",
        body: "Subminimal’s NanoFoamer is the accessory we recommend for Dedica, Flair, and travel setups — handheld microfoam without relying on anemic steam. Bodum’s Barista electric frother is the push-button hot-milk path for offices and wand-free mornings. Neither teaches wand skills, but both make drinks you’ll finish."
      },
      {
        heading: "Auto milk machines: shortcut with tradeoffs",
        body: "Bambino Plus and Barista Touch Impress automate temperature and texture. Great for households. You’ll still want a pitcher for pouring art, and you’ll learn less wand feedback. If latte art is the goal of the hobby, buy a manual wand machine and practice; if latte art is a nice-to-have on Tuesday, auto milk is rational."
      }
    ]
  },
  {
    slug: "baratza-encore-esp-vs-fellow-opus",
    title: "Baratza Encore ESP vs Fellow Opus",
    description: "The two most recommended sub-$250 grinders head-to-head — espresso steps, retention, repairability, and who should buy which.",
    readingTime: "8 min read",
    publishedAt: "2026-09-13",
    productSlugs: [
      "baratza-encore-esp",
      "fellow-opus",
      "baratza-sette-270wi",
      "eureka-mignon-specialita",
      "breville-bambino"
    ],
    sections: [
      {
        heading: "Both can do espresso. That’s not the whole story.",
        body: "Encore ESP and Opus sit in the same cart conversations: first real burr grinder under ~$250 that can reach espresso fineness. ESP leans into Baratza’s repair network and espresso-marked steps. Opus leans into single-dose workflow and kitchen design. Taste differences are real but smaller than the gap from either to a blade grinder."
      },
      {
        heading: "Choose Encore ESP if…",
        body: "You own a Bambino/Gaggia and want the default community recommendation. You care about parts, repairability, and a known upgrade path. You’re fine with hopper workflow (or will single-dose with a few habits). You want espresso-capable steps without paying Sette or Eureka money yet."
      },
      {
        heading: "Choose Fellow Opus if…",
        body: "You brew espresso and pour-over on the same grinder and want a modern single-dose-friendly design. Aesthetics matter on an open shelf. You’re already in the Fellow kettle ecosystem. You’re okay trading Baratza’s legendary service story for Opus’s workflow and look."
      },
      {
        heading: "When to skip both and spend more",
        body: "Daily espresso with weight-based dosing → Sette 270Wi. Quiet stepless flat-burr refinement → Eureka Mignon Specialita. If your machine is still on a pressurized basket and your beans are supermarket dark roast, either ESP or Opus is enough — spend the difference on a scale and better beans first."
      }
    ]
  },
  {
    slug: "best-espresso-machines-under-1000",
    title: "Best Espresso Machines Under $1000",
    description: "From Bambino Plus to Barista Pro, Classic Evo Pro, La Specialista, and Silvia — what we’d buy at every rung below $1,000.",
    readingTime: "11 min read",
    publishedAt: "2026-09-15",
    productSlugs: [
      "breville-bambino-plus",
      "breville-barista-express",
      "breville-barista-pro",
      "gaggia-classic-evo-pro",
      "delonghi-la-specialista",
      "rancilio-silvia",
      "baratza-encore-esp",
      "baratza-sette-270wi"
    ],
    sections: [
      {
        heading: "Under $1000 is where machines get serious",
        body: "This band covers excellent home espresso if you allocate money correctly. The trap is spending $900 on an all-in-one and $0 on technique tools — or buying Silvia without a grinder budget. Decide: convenience chassis (Breville/De’Longhi all-in-ones) vs craft chassis (Gaggia/Silvia + separate grinder)."
      },
      {
        heading: "Convenience rung",
        body: "Bambino Plus (~$500): best milk-auto compact. Barista Express (~$700): classic built-in grinder starter. Barista Pro (~$850): Express workflow with ThermoJet speed. La Specialista (~$700): sensor grind + tamp station + dual heating. These win busy households."
      },
      {
        heading: "Craft rung",
        body: "Gaggia Classic Evo Pro (~$530) + Encore ESP or Sette 270Wi is the combination we recommend most for people who want 58mm accessories and skill growth. Rancilio Silvia (~$850 machine alone) needs a capable grinder immediately — plan $1,000+ total or wait. Craft setups taste better long-term; they demand more of you daily."
      },
      {
        heading: "Our picks by buyer type",
        body: "Busy parents: Bambino Plus or Barista Pro. Learners who watch dialing videos for fun: Classic Evo Pro + Encore ESP. Design-conscious convenience: La Specialista. “I’ll own this ten years”: Silvia + Eureka/Sette (stretch budget). Everyone: scale + cleaner on day one."
      }
    ]
  },
  {
    slug: "cleaning-maintenance-essentials",
    title: "Espresso Cleaning & Maintenance Essentials",
    description: "Backflush detergent vs descaler, blind baskets, purge habits, and the weekly routine that keeps shots sweet.",
    readingTime: "10 min read",
    publishedAt: "2026-09-16",
    productSlugs: [
      "puly-caff-plus",
      "espresso-cleaning-tablets",
      "espresso-descaler",
      "blind-basket-58mm",
      "breville-knock-box-mini",
      "gaggia-classic-evo-pro",
      "breville-barista-pro"
    ],
    sections: [
      {
        heading: "Two different problems: oils vs minerals",
        body: "Coffee oils stale in group heads and baskets — that’s detergent territory (Puly Caff, cleaning tablets, backflush with a blind basket). Mineral scale from hard water slows heating and wrecks temperature stability — that’s descaler territory. Using the wrong one for the job is the most common maintenance mistake we see."
      },
      {
        heading: "Daily and weekly habits that matter more than products",
        body: "Purge the steam wand before and after milk. Wipe the wand immediately. Knock pucks into a knock box, not the sink. Rinse the portafilter. Weekly (or every 50–100 shots): detergent backflush if your machine supports a three-way valve workflow. Monthly or when prompted: descale per the manual. Soft water = less descaling; hard water = don’t ignore the light."
      },
      {
        heading: "The kit to keep under the counter",
        body: "Blind basket (correct diameter), Puly or tablets, descaler, microfiber cloths, and a small brush for the shower screen. Breville owners should use Breville’s recommended cleaners when the machine insists — warranty manuals exist for a reason. Gaggia/Silvia owners live on Puly + blind basket + occasional descale."
      },
      {
        heading: "Taste is your sensor",
        body: "If shots suddenly taste bitter, hollow, or “dirty” despite the same recipe, clean before you re-dial the grinder. A filthy group masquerades as a dialing problem. Ten minutes of maintenance saves an hour of chaotic grind changes."
      }
    ]
  },
  {
    slug: "best-coffee-scales-for-espresso",
    title: "Best Coffee Scales for Espresso",
    description: "TIMEMORE vs Maestri vs Acaia Pearl — what 0.1g resolution actually changes when you dial shots.",
    readingTime: "8 min read",
    publishedAt: "2026-09-17",
    productSlugs: [
      "timemore-black-mirror",
      "maestri-espresso-scale",
      "acaia-pearl",
      "baratza-encore-esp",
      "normcore-wdt-tool"
    ],
    sections: [
      {
        heading: "Why espresso without a scale is mostly vibes",
        body: "A “18g in, 36g out in ~28 seconds” recipe is impossible to hit consistently by eye. 0.1g resolution lets you control dose and yield independently from grind. Timer functions matter because shot time is your third variable. Buy a scale before another basket."
      },
      {
        heading: "Good / better / café-nerd",
        body: "Good: TIMEMORE Black Mirror or Maestri USB-C shot scales — slim, timed, affordable. Better: the same class with a heat-resistant pad and auto-tare habits you’ll actually use. Café-nerd: Acaia Pearl for flow-rate graphs, app workflows, and build that survives busy bars. Most homes never need Pearl; many think they do."
      },
      {
        heading: "Workflow tips that matter more than brand",
        body: "Tare the portafilter, dose by weight, level/WDT/tamp, tare the cup on the scale under the spout, brew to yield. Change one variable per shot. If your scale auto-offs mid-pour-over, disable auto-off or pick a model with longer timeout. Keep it dry — espresso scales live dangerous lives."
      },
      {
        heading: "Our recommendation",
        body: "Start with TIMEMORE or Maestri. Upgrade to Acaia when you’re logging shots daily and care about flow-rate feedback — not because a YouTuber’s station looks incomplete without one."
      }
    ]
  },
  {
    slug: "best-batch-brew-and-pour-over-stations",
    title: "Best Batch Brew & Pour-Over Stations for Espresso Homes",
    description: "How to add filter coffee done right — Switch, AeroPress XL, and Moccamaster — without abandoning your espresso bar.",
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
      "timemore-chestnut-c3"
    ],
    sections: [
      {
        heading: "Espresso households still need a filter path",
        body: "Even dedicated espresso drinkers burn out on milk drinks. A second brew method keeps beans interesting and guests happy. The question isn’t “pour-over or drip?” — it’s whether you want ritual (Switch/V60), speed-for-two (AeroPress XL), or automatic excellence (Moccamaster)."
      },
      {
        heading: "Switch vs classic V60 vs AeroPress XL",
        body: "Hario Switch is the most forgiving paper-filter path: steep, then open the valve. Classic V60 rewards pour skill and a gooseneck. AeroPress XL keeps immersion simplicity with bigger yield for sharing. If you’re new to filter, start Switch or AeroPress; graduate to V60 when you enjoy the pour."
      },
      {
        heading: "When Moccamaster is the right automatic",
        body: "Technivorm’s KBGV Select exists for mornings when you want a full carafe at SCA brew temperature without standing over a kettle. It’s not “set and forget forever” — grind fresh, use good water, clean the brew basket — but it’s the drip machine specialty coffee actually respects. Pair with a brew-capable grinder (Ode / Infinity / C2S)."
      },
      {
        heading: "Station layout that doesn’t fight espresso",
        body: "Keep the gooseneck and scale near the pour-over cone; park Moccamaster on a separate zone so espresso steam and drip don’t collide. One burr grinder can serve both if it has enough range — or keep a hand grinder for filter so you don’t ruin espresso dial-in."
      }
    ]
  },
  {
    slug: "espresso-cleaning-routine-that-actually-sticks",
    title: "An Espresso Cleaning Routine That Actually Sticks",
    description: "Backflush detergent vs tablets vs descaler — what each bottle is for, and a weekly cadence that protects taste.",
    readingTime: "8 min read",
    publishedAt: "2026-09-19",
    productSlugs: [
      "urnex-cafiza",
      "puly-caff-plus",
      "espresso-cleaning-tablets",
      "espresso-descaler",
      "blind-basket-58mm",
      "timemore-grinder-brush",
      "breville-knock-box-mini"
    ],
    sections: [
      {
        heading: "Three different jobs: oils, minerals, mess",
        body: "Coffee oils foul group heads and baskets — that’s detergent (Cafiza/Puly) with a blind basket. Minerals from water need a descaler on the manufacturer’s schedule. Multipurpose tablets can help with light residue but don’t replace a proper backflush powder on semi-autos. A brush and knock box keep the daily mess from becoming a weekend project."
      },
      {
        heading: "A cadence you can remember",
        body: "Daily: wipe steam wand, purge, knock pucks, brush the basket. Weekly (or every 30–50 shots): detergent backflush if your machine supports it; soak baskets and portafilter. Every 1–3 months (water-dependent): descale per the manual. Skip inventing chemistry — match the product to the job."
      },
      {
        heading: "Why taste dies when you skip cleaning",
        body: "Rancid oils taste bitter and mute sweetness long before the machine “fails.” Descaling late shows up as temperature instability and weird flow. If shots suddenly taste hollow, clean before you buy a new grinder."
      },
      {
        heading: "Our kit shortlist",
        body: "Cafiza or Puly + blind basket for backflush machines; a dedicated descaler; a grinder brush; a knock box. Tablets are optional backup for drip/super-autos — not a substitute for detergent on a Gaggia or Silvia."
      }
    ]
  },
  {
    slug: "budget-hand-grinders-for-travel-and-filter",
    title: "Budget Hand Grinders for Travel and Filter Coffee",
    description: "C2S vs Skerton Pro vs Comandante — what you actually get when you leave the electric grinder at home.",
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
      "outin-nano"
    ],
    sections: [
      {
        heading: "Hand grinders are about consistency, not romance",
        body: "A good hand mill exists so travel and filter coffee don’t collapse into blade-grinder dust. Alignment, burr geometry, and capacity matter more than Instagram wood finishes. Match the mill to the brew method you’ll actually use on the road."
      },
      {
        heading: "C2S vs Skerton Pro vs Comandante",
        body: "TIMEMORE C2S is the value metal-body pick for pour-over and AeroPress. Hario Skerton Pro is the Amazon-easy ceramic option with a stabilized axis — fine for filter, not an espresso specialist. Comandante C40 is the premium hand-grinder benchmark when you want particle quality and resale value. Don’t buy Comandante hoping it magically makes Nanopresso taste like a Slayer."
      },
      {
        heading: "Pairing with travel brewers",
        body: "AeroPress / Switch love medium-fine consistency from C2S or Skerton Pro. Portable espresso (Nanopresso, OutIn) needs finer grinding and more patience — many travelers still pre-grind at home into a sealed vial for true portables. Honesty beats optimism."
      },
      {
        heading: "Our recommendation",
        body: "Most people: C2S for filter travel. Tightest budget / easy replacement: Skerton Pro. Forever tool: Comandante. Then pick Switch or AeroPress as the brew companion before you chase another electric gadget."
      }
    ]
  }
];

export function getGuide(slug: string): Guide | undefined {
  return guides.find((g) => g.slug === slug);
}

export function getGuidesForProduct(productSlug: string, limit?: number): Guide[] {
  const list = guides.filter((g) => g.productSlugs.includes(productSlug));
  return typeof limit === "number" ? list.slice(0, limit) : list;
}

export function getGuidesForCategory(
  categorySlug: string,
  productSlugsInCategory: string[],
  limit?: number,
): Guide[] {
  const set = new Set(productSlugsInCategory);
  const list = guides.filter((g) => g.productSlugs.some((s) => set.has(s)));
  return typeof limit === "number" ? list.slice(0, limit) : list;
}

export function getRelatedGuides(currentSlug: string, limit = 3): Guide[] {
  const current = getGuide(currentSlug);
  if (!current) {
    return guides.filter((g) => g.slug !== currentSlug).slice(0, limit);
  }
  const overlap = guides
    .filter((g) => g.slug !== currentSlug)
    .map((g) => ({
      guide: g,
      score: g.productSlugs.filter((s) => current.productSlugs.includes(s))
        .length,
    }))
    .sort((a, b) => b.score - a.score);
  return overlap.slice(0, limit).map((x) => x.guide);
}
