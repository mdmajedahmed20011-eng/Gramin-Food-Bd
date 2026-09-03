import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import {
  Breadcrumbs,
  BulletList,
  CtaBand,
  PageHero,
  RegisterButton,
} from "@/components/ui-blocks";
import { company, destinations } from "@/lib/site-data";

export const Route = createFileRoute("/study-in-{$country}")({
  loader: ({ params }) => {
    const destination = destinations.find((d) => d.slug === params.country);
    if (!destination) throw notFound();
    return { destination };
  },
  head: ({ loaderData }) => {
    const d = loaderData?.destination;
    const title = d
      ? `Study in ${d.name} from Bangladesh | Future Edge Education`
      : "Study Abroad Destinations | Future Edge Education";
    const description = d
      ? `${d.tagline}. Free counseling, university admissions, scholarships, and student visa guidance for ${d.name} from Future Edge Education, Khan Tower, 359 DIT Road, Dhaka.`
      : "Study abroad guidance from Future Edge Education.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
      ],
    };
  },
  component: DestinationPage,
});

function DestinationPage() {
  const { destination: d } = Route.useLoaderData();

  const whatsappHref = () => {
    const text = `Hello Future Edge Education! I want to study in ${d.name}.\n\nPlease guide me on admission requirements, scholarships, without IELTS (MOI) options, and upcoming intake deadlines.`;
    return `https://wa.me/${company.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(text)}`;
  };

  return (
    <>
      <PageHero
        eyebrow={`${d.flag} ${d.region} · Intakes Open`}
        title={`Study in ${d.name}`}
        subtitle={d.tagline}
        image="/brand-assets/banner.jpg"
        imageAlt={`Study in ${d.name} — Future Edge Education guidance`}
      >
        <div className="space-y-6">
          <Breadcrumbs
            items={[
              { label: "Home", to: "/" },
              { label: "Destinations", to: "/destinations" },
              { label: d.name },
            ]}
          />
          <div className="flex flex-wrap gap-4">
            <RegisterButton label={`Free ${d.name} Assessment`} className="px-8 py-3.5" />
            <a
              href={whatsappHref()}
              target="_blank"
              rel="noreferrer"
              className="btn-emerald px-6 py-3.5 text-xs sm:text-sm font-bold shadow-md"
            >
              <span>💬 WhatsApp About {d.name}</span>
            </a>
          </div>
        </div>
      </PageHero>

      {/* Main Country Content & Sidebar */}
      <section className="section-shell py-14 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          {/* Main Left Content */}
          <div className="space-y-10">
            {/* Quick Metrics Matrix */}
            <div className="card-clean rounded-3xl p-6 sm:p-8 border border-slate-200">
              <h2 className="font-display text-lg font-bold text-slate-900 border-b border-slate-100 pb-3">
                Key Facts for Bangladeshi Students · {d.name}
              </h2>
              <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 text-xs sm:text-sm">
                <div className="rounded-2xl bg-slate-50 p-4 border border-slate-200">
                  <span className="text-slate-500 block text-xs font-medium">Average Tuition:</span>
                  <span className="font-bold text-slate-900 mt-1 block">{d.avgTuition}</span>
                </div>
                <div className="rounded-2xl bg-slate-50 p-4 border border-slate-200">
                  <span className="text-slate-500 block text-xs font-medium">Living Expenses:</span>
                  <span className="font-bold text-slate-900 mt-1 block">{d.avgLiving}</span>
                </div>
                <div className="rounded-2xl bg-slate-50 p-4 border border-slate-200">
                  <span className="text-slate-500 block text-xs font-medium">Post-Study Work Visa:</span>
                  <span className="font-bold text-[#AA771C] mt-1 block">{d.pswv}</span>
                </div>
                <div className="rounded-2xl bg-slate-50 p-4 border border-slate-200">
                  <span className="text-slate-500 block text-xs font-medium">Major Intakes:</span>
                  <span className="font-bold text-slate-900 mt-1 block">{d.intakes}</span>
                </div>
                <div className="rounded-2xl bg-slate-50 p-4 border border-slate-200">
                  <span className="text-slate-500 block text-xs font-medium">Scholarships:</span>
                  <span className="font-bold text-[#8A6818] mt-1 block">{d.scholarships}</span>
                </div>
                <div className="rounded-2xl bg-slate-50 p-4 border border-slate-200">
                  <span className="text-slate-500 block text-xs font-medium">Without IELTS / MOI:</span>
                  <span className={`font-bold mt-1 block ${d.withoutIelts ? "text-emerald-700" : "text-slate-700"}`}>
                    {d.withoutIelts ? "Available (Selected Programs)" : "IELTS Required"}
                  </span>
                </div>
              </div>
            </div>

            {/* Why Study in Country */}
            <div className="card-clean rounded-3xl p-6 sm:p-8 border border-slate-200">
              <h2 className="font-display text-xl font-bold text-slate-900 mb-4">
                Why Study in {d.name} with Future Edge?
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                {d.intro}
              </p>
              <BulletList items={d.why} />
            </div>

            {/* Top Partner Universities */}
            <div className="card-clean rounded-3xl p-6 sm:p-8 border border-slate-200">
              <h2 className="font-display text-xl font-bold text-slate-900 mb-4">
                Key Universities & Partner Institutions in {d.name}
              </h2>
              <div className="grid gap-3 sm:grid-cols-2">
                {d.topUnis.map((uni) => (
                  <div
                    key={uni}
                    className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white text-lg shadow-sm border border-[#D4AF37]/30 text-[#8A6818]">
                      🎓
                    </span>
                    <span className="text-xs font-bold text-slate-800">{uni}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Sidebar: Assessment Form & Hotlines */}
          <aside className="space-y-6">
            <div className="card-clean rounded-3xl p-6 sm:p-8 sticky top-24 border border-[#D4AF37]/30 shadow-md">
              <span className="badge-clean badge-gold">
                100% Free Profile Assessment
              </span>
              <h3 className="mt-3 font-display text-lg font-bold text-slate-900">
                Apply for {d.name} with Future Edge
              </h3>
              <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                Connect directly with senior counselors Moshiur & Tanvir for university shortlisting and visa filing.
              </p>

              <div className="mt-6 space-y-3">
                <a
                  href={whatsappHref()}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-emerald w-full text-xs py-3 text-center shadow-sm"
                >
                  💬 Chat on WhatsApp with Counselor
                </a>
                <a
                  href={`tel:+880${company.phones[0].replace(/[^0-9]/g, "").slice(-10)}`}
                  className="btn-secondary w-full text-xs py-3 text-center"
                >
                  📞 Call Hotline: {company.phones[0]}
                </a>
              </div>

              <div className="mt-6 border-t border-slate-100 pt-4 text-xs text-slate-600 space-y-2">
                <p>
                  <strong>📍 Walk-in Desk:</strong> Khan Tower, 359 DIT Road, Dhaka 1219.
                </p>
                <p>
                  <strong>🌐 Network:</strong> Dhaka | Sylhet
                </p>
                <p>
                  <strong>🕒 Working Hours:</strong> {company.hours}
                </p>
                <p className="text-emerald-700 font-bold">
                  ✓ Zero file-opening charges
                </p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Final CTA */}
      <CtaBand />
    </>
  );
}
