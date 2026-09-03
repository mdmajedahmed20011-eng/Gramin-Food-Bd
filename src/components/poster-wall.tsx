import { useState } from "react";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/ui-blocks";
import { company } from "@/lib/site-data";

const posters = [
  {
    key: "orientation",
    src: "/assets/ielts-orientation-poster.jpg",
    label: "IELTS Free Orientation Class & Strategy Poster",
  },
  {
    key: "banner",
    src: "/assets/affordable-banner.jpg",
    label: "Explore Your Global Future — Billboard Banner",
  },
  {
    key: "team",
    src: "/assets/team-instructors.jpg",
    label: "Affordable Global Studies Instructors & Academic Faculty",
  },
  {
    key: "kids1",
    src: "/assets/kids-class-1.jpg",
    label: "Kids Spoken & Junior English Interactive Session",
  },
  {
    key: "nstu",
    src: "/assets/nstu-expo-stall.jpg",
    label: "Education Expo Stall near NSTU Noakhali",
  },
];

export function PosterWall() {
  const [active, setActive] = useState<string | null>(null);
  const activePoster = posters.find((p) => p.key === active);

  return (
    <section className="bg-slate-50 py-14 sm:py-20 border-y border-slate-200">
      <Reveal className="section-shell">
        <SectionHeading
          eyebrow="Official Announcements"
          title="Campus Notices & Event Highlights"
          subtitle="Explore official banners, orientation posters, and academic moments from Affordable International — tap any poster to enlarge."
        />
      </Reveal>

      <div className="mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 sm:px-10 pb-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {posters.map((p, i) => (
          <Reveal key={p.key} delay={Math.min(i, 5) * 60} className="snap-start shrink-0">
            <button
              type="button"
              onClick={() => setActive(p.key)}
              className="card-clean group block w-64 sm:w-72 overflow-hidden rounded-3xl text-left transition-all hover:scale-[1.02] cursor-pointer"
            >
              <div className="relative aspect-square w-full overflow-hidden bg-slate-950">
                <img
                  src={p.src}
                  alt={p.label}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-4 bg-white">
                <span className="block text-xs font-bold text-slate-900 leading-snug line-clamp-2">
                  {p.label}
                </span>
                <span className="mt-2 inline-flex items-center gap-1 text-[0.68rem] font-bold text-[#ED1C24]">
                  <span>✨</span> Affordable International Verified
                </span>
              </div>
            </button>
          </Reveal>
        ))}
      </div>

      {/* Interactive Lightbox Modal */}
      {activePoster ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={activePoster.label}
          onClick={() => setActive(null)}
          className="fixed inset-0 z-[110] flex items-center justify-center overflow-y-auto bg-slate-950/85 p-4 backdrop-blur-md cursor-zoom-out"
        >
          <div className="relative max-w-2xl max-h-[90vh] overflow-hidden rounded-3xl border border-white/20 bg-slate-900 shadow-2xl p-2">
            <img
              src={activePoster.src}
              alt={activePoster.label}
              className="max-h-[80vh] w-auto max-w-full rounded-2xl object-contain"
            />
            <div className="p-3 text-center">
              <p className="text-sm font-bold text-white">{activePoster.label}</p>
              <p className="text-xs text-sky-400 mt-0.5">{company.name} · Ashfak Plaza, Maijdee Bazar</p>
            </div>
            <button
              type="button"
              aria-label="Close"
              onClick={() => setActive(null)}
              className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-slate-950/80 text-white border border-white/20 shadow-md hover:bg-[#ED1C24] transition-colors"
            >
              ✕
            </button>
          </div>
        </div>
      ) : null}
    </section>
  );
}
