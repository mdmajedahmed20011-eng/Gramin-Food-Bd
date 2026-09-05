import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { BrandLogo } from "@/components/brand-logo";
import { company, navItems, destinations, courses } from "@/lib/site-data";
import { useRegisterModal } from "@/components/register-modal";
import {
  IconPhone,
  IconWhatsApp,
  IconSparkles,
  IconGlobe,
} from "@/components/ui-blocks";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

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
    <motion.div
      initial={{ opacity: 0, y: -18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: [0.23, 1, 0.32, 1] }}
    >
      {/* 1. Ultra-Clean Global Top Bar - DSA Standard */}
      <div className="bg-[#043E8B] text-white text-xs py-2 relative z-50 border-b border-blue-900/40">
        <div className="section-shell flex items-center justify-between gap-3">
          {/* Left: Direct Phone & Email */}
          <div className="flex items-center gap-4 text-[0.73rem] sm:text-xs">
            <a
              href="tel:01886913391"
              className="flex items-center gap-1.5 font-medium text-slate-100 hover:text-white transition-colors"
            >
              <IconPhone className="w-3.5 h-3.5 text-red-400" />
              <span>01886 91 33 91</span>
            </a>
            <span className="text-blue-300/40">|</span>
            <a
              href={`mailto:${company.email}`}
              className="hidden sm:flex items-center gap-1.5 font-medium text-slate-100 hover:text-white transition-colors"
            >
              <span>✉</span>
              <span>{company.email}</span>
            </a>
          </div>

          {/* Right: Dual Office Locations */}
          <div className="flex items-center gap-2 text-[0.7rem] sm:text-[0.75rem] text-slate-200">
            <span className="text-red-400">📍</span>
            <span className="truncate">
              Aftabnagar, Dhaka · The Arches Cranberry Lane, London E16 4BJ
            </span>
          </div>
        </div>
      </div>

      {/* 2. Clean Sticky Navbar - DSA Exact Architecture */}
      <header
        className={cn(
          "sticky top-0 z-40 transition-all duration-300 w-full",
          scrolled
            ? "bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-[0_8px_25px_rgb(0,0,0,0.06)] py-2.5 sm:py-3"
            : "bg-white border-b border-slate-200/80 py-3 sm:py-3.5",
        )}
      >
        <div className="section-shell flex items-center justify-between gap-3">
          {/* Brand Logo with Tagline */}
          <Link to="/" className="group flex items-center gap-3 shrink-0">
            <BrandLogo size={42} withText textClassName="flex" />
            <div className="hidden xl:block h-6 w-px bg-slate-200" />
            <span className="hidden xl:inline text-xs font-semibold text-slate-500">
              Unlock Your Abroad Journey
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden items-center gap-1 xl:gap-1.5 lg:flex">
            {navItems.map((item) => {
              const hasChildren = item.children && item.children.length > 0;
              const isDest = item.label === "Study Abroad";
              const isCourses = item.label === "Language Courses";

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
                      className="inline-flex items-center gap-1 rounded-full px-3.5 py-2 text-xs font-bold text-slate-700 hover:bg-red-50 hover:text-red-700 transition-colors whitespace-nowrap"
                    >
                      <span>{item.label}</span>
                      <span className="text-[0.65rem] opacity-50">▾</span>
                    </Link>

                    {/* Dropdown Menu */}
                    {activeDropdown === item.label && (
                      <div
                        className={cn(
                          "absolute top-full pt-2 z-50 animate-in fade-in zoom-in-95 duration-150",
                          isDest
                            ? "left-1/2 -translate-x-1/2 w-[640px]"
                            : isCourses
                              ? "left-0 w-[420px]"
                              : "left-0 w-80",
                        )}
                      >
                        <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-2xl">
                          <div className="flex items-center justify-between border-b border-slate-100 pb-2.5 mb-3">
                            <span className="font-display text-[0.7rem] font-extrabold uppercase tracking-wider text-red-600">
                              {isDest
                                ? "Verified Study Abroad Destinations"
                                : isCourses
                                  ? "IELTS, Spoken & Kids English"
                                  : "Admissions & Visa Services"}
                            </span>
                            <Link
                              to={item.to}
                              className="text-[0.7rem] font-bold text-slate-500 hover:text-red-600"
                            >
                              Explore All →
                            </Link>
                          </div>

                          {isDest ? (
                            <div className="grid grid-cols-2 gap-2">
                              {destinations.slice(0, 8).map((d) => (
                                <Link
                                  key={d.slug}
                                  to="/study-in-{$country}"
                                  params={{ country: d.slug }}
                                  className="flex items-center justify-between rounded-xl p-2 text-xs text-slate-700 hover:bg-red-50 hover:text-red-700 transition-colors"
                                >
                                  <span className="flex items-center gap-2 font-semibold">
                                    <span className="text-base">{d.flag}</span>
                                    <span>{d.name}</span>
                                  </span>
                                  <span className="rounded bg-red-50 border border-red-200 px-1.5 py-0.5 text-[0.58rem] font-bold text-red-700">
                                    {d.pswv}
                                  </span>
                                </Link>
                              ))}
                            </div>
                          ) : isCourses ? (
                            <div className="space-y-2">
                              {courses.map((c) => (
                                <Link
                                  key={c.slug}
                                  to="/services"
                                  className="flex items-start gap-3 rounded-xl p-2.5 text-xs hover:bg-red-50 transition-colors group/item"
                                >
                                  <span className="text-2xl shrink-0 p-1.5 rounded-lg bg-red-100/60 border border-red-200">
                                    {c.icon}
                                  </span>
                                  <div className="flex-1 min-w-0">
                                    <div className="flex items-center gap-2">
                                      <span className="font-bold text-slate-900 group-hover/item:text-red-600">
                                        {c.title}
                                      </span>
                                      <span className="rounded-full bg-red-100 px-2 py-0.2 text-[0.6rem] font-bold text-red-700">
                                        {c.badge}
                                      </span>
                                    </div>
                                    <p className="text-[0.7rem] text-slate-500 line-clamp-1 mt-0.5">
                                      {c.subtitle}
                                    </p>
                                  </div>
                                </Link>
                              ))}
                            </div>
                          ) : (
                            <div className="space-y-1.5">
                              {item.children?.map((child) => (
                                <Link
                                  key={child.label}
                                  to={child.to}
                                  className="flex items-center justify-between rounded-xl px-3 py-2 text-xs text-slate-700 hover:bg-red-50 hover:text-red-700 transition-colors"
                                >
                                  <span className="font-semibold">{child.label}</span>
                                  {child.badge && (
                                    <span className="rounded-full bg-red-50 border border-red-200 px-2 py-0.5 text-[0.62rem] font-bold text-red-700">
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
                  className="rounded-full px-3.5 py-2 text-xs font-bold text-slate-700 hover:bg-red-50 hover:text-red-700 transition-colors whitespace-nowrap"
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right Unified Action - DSA Standard */}
          <div className="hidden items-center gap-2.5 lg:flex shrink-0">
            <Link
              to="/contact"
              className="rounded-xl bg-red-600 px-4 py-2 text-xs font-bold text-white hover:bg-red-700 transition-colors shadow-sm"
            >
              Contact Us
            </Link>
            <button
              type="button"
              onClick={open}
              className="rounded-xl bg-[#043E8B] px-4 py-2 text-xs font-bold text-white hover:bg-[#032B60] transition-colors shadow-sm inline-flex items-center gap-1.5"
            >
              <span>Book Appointment</span>
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
          <div className="border-t border-slate-200 bg-white p-5 lg:hidden animate-in slide-in-from-top-2 duration-200 max-h-[80vh] overflow-y-auto">
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
                          params={c.params}
                          onClick={() => setMobileOpen(false)}
                          className="block text-xs text-slate-600 hover:text-red-600 py-1"
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
                Book Free Profile Assessment
              </button>
              <a
                href={`https://wa.me/${company.whatsapp.replace(/[^0-9]/g, "")}`}
                target="_blank"
                rel="noreferrer"
                className="btn-luxury-secondary w-full text-xs py-3 text-center justify-center"
              >
                <IconWhatsApp className="w-4 h-4 text-emerald-600" />
                <span>WhatsApp {company.whatsappFormatted}</span>
              </a>
              <div className="text-center pt-2 text-[0.72rem] text-slate-500">
                <span>Dhaka (Aftabnagar): 01886 91 33 91</span>
                <span className="mx-1.5">·</span>
                <span>London: +44 07539228276</span>
              </div>
            </div>
          </div>
        )}
      </header>
    </motion.div>
  );
}
