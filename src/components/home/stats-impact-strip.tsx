import { CountUp, StaggerContainer, StaggerItem } from "@/components/motion-wrapper";

export function StatsImpactStrip() {
  const stats = [
    {
      icon: "🌐",
      val: 47,
      suffix: "K+",
      label: "Facebook Community",
      sublabel: "Active student & guardian community",
    },
    {
      icon: "🎓",
      val: 1200,
      suffix: "+",
      label: "Scholars & Visa Successes",
      sublabel: "Italy, Sweden, Finland, UK, Canada & USA",
    },
    {
      icon: "⭐",
      val: 100,
      suffix: "%",
      label: "Facebook Recommendation",
      sublabel: "Genuine feedback from verified applicants",
    },
    {
      icon: "🏛️",
      val: 5,
      suffix: " Steps",
      label: "Signature Europe Pathway",
      sublabel: "Padova, Universitaly & Nordic University Portals",
    },
  ];

  return (
    <section className="relative py-16 sm:py-24 bg-gradient-to-b from-[#08182B] via-[#0C2340] to-[#08182B] text-white overflow-hidden border-y border-amber-500/20">
      {/* Subtle Ambient Radial Lighting */}
      <div className="pointer-events-none absolute left-1/2 -top-24 -translate-x-1/2 h-72 w-[600px] rounded-full bg-amber-400/10 blur-[130px]" />

      <div className="section-shell relative z-10">
        {/* Section Heading with Editorial Italic Serif */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
          <h2 className="font-serif-editorial text-3xl sm:text-5xl font-normal tracking-tight text-white">
            Trusted by scholars <span className="italic font-normal text-amber-300">across Bangladesh</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 mt-2 font-medium">
            Advancing Education from Finlay Square (7th Fl), Chattogram — Zero fake visa traps, official British Council partner coaching, and genuine embassy file handling.
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
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-400/10 text-2xl mb-5 border border-amber-400/25 transition-transform duration-300 group-hover:scale-110 group-hover:bg-amber-400/20 shadow-lg">
                <span>{stat.icon}</span>
              </div>

              {/* Animated Serif Counter Number */}
              <div className="font-serif-editorial text-5xl sm:text-6xl font-normal text-white tracking-tight leading-none mb-3">
                <CountUp value={stat.val} suffix={stat.suffix} duration={2.2} />
              </div>

              {/* Bold Title */}
              <div className="text-sm font-bold text-amber-200 mb-1">
                {stat.label}
              </div>

              {/* Subtitle */}
              <div className="text-xs text-slate-300 font-medium max-w-[200px]">
                {stat.sublabel}
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
