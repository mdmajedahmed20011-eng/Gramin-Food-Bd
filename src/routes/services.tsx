import { createFileRoute } from "@tanstack/react-router";
import {
  Breadcrumbs,
  BulletList,
  CtaBand,
  PageHero,
  RegisterButton,
  SectionHeading,
} from "@/components/ui-blocks";
import { company, processSteps, services } from "@/lib/site-data";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Courses & Services | Affordable International | Maijdee, Noakhali" },
      {
        name: "description",
        content:
          "Explore IELTS preparation (Academic & GT), British Council Mock Test Center, Spoken English, Kids English, and 100% Free Study Abroad Counseling at Affordable International in Maijdee Court, Noakhali.",
      },
      { property: "og:title", content: "Courses & Services | Affordable International" },
      {
        property: "og:description",
        content:
          "Official British Council & IDP registration point. Comprehensive language courses and study abroad solutions in Maijdee Bazar, Noakhali.",
      },
    ],
  }),
  component: Services,
});

function Services() {
  return (
    <>
      <PageHero
        eyebrow="Courses & Educational Services"
        title="Comprehensive English & Global Education Programs"
        subtitle="From authentic IELTS mock hall practice and conversational English to child-friendly language foundations and 100% free study abroad counseling."
        image="/assets/ielts-orientation-poster.jpg"
        imageAlt="Affordable International classroom and mock test facilities"
      >
        <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Courses & Services" }]} />
      </PageHero>

      {/* Services Grid with Rich Actionable Details */}
      <section className="section-shell py-14 sm:py-20">
        <div className="grid gap-8 lg:grid-cols-2">
          {services.map((s) => (
            <article
              key={s.slug}
              id={s.slug}
              className="card-clean rounded-3xl p-8 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <div className="flex items-center gap-3">
                    <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-red-50 text-3xl">
                      {s.icon}
                    </span>
                    <div>
                      <h2 className="font-display text-xl font-bold text-slate-900">{s.title}</h2>
                      <span className="text-xs font-semibold text-[#ED1C24]">
                        {s.guarantee}
                      </span>
                    </div>
                  </div>
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-700">
                    {s.timeline}
                  </span>
                </div>

                <p className="mt-5 text-xs sm:text-sm leading-relaxed text-slate-600">
                  {s.summary}
                </p>

                <div className="mt-6 rounded-2xl bg-slate-50 p-5 border border-slate-200">
                  <h3 className="font-display text-xs font-bold uppercase tracking-wider text-slate-700 mb-3">
                    Key Features & Learning Outcomes:
                  </h3>
                  <BulletList items={s.points} />
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
                <RegisterButton
                  label={`Enroll / Inquire for ${s.title.split(" ")[0]}`}
                  variant="primary"
                  className="px-6 py-2.5 text-xs"
                />
                <a
                  href={`https://wa.me/${company.whatsapp}?text=${encodeURIComponent(`Hello Affordable International, I am interested in your ${s.title} course.`)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-bold text-emerald-700 hover:underline"
                >
                  💬 WhatsApp Inquiries
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 6-Step Roadmap */}
      <section className="section-shell py-14 sm:py-20 border-t border-slate-200">
        <SectionHeading
          eyebrow="Workflow"
          title="Our 6-Step Clear Roadmap"
          subtitle="How we guide you from initial counseling and language training to foreign university departure."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {processSteps.map((step) => (
            <div
              key={step.step}
              className="card-clean rounded-3xl p-6"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="font-display text-2xl font-extrabold text-[#ED1C24]">
                  {step.step}
                </span>
                <span className="badge-clean badge-red">
                  {step.badge}
                </span>
              </div>
              <h3 className="font-display text-base font-bold text-slate-900">
                {step.title}
              </h3>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                {step.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <CtaBand />
    </>
  );
}
