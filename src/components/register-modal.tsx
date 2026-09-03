import { createContext, useContext, useState, type ReactNode } from "react";
import { RegisterForm } from "./register-form";

type ModalContext = {
  open: () => void;
  close: () => void;
  isOpen: boolean;
};

const RegisterModalCtx = createContext<ModalContext>({
  open: () => {},
  close: () => {},
  isOpen: false,
});

export const useRegisterModal = () => useContext(RegisterModalCtx);

export function RegisterModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  return (
    <RegisterModalCtx.Provider value={{ open, close, isOpen }}>
      {children}
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div
            className="fixed inset-0 bg-slate-950/80 backdrop-blur-md transition-opacity"
            onClick={close}
            aria-hidden="true"
          />
          <div className="relative z-10 w-full max-w-lg rounded-3xl border border-white/20 bg-white p-6 sm:p-8 shadow-2xl animate-in fade-in zoom-in-95 duration-200">
            <button
              type="button"
              onClick={close}
              aria-label="Close dialog"
              className="absolute top-5 right-5 flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 hover:text-slate-900 transition-colors"
            >
              ✕
            </button>
            <RegisterForm onDone={close} />
          </div>
        </div>
      )}
    </RegisterModalCtx.Provider>
  );
}
