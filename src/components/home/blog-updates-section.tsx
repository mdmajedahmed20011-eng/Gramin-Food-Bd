import { Link } from "@tanstack/react-router";
import { IconArrowRight } from "@/components/ui-blocks";
import { MotionHeading, StaggerContainer, StaggerItem } from "@/components/motion-wrapper";

interface BlogPost {
  title: string;
  excerpt: string;
  date: string;
  image: string;
  slug: string;
  tag: string;
}

const posts: BlogPost[] = [
  {
    title: "Italy Student Visa & Padova 2026/2027: Universitaly & DSU Scholarship Guide",
    excerpt: "Complete roadmap for Bangladeshi scholars applying to University of Padova, Universitaly portal pre-enrollment, CIMEA attestation, and winning €7,000/yr regional DSU scholarships.",
    date: "September 2, 2026",
    tag: "Italy & Europe",
    image: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=800&q=80",
    slug: "italy-padova-universitaly-guide",
  },
  {
    title: "Sweden & Finland Higher Education: Tech Degrees & Post-Study Residence Rights",
    excerpt: "How Bangladeshi graduates can secure admissions into Swedish and Finnish public universities with English-taught master's, residence permits, and tech career pathways.",
    date: "August 28, 2026",
    tag: "Nordic Study",
    image: "https://images.unsplash.com/photo-1509356843151-3e7d96241e11?auto=format&fit=crop&w=800&q=80",
    slug: "sweden-finland-study-guide",
  },
  {
    title: "IELTS Band 7.0+ Strategy: Crack Academic Writing & Speaking in 6 Weeks",
    excerpt: "Proven techniques from Academic Allies Language Academy's British Council certified trainers to achieve 7.0+ band score for European and UK visa success.",
    date: "August 15, 2026",
    tag: "Language Academy",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80",
    slug: "ielts-band-7-strategy-guide",
  },
];

export function BlogUpdatesSection() {
  return (
    <section className="relative py-16 sm:py-24 bg-white border-b border-slate-200/80">
      <div className="section-shell">
        {/* Animated Section Header */}
        <MotionHeading
          tag="— FROM THE BLOG —"
          title="Latest"
          highlight="updates"
          description="Essential European intake guides, scholarship news, and IELTS preparation tips written by Academic Allies counselors."
          tagColor="text-amber-700"
          highlightColor="text-[#0C2340]"
        />

        {/* 3 Blog Cards Grid with Staggered Motion */}
        <StaggerContainer
          staggerDelay={0.12}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {posts.map((post) => (
            <StaggerItem key={post.title} className="h-full">
              <div className="group rounded-3xl border border-slate-200/90 bg-white overflow-hidden shadow-xs hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:border-amber-400/50 flex flex-col justify-between hover-lift h-full">
                {/* Card Image */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.src = "/assets/banner.jpg";
                    }}
                  />
                  <div className="absolute top-4 left-4 rounded-full bg-[#0C2340]/80 backdrop-blur-md px-3 py-1 text-[0.68rem] font-bold text-amber-300 border border-amber-400/30">
                    {post.tag}
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                  <div className="space-y-2.5">
                    <h3 className="font-display text-base sm:text-lg font-bold text-[#0C2340] group-hover:text-amber-600 transition-colors leading-snug">
                      {post.title}
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed font-medium line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>

                  {/* Footer with Date and Read More */}
                  <div className="flex items-center justify-between border-t border-slate-100 pt-4 mt-5 text-xs">
                    <span className="text-slate-400 font-semibold">{post.date}</span>
                    <Link
                      to="/offers"
                      className="font-bold text-[#0C2340] hover:text-amber-600 transition-colors inline-flex items-center gap-1 group-hover:translate-x-1 duration-200"
                    >
                      <span>Read More</span>
                      <span>→</span>
                    </Link>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Center Bottom View All CTA */}
        <div className="text-center mt-12 sm:mt-14">
          <Link
            to="/offers"
            className="btn-luxury-primary inline-flex items-center gap-2 text-slate-950 px-8 py-3.5 text-xs sm:text-sm font-bold shadow-lg hover:shadow-amber-400/30 transition-all active:scale-95 cursor-pointer"
          >
            <span>Browse All Articles &amp; European Guides</span>
            <IconArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

