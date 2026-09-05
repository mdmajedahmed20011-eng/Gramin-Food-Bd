import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { IconArrowRight, IconSparkles } from "@/components/ui-blocks";
import { cn } from "@/lib/utils";
import { SlideIn, StaggerContainer, StaggerItem } from "@/components/motion-wrapper";

export interface DestinationCardData {
  slug: string;
  name: string;
  region: string;
  flag: string;
  image: string;
  featured?: boolean;
  highlightTag: string;
  visaSpeed: string;
  withoutIelts: boolean;
  avgTuition: string;
  pswv: string;
  topIntake: string;
}

const destinationCards: DestinationCardData[] = [
  {
    slug: "uk",
    name: "United Kingdom",
    region: "Europe",
    flag: "🇬🇧",
    image: "/assets/poster-uk.jpg",
    featured: true,
    highlightTag: "London Office Direct Care",
    visaSpeed: "Fast-Track Priority",
    withoutIelts: true,
    avgTuition: "£11,000 – £16,000/yr",
    pswv: "2-Year Graduate Visa",
    topIntake: "Jan / May / Sep",
  },
  {
    slug: "canada",
    name: "Canada",
    region: "North America",
    flag: "🇨🇦",
    image: "/assets/poster-canada.jpg",
    featured: true,
    highlightTag: "Public DLIs & Paid Co-Op",
    visaSpeed: "Full Permit Compliance",
    withoutIelts: true,
    avgTuition: "C$15,000 – C$26,000/yr",
    pswv: "Up to 3-Year PGWP",
    topIntake: "Jan / May / Sep",
  },
  {
    slug: "cyprus",
    name: "Cyprus (Europe)",
    region: "Europe",
    flag: "🇨🇾",
    image: "/assets/poster-europe.jpg",
    featured: true,
    highlightTag: "Affordable European Option",
    visaSpeed: "High Visa Success Ratio",
    withoutIelts: true,
    avgTuition: "€3,000 – €5,000/yr",
    pswv: "European Work/Transfer",
    topIntake: "Feb / Oct",
  },
  {
    slug: "australia",
    name: "Australia",
    region: "Oceania",
    flag: "🇦🇺",
    image: "/assets/poster-australia.jpg",
    highlightTag: "High Student Wages",
    visaSpeed: "Streamlined Subclass 500",
    withoutIelts: false,
    avgTuition: "A$20,000 – A$34,000/yr",
    pswv: "Up to 4-Year Regional PSW",
    topIntake: "Feb / Jul",
  },
  {
    slug: "germany",
    name: "Germany",
    region: "Europe",
    flag: "🇩🇪",
    image: "/assets/poster-germany.jpg",
    highlightTag: "Low / Zero Tuition Public Unis",
    visaSpeed: "National Visa Path",
    withoutIelts: false,
    avgTuition: "€0 – €3,000/yr (Public)",
    pswv: "18-Month Jobseeker Visa",
    topIntake: "Winter / Summer",
  },
  {
    slug: "finland",
    name: "Finland",
    region: "Europe",
    flag: "🇫🇮",
    image: "/assets/poster-europe.jpg",
    highlightTag: "World's Happiest Country",
    visaSpeed: "Post-Study Residence",
    withoutIelts: true,
    avgTuition: "€8,000 – €14,000/yr",
    pswv: "2-Year Job Search Permit",
    topIntake: "Sep / Jan",
  },
  {
    slug: "malaysia",
    name: "Malaysia",
    region: "Asia-Pacific",
    flag: "🇲🇾",
    image: "/assets/poster-dubai.jpg",
    highlightTag: "Affordable & SSC/Dakhil Entry",
    visaSpeed: "Fast EMGS (3-4 Weeks)",
    withoutIelts: true,
    avgTuition: "$2,800 – $5,500/yr",
    pswv: "Credit Transfer to UK/Aus",
    topIntake: "Rolling Intakes",
  },
  {
    slug: "usa",
    name: "United States",
    region: "North America",
    flag: "🇺🇸",
    image: "/assets/poster-canada.jpg",
    highlightTag: "Tier-1 Research & STEM OPT",
    visaSpeed: "F-1 Mock Interview Prep",
    withoutIelts: false,
    avgTuition: "$14,000 – $32,000/yr",
    pswv: "Up to 3-Year STEM OPT",
    topIntake: "Fall / Spring",
  },
];

