import { cn } from "@/lib/utils";

/**
 * Future Edge Education & Consultancy — Official Brand Logo Component.
 * Features the signature FE monogram in white and gradient gold enclosed in a gold circular ring.
 */
export function BrandLogo({
  className,
  size = 46,
  withText = false,
  textClassName,
}: {
  className?: string;
  size?: number;
  withText?: boolean;
  textClassName?: string;
}) {
  return (
    <div className={cn("inline-flex items-center gap-3 select-none", className)}>
      <div
        className={cn(
          "relative inline-flex items-center justify-center shrink-0 overflow-hidden rounded-full bg-black border-2 border-[#D4AF37] shadow-[0_0_15px_rgba(212,175,55,0.25)] transition-transform duration-300 hover:scale-105",
        )}
        style={{ width: size, height: size }}
      >
        <img
          src="/brand-assets/logo.jpg"
          alt="Future Edge Education Official Logo"
          width={size}
          height={size}
          className="h-full w-full object-cover rounded-full"
          onError={(e) => {
            e.currentTarget.src = "/brand-assets/logo.jpg";
          }}
        />
      </div>

      {withText && (
        <div className={cn("flex flex-col text-left", textClassName)}>
          <span className="font-display font-extrabold tracking-tight text-slate-900 text-base leading-none sm:text-lg">
            FUTURE EDGE
          </span>
          <span className="text-[0.62rem] sm:text-[0.68rem] tracking-[0.16em] uppercase font-bold text-[#AA771C] mt-0.5">
            Education & Consultancy
          </span>
        </div>
      )}
    </div>
  );
}
