"use client";

import Link from "next/link";
import {
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
  type MouseEvent as ReactMouseEvent,
} from "react";
import { createPortal } from "react-dom";
import { getAllNavGroupsWithLinks } from "@/data/nav";

const groups = getAllNavGroupsWithLinks();

export function SiteNav() {
  const [shopOpen, setShopOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState<string | null>(null);
  const shopPanelId = useId();
  const shopRef = useRef<HTMLDivElement>(null);
  const shopButtonRef = useRef<HTMLButtonElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  // Hover/focus opens the menu just before a mouse click lands. Track open
  // state and when it opened in refs (not state) so that click doesn't
  // immediately toggle it closed again.
  const shopOpenRef = useRef(false);
  const openedAt = useRef(0);

  const clearCloseTimer = useCallback(() => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  }, []);

  const openShop = useCallback(() => {
    clearCloseTimer();
    if (!shopOpenRef.current) {
      shopOpenRef.current = true;
      openedAt.current = Date.now();
    }
    setShopOpen(true);
  }, [clearCloseTimer]);

  const scheduleCloseShop = useCallback(() => {
    clearCloseTimer();
    closeTimer.current = setTimeout(() => {
      shopOpenRef.current = false;
      setShopOpen(false);
    }, 150);
  }, [clearCloseTimer]);

  const closeShop = useCallback(() => {
    clearCloseTimer();
    shopOpenRef.current = false;
    setShopOpen(false);
  }, [clearCloseTimer]);

  const toggleShop = useCallback(
    (e: ReactMouseEvent<HTMLButtonElement>) => {
      // Keyboard activation (Enter/Space) reports detail === 0: always toggle.
      // The hover-open guard only applies to real mouse/pointer clicks.
      const isKeyboard = e.detail === 0;
      const justOpened = Date.now() - openedAt.current < 400;
      if (shopOpenRef.current && (isKeyboard || !justOpened)) {
        closeShop();
      } else {
        openShop();
      }
    },
    [openShop, closeShop],
  );

  const openMobile = useCallback((sectionId?: string) => {
    setMobileSection(sectionId ?? null);
    setMobileOpen(true);
  }, []);

  const closeMobile = useCallback(() => {
    setMobileOpen(false);
    setMobileSection(null);
  }, []);

  useEffect(() => {
    if (!shopOpen) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        closeShop();
        shopButtonRef.current?.focus();
      }
    }
    function onPointer(e: MouseEvent) {
      if (shopRef.current && !shopRef.current.contains(e.target as Node)) {
        closeShop();
      }
    }
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onPointer);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onPointer);
    };
  }, [shopOpen, closeShop]);

  useEffect(() => {
    if (!mobileOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") closeMobile();
    }
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener("keydown", onKey);
    };
  }, [mobileOpen, closeMobile]);

  // When sheet opens with a section target, scroll to it after paint
  useEffect(() => {
    if (!mobileOpen || !mobileSection) return;
    const id = `mobile-nav-${mobileSection}`;
    const t = requestAnimationFrame(() => {
      document
        .getElementById(id)
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
    return () => cancelAnimationFrame(t);
  }, [mobileOpen, mobileSection]);

  function scrollToMobileSection(id: string) {
    setMobileSection(id);
    requestAnimationFrame(() => {
      document
        .getElementById(`mobile-nav-${id}`)
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  return (
    <>
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link href="/" className="group flex shrink-0 items-baseline gap-2">
          <span className="font-serif text-xl font-semibold tracking-tight text-[#2a1a12] sm:text-2xl">
            BrewWorth
          </span>
          <span className="hidden text-xs text-[#f6efe6]0 sm:inline">
            home coffee picks
          </span>
        </Link>

        <nav
          className="hidden items-center gap-0.5 text-sm text-[#4a3728] lg:flex"
          aria-label="Primary"
        >
          <div
            ref={shopRef}
            className="relative"
            onMouseEnter={openShop}
            onMouseLeave={scheduleCloseShop}
          >
            <button
              ref={shopButtonRef}
              type="button"
              className="inline-flex items-center gap-1 rounded-md px-2.5 py-1.5 hover:bg-[#ebe0d2]/70 hover:text-[#2a1a12] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-800/50"
              aria-expanded={shopOpen}
              aria-controls={shopPanelId}
              aria-haspopup="true"
              onClick={toggleShop}
              onFocus={openShop}
            >
              Shop
              <ChevronIcon open={shopOpen} />
            </button>

            {shopOpen && (
              <div
                id={shopPanelId}
                role="region"
                aria-label="Shop categories"
                className="absolute left-0 top-full z-50 pt-2"
                onMouseEnter={openShop}
                onMouseLeave={scheduleCloseShop}
              >
                <div className="w-[min(92vw,38rem)] rounded-xl border border-amber-900/15 bg-[#f6efe6] p-4 shadow-lg shadow-amber-950/10 ring-1 ring-amber-900/5">
                  <div className="grid grid-cols-3 gap-x-6 gap-y-5">
                    {groups.map((group) => (
                      <div key={group.id}>
                        <p className="text-[11px] font-semibold uppercase tracking-wider text-[#f6efe6]0">
                          {group.label}
                        </p>
                        <ul className="mt-1.5 space-y-0.5">
                          {group.links.map((link) => (
                            <li key={link.slug}>
                              <Link
                                href={link.href}
                                className="block rounded-md px-1.5 py-1 text-sm text-[#3d2a1e] hover:bg-[#ebe0d2] hover:text-[#2a1a12]"
                                onClick={closeShop}
                              >
                                {link.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 flex items-center justify-between border-t border-amber-900/15 pt-3">
                    <Link
                      href="/products"
                      className="text-xs font-medium text-[#5c4a3a] underline-offset-2 hover:text-[#2a1a12] hover:underline"
                      onClick={closeShop}
                    >
                      View all products →
                    </Link>
                    <Link
                      href="/compare"
                      className="text-xs text-[#f6efe6]0 underline-offset-2 hover:text-[#3d2a1e] hover:underline"
                      onClick={closeShop}
                    >
                      Compare picks
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>

          <NavLink href="/compare">Compare</NavLink>
          <NavLink href="/guides">Guides</NavLink>
          <NavLink href="/products">All products</NavLink>
        </nav>

        <div className="flex items-center gap-2 text-sm sm:gap-3">
          <Link
            href="/affiliate-disclosure"
            className="hidden text-xs text-[#f6efe6]0 underline-offset-2 hover:text-[#3d2a1e] hover:underline sm:inline"
          >
            Disclosure
          </Link>
          <Link
            href="/products"
            className="rounded-full bg-[#3d2314] px-3.5 py-1.5 text-xs font-medium text-[#f6efe6] hover:bg-[#2a1a12] sm:text-sm"
          >
            Browse picks
          </Link>
          <button
            type="button"
            className="inline-flex items-center gap-1.5 rounded-full border border-amber-900/20 bg-white/60 px-3 py-1.5 text-xs font-medium text-[#3d2a1e] hover:bg-white lg:hidden"
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav-sheet"
            onClick={() => openMobile()}
          >
            <MenuIcon />
            Menu
          </button>
        </div>
      </div>

      {/* Mobile: 3 group chips instead of 7 category chips */}
      <div className="flex gap-2 overflow-x-auto border-t border-amber-900/10 px-4 py-2 lg:hidden">
        {groups.map((group) => (
          <button
            key={group.id}
            type="button"
            onClick={() => openMobile(group.id)}
            className="whitespace-nowrap rounded-full bg-[#ebe0d2] px-3 py-1 text-xs text-[#4a3728] ring-1 ring-amber-900/10 hover:bg-[#e2d4c2]"
          >
            {group.label}
          </button>
        ))}
      </div>

      {/* Portaled to <body>: the header's backdrop-blur creates a containing
          block that would otherwise trap this fixed sheet inside the header. */}
      {mobileOpen &&
        createPortal(
          <div
            className="fixed inset-0 z-[60] lg:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
            id="mobile-nav-sheet"
          >
            <button
              type="button"
              className="absolute inset-0 bg-[#2a1a12]/40"
              aria-label="Close menu"
              onClick={closeMobile}
            />
            <div className="absolute inset-y-0 right-0 flex w-full max-w-md flex-col bg-[#f6efe6] shadow-2xl">
              <div className="flex items-center justify-between border-b border-amber-900/15 px-4 py-3">
                <p className="font-serif text-lg font-semibold text-[#2a1a12]">
                  Menu
                </p>
                <button
                  type="button"
                  onClick={closeMobile}
                  className="rounded-full px-3 py-1.5 text-sm text-[#5c4a3a] hover:bg-[#ebe0d2] hover:text-[#2a1a12]"
                >
                  Close
                </button>
              </div>

              <div className="flex gap-2 overflow-x-auto border-b border-amber-900/15 px-4 py-2">
                {groups.map((g) => (
                  <button
                    key={g.id}
                    type="button"
                    onClick={() => scrollToMobileSection(g.id)}
                    className={`whitespace-nowrap rounded-full px-3 py-1 text-xs ${
                      mobileSection === g.id
                        ? "bg-[#3d2314] text-[#f6efe6]"
                        : "bg-[#ebe0d2] text-[#4a3728]"
                    }`}
                  >
                    {g.label}
                  </button>
                ))}
              </div>

              <div className="flex-1 overflow-y-auto px-4 py-4">
                <ul className="mb-6 space-y-1 text-sm">
                  <li>
                    <Link
                      href="/compare"
                      className="block rounded-lg px-3 py-2.5 font-medium text-[#3d2a1e] hover:bg-[#ebe0d2]/70"
                      onClick={closeMobile}
                    >
                      Compare
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/guides"
                      className="block rounded-lg px-3 py-2.5 font-medium text-[#3d2a1e] hover:bg-[#ebe0d2]/70"
                      onClick={closeMobile}
                    >
                      Guides
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/products"
                      className="block rounded-lg px-3 py-2.5 font-medium text-[#3d2a1e] hover:bg-[#ebe0d2]/70"
                      onClick={closeMobile}
                    >
                      All products
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/affiliate-disclosure"
                      className="block rounded-lg px-3 py-2.5 text-[#5c4a3a] hover:bg-[#ebe0d2]/70"
                      onClick={closeMobile}
                    >
                      Disclosure
                    </Link>
                  </li>
                </ul>

                <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-[#f6efe6]0">
                  Shop by category
                </p>
                <div className="space-y-6">
                  {groups.map((group) => (
                    <section key={group.id} id={`mobile-nav-${group.id}`}>
                      <h3 className="font-serif text-base font-semibold text-[#2a1a12]">
                        {group.label}
                      </h3>
                      <p className="mt-0.5 text-xs text-[#f6efe6]0">
                        {group.description}
                      </p>
                      <ul className="mt-2 space-y-0.5">
                        {group.links.map((link) => (
                          <li key={link.slug}>
                            <Link
                              href={link.href}
                              className="block rounded-lg px-2 py-2 text-sm text-[#4a3728] hover:bg-[#ebe0d2]/70 hover:text-[#2a1a12]"
                              onClick={closeMobile}
                            >
                              {link.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </section>
                  ))}
                </div>
              </div>

              <div className="border-t border-amber-900/15 p-4">
                <Link
                  href="/products"
                  onClick={closeMobile}
                  className="flex w-full items-center justify-center rounded-full bg-[#3d2314] px-4 py-2.5 text-sm font-medium text-[#f6efe6] hover:bg-[#2a1a12]"
                >
                  Browse picks
                </Link>
              </div>
            </div>
          </div>,
          document.body,
        )}
    </>
  );
}

function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="rounded-md px-2.5 py-1.5 hover:bg-[#ebe0d2]/70 hover:text-[#2a1a12]"
    >
      {children}
    </Link>
  );
}

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 12 12"
      className={`h-3 w-3 text-[#f6efe6]0 transition-transform ${open ? "rotate-180" : ""}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path
        d="M2.5 4.5 L6 8 L9.5 4.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 16 16"
      className="h-3.5 w-3.5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M2 4h12M2 8h12M2 12h12" strokeLinecap="round" />
    </svg>
  );
}
