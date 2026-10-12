import type { Product } from "./types";

export const products: Product[] = [
  {
    slug: "breville-bambino",
    name: "Breville Bambino Espresso Machine",
    brand: "Breville",
    category: "espresso-machines",
    tagline: "Fast heat-up beginner espresso without a huge footprint",
    summary: "The Bambino is Breville’s compact entry machine: ThermoJet heat-up in seconds, a 54mm portafilter, and enough steam for everyday milk drinks. A strong starter when you want café-style espresso at home without a steep learning curve or a prosumer setup.",
    tier: "$",
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
    tier: "$$",
    imageGradient: "from-stone-800 via-amber-900 to-orange-950",
    imageAlt: "Breville Bambino Plus espresso machine product photo",
    featured: true,
    amazonQuery: "Breville Bambino Plus espresso machine",
    pros: [
      "Auto milk frothing speeds up weekday drinks",
      "Same fast heat-up as the Bambino",
      "A natural step up for households that drink mostly milk drinks",
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
    tier: "$$",
    imageGradient: "from-zinc-800 via-stone-700 to-amber-950",
    imageAlt: "Gaggia Classic Pro espresso machine product photo",
    featured: true,
    amazonQuery: "Gaggia Classic Pro espresso machine",
    pros: [
      "58mm commercial-style portafilter ecosystem",
      "Solid build and long community support",
      "A well-known platform for learning manual espresso",
      "Mod-friendly for enthusiasts over time"
    ],
    cons: [
      "Steeper learning curve than Breville Bambino",
      "Steam performance is OK, not dual-boiler class",
      "Some plastic trim on an otherwise metal machine"
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
    tier: "$",
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
      "Thermoblock heating can be less temperature-stable than a boiler",
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
    tier: "$$$",
    imageGradient: "from-amber-800 via-yellow-900 to-stone-950",
    imageAlt: "Breville Barista Express espresso machine product photo",
    featured: true,
    amazonQuery: "Breville Barista Express BES870XL",
    pros: [
      "Built-in grinder saves counter space and setup complexity",
      "Familiar Breville workflow with dose trimming tools",
      "Strong all-in-one value vs buying machine + grinder separately",
      "One appliance covers grinding, brewing, and steaming"
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
    tier: "$$$",
    imageGradient: "from-zinc-900 via-stone-800 to-neutral-950",
    imageAlt: "Rancilio Silvia espresso machine product photo",
    featured: true,
    amazonQuery: "Rancilio Silvia espresso machine",
    pros: [
      "Commercial DNA and strong steam performance",
      "Durable platform with huge enthusiast community",
      "Pairs well with a quality espresso grinder",
      "Brass boiler and commercial-style parts, a step beyond entry thermoblocks"
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
    slug: "flair-classic",
    name: "Flair Classic Manual Espresso Maker",
    brand: "Flair",
    category: "travel-espresso",
    tagline: "Updated classic lever kit with pressure gauge and dual portafilters",
    summary: "The Flair Classic is the brand’s iconic home lever espresso maker — all manual, pressure-gauge capable, and built for café-style shots when paired with a proper grinder. A favorite for enthusiasts who enjoy the ritual and want maximum control without a boiler.",
    tier: "$$$",
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
    tier: "$",
    imageGradient: "from-slate-800 via-cyan-900 to-stone-950",
    imageAlt: "Wacaco Nanopresso portable espresso maker product photo",
    featured: true,
    amazonQuery: "Wacaco Nanopresso portable espresso",
    pros: [
      "Truly portable and battery-free",
      "Up to about 18 bar claimed pressure in a small body",
      "Packs easily for camping and hotel stays",
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
    summary: "The Encore ESP adds finer grind steps for espresso on Baratza’s legendary Encore platform. It’s the upgrade that most beginner machines need: consistent burrs, repairable design, and a clear path from drip to espresso without jumping straight to a high-end grinder.",
    tier: "$$",
    imageGradient: "from-emerald-900 via-teal-800 to-stone-950",
    imageAlt: "Baratza Encore ESP burr grinder product photo",
    featured: true,
    amazonQuery: "Baratza Encore ESP grinder",
    pros: [
      "Espresso-capable steps on a proven Encore body",
      "Baratza repairability and parts support",
      "Costs far less than premium espresso grinders",
      "Works for drip and espresso in one unit"
    ],
    cons: [
      "Not as quiet or refined as high-end grinders",
      "Single-dosing workflow needs a few habits",
      "Stepped adjustments — less micro-fine than stepless"
    ],
    whoItsFor: "Anyone buying a Bambino/Gaggia/Dedica who wants the single biggest shot-quality upgrade for the money.",
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
    tier: "$$",
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
      "Stepped adjustment may be too coarse to fine-tune some espresso",
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
    slug: "eureka-mignon-specialita",
    name: "Eureka Mignon Specialita Espresso Grinder",
    brand: "Eureka",
    category: "grinders",
    tagline: "Quiet stepless 55mm espresso grinder with touchscreen dosing",
    summary: "The Mignon Specialita is a compact premium espresso grinder: sound-insulated body, stepless 55mm flat burrs, and touchscreen timed dosing. A favorite step-up when you’ve outgrown entry stepped grinders and want café-adjacent control at home.",
    tier: "$$$",
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
      "Stepless dial takes more fiddling when switching between brew methods"
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
    tier: "$$",
    imageGradient: "from-stone-900 via-orange-950 to-amber-950",
    imageAlt: "Fellow Ode Gen 2 brew grinder product photo",
    featured: false,
    amazonQuery: "Fellow Ode Gen 2 brew grinder",
    pros: [
      "Built around single-dose grinding for filter coffee",
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
    tier: "$",
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
      "Mostly plastic build",
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
    slug: "chemex-classic-6-cup",
    name: "Chemex Classic 6-Cup Pour-Over",
    brand: "Chemex",
    category: "pour-over",
    tagline: "Iconic glass pour-over carafe for clean, bright filter coffee",
    summary: "The Chemex Classic 6-Cup is the iconic hourglass pour-over: bonded filters, borosilicate glass, and a clean cup that shines with light-to-medium roasts. Pair with a gooseneck kettle and a brew grinder for weekend filter sessions alongside espresso.",
    tier: "$$",
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
    tier: "$",
    imageGradient: "from-stone-800 via-neutral-700 to-orange-950",
    imageAlt: "Hario V60 ceramic dripper size 02 product photo",
    featured: false,
    amazonQuery: "Hario V60 ceramic dripper 02 white",
    pros: [
      "Huge recipe ecosystem and competitions history",
      "Lots of control over single-cup brewing",
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
    tier: "$$",
    imageGradient: "from-sky-950 via-cyan-900 to-stone-950",
    imageAlt: "Subminimal NanoFoamer milk frother product photo",
    featured: true,
    amazonQuery: "Subminimal NanoFoamer Lithium",
    pros: [
      "Microfoam without relying on a weak steam wand",
      "Useful for practicing latte art",
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
    tier: "$$",
    imageGradient: "from-red-950 via-rose-900 to-stone-950",
    imageAlt: "AeroPress coffee maker product photo",
    featured: false,
    amazonQuery: "AeroPress coffee maker original",
    pros: [
      "Fast, clean, forgiving brew method",
      "Ultra portable for travel and office",
      "Cheap entry into better-than-drip coffee",
      "Works well with any decent burr grinder"
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
    tier: "$$",
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
      "Spring-loaded design sets tamp pressure for you, if you prefer to control it yourself"
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
    tier: "$$",
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
      "Spout shape suits some pouring styles better than others",
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
    tier: "$$",
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
      "Fixed needle thickness can't be swapped"
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
    name: "58mm Blind Basket Backflush Insert (3-way solenoid machines only)",
    brand: "Espresso Supply",
    category: "cleaning-maintenance",
    tagline: "Niche tool: backflush insert for 58mm machines with a 3-way solenoid valve",
    summary: "A niche pick: a blind (backflush) basket only works on machines with a 3-way solenoid valve and a 58mm portafilter, such as the Gaggia Classic Pro and Rancilio Silvia. It does not suit the Bambino, Dedica or most Breville machines. If your machine qualifies, pair it with a backflush detergent like Cafiza.",
    tier: "$$",
    imageGradient: "from-zinc-800 via-stone-700 to-neutral-950",
    imageAlt: "58mm stainless blind basket backflush insert product photo",
    featured: false,
    amazonQuery: "58mm blind basket backflush insert",
    pros: [
      "Lets 3-way solenoid machines backflush with detergent",
      "Cheap insurance for group head longevity",
      "Fits standard 58mm portafilters",
      "Pairs with espresso machine detergent"
    ],
    cons: [
      "Wrong size won’t seal — measure your portafilter",
      "Useless on machines without a 3-way solenoid (Bambino, Dedica, most Breville)",
      "Easy to misplace — store with cleaning kit"
    ],
    whoItsFor: "Owners of 58mm machines with a 3-way solenoid valve, such as the Gaggia Classic Pro or Rancilio Silvia.",
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
        value: "Backflush detergent"
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
    tier: "$$",
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
    tier: "$$",
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
      "Rubber base and bar need regular cleaning"
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
    tier: "$$$",
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
    tier: "$$$",
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
    tier: "$$$",
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
      "Several model generations are sold, so check which one you're buying"
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
    summary: "The Classic Evo Pro is the modern Gaggia Classic: commercial-style 58mm portafilter, ~9-bar brew path, and a commercial steam wand — with boiler updates aimed at scale resistance. It replaces older Classic Pro listings as the default “learn real espresso” machine when you bring a proper grinder.",
    tier: "$$",
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
    tier: "$$$",
    imageGradient: "from-emerald-900 via-teal-800 to-stone-950",
    imageAlt: "Baratza Sette 270Wi coffee grinder product photo",
    featured: true,
    amazonQuery: "Baratza Sette 270Wi grinder",
    pros: [
      "Grind-by-weight removes timed-dose guesswork",
      "Straight-through design cuts retention vs chute grinders",
      "Fast espresso workflow once it's dialed in",
      "Baratza parts and repair support"
    ],
    cons: [
      "Not designed as a low-noise grinder",
      "Premium vs Encore ESP / Opus",
      "Plastic body, unlike the metal Eureka"
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
    tier: "$$",
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
      "timemore-chestnut-c2s"
    ],
    imageUrl: "/products/B07JQ4P976.jpg",
    amazonAsin: "B07JQ4P976"
  },
  {
    slug: "timemore-chestnut-c2s",
    name: "TIMEMORE Chestnut C2S Hand Grinder",
    brand: "TIMEMORE",
    category: "grinders",
    tagline: "All-metal hand grinder for pour-over, AeroPress and travel",
    summary: "The Chestnut C2S is TIMEMORE’s metal-body hand grinder with stainless steel conical burrs, a double-bearing shaft and about 36 adjustment steps. It holds about 25 g of beans, which suits one or two cups of pour-over, AeroPress or French press. Espresso-fine adjustment is limited compared with grinders built for espresso.",
    tier: "$",
    imageGradient: "from-neutral-800 via-zinc-700 to-stone-950",
    imageAlt: "TIMEMORE Chestnut C2S hand grinder product photo",
    featured: false,
    amazonQuery: "TIMEMORE Chestnut C2S hand grinder",
    pros: [
      "Strong value vs premium hand grinders",
      "Full-metal body with a double-bearing shaft",
      "Light enough for travel and camping kits",
      "About 36 steps from fine to coarse"
    ],
    cons: [
      "Not Comandante-level refinement",
      "Capacity is single-cup oriented",
      "Step size is coarse for dialing espresso"
    ],
    whoItsFor: "Travelers and budget-minded brewers who want a real burr hand grinder without Comandante pricing.",
    specs: [
      {
        label: "Burrs",
        value: "Stainless steel conical"
      },
      {
        label: "Adjustment",
        value: "About 36 steps"
      },
      {
        label: "Capacity",
        value: "About 25 g"
      },
      {
        label: "Body",
        value: "Aluminum alloy"
      },
      {
        label: "Best for",
        value: "Travel / AeroPress / pour-over"
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
    tier: "$",
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
      "Plastic grounds jar"
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
      "timemore-chestnut-c2s",
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
    tier: "$$",
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
    tier: "$",
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
    tier: "$",
    imageGradient: "from-stone-800 via-neutral-700 to-orange-950",
    imageAlt: "Kalita Wave 155 dripper product photo",
    featured: false,
    amazonQuery: "Kalita Wave 155 stainless dripper",
    pros: [
      "Flat bottom reduces channeling vs steep cones",
      "Stainless travels better than ceramic",
      "Wave filters guide even flow",
      "Sized for one or two cups"
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
    tier: "$$",
    imageGradient: "from-slate-800 via-cyan-900 to-stone-950",
    imageAlt: "Wacaco Picopresso portable espresso maker product photo",
    featured: true,
    amazonQuery: "Wacaco Picopresso portable espresso",
    pros: [
      "Naked basket feedback helps dial extractions",
      "Serious pressure for a hand-powered travel tool",
      "No batteries or plugs required",
      "Rewards careful puck prep, even when traveling"
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
      "timemore-chestnut-c2s"
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
    tier: "$$",
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
      "Check which baskets and accessories come in the box"
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
    tier: "$$$",
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
      "Heating water drains the battery faster",
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
    tier: "$$",
    imageGradient: "from-zinc-700 via-stone-600 to-neutral-900",
    imageAlt: "20oz stainless milk frothing pitcher product photo",
    featured: false,
    amazonQuery: "20oz stainless milk frothing pitcher",
    pros: [
      "More volume for two drinks or practice pours",
      "Sharp spout for latte art",
      "Low-cost step up from a 12 oz pitcher",
      "Durable stainless for daily steaming"
    ],
    cons: [
      "Overkill for single flat whites",
      "Spout shape suits some pouring styles better than others",
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
    summary: "Bodum’s Barista electric frother is our Premium frother pick: unlike the NanoFoamer, it heats and textures milk in one step with a handle-friendly pitcher — handy for Dedica owners, Flair setups, or offices without a steam wand. Not a replacement for a strong commercial wand, but a reliable weekday milk path.",
    tier: "$$",
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
    tier: "$$",
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
    tier: "$$",
    imageGradient: "from-stone-800 via-amber-950 to-neutral-950",
    imageAlt: "Espresso tamping mat product photo",
    featured: false,
    amazonQuery: "espresso tamping mat silicone walnut",
    pros: [
      "Protects counters from tamp scars",
      "Lip holds portafilter steady",
      "Gives the espresso station a dedicated tamping spot",
      "Easy to wipe clean"
    ],
    cons: [
      "Not required on day one",
      "Check the mat size against your counter space",
      "Silicone surface needs regular wiping to keep coffee oils off"
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
    tier: "$$",
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
      "Several Maestri models are sold, so check which one you're buying"
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
    tier: "$$",
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
      "Check that your machine's maker allows this type of tablet"
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
    tier: "$$",
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
      "Needs thorough rinsing so no taste is left behind",
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
    tier: "$$",
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
    tier: "$$",
    imageGradient: "from-zinc-800 via-stone-700 to-amber-950",
    imageAlt: "Baratza Sette 30 conical burr grinder product photo",
    featured: false,
    amazonQuery: "Baratza Sette 30 conical burr grinder",
    pros: [
      "Fast grind with low retention",
      "Espresso-capable Sette platform",
      "Repairable Baratza parts ecosystem",
      "A real step up from blade grinders"
    ],
    cons: [
      "Loud versus quieter flat-burr options",
      "Fewer micro-adjustments than Sette 270Wi",
      "Plastic chassis, unlike the metal Eureka"
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
    tier: "$$",
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
      "timemore-chestnut-c2s"
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
    tier: "$$",
    imageGradient: "from-stone-600 via-amber-900 to-orange-950",
    imageAlt: "Hario V60 Switch immersion dripper product photo",
    featured: true,
    amazonQuery: "Hario V60 Switch immersion dripper 02",
    pros: [
      "Immersion body + V60 clarity",
      "Beginner-friendly timing",
      "Uses standard 02 filters",
      "Helps beginners learn brew ratios"
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
    tier: "$$",
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
    tier: "$$$",
    imageGradient: "from-neutral-900 via-stone-800 to-orange-950",
    imageAlt: "Technivorm Moccamaster KBGV Select drip coffee maker product photo",
    featured: true,
    amazonQuery: "Technivorm Moccamaster KBGV Select matte black",
    pros: [
      "SCA-certified brew temperature/time",
      "Half/full select for smaller batches",
      "Handmade Dutch build reputation",
      "Built for everyday batch filter coffee"
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
    summary: "Cafiza is our Best Overall pick for cleaning: the café-standard espresso detergent that works across machine types. Use it to soak portafilters, baskets and steam parts on any machine, or to backflush with a blind basket if your machine has a 3-way solenoid. The 566 g tub covers months of home cleaning. It is not a descaler, so keep a separate product for mineral scale.",
    tier: "$$",
    imageGradient: "from-red-900 via-stone-800 to-zinc-950",
    imageAlt: "Urnex Cafiza espresso machine cleaning powder product photo",
    featured: false,
    amazonQuery: "Urnex Cafiza espresso machine cleaning powder 566g",
    pros: [
      "Café-standard backflush chemistry",
      "Large 566g tub lasts months",
      "Soaks baskets and parts on any espresso machine",
      "Trusted across prosumer machines"
    ],
    cons: [
      "Not a descaler — minerals need a separate product",
      "Powder handling requires care",
      "Overuse without rinsing tastes harsh"
    ],
    whoItsFor: "Any espresso machine owner who wants one detergent for soaking parts, plus backflushing where the machine supports it.",
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
    slug: "bodum-bistro-frother",
    name: "Bodum Bistro Electric Milk Frother",
    brand: "Bodum",
    category: "frothers-accessories",
    tagline: "Hot and cold froth in a compact nonstick pitcher",
    summary: "The Bistro is Bodum’s compact electric frother for hot or cold foam and heated milk — a wand-free path to cappuccino texture when you own a Dedica, Flair, or travel maker without strong steam. Automatic temperature control and boil-dry protection keep weekday milk drinks simple; it’s not latte-art microfoam from a commercial wand.",
    tier: "$$",
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
    tier: "$",
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
      "Not built for competition-level latte art"
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
    tier: "$",
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
      "Needs regular wiping to keep coffee oils off",
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
    tier: "$$",
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
      "Auto-off may cut in during long brews",
      "Not flow-rate graphing"
    ],
    whoItsFor: "Home baristas dialing dose and yield who want a compact, inexpensive scale.",
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
  },
  {
    slug: "timemore-basic-2-coffee-scale",
    name: "TIMEMORE Basic 2.0 Coffee Scale with Timer and Flow Rate",
    brand: "TIMEMORE",
    category: "kettles-scales",
    tagline: "0.1 g coffee scale with a built-in timer and pour flow-rate readout",
    summary: "The TIMEMORE Basic 2.0 is our Premium scale pick. It reads in 0.1 g steps up to 2 kg, runs a timer automatically, and shows water flow rate while you pour, which helps keep pour-over pours steady. A built-in rechargeable battery and a sealed charging port suit a wet coffee bar. Pick it over the Best Overall Maestri if you brew pour-over as often as espresso and want flow-rate feedback.",
    tier: "$$$",
    imageGradient: "from-neutral-900 via-zinc-800 to-stone-950",
    imageAlt: "TIMEMORE Basic 2.0 coffee scale in black",
    featured: false,
    pros: ["Shows pour flow rate as well as weight and time", "0.1 g resolution up to 2 kg", "Rechargeable battery with a sealed charging port", "Low, compact body fits under most drippers"],
    cons: ["Minimum starting weight is 0.5 g", "Auto-shutoff after about 3 minutes idle can interrupt slow brews"],
    whoItsFor: "Home brewers who make pour-over and espresso and want a timer and flow-rate readout in one scale.",
    specs: [{ label: "Capacity", value: "2 kg" }, { label: "Resolution", value: "0.1 g" }, { label: "Battery", value: "Built-in rechargeable" }, { label: "Extras", value: "Auto timer, flow rate" }],
    relatedSlugs: ["maestri-espresso-scale", "maestri-s1-mini-scale", "hario-v60-02"],
    amazonAsin: "B0CMZJP9V8",
    amazonQuery: "TIMEMORE Basic 2.0 coffee scale",
  },
  {
    slug: "fellow-atmos",
    name: "Fellow Atmos Vacuum Coffee Canister 0.4L",
    brand: "Fellow",
    category: "coffee-canisters",
    tagline: "Twist-to-vacuum canister sized for one small bag of beans",
    summary: "The Fellow Atmos is our Best Overall pick for coffee canisters and storage. Twisting the lid pumps air out of the canister after each scoop, and the lid's indicator shows when the seal is holding. This 0.4 L size holds about 6 oz of whole beans, so it suits people who buy small bags and want them to stay fresher for the second week.",
    tier: "$$",
    imageGradient: "from-stone-200 to-amber-100",
    imageAlt: "Fellow Atmos 0.4L vacuum coffee canister in white",
    featured: false,
    pros: ["Twist lid removes air after every opening", "Lid indicator shows when the vacuum is holding", "Compact 0.4 L size fits a small bag of whole beans", "Simple design that's easy to wipe clean"],
    cons: ["0.4 L holds about 6 oz, too small for a 12 oz bag", "Twisting the lid adds a step every time you open it"],
    whoItsFor: "People who buy small bags of beans and brew them over two weeks or more.",
    specs: [{ label: "Capacity", value: "0.4 L (about 6 oz beans)" }, { label: "Seal", value: "Twist-to-vacuum lid" }],
    relatedSlugs: ["planetary-design-airscape-stainless-steel-coffee", "simple-modern-delta-coffee-canister-airtight", "coffee-gator-coffee-canister"],
    amazonAsin: "B07PWY7R6S",
    imageUrl: "/products/B07PWY7R6S.jpg",
    amazonQuery: "Fellow Atmos vacuum coffee canister 0.4L",
  },
  {
    slug: "bodum-34oz-pour-over-coffee-maker",
    name: "Bodum 34oz Pour Over Coffee Maker",
    brand: "Bodum",
    category: "pour-over",
    tagline: "Glass pour-over carafe with a reusable stainless mesh filter",
    summary: "The Bodum 34 oz pour-over pairs a borosilicate glass carafe with a permanent stainless steel mesh filter, so there are no paper filters to buy. The mesh lets more coffee oils through than paper, for a fuller-bodied cup. When we checked on Oct 3, 2026, it was #1 on Amazon's Best Sellers list for Pour Over Coffee Makers. Rated 4.5 out of 5 from 11,837 Amazon ratings at the time.",
    tier: "$",
    imageGradient: "from-sky-950 via-stone-800 to-amber-950",
    imageAlt: "Bodum 34oz Pour Over Coffee Maker product photo",
    imageUrl: "/products/B07KQVW6RR.jpg",
    featured: false,
    amazonAsin: "B07KQVW6RR",
    amazonQuery: "Bodum 34oz Pour Over Coffee Maker",
    pros: ["Reusable stainless mesh filter, no paper to buy", "34 oz carafe brews several cups at once", "Heat-resistant borosilicate glass with a cork grip"],
    cons: ["Mesh filter lets more fines through than paper", "Single-wall glass loses heat faster than insulated carafes", "Glass can break if knocked"],
    whoItsFor: "Households brewing several cups at once who want to skip paper filters.",
    specs: [{ label: "Brand", value: "Bodum" }, { label: "Material", value: "Borosilicate Glass" }, { label: "Color", value: "Cork" }, { label: "Capacity", value: "2.1 pounds" }, { label: "Special Feature", value: "Permanent Filter" }],
    relatedSlugs: ["chemex-classic-6-cup", "hario-v60-02", "aeropress-original"],
  },
  {
    slug: "etekcity-food-kitchen-scale",
    name: "Etekcity Food Kitchen Scale",
    brand: "Etekcity",
    category: "kettles-scales",
    tagline: "11 lb kitchen scale with 1 g steps, five units, and tare",
    summary: "The Etekcity kitchen scale is our Value pick for coffee scales: it weighs up to 11 lb (5 kg) in 1 g steps, switches between five units, and has a tare button and a wipe-clean 304 stainless steel platform. It is a cheap way to weigh beans and water for pour-over, though 1 g steps are coarse for espresso. When we checked on Oct 3, 2026, it was #1 on Amazon's Best Sellers list for Digital Kitchen Scales. Rated 4.6 out of 5 from 177,534 Amazon ratings at the time.",
    tier: "$",
    imageGradient: "from-rose-950 via-orange-900 to-amber-950",
    imageAlt: "Etekcity Food Kitchen Scale product photo",
    imageUrl: "/products/B0113UZJE2.jpg",
    featured: false,
    amazonAsin: "B0113UZJE2",
    amazonQuery: "Etekcity Food Kitchen Scale",
    pros: ["Weighs up to 11 lb (5 kg) in 1 g steps", "Tare plus five units (g, oz, lb:oz, fl oz, mL)", "304 stainless steel top wipes clean", "Ships with two AAA batteries"],
    cons: ["1 g resolution is coarse for espresso doses", "No built-in timer for brewing"],
    whoItsFor: "Pour-over and French press brewers who want to weigh coffee and water for the lowest cost.",
    specs: [{ label: "Brand", value: "Etekcity" }, { label: "Color", value: "Stainless Steel" }, { label: "Special Feature", value: "Backlit Display" }, { label: "Item Weight", value: "200 g" }, { label: "Display Type", value: "LCD" }],
    relatedSlugs: ["maestri-espresso-scale", "maestri-s1-mini-scale", "amazon-basics-digital-kitchen-scale-with"],
  },
  {
    slug: "amazon-basics-digital-kitchen-scale-with",
    name: "Amazon Basics Digital Kitchen Scale with LCD Display",
    brand: "Amazon Basics",
    category: "kettles-scales",
    tagline: "11 lb digital scale with tare, a stainless platform, and a wide LCD",
    summary: "The Amazon Basics kitchen scale reads from 2 g up to 11 lb on a stainless steel platform, with tare and five units. It handles filter-coffee ratios and general cooking, but it is not fine enough for espresso dosing. When we checked on Oct 3, 2026, it was #2 on Amazon's Best Sellers list for Digital Kitchen Scales. Rated 4.7 out of 5 from 119,238 Amazon ratings at the time.",
    tier: "$",
    imageGradient: "from-rose-950 via-orange-900 to-amber-950",
    imageAlt: "Amazon Basics Digital Kitchen Scale with LCD Display product photo",
    imageUrl: "/products/B06X9NQ8GX.jpg",
    featured: false,
    amazonAsin: "B06X9NQ8GX",
    amazonQuery: "Amazon Basics Digital Kitchen Scale with LCD Display",
    pros: ["Weighs from 2 g up to 11 lb (about 5,000 g)", "Tare button and five units including mL", "Stainless steel platform with a wide LCD"],
    cons: ["2 g minimum reading is not fine enough for espresso", "No built-in timer"],
    whoItsFor: "Kitchens that want one basic scale for both cooking and filter coffee.",
    specs: [{ label: "Brand", value: "Amazon Basics" }, { label: "Color", value: "Black and Stainless Steel" }, { label: "Special Feature", value: "Large Display, Strain Gauge" }, { label: "Item Weight", value: "0.38 kg" }, { label: "Display Type", value: "LCD" }],
    relatedSlugs: ["maestri-espresso-scale", "maestri-s1-mini-scale", "etekcity-food-kitchen-scale"],
  },
  {
    slug: "soyok-food-scale-11lb-kitchen-scale",
    name: "SOYOK Food Scale, 11lb Kitchen Scale with 6 Units Tare Function & LCD",
    brand: "SOYOK",
    category: "kettles-scales",
    tagline: "Low-cost 11 lb scale with 1 g resolution and six units",
    summary: "The SOYOK scale weighs up to 11 lb in 1 g steps across six units, with tare and overload and low-battery warnings. It is a bare-bones option for filter coffee and kitchen use. When we checked on Oct 3, 2026, it was #3 on Amazon's Best Sellers list for Digital Kitchen Scales. Rated 4.5 out of 5 from 4,756 Amazon ratings at the time.",
    tier: "$",
    imageGradient: "from-rose-950 via-orange-900 to-amber-950",
    imageAlt: "SOYOK Food Scale, 11lb Kitchen Scale with 6 Units Tare Function & LCD product photo",
    imageUrl: "/products/B0CXM7CY6F.jpg",
    featured: false,
    amazonAsin: "B0CXM7CY6F",
    amazonQuery: "SOYOK Food Scale, 11lb Kitchen Scale with 6 Units Tare Function & LCD",
    pros: ["11 lb capacity with 1 g (0.05 oz) resolution", "Overload and low-battery warnings", "Six units with tare"],
    cons: ["1 g steps are coarse for espresso", "No timer for pour-over brewing"],
    whoItsFor: "Anyone who needs a very cheap scale for filter coffee and baking.",
    specs: [{ label: "Brand", value: "SOYOK" }, { label: "Color", value: "Silver" }, { label: "Special Feature", value: "Auto Shut Off" }, { label: "Item Weight", value: "7.84 ounces" }, { label: "Display Type", value: "LCD" }],
    relatedSlugs: ["maestri-espresso-scale", "maestri-s1-mini-scale", "etekcity-food-kitchen-scale"],
  },
  {
    slug: "ggq-food-scale-33lb-digital-kitchen",
    name: "GGQ Food Scale -33lb Digital Kitchen Scale for Food Ounces Grams",
    brand: "GGQ",
    category: "kettles-scales",
    tagline: "33 lb glass-top scale with four load sensors",
    summary: "The GGQ scale uses four load sensors under a glass platform and handles up to 33 lb, with tare and five units. The high capacity suits batch cooking; the 2-minute auto-off can be short for slow pour-overs. When we checked on Oct 3, 2026, it was #4 on Amazon's Best Sellers list for Digital Kitchen Scales. Rated 4.4 out of 5 from 8,890 Amazon ratings at the time.",
    tier: "$$",
    imageGradient: "from-rose-950 via-orange-900 to-amber-950",
    imageAlt: "GGQ Food Scale -33lb Digital Kitchen Scale for Food Ounces Grams product photo",
    imageUrl: "/products/B0BYN6Q8L7.jpg",
    featured: false,
    amazonAsin: "B0BYN6Q8L7",
    amazonQuery: "GGQ Food Scale -33lb Digital Kitchen Scale for Food Ounces Grams",
    pros: ["High 33 lb capacity", "Four load sensors under a tempered glass platform", "Tare and five units", "2-minute auto-off saves battery"],
    cons: ["2-minute auto-off can cut out during long brews", "No built-in timer"],
    whoItsFor: "Kitchens that weigh large batches as well as coffee.",
    specs: [{ label: "Brand", value: "GGQ" }, { label: "Color", value: "Black" }, { label: "Special Feature", value: "Auto Shut Off, Overload Reminder, Screen Touch" }, { label: "Item Weight", value: "250 g" }, { label: "Display Type", value: "LCD" }],
    relatedSlugs: ["maestri-espresso-scale", "maestri-s1-mini-scale", "etekcity-food-kitchen-scale"],
  },
  {
    slug: "ultrean-food-scale",
    name: "Ultrean Food Scale",
    brand: "Ultrean",
    category: "kettles-scales",
    tagline: "Compact stainless scale with a high-contrast display",
    summary: "The Ultrean scale has a stainless platform, six units, auto-off, and a negative white display that stays readable in low light. Its resolution isn't listed, so check it before relying on it for espresso. When we checked on Oct 3, 2026, it was #5 on Amazon's Best Sellers list for Digital Kitchen Scales. Rated 4.6 out of 5 from 22,172 Amazon ratings at the time.",
    tier: "$",
    imageGradient: "from-rose-950 via-orange-900 to-amber-950",
    imageAlt: "Ultrean Food Scale product photo",
    imageUrl: "/products/B08CZDYNF7.jpg",
    featured: false,
    amazonAsin: "B08CZDYNF7",
    amazonQuery: "Ultrean Food Scale",
    pros: ["Stainless steel platform", "Six units including milk mL", "Negative white display is readable in dim kitchens", "Batteries included, with auto-off"],
    cons: ["Resolution not listed, so check it before using it for espresso", "No built-in timer"],
    whoItsFor: "Early-morning brewers who want a readable display on a cheap scale.",
    specs: [{ label: "Brand", value: "Ultrean" }, { label: "Color", value: "Silver" }, { label: "Special Feature", value: "High Weight Capacity" }, { label: "Item Weight", value: "5 g" }, { label: "Display Type", value: "LCD" }],
    relatedSlugs: ["maestri-espresso-scale", "maestri-s1-mini-scale", "etekcity-food-kitchen-scale"],
  },
  {
    slug: "mik-nana-food-scale",
    name: "Mik-Nana Food Scale",
    brand: "Mik-Nana",
    category: "kettles-scales",
    tagline: "22 lb kitchen scale in a slim 7.4 x 5.5 inch body",
    summary: "The Mik-Nana scale weighs up to 22 lb in 1 g steps, with six units and tare, in a slim 7.4 x 5.5 x 0.6 inch body. When we checked on Oct 3, 2026, it was #9 on Amazon's Best Sellers list for Digital Kitchen Scales. Rated 4.5 out of 5 from 5,661 Amazon ratings at the time.",
    tier: "$",
    imageGradient: "from-rose-950 via-orange-900 to-amber-950",
    imageAlt: "Mik-Nana Food Scale product photo",
    imageUrl: "/products/B0BN4H1X9L.jpg",
    featured: false,
    amazonAsin: "B0BN4H1X9L",
    amazonQuery: "Mik-Nana Food Scale",
    pros: ["22 lb (10 kg) capacity with 1 g resolution", "Six units with tare", "Slim 7.4 x 5.5 x 0.6 inch footprint"],
    cons: ["1 g steps are coarse for espresso", "No built-in timer"],
    whoItsFor: "Small kitchens that want a slim scale with high capacity.",
    specs: [{ label: "Brand", value: "Mik-Nana" }, { label: "Color", value: "Black" }, { label: "Special Feature", value: "Auto Shut Off, LCD Display, Tare Function" }, { label: "Item Weight", value: "7.2 ounces" }, { label: "Display Type", value: "LCD" }],
    relatedSlugs: ["maestri-espresso-scale", "maestri-s1-mini-scale", "etekcity-food-kitchen-scale"],
  },
  {
    slug: "escali-primo-digital-food-scale-multi",
    name: "Escali Primo Digital Food Scale Multi-Functional Kitchen Scale",
    brand: "Escali",
    category: "kettles-scales",
    tagline: "Two-button 11 lb scale with a sealed control panel",
    summary: "The Escali Primo is a two-button scale with a sealed control panel, tare, and an 11 lb capacity in 1 g steps. When we checked on Oct 3, 2026, it was #11 on Amazon's Best Sellers list for Digital Kitchen Scales. Rated 4.6 out of 5 from 7,376 Amazon ratings at the time.",
    tier: "$$",
    imageGradient: "from-rose-950 via-orange-900 to-amber-950",
    imageAlt: "Escali Primo Digital Food Scale Multi-Functional Kitchen Scale product photo",
    imageUrl: "/products/B0007GAWRS.jpg",
    featured: false,
    amazonAsin: "B0007GAWRS",
    amazonQuery: "Escali Primo Digital Food Scale Multi-Functional Kitchen Scale",
    pros: ["11 lb (5,000 g) capacity in 1 g increments", "Simple two-button operation", "Sealed control panel", "8.5 x 6 x 1.5 inch footprint"],
    cons: ["1 g steps are coarse for espresso", "No built-in timer"],
    whoItsFor: "People who want a simple, durable scale for the kitchen and filter coffee.",
    specs: [{ label: "Brand", value: "Escali" }, { label: "Color", value: "Chrome" }, { label: "Special Feature", value: "Auto Shut Off, Programmable, Sealed Control Panel, Tare Function" }, { label: "Item Weight", value: "431 g" }, { label: "Display Type", value: "LCD" }],
    relatedSlugs: ["maestri-espresso-scale", "maestri-s1-mini-scale", "etekcity-food-kitchen-scale"],
  },
  {
    slug: "cosori-gooseneck-electric-kettle-with-temperature",
    name: "Cosori Gooseneck Electric Kettle with Temperature Control",
    brand: "Cosori",
    category: "pour-over",
    tagline: "0.8 L gooseneck kettle with five temperature presets and a 1-hour hold",
    summary: "The Cosori gooseneck kettle pairs with any pour-over dripper. It has five temperature presets, a hold function that keeps water warm for up to 1 hour, a gooseneck spout for controlled pour-over, and a 304 stainless steel interior, lid, and spout, running at 1,200 W. When we checked on Oct 3, 2026, it was #12 on Amazon's Best Sellers list for Electric Kettles. Rated 4.6 out of 5 from 19,583 Amazon ratings at the time.",
    tier: "$$",
    imageGradient: "from-rose-950 via-orange-900 to-amber-950",
    imageAlt: "Cosori Gooseneck Electric Kettle with Temperature Control product photo",
    imageUrl: "/products/B07T1CH2HH.jpg",
    featured: false,
    amazonAsin: "B07T1CH2HH",
    amazonQuery: "Cosori Gooseneck Electric Kettle with Temperature Control",
    pros: ["Five temperature presets for different coffees and teas", "Holds temperature for up to 1 hour", "Gooseneck spout for controlled pouring", "304 stainless steel interior, lid, and spout"],
    cons: ["0.8 L capacity limits large batches", "Presets only, no single-degree setting listed"],
    whoItsFor: "Pour-over brewers who want set temperatures and a controlled pour.",
    specs: [{ label: "Brand", value: "Cosori" }, { label: "Material", value: "Stainless Steel" }, { label: "Color", value: "Black" }, { label: "Capacity", value: "0.8 liters" }, { label: "Wattage", value: "1200 watts" }],
    relatedSlugs: ["maestri-espresso-scale", "maestri-s1-mini-scale", "etekcity-food-kitchen-scale"],
  },
  {
    slug: "wacaco-minipresso-gr",
    name: "Wacaco Minipresso GR",
    brand: "WACACO",
    category: "travel-espresso",
    tagline: "Hand-pumped portable espresso maker for ground coffee",
    summary: "The Wacaco Minipresso GR is a hand-pumped espresso maker for ground coffee. It needs no power, but you have to bring boiling water, and accessories are sold separately. When we checked on Oct 3, 2026, it was #3 on Amazon's Best Sellers list for Manual Espresso Machines. Rated 4.4 out of 5 from 6,209 Amazon ratings at the time.",
    tier: "$",
    imageGradient: "from-orange-950 via-amber-900 to-stone-950",
    imageAlt: "Wacaco Minipresso GR product photo",
    imageUrl: "/products/B00VTA9F6U.jpg",
    featured: false,
    amazonAsin: "B00VTA9F6U",
    amazonQuery: "Wacaco Minipresso GR",
    pros: ["No batteries or power needed", "Small enough for a backpack or desk drawer", "Works with ground coffee"],
    cons: ["Needs boiling water from a separate kettle", "Accessories are sold separately", "70 ml capacity is a single small shot"],
    whoItsFor: "Campers and travelers who want a cheap hand-pumped shot.",
    specs: [{ label: "Brand", value: "WACACO" }, { label: "Material", value: "Plastic" }, { label: "Color", value: "Black" }, { label: "Capacity", value: "70 ml" }, { label: "Special Feature", value: "Portable" }],
    relatedSlugs: ["flair-classic", "wacaco-nanopresso", "wacaco-picopresso"],
  },
  {
    slug: "flair-updated-49-pro-black-all",
    name: "Flair UPDATED 49 PRO (Black) - All manual 49mm lever espresso",
    brand: "Flair",
    category: "travel-espresso",
    tagline: "Manual 49mm lever espresso maker with a built-in pressure gauge",
    summary: "The Flair 49 PRO is our Premium pick for travel espresso. It is an all-manual lever maker with a 49mm portafilter, a stainless steel cylinder, valve plunger, and stem, and an integrated pressure gauge marked with a 5–9 bar espresso zone. When we checked on Oct 3, 2026, it was #7 on Amazon's Best Sellers list for Manual Espresso Machines. Rated 4.2 out of 5 from 426 Amazon ratings at the time.",
    tier: "$$$",
    imageGradient: "from-orange-950 via-amber-900 to-stone-950",
    imageAlt: "Flair UPDATED 49 PRO (Black) - All manual 49mm lever espresso product photo",
    imageUrl: "/products/B0842H62PV.jpg",
    featured: false,
    amazonAsin: "B0842H62PV",
    amazonQuery: "Flair UPDATED 49 PRO (Black) - All manual 49mm lever espresso",
    pros: ["Integrated pressure gauge with a 5–9 bar espresso zone", "Stainless steel cylinder, plunger, and stem", "Full manual control over extraction"],
    cons: ["Needs hot water from a kettle", "49mm basket is narrower than standard 58mm accessories", "Amazon rating (4.2 out of 5 when we checked) trails most picks in this category"],
    whoItsFor: "Manual-espresso enthusiasts who want a pressure gauge and full control.",
    specs: [{ label: "Brand", value: "Flair" }, { label: "Material", value: "Aluminum" }, { label: "Color", value: "Black" }, { label: "Capacity", value: "70 ml" }, { label: "Wattage", value: "800 watts" }],
    relatedSlugs: ["flair-classic", "wacaco-nanopresso", "wacaco-picopresso"],
  },
  {
    slug: "staresso-plus-sp300-manual-espresso-machine",
    name: "STARESSO PLUS SP300 Manual Espresso Machine",
    brand: "STARESSO",
    category: "travel-espresso",
    tagline: "Hand-pumped portable espresso maker with a separable body and stand",
    summary: "The STARESSO SP300 is a hand-pumped espresso maker with a top pressure valve, food-safe silicone parts, and a body that separates from its stand for storage. When we checked on Oct 3, 2026, it was #11 on Amazon's Best Sellers list for Manual Espresso Machines. Rated 4.3 out of 5 from 245 Amazon ratings at the time.",
    tier: "$",
    imageGradient: "from-orange-950 via-amber-900 to-stone-950",
    imageAlt: "STARESSO PLUS SP300 Manual Espresso Machine product photo",
    imageUrl: "/products/B09M9M1LFC.jpg",
    featured: false,
    amazonAsin: "B09M9M1LFC",
    amazonQuery: "STARESSO PLUS SP300 Manual Espresso Machine",
    pros: ["Top pressure valve built to reduce pumping effort", "Silicone parts rated to baby-bottle safety standards", "Body separates and stores on its stand"],
    cons: ["24 ml capacity is a single small shot", "Needs hot water from a kettle"],
    whoItsFor: "Travelers who want a hand-pumped espresso maker with a stand.",
    specs: [{ label: "Brand", value: "STARESSO" }, { label: "Material", value: "Stainless Steel" }, { label: "Color", value: "Black" }, { label: "Capacity", value: "24 ml" }, { label: "Special Feature", value: "Manual" }],
    relatedSlugs: ["flair-classic", "wacaco-nanopresso", "wacaco-picopresso"],
  },
  {
    slug: "bincoo-manual-espresso-maker-set-hand",
    name: "Bincoo Manual Espresso Maker Set - Hand Press Espresso Machine – 12Bar",
    brand: "Bincoo",
    category: "travel-espresso",
    tagline: "Dual-lever manual espresso maker with a 58mm portafilter and pressure gauge",
    summary: "The Bincoo manual espresso maker uses a dual-lever system with adjustable pressure springs, a 360° pressure gauge, and a commercial 58mm portafilter, built from stainless steel and brass. When we checked on Oct 3, 2026, it was #13 on Amazon's Best Sellers list for Manual Espresso Machines. Rated 4.2 out of 5 from 8 Amazon ratings at the time.",
    tier: "$$$",
    imageGradient: "from-orange-950 via-amber-900 to-stone-950",
    imageAlt: "Bincoo Manual Espresso Maker Set - Hand Press Espresso Machine – 12Bar product photo",
    imageUrl: "/products/B0F99K6MZH.jpg",
    featured: false,
    amazonAsin: "B0F99K6MZH",
    amazonQuery: "Bincoo Manual Espresso Maker Set - Hand Press Espresso Machine – 12Bar",
    pros: ["Dual-lever design with adjustable pressure springs and a 360° gauge", "Commercial 58mm portafilter", "Stainless steel and brass build with no plastic parts"],
    cons: ["Large and heavy for travel despite the category", "Needs hot water from a kettle", "Amazon rating (4.2 out of 5 when we checked) trails most picks in this category"],
    whoItsFor: "Home lever-espresso fans who want 58mm baskets and a gauge.",
    specs: [{ label: "Brand", value: "Bincoo" }, { label: "Material", value: "Stainless Steel" }, { label: "Color", value: "Black" }, { label: "Capacity", value: "2 cups" }, { label: "Special Feature", value: "Portable" }],
    relatedSlugs: ["flair-classic", "wacaco-nanopresso", "wacaco-picopresso"],
  },
  {
    slug: "flair-2go-portable",
    name: "Flair 2GO: Portable",
    brand: "Flair",
    category: "travel-espresso",
    tagline: "Folding lever espresso maker for 6–9 bar shots on the road",
    summary: "The Flair 2GO is a foldable lever espresso maker that brews at 6–9 bar and comes with a bottomless 2-in-1 portafilter. When we checked on Oct 3, 2026, it was #14 on Amazon's Best Sellers list for Manual Espresso Machines. Rated 4.1 out of 5 from 73 Amazon ratings at the time.",
    tier: "$$",
    imageGradient: "from-orange-950 via-amber-900 to-stone-950",
    imageAlt: "Flair 2GO: Portable product photo",
    imageUrl: "/products/B0FD63L3YY.jpg",
    featured: false,
    amazonAsin: "B0FD63L3YY",
    amazonQuery: "Flair 2GO: Portable",
    pros: ["Folds down for travel", "Lever design brews at 6–9 bar", "Bottomless 2-in-1 portafilter, spouted or not"],
    cons: ["Needs hot water from a kettle", "No pressure gauge on this Grounds model", "Amazon rating (4.1 out of 5 when we checked) trails most picks in this category"],
    whoItsFor: "Travelers who want lever espresso in a foldable kit.",
    specs: [{ label: "Brand", value: "Flair" }, { label: "Material", value: "Aluminum, Stainless Steel" }, { label: "Color", value: "Black" }, { label: "Capacity", value: "60 ml" }, { label: "Special Feature", value: "Collapsible" }],
    relatedSlugs: ["flair-classic", "wacaco-nanopresso", "wacaco-picopresso"],
  },
  {
    slug: "zulay-kitchen-milk-frother-handheld-electric",
    name: "Zulay Kitchen Milk Frother Handheld Electric Whisk – Frother",
    brand: "Zulay Kitchen",
    category: "frothers-accessories",
    tagline: "Battery handheld whisk for frothing milk and mixing drinks",
    summary: "The Zulay handheld frother is our Value pick for frothers: a battery-powered stainless whisk with a one-button switch. It froths milk you've already heated, and cleans by spinning it under running water. When we checked on Oct 3, 2026, it was #1 on Amazon's Best Sellers list for Milk Frothers. Rated 4.4 out of 5 from 239,671 Amazon ratings at the time.",
    tier: "$",
    imageGradient: "from-sky-950 via-cyan-900 to-stone-950",
    imageAlt: "Zulay Kitchen Milk Frother Handheld Electric Whisk – Frother product photo",
    imageUrl: "/products/B082314NFL.jpg",
    featured: false,
    amazonAsin: "B082314NFL",
    amazonQuery: "Zulay Kitchen Milk Frother Handheld Electric Whisk – Frother",
    pros: ["Simple one-button operation", "Stainless steel whisk with a nylon body", "Rinses clean by running it under water"],
    cons: ["Froths milk but does not heat it", "Foam is airier than steamed microfoam"],
    whoItsFor: "Anyone who wants quick frothed milk without a steam wand.",
    specs: [{ label: "Brand", value: "Zulay Kitchen" }, { label: "Material", value: "Stainless Steel" }, { label: "Color", value: "Zulay Black" }, { label: "Wattage", value: "13 KW" }, { label: "Special Feature", value: "Easy to Clean Stainless Steel" }],
    relatedSlugs: ["subminimal-nanofoamer", "normcore-v4-tamper", "milk-frothing-pitcher"],
  },
  {
    slug: "adorever-milk-frothing-pitcher",
    name: "Adorever Milk Frothing Pitcher",
    brand: "Adorever",
    category: "frothers-accessories",
    tagline: "304 stainless frothing pitcher with a latte art pen",
    summary: "The Adorever pitcher is a 304 stainless steel frothing jug that comes with a latte art pen and is sold in several sizes. When we checked on Oct 3, 2026, it was #1 on Amazon's Best Sellers list for Espresso Steaming Pitchers. Rated 4.7 out of 5 from 12,533 Amazon ratings at the time.",
    tier: "$",
    imageGradient: "from-sky-950 via-cyan-900 to-stone-950",
    imageAlt: "Adorever Milk Frothing Pitcher product photo",
    imageUrl: "/products/B07KFYXTRR.jpg",
    featured: false,
    amazonAsin: "B07KFYXTRR",
    amazonQuery: "Adorever Milk Frothing Pitcher",
    pros: ["Pitcher and latte art pen made of 304 stainless steel", "Sold in several sizes from 8.5 oz to 66 oz", "Welded handle joint"],
    cons: ["Sold in many sizes, so pick one that matches your drinks", "Spout shape may suit practice more than precise art"],
    whoItsFor: "Beginners who want a cheap pitcher plus an art pen for latte practice.",
    specs: [{ label: "Brand", value: "Adorever" }, { label: "Material", value: "Stainless Steel" }, { label: "Color", value: "A Silver" }, { label: "Capacity", value: "12 ounces" }, { label: "Number of Packs", value: "1" }],
    relatedSlugs: ["subminimal-nanofoamer", "normcore-v4-tamper", "milk-frothing-pitcher"],
  },
  {
    slug: "de-longhi-ecodecalk-universal-descaler",
    name: "De'Longhi EcoDecalk Universal Descaler",
    brand: "De'Longhi",
    category: "cleaning-maintenance",
    tagline: "16.9 oz biodegradable descaler for coffee machines",
    summary: "De'Longhi EcoDecalk is a biodegradable descaler in a 16.9 oz bottle, listed as compatible with other brands as well as De'Longhi machines. When we checked on Oct 3, 2026, it was #3 on Amazon's Best Sellers list for Coffee & Espresso Machine Cleaning Products. Rated 4.7 out of 5 from 166,234 Amazon ratings at the time.",
    tier: "$$",
    imageGradient: "from-zinc-800 via-stone-700 to-neutral-950",
    imageAlt: "De'Longhi EcoDecalk Universal Descaler product photo",
    imageUrl: "/products/B008YETL18.jpg",
    featured: false,
    amazonAsin: "B008YETL18",
    amazonQuery: "De'Longhi EcoDecalk Universal Descaler",
    pros: ["Biodegradable descaling formula", "Listed as compatible with other machine brands", "16.9 oz bottle covers several descaling cycles"],
    cons: ["Descales only; it does not remove coffee oils", "Follow your machine's descaling cycle and rinse well"],
    whoItsFor: "De'Longhi and other machine owners who descale on schedule.",
    specs: [{ label: "Product Dimensions", value: "3.11 x 3.11 x 7.48 inches; 1.1 pounds" }, { label: "Material Feature", value: "Biodegradable Warning" }],
    relatedSlugs: ["blind-basket-58mm", "puly-caff-plus", "espresso-cleaning-tablets"],
  },
  {
    slug: "breville-bec250-espresso-machine-cleaning-tablets",
    name: "Breville BEC250 Espresso Machine Cleaning Tablets",
    brand: "Breville",
    category: "cleaning-maintenance",
    tagline: "Breville's own tablets for removing coffee oils from screens and baskets",
    summary: "Breville's BEC250 tablets are our Value pick for cleaning: Breville-made tablets that remove coffee oils and residue from the shower screen and filter baskets, with food-grade ingredients and a non-corrosive formula. They suit Breville cleaning cycles; they are not a descaler. When we checked on Oct 3, 2026, it was #4 on Amazon's Best Sellers list for Coffee & Espresso Machine Cleaning Products. Rated 4.8 out of 5 from 5,795 Amazon ratings at the time.",
    tier: "$",
    imageGradient: "from-zinc-800 via-stone-700 to-neutral-950",
    imageAlt: "Breville BEC250 Espresso Machine Cleaning Tablets product photo",
    imageUrl: "/products/B00494MU9M.jpg",
    featured: false,
    amazonAsin: "B00494MU9M",
    amazonQuery: "Breville BEC250 Espresso Machine Cleaning Tablets",
    pros: ["Made by Breville for Breville cleaning cycles", "Removes coffee oils from the shower screen and baskets", "Food-grade, non-corrosive formula"],
    cons: ["Not a descaler; mineral scale needs a separate product", "Designed around Breville machines"],
    whoItsFor: "Breville espresso owners who want the brand's own cleaning tablets.",
    specs: [{ label: "Product Dimensions", value: "4.41 x 0.79 x 0.79 inches; 0.64 ounces" }],
    relatedSlugs: ["blind-basket-58mm", "puly-caff-plus", "espresso-cleaning-tablets"],
  },
  {
    slug: "affresh-coffee-maker-cleaner",
    name: "Affresh Coffee Maker Cleaner",
    brand: "Affresh",
    category: "cleaning-maintenance",
    tagline: "Unscented descaler tablets for drip and single-serve coffee makers",
    summary: "Affresh cleaner tablets descale drip and single-serve coffee makers without a vinegar smell. They target mineral buildup rather than espresso oils. When we checked on Oct 3, 2026, it was #10 on Amazon's Best Sellers list for Coffee & Espresso Machine Cleaning Products. Rated 4.6 out of 5 from 16,943 Amazon ratings at the time.",
    tier: "$",
    imageGradient: "from-zinc-800 via-stone-700 to-neutral-950",
    imageAlt: "Affresh Coffee Maker Cleaner product photo",
    imageUrl: "/products/B06X16S1HZ.jpg",
    featured: false,
    amazonAsin: "B06X16S1HZ",
    amazonQuery: "Affresh Coffee Maker Cleaner",
    pros: ["Descales mineral buildup without a vinegar smell", "Works in multi-cup and single-serve coffee makers", "Monthly or as-needed use"],
    cons: ["Made for drip and pod makers, not espresso machine backflushing", "Not a coffee-oil detergent"],
    whoItsFor: "Drip and pod coffee maker owners on hard water.",
    specs: [{ label: "Product Dimensions", value: "1.5 x 3.5 x 5.5 inches; 0.7 ounces" }],
    relatedSlugs: ["blind-basket-58mm", "puly-caff-plus", "espresso-cleaning-tablets"],
  },
  {
    slug: "tillbrook-breville-espresso-machine-compatible-descaler",
    name: "Tillbrook Breville Espresso Machine Compatible Descaler",
    brand: "Tillbrook",
    category: "cleaning-maintenance",
    tagline: "Concentrated descaler sized for four cleanings",
    summary: "Tillbrook's concentrated descaler covers four cleanings per bottle and is listed as compatible with Breville, Keurig, Nespresso, and De'Longhi machines. When we checked on Oct 3, 2026, it was #11 on Amazon's Best Sellers list for Coffee & Espresso Machine Cleaning Products. Rated 4.7 out of 5 from 430 Amazon ratings at the time.",
    tier: "$",
    imageGradient: "from-zinc-800 via-stone-700 to-neutral-950",
    imageAlt: "Tillbrook Breville Espresso Machine Compatible Descaler product photo",
    imageUrl: "/products/B0DP5GMT1R.jpg",
    featured: false,
    amazonAsin: "B0DP5GMT1R",
    amazonQuery: "Tillbrook Breville Espresso Machine Compatible Descaler",
    pros: ["Four descaling cycles per bottle", "Listed as compatible with Breville, Keurig, Nespresso, and De'Longhi", "Targets mineral and limescale buildup"],
    cons: ["Third-party product, so check your machine's warranty terms", "Not a backflush detergent"],
    whoItsFor: "Breville owners who want a third-party descaler that covers four cycles.",
    specs: [{ label: "Package Dimensions", value: "6.06 x 4.02 x 1.93 inches; 1.3 pounds" }],
    relatedSlugs: ["blind-basket-58mm", "puly-caff-plus", "espresso-cleaning-tablets"],
  },
  {
    slug: "jura-64308-cleaning-tablets-for-all",
    name: "Jura 64308 Cleaning Tablets for All Automatic Coffee Centers",
    brand: "Jura",
    category: "cleaning-maintenance",
    tagline: "Jura's cleaning tablets for its automatic coffee machines",
    summary: "Jura's 64308 tablets are our Premium cleaning pick for owners of Jura super-automatic machines: Jura's own tablets, one per cleaning cycle, to remove internal oil buildup. Generic tablets exist, but Jura's are what its machines' cleaning programs are designed around. When we checked on Oct 3, 2026, it was #12 on Amazon's Best Sellers list for Coffee & Espresso Machine Cleaning Products. Rated 4.8 out of 5 from 4,349 Amazon ratings at the time.",
    tier: "$$",
    imageGradient: "from-zinc-800 via-stone-700 to-neutral-950",
    imageAlt: "Jura 64308 Cleaning Tablets for All Automatic Coffee Centers product photo",
    imageUrl: "/products/B000BJSF6Q.jpg",
    featured: false,
    amazonAsin: "B000BJSF6Q",
    amazonQuery: "Jura 64308 Cleaning Tablets for All Automatic Coffee Centers",
    pros: ["Made for Jura automatic coffee machines", "One tablet per cleaning cycle", "Removes internal coffee-oil buildup"],
    cons: ["Only six tablets per pack", "Made for Jura machines, not general espresso use"],
    whoItsFor: "Jura automatic machine owners.",
    specs: [{ label: "Brand", value: "Jura" }, { label: "Size", value: "6 Count (Pack of 1)" }, { label: "Item Form", value: "Tablet" }, { label: "Scent", value: "Peppermint" }, { label: "Material Feature", value: "Descaler" }],
    relatedSlugs: ["blind-basket-58mm", "puly-caff-plus", "espresso-cleaning-tablets"],
  },
  {
    slug: "veken-coffee-canister-with-window",
    name: "Veken Coffee Canister with Window",
    brand: "Veken",
    category: "coffee-canisters",
    tagline: "22 oz stainless canister with a window, date tracker, and scoop",
    summary: "The Veken canister is a 22 oz stainless steel jar with a viewing window, a date tracker on the lid, and an included scoop. When we checked on Oct 3, 2026, it was #1 on Amazon's Best Sellers list for Coffee Storage Containers. Rated 4.8 out of 5 from 12,368 Amazon ratings at the time.",
    tier: "$$",
    imageGradient: "from-stone-200 to-amber-100",
    imageAlt: "Veken Coffee Canister with Window product photo",
    imageUrl: "/products/B0CWH57Q9F.jpg",
    featured: false,
    amazonAsin: "B0CWH57Q9F",
    amazonQuery: "Veken Coffee Canister with Window",
    pros: ["Window shows how much coffee is left", "Date tracker on the lid", "Includes a scoop", "22 oz size"],
    cons: ["A window lets in some light, which coffee storage usually avoids", "Lid seal, not a vacuum pump"],
    whoItsFor: "Anyone who wants to see the fill level and track roast or open dates.",
    specs: [{ label: "Brand", value: "Veken" }, { label: "Material", value: "Plastic, Silicone, Stainless Steel" }, { label: "Color", value: "Black" }, { label: "Size", value: "22 oz" }, { label: "Capacity", value: "1.4 pounds" }],
    relatedSlugs: ["fellow-atmos", "planetary-design-airscape-stainless-steel-coffee"],
  },
  {
    slug: "planetary-design-airscape-stainless-steel-coffee",
    name: "Planetary Design Airscape Stainless Steel Coffee Canister",
    brand: "Planetary Design",
    category: "coffee-canisters",
    tagline: "Stainless canister with the Airscape plunger lid that pushes air out",
    summary: "The Planetary Design Airscape is our Premium pick for coffee canisters. Its patented inner plunger lid pushes air out of the canister before you seal it, and the stainless body stacks in a pantry. This medium size holds 64 fl oz. When we checked on Oct 3, 2026, it was #2 on Amazon's Best Sellers list for Coffee Storage Containers. Rated 4.8 out of 5 from 6,293 Amazon ratings at the time.",
    tier: "$$$",
    imageGradient: "from-stone-200 to-amber-100",
    imageAlt: "Planetary Design Airscape Stainless Steel Coffee Canister product photo",
    imageUrl: "/products/B09NP55LSG.jpg",
    featured: false,
    amazonAsin: "B09NP55LSG",
    amazonQuery: "Planetary Design Airscape Stainless Steel Coffee Canister",
    pros: ["Inner plunger lid pushes air out above the beans", "Stainless steel body blocks light", "Stacks for pantry storage", "64 fl oz capacity"],
    cons: ["Plunger adds a step each time you open it", "Larger than you need for a single 12 oz bag"],
    whoItsFor: "People who want an air-removing lid without a battery or pump.",
    specs: [{ label: "Brand", value: "Planetary Design" }, { label: "Material", value: "Stainless Steel" }, { label: "Color", value: "Brushed Copper" }, { label: "Size", value: "Medium" }, { label: "Capacity", value: "64 fluid ounces" }],
    relatedSlugs: ["fellow-atmos", "planetary-design-airscape-stainless-steel-coffee", "veken-coffee-canister-with-window"],
  },
  {
    slug: "kivy-vacuum-coffee-canister",
    name: "KIVY Vacuum Coffee Canister",
    brand: "KIVY",
    category: "coffee-canisters",
    tagline: "32 oz stainless vacuum canister for beans or grounds",
    summary: "The KIVY canister is a 32 fl oz stainless steel container with a vacuum design meant to keep beans and grounds fresh longer than a standard jar. When we checked on Oct 3, 2026, it was #3 on Amazon's Best Sellers list for Coffee Storage Containers. Rated 4.5 out of 5 from 704 Amazon ratings at the time.",
    tier: "$$",
    imageGradient: "from-stone-200 to-amber-100",
    imageAlt: "KIVY Vacuum Coffee Canister product photo",
    imageUrl: "/products/B0CTYLS1X3.jpg",
    featured: false,
    amazonAsin: "B0CTYLS1X3",
    amazonQuery: "KIVY Vacuum Coffee Canister",
    pros: ["Vacuum design to limit air contact", "Stainless steel body", "32 fl oz capacity"],
    cons: ["Check how the vacuum is created before buying", "No date tracker listed"],
    whoItsFor: "Coffee drinkers who want a vacuum-style stainless canister at a mid price.",
    specs: [{ label: "Brand", value: "KIVY" }, { label: "Material", value: "Stainless Steel" }, { label: "Color", value: "Black" }, { label: "Size", value: "Medium" }, { label: "Capacity", value: "32 fluid ounces" }],
    relatedSlugs: ["fellow-atmos", "planetary-design-airscape-stainless-steel-coffee", "veken-coffee-canister-with-window"],
  },
  {
    slug: "tourdeus-glass-coffee-bean-canister",
    name: "Tourdeus Glass Coffee Bean Canister",
    brand: "Tourdeus",
    category: "coffee-canisters",
    tagline: "10 oz borosilicate glass canister with a pop-top lid and CO2 valve",
    summary: "The Tourdeus canister is a 10 oz borosilicate glass jar with a pop-top lid and a one-way CO2 release valve. When we checked on Oct 3, 2026, it was #4 on Amazon's Best Sellers list for Coffee Storage Containers. Rated 4.6 out of 5 from 355 Amazon ratings at the time.",
    tier: "$$",
    imageGradient: "from-stone-200 to-amber-100",
    imageAlt: "Tourdeus Glass Coffee Bean Canister product photo",
    imageUrl: "/products/B0D9M3DGLR.jpg",
    featured: false,
    amazonAsin: "B0D9M3DGLR",
    amazonQuery: "Tourdeus Glass Coffee Bean Canister",
    pros: ["One-way CO2 release valve", "Borosilicate glass body", "Pop-top lid for quick access"],
    cons: ["Clear glass lets light in, so store it in a cupboard", "10 oz holds less than a standard 12 oz bag"],
    whoItsFor: "Small households storing less than a full bag.",
    specs: [{ label: "Brand", value: "Tourdeus" }, { label: "Material", value: "Borosilicate Glass" }, { label: "Color", value: "10 oz - Clear" }, { label: "Capacity", value: "10 ounces" }, { label: "Item Weight", value: "10.88 ounces" }],
    relatedSlugs: ["fellow-atmos", "planetary-design-airscape-stainless-steel-coffee", "veken-coffee-canister-with-window"],
  },
  {
    slug: "coffee-gator-coffee-canister",
    name: "Coffee Gator Coffee Canister",
    brand: "Coffee Gator",
    category: "coffee-canisters",
    tagline: "11 oz stainless canister with a CO2 valve and date wheel",
    summary: "The Coffee Gator 11 oz canister is our Value pick for coffee canisters: a stainless steel jar with a one-way CO2 vent and a date wheel for tracking freshness. The small size suits a single 10–12 oz bag or less. When we checked on Oct 3, 2026, it was #7 on Amazon's Best Sellers list for Coffee Storage Containers. Rated 4.7 out of 5 from 10,191 Amazon ratings at the time.",
    tier: "$",
    imageGradient: "from-stone-200 to-amber-100",
    imageAlt: "Coffee Gator Coffee Canister product photo",
    imageUrl: "/products/B06W9M3BSP.jpg",
    featured: false,
    amazonAsin: "B06W9M3BSP",
    amazonQuery: "Coffee Gator Coffee Canister",
    pros: ["Stainless steel body blocks light", "One-way CO2 valve", "Date wheel on the lid"],
    cons: ["11 oz is small for larger bags", "Lid seal, not an active vacuum"],
    whoItsFor: "People who buy small bags and want a cheap, light-blocking canister.",
    specs: [{ label: "Brand", value: "Coffee Gator" }, { label: "Material", value: "Stainless Steel" }, { label: "Color", value: "Gray" }, { label: "Size", value: "11oz" }, { label: "Capacity", value: "11 ounces" }],
    relatedSlugs: ["fellow-atmos", "planetary-design-airscape-stainless-steel-coffee", "veken-coffee-canister-with-window"],
  },
  {
    slug: "yszaxnsr-15oz-coffee-canister",
    name: "Yszaxnsr 15oz Coffee Canister",
    brand: "Yszaxnsr",
    category: "coffee-canisters",
    tagline: "1.3 L plastic canister with double sealing rings and a hanging spoon",
    summary: "The Yszaxnsr canister is a 1.3 L BPA-free plastic jar with double sealing rings, a wide mouth, and a hanging spoon, and it stacks. When we checked on Oct 3, 2026, it was #8 on Amazon's Best Sellers list for Coffee Storage Containers. Rated 4.6 out of 5 from 443 Amazon ratings at the time.",
    tier: "$",
    imageGradient: "from-stone-200 to-amber-100",
    imageAlt: "Yszaxnsr 15oz Coffee Canister product photo",
    imageUrl: "/products/B0FB1JJ9K4.jpg",
    featured: false,
    amazonAsin: "B0FB1JJ9K4",
    amazonQuery: "Yszaxnsr 15oz Coffee Canister",
    pros: ["Double-layer sealing rings", "Wide mouth with a hanging spoon", "Stackable 1.3 L body", "BPA-free food-grade plastic"],
    cons: ["Plastic body is less light-blocking than steel", "No CO2 valve listed"],
    whoItsFor: "Pantries that want a stackable, wide-mouth canister for coffee and dry goods.",
    specs: [{ label: "Brand", value: "Yszaxnsr" }, { label: "Material", value: "Plastic" }, { label: "Color", value: "dark brown" }, { label: "Size", value: "4.84 inches (diameter) x 5.91 inches (height)" }, { label: "Capacity", value: "1.3 liters" }],
    relatedSlugs: ["fellow-atmos", "planetary-design-airscape-stainless-steel-coffee", "veken-coffee-canister-with-window"],
  },
  {
    slug: "hb-design-co-airtight-coffee-canister",
    name: "HB Design Co. Airtight Coffee Canister 40 oz",
    brand: "HB Design Co.",
    category: "coffee-canisters",
    tagline: "40 oz metal jar with a rubber-lined bamboo lid",
    summary: "The HB Design Co. canister is a 40 oz iron jar, 6 x 8 inches, with a rubber-lined bamboo lid. It is large enough for bulk beans or pods. When we checked on Oct 3, 2026, it was #10 on Amazon's Best Sellers list for Coffee Storage Containers. Rated 4.8 out of 5 from 753 Amazon ratings at the time.",
    tier: "$$",
    imageGradient: "from-stone-200 to-amber-100",
    imageAlt: "HB Design Co. Airtight Coffee Canister 40 oz product photo",
    imageUrl: "/products/B0D5Y6Y3HV.jpg",
    featured: false,
    amazonAsin: "B0D5Y6Y3HV",
    amazonQuery: "HB Design Co. Airtight Coffee Canister 40 oz",
    pros: ["Large 6 x 8 inch jar fits beans, grounds, or pods", "Rubber-lined bamboo lid", "Light, unbreakable iron body"],
    cons: ["No CO2 valve listed", "Large size is more than one bag needs"],
    whoItsFor: "Households that buy coffee in bulk or store pods.",
    specs: [{ label: "Brand", value: "HB Design Co." }, { label: "Material", value: "Bamboo, Iron" }, { label: "Color", value: "Black" }, { label: "Capacity", value: "1.18 liters" }, { label: "Item Weight", value: "0.61 kg" }],
    relatedSlugs: ["fellow-atmos", "planetary-design-airscape-stainless-steel-coffee", "veken-coffee-canister-with-window"],
  },
  {
    slug: "lryybti-coffee-canisters-with-window-airtight",
    name: "LRYYBTI Coffee Canisters with Window,Airtight Coffee Container，22oz",
    brand: "LRYYBTI",
    category: "coffee-canisters",
    tagline: "22 oz stainless canister with a window, date tracker, and scoop",
    summary: "The LRYYBTI canister is a 22 oz stainless steel jar with a viewing window, an airtight lid, a date tracker, and a measuring scoop. When we checked on Oct 3, 2026, it was #12 on Amazon's Best Sellers list for Coffee Storage Containers. Rated 4.6 out of 5 from 217 Amazon ratings at the time.",
    tier: "$",
    imageGradient: "from-stone-200 to-amber-100",
    imageAlt: "LRYYBTI Coffee Canisters with Window,Airtight Coffee Container，22oz product photo",
    imageUrl: "/products/B0DSBRZ6FQ.jpg",
    featured: false,
    amazonAsin: "B0DSBRZ6FQ",
    amazonQuery: "LRYYBTI Coffee Canisters with Window,Airtight Coffee Container，22oz",
    pros: ["22 oz stainless steel body with a viewing window", "Airtight lid", "Date tracker and measuring scoop included"],
    cons: ["A window lets in some light", "No vacuum pump"],
    whoItsFor: "Anyone who wants a cheap windowed canister with a date tracker.",
    specs: [{ label: "Brand", value: "LRYYBTI" }, { label: "Material", value: "Stainless Steel" }, { label: "Color", value: "Black" }, { label: "Size", value: "22 oz" }, { label: "Capacity", value: "1.4 pounds" }],
    relatedSlugs: ["fellow-atmos", "planetary-design-airscape-stainless-steel-coffee", "veken-coffee-canister-with-window"],
  },
  {
    slug: "simple-modern-delta-coffee-canister-airtight",
    name: "Simple Modern Delta Coffee Canister | Airtight Vacuum Seal",
    brand: "Simple Modern",
    category: "coffee-canisters",
    tagline: "1.1 L rechargeable canister that reseals its own vacuum",
    summary: "The Simple Modern Delta is a powered vacuum canister. Its Auto Reseal system keeps the vacuum sealed automatically, running up to 3 months per charge, and the ceramic-lined 1.1 L vessel fits a standard 12 oz bag. When we checked on Oct 3, 2026, it was #14 on Amazon's Best Sellers list for Coffee Storage Containers. Rated 4.4 out of 5 from 109 Amazon ratings at the time.",
    tier: "$$$",
    imageGradient: "from-stone-700 via-amber-900 to-stone-900",
    imageAlt: "Simple Modern Delta Coffee Canister | Airtight Vacuum Seal product photo",
    imageUrl: "/products/B0FWFZXHF7.jpg",
    featured: false,
    amazonAsin: "B0FWFZXHF7",
    amazonQuery: "Simple Modern Delta Coffee Canister | Airtight Vacuum Seal",
    pros: ["Auto Reseal keeps the vacuum sealed automatically", "Rechargeable battery lasts up to 3 months per charge", "Ceramic-lined interior with a silicone base", "1.1 L fits a standard 12 oz bag"],
    cons: ["Battery needs recharging", "More parts to care for than a plain canister"],
    whoItsFor: "People who want a hands-off vacuum seal and don't mind charging it.",
    specs: [{ label: "Brand", value: "Simple Modern" }, { label: "Material", value: "Ceramic, Stainless Steel" }, { label: "Color", value: "- Midnight Black" }, { label: "Size", value: "1.1L" }, { label: "Capacity", value: "1.1 liters" }],
    relatedSlugs: ["fellow-atmos", "gaiakallon-vacuum-coffee-canister", "styled-settings-coffee-storage-container"],
  },
  {
    slug: "gaiakallon-vacuum-coffee-canister",
    name: "GAIAKALLON Vacuum Coffee Canister",
    brand: "GAIAKALLON",
    category: "coffee-canisters",
    tagline: "46 fl oz stainless canister with a walnut vacuum lid and CO2 valve",
    summary: "The GAIAKALLON canister is a 46 fl oz, 304 stainless jar that holds about 16 oz of beans, with an inner lid carrying a one-way CO2 valve and silicone seal under a walnut outer cover. When we checked on Oct 3, 2026, it was #15 on Amazon's Best Sellers list for Coffee Storage Containers. Rated 4.5 out of 5 from 225 Amazon ratings at the time.",
    tier: "$$",
    imageGradient: "from-stone-700 via-amber-900 to-stone-900",
    imageAlt: "GAIAKALLON Vacuum Coffee Canister product photo",
    imageUrl: "/products/B0FPFCXMST.jpg",
    featured: false,
    amazonAsin: "B0FPFCXMST",
    amazonQuery: "GAIAKALLON Vacuum Coffee Canister",
    pros: ["Inner lid with a one-way CO2 valve and silicone seal", "304 stainless steel body", "46 fl oz holds about 16 oz of beans"],
    cons: ["Two lids add a step each time", "Wood lid needs gentle hand cleaning"],
    whoItsFor: "People storing a full pound of beans who want a valve and inner lid.",
    specs: [{ label: "Brand", value: "GAIAKALLON" }, { label: "Material", value: "Stainless Steel" }, { label: "Color", value: "Black" }, { label: "Size", value: "46 fl.oz" }, { label: "Capacity", value: "46 fluid ounces" }],
    relatedSlugs: ["fellow-atmos", "simple-modern-delta-coffee-canister-airtight", "styled-settings-coffee-storage-container"],
  },
  {
    slug: "styled-settings-coffee-storage-container",
    name: "STYLED SETTINGS Coffee Storage Container",
    brand: "STYLED SETTINGS",
    category: "coffee-canisters",
    tagline: "Stainless vacuum canister with a dual lid and removable filter",
    summary: "The STYLED SETTINGS canister is a 304 stainless steel vacuum container with a dual-lid system and a removable filter, sized at 16 oz. When we checked on Oct 3, 2026, it was #16 on Amazon's Best Sellers list for Coffee Storage Containers. Rated 4.8 out of 5 from 150 Amazon ratings at the time.",
    tier: "$$",
    imageGradient: "from-stone-700 via-amber-900 to-stone-900",
    imageAlt: "STYLED SETTINGS Coffee Storage Container product photo",
    imageUrl: "/products/B0FSFLXSXQ.jpg",
    featured: false,
    amazonAsin: "B0FSFLXSXQ",
    amazonQuery: "STYLED SETTINGS Coffee Storage Container",
    pros: ["Dual-lid vacuum system", "304 stainless steel resists rust and light", "Removable filter for beans or grounds"],
    cons: ["16 oz capacity", "Dual lid adds a step each time"],
    whoItsFor: "Anyone storing beans or grounds who wants a dual-lid stainless canister.",
    specs: [{ label: "Brand", value: "STYLED SETTINGS" }, { label: "Material", value: "Stainless Steel" }, { label: "Color", value: "Black" }, { label: "Size", value: "4.5 inches (L) x 6.8 inches (H)" }, { label: "Capacity", value: "16 ounces" }],
    relatedSlugs: ["fellow-atmos", "simple-modern-delta-coffee-canister-airtight", "gaiakallon-vacuum-coffee-canister"],
  },
  {
    slug: "voonsctm-glass-jars-with-lids",
    name: "Voonsctm Glass Jars With Lids",
    brand: "Voonsctm",
    category: "coffee-canisters",
    tagline: "24 oz glass jar with a natural wood lid",
    summary: "The Voonsctm jar is a 24 oz glass container with a natural wood lid, for coffee, tea, or sugar. When we checked on Oct 3, 2026, it was #18 on Amazon's Best Sellers list for Coffee Storage Containers. Rated 4.5 out of 5 from 29 Amazon ratings at the time.",
    tier: "$",
    imageGradient: "from-stone-700 via-amber-900 to-stone-900",
    imageAlt: "Voonsctm Glass Jars With Lids product photo",
    imageUrl: "/products/B0H6WX53QM.jpg",
    featured: false,
    amazonAsin: "B0H6WX53QM",
    amazonQuery: "Voonsctm Glass Jars With Lids",
    pros: ["Natural wood lid", "24 oz (700 ml) glass jar", "Works for coffee, tea, or sugar"],
    cons: ["Clear glass lets light in", "No airtight vacuum or CO2 valve listed"],
    whoItsFor: "Countertops that want a simple glass jar more than a vacuum seal.",
    specs: [{ label: "Brand", value: "Voonsctm" }, { label: "Material", value: "Glass" }, { label: "Color", value: "Clear Sunburst, 24oz/700ml" }, { label: "Capacity", value: "1.5 pounds" }, { label: "Item Weight", value: "1.1 pounds" }],
    relatedSlugs: ["fellow-atmos", "simple-modern-delta-coffee-canister-airtight", "gaiakallon-vacuum-coffee-canister"],
  },
  {
    slug: "ohtomber-22oz-stainless-steel-airtight-coffee",
    name: "Ohtomber 22oz Stainless Steel Airtight Coffee Canister",
    brand: "Ohtomber",
    category: "coffee-canisters",
    tagline: "22 oz stainless canister with a locking lid, CO2 valve, and date tracker",
    summary: "The Ohtomber canister is a 22 oz, 304 stainless steel jar with a locking lid, a one-way CO2 valve, a date tracker, and a scoop. When we checked on Oct 3, 2026, it was #19 on Amazon's Best Sellers list for Coffee Storage Containers. Rated 4.6 out of 5 from 717 Amazon ratings at the time.",
    tier: "$",
    imageGradient: "from-stone-700 via-amber-900 to-stone-900",
    imageAlt: "Ohtomber 22oz Stainless Steel Airtight Coffee Canister product photo",
    imageUrl: "/products/B0D4PN6XN9.jpg",
    featured: false,
    amazonAsin: "B0D4PN6XN9",
    amazonQuery: "Ohtomber 22oz Stainless Steel Airtight Coffee Canister",
    pros: ["304 stainless steel body", "Locking lid with a one-way CO2 valve", "Date tracker and scoop included"],
    cons: ["22 oz fits about one bag", "No active vacuum"],
    whoItsFor: "People who want a valve and date tracker in a stainless canister.",
    specs: [{ label: "Brand", value: "Ohtomber" }, { label: "Material", value: "Stainless Steel" }, { label: "Color", value: "Black" }, { label: "Size", value: "22 ounces" }, { label: "Capacity", value: "1.4 pounds" }],
    relatedSlugs: ["fellow-atmos", "simple-modern-delta-coffee-canister-airtight", "gaiakallon-vacuum-coffee-canister"],
  },
  {
    slug: "oggi-stainless-steel-coffee-canister-62",
    name: "Oggi Stainless Steel Coffee Canister 62 fl oz - Airtight Clamp",
    brand: "Oggi",
    category: "coffee-canisters",
    tagline: "Large 62 fl oz stainless canister with a clear clamp lid",
    summary: "The Oggi 62 fl oz canister is a large food-grade stainless jar with a clear BPA-free lid, a silicone gasket, and locking clamps. The clear lid lets you see the beans, so keep it out of direct light. When we checked on Oct 3, 2026, it was #20 on Amazon's Best Sellers list for Food Jars & Canisters. Rated 4.5 out of 5 from 8,501 Amazon ratings at the time.",
    tier: "$",
    imageGradient: "from-stone-700 via-amber-900 to-stone-900",
    imageAlt: "Oggi Stainless Steel Coffee Canister 62 fl oz - Airtight Clamp product photo",
    imageUrl: "/products/B00VSCDX8U.jpg",
    featured: false,
    amazonAsin: "B00VSCDX8U",
    amazonQuery: "Oggi Stainless Steel Coffee Canister 62 fl oz - Airtight Clamp",
    pros: ["Large 62 fl oz capacity", "Silicone gasket with locking clamps", "Clear BPA-free lid shows contents"],
    cons: ["Clear lid lets light reach the beans", "No CO2 valve listed"],
    whoItsFor: "Bulk buyers who want a large clamp-lid canister on a budget.",
    specs: [{ label: "Brand", value: "Oggi" }, { label: "Material", value: "Stainless Steel" }, { label: "Color", value: "Silver" }, { label: "Size", value: "5 x 7.5\" / 62 fl oz" }, { label: "Capacity", value: "3.9 pounds" }],
    relatedSlugs: ["fellow-atmos", "simple-modern-delta-coffee-canister-airtight", "gaiakallon-vacuum-coffee-canister"],
  },
  {
    slug: "comsaf-glass-coffee-canister-jar-with",
    name: "ComSaf Glass Coffee Canister Jar with Acacia Wood Lid 34 oz",
    brand: "ComSaf",
    category: "coffee-canisters",
    tagline: "34 oz glass jar with an acacia wood lid",
    summary: "The ComSaf jar is a 34 oz glass canister with an acacia wood lid and silicone gasket, and a wide opening for scooping. When we checked on Oct 3, 2026, it was #23 on Amazon's Best Sellers list for Coffee Storage Containers. Rated 4.6 out of 5 from 52 Amazon ratings at the time.",
    tier: "$",
    imageGradient: "from-stone-700 via-amber-900 to-stone-900",
    imageAlt: "ComSaf Glass Coffee Canister Jar with Acacia Wood Lid 34 oz product photo",
    imageUrl: "/products/B0H3TF8VDD.jpg",
    featured: false,
    amazonAsin: "B0H3TF8VDD",
    amazonQuery: "ComSaf Glass Coffee Canister Jar with Acacia Wood Lid 34 oz",
    pros: ["34 oz glass body shows when coffee is low", "Acacia wood lid with a silicone gasket", "Wide opening for scoops"],
    cons: ["Clear glass lets light in", "No CO2 valve listed"],
    whoItsFor: "Counters that want an inexpensive glass jar for beans or grounds.",
    specs: [{ label: "Brand", value: "ComSaf" }, { label: "Material", value: "Acacia Wood, Glass" }, { label: "Color", value: "Clear" }, { label: "Size", value: "Large" }, { label: "Capacity", value: "1 liters" }],
    relatedSlugs: ["fellow-atmos", "simple-modern-delta-coffee-canister-airtight", "gaiakallon-vacuum-coffee-canister"],
  },
  {
    slug: "airscape-by-planetary-design",
    name: "Airscape by Planetary Design",
    brand: "AirScape",
    category: "coffee-canisters",
    tagline: "Kilo-size Airscape canister with a plunger lid and two-way valve",
    summary: "This Airscape canister uses Planetary Design's patented inner plunger lid with a two-way valve to push air out and keep humidity out, in a kilo size that holds about 1.1 kg. When we checked on Oct 3, 2026, it was #23 on Amazon's Best Sellers list for Food Jars & Canisters. Rated 4.8 out of 5 from 6,193 Amazon ratings at the time.",
    tier: "$$$",
    imageGradient: "from-stone-700 via-amber-900 to-stone-900",
    imageAlt: "Airscape by Planetary Design product photo",
    imageUrl: "/products/B07W6RKJVF.jpg",
    featured: false,
    amazonAsin: "B07W6RKJVF",
    amazonQuery: "Airscape by Planetary Design",
    pros: ["Inner plunger lid with a two-way valve pushes air out", "Kilo size holds about 1.1 kg", "Matte black steel body"],
    cons: ["Large for a single bag", "Plunger adds a step each time"],
    whoItsFor: "Bulk buyers who want the Airscape plunger in a kilo size.",
    specs: [{ label: "Brand", value: "AirScape" }, { label: "Material", value: "Alloy Steel" }, { label: "Color", value: "Matte Black" }, { label: "Size", value: "Kilo" }, { label: "Capacity", value: "1.1 kg" }],
    relatedSlugs: ["fellow-atmos", "simple-modern-delta-coffee-canister-airtight", "gaiakallon-vacuum-coffee-canister"],
  },
  {
    slug: "coffee-gator-coffee-canister-2",
    name: "Coffee Gator Coffee Canister",
    brand: "Coffee Gator",
    category: "coffee-canisters",
    tagline: "22 oz stainless canister with a CO2 valve and date wheel",
    summary: "The 22 oz Coffee Gator is a stainless steel canister with a one-way CO2 valve and a calendar date wheel. When we checked on Oct 3, 2026, it was #24 on Amazon's Best Sellers list for Coffee Storage Containers. Rated 4.7 out of 5 from 10,927 Amazon ratings at the time.",
    tier: "$$",
    imageGradient: "from-stone-700 via-amber-900 to-stone-900",
    imageAlt: "Coffee Gator Coffee Canister product photo",
    imageUrl: "/products/B08K1TQM6H.jpg",
    featured: false,
    amazonAsin: "B08K1TQM6H",
    amazonQuery: "Coffee Gator Coffee Canister",
    pros: ["One-way CO2 valve", "Date wheel to log purchase or roast dates", "22 oz stainless steel body"],
    cons: ["No active vacuum", "Larger than you need for small bags"],
    whoItsFor: "People storing a full bag who want a vented, light-blocking canister.",
    specs: [{ label: "Brand", value: "Coffee Gator" }, { label: "Material", value: "Stainless Steel" }, { label: "Color", value: "Black" }, { label: "Size", value: "22oz" }, { label: "Capacity", value: "650 g" }],
    relatedSlugs: ["fellow-atmos", "simple-modern-delta-coffee-canister-airtight", "gaiakallon-vacuum-coffee-canister"],
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
