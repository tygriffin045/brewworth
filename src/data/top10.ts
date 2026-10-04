import type { Product } from "./types";
import { products, getProductsByCategory } from "./products";

/**
 * Top 10 picks per category page (ordered). Every ASIN was checked live and in stock on amazon.com on Oct 3, 2026.
 * Picks marked in TOP10_BESTSELLERS appeared on the matching Amazon Best Sellers list when checked.
 */
export const TOP10: Record<string, string[]> = {
  "espresso-machines": ["breville-bambino", "breville-bambino-plus", "gaggia-classic-pro", "delonghi-dedica", "breville-barista-express", "rancilio-silvia", "breville-barista-pro", "breville-barista-touch-impress", "delonghi-la-specialista", "gaggia-classic-evo-pro"],
  "grinders": ["baratza-encore-esp", "breville-smart-grinder-pro", "eureka-mignon-specialita", "fellow-ode-gen-2", "capresso-infinity", "baratza-sette-270wi", "comandante-c40", "timemore-chestnut-c3", "hario-skerton-pro", "baratza-sette-30"],
  "pour-over": ["chemex-classic-6-cup", "hario-v60-02", "aeropress-original", "fellow-stagg-xf", "clever-dripper", "kalita-wave-155", "aeropress-xl", "hario-switch-02", "hario-switch-02-set", "bodum-34oz-pour-over-coffee-maker"],
  "kettles-scales": ["maestri-espresso-scale", "maestri-s1-mini-scale", "etekcity-food-kitchen-scale", "amazon-basics-digital-kitchen-scale-with", "soyok-food-scale-11lb-kitchen-scale", "ggq-food-scale-33lb-digital-kitchen", "ultrean-food-scale", "mik-nana-food-scale", "escali-primo-digital-food-scale-multi", "cosori-gooseneck-electric-kettle-with-temperature"],
  "travel-espresso": ["flair-classic", "wacaco-nanopresso", "wacaco-picopresso", "outin-nano", "wacaco-pixapresso", "wacaco-minipresso-gr", "flair-updated-49-pro-black-all", "staresso-plus-sp300-manual-espresso-machine", "bincoo-manual-espresso-maker-set-hand", "flair-2go-portable"],
  "frothers-accessories": ["subminimal-nanofoamer", "normcore-v4-tamper", "milk-frothing-pitcher", "normcore-wdt-tool", "breville-knock-box-mini", "milk-pitcher-20oz", "bodum-barista-frother", "hoomil-12oz-pitcher", "zulay-kitchen-milk-frother-handheld-electric", "adorever-milk-frothing-pitcher"],
  "cleaning-maintenance": ["blind-basket-58mm", "puly-caff-plus", "espresso-cleaning-tablets", "espresso-descaler", "urnex-cafiza", "de-longhi-ecodecalk-universal-descaler", "breville-bec250-espresso-machine-cleaning-tablets", "affresh-coffee-maker-cleaner", "tillbrook-breville-espresso-machine-compatible-descaler", "jura-64308-cleaning-tablets-for-all"],
  "coffee-canisters": ["fellow-atmos", "atmos-12", "veken-coffee-canister-with-window", "planetary-design-airscape-stainless-steel-coffee", "kivy-vacuum-coffee-canister", "tourdeus-glass-coffee-bean-canister", "coffee-gator-coffee-canister", "yszaxnsr-15oz-coffee-canister", "hb-design-co-airtight-coffee-canister", "lryybti-coffee-canisters-with-window-airtight"],
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
