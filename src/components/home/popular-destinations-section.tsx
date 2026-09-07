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
    name: "Italy (Padova & Rome)",
    code: "IT",
    unis: "30+ Public Universities",
    image: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=800&q=80",
    popular: true,
    slug: "italy",
  },
  {
    name: "Sweden",
    code: "SE",
    unis: "40+ Tech Universities",
    image: "https://images.unsplash.com/photo-1509356843151-3e7d96241e11?auto=format&fit=crop&w=800&q=80",
    popular: true,
    slug: "sweden",
  },
  {
    name: "Finland",
    code: "FI",
    unis: "35+ Universities & UAS",
    image: "https://images.unsplash.com/photo-1538332576228-eb5b4c4de6f5?auto=format&fit=crop&w=800&q=80",
    popular: true,
    slug: "finland",
  },
  {
    name: "United Kingdom",
    code: "GB",
    unis: "120+ Universities",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=800&q=80",
    popular: true,
    slug: "uk",
  },
  {
    name: "Canada",
    code: "CA",
    unis: "80+ DLIs",
    image: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?auto=format&fit=crop&w=800&q=80",
    popular: true,
    slug: "canada",
  },
  {
    name: "USA",
    code: "US",
    unis: "100+ Campuses",
    image: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?auto=format&fit=crop&w=800&q=80",
    popular: true,
    slug: "usa",
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
          description="Signature European pathways and top English-speaking study destinations with world-class universities and genuine visa procedures."
          tagColor="text-amber-700"
          highlightColor="text-[#0C2340]"
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
                className="group relative overflow-hidden rounded-3xl aspect-[3/4.2] shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between p-4 bg-slate-900 active:scale-[0.98] border border-transparent hover:border-amber-400/50"
              >
                {/* Card Background Image */}
                <img
                  src={dest.image}
                  alt={`Study in ${dest.name}`}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-115 opacity-80"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.src = "/assets/banner.jpg";
                  }}
                />

                {/* Scrim Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent pointer-events-none" />

                {/* Top Badges Row */}
                <div className="relative z-10 flex items-start justify-between gap-1 w-full">
                  {dest.popular ? (
                    <span className="rounded-full bg-amber-400 px-2.5 py-0.5 text-[0.62rem] font-bold text-slate-950 shadow-xs">
                      ✦ Top Pick
                    </span>
                  ) : (
                    <span />
                  )}
                  <span className="rounded-xl bg-white/95 backdrop-blur-xs px-2.5 py-1 text-[0.68rem] font-black text-slate-900 shadow-xs group-hover:bg-amber-400 group-hover:text-slate-950 transition-colors">
                    {dest.code}
                  </span>
                </div>

                {/* Bottom Information */}
                <div className="relative z-10">
                  <h3 className="font-display text-sm sm:text-base font-bold text-white tracking-tight leading-snug group-hover:text-amber-300 transition-colors">
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
            className="btn-luxury-primary inline-flex items-center gap-2 text-slate-950 px-8 py-3.5 text-xs sm:text-sm font-bold shadow-lg hover:shadow-amber-400/30 transition-all active:scale-95 cursor-pointer"
          >
            <span>View All European & Global Destinations</span>
            <IconArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
