import { CountUp, MotionHeading, StaggerContainer, StaggerItem } from "@/components/motion-wrapper";

export function WhyChooseSection() {
  const features = [
    {
      icon: "🛡️",
      iconBg: "bg-emerald-50 text-emerald-700",
      value: 100,
      suffix: "%",
      label: "",
      metricColor: "text-emerald-700",
      tag: "NO FAKE VISA TRAPS",
      title: "100% Genuine Portals",
      desc: "Zero fake visa traps or intermediary scams. Direct applications through official European university portals (Padova, Universitaly) and verified embassies.",
    },
    {
      icon: "🏛️",
      iconBg: "bg-amber-50 text-amber-800",
      value: 5,
      suffix: " Steps",
      label: "",
      metricColor: "text-amber-800",
      tag: "SIGNATURE METHOD",
      title: "Official 5 Steps to Europe",
      desc: "Structured guidance from profile evaluation and university pre-enrollment to embassy interview preparation and post-arrival settlement.",
    },
    {
      icon: "📜",
      iconBg: "bg-blue-50 text-[#0C2340]",
      value: 1,
      suffix: " Partner",
      label: "",
      metricColor: "text-[#0C2340]",
      tag: "BRITISH COUNCIL & ICEF",
      title: "Certified Language Academy",
      desc: "Authorized British Council IELTS partnership providing Band 7.0+ coaching, Spoken English, and Foundation English for Kids in Chattogram.",
    },
    {
      icon: "🤝",
      iconBg: "bg-slate-50 text-slate-800",
      value: 47,
      suffix: "K+",
      label: "",
      metricColor: "text-slate-900",
      tag: "CHATTOGRAM HEADQUARTERS",
      title: "47K+ Follower Community",
      desc: "100% recommended on Facebook with thousands of active students and guardians visiting our Finlay Square (7th Floor) headquarters.",
    },
  ];

  return (
    <section className="relative py-16 sm:py-24 bg-white border-b border-slate-200/80">
      <div className="section-shell">
        {/* Title with Editorial Italic Serif & Framer Motion */}
        <MotionHeading
          tag="— WHY ACADEMIC ALLIES —"
          title="Why choose"
          highlight="Academic Allies?"
          description="Advancing Education from Finlay Square, Chattogram — zero fake visa traps, official European university portals, and certified language training."
          tagColor="text-amber-700"
          highlightColor="text-[#0C2340]"
        />

        {/* 4 Feature Cards Grid with Staggered Entrance & CountUp */}
        <StaggerContainer
          staggerDelay={0.1}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((f) => (
            <StaggerItem key={f.title}>
              <div className="rounded-3xl border border-slate-200/70 bg-slate-50/40 p-7 text-center flex flex-col items-center hover:bg-white hover:border-amber-400/50 hover:shadow-2xl transition-all duration-300 group hover-lift h-full">
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

