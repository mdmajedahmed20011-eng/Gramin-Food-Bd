import { useRegisterModal } from "@/components/register-modal";
import { IconSparkles, IconCheck, IconArrowRight, IconWhatsApp } from "@/components/ui-blocks";
import { company } from "@/lib/site-data";

export function DelegationSpotlight() {
  const { open } = useRegisterModal();

  return (
    <section className="section-shell py-12 sm:py-16">
      <div className="outer-bezel-dark">
        <div className="inner-bezel-dark p-6 sm:p-10 lg:p-12 relative overflow-hidden text-white">
          {/* Ambient Glow */}
          <div className="pointer-events-none absolute -top-20 -left-20 h-80 w-80 rounded-full bg-[#D4AF37]/20 blur-[100px]" />
          <div className="pointer-events-none absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-blue-600/15 blur-[100px]" />

          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center relative z-10">
            {/* Left: Authentic Photo in Double-Bezel Frame */}
            <div className="relative group">
              <div className="rounded-3xl overflow-hidden border border-[#D4AF37]/40 shadow-2xl bg-black">
                <img
                  src="/brand-assets/772204691_122282788340103184_9204887386025201573_n.jpg"
                  alt="Buckinghamshire New University Delegation at Future Edge"
                  className="w-full h-[320px] sm:h-[380px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                <div className="absolute top-4 left-4">
                  <span className="rounded-full bg-[#D4AF37] px-3 py-1 text-xs font-extrabold text-[#090C10] shadow-md">
                    ★ Official University Delegation
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="font-display text-base font-bold text-white">
                    Ms. Ayesha Rauf — Country Advisor, BNU UK
                  </p>
                  <p className="text-xs text-[#F5D365] mt-0.5">
                    Direct Delegation Session at Future Edge Education, Khan Tower
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Crisp Value Proposition & Booking Action */}
            <div className="space-y-5">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/35 px-3.5 py-1 text-xs font-bold text-[#F5D365]">
                <IconSparkles className="w-3.5 h-3.5" />
                <span>Featured International Partner · Direct Campus Rep</span>
              </div>

              <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-snug">
                Meet Foreign University Delegates <br />
                <span className="text-[#F5D365]">Directly In Dhaka</span>
              </h2>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-xl">
                Skip third-party delays. Future Edge brings official university representatives to our Dhaka headquarters for on-spot profile reviews, scholarship evaluation, and expedited CAS issuance.
              </p>

              {/* 3 Key High-Impact Pills */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="rounded-2xl bg-white/5 border border-white/10 p-3.5 space-y-1">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-400">
                    <IconCheck className="w-4 h-4" />
                    <span>On-Spot Offers</span>
                  </div>
                  <p className="text-[0.68rem] text-slate-300">Fast-track admission letters issued for qualifying applicants.</p>
                </div>

                <div className="rounded-2xl bg-white/5 border border-white/10 p-3.5 space-y-1">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-[#F5D365]">
                    <IconCheck className="w-4 h-4" />
                    <span>Without IELTS (MOI)</span>
                  </div>
                  <p className="text-[0.68rem] text-slate-300">English Medium Instruction letters accepted for Bachelor's & Master's.</p>
                </div>

                <div className="rounded-2xl bg-white/5 border border-white/10 p-3.5 space-y-1">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-blue-400">
                    <IconCheck className="w-4 h-4" />
                    <span>Zero Service Fee</span>
                  </div>
                  <p className="text-[0.68rem] text-slate-300">100% free counseling and file opening from start to finish.</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-3">
                <button
                  type="button"
                  onClick={() => open()}
                  className="rounded-full bg-[#D4AF37] hover:bg-[#F5D365] text-[#090C10] font-extrabold px-7 py-3 text-xs shadow-lg transition-all cursor-pointer flex items-center gap-2"
                >
                  <span>Reserve Seat for Next Delegation</span>
                  <IconArrowRight className="w-3.5 h-3.5" />
                </button>

                <a
                  href={`https://wa.me/${company.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent("Hello! I want to attend the next foreign university session at Future Edge.")}`}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-white/10 hover:bg-white/20 text-white font-bold px-5 py-3 text-xs border border-white/15 transition-colors flex items-center gap-2"
                >
                  <IconWhatsApp className="w-4 h-4 text-emerald-400" />
                  <span>Inquire on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
