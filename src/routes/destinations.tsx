import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Breadcrumbs, CtaBand, PageHero } from "@/components/ui-blocks";
import { company, destinations } from "@/lib/site-data";

export const Route = createFileRoute("/destinations")({
  head: () => ({
    meta: [
      { title: "Study Abroad Destinations | Future Edge Education & Consultancy" },
      {
        name: "description",
        content:
          "Explore premier study abroad destinations processed by Future Edge Education: UK, Europe (Hungary, Denmark, Finland, Sweden), Australia, Canada, New Zealand, Malaysia, and USA. Verified tuition fees, post-study work visas, and without IELTS (MOI) options.",
      },
      { property: "og:title", content: "Study Abroad Destinations | Future Edge Education" },
      {
        property: "og:description",
        content:
          "Fulfill Your Study Abroad Dream With Us! Complete verified guide to international universities, scholarships, and student visas in Dhaka & Sylhet.",
      },
    ],
  }),
  component: Destinations,
});

function Destinations() {
  const [activeRegion, setActiveRegion] = useState<string>("All");
  const [search, setSearch] = useState<string>("");

  const regions = ["All", "Europe", "North America", "Southeast Asia", "Oceania"];

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
        title="Verified Study Destinations"
        subtitle="Explore admission criteria, post-study work rights (PSW), average living costs, scholarships, and without IELTS (MOI) pathways across the countries represented by Future Edge Education."
        image="/brand-assets/banner.jpg"
        imageAlt="Future Edge Education official global destinations banner"
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
                    ? "bg-[#090C10] text-[#F5D365] border border-[#D4AF37] shadow-sm"
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
              placeholder="🔍 Search country or field..."
              className="w-full rounded-full border border-slate-300 bg-white px-4 py-2 text-xs text-slate-800 outline-none shadow-sm focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/10"
            />
          </div>
        </div>

        {/* Results Counter */}
        <div className="mt-6 flex items-center justify-between text-xs text-slate-500">
          <p>
            Showing <strong>{filtered.length}</strong> of {destinations.length} verified destinations
          </p>
          <span className="text-[#8A6818] font-bold">
            ✓ 100% Free Profile Assessment at our Khan Tower Dhaka Office
          </span>
        </div>

        {/* Destination Cards Grid */}
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((d) => (
            <article
              key={d.slug}
              className="card-clean rounded-3xl p-6 flex flex-col justify-between border border-slate-200 hover:border-[#D4AF37] shadow-sm hover:shadow-md transition-all"
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
                  <span className="rounded-full bg-[#FCF8EE] border border-[#D4AF37]/40 px-2.5 py-0.5 text-xs font-bold text-[#8A6818]">
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
                    <span className="font-bold text-[#8A6818]">{d.scholarships}</span>
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
                  href={`https://wa.me/${company.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(`Hello Future Edge Education, I am interested in studying in ${d.name}.`)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-bold text-emerald-700 hover:underline"
                >
                  💬 WhatsApp
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
