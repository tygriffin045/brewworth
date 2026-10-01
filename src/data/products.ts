import type { Product } from "./types";

export const products: Product[] = [
  {
    slug: "breville-bambino",
    name: "Breville Bambino Espresso Machine",
    brand: "Breville",
    category: "espresso-machines",
    tagline: "Fast heat-up beginner espresso without a huge footprint",
    summary: "The Bambino is Breville’s compact entry machine: ThermoJet heat-up in seconds, a 54mm portafilter, and enough steam for everyday milk drinks. A strong starter when you want café-style espresso at home without a steep learning curve or a $1,000+ prosumer setup.",
    priceBand: "About $300",
    budget: "budget",
    priceMin: 270,
    priceMax: 350,
    imageGradient: "from-amber-900 via-orange-800 to-stone-950",
    imageAlt: "Breville Bambino espresso machine product photo",
    featured: true,
    amazonQuery: "Breville Bambino espresso machine",
    pros: [
      "Near-instant heat-up for weekday mornings",
      "Compact footprint fits small kitchens",
      "Approachable for first-time espresso buyers",
      "Solid steam for everyday lattes and cappuccinos"
    ],
    cons: [
      "Single boiler limits back-to-back milk drinks",
      "Stock basket is beginner-friendly, not competition-grade",
      "Best results still need a dedicated espresso grinder"
    ],
    whoItsFor: "Beginners who want fast, tasty home espresso and milk drinks without a huge machine or learning cliff.",
    specs: [
      {
        label: "Boiler",
        value: "ThermoJet / single"
      },
      {
        label: "Portafilter",
        value: "54 mm"
      },
      {
        label: "Heat-up",
        value: "~3 seconds (claimed)"
      },
      {
        label: "Dimensions",
        value: "Compact countertop"
      },
      {
        label: "Warranty",
        value: "1 year (typical)"
      }
    ],
    relatedSlugs: [
      "breville-bambino-plus",
      "baratza-encore-esp",
      "breville-barista-express"
    ],
    imageUrl: "/products/B0B1JPPG2L.jpg",
    amazonAsin: "B0B1JPPG2L"
  },
  {
    slug: "breville-bambino-plus",
    name: "Breville Bambino Plus Espresso Machine",
    brand: "Breville",
    category: "espresso-machines",
    tagline: "Bambino speed plus automatic milk texturing",
    summary: "The Bambino Plus keeps the fast ThermoJet heat-up and adds automatic milk frothing with temperature and texture controls. Ideal if you want consistent lattes with less wand practice — still compact, still beginner-friendly, still paired best with a real espresso grinder.",
    priceBand: "About $500",
    budget: "mid",
    priceMin: 450,
    priceMax: 550,
    imageGradient: "from-stone-800 via-amber-900 to-orange-950",
    imageAlt: "Breville Bambino Plus espresso machine product photo",
    featured: true,
    amazonQuery: "Breville Bambino Plus espresso machine",
    pros: [
      "Auto milk frothing speeds up weekday drinks",
      "Same fast heat-up as the Bambino",
      "Great mid-range step-up for milk-drink households",
      "Still compact vs full Barista Express footprints"
    ],
    cons: [
      "Pricier than the base Bambino",
      "Auto steam is convenient, not always barista-precise",
      "Grinder is still a separate (and important) purchase"
    ],
    whoItsFor: "Home baristas who want Bambino convenience with more consistent milk drinks and are ready to spend mid-range.",
    specs: [
      {
        label: "Boiler",
        value: "ThermoJet / single"
      },
      {
        label: "Portafilter",
        value: "54 mm"
      },
      {
        label: "Milk",
        value: "Automatic steam wand"
      },
      {
        label: "Heat-up",
        value: "~3 seconds (claimed)"
      },
      {
        label: "Warranty",
        value: "1–2 year (seller-listed)"
      }
    ],
    relatedSlugs: [
      "breville-bambino",
      "gaggia-classic-pro",
      "baratza-encore-esp"
    ],
    imageUrl: "/products/B07JVD78TT.jpg",
    amazonAsin: "B07JVD78TT"
  },
  {
    slug: "gaggia-classic-pro",
    name: "Gaggia Classic Pro Espresso Machine",
    brand: "Gaggia",
    category: "espresso-machines",
    tagline: "Prosumer classic with a commercial-style 58mm portafilter",
    summary: "The Gaggia Classic Pro is a long-running home classic: brass boiler, commercial-style 58mm portafilter, and a huge modding community. It rewards technique and pairs beautifully with a capable grinder — more “learn espresso” than “push button latte.”",
    priceBand: "About $450",
    budget: "mid",
    priceMin: 400,
    priceMax: 520,
    imageGradient: "from-zinc-800 via-stone-700 to-amber-950",
    imageAlt: "Gaggia Classic Pro espresso machine product photo",
    featured: true,
    amazonQuery: "Gaggia Classic Pro espresso machine",
    pros: [
      "58mm commercial-style portafilter ecosystem",
      "Solid build and long community support",
      "Excellent platform for learning real espresso",
      "Mod-friendly for enthusiasts over time"
    ],
    cons: [
      "Steeper learning curve than Breville Bambino",
      "Steam performance is OK, not dual-boiler class",
      "Plastic panels feel dated vs newer machines"
    ],
    whoItsFor: "Enthusiasts who want a classic 58mm machine and are willing to practice technique for better shots.",
    specs: [
      {
        label: "Boiler",
        value: "Brass / single"
      },
      {
        label: "Portafilter",
        value: "58 mm"
      },
      {
        label: "Pump",
        value: "Vibration (~15 bar)"
      },
      {
        label: "Steam",
        value: "Manual wand"
      },
      {
        label: "Warranty",
        value: "1–2 year (seller-listed)"
      }
    ],
    relatedSlugs: [
      "rancilio-silvia",
      "baratza-encore-esp",
      "normcore-v4-tamper"
    ],
    imageUrl: "/products/B07RQ3NL76.jpg",
    amazonAsin: "B07RQ3NL76"
  },
  {
    slug: "delonghi-dedica",
    name: "De’Longhi Dedica Style Espresso Machine",
    brand: "De’Longhi",
    category: "espresso-machines",
    tagline: "Slim stainless machine for tight counters and milk drinks",
    summary: "The Dedica Style is a slim stainless espresso machine that fits where wider machines won’t. It’s a budget-friendly path to espresso and steamed milk; expect to upgrade the grinder sooner than the machine if you chase café-quality shots.",
    priceBand: "About $230",
    budget: "budget",
    priceMin: 200,
    priceMax: 280,
    imageGradient: "from-slate-700 via-stone-600 to-zinc-900",
    imageAlt: "DeLonghi Dedica Style espresso machine product photo",
    featured: false,
    amazonQuery: "DeLonghi Dedica Style espresso machine",
    pros: [
      "Very slim footprint for apartments",
      "Approachable price for first espresso setup",
      "Stainless look that matches modern kitchens",
      "Capable steam wand for basic milk drinks"
    ],
    cons: [
      "Smaller portafilter ecosystem than 58mm machines",
      "Thermoblock quirks vs prosumer boilers",
      "Shot consistency improves a lot with a better grinder"
    ],
    whoItsFor: "Apartment dwellers and beginners who need a slim, affordable machine more than prosumer adjustability.",
    specs: [
      {
        label: "Boiler",
        value: "Thermoblock"
      },
      {
        label: "Portafilter",
        value: "51 mm class"
      },
      {
        label: "Width",
        value: "~6 in slim body"
      },
      {
        label: "Steam",
        value: "Manual wand"
      },
      {
        label: "Warranty",
        value: "1 year (typical)"
      }
    ],
    relatedSlugs: [
      "breville-bambino",
      "baratza-encore-esp",
      "subminimal-nanofoamer"
    ],
    imageUrl: "/products/B072WZL4ZT.jpg",
    amazonAsin: "B072WZL4ZT"
  },
  {
    slug: "breville-barista-express",
    name: "Breville Barista Express Espresso Machine",
    brand: "Breville",
    category: "espresso-machines",
    tagline: "All-in-one machine with built-in conical burr grinder",
    summary: "The Barista Express is the classic “beans to espresso” countertop pick: integrated grinder, 54mm portafilter, and a steam wand in one footprint. Convenient if you want fewer separate appliances — still plan time to dial grind and dose like any real espresso setup.",
    priceBand: "About $700",
    budget: "mid",
    priceMin: 650,
    priceMax: 800,
    imageGradient: "from-amber-800 via-yellow-900 to-stone-950",
    imageAlt: "Breville Barista Express espresso machine product photo",
    featured: true,
    amazonQuery: "Breville Barista Express BES870XL",
    pros: [
      "Built-in grinder saves counter space and setup complexity",
      "Familiar Breville workflow with dose trimming tools",
      "Strong all-in-one value vs buying machine + grinder separately",
      "Great step-up when you want one appliance path"
    ],
    cons: [
      "Integrated grinder is convenient, not peak specialty-class",
      "Larger footprint than Bambino",
      "Learning curve still real for dialing shots"
    ],
    whoItsFor: "Buyers who want an all-in-one espresso station and prefer one branded workflow over a separate grinder.",
    specs: [
      {
        label: "Boiler",
        value: "Thermocoil / single"
      },
      {
        label: "Portafilter",
        value: "54 mm"
      },
      {
        label: "Grinder",
        value: "Integrated conical burr"
      },
      {
        label: "Water tank",
        value: "~67 oz"
      },
      {
        label: "Warranty",
        value: "1 year limited (typical)"
      }
    ],
    relatedSlugs: [
      "breville-bambino-plus",
      "breville-smart-grinder-pro",
      "milk-frothing-pitcher"
    ],
    imageUrl: "/products/B00CH9QWOU.jpg",
    amazonAsin: "B00CH9QWOU"
  },
  {
    slug: "rancilio-silvia",
    name: "Rancilio Silvia Espresso Machine",
    brand: "Rancilio",
    category: "espresso-machines",
    tagline: "Commercial-rooted single boiler for serious home espresso",
    summary: "The Silvia is a legendary prosumer single-boiler: commercial-style group, powerful steam, and a reputation for lasting years with care. It demands a capable grinder and patience with temperature surfing — rewarding if you want café muscle in a home chassis.",
    priceBand: "About $850",
    budget: "premium",
    priceMin: 750,
    priceMax: 950,
    imageGradient: "from-zinc-900 via-stone-800 to-neutral-950",
    imageAlt: "Rancilio Silvia espresso machine product photo",
    featured: true,
    amazonQuery: "Rancilio Silvia espresso machine",
    pros: [
      "Commercial DNA and strong steam performance",
      "Durable platform with huge enthusiast community",
      "Excellent pairing with a quality espresso grinder",
      "Feels like a step beyond entry thermoblocks"
    ],
    cons: [
      "No PID stock — temperature surfing or mods common",
      "Premium price vs Bambino/Classic Pro",
      "Heavier and larger on the counter"
    ],
    whoItsFor: "Committed home baristas ready for a prosumer single-boiler and a serious grinder budget.",
    specs: [
      {
        label: "Boiler",
        value: "Brass single boiler"
      },
      {
        label: "Portafilter",
        value: "58 mm"
      },
      {
        label: "Steam",
        value: "Commercial-style wand"
      },
      {
        label: "Build",
        value: "Stainless panels"
      },
      {
        label: "Warranty",
        value: "See current listing"
      }
    ],
    relatedSlugs: [
      "gaggia-classic-pro",
      "eureka-mignon-specialita",
      "normcore-v4-tamper"
    ],
    imageUrl: "/products/B084T3F14B.jpg",
    amazonAsin: "B084T3F14B"
  },
  {
    slug: "flair-neo-flex",
    name: "Flair NEO Flex Manual Espresso Maker",
    brand: "Flair",
    category: "travel-espresso",
    tagline: "Lever espresso with a pressure gauge — no pump, no plug",
    summary: "The Flair NEO Flex is a beginner-friendly manual lever espresso maker with a pressure gauge and dual portafilters. Ideal when you want real espresso pressure without electricity, travel-friendly setups, or a low-cost path into dialing shots with a good grinder.",
    priceBand: "About $160",
    budget: "budget",
    priceMin: 140,
    priceMax: 200,
    imageGradient: "from-orange-950 via-amber-900 to-stone-950",
    imageAlt: "Flair NEO Flex manual espresso maker product photo",
    featured: true,
    amazonQuery: "Flair NEO Flex espresso maker",
    pros: [
      "True lever pressure control with gauge feedback",
      "No electricity required — great for travel/small spaces",
      "Lower cost than pump machines",
      "Excellent learning tool for pressure profiling basics"
    ],
    cons: [
      "No steam wand — milk drinks need a separate frother",
      "Requires preheating workflow",
      "Manual effort every shot"
    ],
    whoItsFor: "Travelers, renters, and learners who want real espresso without a full electric machine footprint.",
    specs: [
      {
        label: "Type",
        value: "Manual lever"
      },
      {
        label: "Pressure",
        value: "Gauge included"
      },
      {
        label: "Portafilters",
        value: "Two included (typical kit)"
      },
      {
        label: "Power",
        value: "None (manual)"
      },
      {
        label: "Warranty",
        value: "See listing"
      }
    ],
    relatedSlugs: [
      "flair-classic",
      "wacaco-nanopresso",
      "subminimal-nanofoamer"
    ],
    imageUrl: "/products/B0C91668G1.jpg",
    amazonAsin: "B0C91668G1"
  },
  {
    slug: "flair-classic",
    name: "Flair Classic Manual Espresso Maker",
    brand: "Flair",
    category: "travel-espresso",
    tagline: "Updated classic lever kit with pressure gauge and dual portafilters",
    summary: "The Flair Classic is the brand’s iconic home lever espresso maker — all manual, pressure-gauge capable, and built for café-style shots when paired with a proper grinder. A favorite for enthusiasts who enjoy the ritual and want maximum control without a boiler.",
    priceBand: "About $220",
    budget: "mid",
    priceMin: 190,
    priceMax: 260,
    imageGradient: "from-red-950 via-orange-900 to-stone-950",
    imageAlt: "Flair Classic manual espresso maker product photo",
    featured: false,
    amazonQuery: "Flair Classic espresso maker",
    pros: [
      "Iconic manual espresso experience",
      "Pressure gauge helps hit ~9 bar targets",
      "Portable compared to pump machines",
      "Strong community recipes and workflow tips"
    ],
    cons: [
      "No built-in steam",
      "Preheating discipline required",
      "Not a “push button” weekday machine"
    ],
    whoItsFor: "Enthusiasts who enjoy manual brewing ritual and want lever espresso without a full prosumer boiler.",
    specs: [
      {
        label: "Type",
        value: "Manual lever"
      },
      {
        label: "Pressure",
        value: "Gauge + dual portafilters"
      },
      {
        label: "Power",
        value: "None (manual)"
      },
      {
        label: "Use",
        value: "Home / travel-capable"
      },
      {
        label: "Warranty",
        value: "See listing"
      }
    ],
    relatedSlugs: [
      "flair-neo-flex",
      "baratza-encore-esp",
      "timemore-black-mirror"
    ],
    imageUrl: "/products/B07VW5L3DL.jpg",
    amazonAsin: "B07VW5L3DL"
  },
  {
    slug: "wacaco-nanopresso",
    name: "Wacaco Nanopresso Portable Espresso Maker",
    brand: "Wacaco",
    category: "travel-espresso",
    tagline: "Hand-powered travel espresso for camping, hotels, and offices",
    summary: "The Nanopresso is a compact manual portable espresso maker that builds pressure by hand — no batteries required. Perfect as a travel companion or office backup when you want something closer to espresso than instant or pod machines.",
    priceBand: "About $80",
    budget: "budget",
    priceMin: 65,
    priceMax: 100,
    imageGradient: "from-slate-800 via-cyan-900 to-stone-950",
    imageAlt: "Wacaco Nanopresso portable espresso maker product photo",
    featured: true,
    amazonQuery: "Wacaco Nanopresso portable espresso",
    pros: [
      "Truly portable and battery-free",
      "Surprisingly strong pressure for the size",
      "Great camping / hotel companion",
      "Affordable entry to travel espresso"
    ],
    cons: [
      "Not a full café workflow at home",
      "Manual pumping takes effort",
      "Grounds prep still needs a good grinder"
    ],
    whoItsFor: "Travelers and outdoor folks who want espresso-ish drinks away from a kitchen counter.",
    specs: [
      {
        label: "Type",
        value: "Portable manual"
      },
      {
        label: "Pressure",
        value: "Up to ~18 bar (claimed)"
      },
      {
        label: "Power",
        value: "Hand operated"
      },
      {
        label: "Capacity",
        value: "Single shot class"
      },
      {
        label: "Warranty",
        value: "See listing"
      }
    ],
    relatedSlugs: [
      "flair-neo-flex",
      "aeropress-original",
      "fellow-opus"
    ],
    imageUrl: "/products/B07CQD6K8W.jpg",
    amazonAsin: "B07CQD6K8W"
  },
  {
    slug: "baratza-encore-esp",
    name: "Baratza Encore ESP Burr Grinder",
    brand: "Baratza",
    category: "grinders",
    tagline: "The go-to entry grinder that can actually do espresso",
    summary: "The Encore ESP adds finer grind steps for espresso on Baratza’s legendary Encore platform. It’s the upgrade that most beginner machines need: consistent burrs, repairable design, and a clear path from drip to espresso without jumping straight to a $700+ grinder.",
    priceBand: "About $200",
    budget: "mid",
    priceMin: 180,
    priceMax: 230,
    imageGradient: "from-emerald-900 via-teal-800 to-stone-950",
    imageAlt: "Baratza Encore ESP burr grinder product photo",
    featured: true,
    amazonQuery: "Baratza Encore ESP grinder",
    pros: [
      "Espresso-capable steps on a proven Encore body",
      "Baratza repairability and parts support",
      "Excellent value vs premium espresso grinders",
      "Works for drip and espresso in one unit"
    ],
    cons: [
      "Not as quiet or refined as high-end grinders",
      "Single-dosing workflow needs a few habits",
      "Stepped adjustments — less micro-fine than stepless"
    ],
    whoItsFor: "Anyone buying a Bambino/Gaggia/Dedica who wants the single biggest shot-quality upgrade under ~$250.",
    specs: [
      {
        label: "Burrs",
        value: "40 mm conical"
      },
      {
        label: "Grind range",
        value: "Espresso to drip"
      },
      {
        label: "Adjustment",
        value: "Stepped (ESP fine steps)"
      },
      {
        label: "Hopper",
        value: "~8 oz capacity"
      },
      {
        label: "Warranty",
        value: "1 year (Baratza)"
      }
    ],
    relatedSlugs: [
      "breville-bambino",
      "eureka-mignon-specialita",
      "fellow-opus"
    ],
    imageUrl: "/products/B0BW272XCV.jpg",
    amazonAsin: "B0BW272XCV"
  },
  {
    slug: "breville-smart-grinder-pro",
    name: "Breville Smart Grinder Pro",
    brand: "Breville",
    category: "grinders",
    tagline: "Timed dosing grinder that pairs cleanly with Breville machines",
    summary: "Breville’s Smart Grinder Pro offers timed dosing, a wide grind range, and a portafilter cradle that matches Breville’s 54mm ecosystem. A convenient mid-range grinder when you want digital controls and less fuss — still verify espresso capability with your preferred beans.",
    priceBand: "About $200",
    budget: "mid",
    priceMin: 180,
    priceMax: 230,
    imageGradient: "from-yellow-900 via-amber-800 to-stone-950",
    imageAlt: "Breville Smart Grinder Pro product photo",
    featured: false,
    amazonQuery: "Breville Smart Grinder Pro",
    pros: [
      "Timed dosing is convenient for weekday routines",
      "Portafilter cradle fits Breville 54mm workflows",
      "Wide range from espresso-fine to coarser brew",
      "Polished Breville design language"
    ],
    cons: [
      "Stepped adjustments can feel coarse for some beans",
      "Retention exists — single-dose habits help",
      "Not as espresso-specialized as Encore ESP for some users"
    ],
    whoItsFor: "Breville machine owners who want matching timed dosing and a familiar control layout.",
    specs: [
      {
        label: "Burrs",
        value: "Conical stainless"
      },
      {
        label: "Dosing",
        value: "Timed digital"
      },
      {
        label: "Adjustment",
        value: "Stepped micro"
      },
      {
        label: "Cradle",
        value: "Portafilter + container"
      },
      {
        label: "Warranty",
        value: "1 year (typical)"
      }
    ],
    relatedSlugs: [
      "breville-bambino-plus",
      "breville-barista-express",
      "baratza-encore-esp"
    ],
    imageUrl: "/products/B00OXGXW8O.jpg",
    amazonAsin: "B00OXGXW8O"
  },
  {
    slug: "fellow-opus",
    name: "Fellow Opus Conical Burr Grinder",
    brand: "Fellow",
    category: "grinders",
    tagline: "Design-forward all-purpose grinder with espresso range",
    summary: "Fellow’s Opus is an all-purpose conical grinder aimed at espresso through pour-over, with a modern look and single-dose friendly workflow. A stylish mid-range option when aesthetics matter as much as grind quality — confirm current Amazon pricing and included accessories.",
    priceBand: "About $195",
    budget: "mid",
    priceMin: 175,
    priceMax: 220,
    imageGradient: "from-stone-900 via-neutral-800 to-zinc-950",
    imageAlt: "Fellow Opus conical burr grinder product photo",
    featured: true,
    amazonQuery: "Fellow Opus conical burr grinder",
    pros: [
      "Espresso-capable range in a stylish package",
      "Single-dose friendly lid and workflow",
      "Strong design fit for modern kitchens",
      "All-purpose: espresso, drip, and pour-over"
    ],
    cons: [
      "Not the absolute quietest in class",
      "Premium look doesn’t always beat Baratza value",
      "Confirm anti-static / retention on your roast style"
    ],
    whoItsFor: "Home baristas who want a good all-purpose grinder that also looks intentional on the counter.",
    specs: [
      {
        label: "Burrs",
        value: "Conical"
      },
      {
        label: "Grind range",
        value: "Espresso to cold brew"
      },
      {
        label: "Workflow",
        value: "Single-dose friendly"
      },
      {
        label: "Capacity",
        value: "See listing"
      },
      {
        label: "Warranty",
        value: "See current listing"
      }
    ],
    relatedSlugs: [
      "fellow-ode-gen-2",
      "fellow-stagg-ekg",
      "baratza-encore-esp"
    ],
    imageUrl: "/products/B0BV96VPSR.jpg",
    amazonAsin: "B0BV96VPSR"
  },
  {
    slug: "eureka-mignon-specialita",
    name: "Eureka Mignon Specialita Espresso Grinder",
    brand: "Eureka",
    category: "grinders",
    tagline: "Quiet stepless 55mm espresso grinder with touchscreen dosing",
    summary: "The Mignon Specialita is a compact premium espresso grinder: sound-insulated body, stepless 55mm flat burrs, and touchscreen timed dosing. A favorite step-up when you’ve outgrown entry stepped grinders and want café-adjacent control at home.",
    priceBand: "About $650",
    budget: "premium",
    priceMin: 550,
    priceMax: 750,
    imageGradient: "from-neutral-800 via-zinc-700 to-stone-950",
    imageAlt: "Eureka Mignon Specialita espresso grinder product photo",
    featured: true,
    amazonQuery: "Eureka Mignon Specialita espresso grinder",
    pros: [
      "Stepless adjustment for fine espresso dialing",
      "Quieter than many grinders in class",
      "Touchscreen timed dosing is weekday-friendly",
      "Compact footprint for premium performance"
    ],
    cons: [
      "Premium price vs Encore ESP / Opus",
      "Single-dose workflow may need bellows/habits",
      "Color/finish variants vary by listing"
    ],
    whoItsFor: "Home baristas upgrading from entry grinders who pull espresso daily and want stepless control.",
    specs: [
      {
        label: "Burrs",
        value: "55 mm flat"
      },
      {
        label: "Adjustment",
        value: "Stepless"
      },
      {
        label: "Dosing",
        value: "Touchscreen timed"
      },
      {
        label: "Noise",
        value: "Sound insulated"
      },
      {
        label: "Warranty",
        value: "See listing"
      }
    ],
    relatedSlugs: [
      "rancilio-silvia",
      "gaggia-classic-pro",
      "baratza-encore-esp"
    ],
    imageUrl: "/products/B07XSK2PKN.jpg",
    amazonAsin: "B07XSK2PKN"
  },
  {
    slug: "fellow-ode-gen-2",
    name: "Fellow Ode Gen 2 Brew Grinder",
    brand: "Fellow",
    category: "grinders",
    tagline: "Single-dose flat burr grinder for pour-over and filter coffee",
    summary: "The Ode Gen 2 is Fellow’s single-dose flat-burr brew grinder with anti-static improvements and 31 settings aimed at pour-over, drip, and cold brew — not espresso-fine. Pair it with a Stagg EKG and a V60 or Chemex when filter is your main game.",
    priceBand: "About $300",
    budget: "mid",
    priceMin: 280,
    priceMax: 350,
    imageGradient: "from-stone-900 via-orange-950 to-amber-950",
    imageAlt: "Fellow Ode Gen 2 brew grinder product photo",
    featured: false,
    amazonQuery: "Fellow Ode Gen 2 brew grinder",
    pros: [
      "Excellent single-dose filter workflow",
      "Flat burr clarity for pour-over",
      "Quieter, anti-static Gen 2 refinements",
      "Matches Fellow kitchen aesthetic"
    ],
    cons: [
      "Not designed for true espresso fineness",
      "Premium for brew-only use",
      "Espresso folks still need a separate grinder"
    ],
    whoItsFor: "Pour-over-focused home brewers who want a stylish single-dose flat burr grinder.",
    specs: [
      {
        label: "Burrs",
        value: "64 mm flat"
      },
      {
        label: "Settings",
        value: "31 grind steps"
      },
      {
        label: "Workflow",
        value: "Single dose"
      },
      {
        label: "Best for",
        value: "Pour-over / drip / cold brew"
      },
      {
        label: "Warranty",
        value: "See listing"
      }
    ],
    relatedSlugs: [
      "fellow-stagg-ekg",
      "hario-v60-02",
      "chemex-classic-6-cup"
    ],
    imageUrl: "/products/B0BLRMCM9Y.jpg",
    amazonAsin: "B0BLRMCM9Y"
  },
  {
    slug: "capresso-infinity",
    name: "Capresso Infinity Plus Conical Burr Grinder",
    brand: "Capresso",
    category: "grinders",
    tagline: "Budget conical burr grinder for drip and coarse brew methods",
    summary: "The Infinity Plus is a widely available budget conical burr grinder with multiple settings and a slow gear-reduction motor. Better than blade grinders for drip and French press — not an espresso specialist. A sensible starter when you need fresh grounds on a tight budget.",
    priceBand: "About $100",
    budget: "budget",
    priceMin: 80,
    priceMax: 130,
    imageGradient: "from-stone-700 via-neutral-800 to-zinc-950",
    imageAlt: "Capresso Infinity Plus conical burr grinder product photo",
    featured: false,
    amazonQuery: "Capresso Infinity Plus conical burr grinder",
    pros: [
      "Affordable conical burrs vs blade grinders",
      "Slow grinding reduces heat vs cheap high-speed units",
      "Fine for drip, pour-over, and French press",
      "Easy to find replacement parts/accessories"
    ],
    cons: [
      "Not ideal as a primary espresso grinder",
      "Plastic build feels entry-level",
      "Espresso dialing is limited vs Encore ESP"
    ],
    whoItsFor: "Budget buyers upgrading from blades for filter coffee — or a secondary house grinder.",
    specs: [
      {
        label: "Burrs",
        value: "Conical steel"
      },
      {
        label: "Settings",
        value: "16 grind settings"
      },
      {
        label: "Motor",
        value: "Gear reduction / slow"
      },
      {
        label: "Best for",
        value: "Drip / press / pour-over"
      },
      {
        label: "Warranty",
        value: "See listing"
      }
    ],
    relatedSlugs: [
      "baratza-encore-esp",
      "chemex-classic-6-cup",
      "aeropress-original"
    ],
    imageUrl: "/products/B07N4KTW38.jpg",
    amazonAsin: "B07N4KTW38"
  },
  {
    slug: "fellow-stagg-ekg",
    name: "Fellow Stagg EKG Electric Kettle",
    brand: "Fellow",
    category: "kettles-scales",
    tagline: "Precision pour kettle with hold temperature control",
    summary: "The Stagg EKG is the pour-over and tea kettle most home coffee people end up recommending: gooseneck precision, variable temperature, and a hold mode for consistent blooms. Pair it with a scale for dialed recipes — espresso setups still benefit when you brew filter on weekends.",
    priceBand: "About $165",
    budget: "mid",
    priceMin: 140,
    priceMax: 190,
    imageGradient: "from-rose-950 via-orange-900 to-amber-950",
    imageAlt: "Fellow Stagg EKG electric kettle product photo",
    featured: true,
    amazonQuery: "Fellow Stagg EKG electric kettle",
    pros: [
      "Precise gooseneck pour control",
      "Variable temp + hold for consistent recipes",
      "Iconic design that earns counter space",
      "Great companion for pour-over and tea"
    ],
    cons: [
      "Premium price vs basic electric kettles",
      "0.9L capacity may feel small for big batches",
      "Not required for espresso-only setups"
    ],
    whoItsFor: "Anyone brewing pour-over, AeroPress, or tea who wants temperature control and a precise spout.",
    specs: [
      {
        label: "Capacity",
        value: "0.9 L"
      },
      {
        label: "Temp range",
        value: "135–212°F (typical)"
      },
      {
        label: "Spout",
        value: "Gooseneck"
      },
      {
        label: "Hold",
        value: "60 min hold mode"
      },
      {
        label: "Warranty",
        value: "1–2 year (seller-listed)"
      }
    ],
    relatedSlugs: [
      "hario-v60-02",
      "chemex-classic-6-cup",
      "timemore-black-mirror"
    ],
    imageUrl: "/products/B077JBQZPX.jpg",
    amazonAsin: "B077JBQZPX"
  },
  {
    slug: "timemore-black-mirror",
    name: "TIMEMORE Black Mirror Coffee Scale",
    brand: "TIMEMORE",
    category: "kettles-scales",
    tagline: "0.1g scale with timer for espresso and pour-over ratios",
    summary: "A good scale is non-negotiable once you start dialing espresso. The TIMEMORE Black Mirror Basic Plus offers 0.1g resolution, a built-in timer, and a slim surface that fits under a portafilter or dripper — essential once you own a real grinder.",
    priceBand: "About $70",
    budget: "budget",
    priceMin: 55,
    priceMax: 90,
    imageGradient: "from-neutral-900 via-zinc-800 to-stone-950",
    imageAlt: "TIMEMORE Black Mirror coffee scale product photo",
    featured: false,
    amazonQuery: "TIMEMORE Black Mirror coffee scale",
    pros: [
      "0.1g resolution for espresso dose and yield",
      "Built-in timer for shot timing and pour-over",
      "Slim profile fits under portafilters",
      "Strong value vs boutique café scales"
    ],
    cons: [
      "Auto-off timing can interrupt long brew sessions",
      "Not as premium as Acaia for café workflows",
      "Confirm battery/USB details on live listing"
    ],
    whoItsFor: "Home baristas ready to stop guessing dose and yield — essential once you own a real grinder.",
    specs: [
      {
        label: "Resolution",
        value: "0.1 g"
      },
      {
        label: "Timer",
        value: "Built-in"
      },
      {
        label: "Capacity",
        value: "~2 kg class"
      },
      {
        label: "Surface",
        value: "Water-resistant top"
      },
      {
        label: "Power",
        value: "USB / battery (model-dependent)"
      }
    ],
    relatedSlugs: [
      "fellow-stagg-ekg",
      "baratza-encore-esp",
      "normcore-v4-tamper"
    ],
    imageUrl: "/products/B084MBRTJS.jpg",
    amazonAsin: "B084MBRTJS"
  },
  {
    slug: "acaia-pearl",
    name: "Acaia Pearl Coffee Scale",
    brand: "Acaia",
    category: "kettles-scales",
    tagline: "Café-grade scale with app connectivity and flow-rate feedback",
    summary: "Acaia's Pearl is the premium coffee scale: fast response, 0.1g resolution, and Bluetooth app features for flow-rate nerds. Overkill for casual drip — worth it if you dial espresso or pour-over daily and want café-grade feedback. We lock the US Amazon listing (B018RN7EP0) so the affiliate link goes straight to the product page.",
    priceBand: "About $250",
    budget: "premium",
    priceMin: 220,
    priceMax: 300,
    imageGradient: "from-stone-950 via-amber-950 to-yellow-900",
    imageAlt: "Acaia Pearl coffee scale product photo",
    featured: true,
    amazonQuery: "Acaia Pearl coffee scale",
    pros: [
      "Café-grade speed and accuracy for dialing shots",
      "App connectivity for advanced flow-rate workflows",
      "Durable build for daily espresso and pour-over",
      "Trusted by specialty cafés and competition baristas"
    ],
    cons: [
      "Premium price vs TIMEMORE-class scales",
      "Features may exceed beginner needs",
      "Confirm generation / battery on the live listing"
    ],
    whoItsFor: "Serious home baristas who dial shots or pour-over daily and want café-grade scale feedback.",
    specs: [
      {
        label: "Resolution",
        value: "0.1 g"
      },
      {
        label: "Connectivity",
        value: "Bluetooth / app"
      },
      {
        label: "Capacity",
        value: "2 kg class"
      },
      {
        label: "Battery",
        value: "Rechargeable"
      },
      {
        label: "ASIN",
        value: "B018RN7EP0"
      }
    ],
    relatedSlugs: [
      "timemore-black-mirror",
      "gaggia-classic-pro",
      "eureka-mignon-specialita"
    ],
    imageUrl: "/products/B018RN7EP0.jpg",
    amazonAsin: "B018RN7EP0"
  },
  {
    slug: "chemex-classic-6-cup",
    name: "Chemex Classic 6-Cup Pour-Over",
    brand: "Chemex",
    category: "pour-over",
    tagline: "Iconic glass pour-over carafe for clean, bright filter coffee",
    summary: "The Chemex Classic 6-Cup is the iconic hourglass pour-over: bonded filters, borosilicate glass, and a clean cup that shines with light-to-medium roasts. Pair with a gooseneck kettle and a brew grinder for weekend filter sessions alongside espresso.",
    priceBand: "About $50",
    budget: "budget",
    priceMin: 40,
    priceMax: 65,
    imageGradient: "from-sky-950 via-stone-800 to-amber-950",
    imageAlt: "Chemex Classic 6-Cup pour-over coffeemaker product photo",
    featured: false,
    amazonQuery: "Chemex Classic 6-Cup pour-over",
    pros: [
      "Clean, low-sediment cup profile",
      "Beautiful serving carafe for guests",
      "Simple ritual with huge community recipes",
      "Affordable classic that lasts years"
    ],
    cons: [
      "Proprietary filters are a recurring cost",
      "Less pour control nuance than a V60 for some",
      "Fragile glass — handle carefully"
    ],
    whoItsFor: "Filter coffee lovers who want an iconic carafe for 2–4 cups on weekends.",
    specs: [
      {
        label: "Capacity",
        value: "6-cup Classic"
      },
      {
        label: "Material",
        value: "Borosilicate glass"
      },
      {
        label: "Filters",
        value: "Chemex bonded"
      },
      {
        label: "Method",
        value: "Pour-over"
      },
      {
        label: "Warranty",
        value: "See listing"
      }
    ],
    relatedSlugs: [
      "fellow-stagg-ekg",
      "hario-v60-02",
      "fellow-ode-gen-2"
    ],
    imageUrl: "/products/B01LYUX6LK.jpg",
    amazonAsin: "B01LYUX6LK"
  },
  {
    slug: "hario-v60-02",
    name: "Hario V60 Ceramic Dripper 02",
    brand: "Hario",
    category: "pour-over",
    tagline: "The classic spiral-rib pour-over dripper for single cups",
    summary: "The Hario V60-02 ceramic dripper is the pour-over standard: spiral ribs, large single hole, and endless recipe control. Lightweight kits exist too — ceramic holds heat well for consistent weekday cups when paired with a kettle and scale.",
    priceBand: "About $25",
    budget: "budget",
    priceMin: 18,
    priceMax: 35,
    imageGradient: "from-stone-800 via-neutral-700 to-orange-950",
    imageAlt: "Hario V60 ceramic dripper size 02 product photo",
    featured: false,
    amazonQuery: "Hario V60 ceramic dripper 02 white",
    pros: [
      "Huge recipe ecosystem and competitions history",
      "Excellent control for single-cup brewing",
      "Ceramic heat retention",
      "Cheap entry into specialty pour-over"
    ],
    cons: [
      "Technique-sensitive vs immersion brewers",
      "Needs kettle + filters + scale for best results",
      "Ceramic can chip if mishandled"
    ],
    whoItsFor: "Anyone building a pour-over kit — the default dripper most guides assume.",
    specs: [
      {
        label: "Size",
        value: "02 (1–4 cups)"
      },
      {
        label: "Material",
        value: "Ceramic"
      },
      {
        label: "Filters",
        value: "V60 paper 02"
      },
      {
        label: "Ribs",
        value: "Spiral"
      },
      {
        label: "Origin",
        value: "Hario Japan"
      }
    ],
    relatedSlugs: [
      "fellow-stagg-ekg",
      "timemore-black-mirror",
      "chemex-classic-6-cup"
    ],
    imageUrl: "/products/B000P4D5HG.jpg",
    amazonAsin: "B000P4D5HG"
  },
  {
    slug: "subminimal-nanofoamer",
    name: "Subminimal NanoFoamer Lithium",
    brand: "Subminimal",
    category: "frothers-accessories",
    tagline: "Handheld microfoam for espresso setups without strong steam",
    summary: "The NanoFoamer is a handheld milk frother designed to make microfoam when your machine’s steam wand is weak — or when you want latte art practice without blasting steam. Popular accessory alongside Dedica, Flair, and entry machines.",
    priceBand: "About $90",
    budget: "mid",
    priceMin: 70,
    priceMax: 110,
    imageGradient: "from-sky-950 via-cyan-900 to-stone-950",
    imageAlt: "Subminimal NanoFoamer milk frother product photo",
    featured: true,
    amazonQuery: "Subminimal NanoFoamer Lithium",
    pros: [
      "Microfoam without relying on a weak steam wand",
      "Great practice tool for latte art",
      "Compact and travel-friendly",
      "Pairs well with slim budget and manual machines"
    ],
    cons: [
      "Not a full replacement for a strong steam wand",
      "Technique still matters for silky foam",
      "Battery versions need charging discipline"
    ],
    whoItsFor: "Dedica/Bambino/Flair owners who want better milk texture, or anyone practicing latte art at home.",
    specs: [
      {
        label: "Type",
        value: "Handheld frother"
      },
      {
        label: "Power",
        value: "Lithium rechargeable"
      },
      {
        label: "Use",
        value: "Microfoam / latte art"
      },
      {
        label: "Milk volume",
        value: "Single drink class"
      },
      {
        label: "Warranty",
        value: "See listing"
      }
    ],
    relatedSlugs: [
      "delonghi-dedica",
      "flair-neo-flex",
      "milk-frothing-pitcher"
    ],
    imageUrl: "/products/B0B5LMQXXH.jpg",
    amazonAsin: "B0B5LMQXXH"
  },
  {
    slug: "aeropress-original",
    name: "AeroPress Coffee Maker",
    brand: "AeroPress",
    category: "pour-over",
    tagline: "Portable immersion-pressure brewer for travel and weekday cups",
    summary: "The AeroPress is the most useful “not espresso” tool in a home barista kit: fast, forgiving, travel-ready, and excellent with a good grinder. Keep one even if espresso is your main game — it’s the backup brewer that never lets you down.",
    priceBand: "About $40",
    budget: "budget",
    priceMin: 30,
    priceMax: 50,
    imageGradient: "from-red-950 via-rose-900 to-stone-950",
    imageAlt: "AeroPress coffee maker product photo",
    featured: false,
    amazonQuery: "AeroPress coffee maker original",
    pros: [
      "Fast, clean, forgiving brew method",
      "Ultra portable for travel and office",
      "Cheap entry into better-than-drip coffee",
      "Pairs brilliantly with any decent grinder"
    ],
    cons: [
      "Not true espresso pressure or crema",
      "Paper filters are a recurring cost",
      "Single-cup workflow by design"
    ],
    whoItsFor: "Anyone who wants a reliable everyday or travel brewer alongside (or before) a full espresso setup.",
    specs: [
      {
        label: "Method",
        value: "Immersion + pressure"
      },
      {
        label: "Capacity",
        value: "1–2 cups"
      },
      {
        label: "Filters",
        value: "Paper (metal optional)"
      },
      {
        label: "Materials",
        value: "BPA-free plastic"
      },
      {
        label: "Travel",
        value: "Excellent"
      }
    ],
    relatedSlugs: [
      "wacaco-nanopresso",
      "fellow-stagg-ekg",
      "fellow-opus"
    ],
    imageUrl: "/products/B0047BIWSK.jpg",
    amazonAsin: "B0047BIWSK"
  },
  {
    slug: "normcore-v4-tamper",
    name: "Normcore V4 Spring-Loaded Tamper 58.5mm",
    brand: "Normcore",
    category: "frothers-accessories",
    tagline: "Calibrated tamp for 58mm portafilters like the Gaggia Classic",
    summary: "Consistent tamping pressure removes one variable from espresso dialing. Normcore’s spring-loaded V4 tampers are popular with 58mm machines (Gaggia Classic Pro, Silvia, and many prosumer setups). Confirm diameter matches your portafilter before ordering.",
    priceBand: "About $45",
    budget: "budget",
    priceMin: 35,
    priceMax: 60,
    imageGradient: "from-stone-800 via-neutral-700 to-amber-950",
    imageAlt: "Normcore V4 spring-loaded tamper product photo",
    featured: false,
    amazonQuery: "Normcore V4 spring loaded tamper 58.5mm",
    pros: [
      "Calibrated spring pressure for consistency",
      "Popular 58.5mm fit for Classic Pro workflows",
      "Affordable upgrade vs guessing tamp force",
      "Solid everyday build for home use"
    ],
    cons: [
      "Wrong diameter = wasted purchase — measure first",
      "Not needed day-one for pressurized-basket beginners",
      "Base style preferences are personal"
    ],
    whoItsFor: "Gaggia Classic Pro, Silvia, and other 58mm owners ready to dial espresso with consistent tamps.",
    specs: [
      {
        label: "Diameter",
        value: "58.5 mm (verify)"
      },
      {
        label: "Style",
        value: "Spring-loaded / calibrated"
      },
      {
        label: "Base",
        value: "Flat (typical V4)"
      },
      {
        label: "Handle",
        value: "See listing variant"
      },
      {
        label: "Fit",
        value: "58 mm portafilter class"
      }
    ],
    relatedSlugs: [
      "gaggia-classic-pro",
      "normcore-wdt-tool",
      "blind-basket-58mm"
    ],
    imageUrl: "/products/B09BTLP4P1.jpg",
    amazonAsin: "B09BTLP4P1"
  },
  {
    slug: "milk-frothing-pitcher",
    name: "Rattleware 12oz Stainless Milk Frothing Pitcher",
    brand: "Rattleware",
    category: "frothers-accessories",
    tagline: "Essential pitcher for steaming and latte art practice",
    summary: "A 12oz stainless pitcher is the everyday milk vessel for single cappuccinos and flat whites. The Rattleware classic offers a sharp spout and durable steel — a cheap upgrade that improves milk drinks immediately.",
    priceBand: "$15–$30",
    budget: "budget",
    priceMin: 12,
    priceMax: 35,
    imageGradient: "from-zinc-700 via-stone-600 to-neutral-900",
    imageAlt: "Rattleware stainless steel milk frothing pitcher product photo",
    featured: false,
    amazonQuery: "Rattleware 12oz stainless milk frothing pitcher",
    pros: [
      "Required for proper steam wand technique",
      "Cheap upgrade that improves milk drinks fast",
      "Sharp spout helps beginner latte art",
      "Durable stainless for daily use"
    ],
    cons: [
      "12oz is best for single drinks — size up for pitchers of lattes",
      "Spout geometry is personal preference",
      "Hand-wash recommended for longevity"
    ],
    whoItsFor: "Anyone with a steam wand (or NanoFoamer) who is ready to practice real milk texture.",
    specs: [
      {
        label: "Capacity",
        value: "12 oz / ~350 ml"
      },
      {
        label: "Material",
        value: "Stainless steel"
      },
      {
        label: "Spout",
        value: "Latte-art style"
      },
      {
        label: "Brand",
        value: "Rattleware"
      },
      {
        label: "Care",
        value: "Hand wash recommended"
      }
    ],
    relatedSlugs: [
      "subminimal-nanofoamer",
      "breville-bambino-plus",
      "delonghi-dedica"
    ],
    imageUrl: "/products/B0016CBMYY.jpg",
    amazonAsin: "B0016CBMYY"
  },
  {
    slug: "normcore-wdt-tool",
    name: "Normcore WDT Distribution Tool V3",
    brand: "Normcore",
    category: "frothers-accessories",
    tagline: "Needle distribution tool for even espresso puck prep",
    summary: "A WDT (Weiss Distribution Technique) tool breaks up clumps and levels grounds before tamping — one of the highest-ROI accessories once you use non-pressurized baskets. Normcore’s V3 includes a stand and fine needles for consistent puck prep.",
    priceBand: "About $35",
    budget: "budget",
    priceMin: 25,
    priceMax: 50,
    imageGradient: "from-amber-950 via-stone-800 to-zinc-950",
    imageAlt: "Normcore WDT espresso distribution tool product photo",
    featured: false,
    amazonQuery: "Normcore WDT distribution tool",
    pros: [
      "Improves shot consistency by reducing clumps",
      "Stand keeps needles safe and tidy",
      "Fine needles suitable for espresso pucks",
      "Cheap upgrade after a good grinder"
    ],
    cons: [
      "Technique still matters — don’t over-stir",
      "Not needed with pressurized beginner baskets",
      "Needle thickness preferences vary"
    ],
    whoItsFor: "Home baristas on non-pressurized baskets who want more even extractions.",
    specs: [
      {
        label: "Type",
        value: "WDT needle tool"
      },
      {
        label: "Needles",
        value: "Multi-prong fine wires"
      },
      {
        label: "Stand",
        value: "Included (V3)"
      },
      {
        label: "Use",
        value: "Puck distribution"
      },
      {
        label: "Warranty",
        value: "See listing"
      }
    ],
    relatedSlugs: [
      "normcore-v4-tamper",
      "gaggia-classic-pro",
      "timemore-black-mirror"
    ],
    imageUrl: "/products/B0DSV2CQZL.jpg",
    amazonAsin: "B0DSV2CQZL"
  },
  {
    slug: "blind-basket-58mm",
    name: "58mm Blind Basket Backflush Insert",
    brand: "Espresso Supply",
    category: "cleaning-maintenance",
    tagline: "Backflush disc for cleaning 58mm group heads",
    summary: "A blind (backflush) basket lets you run detergent cycles through machines with a 3-way solenoid — essential maintenance for Gaggia Classic Pro, Silvia, and similar 58mm groups. Pair with Puly Caff cleaner for a healthy group head.",
    priceBand: "About $10",
    budget: "budget",
    priceMin: 8,
    priceMax: 20,
    imageGradient: "from-zinc-800 via-stone-700 to-neutral-950",
    imageAlt: "58mm stainless blind basket backflush insert product photo",
    featured: false,
    amazonQuery: "58mm blind basket backflush insert",
    pros: [
      "Required for proper backflush cleaning",
      "Cheap insurance for group head longevity",
      "Fits standard 58mm portafilters",
      "Pairs with espresso machine detergent"
    ],
    cons: [
      "Wrong size won’t seal — measure your portafilter",
      "Not for machines without a 3-way valve workflow",
      "Easy to misplace — store with cleaning kit"
    ],
    whoItsFor: "58mm machine owners ready to clean with detergent backflush cycles.",
    specs: [
      {
        label: "Diameter",
        value: "58 mm"
      },
      {
        label: "Type",
        value: "Blind / backflush insert"
      },
      {
        label: "Material",
        value: "Metal"
      },
      {
        label: "Use",
        value: "Group cleaning"
      },
      {
        label: "Pair with",
        value: "Puly Caff detergent"
      }
    ],
    relatedSlugs: [
      "puly-caff-plus",
      "gaggia-classic-pro",
      "rancilio-silvia"
    ],
    imageUrl: "/products/B0016C8ZO4.jpg",
    amazonAsin: "B0016C8ZO4"
  },
  {
    slug: "puly-caff-plus",
    name: "Puly Caff Plus Espresso Machine Cleaner",
    brand: "Puly",
    category: "cleaning-maintenance",
    tagline: "Detergent powder for backflushing and portafilter cleaning",
    summary: "Puly Caff Plus is the café-standard espresso machine detergent for backflushing group heads and soaking portafilters. If you pull shots daily, scheduled cleaning keeps flavors sweet and valves healthy — use with a blind basket on compatible machines.",
    priceBand: "About $20",
    budget: "budget",
    priceMin: 15,
    priceMax: 30,
    imageGradient: "from-blue-950 via-sky-900 to-stone-950",
    imageAlt: "Puly Caff Plus espresso machine cleaner product photo",
    featured: false,
    amazonQuery: "Puly Caff Plus espresso machine cleaner",
    pros: [
      "Industry-standard espresso detergent",
      "Effective on oils in group and baskets",
      "Large jar lasts home users a long time",
      "Essential with a blind basket routine"
    ],
    cons: [
      "Follow dilution and rinse instructions carefully",
      "Not a descaler — use the right product for scale",
      "Powder handling requires care"
    ],
    whoItsFor: "Anyone running a semi-auto regularly who wants café-style cleaning habits.",
    specs: [
      {
        label: "Type",
        value: "Detergent powder"
      },
      {
        label: "Use",
        value: "Backflush / soak"
      },
      {
        label: "Size",
        value: "~32 oz jar class"
      },
      {
        label: "Pair with",
        value: "Blind basket"
      },
      {
        label: "Rinse",
        value: "Required after cycles"
      }
    ],
    relatedSlugs: [
      "blind-basket-58mm",
      "gaggia-classic-pro",
      "breville-knock-box-mini"
    ],
    imageUrl: "/products/B0033FYR0I.jpg",
    amazonAsin: "B0033FYR0I"
  },
  {
    slug: "breville-knock-box-mini",
    name: "Breville Knock Box Mini",
    brand: "Breville",
    category: "frothers-accessories",
    tagline: "Compact knock box for tidy puck disposal",
    summary: "The Knock Box Mini gives used pucks a dedicated home — strike the portafilter on the bar and keep your sink cleaner. Compact stainless design fits next to Bambino and Barista Express setups.",
    priceBand: "About $25",
    budget: "budget",
    priceMin: 18,
    priceMax: 40,
    imageGradient: "from-stone-700 via-zinc-800 to-neutral-950",
    imageAlt: "Breville Knock Box Mini product photo",
    featured: false,
    amazonQuery: "Breville Knock Box Mini BES001XL",
    pros: [
      "Mess-free puck disposal",
      "Compact footprint for small counters",
      "Removable knock bar for cleaning",
      "Matches Breville station aesthetics"
    ],
    cons: [
      "Mini size fills fast with heavy use",
      "Not required on day one — nice quality-of-life upgrade",
      "Rubber base care varies by listing"
    ],
    whoItsFor: "Daily espresso drinkers tired of knocking pucks into the trash or sink.",
    specs: [
      {
        label: "Type",
        value: "Knock box"
      },
      {
        label: "Size",
        value: "Mini (~4 in class)"
      },
      {
        label: "Material",
        value: "Stainless"
      },
      {
        label: "Bar",
        value: "Removable"
      },
      {
        label: "Model",
        value: "BES001XL"
      }
    ],
    relatedSlugs: [
      "breville-bambino",
      "breville-barista-express",
      "normcore-v4-tamper"
    ],
    imageUrl: "/products/B00ISQ6ZKC.jpg",
    amazonAsin: "B00ISQ6ZKC"
  },
  {
    slug: "breville-barista-pro",
    name: "Breville Barista Pro Espresso Machine",
    brand: "Breville",
    category: "espresso-machines",
    tagline: "ThermoJet heat-up, built-in grinder, LCD dosing — the Express upgraded",
    summary: "The Barista Pro keeps the all-in-one beans-to-espresso workflow of the Express and adds ThermoJet heat-up (~3 seconds claimed), an LCD interface, and finer grind control. It's the machine we recommend when you want one appliance that can keep up with weekday milk drinks without waiting on a slow thermocoil.",
    priceBand: "About $850",
    budget: "premium",
    priceMin: 750,
    priceMax: 950,
    imageGradient: "from-amber-800 via-yellow-900 to-stone-950",
    imageAlt: "Breville Barista Pro espresso machine product photo",
    featured: true,
    amazonQuery: "Breville Barista Pro BES878BSS",
    pros: [
      "Near-instant ThermoJet heat-up vs older Express coils",
      "Integrated conical burr grinder with dose control",
      "LCD feedback for grind and shot progress",
      "Strong single-appliance value for milk-drink households"
    ],
    cons: [
      "Integrated grinder is convenient, not peak specialty-class",
      "Larger footprint than Bambino",
      "Learning curve still real for dialing shots and milk"
    ],
    whoItsFor: "Buyers who want a fast all-in-one espresso station and prefer one branded workflow over a separate grinder.",
    specs: [
      {
        label: "Boiler",
        value: "ThermoJet / single"
      },
      {
        label: "Portafilter",
        value: "54 mm"
      },
      {
        label: "Grinder",
        value: "Integrated conical, ~30 settings"
      },
      {
        label: "Heat-up",
        value: "~3 seconds (claimed)"
      },
      {
        label: "Warranty",
        value: "1 year limited (typical)"
      }
    ],
    relatedSlugs: [
      "breville-barista-express",
      "breville-bambino-plus",
      "baratza-encore-esp"
    ],
    imageUrl: "/products/B07VVMBY4M.jpg",
    amazonAsin: "B07VVMBY4M"
  },
  {
    slug: "breville-barista-touch-impress",
    name: "Breville Barista Touch Impress",
    brand: "Breville",
    category: "espresso-machines",
    tagline: "Touchscreen presets, assisted dosing, and cold extraction in one chassis",
    summary: "The Barista Touch Impress is Breville's guided all-in-one: touchscreen drink presets, assisted dosing/tamping cues, automatic milk texturing, and cold extraction for iced drinks. Choose it when you want café variety with less wand practice — still plan to learn dialing if you care about shot taste.",
    priceBand: "About $1,200",
    budget: "premium",
    priceMin: 1100,
    priceMax: 1400,
    imageGradient: "from-stone-800 via-amber-900 to-orange-950",
    imageAlt: "Breville Barista Touch Impress espresso machine product photo",
    featured: true,
    amazonQuery: "Breville Barista Touch Impress BES881",
    pros: [
      "Touchscreen presets speed up household drink variety",
      "Assisted dosing helps first-week consistency",
      "Auto milk texturing for weekday cappuccinos",
      "Cold extraction expands iced-drink options"
    ],
    cons: [
      "Premium price vs Barista Pro / Bambino Plus",
      "Guided workflows can hide variables you eventually want to own",
      "Still needs fresh beans and cleaning discipline"
    ],
    whoItsFor: "Households that want touchscreen convenience, milk drinks, and iced options without building a separate grinder station.",
    specs: [
      {
        label: "Boiler",
        value: "ThermoJet / single"
      },
      {
        label: "Interface",
        value: "Color touchscreen"
      },
      {
        label: "Portafilter",
        value: "54 mm"
      },
      {
        label: "Milk",
        value: "Automatic steam wand"
      },
      {
        label: "Extras",
        value: "Cold extraction"
      }
    ],
    relatedSlugs: [
      "breville-barista-pro",
      "delonghi-la-specialista",
      "subminimal-nanofoamer"
    ],
    imageUrl: "/products/B0C1T4W797.jpg",
    amazonAsin: "B0C1T4W797"
  },
  {
    slug: "delonghi-la-specialista",
    name: "De’Longhi La Specialista Espresso Machine",
    brand: "De’Longhi",
    category: "espresso-machines",
    tagline: "Sensor grinder, smart tamp station, dual heating for brew + milk",
    summary: "La Specialista is De’Longhi’s guided mid-premium machine: sensor grinding, a lever tamping station that stays on the portafilter, and dual heating so you’re not waiting forever between espresso and steam. A strong pick if you want Italian-brand convenience with less mess than freehand tamping.",
    priceBand: "About $700",
    budget: "mid",
    priceMin: 600,
    priceMax: 850,
    imageGradient: "from-zinc-700 via-stone-600 to-amber-950",
    imageAlt: "DeLonghi La Specialista espresso machine product photo",
    featured: true,
    amazonQuery: "DeLonghi La Specialista EC9335M",
    pros: [
      "Sensor grinding aims for consistent dose",
      "On-machine tamp station reduces counter mess",
      "Dual heating shortens brew-to-steam waits",
      "Advanced Latte System helps milk texture choices"
    ],
    cons: [
      "51mm-class ecosystem is smaller than 58mm prosumer",
      "Guided design is less mod-friendly than Gaggia/Silvia",
      "Confirm current model generation on the listing"
    ],
    whoItsFor: "Home baristas who want guided grinding/tamping and faster milk drinks without jumping to a dual-boiler.",
    specs: [
      {
        label: "Heating",
        value: "Dual (brew + steam)"
      },
      {
        label: "Grinder",
        value: "Integrated sensor conical"
      },
      {
        label: "Tamping",
        value: "Built-in lever station"
      },
      {
        label: "Milk",
        value: "Advanced Latte System"
      },
      {
        label: "Model",
        value: "EC9335M class"
      }
    ],
    relatedSlugs: [
      "breville-barista-pro",
      "delonghi-dedica",
      "milk-frothing-pitcher"
    ],
    imageUrl: "/products/B07XSH4J3M.jpg",
    amazonAsin: "B07XSH4J3M"
  },
  {
    slug: "gaggia-classic-evo-pro",
    name: "Gaggia Classic Evo Pro",
    brand: "Gaggia",
    category: "espresso-machines",
    tagline: "Updated Classic with 9-bar brew, 58mm group, commercial steam wand",
    summary: "The Classic Evo Pro is the modern Gaggia Classic: commercial-style 58mm portafilter, ~9-bar brew path, and a commercial steam wand — with boiler updates aimed at scale resistance. It replaces older Classic Pro listings as the default “learn real espresso” machine under $600 when you bring a proper grinder.",
    priceBand: "About $530",
    budget: "mid",
    priceMin: 450,
    priceMax: 600,
    imageGradient: "from-zinc-800 via-stone-700 to-amber-950",
    imageAlt: "Gaggia Classic Evo Pro espresso machine product photo",
    featured: true,
    amazonQuery: "Gaggia Classic Evo Pro RI9380",
    pros: [
      "58mm commercial-style portafilter ecosystem",
      "True ~9-bar brew focus for better extractions",
      "Commercial steam wand for microfoam practice",
      "Huge accessory and community support"
    ],
    cons: [
      "Steeper learning curve than Bambino / La Specialista",
      "No built-in grinder — budget separately",
      "Single boiler means brew/steam sequencing"
    ],
    whoItsFor: "Enthusiasts who want a durable 58mm platform and are willing to practice technique with a dedicated espresso grinder.",
    specs: [
      {
        label: "Boiler",
        value: "Aluminum / updated Evo"
      },
      {
        label: "Portafilter",
        value: "58 mm"
      },
      {
        label: "Pressure",
        value: "~9 bar brew"
      },
      {
        label: "Steam",
        value: "Commercial-style wand"
      },
      {
        label: "Model",
        value: "RI9380/46 class"
      }
    ],
    relatedSlugs: [
      "gaggia-classic-pro",
      "baratza-encore-esp",
      "normcore-v4-tamper"
    ],
    imageUrl: "/products/B086H458MP.jpg",
    amazonAsin: "B086H458MP"
  },
  {
    slug: "baratza-sette-270wi",
    name: "Baratza Sette 270Wi Burr Grinder",
    brand: "Baratza",
    category: "grinders",
    tagline: "Grind-by-weight espresso dosing with straight-through conical burrs",
    summary: "The Sette 270Wi weighs as it grinds — Acaia-class load cell, programmable weight presets, and Baratza’s straight-through conical path into the portafilter. Loud, fast, and purpose-built for espresso workflow when you’ve outgrown stepped entry grinders.",
    priceBand: "About $450",
    budget: "premium",
    priceMin: 400,
    priceMax: 520,
    imageGradient: "from-emerald-900 via-teal-800 to-stone-950",
    imageAlt: "Baratza Sette 270Wi coffee grinder product photo",
    featured: true,
    amazonQuery: "Baratza Sette 270Wi grinder",
    pros: [
      "Grind-by-weight removes timed-dose guesswork",
      "Straight-through design cuts retention vs chute grinders",
      "Excellent espresso workflow once dialed",
      "Baratza parts and repair support"
    ],
    cons: [
      "Noticeably loud vs Eureka Mignon class",
      "Premium vs Encore ESP / Opus",
      "Plastic body feels less “tank” than Eureka"
    ],
    whoItsFor: "Home baristas pulling daily espresso who want weight-based dosing and faster workflow than entry stepped grinders.",
    specs: [
      {
        label: "Burrs",
        value: "40 mm conical"
      },
      {
        label: "Dosing",
        value: "Grind-by-weight"
      },
      {
        label: "Adjustment",
        value: "Macro + micro steps"
      },
      {
        label: "Workflow",
        value: "Direct to portafilter"
      },
      {
        label: "Warranty",
        value: "1 year (Baratza typical)"
      }
    ],
    relatedSlugs: [
      "baratza-encore-esp",
      "eureka-mignon-specialita",
      "gaggia-classic-evo-pro"
    ],
    imageUrl: "/products/B07CXYF5ZX.jpg",
    amazonAsin: "B07CXYF5ZX"
  },
  {
    slug: "comandante-c40",
    name: "Comandante C40 MK4 Nitro Blade Hand Grinder",
    brand: "Comandante",
    category: "grinders",
    tagline: "Hand-ground clarity that rivals many electrics for pour-over and travel",
    summary: "The Comandante C40 MK4 is the hand grinder enthusiasts keep recommending for pour-over clarity and travel ritual. Nitro Blade burrs, stepless adjustment, and a build that outlasts cheap manuals — not the fastest path to espresso, but exceptional for filter and capable with patience at finer settings.",
    priceBand: "About $285",
    budget: "premium",
    priceMin: 250,
    priceMax: 320,
    imageGradient: "from-stone-900 via-neutral-800 to-zinc-950",
    imageAlt: "Comandante C40 MK4 hand grinder product photo",
    featured: true,
    amazonQuery: "Comandante C40 MK4 Nitro Blade",
    pros: [
      "Outstanding grind quality for pour-over and filter",
      "Stepless adjustment with premium build",
      "No outlet needed — travel and quiet mornings",
      "Long-lived platform with huge community recipes"
    ],
    cons: [
      "Arm workout vs electric dosing",
      "Espresso is possible but slower than a dedicated electric",
      "Premium price for a manual mill"
    ],
    whoItsFor: "Pour-over-focused brewers and travelers who want hand-grinder quality without an electric footprint.",
    specs: [
      {
        label: "Burrs",
        value: "Nitro Blade conical"
      },
      {
        label: "Adjustment",
        value: "Stepless"
      },
      {
        label: "Power",
        value: "Manual"
      },
      {
        label: "Best for",
        value: "Pour-over / travel / capable espresso"
      },
      {
        label: "Origin",
        value: "Comandante Germany"
      }
    ],
    relatedSlugs: [
      "fellow-ode-gen-2",
      "hario-v60-02",
      "timemore-chestnut-c3"
    ],
    imageUrl: "/products/B07JQ4P976.jpg",
    amazonAsin: "B07JQ4P976"
  },
  {
    slug: "timemore-chestnut-c3",
    name: "TIMEMORE Chestnut C2S Hand Grinder",
    brand: "TIMEMORE",
    category: "grinders",
    tagline: "All-metal S2C hand grinder for pour-over and travel",
    summary: "The Chestnut C2S is TIMEMORE’s widely available metal-body hand grinder with stainless conical burrs and dual-bearing alignment. It’s a strong budget pick for pour-over, AeroPress, and French press. Espresso-fine adjustment is limited versus ESP-oriented mills. We keep the verified C2S ASIN so the Amazon link matches the product photo.",
    priceBand: "About $70",
    budget: "budget",
    priceMin: 55,
    priceMax: 90,
    imageGradient: "from-neutral-800 via-zinc-700 to-stone-950",
    imageAlt: "TIMEMORE Chestnut C2S hand grinder product photo",
    featured: false,
    amazonQuery: "TIMEMORE Chestnut C2S hand grinder",
    pros: [
      "Strong value vs premium hand grinders",
      "S2C burrs improve on older C2 cutting",
      "Light enough for travel and camping kits",
      "Espresso-capable with patience"
    ],
    cons: [
      "Not Comandante-level refinement",
      "Capacity is single-cup oriented",
      "Confirm exact C3 vs C3 Max listing variant"
    ],
    whoItsFor: "Travelers and budget-minded brewers who want a real burr hand grinder without Comandante pricing.",
    specs: [
      {
        label: "Burrs",
        value: "S2C stainless conical ~38 mm"
      },
      {
        label: "Adjustment",
        value: "Stepless-style dial"
      },
      {
        label: "Capacity",
        value: "~20 g class"
      },
      {
        label: "Body",
        value: "Aluminum alloy"
      },
      {
        label: "Best for",
        value: "Travel / AeroPress / light espresso"
      }
    ],
    relatedSlugs: [
      "comandante-c40",
      "aeropress-original",
      "wacaco-picopresso"
    ],
    imageUrl: "/products/B0CGTYT12R.jpg",
    amazonAsin: "B0CGTYT12R"
  },
  {
    slug: "hario-skerton-pro",
    name: "Hario Skerton Pro Ceramic Hand Grinder",
    brand: "Hario",
    category: "grinders",
    tagline: "Stabilized ceramic burr mill for travel pour-over on a budget",
    summary: "The Skerton Pro (MMCS-2B) stabilizes Hario’s ceramic conical mill with a better burr axis and grip than the original Skerton. It’s a durable travel and pour-over grinder — not a dedicated espresso specialist — and the Amazon listing now points at the Pro, not the older Skerton.",
    priceBand: "About $50",
    budget: "budget",
    priceMin: 40,
    priceMax: 70,
    imageGradient: "from-stone-700 via-neutral-800 to-zinc-950",
    imageAlt: "Hario Skerton Pro ceramic hand grinder product photo",
    featured: false,
    amazonQuery: "Hario Skerton Pro ceramic coffee mill MMCS-2B",
    pros: [
      "Stabilized axis vs older Skerton wobble",
      "Ceramic burrs resist rust on trips",
      "Easy Amazon availability and parts",
      "Fine for pour-over and press"
    ],
    cons: [
      "Not ideal as a primary espresso grinder",
      "Slower and coarser than Comandante / C3 at the fine end",
      "Plastic jar feels entry-level"
    ],
    whoItsFor: "Budget travelers and pour-over beginners who need a simple ceramic hand mill.",
    specs: [
      {
        label: "Burrs",
        value: "Ceramic conical"
      },
      {
        label: "Stability",
        value: "Pro axis upgrade"
      },
      {
        label: "Best for",
        value: "Pour-over / press"
      },
      {
        label: "Power",
        value: "Manual"
      },
      {
        label: "Brand",
        value: "Hario Japan"
      }
    ],
    relatedSlugs: [
      "hario-v60-02",
      "timemore-chestnut-c3",
      "chemex-classic-6-cup"
    ],
    imageUrl: "/products/B01MXJI90S.jpg",
    amazonAsin: "B01MXJI90S"
  },
  {
    slug: "fellow-stagg-xf",
    name: "Fellow Stagg XF Pour-Over Dripper",
    brand: "Fellow",
    category: "pour-over",
    tagline: "Insulated flat-bottom dripper for larger, heat-stable pour-overs",
    summary: "The Stagg XF is Fellow’s vacuum-insulated flat-bottom dripper for ~20 oz brews — steep walls, anti-clog geometry, and a built-in ratio aid. Pair it with a Stagg EKG and a brew grinder when you want multi-cup pour-over without a Chemex filter ritual.",
    priceBand: "About $80",
    budget: "mid",
    priceMin: 60,
    priceMax: 100,
    imageGradient: "from-stone-900 via-orange-950 to-amber-950",
    imageAlt: "Fellow Stagg XF pour-over dripper product photo",
    featured: true,
    amazonQuery: "Fellow Stagg XF pour-over dripper",
    pros: [
      "Double-wall insulation holds brew temp",
      "Flat-bottom geometry is forgiving vs V60 peaks",
      "Ratio aid helps newer pour-over brewers",
      "Matches Fellow kettle aesthetic"
    ],
    cons: [
      "Uses specific XF / Wave-compatible filters",
      "Pricier than a ceramic V60",
      "Overkill if you only brew single small cups"
    ],
    whoItsFor: "Pour-over fans brewing larger cups who want heat stability and Fellow design language.",
    specs: [
      {
        label: "Capacity",
        value: "~20 oz / 600 ml class"
      },
      {
        label: "Geometry",
        value: "Flat bottom / insulated"
      },
      {
        label: "Filters",
        value: "XF / Wave-compatible"
      },
      {
        label: "Material",
        value: "Stainless double wall"
      },
      {
        label: "Extras",
        value: "Ratio aid"
      }
    ],
    relatedSlugs: [
      "fellow-stagg-ekg",
      "fellow-ode-gen-2",
      "kalita-wave-155"
    ],
    imageUrl: "/products/B07B3HMTPD.jpg",
    amazonAsin: "B07B3HMTPD"
  },
  {
    slug: "clever-dripper",
    name: "Clever Coffee Dripper Large",
    brand: "Clever",
    category: "pour-over",
    tagline: "Immersion-then-release brewer that forgives pour technique",
    summary: "The Clever Dripper soaks like a French press, then drains through a paper filter when you set it on a mug — immersion clarity without endless pour skill. It’s the pour-over we hand beginners who find V60 technique stressful.",
    priceBand: "About $35",
    budget: "budget",
    priceMin: 25,
    priceMax: 45,
    imageGradient: "from-sky-950 via-stone-800 to-amber-950",
    imageAlt: "Clever Coffee Dripper product photo",
    featured: true,
    amazonQuery: "Clever Coffee Dripper large 18 oz",
    pros: [
      "Immersion soak forgives uneven pouring",
      "Paper filter keeps the cup clean",
      "Simple workflow for weekday mornings",
      "Often ships with filters"
    ],
    cons: [
      "Less pour-control nuance than a V60",
      "Plastic body won’t match ceramic aesthetics",
      "Valve seal needs occasional cleaning"
    ],
    whoItsFor: "Beginners and busy mornings that want filter coffee without mastering spiral pours.",
    specs: [
      {
        label: "Capacity",
        value: "Large ~18 oz"
      },
      {
        label: "Method",
        value: "Immersion + drain"
      },
      {
        label: "Filters",
        value: "Cone paper (#4 class)"
      },
      {
        label: "Material",
        value: "BPA-free plastic"
      },
      {
        label: "Skill",
        value: "Beginner-friendly"
      }
    ],
    relatedSlugs: [
      "hario-v60-02",
      "aeropress-original",
      "fellow-stagg-ekg"
    ],
    imageUrl: "/products/B086X11L47.jpg",
    amazonAsin: "B086X11L47"
  },
  {
    slug: "kalita-wave-155",
    name: "Kalita Wave 155 Stainless Dripper",
    brand: "Kalita",
    category: "pour-over",
    tagline: "Flat-bottom Wave geometry for even, forgiving single cups",
    summary: "The Kalita Wave 155 is the smaller stainless Wave dripper — flat bottom, three holes, and Wave filters that limit channeling. Ideal for 1–2 cup brews when you want more even extractions than a steep V60 cone without jumping to immersion.",
    priceBand: "About $30",
    budget: "budget",
    priceMin: 22,
    priceMax: 40,
    imageGradient: "from-stone-800 via-neutral-700 to-orange-950",
    imageAlt: "Kalita Wave 155 dripper product photo",
    featured: false,
    amazonQuery: "Kalita Wave 155 stainless dripper",
    pros: [
      "Flat bottom reduces channeling vs steep cones",
      "Stainless travels better than ceramic",
      "Wave filters guide even flow",
      "Great single-cup size"
    ],
    cons: [
      "Wave filters are a recurring specialty cost",
      "155 is small — size up to 185 for bigger cups",
      "Less recipe chaos/control than V60 for some"
    ],
    whoItsFor: "Pour-over brewers who want a forgiving flat-bottom dripper for one or two cups.",
    specs: [
      {
        label: "Size",
        value: "155 (1–2 cups)"
      },
      {
        label: "Material",
        value: "Stainless"
      },
      {
        label: "Filters",
        value: "Wave 155"
      },
      {
        label: "Geometry",
        value: "Flat bottom / 3 holes"
      },
      {
        label: "Origin",
        value: "Kalita Japan"
      }
    ],
    relatedSlugs: [
      "hario-v60-02",
      "fellow-stagg-xf",
      "timemore-black-mirror"
    ],
    imageUrl: "/products/B00TY0UFAW.jpg",
    amazonAsin: "B00TY0UFAW"
  },
  {
    slug: "wacaco-picopresso",
    name: "Wacaco Picopresso Portable Espresso Maker",
    brand: "Wacaco",
    category: "travel-espresso",
    tagline: "Naked-portafilter travel espresso with real puck prep",
    summary: "The Picopresso is Wacaco’s pro-leaning manual portable: a naked portafilter-style basket, high claimed pressure, and a workflow that rewards distribution and tamping. It’s the travel maker we point enthusiasts toward when Nanopresso feels too toy-like.",
    priceBand: "About $130",
    budget: "mid",
    priceMin: 110,
    priceMax: 160,
    imageGradient: "from-slate-800 via-cyan-900 to-stone-950",
    imageAlt: "Wacaco Picopresso portable espresso maker product photo",
    featured: true,
    amazonQuery: "Wacaco Picopresso portable espresso",
    pros: [
      "Naked basket feedback helps dial extractions",
      "Serious pressure for a hand-powered travel tool",
      "No batteries or plugs required",
      "Excellent teacher for puck prep on the road"
    ],
    cons: [
      "Needs hot water from a separate kettle",
      "Manual pumping takes effort",
      "No steam — milk drinks need a frother"
    ],
    whoItsFor: "Traveling espresso enthusiasts who already understand puck prep and want café-adjacent shots away from home.",
    specs: [
      {
        label: "Type",
        value: "Manual portable"
      },
      {
        label: "Basket",
        value: "Naked / exposed"
      },
      {
        label: "Power",
        value: "Hand operated"
      },
      {
        label: "Water",
        value: "Preheat separately"
      },
      {
        label: "Warranty",
        value: "See listing"
      }
    ],
    relatedSlugs: [
      "wacaco-nanopresso",
      "outin-nano",
      "timemore-chestnut-c3"
    ],
    imageUrl: "/products/B097DCNLL6.jpg",
    amazonAsin: "B097DCNLL6"
  },
  {
    slug: "outin-nano",
    name: "OutIn Nano Portable Electric Espresso Maker",
    brand: "OutIn",
    category: "travel-espresso",
    tagline: "Self-heating USB-C travel espresso without a separate kettle",
    summary: "The OutIn Nano heats water onboard and pushes espresso-style shots with a rechargeable pump — the travel pick when you don’t want to borrow a hotel kettle. Less “manual craft” than Picopresso, more weekday convenience for vans, offices, and Airbnbs.",
    priceBand: "About $150",
    budget: "mid",
    priceMin: 120,
    priceMax: 190,
    imageGradient: "from-orange-950 via-amber-900 to-stone-950",
    imageAlt: "OutIn Nano portable electric espresso maker product photo",
    featured: true,
    amazonQuery: "OutIn Nano portable espresso machine",
    pros: [
      "Self-heating — no separate kettle required",
      "USB-C rechargeable for vans and offices",
      "Faster weekday travel workflow than pure manuals",
      "Compact electric form factor"
    ],
    cons: [
      "Battery management becomes part of the ritual",
      "Not a full café steam + dual-boiler experience",
      "Confirm basket compatibility and accessories on listing"
    ],
    whoItsFor: "Travelers and remote workers who want heated portable espresso without hunting for a kettle.",
    specs: [
      {
        label: "Type",
        value: "Portable electric"
      },
      {
        label: "Heat",
        value: "Onboard heating"
      },
      {
        label: "Power",
        value: "USB-C rechargeable"
      },
      {
        label: "Use",
        value: "Travel / office / camping"
      },
      {
        label: "Warranty",
        value: "See listing"
      }
    ],
    relatedSlugs: [
      "wacaco-picopresso",
      "wacaco-nanopresso",
      "wacaco-pixapresso"
    ],
    imageUrl: "/products/B0BRKFWPF3.jpg",
    amazonAsin: "B0BRKFWPF3"
  },
  {
    slug: "wacaco-pixapresso",
    name: "Wacaco Pixapresso Electric Portable Espresso",
    brand: "Wacaco",
    category: "travel-espresso",
    tagline: "Electric portable from Wacaco with multiple drink modes",
    summary: "Pixapresso is Wacaco’s electric portable direction — rechargeable brewing with multiple drink profiles for travelers who want less pumping than Picopresso. A newer option in the travel category; verify included accessories and battery claims on the live listing.",
    priceBand: "About $200",
    budget: "mid",
    priceMin: 160,
    priceMax: 250,
    imageGradient: "from-emerald-950 via-teal-900 to-stone-950",
    imageAlt: "Wacaco Pixapresso electric portable espresso product photo",
    featured: false,
    amazonQuery: "Wacaco Pixapresso electric portable espresso",
    pros: [
      "Electric convenience vs hand-pump models",
      "Multiple drink modes for travel variety",
      "Wacaco ecosystem familiarity",
      "Good complement to Picopresso’s manual craft"
    ],
    cons: [
      "Heavier and pricier than Nanopresso",
      "Battery life varies with heat cycles",
      "Newer product — check current firmware/accessories"
    ],
    whoItsFor: "Wacaco fans who want electric travel brewing with less manual pumping.",
    specs: [
      {
        label: "Type",
        value: "Portable electric"
      },
      {
        label: "Modes",
        value: "Multi drink profiles"
      },
      {
        label: "Power",
        value: "Rechargeable"
      },
      {
        label: "Brand",
        value: "Wacaco"
      },
      {
        label: "Warranty",
        value: "See listing"
      }
    ],
    relatedSlugs: [
      "outin-nano",
      "wacaco-picopresso",
      "wacaco-nanopresso"
    ],
    imageUrl: "/products/B0F6LB2525.jpg",
    amazonAsin: "B0F6LB2525"
  },
  {
    slug: "milk-pitcher-20oz",
    name: "HOOMIL 20oz Stainless Milk Frothing Pitcher",
    brand: "HOOMIL",
    category: "frothers-accessories",
    tagline: "Larger pitcher for two drinks or bigger latte art practice",
    summary: "A 20oz pitcher gives you room for two cappuccinos or more forgiving latte art practice than a tight 12oz. Sharp spout, durable stainless — size up when the 12oz Rattleware feels cramped.",
    priceBand: "$15–$25",
    budget: "budget",
    priceMin: 12,
    priceMax: 30,
    imageGradient: "from-zinc-700 via-stone-600 to-neutral-900",
    imageAlt: "20oz stainless milk frothing pitcher product photo",
    featured: false,
    amazonQuery: "20oz stainless milk frothing pitcher",
    pros: [
      "More volume for two drinks or practice pours",
      "Sharp spout for latte art",
      "Cheap upgrade once 12oz feels small",
      "Durable stainless for daily steaming"
    ],
    cons: [
      "Overkill for single flat whites",
      "Spout geometry is personal preference",
      "Hand-wash recommended"
    ],
    whoItsFor: "Milk-drink households and latte art practice that outgrew a 12oz pitcher.",
    specs: [
      {
        label: "Capacity",
        value: "20 oz / ~600 ml"
      },
      {
        label: "Material",
        value: "304 stainless"
      },
      {
        label: "Spout",
        value: "Latte-art style"
      },
      {
        label: "Sizes",
        value: "Often sold in size families"
      },
      {
        label: "Care",
        value: "Hand wash recommended"
      }
    ],
    relatedSlugs: [
      "milk-frothing-pitcher",
      "subminimal-nanofoamer",
      "breville-bambino-plus"
    ],
    imageUrl: "/products/B07FTMLHLS.jpg",
    amazonAsin: "B07FTMLHLS"
  },
  {
    slug: "bodum-barista-frother",
    name: "Bodum Barista Electric Milk Frother",
    brand: "Bodum",
    category: "frothers-accessories",
    tagline: "Push-button hot froth when your steam wand isn’t enough",
    summary: "Bodum’s Barista electric frother heats and textures milk with a handle-friendly pitcher — handy for Dedica owners, Flair setups, or offices without a steam wand. Not a replacement for a strong commercial wand, but a reliable weekday milk path.",
    priceBand: "About $50",
    budget: "budget",
    priceMin: 35,
    priceMax: 70,
    imageGradient: "from-sky-950 via-cyan-900 to-stone-950",
    imageAlt: "Bodum Barista electric milk frother product photo",
    featured: false,
    amazonQuery: "Bodum Barista electric milk frother",
    pros: [
      "One-button hot froth for non-steam setups",
      "Handle makes pouring easier than cup frothers",
      "Affordable vs upgrading the whole machine",
      "Useful office / guest workflow"
    ],
    cons: [
      "Texture won’t match a practiced steam wand",
      "Another appliance to clean and store",
      "Not latte-art precise for everyone"
    ],
    whoItsFor: "Manual machine owners and wand-free kitchens that still want hot milk drinks.",
    specs: [
      {
        label: "Type",
        value: "Electric frother pitcher"
      },
      {
        label: "Heat",
        value: "Heats + froths"
      },
      {
        label: "Use",
        value: "Lattes / cappuccinos"
      },
      {
        label: "Brand",
        value: "Bodum"
      },
      {
        label: "Warranty",
        value: "See listing"
      }
    ],
    relatedSlugs: [
      "subminimal-nanofoamer",
      "flair-neo-flex",
      "delonghi-dedica"
    ],
    imageUrl: "/products/B0C6RGQHLS.jpg",
    amazonAsin: "B0C6RGQHLS"
  },
  {
    slug: "puck-screen-58mm",
    name: "58mm Espresso Puck Screen & Dosing Funnel Set",
    brand: "KNODOS",
    category: "frothers-accessories",
    tagline: "Puck screen + funnel to cut channeling and keep the group cleaner",
    summary: "A 58mm puck screen sits on the puck to diffuse water and reduce channeling; a dosing funnel keeps grounds in the basket while you WDT. One of the highest-ROI accessory bundles once you’re on non-pressurized baskets.",
    priceBand: "About $25",
    budget: "budget",
    priceMin: 15,
    priceMax: 40,
    imageGradient: "from-amber-950 via-stone-800 to-zinc-950",
    imageAlt: "58mm espresso puck screen and dosing funnel set product photo",
    featured: false,
    amazonQuery: "58mm espresso puck screen dosing funnel",
    pros: [
      "Helps even water distribution across the puck",
      "Funnel reduces mess during WDT",
      "Keeps shower screen cleaner longer",
      "Cheap relative to shot consistency gains"
    ],
    cons: [
      "Must match your basket diameter (58 vs 54 mm)",
      "Another piece to rinse every shot",
      "Not a substitute for a good grinder"
    ],
    whoItsFor: "58mm machine owners on non-pressurized baskets chasing cleaner, more even extractions.",
    specs: [
      {
        label: "Size",
        value: "58 mm class"
      },
      {
        label: "Includes",
        value: "Puck screen + funnel (kit)"
      },
      {
        label: "Material",
        value: "Stainless"
      },
      {
        label: "Use",
        value: "Puck prep / group cleanliness"
      },
      {
        label: "Fit",
        value: "Verify 58 mm portafilter"
      }
    ],
    relatedSlugs: [
      "normcore-wdt-tool",
      "gaggia-classic-evo-pro",
      "normcore-v4-tamper"
    ],
    imageUrl: "/products/B0C464Z5HH.jpg",
    amazonAsin: "B0C464Z5HH"
  },
  {
    slug: "tamping-mat",
    name: "Espresso Tamping Mat (Walnut + Silicone)",
    brand: "MUVNA",
    category: "frothers-accessories",
    tagline: "Edge-lip mat that protects counters and squares your tamp",
    summary: "A tamping mat with a raised lip lets you seat the portafilter and tamp without scarring the counter. Small quality-of-life upgrade that makes daily puck prep feel like a station, not a kitchen accident.",
    priceBand: "About $25",
    budget: "budget",
    priceMin: 15,
    priceMax: 40,
    imageGradient: "from-stone-800 via-amber-950 to-neutral-950",
    imageAlt: "Espresso tamping mat product photo",
    featured: false,
    amazonQuery: "espresso tamping mat silicone walnut",
    pros: [
      "Protects counters from tamp scars",
      "Lip holds portafilter steady",
      "Makes the station feel intentional",
      "Easy to wipe clean"
    ],
    cons: [
      "Not required on day one",
      "Size/fit preferences vary",
      "Silicone can stain with coffee oils over time"
    ],
    whoItsFor: "Anyone tamping daily who is tired of protecting the counter with a towel.",
    specs: [
      {
        label: "Type",
        value: "Tamping mat"
      },
      {
        label: "Material",
        value: "Silicone + wood accents"
      },
      {
        label: "Feature",
        value: "Edge lip"
      },
      {
        label: "Use",
        value: "Portafilter tamping"
      },
      {
        label: "Care",
        value: "Wipe clean"
      }
    ],
    relatedSlugs: [
      "normcore-v4-tamper",
      "breville-knock-box-mini",
      "gaggia-classic-pro"
    ],
    imageUrl: "/products/B0D3LPJ8FS.jpg",
    amazonAsin: "B0D3LPJ8FS"
  },
  {
    slug: "maestri-espresso-scale",
    name: "Maestri House Espresso Scale with Timer",
    brand: "Maestri House",
    category: "kettles-scales",
    tagline: "0.1g rechargeable shot scale that fits under a portafilter",
    summary: "A slim 0.1g espresso scale with timer is non-negotiable once you dial ratios. Maestri’s USB-C rechargeable models sit under the cup, auto-time shots, and cost less than café boutique scales — perfect between TIMEMORE Basic and Acaia Pearl.",
    priceBand: "About $40",
    budget: "budget",
    priceMin: 30,
    priceMax: 55,
    imageGradient: "from-neutral-900 via-zinc-800 to-stone-950",
    imageAlt: "Maestri House espresso coffee scale product photo",
    featured: false,
    amazonQuery: "Maestri House espresso scale timer",
    pros: [
      "0.1g resolution for dose and yield",
      "Built-in timer for shot timing",
      "USB-C rechargeable — fewer battery swaps",
      "Slim enough for portafilter workflows"
    ],
    cons: [
      "Not as premium as Acaia for café apps",
      "Auto-off timing can interrupt long pour-overs",
      "Confirm exact model variant on listing"
    ],
    whoItsFor: "Home baristas ready to stop guessing dose and yield without jumping to Acaia pricing.",
    specs: [
      {
        label: "Resolution",
        value: "0.1 g"
      },
      {
        label: "Timer",
        value: "Built-in"
      },
      {
        label: "Power",
        value: "USB-C rechargeable"
      },
      {
        label: "Use",
        value: "Espresso / pour-over"
      },
      {
        label: "Form",
        value: "Slim shot scale"
      }
    ],
    relatedSlugs: [
      "timemore-black-mirror",
      "acaia-pearl",
      "baratza-encore-esp"
    ],
    imageUrl: "/products/B0CQY78HV6.jpg",
    amazonAsin: "B0CQY78HV6"
  },
  {
    slug: "espresso-cleaning-tablets",
    name: "Espresso & Coffee Machine Cleaning Tablets (24 Count)",
    brand: "Generic",
    category: "cleaning-maintenance",
    tagline: "Backflush/cleaning tablets for oils in group heads and brew paths",
    summary: "Multipurpose cleaning tablets for espresso and drip machines — useful for scheduled oil/residue cleaning. For portafilter machines, pair with a proper backflush powder (Cafiza/Puly) and keep a dedicated descaler for minerals; tablets alone are not a full café maintenance kit.",
    priceBand: "About $15",
    budget: "budget",
    priceMin: 10,
    priceMax: 25,
    imageGradient: "from-blue-950 via-sky-900 to-stone-950",
    imageAlt: "Espresso machine cleaning tablets product photo",
    featured: false,
    amazonQuery: "espresso machine cleaning tablets",
    pros: [
      "Removes oils that make shots taste stale",
      "Tablet format is easy to dose",
      "Essential with a blind basket routine",
      "Cheap insurance for daily machines"
    ],
    cons: [
      "Not a descaler — use the right product for scale",
      "Follow rinse instructions carefully",
      "Compatibility varies by machine brand"
    ],
    whoItsFor: "Anyone running a semi-auto regularly who needs an easy detergent cadence alongside Puly powder.",
    specs: [
      {
        label: "Type",
        value: "Cleaning tablets"
      },
      {
        label: "Count",
        value: "~24"
      },
      {
        label: "Use",
        value: "Backflush / brew path"
      },
      {
        label: "Pair with",
        value: "Blind basket"
      },
      {
        label: "Note",
        value: "Not for descaling"
      }
    ],
    relatedSlugs: [
      "puly-caff-plus",
      "blind-basket-58mm",
      "espresso-descaler"
    ],
    imageUrl: "/products/B0C913XXP1.jpg",
    amazonAsin: "B0C913XXP1"
  },
  {
    slug: "espresso-descaler",
    name: "Espresso Machine Descaling Solution",
    brand: "ACTIVE",
    category: "cleaning-maintenance",
    tagline: "Café-standard descaler for boilers, thermoblocks, and kettles",
    summary: "Dezcal is the descaling companion to detergent cleaners — it targets mineral scale that slows heat-up and ruins temperature stability. Use per your machine’s manual (many Breville/Gaggia routines call for a descaler cycle) and rinse thoroughly.",
    priceBand: "About $15",
    budget: "budget",
    priceMin: 10,
    priceMax: 25,
    imageGradient: "from-cyan-950 via-blue-900 to-stone-950",
    imageAlt: "Urnex Dezcal activated descaler product photo",
    featured: false,
    amazonQuery: "espresso machine descaling solution",
    pros: [
      "Targets mineral scale detergent won’t touch",
      "Widely used in café maintenance routines",
      "Helps restore heat-up and temp stability",
      "Works across machines and kettles (follow manuals)"
    ],
    cons: [
      "Must rinse completely — leftover taste is awful",
      "Not a substitute for backflush detergent",
      "Frequency depends on water hardness"
    ],
    whoItsFor: "Anyone on hard water or with a machine that prompts descale cycles.",
    specs: [
      {
        label: "Type",
        value: "Activated descaler"
      },
      {
        label: "Use",
        value: "Boiler / thermoblock / kettle"
      },
      {
        label: "Brand",
        value: "ACTIVE / café-class descaler"
      },
      {
        label: "Pair with",
        value: "Fresh water rinses"
      },
      {
        label: "Note",
        value: "Follow machine manual"
      }
    ],
    relatedSlugs: [
      "espresso-cleaning-tablets",
      "puly-caff-plus",
      "fellow-stagg-ekg"
    ],
    imageUrl: "/products/B0C91BZ7TZ.jpg",
    amazonAsin: "B0C91BZ7TZ"
  },
  {
    slug: "bottomless-portafilter-58mm",
    name: "58mm Bottomless Portafilter Kit",
    brand: "KNODOS",
    category: "frothers-accessories",
    tagline: "Naked portafilter for spotting channeling on 58mm machines",
    summary: "A bottomless (naked) portafilter exposes the basket so you can see channeling, side spray, and extraction symmetry — the fastest visual feedback loop for puck prep. Confirm ear/spout fit for Gaggia, Silvia, and other 58mm groups before buying.",
    priceBand: "About $45",
    budget: "budget",
    priceMin: 30,
    priceMax: 70,
    imageGradient: "from-stone-800 via-neutral-700 to-amber-950",
    imageAlt: "58mm bottomless portafilter kit product photo",
    featured: false,
    amazonQuery: "58mm bottomless portafilter kit",
    pros: [
      "Instant visual feedback on channeling",
      "Encourages better distribution and tamping",
      "Often includes basket / extras in kits",
      "Looks pro on a 58mm station"
    ],
    cons: [
      "Messier if your prep is off — that’s the point",
      "Must match group ears and diameter",
      "Not needed while still on pressurized baskets"
    ],
    whoItsFor: "Gaggia Classic / Silvia owners ready to diagnose extractions visually.",
    specs: [
      {
        label: "Size",
        value: "58 mm"
      },
      {
        label: "Type",
        value: "Bottomless / naked"
      },
      {
        label: "Fit",
        value: "Verify E61 / Classic / Silvia ears"
      },
      {
        label: "Use",
        value: "Extraction diagnosis"
      },
      {
        label: "Kit",
        value: "Often includes basket"
      }
    ],
    relatedSlugs: [
      "gaggia-classic-evo-pro",
      "puck-screen-58mm",
      "normcore-wdt-tool"
    ],
    imageUrl: "/products/B0F4PQ3WZZ.jpg",
    amazonAsin: "B0F4PQ3WZZ"
  },
  {
    slug: "baratza-sette-30",
    name: "Baratza Sette 30 Conical Burr Grinder",
    brand: "Baratza",
    category: "grinders",
    tagline: "Sette-platform speed for espresso-capable grinding without Wi weighing",
    summary: "The Sette 30 brings Baratza’s vertical conical platform and fast, low-retention grinding below the 270/270Wi price. Macro steps cover espresso into medium filter. It’s louder than Encore ESP / Opus and less micro-adjustable than the 270Wi, but it’s a serious jump from blade grinders when you need espresso-capable grounds.",
    priceBand: "About $300",
    budget: "mid",
    priceMin: 270,
    priceMax: 330,
    imageGradient: "from-zinc-800 via-stone-700 to-amber-950",
    imageAlt: "Baratza Sette 30 conical burr grinder product photo",
    featured: false,
    amazonQuery: "Baratza Sette 30 conical burr grinder",
    pros: [
      "Fast grind with low retention",
      "Espresso-capable Sette platform",
      "Repairable Baratza parts ecosystem",
      "Clearer upgrade than toy grinders"
    ],
    cons: [
      "Loud versus quieter flat-burr options",
      "Fewer micro-adjustments than Sette 270Wi",
      "Plastic chassis feels less premium than Eureka"
    ],
    whoItsFor: "Home baristas who want Sette speed for espresso without paying for grind-by-weight yet.",
    specs: [
      {
        label: "Burrs",
        value: "40 mm steel conical"
      },
      {
        label: "Settings",
        value: "30 macro steps"
      },
      {
        label: "Dosing",
        value: "Timed"
      },
      {
        label: "Best for",
        value: "Espresso → medium filter"
      },
      {
        label: "Brand",
        value: "Baratza"
      }
    ],
    relatedSlugs: [
      "baratza-encore-esp",
      "baratza-sette-270wi",
      "breville-bambino"
    ],
    imageUrl: "/products/B075G11F9N.jpg",
    amazonAsin: "B075G11F9N"
  },
  {
    slug: "aeropress-xl",
    name: "AeroPress XL Coffee Maker",
    brand: "AeroPress",
    category: "pour-over",
    tagline: "Double-capacity AeroPress for sharing or bigger mugs",
    summary: "AeroPress XL keeps the fast immersion-and-press workflow with roughly double the brew volume of the Original — better for two cups or a large mug. Same paper-filter clarity; still thrives with a burr grinder and hot kettle.",
    priceBand: "About $80",
    budget: "budget",
    priceMin: 70,
    priceMax: 95,
    imageGradient: "from-sky-900 via-stone-800 to-amber-950",
    imageAlt: "AeroPress XL coffee maker product photo",
    featured: false,
    amazonQuery: "AeroPress XL coffee maker",
    pros: [
      "Larger yield than Original AeroPress",
      "Fast, low-bitterness immersion brew",
      "Travel-friendly workflow",
      "Paper filters keep cups clean"
    ],
    cons: [
      "Larger pack size than Original",
      "Still not true espresso pressure",
      "Filters are consumables"
    ],
    whoItsFor: "AeroPress fans who brew for two or want a bigger single mug without switching to drip.",
    specs: [
      {
        label: "Yield",
        value: "Up to ~20 oz class"
      },
      {
        label: "Method",
        value: "Immersion + press"
      },
      {
        label: "Filters",
        value: "XL paper microfilters"
      },
      {
        label: "Power",
        value: "Manual"
      },
      {
        label: "Best with",
        value: "Burr grinder + kettle"
      }
    ],
    relatedSlugs: [
      "aeropress-original",
      "fellow-stagg-ekg",
      "timemore-chestnut-c3"
    ],
    imageUrl: "/products/B0C6NGDLLP.jpg",
    amazonAsin: "B0C6NGDLLP"
  },
  {
    slug: "hario-switch-02",
    name: "Hario V60 Switch Immersion Dripper 02",
    brand: "Hario",
    category: "pour-over",
    tagline: "Immersion-to-drawdown control for forgiving V60 cups",
    summary: "The Switch adds a valve to the V60: steep like a Clever, then open for a clean drawdown. It uses standard 02 filters and is one of the easiest paths to consistent filter coffee when pour technique is still developing.",
    priceBand: "About $40",
    budget: "budget",
    priceMin: 30,
    priceMax: 55,
    imageGradient: "from-stone-600 via-amber-900 to-orange-950",
    imageAlt: "Hario V60 Switch immersion dripper product photo",
    featured: true,
    amazonQuery: "Hario V60 Switch immersion dripper 02",
    pros: [
      "Immersion body + V60 clarity",
      "Beginner-friendly timing",
      "Uses standard 02 filters",
      "Great brew-ratio teaching tool"
    ],
    cons: [
      "Less classic V60 pour practice",
      "Glass needs careful handling",
      "Not a plastic travel-first design"
    ],
    whoItsFor: "Pour-over beginners and busy mornings that want Clever-like ease with V60 filters.",
    specs: [
      {
        label: "Size",
        value: "02 / ~200 ml class"
      },
      {
        label: "Material",
        value: "Heatproof glass + valve"
      },
      {
        label: "Filters",
        value: "Hario 02"
      },
      {
        label: "Style",
        value: "Immersion → drawdown"
      },
      {
        label: "Made",
        value: "Japan"
      }
    ],
    relatedSlugs: [
      "hario-v60-02",
      "clever-dripper",
      "fellow-stagg-ekg"
    ],
    imageUrl: "/products/B07NS2SV3W.jpg",
    amazonAsin: "B07NS2SV3W"
  },
  {
    slug: "hario-switch-02-set",
    name: "Hario V60 Switch 02 Dripper & Server Set",
    brand: "Hario",
    category: "pour-over",
    tagline: "Switch dripper bundled with server for a complete station",
    summary: "Same Switch immersion-to-drawdown dripper, bundled with a glass server and filters — ideal when building a pour-over station from scratch. Buy the dripper alone if you already own a 02-sized server.",
    priceBand: "About $55",
    budget: "budget",
    priceMin: 45,
    priceMax: 70,
    imageGradient: "from-stone-700 via-amber-800 to-orange-950",
    imageAlt: "Hario V60 Switch dripper and server set product photo",
    featured: false,
    amazonQuery: "Hario V60 Switch immersion dripper server set 02",
    pros: [
      "Complete dripper + server bundle",
      "Includes starter filters",
      "Same forgiving Switch workflow",
      "Gift-friendly packaging"
    ],
    cons: [
      "Redundant if you own a server",
      "Glass set needs careful packing",
      "Slightly pricier than dripper-only"
    ],
    whoItsFor: "New pour-over setups that need dripper and server together.",
    specs: [
      {
        label: "Includes",
        value: "Switch 02 + server + filters"
      },
      {
        label: "Server",
        value: "~300 ml class"
      },
      {
        label: "Style",
        value: "Immersion → drawdown"
      },
      {
        label: "Filters",
        value: "V60-02"
      },
      {
        label: "Made",
        value: "Japan"
      }
    ],
    relatedSlugs: [
      "hario-switch-02",
      "timemore-black-mirror",
      "fellow-stagg-ekg"
    ],
    imageUrl: "/products/B07NRXYXTZ.jpg",
    amazonAsin: "B07NRXYXTZ"
  },
  {
    slug: "moccamaster-kbgv-select",
    name: "Technivorm Moccamaster KBGV Select",
    brand: "Technivorm",
    category: "pour-over",
    tagline: "SCA-certified batch drip when automatic filter coffee must taste right",
    summary: "The KBGV Select is the classic copper-boiler batch brewer with half/full carafe select and SCA certification for brew temperature and time. Choose it when espresso isn’t the only ritual — automatic drip that actually tastes like coffee. Pair with a brew grinder for best results.",
    priceBand: "About $350",
    budget: "mid",
    priceMin: 300,
    priceMax: 400,
    imageGradient: "from-neutral-900 via-stone-800 to-orange-950",
    imageAlt: "Technivorm Moccamaster KBGV Select drip coffee maker product photo",
    featured: true,
    amazonQuery: "Technivorm Moccamaster KBGV Select matte black",
    pros: [
      "SCA-certified brew temperature/time",
      "Half/full select for smaller batches",
      "Handmade Dutch build reputation",
      "Excellent everyday filter coffee"
    ],
    cons: [
      "Larger footprint than a pour-over cone",
      "Plastic brew basket aesthetics",
      "Still needs a decent brew grinder"
    ],
    whoItsFor: "Households that want automatic drip quality without abandoning specialty standards.",
    specs: [
      {
        label: "Capacity",
        value: "10-cup / ~40 oz"
      },
      {
        label: "Certification",
        value: "SCA / ECBC"
      },
      {
        label: "Brew time",
        value: "~4–6 minutes"
      },
      {
        label: "Carafe",
        value: "Glass"
      },
      {
        label: "Origin",
        value: "Netherlands"
      }
    ],
    relatedSlugs: [
      "chemex-classic-6-cup",
      "fellow-ode-gen-2",
      "fellow-stagg-ekg"
    ],
    imageUrl: "/products/B093DXS54M.jpg",
    amazonAsin: "B093DXS54M"
  },
  {
    slug: "urnex-cafiza",
    name: "Urnex Cafiza Espresso Machine Cleaning Powder",
    brand: "Urnex",
    category: "cleaning-maintenance",
    tagline: "Café-standard backflush detergent for portafilter machines",
    summary: "Cafiza is the industry-standard espresso cleaner for backflushing and soaking portafilters — better matched to real espresso maintenance than multipurpose kitchen tablets. Use with a blind basket on machines that support backflush; rinse thoroughly. Keep descaler as a separate mineral-removal step.",
    priceBand: "About $20",
    budget: "budget",
    priceMin: 15,
    priceMax: 30,
    imageGradient: "from-red-900 via-stone-800 to-zinc-950",
    imageAlt: "Urnex Cafiza espresso machine cleaning powder product photo",
    featured: false,
    amazonQuery: "Urnex Cafiza espresso machine cleaning powder 566g",
    pros: [
      "Café-standard backflush chemistry",
      "Large 566g tub lasts months",
      "Works with blind-basket routines",
      "Trusted across prosumer machines"
    ],
    cons: [
      "Not a descaler — minerals need a separate product",
      "Powder handling requires care",
      "Overuse without rinsing tastes harsh"
    ],
    whoItsFor: "Anyone with a backflushable espresso machine who wants proper group-head hygiene.",
    specs: [
      {
        label: "Type",
        value: "Backflush detergent"
      },
      {
        label: "Size",
        value: "566 g"
      },
      {
        label: "Use with",
        value: "Blind basket"
      },
      {
        label: "Brand",
        value: "Urnex"
      },
      {
        label: "Not for",
        value: "Descaling alone"
      }
    ],
    relatedSlugs: [
      "blind-basket-58mm",
      "puly-caff-plus",
      "espresso-descaler"
    ],
    imageUrl: "/products/B001418KNS.jpg",
    amazonAsin: "B001418KNS"
  },
  {
    slug: "timemore-grinder-brush",
    name: "TIMEMORE Coffee Grinder Cleaning Brush",
    brand: "TIMEMORE",
    category: "cleaning-maintenance",
    tagline: "Simple nylon brush for burrs, baskets, and counters",
    summary: "A dedicated grinder/brew brush beats wiping oily fines with a sponge. Use it on burr throats (power off), baskets, and dosing funnels between sessions. Small hygiene habit that keeps flavors cleaner than waiting for a deep clean every month.",
    priceBand: "About $10",
    budget: "budget",
    priceMin: 8,
    priceMax: 15,
    imageGradient: "from-neutral-800 via-stone-700 to-zinc-950",
    imageAlt: "TIMEMORE coffee grinder cleaning brush product photo",
    featured: false,
    amazonQuery: "TIMEMORE coffee grinder cleaning brush",
    pros: [
      "Cheap daily cleaning habit",
      "Reaches burr throats and baskets",
      "Better than paper towels alone",
      "Pairs with deeper detergent cleans"
    ],
    cons: [
      "Not a substitute for backflush detergent",
      "Bristles wear over time",
      "Easy to lose in a drawer"
    ],
    whoItsFor: "Anyone grinding daily who wants a dedicated brush in the brew kit.",
    specs: [
      {
        label: "Type",
        value: "Nylon cleaning brush"
      },
      {
        label: "Brand",
        value: "TIMEMORE"
      },
      {
        label: "Use",
        value: "Grinders / baskets"
      },
      {
        label: "Power",
        value: "None"
      },
      {
        label: "Pair with",
        value: "Cafiza / Puly"
      }
    ],
    relatedSlugs: [
      "urnex-cafiza",
      "baratza-encore-esp",
      "blind-basket-58mm"
    ],
    imageUrl: "/products/timemore-grinder-brush.jpg"
  },
  {
    slug: "bodum-bistro-frother",
    name: "Bodum Bistro Electric Milk Frother",
    brand: "Bodum",
    category: "frothers-accessories",
    tagline: "Hot and cold froth in a compact nonstick pitcher",
    summary: "The Bistro is Bodum’s compact electric frother for hot or cold foam and heated milk — a wand-free path to cappuccino texture when you own a Dedica, Flair, or travel maker without strong steam. Automatic temperature control and boil-dry protection keep weekday milk drinks simple; it’s not latte-art microfoam from a commercial wand.",
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
      "Compact footprint"
    ],
    cons: [
      "Not commercial-wand microfoam",
      "Nonstick needs gentle cleaning",
      "Capacity limited vs large pitchers"
    ],
    whoItsFor: "Manual espresso and travel-kit owners who want milk drinks without a strong steam wand.",
    specs: [
      {
        label: "Capacity",
        value: "~13.5 oz / 400 ml class"
      },
      {
        label: "Modes",
        value: "Hot froth / cold froth / heat"
      },
      {
        label: "Vessel",
        value: "Nonstick stainless"
      },
      {
        label: "Brand",
        value: "Bodum"
      },
      {
        label: "Best with",
        value: "Dedica / Flair / Nano"
      }
    ],
    relatedSlugs: [
      "delonghi-dedica",
      "subminimal-nanofoamer",
      "milk-frothing-pitcher"
    ]
  },
  {
    slug: "hoomil-12oz-pitcher",
    name: "HOOMIL 12oz Stainless Milk Frothing Pitcher",
    brand: "HOOMIL",
    category: "frothers-accessories",
    tagline: "Budget 12oz pitcher with spout markings for practice drinks",
    summary: "A inexpensive 12oz stainless pitcher with interior volume marks — useful as a second pitcher for single cappuccinos or for practicing latte art without babying a Rattleware. Spout quality varies by batch; treat it as a starter or spare, not a lifelong heirloom.",
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
      "Dishwasher-safe stainless"
    ],
    cons: [
      "Spout less precise than Rattleware",
      "Build is entry-level",
      "Not a flex for latte-art competition"
    ],
    whoItsFor: "Beginners practicing milk drinks who want a cheap 12oz pitcher or a spare.",
    specs: [
      {
        label: "Size",
        value: "12 oz / ~350 ml"
      },
      {
        label: "Material",
        value: "304 stainless"
      },
      {
        label: "Marks",
        value: "Interior volume lines"
      },
      {
        label: "Brand",
        value: "HOOMIL"
      },
      {
        label: "Use",
        value: "Steaming / practice"
      }
    ],
    relatedSlugs: [
      "milk-frothing-pitcher",
      "milk-pitcher-20oz",
      "subminimal-nanofoamer"
    ]
  },
  {
    slug: "silicone-tamping-mat",
    name: "Silicone Espresso Tamping Mat",
    brand: "Ezebesta",
    category: "frothers-accessories",
    tagline: "Flat non-slip silicone pad to protect counters while tamping",
    summary: "A simple food-grade silicone tamping mat protects counters and keeps the portafilter from skating while you tamp. Choose this if you want a flat, washable pad; choose a walnut+silicone corner mat if you want a station that also corrals accessories.",
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
      "Cheap station upgrade"
    ],
    cons: [
      "No accessory “corner” like wood mats",
      "Can stain from coffee oils",
      "Generic branding"
    ],
    whoItsFor: "Anyone tamping on stone or wood counters who wants basic surface protection.",
    specs: [
      {
        label: "Material",
        value: "Food-grade silicone"
      },
      {
        label: "Shape",
        value: "Flat pad (~8×8 in class)"
      },
      {
        label: "Use",
        value: "Tamping / drip catch"
      },
      {
        label: "Care",
        value: "Hand wash / dishwasher"
      },
      {
        label: "Brand",
        value: "Ezebesta"
      }
    ],
    relatedSlugs: [
      "tamping-mat",
      "normcore-v4-tamper",
      "breville-bambino"
    ]
  },
  {
    slug: "maestri-s1-mini-scale",
    name: "Maestri House S1 Mini Espresso Scale",
    brand: "Maestri House",
    category: "kettles-scales",
    tagline: "Compact 0.1g USB-C shot scale for tight drip trays",
    summary: "The S1 Mini is a slim rechargeable espresso scale with 0.1g resolution and timer modes — built for portafilter dosing and shot yield on crowded drip trays. Choose it when you want something smaller/cheaper than Acaia; keep expectations realistic on long-term durability versus café scales.",
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
      "Strong value vs Acaia"
    ],
    cons: [
      "Build not café-indestructible",
      "Auto-off quirks on some units",
      "Not flow-rate graphing"
    ],
    whoItsFor: "Home baristas dialing dose and yield who want a compact scale under $30.",
    specs: [
      {
        label: "Resolution",
        value: "0.1 g"
      },
      {
        label: "Capacity",
        value: "2 kg class"
      },
      {
        label: "Power",
        value: "USB-C rechargeable"
      },
      {
        label: "Modes",
        value: "Espresso / pour-over timers"
      },
      {
        label: "Brand",
        value: "Maestri House"
      }
    ],
    relatedSlugs: [
      "maestri-espresso-scale",
      "timemore-black-mirror",
      "acaia-pearl"
    ]
  }

  {
    slug: "fellow-atmos-canister",
    name: "Fellow Atmos vacuum canister",
    brand: "Fellow",
    category: "coffee-storage",
    tagline: "Vacuum canister for a week of beans",
    summary: "A canister that pulls air out so an opened bag does not sit in the cabinet. It does not replace buying smaller bags.",
    priceBand: "About $40",
    budget: "mid",
    priceMin: 30,
    priceMax: 50,
    imageGradient: "from-stone-700 via-amber-900 to-stone-900",
    imageAlt: "Fellow Atmos coffee canister",
    featured: false,
    amazonQuery: "Fellow Atmos vacuum coffee canister",
    pros: ["Vacuum pump in the lid", "Clear fill line", "Fits a typical 12 oz bag"],
    cons: ["Glass can break", "Not a substitute for fresh beans", "Lid seal needs to be clean"],
    whoItsFor: "People who buy beans faster than they finish them.",
    specs: [{ label: "Job", value: "Bean storage" }],
    relatedSlugs: [],
  },

];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter((p) => p.category === category);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured);
}

export function getRelatedProducts(product: Product): Product[] {
  return product.relatedSlugs
    .map((slug) => getProduct(slug))
    .filter((p): p is Product => Boolean(p));
}
