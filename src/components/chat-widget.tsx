import { useState } from "react";
import { company } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [showCallMenu, setShowCallMenu] = useState(false);

  const whatsappUrl = `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(
    "Hello Affordable International! I want to know about IELTS coaching, Mock Test booking, and Study Abroad opportunities.",
  )}`;

  const messengerUrl = "https://m.me/affordableinternationalofficial";

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-3 select-none">
      {/* Floating Speed-Dial Action Buttons (Visible when open) */}
      {isOpen && (
        <div className="flex flex-col items-center gap-3.5 animate-in fade-in slide-in-from-bottom-5 duration-300">
          {/* Action 1: Facebook Messenger */}
          <div className="group relative flex items-center">
            <span className="pointer-events-none absolute right-full mr-3 hidden rounded-xl bg-slate-900/90 px-3 py-1.5 text-xs font-bold text-white shadow-md backdrop-blur whitespace-nowrap opacity-0 transition-all group-hover:opacity-100 sm:block">
              Facebook Messenger
            </span>
            <a
              href={messengerUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="Chat on Facebook Messenger"
              className="flex h-12 w-12 sm:h-13 sm:w-13 items-center justify-center rounded-full bg-[#0084FF] text-white shadow-lg border-2 border-white transition-all duration-200 hover:scale-110 hover:shadow-xl hover:bg-[#0073E6]"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.477 2 2 6.145 2 11.258c0 2.91 1.454 5.512 3.737 7.202V22l3.39-1.86c.91.252 1.874.388 2.873.388 5.523 0 10-4.145 10-9.258C22 6.145 17.523 2 12 2zm1.066 12.443l-2.584-2.756-5.045 2.756 5.549-5.89 2.651 2.756 4.978-2.756-5.549 5.89z" />
              </svg>
            </a>
          </div>

          {/* Action 2: Direct Phone Call Hotlines */}
          <div className="group relative flex items-center">
            <span className="pointer-events-none absolute right-full mr-3 hidden rounded-xl bg-slate-900/90 px-3 py-1.5 text-xs font-bold text-white shadow-md backdrop-blur whitespace-nowrap opacity-0 transition-all group-hover:opacity-100 sm:block">
              Call Hotline: {company.phones[0]}
            </span>
            <button
              type="button"
              onClick={() => setShowCallMenu(!showCallMenu)}
              aria-label="Direct Phone Hotlines"
              className="flex h-12 w-12 sm:h-13 sm:w-13 items-center justify-center rounded-full bg-[#10B981] text-white shadow-lg border-2 border-white transition-all duration-200 hover:scale-110 hover:shadow-xl hover:bg-[#059669] cursor-pointer"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
            </button>

            {/* Quick Hotline Selection Sub-menu */}
            {showCallMenu && (
              <div className="absolute right-full mr-3 bottom-0 w-52 rounded-2xl border border-slate-200 bg-white p-3 shadow-2xl animate-in fade-in duration-150">
                <p className="text-[0.68rem] font-bold uppercase tracking-wider text-slate-500 mb-2">
                  মাইজদী হটলাইন নম্বর:
                </p>
                <div className="space-y-1.5">
                  {company.phones.map((p) => (
                    <a
                      key={p}
                      href={`tel:+880${p.replace(/[^0-9]/g, "").slice(-10)}`}
                      className="block rounded-xl border border-slate-200 bg-slate-50 px-2.5 py-1.5 text-center text-xs font-bold text-slate-800 hover:border-[#ED1C24] hover:text-[#ED1C24] transition-colors"
                    >
                      📞 {p}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Action 3: Direct WhatsApp Instant Chat */}
          <div className="group relative flex items-center">
            <span className="pointer-events-none absolute right-full mr-3 hidden rounded-xl bg-slate-900/90 px-3 py-1.5 text-xs font-bold text-white shadow-md backdrop-blur whitespace-nowrap opacity-0 transition-all group-hover:opacity-100 sm:block">
              WhatsApp: 01736-493995
            </span>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="Chat on WhatsApp"
              className="flex h-12 w-12 sm:h-13 sm:w-13 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg border-2 border-white transition-all duration-200 hover:scale-110 hover:shadow-xl hover:bg-[#1EBE5D]"
            >
              <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.031 2C6.511 2 2.016 6.484 2.016 11.984c0 1.838.497 3.565 1.365 5.053L2 22l5.143-1.332a9.92 9.92 0 004.888 1.28c5.52 0 10.015-4.484 10.015-9.964C22.046 6.484 17.551 2 12.031 2zm0 18.234a8.27 8.27 0 01-4.223-1.156l-.303-.18-3.138.813.837-3.033-.197-.313a8.214 8.214 0 01-1.26-4.381c0-4.57 3.73-8.286 8.284-8.286 4.555 0 8.285 3.716 8.285 8.286 0 4.57-3.73 8.286-8.286 8.286zm4.538-6.195c-.248-.125-1.47-.724-1.698-.807-.228-.083-.393-.125-.558.125-.166.249-.643.807-.788.973-.145.166-.29.187-.539.062-.248-.125-1.047-.386-1.995-1.231-.738-.658-1.236-1.472-1.381-1.72-.145-.25-.015-.385.109-.508.112-.112.248-.29.373-.435.124-.145.166-.25.249-.415.083-.166.041-.311-.021-.436-.062-.124-.559-1.348-.766-1.846-.2-.486-.404-.42-.558-.428h-.477c-.166 0-.436.062-.664.311-.228.25-.87.85-.87 2.074 0 1.224.892 2.406 1.016 2.572.124.166 1.754 2.679 4.249 3.756.593.256 1.057.41 1.419.524.597.19 1.14.163 1.57.099.479-.071 1.47-.601 1.677-1.182.207-.581.207-1.079.145-1.183-.062-.104-.228-.166-.477-.29z" />
              </svg>
            </a>
          </div>
        </div>
      )}

      {/* Main Toggle Button */}
      <button
        type="button"
        onClick={() => {
          setIsOpen(!isOpen);
          setShowCallMenu(false);
        }}
        aria-label="Toggle Quick Communication Menu"
        className={cn(
          "group relative flex h-14 w-14 sm:h-15 sm:w-15 items-center justify-center rounded-full text-white shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer border-2 border-white",
          isOpen
            ? "bg-slate-900 rotate-90"
            : "bg-gradient-to-r from-[#ED1C24] via-[#00AEEF] to-[#0A192F] shadow-[#ED1C24]/30",
        )}
      >
        {isOpen ? (
          <span className="text-xl font-bold">✕</span>
        ) : (
          <span className="flex items-center justify-center text-2xl">
            💬
          </span>
        )}

        {/* Pulse Indicator when Closed */}
        {!isOpen && (
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500 border border-white" />
          </span>
        )}
      </button>
    </div>
  );
}
