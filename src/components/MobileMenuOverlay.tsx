"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import type { Language } from "@/lib/translations";

interface MobileMenuOverlayProps {
  isOpen: boolean;
  pathname: string;
  language: Language;
  nav: {
    home: string;
    projects: string;
    contact: string;
  };
  onClose: () => void;
  onLanguageChange: (lang: Language) => void;
  onContactClick: () => void;
  projectsActive?: boolean;
}

export function MobileMenuOverlay({
  isOpen,
  pathname,
  language,
  nav,
  onClose,
  onLanguageChange,
  onContactClick,
  projectsActive = false
}: MobileMenuOverlayProps) {
  const baseLinkClass = "text-[19px] tracking-tight transition-colors";
  const activeClass = "text-gray-800 underline underline-offset-8 decoration-[1px]";
  const inactiveClass = "text-gray-400";

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[120] md:hidden">
          <motion.button
            type="button"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 bg-black/55"
            aria-label="Close menu"
            onClick={onClose}
          />

          <motion.div
            initial={{ y: "100%", opacity: 0.96 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "100%", opacity: 0.96 }}
            transition={{ type: "spring", stiffness: 260, damping: 28 }}
            className="absolute inset-x-0 bottom-0 rounded-t-[40px] bg-white px-6 pb-12 pt-16 shadow-2xl"
          >
            <div className="flex flex-col items-center">
              <div className="flex flex-col items-center gap-10">
                <Link
                  href="/"
                  onClick={onClose}
                  className={`${baseLinkClass} ${pathname === "/" ? activeClass : inactiveClass}`}
                >
                  {nav.home}
                </Link>
                <Link
                  href="/projects"
                  onClick={onClose}
                  className={`${baseLinkClass} ${projectsActive ? activeClass : inactiveClass}`}
                >
                  {nav.projects}
                </Link>
                <button
                  type="button"
                  onClick={onContactClick}
                  className={`${baseLinkClass} ${inactiveClass}`}
                >
                  {nav.contact}
                </button>
              </div>

              <div className="mt-12 rounded-full bg-slate-100 p-1.5 shadow-[inset_0_1px_2px_rgba(15,23,42,0.05)]">
                <div className="relative grid grid-cols-2">
                  <motion.div
                    layout
                    transition={{ type: "spring", stiffness: 320, damping: 28 }}
                    className={`absolute top-0 bottom-0 w-1/2 rounded-full bg-white shadow-sm ${
                      language === "ru" ? "left-0" : "left-1/2"
                    }`}
                  />
                  <button
                    type="button"
                    onClick={() => onLanguageChange("ru")}
                    className={`relative z-10 min-w-[120px] px-10 py-4 text-[18px] transition-colors ${
                      language === "ru" ? "text-gray-800" : "text-gray-400"
                    }`}
                  >
                    РУС
                  </button>
                  <button
                    type="button"
                    onClick={() => onLanguageChange("en")}
                    className={`relative z-10 min-w-[120px] px-10 py-4 text-[18px] transition-colors ${
                      language === "en" ? "text-gray-800" : "text-gray-400"
                    }`}
                  >
                    ENG
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
