import { Link } from "@tanstack/react-router";
import { BrandLogo } from "@/components/brand-logo";
import { company, destinations, courses } from "@/lib/site-data";
import { useState } from "react";
import { StaggerContainer, StaggerItem } from "@/components/motion-wrapper";

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
    <footer className="bg-[#043E8B] text-white pt-16 pb-24 md:pb-16 text-xs relative overflow-hidden">
      {/* Subtle Blueprint Radial / Dot Pattern */}
      <div className="absolute inset-0 bg-blueprint-radial opacity-30 pointer-events-none" />

      <div className="section-shell relative z-10">
        {/* Main 3-Column Footer Grid matching DSA */}
        <StaggerContainer staggerDelay={0.12} className="grid grid-cols-1 lg:grid-cols-[1.3fr_0.8fr_1.1fr] gap-10 lg:gap-14 pb-14 border-b border-blue-400/20">
          {/* Column 1: Brand Info & Newsletter Subscription */}
          <StaggerItem direction="up" distance={24}>
          <div className="space-y-6">
            <Link to="/" className="inline-flex items-center gap-3">
              <BrandLogo size={46} withText textClassName="flex text-white" />
            </Link>

            <p className="text-xs sm:text-sm text-blue-100/90 leading-relaxed max-w-md font-medium">
              Empowering Bangladeshi students to study at top global universities. Dual direct hubs in Dhaka (Aftabnagar) and London (Cranberry Lane) guiding you every step of the way to unlock your abroad journey.
            </p>

            {/* Newsletter Subscription Box */}
            <div className="rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-md max-w-md">
              <div className="text-sm font-bold text-white mb-1">
                Subscribe for Updates
              </div>
              <p className="text-[0.73rem] text-blue-100/80 mb-3.5">
                Get the latest news on scholarships, upcoming intakes, and study visa tips.
              </p>

              {subscribed ? (
                <div className="rounded-xl bg-emerald-500/20 border border-emerald-400/40 p-2.5 text-center text-xs font-bold text-emerald-200">
                  ✓ Thank you! You are subscribed to updates.
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex gap-2">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="flex-1 rounded-xl border border-white/20 bg-black/20 px-3.5 py-2.5 text-xs text-white placeholder:text-blue-200/50 outline-none focus:border-white focus:ring-1 focus:ring-white/30"
                  />
                  <button
                    type="submit"
                    className="rounded-xl bg-red-600 hover:bg-red-700 px-4 py-2.5 text-xs font-bold text-white shadow-md transition-colors flex items-center gap-1.5 shrink-0 cursor-pointer"
                  >
                    <span>Subscribe</span>
                    <span>→</span>
                  </button>
                </form>
              )}
            </div>
          </div>
          </StaggerItem>

          {/* Column 2: Quick Links */}
          <StaggerItem direction="up" distance={24}>
          <div className="space-y-4">
            <div className="text-sm font-bold text-white tracking-wide uppercase">
              Quick Links
            </div>
            <ul className="space-y-2.5 text-xs text-blue-100/90 font-medium">
              <li>
                <Link to="/" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="text-red-400">›</span>
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="text-red-400">›</span>
                  <span>About Us</span>
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="text-red-400">›</span>
                  <span>Admissions & Services</span>
                </Link>
              </li>
              <li>
                <Link to="/destinations" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="text-red-400">›</span>
                  <span>Study Abroad Destinations</span>
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="text-red-400">›</span>
                  <span>Language Academy (IELTS Band 7+)</span>
                </Link>
              </li>
              <li>
                <Link to="/videos" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="text-red-400">›</span>
                  <span>Official Facebook Reels</span>
                </Link>
              </li>
              <li>
                <Link to="/offers" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="text-red-400">›</span>
                  <span>Intakes & Blog Updates</span>
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="text-red-400">›</span>
                  <span>Contact Us</span>
                </Link>
              </li>
            </ul>
          </div>
          </StaggerItem>

          {/* Column 3: Contact & Dual Hubs */}
          <StaggerItem direction="up" distance={24}>
          <div className="space-y-4">
            <div className="text-sm font-bold text-white tracking-wide uppercase">
              Contact Us
            </div>
            <div className="space-y-3.5 text-xs text-blue-100/90 font-medium">
              {/* Dhaka Address */}
              <div className="flex items-start gap-2.5">
                <span className="text-red-400 text-sm mt-0.5">📍</span>
                <div>
                  <strong className="text-white block">Dhaka Headquarters:</strong>
                  <span>House - 03, Road - 03, Block: H, Section - 02, Merul Badda, Aftabnagar EHL Project, Dhaka</span>
                </div>
              </div>

              {/* London Address */}
              <div className="flex items-start gap-2.5">
                <span className="text-red-400 text-sm mt-0.5">📍</span>
                <div>
                  <strong className="text-white block">London Branch:</strong>
                  <span>The Arches Cranberry Lane, London E16 4BJ, United Kingdom</span>
                </div>
              </div>

              {/* Phones */}
              <div className="flex items-start gap-2.5">
                <span className="text-red-400 text-sm mt-0.5">📞</span>
                <div className="space-y-0.5">
                  <div>
                    <a href="tel:01886913391" className="hover:text-white font-bold">
                      01886 91 33 91
                    </a>{" "}
                    /{" "}
                    <a href="tel:+8801611402093" className="hover:text-white font-bold">
                      01611 40 20 93
                    </a>
                  </div>
                  <div className="text-emerald-300 font-bold">
                    UK / WhatsApp: +44 07539228276
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-2.5">
                <span className="text-red-400 text-sm mt-0.5">✉</span>
                <a href={`mailto:${company.email}`} className="hover:text-white font-semibold">
                  {company.email}
                </a>
              </div>

              {/* Social Media Links */}
              <div className="pt-2">
                <div className="text-xs font-bold text-white mb-2 uppercase tracking-wider">
                  Follow Us
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href={company.social.facebook}
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors"
                    aria-label="Facebook"
                  >
                    FB
                  </a>
                  <a
                    href={company.social.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors"
                    aria-label="Instagram"
                  >
                    IG
                  </a>
                  <a
                    href={company.social.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors"
                    aria-label="LinkedIn"
                  >
                    IN
                  </a>
                  <a
                    href={company.social.youtube}
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors"
                    aria-label="YouTube"
                  >
                    YT
                  </a>
                </div>
              </div>
            </div>
          </div>
          </StaggerItem>
        </StaggerContainer>

        {/* Bottom Accreditations & Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[0.73rem] text-blue-200/80">
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <span className="font-semibold text-white">Trusted Partner of:</span>
            <span className="rounded-full bg-white/10 px-3 py-1 text-white border border-white/10 font-bold">
              British Council
            </span>
            <span className="rounded-full bg-white/10 px-3 py-1 text-white border border-white/10 font-bold">
              BAIRA Member
            </span>
            <span className="rounded-full bg-white/10 px-3 py-1 text-white border border-white/10 font-bold">
              ICEF Certified
            </span>
          </div>

          <div className="text-center sm:text-right font-medium">
            © 2026 Alex Global Consultancy. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
