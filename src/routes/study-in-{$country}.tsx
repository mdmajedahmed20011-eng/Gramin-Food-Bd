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
      ? `Study in ${d.name} from Bangladesh | Alex Global Consultancy — Dhaka & London`
      : "Study Abroad Destinations | Alex Global Consultancy";
    const description = d
      ? `${d.tagline}. Free profile assessment, university admissions, scholarships, and student visa guidance for ${d.name} from Alex Global Consultancy. Dhaka (Aftabnagar) & London (Cranberry Lane). Hotline: 01886 91 33 91.`
      : "Study abroad guidance from Alex Global Consultancy.";
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
    const text = `Hello Alex Global Consultancy! I want to study in ${d.name}.\n\nPlease guide me on admission requirements, scholarships, without IELTS (MOI) options, and upcoming intake deadlines.`;
    return `https://wa.me/${company.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(text)}`;
  };

  return (
    <>
      <PageHero
        eyebrow={`${d.flag} ${d.region} · Upcoming Intakes`}
        title={`Study in ${d.name}`}
        subtitle={d.tagline}
        image="/latest-assets/banner.png"
        imageAlt={`Study in ${d.name} — Alex Global Consultancy guidance`}
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
            <div className="rounded-3xl p-6 sm:p-8 border border-slate-200 bg-white shadow-sm">
              <h2 className="font-display text-lg font-black text-slate-900 border-b border-slate-100 pb-3">
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
                  <span className="font-bold text-red-600 mt-1 block">{d.pswv}</span>
                </div>
                <div className="rounded-2xl bg-slate-50 p-4 border border-slate-200">
                  <span className="text-slate-500 block text-xs font-medium">Major Intakes:</span>
                  <span className="font-bold text-slate-900 mt-1 block">{d.intakes}</span>
                </div>
                <div className="rounded-2xl bg-slate-50 p-4 border border-slate-200">
                  <span className="text-slate-500 block text-xs font-medium">Scholarships:</span>
                  <span className="font-bold text-red-600 mt-1 block">{d.scholarships}</span>
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
            <div className="rounded-3xl p-6 sm:p-8 border border-slate-200 bg-white shadow-sm">
              <h2 className="font-display text-xl font-black text-slate-900 mb-4">
                Why Study in {d.name} with Alex Global?
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 font-medium">
                {d.intro}
              </p>
              <BulletList items={d.why} />
            </div>

            {/* Top Partner Universities */}
            <div className="rounded-3xl p-6 sm:p-8 border border-slate-200 bg-white shadow-sm">
              <h2 className="font-display text-xl font-black text-slate-900 mb-4">
                Key Universities & Institutions in {d.name}
              </h2>
              <div className="grid gap-3 sm:grid-cols-2">
                {d.topUnis.map((uni) => (
                  <div
                    key={uni}
                    className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white text-lg shadow-sm border border-red-200 text-red-600">
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
            <div className="rounded-3xl p-6 sm:p-8 sticky top-24 border border-red-200 bg-white shadow-md space-y-4">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-red-50 border border-red-200 px-3 py-1 text-xs font-bold text-red-700">
                100% Free Profile Assessment
              </span>
              <h3 className="font-display text-lg font-black text-slate-900">
                Apply for {d.name} with Alex Global
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                Connect directly with our Dhaka & London advisors for university shortlisting, scholarships, and fast-track visa filing.
              </p>

              <div className="space-y-2.5 pt-2">
                <a
                  href={whatsappHref()}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-emerald w-full text-xs py-3 text-center justify-center shadow-sm"
                >
                  💬 Chat on WhatsApp with Advisor
                </a>
                <a
                  href="tel:01886913391"
                  className="btn-secondary w-full text-xs py-3 text-center justify-center"
                >
                  📞 Call Hotline: 01886 91 33 91
                </a>
              </div>

              <div className="border-t border-slate-100 pt-4 text-xs text-slate-600 space-y-2">
                <p>
                  <strong>📍 Dhaka Office:</strong> House - 03, Road - 03, Block: H, Aftabnagar, Dhaka.
                </p>
                <p>
                  <strong>🇬🇧 London Hub:</strong> The Arches Cranberry Lane, London E16 4BJ.
                </p>
                <p>
                  <strong>🕒 Hours:</strong> {company.hours}
                </p>
                <p className="text-emerald-700 font-bold">
                  ✓ Zero file-opening charges guaranteed
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
