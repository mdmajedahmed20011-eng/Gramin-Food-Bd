import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { BrandLogo } from "@/components/brand-logo";
import { company, navItems, destinations } from "@/lib/site-data";
import { useRegisterModal } from "@/components/register-modal";
import {
  IconPhone,
  IconWhatsApp,
  IconSparkles,
  IconArrowRight,
  IconGraduationCap,
  IconGlobe,
} from "@/components/ui-blocks";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const { open } = useRegisterModal();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 15);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* 1. Ultra-Thin Top Bar */}
      <div className="bg-[#030712] text-white border-b border-slate-800/80 text-xs py-2 relative z-50">
        <div className="section-shell flex items-center justify-between gap-3">
          <div className="flex items-center gap-2.5 whitespace-nowrap overflow-hidden">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-rose-500/20 px-2.5 py-0.5 text-[0.68rem] font-bold text-rose-400 border border-rose-500/30">
              <span className="h-1.5 w-1.5 rounded-full bg-rose-400 animate-ping" />
              IDP & British Council
            </span>
            <span className="hidden sm:inline text-slate-300 text-[0.72rem] font-medium">
              Authorized IELTS Registration Point & Mock Test Venue
            </span>
            <span className="hidden lg:inline text-slate-700">|</span>
            <span className="hidden lg:inline text-slate-400 text-[0.72rem]">
              Ashfak Plaza (Level 4), Maijdee Bazar, Noakhali
            </span>
          </div>

          <div className="flex items-center gap-3 text-[0.72rem] sm:text-xs whitespace-nowrap shrink-0">
            <span className="hidden md:inline font-bold text-[#00AEEF]">
              "{company.slogan}"
            </span>
            <div className="flex items-center gap-2">
              <a
                href={`tel:+880${company.phones[0].replace(/[^0-9]/g, "").slice(-10)}`}
                className="flex items-center gap-1.5 font-bold text-slate-200 hover:text-white transition-colors"
              >
                <IconPhone className="w-3.5 h-3.5 text-slate-400" />
                <span>{company.phones[0]}</span>
              </a>
              <span className="text-slate-700">/</span>
              <a
                href={`https://wa.me/${company.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 font-bold text-emerald-400 hover:text-emerald-300 transition-colors"
              >
                <IconWhatsApp className="w-3.5 h-3.5 text-emerald-400" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Elevated Floating Sticky Navbar */}
      <header
        className={cn(
          "sticky top-0 z-40 transition-all duration-300",
          scrolled
            ? "bg-white/90 backdrop-blur-xl border-b border-slate-200/90 shadow-[0_10px_30px_rgb(0,0,0,0.05)] py-3"
            : "bg-white/95 backdrop-blur-md border-b border-slate-200/70 py-3.5",
        )}
      >
        <div className="section-shell flex items-center justify-between gap-4">
          {/* Brand Logo & Editorial Title */}
          <Link to="/" className="group flex items-center gap-3 shrink-0">
            <BrandLogo size={46} />
            <div className="leading-tight">
              <span className="block font-display text-base sm:text-lg font-extrabold tracking-tight text-slate-900 group-hover:text-[#E11D48] transition-colors whitespace-nowrap">
                {company.name}
              </span>
              <span className="block text-[0.62rem] font-bold uppercase tracking-[0.12em] text-[#00AEEF] whitespace-nowrap">
                IELTS · Spoken · Kids · Study Abroad · Noakhali
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden items-center gap-1 xl:gap-2 lg:flex">
            {navItems.map((item) => {
              const hasChildren = item.children && item.children.length > 0;
              const isDest = item.label === "Destinations";

              if (hasChildren) {
                return (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => setActiveDropdown(item.label)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <Link
                      to={item.to}
                      className="inline-flex items-center gap-1 rounded-full px-3.5 py-2 text-xs font-bold text-slate-700 hover:bg-slate-100 hover:text-slate-900 transition-colors whitespace-nowrap"
                    >
                      <span>{item.label}</span>
                      <span className="text-[0.65rem] opacity-40">▾</span>
                    </Link>

                    {/* Dropdown Menu */}
                    {activeDropdown === item.label && (
                      <div
                        className={cn(
                          "absolute top-full pt-2 z-50 animate-in fade-in zoom-in-95 duration-150",
                          isDest
                            ? "left-1/2 -translate-x-1/2 w-[620px]"
                            : "left-0 w-80",
                        )}
                      >
                        <div className="rounded-3xl border border-slate-200/90 bg-white/95 backdrop-blur-xl p-5 shadow-2xl">
                          <div className="flex items-center justify-between border-b border-slate-100 pb-2.5 mb-3">
                            <span className="font-display text-[0.7rem] font-extrabold uppercase tracking-wider text-[#E11D48]">
                              {isDest ? "Premier Global Destinations" : "Courses & Services"}
                            </span>
                            <Link
                              to={item.to}
                              className="text-[0.7rem] font-bold text-slate-500 hover:text-[#E11D48]"
                            >
                              Explore All →
                            </Link>
                          </div>

                          {isDest ? (
                            <div className="grid grid-cols-2 gap-2">
                              {destinations.map((d) => (
                                <Link
                                  key={d.slug}
                                  to="/study-in-{$country}"
                                  params={{ country: d.slug }}
                                  className="flex items-center justify-between rounded-xl p-2.5 text-xs text-slate-700 hover:bg-slate-50 hover:text-[#E11D48] transition-colors"
                                >
                                  <span className="flex items-center gap-2.5 font-semibold">
                                    <span className="text-base">{d.flag}</span>
                                    <span>{d.name}</span>
                                  </span>
                                  <span className="rounded bg-rose-50 px-1.5 py-0.5 text-[0.6rem] font-bold text-[#E11D48]">
                                    {d.pswv}
                                  </span>
                                </Link>
                              ))}
                            </div>
                          ) : (
                            <div className="space-y-1.5">
                              {item.children?.map((child) => (
                                <Link
                                  key={child.label}
                                  to={child.to}
                                  className="flex items-center justify-between rounded-xl px-3 py-2.5 text-xs text-slate-700 hover:bg-slate-50 hover:text-[#E11D48] transition-colors"
                                >
                                  <span className="font-semibold">{child.label}</span>
                                  {child.badge && (
                                    <span className="rounded-full bg-rose-50 border border-rose-200 px-2 py-0.5 text-[0.62rem] font-bold text-[#E11D48]">
                                      {child.badge}
                                    </span>
                                  )}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={item.label}
                  to={item.to}
                  className="rounded-full px-3.5 py-2 text-xs font-bold text-slate-700 hover:bg-slate-100 hover:text-slate-900 transition-colors whitespace-nowrap"
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right Unified Action */}
          <div className="hidden items-center gap-3 lg:flex shrink-0">
            <a
              href={`tel:+880${company.phones[0].replace(/[^0-9]/g, "").slice(-10)}`}
              className="flex items-center gap-1.5 rounded-full border border-slate-300 bg-white px-3.5 py-2 text-xs font-bold text-slate-800 hover:bg-slate-50 transition-colors shadow-sm"
            >
              <IconPhone className="w-3.5 h-3.5 text-slate-500" />
              <span>{company.phones[0]}</span>
            </a>
            <button
              type="button"
              onClick={open}
              className="btn-luxury-primary text-xs py-2.5 px-5 whitespace-nowrap"
            >
              <IconSparkles className="w-3.5 h-3.5" />
              <span>Book Free Session</span>
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-2xl border border-slate-300 bg-slate-50 text-slate-700 lg:hidden"
          >
            {mobileOpen ? (
              <span className="text-xl leading-none">✕</span>
            ) : (
              <span className="text-xl leading-none">☰</span>
            )}
          </button>
        </div>

        {/* Mobile Dropdown Panel */}
        {mobileOpen && (
          <div className="border-t border-slate-200 bg-white p-5 lg:hidden animate-in slide-in-from-top-2 duration-200">
            <nav className="space-y-2">
              {navItems.map((item) => (
                <div key={item.label} className="border-b border-slate-100 pb-2">
                  <Link
                    to={item.to}
                    onClick={() => setMobileOpen(false)}
                    className="block py-1.5 text-sm font-bold text-slate-900"
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <div className="pl-3 mt-1 space-y-1">
                      {item.children.map((c) => (
                        <Link
                          key={c.label}
                          to={c.to}
                          onClick={() => setMobileOpen(false)}
                          className="block text-xs text-slate-600 hover:text-[#E11D48] py-1"
                        >
                          • {c.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            <div className="mt-5 space-y-2.5">
              <button
                type="button"
                onClick={() => {
                  setMobileOpen(false);
                  open();
                }}
                className="btn-luxury-primary w-full text-xs py-3"
              >
                Book Free Appointment
              </button>
              <a
                href={`https://wa.me/${company.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="btn-luxury-secondary w-full text-xs py-3 text-center justify-center"
              >
                <IconWhatsApp className="w-4 h-4 text-emerald-600" />
                <span>WhatsApp 01736-493995</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
