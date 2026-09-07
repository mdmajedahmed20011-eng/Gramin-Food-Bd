import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { HeroCommandCenter } from "@/components/home/hero-command-center";
import { QuickLeadSection } from "@/components/home/quick-lead-section";
import { StatsImpactStrip } from "@/components/home/stats-impact-strip";
import { PopularDestinationsSection } from "@/components/home/popular-destinations-section";
import { VisualDestinationBento } from "@/components/home/visual-destination-bento";
import { WhyChooseSection } from "@/components/home/why-choose-section";
import { HowItWorksSection } from "@/components/home/how-it-works-section";
import { DelegationSpotlight } from "@/components/home/delegation-spotlight";
import { BlogUpdatesSection } from "@/components/home/blog-updates-section";
import { MobileActionDock } from "@/components/home/mobile-action-dock";
import { OfficeGallery } from "@/components/office-gallery";
import { Testimonials } from "@/components/testimonials";
import {
  UniversityMarquee,
  CtaBand,
  IconSparkles,
} from "@/components/ui-blocks";
import { faqs } from "@/lib/site-data";
import { cn } from "@/lib/utils";
import { ScrollReveal } from "@/components/scroll-reveal";
import { LiveActivityToast } from "@/components/live-activity-toast";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Academic Allies | Study Abroad & Language Academy | Chattogram, Bangladesh" },
      {
        name: "description",
        content:
          "Academic Allies — European Higher Education (Italy Padova & DSU Scholarship, Sweden, Finland, UK, Canada, USA, Malaysia), British Council Certified IELTS (Band 7+), Spoken English & Kids English. Headquarters: Finlay Square (7th Floor), CDA Avenue, East Nasirabad, Chattogram. Hotlines: 01859-870936 / 01812-386307 / 01812-386318 / 01805-211186.",
      },
      { property: "og:title", content: "Academic Allies — Advancing Education" },
      {
        property: "og:description",
        content:
          "Your trusted partner for European university admissions, DSU scholarships, and visa success. 100% genuine portal processing. Headquarters: Finlay Square (7th Floor), CDA Avenue, Chattogram. Hotline: 01859-870936.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  const [activeFaqCategory, setActiveFaqCategory] = useState("All");
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const faqCategories = ["All", "Study in Europe", "IELTS & English", "Visas & Chattogram HQ", "Scholarships"];

  const filteredFaqs = activeFaqCategory === "All"
    ? faqs
    : faqs.filter((f) => {
        if (activeFaqCategory === "Study in Europe") return f.q.includes("study") || f.q.includes("Europe") || f.q.includes("Italy") || f.q.includes("Padova");
        if (activeFaqCategory === "IELTS & English") return f.q.includes("IELTS") || f.q.includes("English") || f.q.includes("course");
        if (activeFaqCategory === "Visas & Chattogram HQ") return f.q.includes("visa") || f.q.includes("Visa") || f.q.includes("located") || f.q.includes("office") || f.q.includes("Chattogram");
        if (activeFaqCategory === "Scholarships") return f.q.includes("scholarship") || f.q.includes("DSU") || f.q.includes("fee") || f.q.includes("Free");
        return true;
      });

  return (
    <div className="relative min-h-screen bg-[#FAFAFC] text-slate-900 selection:bg-[#0C2340] selection:text-[#D4AF37]">
      {/* 1. Destination Hero Slider with Real-time Success Toast */}
      <HeroCommandCenter />

      {/* 2. Fast-Track Lead Form & Side-by-Side Stat Highlights */}
      <ScrollReveal direction="up" delay={50}>
        <QuickLeadSection />
      </ScrollReveal>

      {/* 3. Partner Universities Showcase & Marquee */}
      <ScrollReveal direction="fade" delay={50}>
        <UniversityMarquee />
      </ScrollReveal>

      {/* 4. Scholastic Navy Impact Stats ("Trusted by students worldwide") */}
      <ScrollReveal direction="up" delay={60}>
        <StatsImpactStrip />
      </ScrollReveal>

      {/* 5. Popular Study Destinations Grid ("Where will you study?") */}
      <ScrollReveal direction="up" delay={60}>
        <PopularDestinationsSection />
      </ScrollReveal>

      {/* 5b. Visual Destination Bento */}
      <ScrollReveal direction="up" delay={60}>
        <VisualDestinationBento />
      </ScrollReveal>

      {/* 6. Why Choose Academic Allies ("Advancing Education with Integrity") */}
      <ScrollReveal direction="up" delay={60}>
        <WhyChooseSection />
      </ScrollReveal>

      {/* 7. 5-Step Process Timeline ("Official European Roadmap") */}
      <ScrollReveal direction="up" delay={60}>
        <HowItWorksSection />
      </ScrollReveal>

      {/* 8. Language Academy & Programs Spotlight */}
      <ScrollReveal direction="up" delay={60}>
        <DelegationSpotlight />
      </ScrollReveal>

      {/* 9. Verified Social Proof & Corporate Hubs */}
      <ScrollReveal direction="up" delay={60}>
        <section className="section-shell py-14 sm:py-20 border-t border-slate-200/80">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 rounded-full bg-amber-50 border border-amber-200 px-3.5 py-1 text-xs font-bold text-amber-900 mb-2.5">
              <IconSparkles className="w-3.5 h-3.5 text-amber-600" />
              <span>Verified Success & Community</span>
            </div>
            <h2 className="font-display text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Inside <span className="text-[#0C2340]">Academic Allies</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Explore our corporate headquarters at Finlay Square (7th Floor), CDA Avenue, Chattogram, and verified European visa successes.
            </p>
          </div>

          <OfficeGallery showReels={false} />
        </section>
      </ScrollReveal>

      {/* 10. Student Testimonials ("What our scholars say") */}
      <ScrollReveal direction="up" delay={60}>
        <Testimonials />
      </ScrollReveal>

      {/* 11. Latest Updates / Blog Grid ("Latest guides") */}
      <ScrollReveal direction="up" delay={60}>
        <BlogUpdatesSection />
      </ScrollReveal>

      {/* 12. Minimalist Categorized FAQ Accordion */}
      <ScrollReveal direction="up" delay={60}>
        <section className="section-shell py-14 sm:py-20 border-t border-slate-200/80">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <div className="inline-flex items-center gap-2 rounded-full bg-amber-50 border border-amber-200 px-3.5 py-1 text-xs font-bold text-amber-900 mb-2.5">
              <IconSparkles className="w-3.5 h-3.5 text-amber-600" />
              <span>Clear Answers</span>
            </div>
            <h2 className="font-display text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Frequently Asked <span className="text-[#0C2340]">Questions</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Direct, transparent responses regarding European admissions, DSU scholarships, IELTS batches, and our Chattogram headquarters.
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
                  "rounded-full px-4 py-1.5 text-xs font-bold transition-all cursor-pointer active:scale-95",
                  activeFaqCategory === cat
                    ? "bg-[#0C2340] text-[#D4AF37] shadow-xs border border-[#0C2340]"
                    : "bg-white border border-slate-200 text-slate-700 hover:bg-slate-50",
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
                      ? "bg-white border-[#D4AF37] shadow-md ring-1 ring-[#D4AF37]/30"
                      : "bg-white/80 border-slate-200 hover:border-slate-300 hover:bg-white",
                  )}
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 cursor-pointer active:scale-[0.99] transition-transform"
                  >
                    <span className="font-display text-sm sm:text-base font-bold text-slate-900">
                      {faq.q}
                    </span>
                    <span
                      className={cn(
                        "flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-bold transition-transform duration-300",
                        isOpen ? "bg-[#0C2340] text-[#D4AF37] rotate-180" : "bg-slate-100 text-slate-600",
                      )}
                    >
                      ↓
                    </span>
                  </button>

                  <div
                    className={cn(
                      "grid transition-all duration-300 ease-in-out",
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                    )}
                  >
                    <div className="overflow-hidden">
                      <div className="px-4 pb-5 sm:px-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3 font-medium">
                        <p>{faq.a}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </ScrollReveal>

      {/* 13. Pre-Footer High-Converting Banner */}
      <CtaBand />

      {/* 14. Ergonomic Floating Thumb Action Dock on Mobile */}
      <MobileActionDock />

      {/* 15. Live Real-Time Success Activity Toast */}
      <LiveActivityToast />
    </div>
  );
}
