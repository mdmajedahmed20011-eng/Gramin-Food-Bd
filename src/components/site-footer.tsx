import { Link } from "@tanstack/react-router";
import { BrandLogo } from "@/components/brand-logo";
import { company, destinations, courses } from "@/lib/site-data";
import { useState } from "react";
import { StaggerContainer, StaggerItem } from "@/components/motion-wrapper";
import { IconPhone, IconWhatsApp } from "@/components/ui-blocks";

export function SiteFooter() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 4000);
      setEmail("");
    }
  };

  return (
    <footer className="bg-[#071527] text-white pt-16 pb-24 md:pb-16 text-xs relative overflow-hidden border-t border-[#D4AF37]/20">
      {/* Subtle Blueprint Radial Pattern */}
      <div className="absolute inset-0 bg-blueprint-radial opacity-20 pointer-events-none" />

      <div className="section-shell relative z-10">
        {/* Main 3-Column Footer Grid */}
        <StaggerContainer staggerDelay={0.12} className="grid grid-cols-1 lg:grid-cols-[1.3fr_0.8fr_1.1fr] gap-10 lg:gap-14 pb-14 border-b border-slate-800">
          {/* Column 1: Brand Info & Newsletter */}
          <StaggerItem direction="up" distance={24}>
            <div className="space-y-6">
              <Link to="/" className="inline-flex items-center gap-3">
                <BrandLogo size={48} withText variant="dark" textClassName="flex text-white" />
              </Link>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-md font-medium">
                {company.tagline}
              </p>

              {/* Newsletter Subscription Box */}
              <div className="rounded-2xl border border-[#D4AF37]/30 bg-white/5 p-5 backdrop-blur-md max-w-md">
                <div className="text-sm font-bold text-amber-300 mb-1 flex items-center gap-2">
                  <span>✦</span>
                  <span>Stay Updated on European Intakes</span>
                </div>
                <p className="text-[0.73rem] text-slate-300 mb-3.5">
                  Get prompt updates on Italy Universitaly deadlines, DSU regional scholarships, and British Council IELTS exam batches.
                </p>

                {subscribed ? (
                  <div className="rounded-xl bg-emerald-500/20 border border-emerald-400/40 p-2.5 text-center text-xs font-bold text-emerald-200">
                    ✓ Thank you! You will receive verified Academic Allies updates.
                  </div>
                ) : (
                  <form onSubmit={handleSubscribe} className="flex gap-2">
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      className="flex-1 rounded-xl border border-white/20 bg-black/40 px-3.5 py-2.5 text-xs text-white placeholder:text-slate-400 outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]"
                    />
                    <button
                      type="submit"
                      className="btn-gold rounded-xl px-4 py-2.5 text-xs font-bold transition-all shadow-md shrink-0 cursor-pointer"
                    >
                      <span>Join</span>
                      <span>→</span>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </StaggerItem>

          {/* Column 2: Navigation Links */}
          <StaggerItem direction="up" distance={24}>
            <div className="space-y-4">
              <div className="text-sm font-bold text-amber-300 tracking-wide uppercase flex items-center gap-1.5">
                <span>✦</span>
                <span>Quick Navigation</span>
              </div>
              <ul className="space-y-2.5 text-xs text-slate-300 font-medium">
                <li>
                  <Link to="/" className="hover:text-amber-300 transition-colors flex items-center gap-1.5">
                    <span className="text-[#D4AF37]">›</span>
                    <span>Home Page</span>
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="hover:text-amber-300 transition-colors flex items-center gap-1.5">
                    <span className="text-[#D4AF37]">›</span>
                    <span>About Academic Allies</span>
                  </Link>
                </li>
                <li>
                  <Link to="/destinations" className="hover:text-amber-300 transition-colors flex items-center gap-1.5">
                    <span className="text-[#D4AF37]">›</span>
                    <span>Europe & Study Abroad</span>
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="hover:text-amber-300 transition-colors flex items-center gap-1.5">
                    <span className="text-[#D4AF37]">›</span>
                    <span>5-Step Europe Pathway</span>
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="hover:text-amber-300 transition-colors flex items-center gap-1.5">
                    <span className="text-[#D4AF37]">›</span>
                    <span>IELTS Coaching (Band 7+)</span>
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="hover:text-amber-300 transition-colors flex items-center gap-1.5">
                    <span className="text-[#D4AF37]">›</span>
                    <span>Spoken & Kids English</span>
                  </Link>
                </li>
                <li>
                  <Link to="/videos" className="hover:text-amber-300 transition-colors flex items-center gap-1.5">
                    <span className="text-[#D4AF37]">›</span>
                    <span>Verified Facebook Reels</span>
                  </Link>
                </li>
                <li>
                  <Link to="/offers" className="hover:text-amber-300 transition-colors flex items-center gap-1.5">
                    <span className="text-[#D4AF37]">›</span>
                    <span>Upcoming Intakes & Waivers</span>
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-amber-300 transition-colors flex items-center gap-1.5">
                    <span className="text-[#D4AF37]">›</span>
                    <span>Contact Chattogram Office</span>
                  </Link>
                </li>
              </ul>
            </div>
          </StaggerItem>

          {/* Column 3: Contact & Office Details */}
          <StaggerItem direction="up" distance={24}>
            <div className="space-y-4">
              <div className="text-sm font-bold text-amber-300 tracking-wide uppercase flex items-center gap-1.5">
                <span>✦</span>
                <span>Contact Information</span>
              </div>
              <div className="space-y-3.5 text-xs text-slate-300 font-medium">
                {/* Chattogram Headquarters */}
                <div className="flex items-start gap-2.5">
                  <span className="text-[#D4AF37] text-sm mt-0.5">📍</span>
                  <div>
                    <strong className="text-white block">Corporate Headquarters:</strong>
                    <span>Finlay Square (7th Floor), CDA Avenue, 2 No. Gate, East Nasirabad, Chattogram, Bangladesh</span>
                  </div>
                </div>

                {/* City Branch */}
                <div className="flex items-start gap-2.5">
                  <span className="text-[#D4AF37] text-sm mt-0.5">📍</span>
                  <div>
                    <strong className="text-white block">Chattogram City Branch:</strong>
                    <span>Zeenat Abad, Chittagong-4203, Bangladesh</span>
                  </div>
                </div>

                {/* Phones & WhatsApp */}
                <div className="flex items-start gap-2.5">
                  <span className="text-[#D4AF37] text-sm mt-0.5">📞</span>
                  <div className="space-y-0.5">
                    <div>
                      <a href="tel:01859870936" className="hover:text-amber-300 font-bold text-white">
                        01859-870936
                      </a>{" "}
                      /{" "}
                      <a href="tel:01812386307" className="hover:text-amber-300 font-bold text-white">
                        01812-386307
                      </a>{" "}
                      /{" "}
                      <a href="tel:01812386318" className="hover:text-amber-300 font-bold text-white">
                        01812-386318
                      </a>
                    </div>
                    <div>
                      <a
                        href={`https://wa.me/${company.whatsapp.replace(/[^0-9]/g, "")}`}
                        target="_blank"
                        rel="noreferrer"
                        className="text-emerald-400 font-bold hover:text-emerald-300 inline-flex items-center gap-1 mt-0.5"
                      >
                        <IconWhatsApp className="w-3.5 h-3.5" />
                        <span>WhatsApp: {company.whatsappFormatted}</span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-2.5">
                  <span className="text-[#D4AF37] text-sm mt-0.5">✉</span>
                  <a href={`mailto:${company.email}`} className="hover:text-amber-300 font-semibold text-white">
                    {company.email}
                  </a>
                </div>

                {/* Social Channels */}
                <div className="pt-2">
                  <div className="text-xs font-bold text-slate-400 mb-2 uppercase tracking-wider">
                    Official Social Channels (47K+ Community)
                  </div>
                  <div className="flex items-center gap-2">
                    <a
                      href={company.social.facebook}
                      target="_blank"
                      rel="noreferrer"
                      className="flex h-9 px-3 items-center justify-center rounded-xl bg-white/10 hover:bg-[#D4AF37] hover:text-slate-950 text-white font-bold transition-colors gap-1.5"
                      aria-label="Facebook"
                    >
                      <span>Facebook</span>
                      <span className="text-[0.65rem] opacity-75">47K</span>
                    </a>
                    <a
                      href={company.social.instagram}
                      target="_blank"
                      rel="noreferrer"
                      className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 hover:bg-[#D4AF37] hover:text-slate-950 text-white font-bold transition-colors"
                      aria-label="Instagram"
                    >
                      IG
                    </a>
                    <a
                      href={company.social.youtube}
                      target="_blank"
                      rel="noreferrer"
                      className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 hover:bg-[#D4AF37] hover:text-slate-950 text-white font-bold transition-colors"
                      aria-label="YouTube"
                    >
                      YT
                    </a>
                    <a
                      href={company.social.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 hover:bg-[#D4AF37] hover:text-slate-950 text-white font-bold transition-colors"
                      aria-label="LinkedIn"
                    >
                      IN
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </StaggerItem>
        </StaggerContainer>

        {/* Bottom Accreditations Strip */}
        <div className="py-6 border-b border-slate-800 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-300">
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <span className="font-bold text-amber-300">Official Partners & Accreditations:</span>
            {company.accreditations.map((acc) => (
              <span
                key={acc.name}
                className="rounded-full bg-white/5 border border-white/10 px-3 py-1 text-slate-200 font-bold hover:border-[#D4AF37]/50 transition-colors"
              >
                {acc.name}
              </span>
            ))}
          </div>
        </div>

        {/* Copyright & Legal Links */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[0.73rem] text-slate-400">
          <div className="text-center sm:text-left font-medium">
            © 2026 Academic Allies. All Rights Reserved. Advancing Education.
          </div>

          <div className="flex items-center gap-4 text-[0.73rem]">
            <Link to="/privacy-policy" className="hover:text-amber-300 transition-colors">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link to="/terms-of-use" className="hover:text-amber-300 transition-colors">
              Terms & Conditions
            </Link>
            <span>•</span>
            <span className="text-slate-500">Official Visa Disclaimer Applied</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
