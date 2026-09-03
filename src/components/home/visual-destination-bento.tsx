import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { IconArrowRight, IconSparkles, IconCheck } from "@/components/ui-blocks";
import { cn } from "@/lib/utils";

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
    highlightTag: "Official BNU & UEL Partners",
    visaSpeed: "3 to 5 Days (Fast-Track)",
    withoutIelts: true,
    avgTuition: "£11,000 – £15,500/yr",
    pswv: "2-Year Graduate Visa",
    topIntake: "Sep 2026 / Jan 2027",
  },
  {
    slug: "australia",
    name: "Australia",
    region: "Oceania",
    flag: "🇦🇺",
    image: "/assets/poster-australia.jpg",
    featured: true,
    highlightTag: "Up to 30% Scholarships",
    visaSpeed: "Streamlined Subclass 500",
    withoutIelts: false,
    avgTuition: "A$24,000 – A$38,000/yr",
    pswv: "Up to 4-Year Regional PSW",
    topIntake: "Feb / Jul 2027",
  },
  {
    slug: "europe",
    name: "Europe (Schengen)",
    region: "Europe",
    flag: "🇪🇺",
    image: "/assets/poster-europe.jpg",
    highlightTag: "Hungary & Nordics",
    visaSpeed: "Schengen 27 Nations Access",
    withoutIelts: true,
    avgTuition: "€2,500 – €7,000/yr",
    pswv: "EU Job Search Visas",
    topIntake: "Sep 2026 / Feb 2027",
  },
  {
    slug: "canada",
    name: "Canada",
    region: "North America",
    flag: "🇨🇦",
    image: "/assets/poster-canada.jpg",
    highlightTag: "Public DLIs & Paid Co-Op",
    visaSpeed: "Verified SDS & Non-SDS",
    withoutIelts: false,
    avgTuition: "C$16,000 – C$28,000/yr",
    pswv: "Up to 3-Year PGWP",
    topIntake: "Sep 2026 / Jan 2027",
  },
  {
    slug: "germany",
    name: "Germany",
    region: "Europe",
    flag: "🇩🇪",
    image: "/assets/poster-germany.jpg",
    highlightTag: "Public Tuition-Free",
    visaSpeed: "National Visa Path",
    withoutIelts: true,
    avgTuition: "€0 – €3,000/yr (Public)",
    pswv: "18-Month Jobseeker Visa",
    topIntake: "Winter / Summer",
  },
  {
    slug: "malaysia",
    name: "Malaysia",
    region: "Asia-Pacific",
    flag: "🇲🇾",
    image: "/assets/poster-korea.jpg",
    highlightTag: "Affordable UK Twin Degree",
    visaSpeed: "VAL within 14-21 Days",
    withoutIelts: true,
    avgTuition: "$3,500 – $6,500/yr",
    pswv: "Transfer to UK/Aus",
    topIntake: "Rolling Intakes",
  },
];

export function VisualDestinationBento() {
  const [activeRegion, setActiveRegion] = useState("All");

  const regions = ["All", "Europe", "Oceania", "North America", "Asia-Pacific"];

  const filtered = activeRegion === "All"
    ? destinationCards
    : destinationCards.filter(d => d.region === activeRegion);

  return (
    <section className="section-shell py-14 sm:py-20 border-t border-slate-200/80">
      {/* Header with Micro-copy */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-[#FCF8EE] border border-[#D4AF37]/40 px-3.5 py-1 text-xs font-bold text-[#8A6818] mb-2.5">
            <IconSparkles className="w-3.5 h-3.5" />
            <span>Curated Country Portals</span>
          </div>
          <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Explore Verified <span className="text-[#AA771C]">Study Destinations</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-xl">
            Choose your target country. Direct university admissions with fast-track visa processing and scholarship support.
          </p>
        </div>

        {/* Region Filter Chips */}
        <div className="flex flex-wrap gap-1.5 p-1 rounded-full bg-slate-100 border border-slate-200">
          {regions.map((reg) => (
            <button
              key={reg}
              type="button"
              onClick={() => setActiveRegion(reg)}
              className={cn(
                "rounded-full px-3.5 py-1.5 text-xs font-bold transition-all cursor-pointer",
                activeRegion === reg
                  ? "bg-[#090C10] text-[#F5D365] shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              )}
            >
              {reg}
            </button>
          ))}
        </div>
      </div>

      {/* Modern Bento Visual Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((dest) => (
          <Link
            key={dest.slug}
            to="/study-in-{$country}"
            params={{ country: dest.slug }}
            className={cn(
              "group relative overflow-hidden rounded-[2rem] border border-slate-200/90 bg-slate-950 text-white transition-all duration-500 hover:border-[#D4AF37] hover:shadow-2xl flex flex-col justify-end min-h-[380px]",
              dest.featured && "lg:col-span-1 ring-1 ring-[#D4AF37]/20"
            )}
          >
            {/* Background Photographic Poster */}
            <div className="absolute inset-0 overflow-hidden">
              <img
                src={dest.image}
                alt={dest.name}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-85 group-hover:opacity-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
            </div>

            {/* Top Floating Glass Badges */}
            <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
              <div className="glass-pill rounded-full px-3 py-1 text-xs font-bold flex items-center gap-1.5 shadow-sm">
                <span className="text-base">{dest.flag}</span>
                <span>{dest.name}</span>
              </div>

              {dest.withoutIelts && (
                <span className="rounded-full bg-emerald-500/90 text-white backdrop-blur-md px-2.5 py-0.5 text-[0.65rem] font-extrabold tracking-wide border border-white/20">
                  MOI ACCEPTED
                </span>
              )}
            </div>

            {/* Bottom Content Tray with Micro-chips */}
            <div className="relative z-10 p-5 sm:p-6 space-y-3">
              <div className="flex items-center gap-2">
                <span className="rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/40 px-2.5 py-0.5 text-[0.68rem] font-bold text-[#F5D365]">
                  {dest.highlightTag}
                </span>
                <span className="text-[0.68rem] text-slate-300 font-semibold">
                  Intake: {dest.topIntake}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2 text-[0.72rem] pt-1">
                <div className="rounded-xl bg-white/10 backdrop-blur-md p-2 border border-white/10">
                  <span className="text-slate-400 block text-[0.65rem]">Visa Timeline:</span>
                  <span className="font-bold text-emerald-400">{dest.visaSpeed}</span>
                </div>
                <div className="rounded-xl bg-white/10 backdrop-blur-md p-2 border border-white/10">
                  <span className="text-slate-400 block text-[0.65rem]">Post-Study Work:</span>
                  <span className="font-bold text-[#F5D365]">{dest.pswv}</span>
                </div>
              </div>

              <div className="pt-2 flex items-center justify-between text-xs border-t border-white/15">
                <span className="text-slate-300 font-medium">
                  Tuition: <strong className="text-white">{dest.avgTuition}</strong>
                </span>
                <span className="inline-flex items-center gap-1 font-bold text-[#F5D365] group-hover:translate-x-1 transition-transform">
                  <span>View Details</span>
                  <IconArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
