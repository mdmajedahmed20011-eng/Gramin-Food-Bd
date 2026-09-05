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
  id?: string;
  reelId?: string;
  title: string;
  reelUrl?: string;
  url?: string;
  embedUrl?: string;
  category?: string;
  badge?: string;
  posterUrl?: string;
  views?: string;
  duration?: string;
  className?: string;
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

  // Use Facebook's graph API to get actual video thumbnail for the reel
  const fallbackPoster = posterUrl || (
    actualId
      ? `https://graph.facebook.com/${actualId}/picture`
      : badge?.includes("1") || title.includes("Profile")
      ? "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80"
      : badge?.includes("2") || title.includes("Study Gap")
      ? "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80"
      : "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=800&q=80"
  );

  return (
    <figure
      className={cn(
        "overflow-hidden rounded-3xl border border-slate-200/90 bg-white shadow-sm transition-all duration-300 hover:shadow-2xl hover:border-red-500/40 hover:-translate-y-1.5 flex flex-col group",
        className,
      )}
    >
      {/* 9:16 Vertical Reel Player Container */}
      <div className="relative aspect-[9/16] w-full bg-slate-950 overflow-hidden flex items-center justify-center">
        {isPlaying ? (
          <>
            {/* Blurred background so it is NEVER pure black while connecting */}
            <img
              src={fallbackPoster}
              alt=""
              className="absolute inset-0 h-full w-full object-cover blur-md opacity-40 scale-105"
            />

            {!loaded && (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-950/70 backdrop-blur-sm text-slate-300 p-4 text-center z-10">
                <div className="w-10 h-10 border-3 border-red-500 border-t-transparent rounded-full animate-spin mb-3" />
                <span className="text-xs font-bold text-white">Loading Official Facebook Reel...</span>
                <span className="text-[0.68rem] text-slate-300 mt-1">Alex Global Consultancy Official Feed</span>
                <a
                  href={targetUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-flex items-center gap-1 text-[0.7rem] font-bold text-red-400 hover:text-red-300 underline"
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
              className="absolute top-3 right-3 z-30 flex items-center gap-1 rounded-full bg-black/70 backdrop-blur-md px-2.5 py-1 text-[0.68rem] font-bold text-white border border-white/25 hover:bg-red-600 transition-colors shadow-lg"
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
          /* High-Resolution Branded Reel Poster Cover (Guaranteed Never Black) */
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
            />

            {/* Gradient Scrim */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/40" />

            {/* Top Bar inside Reel */}
            <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
              <div className="flex items-center gap-2 rounded-full bg-black/60 backdrop-blur-md px-2.5 py-1 border border-white/20">
                <BrandLogo size={20} />
                <span className="text-[0.65rem] font-bold text-white tracking-wide">Alex Global</span>
              </div>

              <div className="flex items-center gap-1.5 rounded-full bg-black/60 backdrop-blur-md px-2.5 py-1 text-[0.65rem] font-bold text-white border border-white/20">
                <span>👁</span>
                <span>{views}</span>
              </div>
            </div>

            {/* Center Pulsing Play Button */}
            <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
              <div className="relative flex items-center justify-center">
                {/* Ripple ring */}
                <div className="absolute h-20 w-20 rounded-full bg-red-600/40 animate-ping" />
                <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-white/95 text-red-600 shadow-2xl transition-transform duration-300 group-hover/poster:scale-115">
                  <svg className="w-7 h-7 ml-1 fill-current" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
              <span className="mt-3 text-xs font-bold text-white tracking-wider uppercase drop-shadow-md bg-black/50 backdrop-blur-xs px-3 py-1 rounded-full border border-white/20">
                Click to Play
              </span>
            </div>

            {/* Bottom Floating Info inside Reel Frame */}
            <div className="absolute bottom-4 left-4 right-4 z-10 space-y-1">
              <span className="inline-block rounded-md bg-red-600 px-2 py-0.5 text-[0.62rem] font-black text-white uppercase tracking-wider">
                {badge || "Official Video"}
              </span>
              <p className="text-xs font-bold text-white leading-snug drop-shadow-sm line-clamp-2">
                {title}
              </p>
              <div className="flex items-center justify-between text-[0.68rem] text-slate-300 pt-1">
                <span>Alex Global Consultancy</span>
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
              <span className="inline-flex items-center rounded-full bg-red-50 border border-red-200 px-2.5 py-0.5 text-[0.68rem] font-bold text-red-700">
                {badge}
              </span>
            )}
            {category && (
              <span className="text-[0.7rem] font-bold text-[#043E8B]">
                {category}
              </span>
            )}
          </div>
          <h4 className="font-display font-bold text-sm text-slate-900 leading-snug group-hover:text-red-600 transition-colors line-clamp-2">
            {title}
          </h4>
        </div>

        {targetUrl && (
          <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
            <a
              href={targetUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-red-600 hover:text-red-700 transition-colors"
            >
              <span>Watch on Facebook</span>
              <span>↗</span>
            </a>
            <span className="text-[0.65rem] text-slate-500 font-medium">Verified Reel</span>
          </div>
        )}
      </figcaption>
    </figure>
  );
}
