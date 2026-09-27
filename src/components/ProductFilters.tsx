"use client";

import { useMemo, useState } from "react";
import type { Product, CategorySlug, BudgetBand } from "@/data/types";
import { categories } from "@/data/categories";
import { ProductCard } from "./ProductCard";

const budgets: { value: BudgetBand | "all"; label: string }[] = [
  { value: "all", label: "All budgets" },
  { value: "budget", label: "Budget" },
  { value: "mid", label: "Mid-range" },
  { value: "premium", label: "Premium" },
];

export function ProductFilters({ products }: { products: Product[] }) {
  const [category, setCategory] = useState<CategorySlug | "all">("all");
  const [budget, setBudget] = useState<BudgetBand | "all">("all");

  const filtered = useMemo(() => {
    return products.filter((p) => {
      if (category !== "all" && p.category !== category) return false;
      if (budget !== "all" && p.budget !== budget) return false;
      return true;
    });
  }, [products, category, budget]);

  return (
    <div>
      <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
        <label className="flex flex-col gap-1 text-sm text-[#5c4a3a]">
          Category
          <select
            value={category}
            onChange={(e) =>
              setCategory(e.target.value as CategorySlug | "all")
            }
            className="rounded-lg border border-amber-900/20 bg-white px-3 py-2 text-[#2a1a12]"
          >
            <option value="all">All categories</option>
            {categories.map((c) => (
              <option key={c.slug} value={c.slug}>
                {c.name}
              </option>
            ))}
          </select>
        </label>
        <label className="flex flex-col gap-1 text-sm text-[#5c4a3a]">
          Budget
          <select
            value={budget}
            onChange={(e) => setBudget(e.target.value as BudgetBand | "all")}
            className="rounded-lg border border-amber-900/20 bg-white px-3 py-2 text-[#2a1a12]"
          >
            {budgets.map((b) => (
              <option key={b.value} value={b.value}>
                {b.label}
              </option>
            ))}
          </select>
        </label>
        <p className="sm:ml-auto text-sm text-[#7a6555]">
          {filtered.length} product{filtered.length === 1 ? "" : "s"}
        </p>
      </div>
      {filtered.length === 0 ? (
        <p className="mt-10 text-center text-[#5c4a3a]">
          No products match these filters. Try another category or budget.
        </p>
      ) : (
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <ProductCard key={p.slug} product={p} showAffiliateCta />
          ))}
        </div>
      )}
    </div>
  );
}
