import { cn } from "@/lib/utils";

/**
 * Affordable International — Official Logo Component.
 * Features the graduation cap, globe silhouette, and ascending aircraft.
 */
export function BrandLogo({
  className,
  size = 46,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <div
      className={cn(
        "relative inline-flex items-center justify-center shrink-0 select-none overflow-hidden rounded-2xl bg-white border border-slate-200 shadow-sm transition-transform duration-300 hover:scale-105 p-1",
        className,
      )}
      style={{ width: size, height: size }}
    >
      <img
        src="/assets/affordable-logo.jpg"
        alt="Affordable International Official Logo"
        width={size}
        height={size}
        className="h-full w-full object-contain"
        onError={(e) => {
          e.currentTarget.src = "/assets/logo.jpg";
        }}
      />
    </div>
  );
}
