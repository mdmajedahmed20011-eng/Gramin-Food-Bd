import { useRegisterModal } from "@/components/register-modal";
import { IconPhone, IconWhatsApp, IconSparkles } from "@/components/ui-blocks";
import { company } from "@/lib/site-data";

export function MobileActionDock() {
  const { open } = useRegisterModal();

  return (
    <div className="fixed bottom-3 inset-x-3 max-w-md mx-auto z-40 md:hidden">
      <div className="rounded-full bg-slate-950/95 backdrop-blur-xl p-1.5 border border-red-500/40 shadow-2xl flex items-center justify-between gap-1.5 text-xs text-white">
        <a
          href="tel:01886913391"
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-full bg-white/10 hover:bg-white/20 font-bold text-white transition-colors"
        >
          <IconPhone className="w-3.5 h-3.5 text-red-400" />
          <span>Call</span>
        </a>

        <a
          href={`https://wa.me/${company.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
            "Hello Alex Global Consultancy! I want to consult on study abroad and language courses.",
          )}`}
          target="_blank"
          rel="noreferrer"
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-full bg-emerald-600/90 hover:bg-emerald-500 font-bold text-white transition-colors"
        >
          <IconWhatsApp className="w-3.5 h-3.5" />
          <span>WhatsApp</span>
        </a>

        <button
          type="button"
          onClick={() => open()}
          className="flex-1.5 flex items-center justify-center gap-1 py-2.5 px-3 rounded-full bg-gradient-to-r from-red-600 to-red-500 text-white font-black shadow-sm active:scale-95 transition-transform cursor-pointer"
        >
          <IconSparkles className="w-3.5 h-3.5" />
          <span>Free Assessment</span>
        </button>
      </div>
    </div>
  );
}
