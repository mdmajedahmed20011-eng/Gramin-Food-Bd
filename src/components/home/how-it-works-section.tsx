import { useRegisterModal } from "@/components/register-modal";
import { IconArrowRight } from "@/components/ui-blocks";
import { MotionHeading, StaggerContainer, StaggerItem } from "@/components/motion-wrapper";

export function HowItWorksSection() {
  const { open } = useRegisterModal();

  const steps = [
    {
      step: "01",
      stepColor: "bg-[#043E8B] text-white",
      dotPosition: "bottom",
      dotColor: "bg-[#043E8B]",
      icon: "🔍",
      iconBg: "bg-blue-50 text-[#043E8B]",
      title: "Research & Discovery",
      desc: "Explore universities and degree programs that align with your career goals, academic background, and budget.",
    },
    {
      step: "02",
      stepColor: "bg-red-600 text-white",
      dotPosition: "top",
      dotColor: "bg-red-600",
      icon: "💬",
      iconBg: "bg-red-50 text-red-600",
      title: "Free Consultation",
      desc: "Meet our senior advisors in Dhaka or via video call for 1-on-1 profile evaluation and scholarship matching.",
    },
    {
      step: "03",
      stepColor: "bg-[#043E8B] text-white",
      dotPosition: "bottom",
      dotColor: "bg-[#043E8B]",
      icon: "📄",
      iconBg: "bg-blue-50 text-[#043E8B]",
      title: "Application & Documents",
      desc: "Our admissions team reviews your SOP, transcripts, and references to secure your unconditional offer letter and CAS.",
    },
    {
      step: "04",
      stepColor: "bg-red-600 text-white",
      dotPosition: "top",
      dotColor: "bg-red-600",
      icon: "✓",
      iconBg: "bg-red-50 text-red-600",
      title: "Visa Processing & Mock",
      desc: "Comprehensive visa filing, financial document verification, and rigorous 1-on-1 mock interview preparation.",
    },
    {
      step: "05",
      stepColor: "bg-[#043E8B] text-white",
      dotPosition: "bottom",
      dotColor: "bg-[#043E8B]",
      icon: "✈",
      iconBg: "bg-blue-50 text-[#043E8B]",
      title: "Pre-Departure & London Hub",
      desc: "Pre-flight briefing, flight booking support, and on-the-ground assistance from our London Cranberry Lane office.",
    },
  ];

  return (
    <section className="relative py-16 sm:py-24 bg-[#FAFAFC] border-b border-slate-200/80 overflow-hidden">
      <div className="section-shell">
        {/* Animated Section Header */}
        <MotionHeading
          tag="— YOUR JOURNEY —"
          title="How It"
          highlight="Works"
          description="Your path to studying abroad in 5 simple, structured steps."
          tagColor="text-[#043E8B]"
          highlightColor="text-[#043E8B]"
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
                <div className="relative rounded-3xl border border-slate-200/90 bg-white p-6 shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:border-red-400/50 flex flex-col justify-between hover-lift group h-full">
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
                    <h3 className="font-display text-base font-bold text-slate-900 mb-1.5 group-hover:text-[#043E8B] transition-colors">
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
            className="btn-shimmer inline-flex items-center gap-2 rounded-xl bg-[#043E8B] hover:bg-[#032B60] text-white px-8 py-3.5 text-xs sm:text-sm font-bold shadow-lg hover:shadow-blue-900/30 transition-all cursor-pointer active:scale-95"
          >
            <span>Start Your Journey</span>
            <IconArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}

