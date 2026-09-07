import { useState } from "react";
import { verifiedStudentReviews } from "@/lib/site-data";
import { MotionHeading, StaggerContainer, StaggerItem } from "@/components/motion-wrapper";

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const reviews = verifiedStudentReviews.map((r) => ({
    name: r.name,
    role: "Student / Guardian",
    university: r.destination ? `${r.course} (${r.destination})` : r.course,
    quote: r.text,
    stars: r.rating || 5,
    highlight: r.highlight,
    countryCode: r.country === "Italy" ? "IT" : r.country === "Europe" ? "EU" : r.country === "Bangladesh" ? "BD" : "GLOBAL",
    image: r.image,
    initials: r.name
      .split(" ")
      .map((n) => n[0])
      .slice(0, 2)
      .join(""),
  }));

  const maxIndex = Math.max(0, reviews.length - 3);

  const prev = () => setCurrentIndex((p) => Math.max(0, p - 1));
  const next = () => setCurrentIndex((p) => Math.min(maxIndex, p + 1));

  return (
    <section className="relative py-16 sm:py-24 bg-[#FAFAFC] border-b border-slate-200/80 overflow-hidden">
      <div className="section-shell">
        {/* Animated Section Header */}
        <MotionHeading
          tag="— VERIFIED STUDENT & GUARDIAN REVIEWS —"
          title="What our students & families"
          highlight="say"
          description="Authentic feedback from students and parents successfully guided to European universities and IELTS Band 7+ scores."
          tagColor="text-[#D4AF37]"
          highlightColor="text-[#0C2340]"
        />

        {/* Testimonials Carousel Container with Navigation Arrows */}
        <div className="relative">
          {/* Arrow Buttons on Left and Right */}
          <button
            type="button"
            aria-label="Previous Testimonial"
            onClick={prev}
            disabled={currentIndex === 0}
            className="hidden sm:flex absolute -left-5 top-1/2 -translate-y-1/2 z-20 h-11 w-11 items-center justify-center rounded-full bg-white border border-slate-200 shadow-md text-slate-700 hover:bg-amber-50 hover:text-[#0C2340] hover:border-[#D4AF37] transition-all disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer font-bold active:scale-95"
          >
            ‹
          </button>
          <button
            type="button"
            aria-label="Next Testimonial"
            onClick={next}
            disabled={currentIndex >= maxIndex}
            className="hidden sm:flex absolute -right-5 top-1/2 -translate-y-1/2 z-20 h-11 w-11 items-center justify-center rounded-full bg-white border border-slate-200 shadow-md text-slate-700 hover:bg-amber-50 hover:text-[#0C2340] hover:border-[#D4AF37] transition-all disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer font-bold active:scale-95"
          >
            ›
          </button>

          {/* Cards Grid with Stagger Entrance */}
          <StaggerContainer
            key={currentIndex}
            staggerDelay={0.1}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {reviews.slice(currentIndex, currentIndex + 3).map((r) => (
              <StaggerItem key={r.name} className="h-full">
                <div className="rounded-3xl border border-slate-200/90 bg-white p-7 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-full hover-lift border-t-2 hover:border-t-[#D4AF37]">
                  <div>
                    {/* Top Quote Icon & 5 Gold Stars */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-serif-editorial text-4xl text-amber-200 leading-none select-none">
                        “
                      </span>
                      <div className="flex items-center gap-1 text-[#D4AF37] text-sm">
                        {Array.from({ length: r.stars }).map((_, i) => (
                          <span key={i}>★</span>
                        ))}
                      </div>
                    </div>

                    {r.highlight && (
                      <div className="inline-block rounded-full bg-amber-50 border border-amber-200 px-3 py-1 text-[0.68rem] font-bold text-amber-900 mb-3">
                        {r.highlight}
                      </div>
                    )}

                    {/* Review Text */}
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                      "{r.quote}"
                    </p>
                  </div>

                  {/* Bottom Author Row */}
                  <div className="flex items-center justify-between border-t border-slate-100 pt-5 mt-6">
                    <div className="flex items-center gap-3">
                      {r.image ? (
                        <img
                          src={r.image}
                          alt={r.name}
                          className="h-11 w-11 shrink-0 rounded-full object-cover border border-[#D4AF37]/50"
                        />
                      ) : (
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-tr from-[#0C2340] to-[#16325B] text-amber-300 font-bold text-xs shadow-xs border border-[#D4AF37]/40">
                          {r.initials}
                        </div>
                      )}
                      <div className="min-w-0">
                        <div className="text-sm font-bold text-[#0C2340] truncate">
                          {r.name}
                        </div>
                        <div className="text-[0.7rem] text-slate-500 truncate">
                          {r.university}
                        </div>
                      </div>
                    </div>

                    <span className="shrink-0 rounded-lg bg-amber-50 px-2.5 py-1 text-xs font-black text-amber-900 border border-amber-200">
                      {r.countryCode}
                    </span>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Mobile Carousel Indicators */}
          <div className="flex sm:hidden items-center justify-center gap-1.5 mt-6">
            {reviews.slice(0, 5).map((_, idx) => (
              <button
                key={idx}
                type="button"
                aria-label={`Go to slide ${idx + 1}`}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2 rounded-full transition-all ${
                  currentIndex === idx ? "w-6 bg-[#D4AF37]" : "w-2 bg-slate-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
