import { CountUp, MotionHeading, StaggerContainer, StaggerItem } from "@/components/motion-wrapper";

export function WhyChooseSection() {
  const features = [
    {
      icon: "🛡️",
      iconBg: "bg-blue-50 text-[#043E8B]",
      value: 100,
      suffix: "%",
      label: "",
      metricColor: "text-[#043E8B]",
      tag: "FREE SERVICE",
      title: "Free End-to-End Counseling",
      desc: "Complete guidance from profile assessment and university shortlisting to visa lodging with zero hidden service charges.",
    },
    {
      icon: "🎗️",
      iconBg: "bg-rose-50 text-red-600",
      value: 250,
      suffix: "+",
      label: "",
      metricColor: "text-red-600",
      tag: "VISA APPROVALS",
      title: "98% Visa Success Rate",
      desc: "Proven track record of successful student and family visa approvals with professional SOP reviews and mock interviews.",
    },
    {
      icon: "👥",
      iconBg: "bg-blue-50 text-[#043E8B]",
      value: 2,
      suffix: " Hubs",
      label: "",
      metricColor: "text-[#043E8B]",
      tag: "DHAKA & LONDON",
      title: "Direct London Arrival Care",
      desc: "Unlike local-only agencies, our London branch (E16) provides airport guidance, accommodation assistance, and PSW transition.",
    },
    {
      icon: "🤝",
      iconBg: "bg-rose-50 text-red-600",
      value: 150,
      suffix: "+",
      label: "",
      metricColor: "text-red-600",
      tag: "PARTNER UNIS",
      title: "Direct University Representation",
      desc: "Direct agreements with top UK, Canadian, Australian, European, and Scandinavian institutions for expedited offer letters.",
    },
  ];

  return (
    <section className="relative py-16 sm:py-24 bg-white border-b border-slate-200/80">
      <div className="section-shell">
        {/* Title with Editorial Italic Serif & Framer Motion */}
        <MotionHeading
          tag="— WHY ALEX GLOBAL —"
          title="Why choose"
          highlight="Alex Global Consultancy?"
          description="We are committed to making your study-abroad dream a reality — with expert guidance, free counseling, and a proven track record."
          tagColor="text-[#043E8B]"
          highlightColor="text-red-600"
        />

        {/* 4 Feature Cards Grid with Staggered Entrance & CountUp */}
        <StaggerContainer
          staggerDelay={0.1}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((f) => (
            <StaggerItem key={f.title}>
              <div className="rounded-3xl border border-slate-200/70 bg-slate-50/40 p-7 text-center flex flex-col items-center hover:bg-white hover:border-red-200 hover:shadow-2xl transition-all duration-300 group hover-lift h-full">
                {/* Icon Container */}
                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-2xl text-2xl mb-4 transition-transform duration-300 group-hover:scale-110 ${f.iconBg}`}
                >
                  <span>{f.icon}</span>
                </div>

                {/* Animated Big Metric */}
                <div className={`font-display text-3xl sm:text-4xl font-extrabold mb-0.5 ${f.metricColor}`}>
                  <CountUp value={f.value} suffix={f.suffix} duration={2} />
                </div>

                {/* Subheading Tag */}
                <div className="text-[0.65rem] font-bold uppercase tracking-widest text-slate-400 mb-3">
                  {f.tag}
                </div>

                {/* Title */}
                <h3 className="font-display text-base font-bold text-slate-900 mb-2">
                  {f.title}
                </h3>

                {/* Description */}
                <p className="text-xs text-slate-500 leading-relaxed font-medium">
                  {f.desc}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

