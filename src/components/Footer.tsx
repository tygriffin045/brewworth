import Link from "next/link";
import { categories } from "@/data/categories";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-amber-900/20 bg-[#2a1a12] text-[#d4c4b0]">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3">
        <div>
          <p className="font-serif text-2xl text-[#f6efe6]">Brew<span className="text-[#d4af37]">Worth</span></p>
          <p className="mt-2 text-sm text-[#a89078]">
            Honest picks for better home coffee. We research espresso gear so
            you can brew café-quality drinks without the hype.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-[#7a6555]">
            Categories
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            {categories.map((c) => (
              <li key={c.slug}>
                <Link
                  href={`/categories/${c.slug}`}
                  className="hover:text-[#f6efe6]"
                >
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-[#7a6555]">
            Site
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link href="/products" className="hover:text-[#f6efe6]">
                All products
              </Link>
            </li>
            <li>
              <Link href="/compare" className="hover:text-[#f6efe6]">
                Machine comparison
              </Link>
            </li>
            <li>
              <Link href="/guides" className="hover:text-[#f6efe6]">
                Buying guides
              </Link>
            </li>
            <li>
              <Link
                href="/affiliate-disclosure"
                className="hover:text-[#f6efe6]"
              >
                Affiliate disclosure
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-[#3d2314] py-4 text-center text-xs text-[#5c4a3a]">
        © {new Date().getFullYear()} BrewWorth. As an Amazon Associate I earn
        from qualifying purchases.
      </div>
    </footer>
  );
}
