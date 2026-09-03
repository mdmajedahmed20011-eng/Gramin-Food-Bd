import { createFileRoute } from "@tanstack/react-router";
import {
  Breadcrumbs,
  BulletList,
  CtaBand,
  PageHero,
  RegisterButton,
  SectionHeading,
} from "@/components/ui-blocks";
import { company, liveOffers } from "@/lib/site-data";

export const Route = createFileRoute("/offers")({
  head: () => ({
    meta: [
      { title: "Live Offers & Exam Notices | Affordable International Maijdee" },
      {
        name: "description",
        content:
          "Current offers at Affordable International: ৳2,000 instant cashback on IELTS exam registration, 2 Free Mock Tests, free study abroad counseling, and September 2026 fee update notices.",
      },
      { property: "og:title", content: "Live Offers & Exam Notices | Affordable International" },
      {
        property: "og:description",
        content:
          "Instant cashback, free mock tests, and official IDP/British Council exam notices in Maijdee Court, Noakhali.",
      },
    ],
  }),
  component: Offers,
});

function Offers() {
  return (
    <>
      <PageHero
        eyebrow="Special Offers & Official Notices"
        title="Active IELTS Promotions & Announcements"
        subtitle="Exclusive cashbacks, free mock test packages, and official test fee updates directly from our IDP and British Council registration desk in Maijdee Court, Noakhali."
        image="/assets/ielts-orientation-poster.jpg"
        imageAlt="Affordable International live offers and orientation notices"
      >
        <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Live Offers" }]} />
      </PageHero>

      {/* Active High-Priority Campaigns Grid */}
      <section className="section-shell py-14 sm:py-20">
        <SectionHeading
          eyebrow="Current Promotions"
          title="Verified Discounts & Official Notices"
          subtitle="All promotions below are verified from our official Facebook announcements and active at our Ashfak Plaza office."
        />

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {liveOffers.map((offer) => (
            <div
              key={offer.id}
              className="card-clean rounded-3xl p-8 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <span className="badge-clean badge-red">
                    {offer.badge}
                  </span>
                </div>

                <h3 className="mt-4 font-display text-xl font-bold text-slate-900 leading-snug">
                  {offer.title}
                </h3>
                <p className="mt-3 text-xs text-slate-600 leading-relaxed">
                  {offer.description}
                </p>

                {offer.benefits && (
                  <div className="mt-5 rounded-2xl bg-emerald-50/70 p-4 border border-emerald-200">
                    <p className="text-[0.68rem] font-bold uppercase tracking-wider text-emerald-900 mb-2">
                      Included Package Perks:
                    </p>
                    <BulletList items={offer.benefits} />
                  </div>
                )}

                {offer.fees && (
                  <div className="mt-5 rounded-2xl bg-slate-50 p-4 border border-slate-200 space-y-2 text-xs">
                    <p className="font-bold text-slate-800 border-b border-slate-200 pb-1.5">
                      Updated Fee Schedule:
                    </p>
                    {offer.fees.map((f) => (
                      <div key={f.name} className="flex justify-between py-1 border-b border-slate-100 last:border-0">
                        <span className="text-slate-600">{f.name}:</span>
                        <span className="font-bold text-[#ED1C24]">{f.fee}</span>
                      </div>
                    ))}
                    {offer.note && (
                      <p className="pt-2 text-[0.68rem] text-slate-500 italic">{offer.note}</p>
                    )}
                  </div>
                )}

                {offer.schedule && (
                  <div className="mt-5 rounded-2xl bg-sky-50 p-4 border border-sky-200 space-y-2 text-xs">
                    <p className="font-bold text-sky-900">
                      🕒 Schedule: <span className="text-slate-700">{offer.schedule}</span>
                    </p>
                    <p className="text-slate-600">
                      📍 Venue: {offer.venue}
                    </p>
                    {offer.perks && (
                      <div className="pt-2 border-t border-sky-100">
                        <BulletList items={offer.perks} />
                      </div>
                    )}
                  </div>
                )}
              </div>

              <div className="mt-8 pt-4 border-t border-slate-100">
                <a
                  href={`https://wa.me/${company.whatsapp}?text=${encodeURIComponent(`Hello Affordable International, I want to avail the offer: "${offer.title}".`)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-emerald w-full text-center text-xs py-3 shadow-sm"
                >
                  💬 {offer.cta}
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
