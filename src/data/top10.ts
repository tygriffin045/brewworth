import type { Product } from "./types";
import { products, getProductsByCategory } from "./products";

/**
 * Top 10 picks per category page (ordered). Every ASIN was checked live and in stock on amazon.com on Oct 3, 2026.
 * Picks marked in TOP10_BESTSELLERS appeared on the matching Amazon Best Sellers list when checked.
 */
export const TOP10: Record<string, string[]> = {
  "espresso-machines": ["breville-bambino", "breville-bambino-plus", "gaggia-classic-pro", "delonghi-dedica", "breville-barista-express", "rancilio-silvia", "breville-barista-pro", "breville-barista-touch-impress", "delonghi-la-specialista", "gaggia-classic-evo-pro"],
  "grinders": ["baratza-encore-esp", "breville-smart-grinder-pro", "eureka-mignon-specialita", "fellow-ode-gen-2", "capresso-infinity", "baratza-sette-270wi", "comandante-c40", "timemore-chestnut-c3", "hario-skerton-pro", "baratza-sette-30"],
  "pour-over": ["chemex-classic-6-cup", "hario-v60-02", "aeropress-original", "fellow-stagg-xf", "clever-dripper", "kalita-wave-155", "aeropress-xl", "hario-switch-02", "moccamaster-kbgv-select", "bodum-34oz-pour-over-coffee-maker"],
  "kettles-scales": ["maestri-espresso-scale", "maestri-s1-mini-scale", "etekcity-food-kitchen-scale", "amazon-basics-digital-kitchen-scale-with", "soyok-food-scale-11lb-kitchen-scale", "ggq-food-scale-33lb-digital-kitchen", "ultrean-food-scale", "mik-nana-food-scale", "escali-primo-digital-food-scale-multi", "cosori-gooseneck-electric-kettle-with-temperature"],
  "travel-espresso": ["flair-classic", "wacaco-nanopresso", "wacaco-picopresso", "outin-nano", "wacaco-pixapresso", "wacaco-minipresso-gr", "flair-updated-49-pro-black-all", "staresso-plus-sp300-manual-espresso-machine", "bincoo-manual-espresso-maker-set-hand", "flair-2go-portable"],
  "frothers-accessories": ["subminimal-nanofoamer", "normcore-v4-tamper", "milk-frothing-pitcher", "normcore-wdt-tool", "breville-knock-box-mini", "milk-pitcher-20oz", "bodum-barista-frother", "hoomil-12oz-pitcher", "zulay-kitchen-milk-frother-handheld-electric", "adorever-milk-frothing-pitcher"],
  "cleaning-maintenance": ["blind-basket-58mm", "puly-caff-plus", "espresso-cleaning-tablets", "espresso-descaler", "urnex-cafiza", "de-longhi-ecodecalk-universal-descaler", "breville-bec250-espresso-machine-cleaning-tablets", "affresh-coffee-maker-cleaner", "tillbrook-breville-espresso-machine-compatible-descaler", "jura-64308-cleaning-tablets-for-all"],
  "coffee-canisters": ["fellow-atmos", "ohtomber-22oz-stainless-steel-airtight-coffee", "veken-coffee-canister-with-window", "planetary-design-airscape-stainless-steel-coffee", "kivy-vacuum-coffee-canister", "tourdeus-glass-coffee-bean-canister", "coffee-gator-coffee-canister", "yszaxnsr-15oz-coffee-canister", "hb-design-co-airtight-coffee-canister", "lryybti-coffee-canisters-with-window-airtight"],
  "coffee-storage": ["atmos-storage", "simple-modern-delta-coffee-canister-airtight", "gaiakallon-vacuum-coffee-canister", "styled-settings-coffee-storage-container", "voonsctm-glass-jars-with-lids", "ohtomber-22oz-stainless-steel-airtight-coffee", "oggi-stainless-steel-coffee-canister-62", "comsaf-glass-coffee-canister-jar-with", "airscape-by-planetary-design", "coffee-gator-coffee-canister-2"],
};

