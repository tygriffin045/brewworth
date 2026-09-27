import { SiteNav } from "./SiteNav";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-amber-900/15 bg-[#f6efe6]/90 backdrop-blur-md">
      <SiteNav />
    </header>
  );
}
