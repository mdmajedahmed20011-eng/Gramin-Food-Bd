import { Link } from "@tanstack/react-router";
import { BrandLogo } from "@/components/brand-logo";
import { company, destinations, services } from "@/lib/site-data";

export function SiteFooter() {
  return (
    <footer className="bg-[#0A192F] text-white border-t border-slate-800 pt-16 pb-20 md:pb-16 text-xs">
      <div className="section-shell">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5 pb-12 border-b border-slate-800">
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="inline-flex items-center gap-3">
              <BrandLogo size={46} />
              <div>
                <span className="block font-display text-lg font-extrabold text-white">
                  {company.name}
                </span>
                <span className="block text-[0.65rem] font-bold uppercase tracking-[0.14em] text-[#00AEEF]">
                  {company.slogan}
                </span>
              </div>
            </Link>

            <p className="text-slate-300 leading-relaxed max-w-sm">
              Official British Council & IDP Registration Point and Mock Test Venue located in Maijdee Court, Noakhali. Empowering students with top-tier IELTS preparation, Spoken & Kids English, and 100% free study abroad counseling.
            </p>

            <div className="rounded-2xl border border-slate-800 bg-[#112240] p-3.5 space-y-1">
              <p className="font-bold text-sky-400">
                📍 {company.address.line1}
              </p>
              <p className="text-slate-300">
                {company.address.line2}, {company.address.city}
              </p>
              <p className="text-[0.7rem] text-slate-400 pt-1">
                🕒 {company.hours}
              </p>
            </div>

            <div className="flex flex-wrap gap-2 pt-2">
              <a
                href={company.social.facebook}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-sky-500/30 bg-sky-950/40 px-3.5 py-1.5 font-bold text-sky-300 hover:bg-sky-900/50 transition-colors"
              >
                📘 Facebook Official Page
              </a>
              <a
                href={`https://wa.me/${company.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-emerald-500/30 bg-emerald-950/40 px-3.5 py-1.5 font-bold text-emerald-400 hover:bg-emerald-900/50 transition-colors"
              >
                💬 WhatsApp 01736-493995
              </a>
            </div>
          </div>

          {/* Col 2: Educational Programs */}
          <div className="space-y-3">
            <span className="block font-display text-xs font-bold uppercase tracking-wider text-slate-400">
              Courses & Programs
            </span>
            <ul className="space-y-2 text-slate-300">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    to="/services"
                    className="hover:text-[#00AEEF] transition-colors"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/offers" className="text-[#ED1C24] font-bold hover:underline">
                  🔥 ৳2,000 IELTS Cashback
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Popular Study Destinations */}
          <div className="space-y-3">
            <span className="block font-display text-xs font-bold uppercase tracking-wider text-slate-400">
              Study Destinations
            </span>
            <ul className="space-y-2 text-slate-300">
              {destinations.map((d) => (
                <li key={d.slug}>
                  <Link
                    to="/study-in-{$country}"
                    params={{ country: d.slug }}
                    className="hover:text-[#00AEEF] transition-colors flex items-center gap-1.5"
                  >
                    <span>{d.flag}</span>
                    <span>Study in {d.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Direct Hotlines */}
          <div className="space-y-3">
            <span className="block font-display text-xs font-bold uppercase tracking-wider text-slate-400">
              Direct Hotlines & Support
            </span>
            <div className="space-y-2">
              {company.phones.map((p) => (
                <a
                  key={p}
                  href={`tel:+880${p.replace(/[^0-9]/g, "").slice(-10)}`}
                  className="block rounded-xl border border-slate-800 bg-[#112240] px-3 py-2 font-bold text-white hover:border-sky-400 hover:text-sky-400 transition-colors"
                >
                  📞 {p}
                </a>
              ))}
              <a
                href={`https://wa.me/${company.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="block rounded-xl border border-emerald-500/30 bg-emerald-950/40 px-3 py-2 font-bold text-emerald-400 hover:bg-emerald-900/50 transition-colors"
              >
                💬 WhatsApp Chat Support
              </a>
              <div className="pt-2 text-[0.7rem] text-slate-400">
                Email: <a href={`mailto:${company.email}`} className="text-sky-300 underline">{company.email}</a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Legal */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-400 text-[0.7rem]">
          <p>
            © {new Date().getFullYear()} {company.name}. All Rights Reserved. Maijdee Court, Noakhali.
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
