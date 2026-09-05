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
    title: "UK January & September 2026 Intake: Complete Application & Visa Guide",
    excerpt: "Everything you need to know about key university deadlines, CAS issuance, CAS deposits, English exemptions (MOI), and 2-year Graduate Route visas.",
    date: "September 1, 2026",
    tag: "UK Admissions",
    image: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=800&q=80",
    slug: "uk-intake-guide-2026",
  },
  {
    title: "Study in Germany Free Tuition Guide 2026: Public Universities & Visa Fund",
    excerpt: "Comprehensive roadmap for Bangladeshi students seeking tuition-free Master's degrees, blocked accounts, APS procedure, and 18-month jobseeker rights.",
    date: "August 24, 2026",
    tag: "Europe Guide",
    image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=800&q=80",
    slug: "germany-free-tuition-guide",
  },
  {
    title: "Canada Study Permit Update: PAL Requirements & 3-Year PGWP Explained",
    excerpt: "Understand Canada's latest student visa regulations, Provincial Attestation Letters (PAL), eligible public DLIs, and post-graduation stay options.",
    date: "August 10, 2026",
    tag: "Canada Visas",
    image: "https://images.unsplash.com/photo-1517935703635-2717090c2210?auto=format&fit=crop&w=800&q=80",
    slug: "canada-study-permit-update",
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
          description="Essential intake guides, visa updates, and admission tips written by our senior education consultants."
          tagColor="text-[#043E8B]"
          highlightColor="text-red-600"
        />

        {/* 3 Blog Cards Grid with Staggered Motion */}
        <StaggerContainer
          staggerDelay={0.12}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {posts.map((post) => (
            <StaggerItem key={post.title} className="h-full">
              <div className="group rounded-3xl border border-slate-200/90 bg-white overflow-hidden shadow-xs hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:border-red-400/40 flex flex-col justify-between hover-lift h-full">
                {/* Card Image */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4 rounded-full bg-black/60 backdrop-blur-md px-3 py-1 text-[0.68rem] font-bold text-white border border-white/20">
                    {post.tag}
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                  <div className="space-y-2.5">
                    <h3 className="font-display text-base sm:text-lg font-bold text-[#043E8B] group-hover:text-red-600 transition-colors leading-snug">
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
                      className="font-bold text-red-600 hover:text-red-700 transition-colors inline-flex items-center gap-1 group-hover:translate-x-1 duration-200"
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
            className="btn-shimmer inline-flex items-center gap-2 rounded-xl bg-red-600 hover:bg-red-700 text-white px-8 py-3.5 text-xs sm:text-sm font-bold shadow-lg hover:shadow-red-600/30 transition-all active:scale-95 cursor-pointer"
          >
            <span>Browse All Articles & Guides</span>
            <IconArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

