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
    slug: "italy",
    name: "Italy",
    region: "Europe",
    flag: "🇮🇹",
    image: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=800&q=80",
    featured: true,
    highlightTag: "Padova & DSU Scholarship (€7,000/yr)",
    visaSpeed: "Universitaly Direct Portal",
    withoutIelts: true,
    avgTuition: "€0 – €2,500/yr (100% Waiver)",
    pswv: "1-Year Job Search / Permesso",
    topIntake: "Sep / Oct",
  },
  {
    slug: "sweden",
    name: "Sweden",
    region: "Europe",
    flag: "🇸🇪",
    image: "https://images.unsplash.com/photo-1509356843151-3e7d96241e11?auto=format&fit=crop&w=800&q=80",
    featured: true,
    highlightTag: "Nordic Research & SI Scholarship",
    visaSpeed: "High Visa Grant Rate",
    withoutIelts: false,
    avgTuition: "SEK 80,000 – 140,000/yr",
    pswv: "12-Month Job Seeker Permit",
    topIntake: "Autumn (Aug/Sep)",
  },
  {
    slug: "finland",
    name: "Finland",
    region: "Europe",
    flag: "🇫🇮",
    image: "https://images.unsplash.com/photo-1538332576228-eb5b4c4de6f5?auto=format&fit=crop&w=800&q=80",
    featured: true,
    highlightTag: "World's #1 Education System",
    visaSpeed: "Fast RP Decision",
    withoutIelts: true,
    avgTuition: "€6,000 – €12,000/yr (50-100% Schol)",
    pswv: "2-Year Post-Study Permit",
    topIntake: "Sep / Jan",
  },
  {
    slug: "uk",
    name: "United Kingdom",
    region: "Europe",
    flag: "🇬🇧",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=800&q=80",
    featured: true,
    highlightTag: "British Council Certified Agency",
    visaSpeed: "Priority & Super Priority CAS",
    withoutIelts: true,
    avgTuition: "£11,000 – £16,000/yr",
    pswv: "2-Year Graduate Route",
    topIntake: "Jan / May / Sep",
  },
  {
    slug: "canada",
    name: "Canada",
    region: "North America",
    flag: "🇨🇦",
    image: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?auto=format&fit=crop&w=800&q=80",
    featured: true,
    highlightTag: "Designated Learning Institutions (DLIs)",
    visaSpeed: "Complete GIC & PAL Guidance",
    withoutIelts: false,
    avgTuition: "C$15,000 – C$24,000/yr",
    pswv: "Up to 3-Year PGWP",
    topIntake: "Jan / May / Sep",
  },
  {
    slug: "usa",
    name: "United States",
    region: "North America",
    flag: "🇺🇸",
    image: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?auto=format&fit=crop&w=800&q=80",
    highlightTag: "F-1 Mock Interview & DS-160 Prep",
    visaSpeed: "Direct I-20 Guidance",
    withoutIelts: false,
    avgTuition: "$14,000 – $28,000/yr",
    pswv: "Up to 3-Year STEM OPT",
    topIntake: "Fall / Spring",
  },
  {
    slug: "malaysia",
    name: "Malaysia",
    region: "Asia-Pacific",
    flag: "🇲🇾",
    image: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=800&q=80",
    highlightTag: "Affordable & SSC/Dakhil Entry",
    visaSpeed: "Fast EMGS (3-4 Weeks)",
    withoutIelts: true,
    avgTuition: "$2,800 – $5,000/yr",
    pswv: "Dual Degree UK/Aus Transfer",
    topIntake: "Monthly / Rolling",
  },
];

export function VisualDestinationBento() {
  const [activeRegion, setActiveRegion] = useState("All");

  const regions = ["All", "Europe", "North America", "Asia-Pacific"];

  const filtered = activeRegion === "All"
    ? destinationCards
    : destinationCards.filter((d) => d.region === activeRegion);

  return (
    <section className="section-shell py-14 sm:py-20 border-t border-slate-200">
      {/* Header with Micro-copy */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
        <SlideIn direction="left" distance={35}>
          <div className="inline-flex items-center gap-2 rounded-full bg-amber-50 border border-amber-200 px-3.5 py-1 text-xs font-bold text-amber-900 mb-2.5">
            <IconSparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>Curated Academic Allies Destinations</span>
          </div>
          <h2 className="font-display text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Explore Verified <span className="text-amber-600">Study Portals</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-xl">
            Choose your dream destination. Access 100+ partner universities with scholarship evaluation, 100% genuine embassy portal processing, and Chattogram HQ personal care.
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
                    ? "bg-[#0C2340] text-[#D4AF37] shadow-sm"
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
                "group relative overflow-hidden rounded-[2rem] border border-slate-200 bg-[#0C2340] text-white transition-all duration-500 hover:border-[#D4AF37] hover:shadow-2xl flex flex-col justify-end min-h-[380px]",
                dest.featured && "ring-1 ring-[#D4AF37]/30",
              )}
            >
            {/* Background Photographic Poster */}
            <div className="absolute inset-0 overflow-hidden">
              <img
                src={dest.image}
                alt={dest.name}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-75 group-hover:opacity-90"
                onError={(e) => {
                  e.currentTarget.src = "/assets/banner.jpg";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0C2340] via-[#0C2340]/60 to-transparent" />
            </div>

            {/* Top Floating Glass Badges */}
            <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
              <div className="bg-[#0C2340]/90 backdrop-blur-md border border-[#D4AF37]/40 rounded-full px-3 py-1 text-xs font-bold flex items-center gap-1.5 shadow-sm text-white">
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
                <span className="rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/40 px-2.5 py-0.5 text-[0.68rem] font-bold text-[#E5C158]">
                  {dest.highlightTag}
                </span>
                <span className="text-[0.68rem] text-slate-300 font-semibold">
                  Intake: {dest.topIntake}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2 text-[0.72rem] pt-1">
                <div className="rounded-xl bg-white/10 backdrop-blur-md p-2 border border-white/10">
                  <span className="text-slate-300 block text-[0.65rem]">Visa Speed:</span>
                  <span className="font-bold text-emerald-400">{dest.visaSpeed}</span>
                </div>
                <div className="rounded-xl bg-white/10 backdrop-blur-md p-2 border border-white/10">
                  <span className="text-slate-300 block text-[0.65rem]">Post-Study Work:</span>
                  <span className="font-bold text-[#D4AF37]">{dest.pswv}</span>
                </div>
              </div>

              <div className="pt-2 flex items-center justify-between text-xs border-t border-white/15">
                <span className="text-slate-300 font-medium">
                  Tuition: <strong className="text-white">{dest.avgTuition}</strong>
                </span>
                <span className="inline-flex items-center gap-1 font-bold text-[#D4AF37] group-hover:translate-x-1 transition-transform">
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
