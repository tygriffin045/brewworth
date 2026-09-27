import type { CategorySlug } from "./types";
import { getCategory } from "./categories";

export interface NavCategoryLink {
  slug: CategorySlug;
  href: string;
  label: string;
  shortLabel: string;
}

export interface NavGroup {
  id: string;
  label: string;
  description: string;
  categorySlugs: CategorySlug[];
}

/** Shop menu / mobile sheet groups — single source of truth for header IA. */
export const navGroups: NavGroup[] = [
  {
    id: "espresso",
    label: "Espresso",
    description: "Machines, grinders, and espresso on the go",
    categorySlugs: ["espresso-machines", "grinders", "travel-espresso"],
  },
  {
    id: "filter-brew",
    label: "Filter & brew",
    description: "Pour-over brewers, kettles, and scales",
    categorySlugs: ["pour-over", "kettles-scales"],
  },
  {
    id: "milk-care",
    label: "Milk & care",
    description: "Frothers, barista tools, and upkeep",
    categorySlugs: ["frothers-accessories", "cleaning-maintenance"],
  },
];

export function getNavGroupLinks(group: NavGroup): NavCategoryLink[] {
  return group.categorySlugs.map((slug) => {
    const cat = getCategory(slug);
    if (!cat) {
      throw new Error(
        `nav group "${group.id}" references unknown category: ${slug}`,
      );
    }
    return {
      slug,
      href: `/categories/${slug}`,
      label: cat.name,
      shortLabel: cat.shortLabel,
    };
  });
}

export function getAllNavGroupsWithLinks() {
  return navGroups.map((group) => ({
    ...group,
    links: getNavGroupLinks(group),
  }));
}
