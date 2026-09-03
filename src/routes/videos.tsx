import { createFileRoute } from "@tanstack/react-router";
import {
  Breadcrumbs,
  CtaBand,
  PageHero,
  SectionHeading,
} from "@/components/ui-blocks";
import { company } from "@/lib/site-data";

export const Route = createFileRoute("/videos")({
  head: () => ({
    meta: [
      { title: "Videos & Student Success Stories | Future Edge Education" },
      {
        name: "description",
        content:
          "Watch partner sessions, fast-track visa grant celebrations, and student visa feedback from Future Edge Education's official Facebook community (285K+ followers).",
      },
      { property: "og:title", content: "Videos & Student Stories | Future Edge Education" },
      {
        property: "og:description",
        content:
          "Live university partner sessions, 3-day UK visa grants, and study abroad guidance from our Khan Tower Dhaka office.",
      },
    ],
  }),
  component: Videos,
});

const videoHighlights = [
  {
    title: "Buckinghamshire New University (BNU) Partner Session",
    desc: "Highlights from our in-office session with Ms. Ayesha Rauf (Recruitment Advisor, BNU UK) conducting direct profile evaluations.",
    category: "Partner Delegation",
    venue: "Khan Tower, Dhaka Office",
  },
  {
    title: "LURS 2026 Student Research Conference Award",
    desc: "Future Edge Education leadership honored on stage by Chief Guest Danobir Dr. Syed Ragib Ali for contributions to global education.",
    category: "Academic Honor",
    venue: "Conference Hall",
  },
  {
    title: "UK Student Visa Granted in 3 Working Days (MSc AI)",
    desc: "Student sharing his seamless visa journey with senior counselor Moshiur for the University of East London.",
    category: "Fast Visa Grant",
    venue: "Dhaka Counseling Desk",
  },
  {
    title: "Study in Europe: Hungary, Denmark, Finland & Sweden",
    desc: "Detailed video breakdown of University of Debrecen admissions and English medium (MOI) options without IELTS.",
    category: "European Admissions",
    venue: "Seminar Session",
  },
];

function Videos() {
  return (
    <>
      <PageHero
        eyebrow="Multimedia & Social Channels"
        title="Student Stories & Delegation Highlights"
        subtitle="Watch foreign university partner sessions, student visa success stories, and expert guidance directly from our official Facebook community of 285K+ members."
        image="/brand-assets/banner.jpg"
        imageAlt="Future Edge Education official video and multimedia showcase"
      >
        <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Student Stories" }]} />
      </PageHero>

      {/* Social Community Callout */}
      <section className="section-shell py-12">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 rounded-3xl border border-[#D4AF37]/30 bg-white p-6 sm:p-8 shadow-sm">
          <div>
            <span className="badge-clean badge-gold">
              Official Facebook Channel · 285K+ Followers
            </span>
            <h2 className="mt-2 font-display text-xl sm:text-2xl font-bold text-slate-900">
              Follow @FEEducation on Facebook for Live Updates
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Stay tuned for direct university delegate visits, visa grants, European intake updates, and student reviews.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 shrink-0">
            <a
              href={company.social.facebook}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-[#1877F2] px-6 py-3 text-xs font-bold text-white hover:bg-[#166fe5] transition-colors shadow-sm"
            >
              📘 Visit Official Facebook Page
            </a>
            <a
              href={company.social.facebookReels}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-slate-300 bg-white px-6 py-3 text-xs font-bold text-slate-800 hover:bg-slate-50 transition-colors shadow-sm"
            >
              🎬 Watch Facebook Videos & Reels
            </a>
          </div>
        </div>
      </section>

      {/* Featured Video Topics Grid */}
      <section className="section-shell py-10 sm:py-16">
        <SectionHeading
          eyebrow="Verified Content"
          title="Featured Videos & Success Stories"
          subtitle="Explore key sessions and student milestones documented on our official Facebook channel."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {videoHighlights.map((v) => (
            <div
              key={v.title}
              className="card-clean rounded-3xl p-6 sm:p-8 flex flex-col justify-between border border-slate-200 hover:border-[#D4AF37] shadow-sm hover:shadow-md transition-all"
            >
              <div>
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <span className="badge-clean badge-gold text-[0.68rem]">
                    {v.category}
                  </span>
                  <span className="text-[0.68rem] font-semibold text-slate-500">
                    📍 {v.venue}
                  </span>
                </div>

                <h3 className="mt-4 font-display text-lg font-bold text-slate-900 leading-snug">
                  {v.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {v.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <a
                  href={company.social.facebookVideos}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-bold text-[#1877F2] hover:underline flex items-center gap-1.5"
                >
                  <span>▶ Watch on Facebook</span>
                </a>
                <a
                  href={`https://wa.me/${company.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(`Hello Future Edge Education, I saw your video on "${v.title}" and would like to learn more.`)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-bold text-emerald-700 hover:underline"
                >
                  💬 Inquire on WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <CtaBand />
    </>
  );
}
