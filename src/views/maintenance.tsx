"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import type { Language } from "@/lib/translations";

const copy = {
  ru: {
    message: "Сайтик на редизайне, совсем скоро он вернется обновленный.",
    stickerAlt: "Котик в шапке медвежонка",
  },
  en: {
    message:
      "The site is getting a makeover. It’ll be back soon with a fresh new look.",
    stickerAlt: "A cat wearing a bear hat",
  },
};

export default function Maintenance() {
  const [language, setLanguage] = useState<Language>("ru");

  useEffect(() => {
    const saved = localStorage.getItem("app_language");
    if (saved === "en" || saved === "ru") {
      setLanguage(saved);
      return;
    }

    setLanguage(navigator.language.split("-")[0] === "ru" ? "ru" : "en");
  }, []);

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem("app_language", lang);
  };

  const t = copy[language];

  return (
    <div lang={language} className="relative min-h-svh bg-white text-[#161616]">
      <header className="absolute inset-x-0 top-0 z-10">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-end px-6 lg:px-12">
          <LanguageSwitcher
            language={language}
            onLanguageChange={handleLanguageChange}
          />
        </div>
      </header>

      <main className="flex min-h-svh flex-col items-center justify-center gap-8 px-6 py-24">
        <h1 className="max-w-[560px] text-balance text-center text-[18px] font-normal leading-[1.35] tracking-[-0.01em] sm:text-[20px]">
          {t.message}
        </h1>
        <Image
          src="/maintenance-sticker.webp"
          alt={t.stickerAlt}
          width={160}
          height={160}
          priority
          unoptimized
          className="h-[144px] w-[144px] object-contain sm:h-[160px] sm:w-[160px]"
        />
      </main>
    </div>
  );
}
