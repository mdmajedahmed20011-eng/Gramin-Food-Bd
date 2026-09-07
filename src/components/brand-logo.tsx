import { cn } from "@/lib/utils";
import { company } from "@/lib/site-data";

/**
 * Academic Allies (AA) — Official Brand Logo Component.
 * Features the authentic Academic Allies Shield Crest: Golden Plane, Open Book, Stars, and "ADVANCING EDUCATION".
 */
export function BrandLogo({
  className,
  size = 48,
  withText = true,
  textClassName,
  subtitle,
  variant = "light",
}: {
  className?: string;
  size?: number;
  withText?: boolean;
  textClassName?: string;
  subtitle?: string;
  variant?: "light" | "dark";
}) {
  return (
    <div className={cn("inline-flex items-center gap-3 select-none group", className)}>
      <div
        className={cn(
          "relative inline-flex items-center justify-center shrink-0 overflow-hidden rounded-xl bg-[#0C2340] border-2 border-[#D4AF37]/50 shadow-md transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg group-hover:border-[#D4AF37]",
        )}
        style={{ width: size, height: size }}
      >
        <img
          src="/assets/logo.jpg"
          alt={`${company.name} Official Shield Logo`}
          width={size}
          height={size}
          className="h-full w-full object-contain p-0.5"
          onError={(e) => {
            e.currentTarget.src = "/latest-assets/logo.jpg";
          }}
        />
      </div>

      {withText && (
        <div className={cn("flex flex-col text-left min-w-0", textClassName)}>
          <div className="flex items-center gap-1.5 leading-none">
            <span
              className={cn(
                "font-display font-black tracking-tight text-sm sm:text-base md:text-lg whitespace-nowrap",
                variant === "dark" ? "text-white" : "text-[#0C2340]",
              )}
            >
              ACADEMIC
            </span>
            <span className="font-display font-black text-sm sm:text-base md:text-lg text-[#D4AF37] tracking-tight whitespace-nowrap">
              ALLIES
            </span>
          </div>
          <span
            className={cn(
              "text-[0.6rem] sm:text-[0.68rem] tracking-[0.14em] uppercase font-bold mt-1 truncate max-w-[200px] xs:max-w-[250px] sm:max-w-none flex items-center gap-1.5",
              variant === "dark" ? "text-amber-200/90" : "text-slate-600",
            )}
          >
            <span>{subtitle || "Advancing Education"}</span>
            <span className="text-[#D4AF37]">•</span>
            <span className="text-[#059669] font-bold">Chattogram</span>
          </span>
        </div>
      )}
    </div>
  );
}
