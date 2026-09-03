import { createFileRoute } from "@tanstack/react-router";
import {
  Breadcrumbs,
  BulletList,
  CtaBand,
  PageHero,
  RegisterButton,
  SectionHeading,
} from "@/components/ui-blocks";
import { company, verifiedEventsAndPartners } from "@/lib/site-data";

export const Route = createFileRoute("/offers")({
  head: () => ({
    meta: [
      { title: "Partner Sessions & Admissions Announcements | Future Edge Education" },
      {
        name: "description",
        content:
          "Current university sessions and special study abroad opportunities at Future Edge Education: Buckinghamshire New University UK direct delegation, Study in Europe without IELTS (Hungary, Denmark, Finland, Sweden), and 100% free profile evaluations.",
      },
      { property: "og:title", content: "Partner Sessions & Announcements | Future Edge Education" },
      {
        property: "og:description",
        content:
          "Meet foreign university delegates directly at Future Edge Education. Khan Tower, 359 DIT Road, Dhaka.",
      },
    ],
  }),
  component: Offers,
});

function Offers() {
  return (
    <>
      <PageHero
        eyebrow="Delegations & Announcements"
        title="Partner Sessions & Verified Announcements"
        subtitle="Exclusive foreign university partner sessions, without IELTS (MOI) European admissions campaigns, and 100% free profile evaluations at our Khan Tower Dhaka office."
        image="/brand-assets/banner.jpg"
        imageAlt="Future Edge Education live sessions and announcements"
      >
        <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Partner Sessions" }]} />
      </PageHero>

      {/* Active High-Priority Campaigns Grid */}
      <section className="section-shell py-14 sm:py-20">
        <SectionHeading
          eyebrow="Current Announcements"
          title="Verified Delegations & Live Campaigns"
          subtitle="All sessions below are directly verified from our official Facebook announcements and held at our Khan Tower Dhaka office or across our Sylhet network."
        />

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {verifiedEventsAndPartners.map((item) => (
            <div
              key={item.id}
              className="card-clean rounded-3xl p-8 flex flex-col justify-between border border-slate-200 hover:border-[#D4AF37] shadow-sm hover:shadow-md transition-all"
            >
              <div>
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <span className="badge-clean badge-gold">
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
                  <div className="mt-5 rounded-2xl bg-[#FCF8EE] p-4 border border-[#D4AF37]/30">
                    <p className="text-[0.68rem] font-bold uppercase tracking-wider text-[#8A6818] mb-2">
                      Session Highlights & Inclusions:
                    </p>
                    <BulletList items={item.benefits} />
                  </div>
                )}
              </div>

              <div className="mt-8 pt-4 border-t border-slate-100">
                <a
                  href={`https://wa.me/${company.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(`Hello Future Edge Education, I want to attend / register for: "${item.title}".`)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-emerald w-full text-center text-xs py-3 shadow-sm"
                >
                  💬 Inquire / Register on WhatsApp
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
