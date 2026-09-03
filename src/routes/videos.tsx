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
      { title: "Videos & Student Stories | Affordable International" },
      {
        name: "description",
        content:
          "Watch classroom activities, IELTS mock test hall walkthroughs, orientation classes, and student feedback from Affordable International's official Facebook page.",
      },
      { property: "og:title", content: "Videos & Student Stories | Affordable International" },
      {
        property: "og:description",
        content:
          "Live orientation classes, IELTS prep tips, and study abroad guidance from our Maijdee campus.",
      },
    ],
  }),
  component: Videos,
});

const videoHighlights = [
  {
    title: "IELTS Orientation Free Class & Strategy Session",
    desc: "Live orientation class breakdown covering listening, reading, writing, and speaking rubrics for candidates in Maijdee.",
    category: "IELTS Orientation",
    venue: "Ashfak Plaza (4th Floor), Maijdee",
  },
  {
    title: "Affordable Mock Test Center Walkthrough",
    desc: "Authentic exam-hall simulation with individual acoustic headphones and timed answer sheets under British Council standards.",
    category: "Mock Test Center",
    venue: "Authorized British Council Venue",
  },
  {
    title: "Kids & Junior English Interactive Class Highlights",
    desc: "Young learners engaging in phonics games, storytelling, and conversational practice without hesitation.",
    category: "Kids English",
    venue: "Junior Classroom",
  },
  {
    title: "Study Abroad in Europe & UK University Guidance",
    desc: "Key updates on scholarships, admission requirements, and visa files for Bangladeshi students.",
    category: "Study Abroad",
    venue: "Counseling Desk",
  },
];

function Videos() {
  return (
    <>
      <PageHero
        eyebrow="Multimedia & Social Channels"
        title="Student Stories & Campus Highlights"
        subtitle="Watch real classroom sessions, orientation lectures, mock test walk-throughs, and student experiences from our official Facebook page."
        image="/assets/affordable-banner.jpg"
        imageAlt="Affordable International official video and multimedia showcase"
      >
        <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Student Stories" }]} />
      </PageHero>

      {/* Social Community Callout */}
      <section className="section-shell py-12">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm">
          <div>
            <span className="badge-clean badge-red">
              Official Facebook Channel
            </span>
            <h2 className="mt-2 font-display text-xl sm:text-2xl font-bold text-slate-900">
              Follow Us on Facebook for Daily Updates
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Stay tuned for orientation class schedules, mock test dates, fee notices, and student success stories.
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
              🎬 Watch Facebook Reels
            </a>
          </div>
        </div>
      </section>

      {/* Highlights Grid */}
      <section className="section-shell py-8 sm:py-12 border-t border-slate-200">
        <SectionHeading
          eyebrow="Media Highlights"
          title="Inside Our Classroom & Event Sessions"
          subtitle="Explore the active learning environment created at Affordable International in Maijdee Bazar, Noakhali."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {videoHighlights.map((v, i) => (
            <div
              key={i}
              className="card-clean rounded-3xl p-6 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <span className="badge-clean badge-cyan">
                    {v.category}
                  </span>
                  <span className="text-[0.68rem] text-slate-500 font-semibold">
                    📍 {v.venue}
                  </span>
                </div>
                <h3 className="mt-4 font-display text-lg font-bold text-slate-900">
                  {v.title}
                </h3>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                  {v.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <a
                  href={company.social.facebook}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-bold text-[#ED1C24] hover:underline"
                >
                  Watch Video on Facebook ↗
                </a>
                <a
                  href={`https://wa.me/${company.whatsapp}?text=${encodeURIComponent(`Hello Affordable International, I want to attend the next ${v.category} session.`)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-bold text-emerald-700 hover:underline"
                >
                  💬 Register via WhatsApp
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
