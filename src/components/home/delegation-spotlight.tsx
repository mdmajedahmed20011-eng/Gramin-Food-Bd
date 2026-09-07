import { useState } from "react";
import { useRegisterModal } from "@/components/register-modal";
import { IconSparkles, IconCheck, IconArrowRight, IconWhatsApp } from "@/components/ui-blocks";
import { company, courses } from "@/lib/site-data";
import { cn } from "@/lib/utils";
import { SlideIn, StaggerContainer, StaggerItem } from "@/components/motion-wrapper";

export function DelegationSpotlight() {
  const { open } = useRegisterModal();
  const [activeCourseIdx, setActiveCourseIdx] = useState(0);
  const currentCourse = courses[activeCourseIdx] ?? courses[0];
  if (!currentCourse) return null;

  const visaCategories = [
    { name: "Student Visa", icon: "🎓" },
    { name: "DSU Scholarship", icon: "💶" },
    { name: "Spouse Visa", icon: "💍" },
    { name: "Visit Visa", icon: "✈️" },
    { name: "Universitaly", icon: "🏛️" },
    { name: "Nordic Residence", icon: "❄️" },
    { name: "Work Rights", icon: "💼" },
    { name: "Pre-Departure", icon: "🛫" },
  ];

  return (
    <section className="section-shell py-10 sm:py-16">
      <div className="rounded-3xl border border-amber-500/20 bg-[#08182B] p-4 sm:p-8 lg:p-12 relative overflow-hidden text-white shadow-2xl">
        {/* Ambient Glow */}
        <div className="pointer-events-none absolute -top-20 -left-20 h-80 w-80 rounded-full bg-amber-400/15 blur-[120px]" />
        <div className="pointer-events-none absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-blue-500/15 blur-[120px]" />

        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center relative z-10">
          {/* Left: Language Academy Interactive Course Selector */}
          <SlideIn direction="left" distance={45} className="space-y-5">
            <div className="inline-flex items-center gap-2 rounded-full bg-amber-400/15 border border-amber-400/30 px-3.5 py-1 text-xs font-bold text-amber-300">
              <IconSparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Academic Allies Language Academy · Chattogram Finlay Square &amp; Online</span>
            </div>

            <h2 className="font-display text-2xl sm:text-4xl font-black text-white tracking-tight leading-snug">
              Master English Fluency with <br />
              <span className="text-amber-400">IELTS, Spoken &amp; Kids English</span>
            </h2>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-xl">
              Official British Council &amp; IDP authorized preparation partner. Whether preparing for European English-medium admissions, embassy interviews, or early childhood fluency, our expert faculty delivers guaranteed score progression.
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
                      ? "bg-amber-400 text-slate-950 shadow-md border border-amber-300"
                      : "bg-slate-800/80 text-slate-300 hover:bg-slate-700/80 border border-slate-700",
                  )}
                >
                  <span className="text-base">{c.icon}</span>
                  <span>{c.title.split(" ")[0]} {c.title.split(" ")[1]}</span>
                </button>
              ))}
            </div>

            {/* Active Course Highlights */}
            <div className="rounded-2xl bg-[#0C2340]/90 border border-amber-400/20 p-5 space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-display font-bold text-base text-white flex items-center gap-2">
                  <span>{currentCourse.icon}</span>
                  <span>{currentCourse.title}</span>
                </span>
                <span className="rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/30 px-2.5 py-0.5 text-[0.68rem] font-bold">
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
                className="btn-luxury-primary text-slate-950 font-bold text-xs py-3 px-6 shadow-lg hover:shadow-amber-400/30 active:scale-95 cursor-pointer"
              >
                <span>Enroll / Free Diagnostic Test</span>
                <IconArrowRight className="w-3.5 h-3.5" />
              </button>

              <a
                href={`https://wa.me/${company.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
                  `Hello Academic Allies Language Academy! I am interested in ${currentCourse.title}. Please provide batch schedules and diagnostic test details.`,
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

          {/* Right: Chattogram Headquarters & Zeenat Abad Branch */}
          <SlideIn direction="right" distance={45} className="space-y-5 lg:pl-4">
            <div className="rounded-2xl bg-[#0C2340]/90 border border-amber-400/20 p-5 space-y-3">
              <div className="flex items-center justify-between border-b border-slate-700/80 pb-2.5">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                  Chattogram Headquarters &amp; Branch
                </span>
                <span className="text-[0.68rem] text-slate-400">In-Person &amp; Online Services</span>
              </div>

              <div className="space-y-2.5">
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-900/80 border border-amber-400/20 hover-lift">
                  <span className="text-2xl">🏢</span>
                  <div>
                    <span className="block font-display text-xs font-bold text-white">
                      Chattogram Head Office (Finlay Square)
                    </span>
                    <p className="text-[0.7rem] text-slate-300 leading-snug mt-0.5">
                      {company.chattogramHeadOffice.full}
                    </p>
                    <span className="block text-[0.68rem] text-amber-300 font-semibold mt-1">
                      Hotlines: 01859-870936 / 01812-386307 / 01812-386318
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-900/80 border border-slate-700/60 hover-lift">
                  <span className="text-2xl">📍</span>
                  <div>
                    <span className="block font-display text-xs font-bold text-white">
                      Chattogram Branch (Zeenat Abad)
                    </span>
                    <p className="text-[0.7rem] text-slate-300 leading-snug mt-0.5">
                      {company.chattogramZeenatOffice.full}
                    </p>
                    <span className="block text-[0.68rem] text-emerald-400 font-semibold mt-1">
                      Branch Hotline: 01805-211186
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Core Service Categories Grid with Stagger */}
            <div className="rounded-2xl bg-[#0C2340]/90 border border-amber-400/20 p-5 space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400 block">
                Official Services Processed:
              </span>
              <StaggerContainer staggerDelay={0.06} className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {visaCategories.map((v) => (
                  <StaggerItem key={v.name}>
                    <div className="flex flex-col items-center justify-center p-2.5 rounded-xl bg-slate-900/70 border border-slate-700/60 text-center hover-lift hover:border-amber-400/50 hover:bg-slate-900/90 transition-all cursor-default">
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

