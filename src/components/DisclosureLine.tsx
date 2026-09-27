import { AFFILIATE_DISCLOSURE_SHORT } from "@/lib/affiliate";

/** Single, subtle FTC line shown once near the top of commercial pages. */
export function DisclosureLine({ className = "" }: { className?: string }) {
  return (
    <p className={`text-xs text-stone-500 ${className}`}>
      {AFFILIATE_DISCLOSURE_SHORT}
    </p>
  );
}
