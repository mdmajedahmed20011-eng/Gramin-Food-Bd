import { useState } from "react";
import { cn } from "@/lib/utils";
import { BrandLogo } from "@/components/brand-logo";

export function FbReel({
  id,
  reelId,
  title,
  reelUrl,
  url,
  embedUrl,
  category,
  badge,
  posterUrl,
  views = "300+",
  duration = "0:45",
  className,
}: {
  id?: string | undefined;
  reelId?: string | undefined;
  title: string;
  reelUrl?: string | undefined;
  url?: string | undefined;
  embedUrl?: string | undefined;
  category?: string | undefined;
  badge?: string | undefined;
  posterUrl?: string | undefined;
  views?: string | undefined;
  duration?: string | undefined;
  className?: string | undefined;
}) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [loaded, setLoaded] = useState(false);

  // Derive target Facebook reel URL and embed iframe source
  const actualId = id || reelId;
  const targetUrl =
    reelUrl || url || (actualId ? `https://www.facebook.com/reel/${actualId}/` : "");
  const targetEmbed =
    embedUrl ||
    (targetUrl
      ? `https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(targetUrl)}&show_text=0&t=0&autoplay=true`
      : "");

  // Use verified local asset
  const fallbackPoster = posterUrl || (
    badge?.includes("1") || title.includes("Step")
      ? "/assets/banner.jpg"
      : badge?.includes("2") || title.includes("Visa")
      ? "/assets/succes.jpg"
      : "/assets/succes 2.jpg"
  );

  return (
    <figure
      className={cn(
        "overflow-hidden rounded-3xl border border-slate-200/90 bg-white shadow-sm transition-all duration-300 hover:shadow-2xl hover:border-amber-400/50 hover:-translate-y-1.5 flex flex-col group",
        className,
      )}
    >
      {/* 9:16 Vertical Reel Player Container */}
      <div className="relative aspect-[9/16] w-full bg-[#0C2340] overflow-hidden flex items-center justify-center">
        {isPlaying ? (
          <>
            {/* Blurred background so it is NEVER pure black while connecting */}
            <img
              src={fallbackPoster}
              alt=""
              className="absolute inset-0 h-full w-full object-cover blur-md opacity-40 scale-105"
            />

            {!loaded && (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#0C2340]/85 backdrop-blur-sm text-slate-300 p-4 text-center z-10">
                <div className="w-10 h-10 border-3 border-amber-400 border-t-transparent rounded-full animate-spin mb-3" />
                <span className="text-xs font-bold text-white">Loading Official Facebook Reel...</span>
                <span className="text-[0.68rem] text-amber-200 mt-1">Academic Allies Official Feed</span>
                <a
                  href={targetUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-flex items-center gap-1 text-[0.7rem] font-bold text-amber-400 hover:text-amber-300 underline"
                >
                  Open Directly on Facebook ↗
                </a>
              </div>
            )}

            <button
              type="button"
              onClick={() => {
                setIsPlaying(false);
                setLoaded(false);
              }}
              className="absolute top-3 right-3 z-30 flex items-center gap-1 rounded-full bg-black/70 backdrop-blur-md px-2.5 py-1 text-[0.68rem] font-bold text-white border border-white/25 hover:bg-amber-500 hover:text-slate-950 transition-colors shadow-lg"
              title="Return to poster"
            >
              ✕ Cover
            </button>

            <iframe
              src={targetEmbed}
              title={title}
              onLoad={() => setLoaded(true)}
              className="absolute inset-0 h-full w-full border-0 z-20"
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              allowFullScreen
            />
          </>
        ) : (
          /* High-Resolution Branded Reel Poster Cover */
          <div
            onClick={() => setIsPlaying(true)}
            className="absolute inset-0 cursor-pointer overflow-hidden group/poster"
          >
            {/* Background Image with Zoom */}
            <img
              src={fallbackPoster}
              alt={title}
              className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover/poster:scale-110"
              loading="lazy"
              onError={(e) => {
                e.currentTarget.src = "/assets/banner.jpg";
              }}
            />

            {/* Gradient Scrim */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0C2340]/95 via-[#0C2340]/40 to-black/30" />

            {/* Top Bar inside Reel */}
            <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
              <div className="flex items-center gap-2 rounded-full bg-slate-950/70 backdrop-blur-md px-2.5 py-1 border border-amber-400/30">
                <BrandLogo size={20} />
                <span className="text-[0.65rem] font-bold text-white tracking-wide">Academic Allies</span>
              </div>

              <div className="flex items-center gap-1.5 rounded-full bg-slate-950/70 backdrop-blur-md px-2.5 py-1 text-[0.65rem] font-bold text-amber-300 border border-amber-400/30">
                <span>👁</span>
                <span>{views}</span>
              </div>
            </div>

            {/* Center Pulsing Play Button */}
            <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
              <div className="relative flex items-center justify-center">
                {/* Ripple ring */}
                <div className="absolute h-20 w-20 rounded-full bg-amber-400/30 animate-ping" />
                <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-amber-400 text-[#0C2340] shadow-2xl transition-transform duration-300 group-hover/poster:scale-115">
                  <svg className="w-7 h-7 ml-1 fill-current" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
              <span className="mt-3 text-xs font-bold text-amber-200 tracking-wider uppercase drop-shadow-md bg-slate-950/70 backdrop-blur-xs px-3 py-1 rounded-full border border-amber-400/25">
                Click to Watch Reel
              </span>
            </div>

            {/* Bottom Floating Info inside Reel Frame */}
            <div className="absolute bottom-4 left-4 right-4 z-10 space-y-1">
              <span className="inline-block rounded-md bg-amber-400 px-2 py-0.5 text-[0.62rem] font-black text-slate-950 uppercase tracking-wider">
                {badge || "Official Video"}
              </span>
              <p className="text-xs font-bold text-white leading-snug drop-shadow-sm line-clamp-2">
                {title}
              </p>
              <div className="flex items-center justify-between text-[0.68rem] text-slate-300 pt-1">
                <span>Academic Allies Official</span>
                <span className="font-mono text-[0.65rem] bg-black/50 px-2 py-0.5 rounded-md border border-white/20">
                  {duration}
                </span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Caption & External Facebook Link Footer */}
      <figcaption className="p-5 bg-white flex-1 flex flex-col justify-between gap-3">
        <div>
          <div className="flex items-center justify-between gap-2 mb-1.5">
            {badge && (
              <span className="inline-flex items-center rounded-full bg-amber-50 border border-amber-200 px-2.5 py-0.5 text-[0.68rem] font-bold text-amber-800">
                {badge}
              </span>
            )}
            {category && (
              <span className="text-[0.7rem] font-bold text-[#0C2340]">
                {category}
              </span>
            )}
          </div>
          <h4 className="font-display font-bold text-sm text-slate-900 leading-snug group-hover:text-amber-600 transition-colors line-clamp-2">
            {title}
          </h4>
        </div>

        {targetUrl && (
          <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
            <a
              href={targetUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0C2340] hover:text-amber-600 transition-colors"
            >
              <span>Watch on Facebook</span>
              <span>↗</span>
            </a>
            <span className="text-[0.65rem] text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">Verified Reel</span>
          </div>
        )}
      </figcaption>
    </figure>
  );
}
