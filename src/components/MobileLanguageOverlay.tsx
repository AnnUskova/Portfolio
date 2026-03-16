"use client";

import { motion, AnimatePresence } from "framer-motion";
import type { Language } from "@/lib/translations";

interface MobileLanguageOverlayProps {
  isOpen: boolean;
  language: Language;
  onClose: () => void;
  onLanguageChange: (lang: Language) => void;
}

const languageOptions: Array<{ code: Language; label: string }> = [
  { code: "ru", label: "РУС" },
  { code: "en", label: "ENG" }
];

export function MobileLanguageOverlay({
  isOpen,
  language,
  onClose,
  onLanguageChange
}: MobileLanguageOverlayProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[125] md:hidden">
          <motion.button
            type="button"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 bg-black/55"
            aria-label="Close language menu"
            onClick={onClose}
          />

          <motion.div
            initial={{ y: "100%", opacity: 0.96 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "100%", opacity: 0.96 }}
            transition={{ type: "spring", stiffness: 260, damping: 28 }}
            className="absolute inset-x-0 bottom-0 rounded-t-[40px] bg-white px-6 pb-10 pt-8 shadow-2xl"
          >
            <div className="mb-6 h-1.5 w-12 rounded-full bg-gray-200 mx-auto" />
            <div className="space-y-2">
              {languageOptions.map((option) => {
                const isActive = option.code === language;

                return (
                  <button
                    key={option.code}
                    type="button"
                    onClick={() => {
                      onLanguageChange(option.code);
                      onClose();
                    }}
                    className={`flex w-full items-center justify-between rounded-2xl border px-5 py-4 text-left transition-colors ${
                      isActive
                        ? "border-gray-200 bg-gray-50 text-black"
                        : "border-gray-100 bg-white text-gray-500"
                    }`}
                  >
                    <span className="text-[17px] font-medium">{option.label}</span>
                    <span className={isActive ? "opacity-100" : "opacity-0"} aria-hidden={!isActive}>
                      <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
                        <path d="M1 5L5 9L13 1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </button>
                );
              })}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
