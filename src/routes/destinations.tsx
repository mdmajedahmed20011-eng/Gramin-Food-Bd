import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Breadcrumbs, CtaBand, PageHero } from "@/components/ui-blocks";
import { company, destinations } from "@/lib/site-data";

export const Route = createFileRoute("/destinations")({
  head: () => ({
    meta: [
      { title: "Study Abroad Destinations | Academic Allies — Chattogram" },
      {
        name: "description",
        content:
          "Explore premier European and global study abroad destinations processed by Academic Allies: Italy (Padova & DSU Scholarship), Sweden, Finland, UK, Canada, USA, and Malaysia. Verified tuition fees, post-study work visas, scholarships, and Chattogram HQ guidance.",
      },
      { property: "og:title", content: "Study Abroad Destinations | Academic Allies" },
      {
        property: "og:description",
        content:
          "আপনার স্বপ্নের ইউরোপীয় বিশ্ববিদ্যালয়ের পথে বিশ্বস্ত সহযোগী! Complete verified guide to Italian, European, and global universities, DSU scholarships, and student visas in Chattogram.",
      },
    ],
  }),
  component: Destinations,
});

function Destinations() {
  const [activeRegion, setActiveRegion] = useState<string>("All");
  const [search, setSearch] = useState<string>("");

  const regions = ["All", "Europe", "North America", "Asia-Pacific"];

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
        eyebrow="European & Global University Portals"
        title="Verified Study Abroad Destinations"
        subtitle="Explore admission criteria, post-study work rights (PSW), living costs, regional scholarships (like Italian DSU up to €7,000/yr), and MOI eligibility across 100+ partner universities represented by Academic Allies."
        image="/assets/banner.jpg"
        imageAlt="Academic Allies official global destinations banner"
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
                    ? "bg-[#0C2340] text-[#D4AF37] shadow-sm border border-[#0C2340]"
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
              placeholder="🔍 Search country or program..."
              className="w-full rounded-full border border-slate-300 bg-white px-4 py-2 text-xs text-slate-800 outline-none shadow-sm focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20"
            />
          </div>
        </div>

        {/* Results Counter */}
        <div className="mt-6 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500">
          <p>
            Showing <strong>{filtered.length}</strong> of {destinations.length} verified destinations
          </p>
          <span className="text-[#0C2340] font-bold">
            ✓ 100% Genuine Portals & Free Assessment at our Finlay Square Chattogram HQ
          </span>
        </div>

        {/* Destination Cards Grid */}
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((d) => (
            <article
              key={d.slug}
              className="rounded-3xl p-6 flex flex-col justify-between border border-slate-200 bg-white hover:border-[#D4AF37] shadow-sm hover:shadow-md transition-all"
            >
              <div>
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{d.flag}</span>
                    <div>
                      <h3 className="font-display text-lg font-black text-slate-900">
                        {d.name}
                      </h3>
                      <span className="text-xs font-semibold text-slate-500">{d.region}</span>
                    </div>
                  </div>
                  <span className="rounded-full bg-amber-50 border border-amber-200 px-2.5 py-0.5 text-xs font-bold text-amber-900">
                    {d.pswv}
                  </span>
                </div>

                <p className="mt-4 text-xs text-slate-600 leading-relaxed font-medium">
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
                    <span className="font-bold text-emerald-700">{d.scholarships}</span>
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {d.popularFields.slice(0, 3).map((f) => (
                    <span
                      key={f}
                      className="rounded-lg bg-slate-100 px-2 py-1 text-[0.68rem] font-medium text-slate-700"
                    >
                      {f}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 border-t border-slate-100 pt-4 flex items-center justify-between">
                <span className="text-xs text-slate-500">
                  {d.withoutIelts ? "✅ MOI Accepted" : "IELTS Required"}
                </span>
                <Link
                  to="/study-in-{$country}"
                  params={{ country: d.slug }}
                  className="rounded-full bg-[#0C2340] px-4 py-1.5 text-xs font-bold text-[#D4AF37] hover:bg-[#07172B] transition-colors"
                >
                  Explore Guide →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
