import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { HeroCommandCenter } from "@/components/home/hero-command-center";
import { VisaPathfinder } from "@/components/home/visa-pathfinder";
import { VisualDestinationBento } from "@/components/home/visual-destination-bento";
import { DelegationSpotlight } from "@/components/home/delegation-spotlight";
import { IlluminatedFlightPath } from "@/components/home/illuminated-flight-path";
import { MobileActionDock } from "@/components/home/mobile-action-dock";
import { OfficeGallery } from "@/components/office-gallery";
import { Testimonials } from "@/components/testimonials";
import {
  UniversityMarquee,
  CtaBand,
  IconSparkles,
  IconCheck,
} from "@/components/ui-blocks";
import { faqs } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Future Edge Education | Top Study Abroad Consultant in BD | UK, Europe, Aus & Canada" },
      {
        name: "description",
        content:
          "Future Edge Education & Consultancy — Fast-track UK visa processing (3-5 day grants), without IELTS (MOI) admissions, scholarship guidance, and partner universities across UK, Europe, Australia, Canada, New Zealand & USA.",
      },
      { property: "og:title", content: "Future Edge Education | Top Study Abroad Consultant in BD" },
      {
        property: "og:description",
        content:
          "Fulfill Your Study Abroad Dream With Us! 100% Free Profile Assessment with senior counselors Moshiur & Tanvir. Khan Tower, 359 DIT Road, Dhaka. Hotline: 01805-041710.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  const [activeFaqCategory, setActiveFaqCategory] = useState("All");
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const faqCategories = ["All", "Visa Process", "Without IELTS", "Costs & Fees"];

  const filteredFaqs = activeFaqCategory === "All"
    ? faqs
    : faqs.filter(f => {
        if (activeFaqCategory === "Visa Process") return f.q.includes("visa") || f.q.includes("Visa") || f.q.includes("Days");
        if (activeFaqCategory === "Without IELTS") return f.q.includes("IELTS") || f.q.includes("MOI");
        if (activeFaqCategory === "Costs & Fees") return f.q.includes("fee") || f.q.includes("cost") || f.q.includes("Scholarship") || f.q.includes("free");
        return true;
      });

  return (
    <div className="relative min-h-screen bg-[#FAFAFC] text-slate-900 selection:bg-[#D4AF37] selection:text-[#090C10]">
      {/* 1. Cinematic Hero Command Center (Live Visa Feed + Digital Passport Hologram) */}
      <HeroCommandCenter />

      {/* 2. Global University & Partner Infinite Ticker */}
      <UniversityMarquee />

      {/* 3. Interactive 3-Click Visa & Scholarship Pathfinder (Zero Text Walls!) */}
      <VisaPathfinder />

      {/* 4. Visual Destination Bento Grid (Real Posters + Glass Badges) */}
      <VisualDestinationBento />

      {/* 5. Buckinghamshire New University (BNU) Delegation Spotlight */}
      <DelegationSpotlight />

      {/* 6. Interactive 5-Stage Illuminated Flight Path Roadmap */}
      <IlluminatedFlightPath />

      {/* 7. Authentic Visual Reel & Office Location */}
      <section className="section-shell py-14 sm:py-20 border-t border-slate-200/80">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#FCF8EE] border border-[#D4AF37]/40 px-3.5 py-1 text-xs font-bold text-[#8A6818] mb-2.5">
            <IconSparkles className="w-3.5 h-3.5" />
            <span>Authentic Verification Reel</span>
          </div>
          <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Inside <span className="text-[#AA771C]">Future Edge Education</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            Explore genuine photos from partner delegation sessions, research conference awards, and our Khan Tower counseling desks.
          </p>
        </div>

        <OfficeGallery />
      </section>

      {/* 8. Verified Student & Guardian Testimonials */}
      <Testimonials />

      {/* 9. Minimalist Categorized FAQ Accordion (Punchy Answers) */}
      <section className="section-shell py-14 sm:py-20 border-t border-slate-200/80">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#FCF8EE] border border-[#D4AF37]/40 px-3.5 py-1 text-xs font-bold text-[#8A6818] mb-2.5">
            <IconSparkles className="w-3.5 h-3.5" />
            <span>Clear Answers</span>
          </div>
          <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Frequently Asked <span className="text-[#AA771C]">Questions</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            Direct, transparent responses to common student and parent inquiries.
          </p>
        </div>

        {/* FAQ Category Filter Pills */}
        <div className="flex flex-wrap justify-center gap-1.5 mb-8">
          {faqCategories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => {
                setActiveFaqCategory(cat);
                setOpenFaqIndex(0);
              }}
              className={cn(
                "rounded-full px-4 py-1.5 text-xs font-bold transition-all cursor-pointer",
                activeFaqCategory === cat
                  ? "bg-[#090C10] text-[#F5D365] shadow-sm border border-[#D4AF37]"
                  : "bg-white border border-slate-200 text-slate-700 hover:bg-slate-50"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Modern Clean Accordion List */}
        <div className="max-w-3xl mx-auto space-y-3">
          {filteredFaqs.slice(0, 6).map((faq, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <div
                key={faq.q}
                className={cn(
                  "rounded-2xl border transition-all duration-300 overflow-hidden",
                  isOpen
                    ? "bg-white border-[#D4AF37] shadow-md ring-1 ring-[#D4AF37]/20"
                    : "bg-white/80 border-slate-200 hover:border-slate-300"
                )}
              >
                <button
                  type="button"
                  onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                  className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className="font-display text-sm sm:text-base font-bold text-slate-900">
                    {faq.q}
                  </span>
                  <span className={cn(
                    "flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-bold transition-transform duration-300",
                    isOpen ? "bg-[#090C10] text-[#F5D365] rotate-180" : "bg-slate-100 text-slate-600"
                  )}>
                    ↓
                  </span>
                </button>

                {isOpen && (
                  <div className="px-4 pb-5 sm:px-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 10. High-Converting Obsidian & Gold Pre-Footer Banner */}
      <CtaBand />

      {/* 11. Ergonomic Floating Thumb Action Dock on Mobile */}
      <MobileActionDock />
    </div>
  );
}
