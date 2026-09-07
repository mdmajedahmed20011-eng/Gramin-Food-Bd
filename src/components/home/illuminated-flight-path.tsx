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
    desc: "Comprehensive evaluation of your GPA, study gap, and language proficiency by Academic Allies counselors at Finlay Square, Chattogram.",
    checklist: ["Academic Transcript Verification", "English Test / MOI Assessment", "European Country Shortlisting"],
    counselorTip: "Bring your original academic papers to our Finlay Square (7th Fl) Chattogram office or send PDFs via WhatsApp.",
  },
  {
    step: "02",
    title: "Universitaly & European Admissions",
    timeline: "Days 3 – 7",
    badge: "Official Acceptance",
    desc: "Direct applications to accredited public universities across Italy (Padova, Rome), Sweden, Finland, and UK with scholarship matching.",
    checklist: ["Universitaly Portal Submission", "SOP & Reference Letters", "Scholarship Grants Applied"],
    counselorTip: "Qualifying applicants can secure up to 100% tuition waivers and regional DSU scholarship stipends.",
  },
  {
    step: "03",
    title: "DOV & Document Legalization",
    timeline: "Days 8 – 14",
    badge: "Compliance & Apostille",
    desc: "Thorough attestation of certificates, CIMEA statement of comparability, and Italian Embassy Declaration of Value (DOV).",
    checklist: ["Ministry & Board Attestation", "CIMEA Document Verification", "Bank Solvency Compliance"],
    counselorTip: "Our 100% genuine portal compliance ensures your file has zero documentary flaws before embassy submission.",
  },
  {
    step: "04",
    title: "Visa Lodgement & Mock Interview",
    timeline: "Days 15 – 25",
    badge: "Embassy Ready",
    desc: "Official embassy appointment booking, verified sponsor documentation, and rigorous 1-on-1 consular mock interviews.",
    checklist: ["Embassy Slot Booking", "1-on-1 Consular Mock Interview", "Passport Stamped with Visa"],
    counselorTip: "Simulate real consular questions with our experienced European visa specialists in Chattogram.",
  },
  {
    step: "05",
    title: "DSU Scholarship & Campus Arrival",
    timeline: "Prior to Departure",
    badge: "Fly With Confidence",
    desc: "Regional scholarship disbursement up to €7,000/year, university accommodation support, student flight booking, and airport reception.",
    checklist: ["Student Air Ticket Booking", "DSU Housing Assistance", "Residency Permit Registration"],
    counselorTip: "Our European scholar community assists you with university enrollment and local residence registration when you arrive!",
  },
];

export function IlluminatedFlightPath() {
  const [activeStage, setActiveStage] = useState(0);
  const { open } = useRegisterModal();
  const current = flightStages[activeStage] ?? flightStages[0];
  if (!current) return null;

  return (
    <section className="section-shell py-14 sm:py-20 border-t border-slate-200">
      <SlideIn direction="up" distance={30}>
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 rounded-full bg-amber-50 border border-amber-200 px-3.5 py-1 text-xs font-bold text-amber-900 mb-2.5">
            <IconSparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>Transparent 5-Stage Roadmap</span>
          </div>
          <h2 className="font-display text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            From Free Assessment to <span className="text-[#0C2340]">European Campus</span>
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
          className="hidden md:block absolute top-6 left-12 h-0.5 bg-amber-500 transition-all duration-500 -z-0"
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
                    ? "bg-[#0C2340] text-white border-amber-400 shadow-lg scale-102"
                    : "bg-white border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50",
                )}
              >
                <div className="flex items-center justify-between mb-2">
                  <span
                    className={cn(
                      "flex h-7 w-7 items-center justify-center rounded-full text-xs font-extrabold transition-colors",
                      activeStage === idx ? "bg-amber-400 text-slate-950" : "bg-slate-100 text-slate-600",
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
              <span className="rounded-full bg-amber-100 border border-amber-200 px-3 py-0.5 text-xs font-extrabold text-amber-900">
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

          <div className="rounded-2xl border border-amber-200/80 bg-amber-50/40 p-5 sm:p-6 space-y-4">
            <div>
              <span className="text-[0.68rem] font-extrabold uppercase tracking-wider text-amber-800 block mb-1">
                💡 Academic Allies Counselor Tip
              </span>
              <p className="text-xs text-slate-700 leading-relaxed font-medium">
                "{current.counselorTip}"
              </p>
            </div>

            <div className="border-t border-amber-200/60 pt-4 flex flex-wrap gap-2.5">
              <button
                type="button"
                onClick={open}
                className="btn-luxury-primary text-slate-950 font-bold text-xs py-2.5 px-5"
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
                <span>Ask Counselor</span>
              </a>
            </div>
          </div>
        </div>
        </div>
      </SlideIn>
    </section>
  );
}