export function VisualDestinationBento() {
  const [activeRegion, setActiveRegion] = useState("All");

  const regions = ["All", "Europe", "Oceania", "North America", "Asia-Pacific"];

  const filtered = activeRegion === "All"
    ? destinationCards
    : destinationCards.filter((d) => d.region === activeRegion);

  return (
    <section className="section-shell py-14 sm:py-20 border-t border-slate-200">
      {/* Header with Micro-copy */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
        <SlideIn direction="left" distance={35}>
          <div className="inline-flex items-center gap-2 rounded-full bg-red-50 border border-red-200 px-3.5 py-1 text-xs font-bold text-red-700 mb-2.5">
            <IconSparkles className="w-3.5 h-3.5 text-red-600" />
            <span>Curated Study Abroad Destinations</span>
          </div>
          <h2 className="font-display text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Explore Verified <span className="text-red-600">Study Portals</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-xl">
            Choose your dream destination. Access 100+ partner universities with scholarship evaluation, visa guidance, and London local branch support.
          </p>
        </SlideIn>

        {/* Region Filter Chips */}
        <SlideIn direction="right" distance={35} delay={0.1}>
          <div className="flex flex-wrap gap-1.5 p-1 rounded-full bg-slate-100 border border-slate-200">
            {regions.map((reg) => (
              <button
                key={reg}
                type="button"
                onClick={() => setActiveRegion(reg)}
                className={cn(
                  "rounded-full px-3.5 py-1.5 text-xs font-bold transition-all cursor-pointer",
                  activeRegion === reg
                    ? "bg-slate-900 text-white shadow-sm"
                    : "text-slate-600 hover:text-slate-900",
                )}
              >
                {reg}
              </button>
            ))}
          </div>
        </SlideIn>
      </div>

      {/* Modern Bento Visual Grid */}
      <StaggerContainer staggerDelay={0.08} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((dest) => (
          <StaggerItem key={dest.slug} direction="up" distance={28}>
            <Link
              to="/study-in-{$country}"
              params={{ country: dest.slug }}
              className={cn(
                "group relative overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-950 text-white transition-all duration-500 hover:border-red-500 hover:shadow-2xl flex flex-col justify-end min-h-[380px]",
                dest.featured && "ring-1 ring-red-500/20",
              )}
            >
            {/* Background Photographic Poster */}
            <div className="absolute inset-0 overflow-hidden">
              <img
                src={dest.image}
                alt={dest.name}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
            </div>

            {/* Top Floating Glass Badges */}
            <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
              <div className="bg-slate-900/80 backdrop-blur-md border border-white/20 rounded-full px-3 py-1 text-xs font-bold flex items-center gap-1.5 shadow-sm">
                <span className="text-base">{dest.flag}</span>
                <span>{dest.name}</span>
              </div>

              {dest.withoutIelts && (
                <span className="rounded-full bg-emerald-600/90 text-white backdrop-blur-md px-2.5 py-0.5 text-[0.65rem] font-extrabold tracking-wide border border-white/20">
                  MOI ACCEPTED
                </span>
              )}
            </div>

            {/* Bottom Content Tray with Micro-chips */}
            <div className="relative z-10 p-5 sm:p-6 space-y-3">
              <div className="flex items-center gap-2">
                <span className="rounded-full bg-red-600/30 border border-red-400/40 px-2.5 py-0.5 text-[0.68rem] font-bold text-red-300">
                  {dest.highlightTag}
                </span>
                <span className="text-[0.68rem] text-slate-300 font-semibold">
                  Intake: {dest.topIntake}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2 text-[0.72rem] pt-1">
                <div className="rounded-xl bg-white/10 backdrop-blur-md p-2 border border-white/10">
                  <span className="text-slate-400 block text-[0.65rem]">Visa Speed:</span>
                  <span className="font-bold text-emerald-400">{dest.visaSpeed}</span>
                </div>
                <div className="rounded-xl bg-white/10 backdrop-blur-md p-2 border border-white/10">
                  <span className="text-slate-400 block text-[0.65rem]">Post-Study Work:</span>
                  <span className="font-bold text-amber-300">{dest.pswv}</span>
                </div>
              </div>

              <div className="pt-2 flex items-center justify-between text-xs border-t border-white/15">
                <span className="text-slate-300 font-medium">
                  Tuition: <strong className="text-white">{dest.avgTuition}</strong>
                </span>
                <span className="inline-flex items-center gap-1 font-bold text-red-400 group-hover:translate-x-1 transition-transform">
                  <span>Explore Guide</span>
                  <IconArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
            </Link>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </section>
  );
}
