import { useState } from "react";
import { IconSparkles, IconCheck, IconArrowRight, IconWhatsApp } from "@/components/ui-blocks";
import { useRegisterModal } from "@/components/register-modal";
import { company } from "@/lib/site-data";
import { cn } from "@/lib/utils";
import { SlideIn, StaggerContainer, StaggerItem } from "@/components/motion-wrapper";

const flightStages = [
  {
    step: "01",
    title: "100% Free Profile Audit",
    timeline: "Day 0 – 2",
    badge: "Zero File Opening Fee",
    desc: "Comprehensive evaluation of your GPA, English proficiency (or without IELTS / MOI eligibility), and career objectives by Alex Global advisors.",
    checklist: ["Academic Transcript Verification", "English Test / MOI Assessment", "Target Country Shortlisting"],
    counselorTip: "Bring your original transcripts or digital PDFs to our Aftabnagar office or send on WhatsApp.",
  },
  {
    step: "02",
    title: "University Offer & Scholarship",
    timeline: "Days 3 – 7",
    badge: "Official Acceptance",
    desc: "Direct applications to accredited partner universities across UK, Canada, Australia, Cyprus, and Europe with automatic tuition scholarships.",
    checklist: ["SOP & Recommendation Review", "Offer Letter Issued in 48-72h", "Scholarship Grants Applied"],
    counselorTip: "Qualifying applicants can secure up to £4,000 / 30% to 50% tuition reduction.",
  },
  {
    step: "03",
    title: "Financial & Compliance Vetting",
    timeline: "Days 8 – 14",
    badge: "Bank & Compliance",
    desc: "Thorough documentation of bank statements, sponsor solvency, and CAS/I-20 issuance according to current embassy requirements.",
    checklist: ["28-Day Bank Statement Audit", "Pre-CAS Interview Coaching", "Unconditional CAS / Acceptance Released"],
    counselorTip: "Our 100% compliance record ensures your file has zero documentary flaws before submission.",
  },
  {
    step: "04",
    title: "Visa Lodgement & Mock Interview",
    timeline: "Days 15 – 25",
    badge: "8 Visa Categories",
    desc: "Expert biometrics booking and embassy submission across Student, Spouse, Tourist, Business, and Schengen Visas.",
    checklist: ["Biometrics Priority Appointment", "1-on-1 Embassy Mock Interview", "Passport Stamped with Visa"],
    counselorTip: "Simulate real consular questions with our experienced visa specialists in Dhaka.",
  },
  {
    step: "05",
    title: "Pre-Departure & London Arrival",
    timeline: "Prior to Departure",
    badge: "Fly With Confidence",
    desc: "Student airfare booking, housing search near university, forex student file creation, and London office arrival welcome.",
    checklist: ["Student Air Ticket Booking", "Accommodation Assistance", "London E16 Arrival Guidance"],
    counselorTip: "Our London branch (The Arches Cranberry Lane) provides on-ground support when you land in the UK!",
  },
];

export function IlluminatedFlightPath() {
  const [activeStage, setActiveStage] = useState(0);
  const { open } = useRegisterModal();
  const current = flightStages[activeStage];

  return (
    <section className="section-shell py-14 sm:py-20 border-t border-slate-200">
      <SlideIn direction="up" distance={30}>
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 rounded-full bg-red-50 border border-red-200 px-3.5 py-1 text-xs font-bold text-red-700 mb-2.5">
            <IconSparkles className="w-3.5 h-3.5 text-red-600" />
            <span>Transparent 5-Stage Roadmap</span>
          </div>
          <h2 className="font-display text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            From Free Assessment to <span className="text-red-600">Global Campus</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            Tap each milestone below to explore the verified timeline and counselor checkpoints.
          </p>
        </div>
      </SlideIn>

      {/* Horizontal Connected Stepper for Desktop & Tablet */}
      <div className="relative mb-8">
        <div className="hidden md:block absolute top-6 left-12 right-12 h-0.5 bg-slate-200 -z-0" />
        <div
          className="hidden md:block absolute top-6 left-12 h-0.5 bg-red-600 transition-all duration-500 -z-0"
          style={{ width: `${(activeStage / (flightStages.length - 1)) * 80}%` }}
        />

        <StaggerContainer staggerDelay={0.07} className="grid grid-cols-2 sm:grid-cols-5 gap-3 relative z-10">
          {flightStages.map((stage, idx) => (
            <StaggerItem key={stage.step} direction="up" distance={22}>
              <button
                type="button"
                onClick={() => setActiveStage(idx)}
                className={cn(
                  "w-full rounded-2xl p-3 sm:p-4 text-left transition-all border cursor-pointer flex flex-col justify-between",
                  activeStage === idx
                    ? "bg-slate-900 text-white border-red-500 shadow-lg scale-102"
                    : "bg-white border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50",
                )}
              >
                <div className="flex items-center justify-between mb-2">
                  <span
                    className={cn(
                      "flex h-7 w-7 items-center justify-center rounded-full text-xs font-extrabold transition-colors",
                      activeStage === idx ? "bg-red-600 text-white" : "bg-slate-100 text-slate-600",
                    )}
                  >
                    {stage.step}
                  </span>
                  <span className="text-[0.65rem] opacity-60 font-semibold">{stage.timeline}</span>
                </div>
                <span className="font-display text-xs font-bold leading-tight block">
                  {stage.title}
                </span>
              </button>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>

      {/* Active Stage Deep-Dive Card */}
      <SlideIn direction="up" distance={24} key={activeStage}>
        <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-md">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] items-center">
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <span className="rounded-full bg-red-100 border border-red-200 px-3 py-0.5 text-xs font-extrabold text-red-700">
                Stage {current.step} · {current.timeline}
              </span>
              <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-[0.68rem] font-bold text-slate-700">
                {current.badge}
              </span>
            </div>

            <h3 className="font-display text-xl sm:text-2xl font-black text-slate-900">
              {current.title}
            </h3>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {current.desc}
            </p>

            <div className="space-y-2 pt-1">
              <span className="text-[0.68rem] font-extrabold uppercase tracking-wider text-slate-500 block">
                Key Deliverables:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {current.checklist.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 rounded-xl bg-slate-50 border border-slate-200/80 p-2.5 text-xs font-medium text-slate-800"
                  >
                    <IconCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span className="leading-snug text-[0.72rem]">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-red-200/80 bg-red-50/40 p-5 sm:p-6 space-y-4">
            <div>
              <span className="text-[0.68rem] font-extrabold uppercase tracking-wider text-red-600 block mb-1">
                💡 Alex Global Advisor Tip
              </span>
              <p className="text-xs text-slate-700 leading-relaxed font-medium">
                "{current.counselorTip}"
              </p>
            </div>

            <div className="border-t border-red-200/60 pt-4 flex flex-wrap gap-2.5">
              <button
                type="button"
                onClick={open}
                className="btn-luxury-primary text-xs py-2.5 px-5"
              >
                <span>Book This Step</span>
                <IconArrowRight className="w-3 h-3" />
              </button>
              <a
                href={`https://wa.me/${company.whatsapp.replace(/[^0-9]/g, "")}`}
                target="_blank"
                rel="noreferrer"
                className="btn-luxury-secondary text-xs py-2.5 px-4"
              >
                <IconWhatsApp className="w-3.5 h-3.5 text-emerald-600" />
                <span>Ask Advisor</span>
              </a>
            </div>
          </div>
        </div>
        </div>
      </SlideIn>
    </section>
  );
}
