import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Breadcrumbs, CtaBand, PageHero, SectionHeading } from "@/components/ui-blocks";
import { company, destinations } from "@/lib/site-data";

export const Route = createFileRoute("/destinations")({
  head: () => ({
    meta: [
      { title: "Study Abroad Destinations | Affordable International" },
      {
        name: "description",
        content:
          "Explore study abroad destinations guided by Affordable International: UK, USA, Canada, Australia, South Korea, Malaysia, and Europe. Verified tuition fees, post-study work visas, and scholarships.",
      },
      { property: "og:title", content: "Study Abroad Destinations | Affordable International" },
      {
        property: "og:description",
        content:
          "Explore More, Spend Less. Complete guide to international universities, scholarships, and student visas in Maijdee Court, Noakhali.",
      },
    ],
  }),
  component: Destinations,
});

function Destinations() {
  const [activeRegion, setActiveRegion] = useState<string>("All");
  const [search, setSearch] = useState<string>("");

  const regions = ["All", "Europe", "North America", "East Asia", "Southeast Asia", "Oceania"];

  const filtered = destinations.filter((d) => {
    const matchesRegion =
      activeRegion === "All" ||
      d.region === activeRegion ||
      (activeRegion === "Europe" && d.region.includes("Europe"));
    const matchesSearch =
      d.name.toLowerCase().includes(search.toLowerCase()) ||
      d.popularFields.some((f) => f.toLowerCase().includes(search.toLowerCase())) ||
      d.tagline.toLowerCase().includes(search.toLowerCase());
    return matchesRegion && matchesSearch;
  });

  return (
    <>
      <PageHero
        eyebrow="Global Education Directory"
        title="Premier Global Study Destinations"
        subtitle="Explore verified admission criteria, post-study work rights (PSWV), average living costs, and scholarships across the countries represented by Affordable International."
        image="/assets/affordable-banner.jpg"
        imageAlt="Affordable International study abroad destinations banner"
      >
        <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Destinations" }]} />
      </PageHero>

      {/* Directory & Filters */}
      <section className="section-shell py-14 sm:py-20">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between border-b border-slate-200 pb-8">
          {/* Region Tabs */}
          <div className="flex flex-wrap gap-2">
            {regions.map((reg) => (
              <button
                key={reg}
                type="button"
                onClick={() => setActiveRegion(reg)}
                className={`rounded-full px-4 py-2 text-xs font-bold transition-all cursor-pointer ${
                  activeRegion === reg
                    ? "bg-[#0A192F] text-white shadow-sm"
                    : "border border-slate-200 bg-white text-slate-700 hover:bg-slate-100"
                }`}
              >
                {reg} {reg === "All" ? `(${destinations.length})` : ""}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="w-full max-w-xs">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="🔍 Search country or major..."
              className="w-full rounded-full border border-slate-300 bg-white px-4 py-2 text-xs text-slate-800 outline-none shadow-sm focus:border-[#ED1C24] focus:ring-2 focus:ring-[#ED1C24]/10"
            />
          </div>
        </div>

        {/* Results Counter */}
        <div className="mt-6 flex items-center justify-between text-xs text-slate-500">
          <p>
            Showing <strong>{filtered.length}</strong> of {destinations.length} destinations
          </p>
          <span className="text-emerald-700 font-bold">
            ✓ 100% Free Profile Assessment at our Maijdee Office
          </span>
        </div>

        {/* Destination Cards Grid */}
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((d) => (
            <article
              key={d.slug}
              className="card-clean rounded-3xl p-6 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{d.flag}</span>
                    <div>
                      <h3 className="font-display text-lg font-bold text-slate-900">
                        {d.name}
                      </h3>
                      <span className="text-xs font-semibold text-slate-500">{d.region}</span>
                    </div>
                  </div>
                  <span className="rounded-full bg-red-50 border border-red-200 px-2.5 py-0.5 text-xs font-bold text-[#ED1C24]">
                    {d.pswv}
                  </span>
                </div>

                <p className="mt-4 text-xs text-slate-600 leading-relaxed">
                  {d.intro}
                </p>

                <div className="mt-5 rounded-2xl bg-slate-50 p-4 border border-slate-200 space-y-2 text-xs">
                  <div className="flex justify-between">
                    <span className="text-slate-500 font-medium">Avg Tuition:</span>
                    <span className="font-bold text-slate-900">{d.avgTuition}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500 font-medium">Avg Living:</span>
                    <span className="font-bold text-slate-900">{d.avgLiving}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500 font-medium">Main Intakes:</span>
                    <span className="font-bold text-slate-900">{d.intakes}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500 font-medium">Scholarships:</span>
                    <span className="font-bold text-amber-700">{d.scholarships}</span>
                  </div>
                </div>

                {/* Popular Programs */}
                <div className="mt-4">
                  <span className="text-[0.68rem] font-bold uppercase tracking-wider text-slate-400">
                    Popular Fields of Study:
                  </span>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {d.popularFields.map((f) => (
                      <span
                        key={f}
                        className="rounded-lg bg-slate-100 px-2 py-0.5 text-[0.68rem] font-medium text-slate-700"
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <a
                  href={`https://wa.me/${company.whatsapp}?text=${encodeURIComponent(`Hello Affordable International, I am interested in studying in ${d.name}.`)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-bold text-emerald-700 hover:underline"
                >
                  💬 Inquire on WhatsApp
                </a>
                <Link
                  to="/study-in-{$country}"
                  params={{ country: d.slug }}
                  className="btn-primary text-xs py-2 px-4 shadow-sm"
                >
                  Country Guide →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <CtaBand />
    </>
  );
}
