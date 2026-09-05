import { Link } from "@tanstack/react-router";
import { IconArrowRight } from "@/components/ui-blocks";
import { MotionHeading, StaggerContainer, StaggerItem } from "@/components/motion-wrapper";

interface DestinationItem {
  name: string;
  code: string;
  unis: string;
  image: string;
  popular?: boolean;
  slug: string;
}

const destinationsData: DestinationItem[] = [
  {
    name: "United Kingdom",
    code: "GB",
    unis: "150+ Universities",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=800&q=80",
    popular: true,
    slug: "uk",
  },
  {
    name: "Canada",
    code: "CA",
    unis: "80+ DLIs",
    image: "https://images.unsplash.com/photo-1517935703635-2717090c2210?auto=format&fit=crop&w=800&q=80",
    popular: true,
    slug: "canada",
  },
  {
    name: "Australia",
    code: "AU",
    unis: "45+ Universities",
    image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=800&q=80",
    popular: true,
    slug: "australia",
  },
  {
    name: "Cyprus (Europe)",
    code: "CY",
    unis: "25+ Universities",
    image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=800&q=80",
    popular: true,
    slug: "cyprus",
  },
  {
    name: "Germany",
    code: "DE",
    unis: "70+ Universities",
    image: "https://images.unsplash.com/photo-1560969184-10fe8719e047?auto=format&fit=crop&w=800&q=80",
    popular: false,
    slug: "germany",
  },
  {
    name: "Finland",
    code: "FI",
    unis: "35+ Universities",
    image: "https://images.unsplash.com/photo-1538332576228-eb5b4c4de6f5?auto=format&fit=crop&w=800&q=80",
    popular: true,
    slug: "finland",
  },
];

export function PopularDestinationsSection() {
  return (
    <section className="relative py-16 sm:py-24 bg-[#FAFAFC] border-b border-slate-200/80">
      <div className="section-shell">
        {/* Animated Heading */}
        <MotionHeading
          tag="— POPULAR DESTINATIONS —"
          title="Where will you"
          highlight="study?"
          description="Top study destinations with world-class universities, vibrant cultures, and strong post-study work pathways."
          tagColor="text-[#043E8B]"
          highlightColor="text-[#043E8B]"
        />

        {/* 6 Country Destination Cards Grid with Stagger Entrance */}
        <StaggerContainer
          staggerDelay={0.08}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5 sm:gap-4"
        >
          {destinationsData.map((dest) => (
            <StaggerItem key={dest.slug}>
              <Link
                to="/study-in-{$country}"
                params={{ country: dest.slug }}
                className="group relative overflow-hidden rounded-3xl aspect-[3/4.2] shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between p-4 bg-slate-900 active:scale-[0.98] border border-transparent hover:border-red-500/30"
              >
                {/* Card Background Image */}
                <img
                  src={dest.image}
                  alt={`Study in ${dest.name}`}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-115 opacity-80"
                  loading="lazy"
                />

                {/* Scrim Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent pointer-events-none" />

                {/* Top Badges Row */}
                <div className="relative z-10 flex items-start justify-between gap-1 w-full">
                  {dest.popular ? (
                    <span className="rounded-full bg-red-600/95 backdrop-blur-xs px-2.5 py-0.5 text-[0.62rem] font-bold text-white shadow-xs animate-pulse">
                      ✦ Popular
                    </span>
                  ) : (
                    <span />
                  )}
                  <span className="rounded-xl bg-white/95 backdrop-blur-xs px-2.5 py-1 text-[0.68rem] font-black text-slate-900 shadow-xs group-hover:bg-red-600 group-hover:text-white transition-colors">
                    {dest.code}
                  </span>
                </div>

                {/* Bottom Information */}
                <div className="relative z-10">
                  <h3 className="font-display text-sm sm:text-base font-bold text-white tracking-tight leading-snug group-hover:text-red-400 transition-colors">
                    {dest.name}
                  </h3>
                  <div className="flex items-center gap-1.5 text-[0.68rem] font-semibold text-slate-300 mt-1">
                    <span>🎓</span>
                    <span>{dest.unis}</span>
                  </div>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Center Bottom View All CTA */}
        <div className="text-center mt-10 sm:mt-12">
          <Link
            to="/destinations"
            className="btn-shimmer inline-flex items-center gap-2 rounded-xl bg-[#043E8B] hover:bg-[#032B60] text-white px-8 py-3.5 text-xs sm:text-sm font-bold shadow-lg hover:shadow-blue-900/30 transition-all active:scale-95 cursor-pointer"
          >
            <span>View All Destinations</span>
            <IconArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
