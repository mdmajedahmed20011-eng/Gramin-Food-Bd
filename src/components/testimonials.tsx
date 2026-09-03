import { Reveal } from "@/components/reveal";
import { SectionHeading, IconCheck } from "@/components/ui-blocks";
import { verifiedStudentReviews } from "@/lib/site-data";

function Card({ t }: { t: (typeof verifiedStudentReviews)[number] }) {
  const initials = t.name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("");

  return (
    <figure className="mx-3 flex w-[21rem] shrink-0 flex-col justify-between rounded-3xl border border-[#D4AF37]/25 bg-white p-6 shadow-sm transition-all hover:border-[#D4AF37] hover:shadow-md sm:w-[25rem]">
      <div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1 text-[#D4AF37] text-sm" aria-label={`${t.rating} out of 5 stars`}>
            {Array.from({ length: t.rating }).map((_, i) => (
              <span key={i}>★</span>
            ))}
          </div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#FCF8EE] border border-[#D4AF37]/40 px-2.5 py-0.5 text-[0.65rem] font-bold text-[#8A6818]">
            <IconCheck className="w-3 h-3 text-[#8A6818]" />
            <span>{t.highlight}</span>
          </span>
        </div>

        <blockquote className="mt-4 text-xs sm:text-sm leading-relaxed text-slate-700">
          “{t.text}”
        </blockquote>
      </div>

      <figcaption className="mt-5 flex items-center gap-3 border-t border-slate-100 pt-4">
        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-[#090C10] to-[#151A24] text-xs font-bold text-[#F5D365] shadow-sm border border-[#D4AF37]/40">
          {initials}
        </span>
        <div className="min-w-0 flex-1">
          <span className="block truncate text-sm font-bold text-slate-900">{t.name}</span>
          <span className="block truncate text-xs text-slate-500">
            {t.course}
          </span>
          <span className="block text-xs font-semibold text-[#8A6818]">
            {t.flag} {t.destination}
          </span>
        </div>
      </figcaption>
    </figure>
  );
}

export function Testimonials() {
  const loop = [...verifiedStudentReviews, ...verifiedStudentReviews];

  return (
    <section className="overflow-hidden bg-[#FAFAFC] py-16 sm:py-24 border-y border-slate-200">
      <Reveal className="section-shell">
        <SectionHeading
          eyebrow="Verified Facebook Reviews (100% Recommended)"
          title="Student & Guardian Success Stories"
          subtitle="Real reviews from students granted 3-day UK visas and admissions across University of East London, Southampton Solent, BNU, and European universities guided by Future Edge Education."
        />
      </Reveal>

      <Reveal delay={120} className="group relative mt-10">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#FAFAFC] to-transparent sm:w-28" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#FAFAFC] to-transparent sm:w-28" />
        <div className="marquee-track py-2 [animation-duration:45s] group-hover:[animation-play-state:paused]">
          {loop.map((t, i) => (
            <Card key={`${t.name}-${i}`} t={t} />
          ))}
        </div>
      </Reveal>
    </section>
  );
}
