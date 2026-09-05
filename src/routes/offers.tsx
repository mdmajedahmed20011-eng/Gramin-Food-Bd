import { createFileRoute } from "@tanstack/react-router";
import {
  Breadcrumbs,
  BulletList,
  CtaBand,
  PageHero,
  SectionHeading,
} from "@/components/ui-blocks";
import { company, upcomingIntakesAndOffers } from "@/lib/site-data";

export const Route = createFileRoute("/offers")({
  head: () => ({
    meta: [
      { title: "Upcoming Intakes & Admissions Offers | Alex Global Consultancy" },
      {
        name: "description",
        content:
          "Explore upcoming intakes (Jan, May, Sep) for the UK, Canada, Australia, Cyprus, USA, and Europe, alongside new IELTS and Kids English batch schedules at Alex Global Consultancy.",
      },
      { property: "og:title", content: "Upcoming Intakes & Offers | Alex Global Consultancy" },
      {
        property: "og:description",
        content:
          "Secure scholarships, fast-track offer letters, and join new IELTS batches at Alex Global Consultancy Dhaka (Aftabnagar) & London (Cranberry Lane).",
      },
    ],
  }),
  component: Offers,
});

function Offers() {
  return (
    <>
      <PageHero
        eyebrow="Admissions & Special Intakes"
        title="Upcoming Intakes & Academy Admissions"
        subtitle="Explore active study abroad application deadlines, partner university bursaries, and new IELTS & Kids English coaching schedules across our Dhaka and London network."
        image="/latest-assets/banner.png"
        imageAlt="Alex Global Consultancy active admissions and intakes"
      >
        <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Intakes & Offers" }]} />
      </PageHero>

      {/* Active High-Priority Campaigns Grid */}
      <section className="section-shell py-14 sm:py-20">
        <SectionHeading
          eyebrow="Active Campaigns"
          title="Current Intakes, Drives & Academy Batches"
          subtitle="All sessions below are actively accepting applications with complete transparency, zero file-opening fees, and dedicated Dhaka & London advisory."
        />

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {upcomingIntakesAndOffers.map((item) => (
            <div
              key={item.id}
              className="card-clean rounded-3xl p-8 flex flex-col justify-between border border-slate-200 hover:border-red-300 shadow-sm hover:shadow-md transition-all bg-white"
            >
              <div>
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <span className="badge-clean badge-red">
                    {item.badge}
                  </span>
                  <span className="text-xs font-semibold text-slate-500">
                    {item.date}
                  </span>
                </div>

                <h3 className="mt-4 font-display text-xl font-bold text-slate-900 leading-snug">
                  {item.title}
                </h3>
                <p className="mt-3 text-xs text-slate-600 leading-relaxed">
                  {item.description}
                </p>

                {item.benefits && (
                  <div className="mt-5 rounded-2xl bg-slate-50 p-4 border border-slate-200/80">
                    <p className="text-[0.68rem] font-bold uppercase tracking-wider text-red-700 mb-2">
                      Key Highlights & Inclusions:
                    </p>
                    <BulletList items={item.benefits} />
                  </div>
                )}
              </div>

              <div className="mt-8 pt-4 border-t border-slate-100">
                <a
                  href={`https://wa.me/${company.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(`Hello Alex Global Consultancy, I want to apply / register for: "${item.title}".`)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-emerald w-full text-center text-xs py-3 shadow-sm"
                >
                  💬 Inquire / Apply on WhatsApp
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

