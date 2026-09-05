import { useState } from "react";
import { useRegisterModal } from "@/components/register-modal";
import { IconSparkles, IconCheck, IconArrowRight, IconWhatsApp } from "@/components/ui-blocks";
import { company, courses } from "@/lib/site-data";
import { cn } from "@/lib/utils";
import { SlideIn, StaggerContainer, StaggerItem } from "@/components/motion-wrapper";

export function DelegationSpotlight() {
  const { open } = useRegisterModal();
  const [activeCourseIdx, setActiveCourseIdx] = useState(0);
  const currentCourse = courses[activeCourseIdx];

  const visaCategories = [
    { name: "Student Visa", icon: "🎓" },
    { name: "Spouse Visa", icon: "💍" },
    { name: "Visit Visa", icon: "✈️" },
    { name: "Business Visa", icon: "💼" },
    { name: "Work Permit", icon: "🛠️" },
    { name: "Medical Visa", icon: "🏥" },
    { name: "Migration", icon: "🌍" },
    { name: "Sports Visa", icon: "⚽" },
  ];

  return (
    <section className="section-shell py-10 sm:py-16">
      <div className="rounded-3xl border border-slate-800 bg-[#0F172A] p-4 sm:p-8 lg:p-12 relative overflow-hidden text-white shadow-2xl">
        {/* Ambient Glow */}
        <div className="pointer-events-none absolute -top-20 -left-20 h-80 w-80 rounded-full bg-red-600/15 blur-[100px]" />
        <div className="pointer-events-none absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-blue-600/20 blur-[100px]" />

        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center relative z-10">
          {/* Left: Language Academy Interactive Course Selector (Slides from Left) */}
          <SlideIn direction="left" distance={45} className="space-y-5">
            <div className="inline-flex items-center gap-2 rounded-full bg-red-600/20 border border-red-500/30 px-3.5 py-1 text-xs font-bold text-red-400">
              <IconSparkles className="w-3.5 h-3.5" />
              <span>Alex Global Language Academy · Aftabnagar Campus & Online</span>
            </div>

            <h2 className="font-display text-2xl sm:text-4xl font-black text-white tracking-tight leading-snug">
              Master English Fluency with <br />
              <span className="text-red-500">IELTS, Spoken & Kids English</span>
            </h2>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-xl">
              Whether you are preparing for international university admission, corporate presentations, or giving your child a head-start in English, our certified trainers provide personalized coaching.
            </p>

            {/* Course Selector Tabs */}
            <div className="flex flex-wrap gap-2 pt-1">
              {courses.map((c, idx) => (
                <button
                  key={c.slug}
                  type="button"
                  onClick={() => setActiveCourseIdx(idx)}
                  className={cn(
                    "flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs font-bold transition-all cursor-pointer active:scale-95",
                    activeCourseIdx === idx
                      ? "bg-red-600 text-white shadow-md border border-red-500"
                      : "bg-slate-800/80 text-slate-300 hover:bg-slate-700/80 border border-slate-700",
                  )}
                >
                  <span className="text-base">{c.icon}</span>
                  <span>{c.title.split(" ")[0]} {c.title.split(" ")[1]}</span>
                </button>
              ))}
            </div>

            {/* Active Course Highlights */}
            <div className="rounded-2xl bg-slate-800/60 border border-slate-700 p-5 space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-display font-bold text-base text-white flex items-center gap-2">
                  <span>{currentCourse.icon}</span>
                  <span>{currentCourse.title}</span>
                </span>
                <span className="rounded-full bg-red-500/20 text-red-400 border border-red-500/30 px-2.5 py-0.5 text-[0.68rem] font-bold">
                  {currentCourse.targetOutcome}
                </span>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                {currentCourse.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                {currentCourse.highlights.slice(0, 4).map((h) => (
                  <div key={h} className="flex items-start gap-2 text-[0.72rem] text-slate-300">
                    <IconCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action CTA */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                type="button"
                onClick={open}
                className="btn-shimmer btn-luxury-primary text-xs py-3 px-6 shadow-lg hover:shadow-red-600/30 active:scale-95 cursor-pointer"
              >
                <span>Enroll / Free Diagnostic Test</span>
                <IconArrowRight className="w-3.5 h-3.5" />
              </button>

              <a
                href={`https://wa.me/${company.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
                  `Hello Alex Global Language Academy! I am interested in ${currentCourse.title}. Please provide batch details and schedule.`,
                )}`}
                target="_blank"
                rel="noreferrer"
                className="btn-luxury-secondary text-xs py-3 px-5 text-slate-900 active:scale-95 cursor-pointer"
              >
                <IconWhatsApp className="w-4 h-4 text-emerald-600" />
                <span>WhatsApp Query</span>
              </a>
            </div>
          </SlideIn>

          {/* Right: Dual Global Hubs & All 8 Visa Categories (Slides from Right) */}
          <SlideIn direction="right" distance={45} className="space-y-5 lg:pl-4">
            <div className="rounded-2xl bg-slate-800/80 border border-slate-700 p-5 space-y-3">
              <div className="flex items-center justify-between border-b border-slate-700/80 pb-2.5">
                <span className="text-xs font-bold uppercase tracking-wider text-red-400">
                  Dual Global Hubs
                </span>
                <span className="text-[0.68rem] text-slate-400">Pre & Post-Arrival Care</span>
              </div>

              <div className="space-y-2.5">
                <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-900/60 border border-slate-700/60 hover-lift">
                  <span className="text-2xl">🇧🇩</span>
                  <div>
                    <span className="block font-display text-xs font-bold text-white">
                      Dhaka Corporate Office
                    </span>
                    <p className="text-[0.7rem] text-slate-400 leading-snug mt-0.5">
                      {company.dhakaOffice.full}
                    </p>
                    <span className="block text-[0.68rem] text-red-400 font-semibold mt-1">
                      Hotlines: 01886 91 33 91 / 01611 40 20 93
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-900/60 border border-slate-700/60 hover-lift">
                  <span className="text-2xl">🇬🇧</span>
                  <div>
                    <span className="block font-display text-xs font-bold text-white">
                      London Branch Office
                    </span>
                    <p className="text-[0.7rem] text-slate-400 leading-snug mt-0.5">
                      {company.londonOffice.full}
                    </p>
                    <span className="block text-[0.68rem] text-blue-400 font-semibold mt-1">
                      UK Hotline: +44 07539228276
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* 8 Visa Categories Grid with Stagger */}
            <div className="rounded-2xl bg-slate-800/80 border border-slate-700 p-5 space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-red-400 block">
                All 8 Visa Categories Processed:
              </span>
              <StaggerContainer staggerDelay={0.06} className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {visaCategories.map((v) => (
                  <StaggerItem key={v.name}>
                    <div className="flex flex-col items-center justify-center p-2.5 rounded-xl bg-slate-900/60 border border-slate-700/60 text-center hover-lift hover:border-red-500/50 hover:bg-slate-900/90 transition-all cursor-default">
                      <span className="text-base mb-0.5">{v.icon}</span>
                      <span className="text-[0.68rem] font-bold text-slate-200 leading-tight">
                        {v.name}
                      </span>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </SlideIn>
        </div>
      </div>
    </section>
  );
}

