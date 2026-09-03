import { useState } from "react";
import { IconSparkles, IconCheck, IconArrowRight } from "@/components/ui-blocks";
import { useRegisterModal } from "@/components/register-modal";
import { cn } from "@/lib/utils";

const flightStages = [
  {
    step: "01",
    title: "100% Free Profile Audit",
    timeline: "Day 0 – 2",
    badge: "Zero File Opening Fee",
    desc: "Comprehensive evaluation of your GPA, English tests (or MOI suitability), and career goals directly by senior advisors Moshiur & Tanvir.",
    checklist: ["Academic Transcript Verification", "English Test / MOI Eligibility", "Target Country Shortlisting"],
    counselorTip: "Bring your original transcripts or digital copies for instant assessment.",
  },
  {
    step: "02",
    title: "University Offer & Scholarship",
    timeline: "Days 3 – 7",
    badge: "Official Acceptance",
    desc: "Direct applications to verified partner universities across UK, Europe, Australia, and Canada, with automatic scholarship grants.",
    checklist: ["SOP & Reference Vetting", "Offer Letter in 48-72h", "Tuition Scholarship Applied"],
    counselorTip: "Qualifying applicants can secure up to £4,000 / 30% automatic merit reduction.",
  },
  {
    step: "03",
    title: "Financial & CAS Vetting",
    timeline: "Days 8 – 14",
    badge: "Bank & Compliance",
    desc: "Flawless documentation of bank statements, sponsorship proof, and CAS issuance according to current UKVI & embassy regulations.",
    checklist: ["28-Day Bank Statement Audit", "Pre-CAS Interview Training", "Unconditional CAS Released"],
    counselorTip: "Our 100% compliance record ensures your file has zero documentary flaws before submission.",
  },
  {
    step: "04",
    title: "High-Speed Visa Grant",
    timeline: "Days 15 – 20 (3-5 Days Record)",
    badge: "Embassy Decision",
    desc: "Fast-track biometrics booking and embassy submission with our proven 3 to 5-day UK visa grant track record.",
    checklist: ["Biometrics Priority Appointment", "Medical & TB Clearance", "Passport Stamped with Visa"],
    counselorTip: "Future Edge has verified multiple 3-day UK Priority Visa grants for Autumn/Winter intakes.",
  },
  {
    step: "05",
    title: "Pre-Departure & Airport Welcome",
    timeline: "Prior to Departure",
    badge: "Fly With Confidence",
    desc: "Accommodation booking assistance, flight ticketing, foreign currency remittance guidance, and international student community network.",
    checklist: ["Campus Dorm / Housing Support", "Student Bank Account Guidance", "Airport Pickup & Community Meet"],
    counselorTip: "Connect with current Bangladeshi students already studying at your destination campus.",
  },
];

export function IlluminatedFlightPath() {
  const [activeStage, setActiveStage] = useState(0);
  const { open } = useRegisterModal();
  const current = flightStages[activeStage];

  return (
    <section className="section-shell py-14 sm:py-20 border-t border-slate-200/80">
      <div className="text-center max-w-2xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 rounded-full bg-[#FCF8EE] border border-[#D4AF37]/40 px-3.5 py-1 text-xs font-bold text-[#8A6818] mb-2.5">
          <IconSparkles className="w-3.5 h-3.5" />
          <span>Transparent 5-Stage Roadmap</span>
        </div>
        <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          From Free Assessment to <span className="text-[#AA771C]">Airport Departure</span>
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 mt-1">
          Tap each milestone below to explore the verified timeline and counselor checkpoints.
        </p>
      </div>

      {/* Horizontal Connected Stepper for Desktop & Tablet */}
      <div className="relative mb-8">
        <div className="hidden md:block absolute top-6 left-12 right-12 h-0.5 bg-slate-200 -z-0" />
        <div
          className="hidden md:block absolute top-6 left-12 h-0.5 bg-[#D4AF37] transition-all duration-500 -z-0"
          style={{ width: `${(activeStage / (flightStages.length - 1)) * 80}%` }}
        />

        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 relative z-10">
          {flightStages.map((stage, idx) => (
            <button
              key={stage.step}
              type="button"
              onClick={() => setActiveStage(idx)}
              className={cn(
                "rounded-2xl p-3 sm:p-4 text-left transition-all border cursor-pointer flex flex-col justify-between",
                activeStage === idx
                  ? "bg-[#090C10] text-white border-[#D4AF37] shadow-lg scale-102"
                  : "bg-white border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50"
              )}
            >
              <div className="flex items-center justify-between mb-2">
                <span className={cn(
                  "flex h-7 w-7 items-center justify-center rounded-full text-xs font-extrabold transition-colors",
                  activeStage === idx ? "bg-[#D4AF37] text-[#090C10]" : "bg-slate-100 text-slate-600"
                )}>
                  {stage.step}
                </span>
                <span className={cn(
                  "text-[0.62rem] font-bold px-2 py-0.5 rounded-full",
                  activeStage === idx ? "bg-white/10 text-[#F5D365]" : "bg-slate-100 text-slate-500"
                )}>
                  {stage.timeline.split(" ")[0]} {stage.timeline.split(" ")[1] || ""}
                </span>
              </div>
              <p className="text-xs font-bold leading-snug line-clamp-1">{stage.title}</p>
            </button>
          ))}
        </div>
      </div>

      {/* Dynamic Detailed Milestone Showcase Card */}
      <div className="outer-bezel">
        <div className="inner-bezel p-6 sm:p-8 grid gap-8 md:grid-cols-[1.1fr_0.9fr] items-center">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="rounded-full bg-[#D4AF37] text-[#090C10] font-black px-2.5 py-0.5 text-xs">
                STAGE {current.step}
              </span>
              <span className="rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-bold px-2.5 py-0.5">
                ⏱ {current.timeline}
              </span>
            </div>

            <h3 className="font-display text-xl sm:text-2xl font-extrabold text-slate-900 mt-2">
              {current.title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
              {current.desc}
            </p>

            {/* Checklist Chips */}
            <div className="mt-5 space-y-2">
              <p className="text-[0.68rem] font-extrabold uppercase tracking-wider text-slate-500">
                Key Milestone Actions:
              </p>
              <div className="flex flex-wrap gap-2">
                {current.checklist.map((item, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-1.5 rounded-xl bg-slate-50 border border-slate-200 px-3 py-1 text-xs font-medium text-slate-800"
                  >
                    <IconCheck className="w-3.5 h-3.5 text-emerald-600" />
                    <span>{item}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Card: Counselor Pro-Tip & CTA */}
          <div className="rounded-3xl bg-slate-900 text-white p-6 border border-[#D4AF37]/30 shadow-xl space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs">
              <span className="font-bold text-[#F5D365]">💡 Senior Counselor Pro-Tip</span>
              <span className="text-slate-400">Khan Tower Desk</span>
            </div>

            <p className="text-xs sm:text-sm text-slate-200 italic leading-relaxed">
              "{current.counselorTip}"
            </p>

            <div className="pt-2 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs text-slate-400">Ready to initiate Step {current.step}?</span>
              <button
                type="button"
                onClick={() => open()}
                className="rounded-full bg-[#D4AF37] hover:bg-[#F5D365] text-[#090C10] font-bold px-4 py-2 text-xs transition-colors cursor-pointer flex items-center gap-1.5"
              >
                <span>Start Now</span>
                <IconArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