export const TOP10_BESTSELLERS: Record<string, string[]> = {
  "espresso-machines": ["breville-bambino", "breville-bambino-plus", "gaggia-classic-pro", "breville-barista-express", "breville-barista-touch-impress"],
  "grinders": ["baratza-encore-esp", "fellow-ode-gen-2", "comandante-c40"],
  "pour-over": ["hario-v60-02", "hario-switch-02", "bodum-34oz-pour-over-coffee-maker"],
  "kettles-scales": ["maestri-espresso-scale", "etekcity-food-kitchen-scale", "amazon-basics-digital-kitchen-scale-with", "soyok-food-scale-11lb-kitchen-scale", "ggq-food-scale-33lb-digital-kitchen", "ultrean-food-scale", "mik-nana-food-scale", "escali-primo-digital-food-scale-multi", "cosori-gooseneck-electric-kettle-with-temperature"],
  "travel-espresso": ["wacaco-minipresso-gr", "flair-updated-49-pro-black-all", "staresso-plus-sp300-manual-espresso-machine", "bincoo-manual-espresso-maker-set-hand", "flair-2go-portable"],
  "frothers-accessories": ["hoomil-12oz-pitcher", "zulay-kitchen-milk-frother-handheld-electric", "adorever-milk-frothing-pitcher"],
  "cleaning-maintenance": ["espresso-cleaning-tablets", "urnex-cafiza", "de-longhi-ecodecalk-universal-descaler", "breville-bec250-espresso-machine-cleaning-tablets", "affresh-coffee-maker-cleaner", "tillbrook-breville-espresso-machine-compatible-descaler", "jura-64308-cleaning-tablets-for-all"],
  "coffee-canisters": ["veken-coffee-canister-with-window", "planetary-design-airscape-stainless-steel-coffee", "kivy-vacuum-coffee-canister", "tourdeus-glass-coffee-bean-canister", "coffee-gator-coffee-canister", "yszaxnsr-15oz-coffee-canister", "hb-design-co-airtight-coffee-canister", "lryybti-coffee-canisters-with-window-airtight"],
  "coffee-storage": ["simple-modern-delta-coffee-canister-airtight", "gaiakallon-vacuum-coffee-canister", "styled-settings-coffee-storage-container", "voonsctm-glass-jars-with-lids", "ohtomber-22oz-stainless-steel-airtight-coffee", "oggi-stainless-steel-coffee-canister-62", "comsaf-glass-coffee-canister-jar-with", "airscape-by-planetary-design", "coffee-gator-coffee-canister-2"],
};

export function getTopPicks(category: string): Product[] {
  const slugs = TOP10[category];
  if (!slugs) return getProductsByCategory(category).slice(0, 10);
  return slugs
    .map((s) => products.find((p) => p.slug === s))
    .filter((p): p is Product => Boolean(p));
}

/**
 * Editorial picks per category (revamp wave 1, Oct 12 2026). Best Overall is always #1 in TOP10;
 * Premium and Value must also appear in that category's Top 10 (checked by scripts/validate-revamp.ts).
 */
export const PICKS: Record<string, { best: string; premium: string; value: string }> = {
  "espresso-machines": { best: "breville-bambino", premium: "breville-barista-pro", value: "delonghi-dedica" },
  "grinders": { best: "baratza-encore-esp", premium: "eureka-mignon-specialita", value: "timemore-chestnut-c3" },
  "pour-over": { best: "chemex-classic-6-cup", premium: "fellow-stagg-xf", value: "hario-v60-02" },
  "kettles-scales": { best: "maestri-espresso-scale", premium: "cosori-gooseneck-electric-kettle-with-temperature", value: "etekcity-food-kitchen-scale" },
  "travel-espresso": { best: "flair-classic", premium: "flair-updated-49-pro-black-all", value: "wacaco-nanopresso" },
  "frothers-accessories": { best: "subminimal-nanofoamer", premium: "normcore-v4-tamper", value: "hoomil-12oz-pitcher" },
  "cleaning-maintenance": { best: "blind-basket-58mm", premium: "puly-caff-plus", value: "breville-bec250-espresso-machine-cleaning-tablets" },
  "coffee-canisters": { best: "fellow-atmos", premium: "planetary-design-airscape-stainless-steel-coffee", value: "coffee-gator-coffee-canister" },
  "coffee-storage": { best: "atmos-storage", premium: "simple-modern-delta-coffee-canister-airtight", value: "oggi-stainless-steel-coffee-canister-62" },
};

export function getThreePicks(category: string) {
  const m = PICKS[category];
  if (!m) return null;
  const find = (s: string) => products.find((p) => p.slug === s);
  const best = find(m.best), premium = find(m.premium), value = find(m.value);
  if (!best || !premium || !value) return null;
  return { best, premium, value };
}

/** Home page Top 10: the Best Overall from each of the nine categories, plus the espresso Premium pick (brew has nine categories). */
export const HOME_TOP10: { category: string; role: "best" | "premium" }[] = [
  { category: "espresso-machines", role: "best" },
  { category: "grinders", role: "best" },
  { category: "pour-over", role: "best" },
  { category: "kettles-scales", role: "best" },
  { category: "travel-espresso", role: "best" },
  { category: "frothers-accessories", role: "best" },
  { category: "cleaning-maintenance", role: "best" },
  { category: "coffee-canisters", role: "best" },
  { category: "coffee-storage", role: "best" },
  { category: "espresso-machines", role: "premium" },
];
export const HOME_TOP10_CATEGORIES = HOME_TOP10.map((h) => h.category);

export function getHomeTop10(): Product[] {
  return HOME_TOP10.map((h) => products.find((p) => p.slug === PICKS[h.category][h.role])).filter(
    (p): p is Product => Boolean(p),
  );
}
