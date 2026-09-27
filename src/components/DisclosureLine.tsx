import Link from "next/link";
import { AFFILIATE_DISCLOSURE_SHORT } from "@/lib/affiliate";

/** Compact FTC line — visible without competing with CTAs */
export function DisclosureLine({ className = "" }: { className?: string }) {
  return (
    <p
      className={`text-xs leading-relaxed text-[#7a6555] ${className}`}
      role="note"
    >
      {AFFILIATE_DISCLOSURE_SHORT}{" "}
      <Link
        href="/affiliate-disclosure"
        className="underline underline-offset-2 hover:text-[#3d2314]"
      >
        Disclosure
      </Link>
    </p>
  );
}
