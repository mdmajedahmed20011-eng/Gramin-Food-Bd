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
      { title: "Official Videos & Reels | Academic Allies — Chattogram" },
      {
        name: "description",
        content:
          "Watch official video reels, European university admissions, Italian DSU scholarship guides, visa celebrations, and IELTS language academy updates from Academic Allies in Chattogram.",
      },
      { property: "og:title", content: "Official Videos & Reels | Academic Allies" },
      {
        property: "og:description",
        content:
          "Explore European study pathways, Italian Padova admissions, DSU scholarships (€7,000/yr), and British Council certified IELTS updates from our Finlay Square Chattogram corporate headquarters.",
      },
    ],
  }),
  component: Videos,
});

const officialReels = [
  {
    reelId: "1027311573740581",
    url: "https://www.facebook.com/academicalliesofficial/",
    title: "Advancing Education & Chattogram Corporate Headquarters",
    desc: "Introduction to Academic Allies corporate facilities at Finlay Square (7th Floor), CDA Avenue, East Nasirabad, Chattogram.",
    category: "Corporate Profile",
    hub: "Finlay Square HQ",
  },
  {
    reelId: "2176784273273108",
    url: "https://www.facebook.com/academicalliesofficial/",
    title: "100% Genuine Portal Processing & Anti-Fraud Standards",
    desc: "Why Academic Allies strictly operates on official government and university portals ('Dalaler Fake Visa Noy') with verified documentation.",
    category: "Visa Integrity",
    hub: "Compliance Cell",
  },
  {
    reelId: "2055573665047655",
    url: "https://www.facebook.com/academicalliesofficial/",
    title: "Italy DSU Scholarship & Padova University Direct Pathway",
    desc: "Complete breakdown of Italian public universities, Universitaly pre-enrollment, and regional DSU scholarships up to €7,000/year living allowance.",
    category: "European Admissions",
    hub: "Italy & Europe",
  },
];

const videoHighlights = [
  {
    title: "Academic Allies IELTS Masterclass (Target Band 7.0+)",
    desc: "Interactive speaking drills, Cambridge practice materials, and mock exam evaluations led by British Council & IDP certified trainers.",
    category: "Language Academy",
    venue: "Chattogram Language Studio",
  },
  {
    title: "Kids English & Spoken Foundation Showcase",
    desc: "Child-friendly phonics, public speaking confidence, and interactive conversational English designed for young learners aged 5-14.",
    category: "Junior Academy",
    venue: "Finlay Square Suites",
  },
  {
    title: "European Visa Success & Scholar Testimonials",
    desc: "Real stories and celebrations of students securing admission and visas for Italy, Sweden, Finland, UK, and Canada.",
    category: "Scholar Success",
    venue: "Chattogram Corporate Desk",
  },
  {
    title: "Embassy Mock Interviews & Financial Documentation",
    desc: "How Academic Allies counselors conduct rigorous 1-on-1 embassy mock interview sessions and bank file verification.",
    category: "Embassy Prep",
    venue: "Executive Boardroom",
  },
];

function Videos() {
  return (
    <>
      <PageHero
        eyebrow="Multimedia & Official Community"
        title="Official Videos, Reels & Broadcasts"
        subtitle="Watch official broadcasts, European university guidance, Italian DSU scholarship orientations, and language academy highlights from Academic Allies."
        image="/assets/banner.jpg"
        imageAlt="Academic Allies official video showcase"
      >
        <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Official Videos" }]} />
      </PageHero>

      {/* Social Community Callout */}
      <section className="section-shell py-12">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 rounded-3xl border border-[#D4AF37]/40 bg-linear-to-r from-amber-50/70 via-white to-blue-50/70 p-6 sm:p-8 shadow-sm">
          <div>
            <span className="badge-clean badge-navy">
              Official Facebook Channel · Academic Allies
            </span>
            <h2 className="mt-2 font-display text-xl sm:text-2xl font-bold text-slate-900">
              Follow @AcademicAlliesOfficial for Daily Updates
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl">
              Join 47,000+ followers and stay connected for upcoming European intake deadlines, Italian DSU scholarship updates, and IELTS batch schedules.
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
          subtitle="Watch our official Facebook reels directly here. Learn about our European admission portals, anti-fraud standards, and Language Academy."
        />

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {officialReels.map((reel) => (
            <div
              key={reel.reelId}
              className="rounded-3xl border border-slate-200/90 bg-white p-5 shadow-sm hover:shadow-xl hover:border-[#D4AF37] transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
                  <span className="badge-clean badge-navy text-[0.68rem]">{reel.category}</span>
                  <span className="text-[0.68rem] font-bold text-slate-500">📍 {reel.hub}</span>
                </div>

                <div className="flex justify-center bg-[#0C2340] rounded-2xl overflow-hidden p-2">
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
                  href={`https://wa.me/${company.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(`Hello Academic Allies, I watched your reel "${reel.title}" and would like counseling.`)}`}
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
          subtitle="Explore key sessions and learning modules conducted across our Finlay Square Chattogram corporate suites and digital classroom."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {videoHighlights.map((v) => (
            <div
              key={v.title}
              className="card-clean rounded-3xl p-6 sm:p-8 flex flex-col justify-between border border-slate-200 hover:border-[#D4AF37] shadow-sm hover:shadow-md transition-all bg-white"
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
                  href={`https://wa.me/${company.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(`Hello Academic Allies, I would like more information about "${v.title}".`)}`}
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
