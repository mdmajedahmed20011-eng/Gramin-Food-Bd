import { useRegisterModal } from "@/components/register-modal";
import { IconArrowRight } from "@/components/ui-blocks";
import { MotionHeading, StaggerContainer, StaggerItem } from "@/components/motion-wrapper";

export function HowItWorksSection() {
  const { open } = useRegisterModal();

  const steps = [
    {
      step: "01",
      stepColor: "bg-[#0C2340] text-amber-300",
      dotPosition: "bottom",
      dotColor: "bg-[#0C2340]",
      icon: "🔍",
      iconBg: "bg-amber-50 text-amber-800",
      title: "Profile Assessment & Selection",
      desc: "Free academic evaluation, study gap assessment, and tailored university shortlisting (Padova, Universitaly, Sweden, Finland).",
    },
    {
      step: "02",
      stepColor: "bg-amber-500 text-slate-950",
      dotPosition: "top",
      dotColor: "bg-amber-500",
      icon: "🏛️",
      iconBg: "bg-slate-100 text-slate-900",
      title: "Universitaly & Pre-Enrollment",
      desc: "Direct submission through official university portals and Universitaly system for formal pre-enrollment approval.",
    },
    {
      step: "03",
      stepColor: "bg-[#0C2340] text-amber-300",
      dotPosition: "bottom",
      dotColor: "bg-[#0C2340]",
      icon: "📜",
      iconBg: "bg-amber-50 text-amber-800",
      title: "DOV & CIMEA Legalization",
      desc: "Authentic academic certificate apostille, Ministry attestation, and CIMEA statement of comparability / Declaration of Value.",
    },
    {
      step: "04",
      stepColor: "bg-amber-500 text-slate-950",
      dotPosition: "top",
      dotColor: "bg-amber-500",
      icon: "🎯",
      iconBg: "bg-slate-100 text-slate-900",
      title: "Embassy Visa File & Mock Prep",
      desc: "Official embassy appointment booking, verified sponsor documentation, and intensive 1-on-1 visa interview simulations.",
    },
    {
      step: "05",
      stepColor: "bg-[#0C2340] text-amber-300",
      dotPosition: "bottom",
      dotColor: "bg-[#0C2340]",
      icon: "✈️",
      iconBg: "bg-emerald-50 text-emerald-700",
      title: "DSU Scholarship & Departure",
      desc: "Regional scholarship application for up to €7,000/year living stipend + free tuition, student housing, and flight briefing.",
    },
  ];

  return (
    <section className="relative py-16 sm:py-24 bg-[#FAFAFC] border-b border-slate-200/80 overflow-hidden">
      <div className="section-shell">
        {/* Animated Section Header */}
        <MotionHeading
          tag="— SIGNATURE EUROPE METHOD —"
          title="Our 5 Steps to"
          highlight="Europe"
          description="Academic Allies' proven, transparent roadmap from initial profile assessment to European campus arrival."
          tagColor="text-amber-700"
          highlightColor="text-[#0C2340]"
        />

        {/* 5 Step Roadway Cards with Stagger Animation */}
        <div className="relative">
          {/* Subtle Horizontal Connector Bar on Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-8 right-8 -translate-y-1/2 h-0.5 bg-slate-200 pointer-events-none z-0" />

          <StaggerContainer
            staggerDelay={0.12}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 relative z-10"
          >
            {steps.map((s) => (
              <StaggerItem key={s.step} className="h-full">
                <div className="relative rounded-3xl border border-slate-200/90 bg-white p-6 shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:border-amber-400/50 flex flex-col justify-between hover-lift group h-full">
                  {/* Step Number Badge */}
                  <div
                    className={`absolute -top-3 -right-3 flex h-9 w-9 items-center justify-center rounded-full text-xs font-black shadow-md transition-transform duration-300 group-hover:scale-110 ${s.stepColor}`}
                  >
                    {s.step}
                  </div>

                  {/* Top Icon */}
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-2xl text-xl mb-4 transition-transform duration-300 group-hover:scale-110 ${s.iconBg}`}
                  >
                    <span>{s.icon}</span>
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="font-display text-base font-bold text-slate-900 mb-1.5 group-hover:text-[#0C2340] transition-colors">
                      {s.title}
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed font-medium">
                      {s.desc}
                    </p>
                  </div>

                  {/* Pin Dot indicator on Desktop */}
                  <div
                    className={`hidden lg:flex absolute left-1/2 -translate-x-1/2 h-3 w-3 rounded-full border-2 border-white shadow-xs ${
                      s.dotPosition === "top" ? "-top-5" : "-bottom-5"
                    } ${s.dotColor}`}
                  />
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

        {/* Bottom Action CTA */}
        <div className="text-center mt-12 sm:mt-14">
          <button
            type="button"
            onClick={open}
            className="btn-luxury-primary inline-flex items-center gap-2 text-slate-950 px-8 py-3.5 text-xs sm:text-sm font-bold shadow-lg hover:shadow-amber-400/30 transition-all cursor-pointer active:scale-95"
          >
            <span>Start Your 5-Step Process Today</span>
            <IconArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}

