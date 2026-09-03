import { useState } from "react";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/ui-blocks";
import { company } from "@/lib/site-data";

const posters = [
  {
    key: "banner",
    src: "/brand-assets/banner.jpg",
    label: "Fulfill Your Study Abroad Dream With Us! — Official Global Destinations Banner",
  },
  {
    key: "bnu-session",
    src: "/brand-assets/772204691_122282788340103184_9204887386025201573_n.jpg",
    label: "Session on BNU (Buckinghamshire New University) with Ms. Ayesha Rauf",
  },
  {
    key: "europe",
    src: "/brand-assets/787160278_122284754246103184_2179868027112497957_n.jpg",
    label: "Study in Europe: Denmark, Finland, Sweden, Hungary (With & Without IELTS)",
  },
  {
    key: "team-expo",
    src: "/brand-assets/766952914_122282362520103184_2941471200207168176_n.jpg",
    label: "'Your Future Beyond Borders' — Future Edge Counseling Team at Expo",
  },
  {
    key: "award",
    src: "/brand-assets/768667718_122282362400103184_8409750641330812941_n.jpg",
    label: "LURS Student Research Conference 2026 Award & Recognition Ceremony",
  },
  {
    key: "students",
    src: "/brand-assets/766710624_122282362364103184_6697847817027175712_n.jpg",
    label: "'Your Future Starts Here' — Students with Future Edge Brand Packs",
  },
];

export function PosterWall() {
  const [active, setActive] = useState<string | null>(null);
  const activePoster = posters.find((p) => p.key === active);

  return (
    <section className="bg-slate-50 py-14 sm:py-20 border-y border-slate-200">
      <Reveal className="section-shell">
        <SectionHeading
          eyebrow="Official Brand Assets & Memorabilia"
          title="Events, Partner Sessions & Campus Moments"
          subtitle="Explore official partner sessions, international delegates, and conference recognitions from Future Edge Education — click any poster to enlarge."
        />
      </Reveal>

      <div className="mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 sm:px-10 pb-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {posters.map((p, i) => (
          <Reveal key={p.key} delay={Math.min(i, 5) * 60} className="snap-start shrink-0">
            <button
              type="button"
              onClick={() => setActive(p.key)}
              className="card-clean group block w-64 sm:w-72 overflow-hidden rounded-3xl text-left transition-all hover:scale-[1.02] cursor-pointer border border-[#D4AF37]/20 hover:border-[#D4AF37]"
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
                <span className="mt-2 inline-flex items-center gap-1 text-[0.68rem] font-bold text-[#AA771C]">
                  <span>✨</span> Future Edge Verified Asset
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
          className="fixed inset-0 z-[110] flex items-center justify-center overflow-y-auto bg-slate-950/90 p-4 backdrop-blur-md cursor-zoom-out"
        >
          <div className="relative max-w-3xl max-h-[90vh] overflow-hidden rounded-3xl border border-[#D4AF37]/40 bg-slate-900 shadow-2xl p-2">
            <img
              src={activePoster.src}
              alt={activePoster.label}
              className="max-h-[78vh] w-auto max-w-full rounded-2xl object-contain mx-auto"
            />
            <div className="p-3 text-center">
              <p className="text-sm font-bold text-white">{activePoster.label}</p>
              <p className="text-xs text-[#F5D365] mt-0.5">{company.legalName} · {company.address.full}</p>
            </div>
            <button
              type="button"
              aria-label="Close"
              onClick={() => setActive(null)}
              className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-slate-950/80 text-white border border-[#D4AF37]/40 shadow-md hover:bg-[#D4AF37] hover:text-[#090C10] transition-colors"
            >
              ✕
            </button>
          </div>
        </div>
      ) : null}
    </section>
  );
}
