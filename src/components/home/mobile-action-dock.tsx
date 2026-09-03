import { useRegisterModal } from "@/components/register-modal";
import { IconPhone, IconWhatsApp, IconSparkles } from "@/components/ui-blocks";
import { company } from "@/lib/site-data";

export function MobileActionDock() {
  const { open } = useRegisterModal();

  return (
    <div className="fixed bottom-4 inset-x-3 z-40 md:hidden">
      <div className="rounded-full bg-[#090C10]/95 backdrop-blur-xl p-1.5 border border-[#D4AF37]/50 shadow-2xl flex items-center justify-between gap-1.5 text-xs text-white">
        <a
          href="tel:+8801805041710"
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-full bg-white/10 hover:bg-white/20 font-bold text-white transition-colors"
        >
          <IconPhone className="w-3.5 h-3.5 text-[#F5D365]" />
          <span>Call</span>
        </a>

        <a
          href={`https://wa.me/${company.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent("Hello Future Edge! I want to consult on study abroad.")}`}
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
          className="flex-1.5 flex items-center justify-center gap-1 py-2.5 px-3 rounded-full bg-gradient-to-r from-[#E5B842] to-[#B38827] text-[#090C10] font-extrabold shadow-sm active:scale-95 transition-transform cursor-pointer"
        >
          <IconSparkles className="w-3.5 h-3.5" />
          <span>Free Assessment</span>
        </button>
      </div>
    </div>
  );
}
