import { Link } from "@tanstack/react-router";
import { BrandLogo } from "@/components/brand-logo";
import { company, destinations, services } from "@/lib/site-data";

export function SiteFooter() {
  return (
    <footer className="bg-[#090C10] text-white border-t border-[#1F2633] pt-16 pb-20 md:pb-16 text-xs">
      <div className="section-shell">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5 pb-12 border-b border-[#1F2633]">
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="inline-flex items-center gap-3">
              <BrandLogo size={48} withText textClassName="text-white" />
            </Link>

            <p className="text-slate-300 leading-relaxed max-w-sm">
              {company.legalName} is Bangladesh's premier study abroad consultancy. Guided by our motto <em className="text-[#F5D365]">"{company.motto}"</em> and core philosophy <strong className="text-white">{company.philosophy}</strong>, we provide 100% free profile evaluation, fast-track visa processing, and university admissions across the UK, Europe, Australia, Canada, New Zealand, Malaysia, and USA.
            </p>

            <div className="rounded-2xl border border-[#D4AF37]/30 bg-[#0E131B] p-4 space-y-1.5 shadow-lg">
              <p className="font-bold text-[#F5D365] flex items-center gap-1.5">
                <span>📍</span>
                <span>{company.address.full}</span>
              </p>
              <p className="text-slate-300 text-[0.72rem]">
                Network Presence: <strong className="text-white">{company.presence}</strong>
              </p>
              <p className="text-[0.7rem] text-slate-400 pt-0.5">
                🕒 {company.hours}
              </p>
            </div>

            <div className="flex flex-wrap gap-2 pt-2">
              <a
                href={company.social.facebook}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-[#D4AF37]/40 bg-[#151A24] px-3.5 py-1.5 font-bold text-[#F5D365] hover:bg-[#D4AF37] hover:text-[#090C10] transition-all"
              >
                📘 Facebook (285K+ Followers)
              </a>
              <a
                href={`https://wa.me/${company.whatsapp.replace(/[^0-9]/g, "")}`}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-emerald-500/40 bg-emerald-950/40 px-3.5 py-1.5 font-bold text-emerald-400 hover:bg-emerald-900/50 transition-colors"
              >
                💬 WhatsApp Chat Support
              </a>
            </div>
          </div>

          {/* Col 2: Admissions & Services */}
          <div className="space-y-3">
            <span className="block font-display text-xs font-bold uppercase tracking-wider text-[#D4AF37]">
              Admissions & Visa Services
            </span>
            <ul className="space-y-2 text-slate-300">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    to="/services"
                    className="hover:text-[#F5D365] transition-colors"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/offers" className="text-[#F5D365] font-bold hover:underline">
                  🎓 Buckinghamshire New Univ. Session
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Popular Study Destinations */}
          <div className="space-y-3">
            <span className="block font-display text-xs font-bold uppercase tracking-wider text-[#D4AF37]">
              Study Destinations
            </span>
            <ul className="space-y-2 text-slate-300">
              {destinations.map((d) => (
                <li key={d.slug}>
                  <Link
                    to="/study-in-{$country}"
                    params={{ country: d.slug }}
                    className="hover:text-[#F5D365] transition-colors flex items-center gap-1.5"
                  >
                    <span>{d.flag}</span>
                    <span>Study in {d.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Direct Hotlines & Social */}
          <div className="space-y-3">
            <span className="block font-display text-xs font-bold uppercase tracking-wider text-[#D4AF37]">
              Direct Contact & Hotlines
            </span>
            <div className="space-y-2">
              {company.phones.map((p) => (
                <a
                  key={p}
                  href={`tel:+880${p.replace(/[^0-9]/g, "").slice(-10)}`}
                  className="block rounded-xl border border-[#1F2633] bg-[#0E131B] px-3 py-2 font-bold text-white hover:border-[#D4AF37] hover:text-[#F5D365] transition-colors"
                >
                  📞 {p}
                </a>
              ))}
              <a
                href={`https://wa.me/${company.whatsapp.replace(/[^0-9]/g, "")}`}
                target="_blank"
                rel="noreferrer"
                className="block rounded-xl border border-emerald-500/40 bg-emerald-950/40 px-3 py-2 font-bold text-emerald-400 hover:bg-emerald-900/50 transition-colors"
              >
                💬 WhatsApp {company.phones[0]}
              </a>
              <div className="pt-2 text-[0.7rem] text-slate-400 space-y-1">
                <div>
                  Email: <a href={`mailto:${company.email}`} className="text-[#F5D365] underline">{company.email}</a>
                </div>
                <div>
                  Alternative: <a href={`mailto:${company.contactEmail}`} className="text-slate-300 underline">{company.contactEmail}</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Legal */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-400 text-[0.7rem]">
          <p>
            © {new Date().getFullYear()} {company.legalName}. All Rights Reserved. Khan Tower, 359 DIT Road, Dhaka 1219.
          </p>
          <div className="flex gap-4">
            <Link to="/privacy-policy" className="hover:text-white">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link to="/terms-of-use" className="hover:text-white">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
