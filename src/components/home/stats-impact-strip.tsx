import { CountUp, StaggerContainer, StaggerItem } from "@/components/motion-wrapper";

export function StatsImpactStrip() {
  const stats = [
    {
      icon: "🎓",
      val: 150,
      suffix: "+",
      label: "Partner Universities",
      sublabel: "Worldwide connections & Russell Group",
    },
    {
      icon: "👥",
      val: 2500,
      suffix: "+",
      label: "Students Counseled",
      sublabel: "Personalized guidance & dreams fulfilled",
    },
    {
      icon: "✓",
      val: 98,
      suffix: "%",
      label: "Visa Approvals",
      sublabel: "Proven success stories across 8 countries",
    },
    {
      icon: "🌐",
      val: 12,
      suffix: "+",
      label: "Countries Represented",
      sublabel: "Dual direct hubs in Dhaka & London",
    },
  ];

  return (
    <section className="relative py-16 sm:py-24 bg-blueprint-radial text-white overflow-hidden border-y border-blue-900/40">
      {/* Subtle Ambient Radial Lighting */}
      <div className="pointer-events-none absolute left-1/2 -top-24 -translate-x-1/2 h-72 w-[600px] rounded-full bg-blue-500/10 blur-[120px]" />

      <div className="section-shell relative z-10">
        {/* Section Heading with Editorial Italic Serif */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
          <h2 className="font-serif-editorial text-3xl sm:text-5xl font-normal tracking-tight text-white">
            Trusted by students <span className="italic font-normal text-blue-200">worldwide</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-2 font-medium">
            Representing Bangladesh students across global educational institutions with direct London post-arrival support.
          </p>
        </div>

        {/* 4 Massive Stat Counters Grid with Animated CountUp */}
        <StaggerContainer
          staggerDelay={0.12}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 text-center"
        >
          {stats.map((stat) => (
            <StaggerItem key={stat.label} className="flex flex-col items-center group hover-lift">
              {/* Translucent Frosted Icon Box */}
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-2xl mb-5 border border-white/10 transition-transform duration-300 group-hover:scale-110 group-hover:bg-white/15 shadow-lg">
                <span>{stat.icon}</span>
              </div>

              {/* Animated Serif Counter Number */}
              <div className="font-serif-editorial text-5xl sm:text-6xl font-normal text-white tracking-tight leading-none mb-3">
                <CountUp value={stat.val} suffix={stat.suffix} duration={2.2} />
              </div>

              {/* Bold Title */}
              <div className="text-sm font-bold text-slate-100 mb-1">
                {stat.label}
              </div>

              {/* Subtitle */}
              <div className="text-xs text-slate-400 font-medium max-w-[200px]">
                {stat.sublabel}
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
