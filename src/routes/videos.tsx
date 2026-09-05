import { createFileRoute } from "@tanstack/react-router";
import {
  Breadcrumbs,
  CtaBand,
  PageHero,
  SectionHeading,
} from "@/components/ui-blocks";
import { company } from "@/lib/site-data";
import { FbReel } from "@/components/fb-reel";

export const Route = createFileRoute("/videos")({
  head: () => ({
    meta: [
      { title: "Official Videos & Reels | Alex Global Consultancy (AGC)" },
      {
        name: "description",
        content:
          "Watch official video reels, dual-hub office updates (Dhaka & London), visa categories, and destination guides from Alex Global Consultancy.",
      },
      { property: "og:title", content: "Official Videos & Reels | Alex Global Consultancy" },
      {
        property: "og:description",
        content:
          "Explore study abroad pathways, IELTS & Spoken English academy updates, and dual-hub guidance from our Dhaka and London offices.",
      },
    ],
  }),
  component: Videos,
});

const officialReels = [
  {
    reelId: "1027311573740581",
    url: "https://www.facebook.com/reel/1027311573740581/",
    title: "Corporate Profile & Dual Office Network",
    desc: "Comprehensive introduction to Alex Global Consultancy featuring our Dhaka Corporate Office in Aftabnagar and London Branch in Cranberry Lane.",
    category: "Office Profile",
    hub: "Dhaka & London",
  },
  {
    reelId: "2176784273273108",
    url: "https://www.facebook.com/reel/2176784273273108/",
    title: "Global Services & 8 Visa Categories",
    desc: "In-depth overview of our 8 processed visa categories including Student, Spouse, Visit/Tourist, Business, Work Permit, Medical, Migration, and Sports.",
    category: "Visa Services",
    hub: "Global Reach",
  },
  {
    reelId: "2055573665047655",
    url: "https://www.facebook.com/reel/2055573665047655/",
    title: "Top Student-Friendly Destinations",
    desc: "Country selection guide highlighting study in Canada, UK, Australia, Finland, Cyprus, and Germany with fast processing and scholarship support.",
    category: "Study Abroad",
    hub: "Worldwide",
  },
];

const videoHighlights = [
  {
    title: "IELTS & Spoken English Academy Masterclass",
    desc: "Interactive speaking drills, band-scoring strategies, and small-batch mentoring conducted at our Aftabnagar Dhaka facility.",
    category: "Language Academy",
    venue: "Dhaka Corporate Hub",
  },
  {
    title: "Kids English & Spoken Foundation Showcase",
    desc: "Child-friendly phonics, confidence building, and conversational mastery designed for young learners aged 5-14.",
    category: "Junior Academy",
    venue: "Language Studio",
  },
  {
    title: "UK & European Admissions Briefing",
    desc: "Detailed roadmap on university selection, CAS issuance, and tuition payment safety coordinated directly with our London office.",
    category: "Admissions Guidance",
    venue: "London & Dhaka Liaison",
  },
  {
    title: "Document Verification & Mock Visa Interviews",
    desc: "How AGC counselors conduct 1-on-1 embassy mock interviews and rigorous documentation checks to maximize visa success rates.",
    category: "Visa Preparation",
    venue: "Executive Boardroom",
  },
];

function Videos() {
  return (
    <>
      <PageHero
        eyebrow="Multimedia & Official Broadcasts"
        title="Official Video Reels & Insights"
        subtitle="Watch official broadcasts, dual-hub office features, destination walkthroughs, and language academy highlights from Alex Global Consultancy."
        image="/latest-assets/banner.png"
        imageAlt="Alex Global Consultancy official video showcase"
      >
        <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Official Videos" }]} />
      </PageHero>

      {/* Social Community Callout */}
      <section className="section-shell py-12">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 rounded-3xl border border-red-200 bg-linear-to-r from-red-50/70 via-white to-blue-50/70 p-6 sm:p-8 shadow-sm">
          <div>
            <span className="badge-clean badge-red">
              Official Facebook Channel · Alex Global Consultancy
            </span>
            <h2 className="mt-2 font-display text-xl sm:text-2xl font-bold text-slate-900">
              Follow @AlexGlobalConsultancy for Daily Updates
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl">
              Stay connected for live admission announcements, upcoming intake deadlines, IELTS batch schedules, and student visa updates.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 shrink-0">
            <a
              href={company.social.facebook}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-[#1877F2] px-6 py-3 text-xs font-bold text-white hover:bg-[#166fe5] transition-colors shadow-sm flex items-center gap-2"
            >
              <span>📘 Visit Facebook Page</span>
            </a>
            <a
              href={company.social.facebookVideos}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-slate-300 bg-white px-6 py-3 text-xs font-bold text-slate-800 hover:bg-slate-50 transition-colors shadow-sm flex items-center gap-2"
            >
              <span>🎬 Watch All Videos & Reels</span>
            </a>
          </div>
        </div>
      </section>

      {/* Embedded Official Reels Section */}
      <section className="section-shell py-10 sm:py-16">
        <SectionHeading
          eyebrow="Verified Broadcasts"
          title="Featured Facebook Reels"
          subtitle="Watch our official Facebook reels directly here. Learn about our dual offices, complete service spectrum, and top study abroad destinations."
        />

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {officialReels.map((reel) => (
            <div
              key={reel.reelId}
              className="rounded-3xl border border-slate-200/90 bg-white p-5 shadow-sm hover:shadow-xl hover:border-red-300 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
                  <span className="badge-clean badge-red text-[0.68rem]">{reel.category}</span>
                  <span className="text-[0.68rem] font-bold text-slate-500">📍 {reel.hub}</span>
                </div>

                <div className="flex justify-center bg-slate-950 rounded-2xl overflow-hidden p-2">
                  <FbReel reelId={reel.reelId} url={reel.url} title={reel.title} />
                </div>

                <h3 className="mt-4 font-display text-base sm:text-lg font-bold text-slate-900 leading-snug">
                  {reel.title}
                </h3>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                  {reel.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <a
                  href={reel.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-bold text-[#1877F2] hover:underline flex items-center gap-1.5"
                >
                  <span>▶ View on Facebook</span>
                </a>
                <a
                  href={`https://wa.me/${company.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(`Hello Alex Global Consultancy, I watched your reel "${reel.title}" and would like counseling.`)}`}
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

      {/* Academy & Counseling Topics */}
      <section className="section-shell py-10 sm:py-16 border-t border-slate-100 bg-slate-50/50">
        <SectionHeading
          eyebrow="Academy & Advisory"
          title="Educational Highlights & Seminars"
          subtitle="Explore key sessions and learning modules conducted across our Dhaka corporate campus and London advisory desk."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {videoHighlights.map((v) => (
            <div
              key={v.title}
              className="card-clean rounded-3xl p-6 sm:p-8 flex flex-col justify-between border border-slate-200 hover:border-red-300 shadow-sm hover:shadow-md transition-all bg-white"
            >
              <div>
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <span className="badge-clean badge-navy text-[0.68rem]">
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
                  href={`https://wa.me/${company.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(`Hello Alex Global Consultancy, I would like more information about "${v.title}".`)}`}
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

