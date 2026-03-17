"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ChevronRight, X } from "lucide-react";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { MobileLanguageOverlay } from "@/components/MobileLanguageOverlay";
import { MobileMenuOverlay } from "@/components/MobileMenuOverlay";
import { translations, projectTranslations, type Language } from "@/lib/translations";

import skiziImg from "@/assets/skizi_cover_new.webp";
import annaPhoto from "@/assets/anna_photo.webp";
import zeroDeltaImg from "@/assets/zero_delta_main.webp";
import glacisDappImg from "@/assets/GL_dApp_1770754812223.webp";
import xSwapImg from "@/assets/xswap_main.webp";
import twoGoSliderImg from "@/assets/2go_slider.webp";
import gradientBar from "@/assets/gradient_bar.webp";
import burgerIcon from "@/assets/Burger.svg";

const projectImages: Record<number, string | null> = {
  1: glacisDappImg.src,
  14: zeroDeltaImg.src,
  2: xSwapImg.src,
  3: skiziImg.src, // SKIZI
  4: twoGoSliderImg.src, // 2Go
  6: null // Cryptoveche - gray placeholder
};

export default function Home() {
  const pathname = usePathname();
  const router = useRouter();
  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window === "undefined") return "en";
    const saved = localStorage.getItem("app_language");
    if (saved === "en" || saved === "ru") return saved as Language;
    const browserLang = navigator.language.split('-')[0];
    return browserLang === "ru" ? "ru" : "en";
  });
  
  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem("app_language", lang);
  };
  
  const [contactOpen, setContactOpen] = useState(false);
  const [experienceOpen, setExperienceOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileLanguageOpen, setMobileLanguageOpen] = useState(false);
  const [mobileHeaderVisible, setMobileHeaderVisible] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen || mobileLanguageOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileLanguageOpen, mobileMenuOpen]);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY <= 16) {
        setMobileHeaderVisible(true);
      } else if (currentScrollY > lastScrollY) {
        setMobileHeaderVisible(false);
      } else {
        setMobileHeaderVisible(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const t = translations[language];
  const homeProjectIds = [1, 2, 3, 4];
  const homeProjects = homeProjectIds
    .map((id) => projectTranslations[language].find((project) => project.id === id))
    .filter((project): project is NonNullable<typeof projectTranslations[Language][number]> => project !== undefined);

  const contactData = {
    telegram: "@Ann_uskova",
    linkedin: "Anna Uskova",
    email: "anyauskowa@yandex.ru",
    telegramUrl: "https://t.me/Ann_uskova",
    linkedinUrl: "https://www.linkedin.com/in/anna-uskova-4b1169268/",
    instagramUrl: "https://instagram.com/ann_uskova",
    emailUrl: "mailto:anyauskowa@yandex.ru"
  };

  return (
    <div className="min-h-screen bg-white">
      <motion.nav
        animate={{ y: mobileHeaderVisible || mobileMenuOpen || mobileLanguageOpen ? 0 : -80 }}
        transition={{ duration: 0.22, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-100"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="relative flex items-center justify-between h-16">
            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="md:hidden flex h-10 w-10 items-center justify-center transition-opacity hover:opacity-70"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Image src={burgerIcon} alt="" className="h-[17px] w-[23px]" priority />}
            </button>
            <Link
              href="/"
              className="absolute left-1/2 top-1/2 block -translate-x-1/2 -translate-y-1/2 md:hidden"
            >
              <Image src="/favicon.png" alt="Anna Uskova" width={28} height={28} className="h-7 w-7" priority />
            </Link>
            <div className="hidden md:flex items-center gap-12">
              <Link 
                href="/" 
                className={`text-[15px] font-medium transition-colors ${pathname === "/" ? "text-black" : "text-gray-400 hover:text-black"}`}
                data-testid="nav-home"
              >
                {t.nav.home}
              </Link>
              <Link 
                href="/projects" 
                className={`text-[15px] font-medium transition-colors ${pathname === "/projects" ? "text-black" : "text-gray-400 hover:text-black"}`}
                data-testid="nav-projects"
              >
                {t.nav.projects}
              </Link>
              <button 
                onClick={() => setContactOpen(true)}
                className="text-[15px] font-medium text-gray-400 hover:text-black transition-colors"
                data-testid="nav-contact"
              >
                {t.nav.contact}
              </button>
            </div>
            <div className="flex items-center">
              <button
                type="button"
                onClick={() => setMobileLanguageOpen(true)}
                className="md:hidden text-[15px] font-medium text-gray-600 transition-opacity hover:opacity-70"
                aria-label="Open language menu"
              >
                {language === "ru" ? "РУС" : "ENG"}
              </button>
              <div className="hidden md:block">
                <LanguageSwitcher language={language} onLanguageChange={handleLanguageChange} />
              </div>
            </div>
          </div>
        </div>
      </motion.nav>
      <MobileMenuOverlay
        isOpen={mobileMenuOpen}
        pathname={pathname}
        language={language}
        nav={t.nav}
        onClose={() => setMobileMenuOpen(false)}
        onLanguageChange={handleLanguageChange}
        onContactClick={() => {
          setMobileMenuOpen(false);
          setContactOpen(true);
        }}
      />
      <MobileLanguageOverlay
        isOpen={mobileLanguageOpen}
        language={language}
        onClose={() => setMobileLanguageOpen(false)}
        onLanguageChange={handleLanguageChange}
      />

      <AnimatePresence>
        {contactOpen && (
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed inset-x-0 bottom-0 top-12 z-[100] bg-white rounded-t-3xl shadow-2xl"
            data-testid="modal-contact"
          >
            <div className="absolute top-6 right-6">
              <button 
                onClick={() => setContactOpen(false)}
                className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors"
                data-testid="button-close-contact"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="h-full flex flex-col items-center justify-center px-6">
              <h2 className="text-4xl md:text-5xl font-medium mb-12 text-center">{t.contact.modalTitle}</h2>
              
              <div className="space-y-[10px] w-full max-w-md">
                <a 
                  href={contactData.telegramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-6 border border-gray-200 rounded-[18px] hover:bg-gray-50 transition-colors group"
                  data-testid="link-telegram"
                >
                  <span className="text-lg">{t.contact.telegram}</span>
                  <span className="text-gray-500 group-hover:text-black transition-colors flex items-center gap-2">
                    {contactData.telegram}
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </a>

                <a 
                  href={contactData.emailUrl}
                  className="flex items-center justify-between p-6 border border-gray-200 rounded-[18px] hover:bg-gray-50 transition-colors group"
                  data-testid="link-email"
                >
                  <span className="text-lg">{t.contact.email}</span>
                  <span className="text-gray-500 group-hover:text-black transition-colors flex items-center gap-2">
                    {contactData.email}
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </a>

                <a 
                  href={contactData.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-6 border border-gray-200 rounded-[18px] hover:bg-gray-50 transition-colors group"
                  data-testid="link-linkedin"
                >
                  <span className="text-lg">{t.contact.linkedin}</span>
                  <span className="text-gray-500 group-hover:text-black transition-colors flex items-center gap-2">
                    {contactData.linkedin}
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <section className="pt-40 pb-10 lg:pt-52 lg:pb-32 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-start justify-between">
          <div className="max-w-4xl pt-5">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-[700px]"
            >
              <h1 className={`font-medium tracking-tight text-balance whitespace-normal md:whitespace-pre-line ${language === "ru" ? "text-4xl md:text-5xl lg:text-[52px]" : "text-4xl md:text-5xl lg:text-[52px]"}`} style={{ lineHeight: '115%' }} data-testid="text-hero-title">
                {t.hero.title}
              </h1>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mt-6 max-w-2xl"
            >
              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed whitespace-normal md:whitespace-pre-line" data-testid="text-hero-description">
                {t.hero.description}
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-16 flex flex-col items-start gap-4 md:flex-row md:items-center md:gap-6"
            >
              <button 
                onClick={() => {
                  router.push("/projects");
                }}
                className="inline-flex w-full md:w-auto items-center justify-center px-8 py-3 bg-black text-white text-[15px] font-medium rounded-full hover:bg-gray-800 transition-colors h-14 min-w-[200px]"
                data-testid="button-view-work"
              >
                {t.hero.viewWork}
              </button>
              <button 
                onClick={() => setContactOpen(true)}
                className="inline-flex w-full md:w-auto items-center justify-center px-8 py-3 border border-gray-200 text-[15px] font-medium rounded-full hover:bg-gray-50 transition-colors h-14 md:h-auto md:px-0 md:py-0 md:border-0 md:rounded-none md:link-underline"
                data-testid="link-contact"
              >
                {t.hero.getInTouch}
              </button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden lg:block w-[360px] aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl relative z-10 -mt-12"
          >
            <img 
              src={annaPhoto.src} 
              alt="Anna Uskova" 
              loading="eager"
              decoding="async"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      <section id="projects" className="pt-0 pb-24 lg:pt-14 lg:pb-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="mb-10 flex items-end justify-between gap-6 md:mb-14">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
            >
              <h2 className="text-[34px] leading-none font-medium tracking-tight md:text-5xl" data-testid="text-projects-heading">
                {t.nav.projects}
              </h2>
            </motion.div>

            <Link
              href="/projects"
              className="hidden md:inline-flex items-center gap-2 px-6 h-12 border border-gray-200 rounded-full text-[14px] font-medium text-gray-500 hover:text-white hover:bg-black hover:border-black transition-all duration-300 group"
              data-testid="link-all-projects-top"
            >
              {language === "ru" ? "Все проекты" : "All Projects"}
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-16 md:gap-14">
            {homeProjects.map((project, index) => (
              <motion.div
                key={`${project.id}-${language}`}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
              >
                <Link
                  href={`/projects/${project.id}?from=home`}
                  className="group block md:grid md:grid-cols-[minmax(0,1.08fr)_minmax(320px,0.92fr)] md:items-center md:gap-12"
                >
                  <div className="overflow-hidden rounded-[28px] border border-gray-100 bg-white shadow-sm">
                    {projectImages[project.id] ? (
                      <img
                        src={projectImages[project.id] as string}
                        alt={project.title}
                        loading={index < 2 ? "eager" : "lazy"}
                        decoding="async"
                        className="h-[280px] w-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.03] md:h-[410px]"
                      />
                    ) : (
                      <div className="h-[280px] w-full bg-[#F1F1F1] md:h-[410px]" />
                    )}
                  </div>

                  <div className="space-y-4 px-1 pt-5 md:px-0 md:-translate-y-5 md:pt-0">
                    <div className="flex flex-wrap items-center gap-2 text-[11px] text-gray-400 uppercase tracking-[0.14em]">
                      <span>{project.year}</span>
                      <span className="text-gray-200">/</span>
                      <span>{project.category}</span>
                      <span className="text-gray-200">/</span>
                      <span>{project.role}</span>
                    </div>

                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-[28px] leading-[0.98] font-medium tracking-tight md:text-[30px]">
                        {project.title}
                      </h3>
                      <ArrowUpRight className="mt-1 hidden h-5 w-5 shrink-0 text-gray-300 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 md:block" />
                    </div>

                    <p className="max-w-[40rem] text-[15px] leading-[1.4] text-gray-500 md:text-[16px] md:leading-[1.48]">
                      {project.description}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 md:hidden">
            <Link
              href="/projects"
              className="inline-flex h-14 w-full items-center justify-center gap-2 rounded-full border border-gray-200 px-8 text-[15px] font-medium text-gray-500 transition-all duration-300 hover:border-black hover:bg-black hover:text-white group"
              data-testid="link-all-projects-bottom-mobile"
            >
              {language === "ru" ? "Все проекты" : "All Projects"}
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>
      </section>

      <section className="pt-12 pb-24 lg:py-32 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium leading-tight" data-testid="text-competencies-title">
                {t.competencies.title}
              </h2>
              <p className="mt-6 text-gray-400 text-lg leading-relaxed max-w-lg">
                {t.competencies.description}
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="grid gap-3"
            >
              {t.competencies.items.map((item) => (
                <div key={item.num} className="flex gap-4 rounded-[18px] border border-white/10 px-4 py-5 transition-colors hover:border-white/20 md:gap-6 md:p-5">
                  <span className="text-sm text-gray-500 font-mono">{item.num}</span>
                  <div>
                    <h3 className="font-medium text-lg">{item.title}</h3>
                    <p className="text-gray-400 text-sm mt-2.5 whitespace-pre-line">{item.desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative">
        <button
          onClick={() => setExperienceOpen(!experienceOpen)}
          className="w-full relative h-[100px] flex items-center justify-center overflow-hidden group transition-all duration-500"
          style={{ 
            backgroundColor: experienceOpen ? '#F9F9F9' : 'transparent'
          }}
        >
          {!experienceOpen && (
            <div className="absolute inset-0 z-0">
              <img src={gradientBar.src} className="w-full h-full object-cover opacity-80" alt="" />
            </div>
          )}
          <div className="relative z-10 flex items-center gap-3 text-lg font-medium transition-transform group-hover:scale-105">
            {experienceOpen ? t.experience.hide : t.experience.toggle}
            <motion.div
              animate={{ rotate: experienceOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="flex items-center"
            >
              <ChevronRight className="w-5 h-5 rotate-90" />
            </motion.div>
          </div>
        </button>

        <AnimatePresence>
          {experienceOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden bg-[#F9F9F9]"
            >
              <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-10 pb-[72px]">
                <div className="relative w-full">
                  {/* Timeline Line */}
                  <div className="absolute left-1/2 top-2 bottom-2 w-[1px] bg-gray-200 -translate-x-1/2 hidden md:block" />
                  <div className="absolute left-[7px] top-2 bottom-2 w-[1px] bg-gray-200 md:hidden" />
                  
                  <div className="space-y-12 md:space-y-0">
                    {t.experience.items.map((item, index) => {
                      const isEven = index % 2 === 0;
                      return (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}
                          className={`relative md:flex md:items-center mb-12 md:mb-20 last:mb-0 ${isEven ? 'md:flex-row-reverse' : 'md:flex-row'}`}
                        >
                          {/* Diamond Marker */}
                          <div className="absolute left-[4.5px] md:left-1/2 top-[14px] md:top-1/2 w-[5px] h-[5px] bg-gray-400 rotate-45 z-10 md:-translate-x-1/2 md:-translate-y-1/2" />
                          
                          <div className={`md:w-1/2 pl-12 md:pl-0 ${isEven ? 'md:pl-16' : 'md:pr-16 md:text-right'}`}>
                            <div className={`flex flex-col ${isEven ? 'items-start' : 'md:items-end'}`}>
                              <span className="text-[13px] font-medium text-gray-400 uppercase tracking-wider whitespace-nowrap leading-relaxed mb-4">
                                {item.year}
                              </span>
                              <div>
                                <h3 className="text-2xl font-medium mb-1">
                                  {item.company === "Glacis Labs" ? (
                                    <a 
                                      href="https://glacislabs.com/" 
                                      target="_blank" 
                                      rel="noopener noreferrer"
                                      className="hover:text-gray-600 transition-colors inline-flex items-center gap-1"
                                    >
                                      {item.company}
                                      <ArrowUpRight className="w-4 h-4 text-gray-300 group-hover:text-gray-400 transition-colors" />
                                    </a>
                                  ) : item.company === "Moonbeam Foundation" ? (
                                    <a 
                                      href="https://moonbeam.foundation/" 
                                      target="_blank" 
                                      rel="noopener noreferrer"
                                      className="hover:text-gray-600 transition-colors inline-flex items-center gap-1"
                                    >
                                      {item.company}
                                      <ArrowUpRight className="w-4 h-4 text-gray-300 group-hover:text-gray-400 transition-colors" />
                                    </a>
                                  ) : item.company === "Masterchain" ? (
                                    <a 
                                      href="https://www.masterchain.ru/" 
                                      target="_blank" 
                                      rel="noopener noreferrer"
                                      className="hover:text-gray-600 transition-colors inline-flex items-center gap-1"
                                    >
                                      {item.company}
                                      <ArrowUpRight className="w-4 h-4 text-gray-300 group-hover:text-gray-400 transition-colors" />
                                    </a>
                                  ) : item.company === "Росэлторг (группа ВТБ)" ? (
                                    <a 
                                      href="https://www.roseltorg.ru/" 
                                      target="_blank" 
                                      rel="noopener noreferrer"
                                      className="hover:text-gray-600 transition-colors inline-flex items-center gap-1"
                                    >
                                      {item.company}
                                      <ArrowUpRight className="w-4 h-4 text-gray-300 group-hover:text-gray-400 transition-colors" />
                                    </a>
                                  ) : item.company === "ITERIUM.TECH" ? (
                                    <a 
                                      href="https://www.cubiq.camp/" 
                                      target="_blank" 
                                      rel="noopener noreferrer"
                                      className="hover:text-gray-600 transition-colors inline-flex items-center gap-1"
                                    >
                                      {item.company}
                                      <ArrowUpRight className="w-4 h-4 text-gray-300 group-hover:text-gray-400 transition-colors" />
                                    </a>
                                  ) : item.company === "Центр технологий распределенных реестров СПбГУ" || item.company === "Distributed Ledger Technologies Center, SPbU" ? (
                                    <a 
                                      href="https://dltc.spbu.ru/" 
                                      target="_blank" 
                                      rel="noopener noreferrer"
                                      className="hover:text-gray-600 transition-colors inline-flex items-center gap-1"
                                    >
                                      {item.company}
                                      <ArrowUpRight className="w-4 h-4 text-gray-300 group-hover:text-gray-400 transition-colors" />
                                    </a>
                                  ) : item.company === "Премиум Пресс" || item.company === "Premium Press" ? (
                                    <a 
                                      href="https://premium-press.ru/" 
                                      target="_blank" 
                                      rel="noopener noreferrer"
                                      className="hover:text-gray-600 transition-colors inline-flex items-center gap-1"
                                    >
                                      {item.company}
                                      <ArrowUpRight className="w-4 h-4 text-gray-300 group-hover:text-gray-400 transition-colors" />
                                    </a>
                                  ) : item.company === "Hyundai Motor Manufacturing Russia" ? (
                                    <a 
                                      href="https://hyundai-avtomaster.ru/manufacturing/" 
                                      target="_blank" 
                                      rel="noopener noreferrer"
                                      className="hover:text-gray-600 transition-colors inline-flex items-center gap-1"
                                    >
                                      {item.company}
                                      <ArrowUpRight className="w-4 h-4 text-gray-300 group-hover:text-gray-400 transition-colors" />
                                    </a>
                                  ) : (
                                    item.company
                                  )}
                                </h3>
                                <p className="text-gray-500">{item.role}</p>
                              </div>
                            </div>
                          </div>
                          <div className="hidden md:block md:w-1/2" />
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
                
                <div className="mt-20 flex justify-center">
                  <button
                    onClick={() => setExperienceOpen(false)}
                    className="flex items-center gap-2 text-[15px] font-medium text-gray-400 hover:text-black transition-colors"
                  >
                    {t.experience.hide}
                    <ChevronRight className="w-4 h-4 rotate-[270deg]" />
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      <section id="contact" className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium" data-testid="text-contact-title">
              {t.contact.title}
            </h2>
            <p className="mt-6 text-gray-600 text-lg">
              {t.contact.description}
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a 
                href={contactData.telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-black text-white text-[15px] font-medium rounded-full hover:bg-gray-800 transition-colors h-14 min-w-[200px]"
                data-testid="button-telegram-footer"
              >
                {t.contact.telegram}
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <a 
                href={contactData.emailUrl}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-gray-200 text-[15px] font-medium rounded-full hover:bg-gray-50 transition-colors h-14 min-w-[200px]"
                data-testid="button-email-footer"
              >
                {t.contact.email}
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <footer className="py-8 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="order-1 md:order-2 flex items-center gap-6">
              <a href={contactData.linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-[15px] text-gray-400 hover:text-black transition-colors">{t.footer.socials.linkedin}</a>
              <a href={contactData.telegramUrl} target="_blank" rel="noopener noreferrer" className="text-[15px] text-gray-400 hover:text-black transition-colors">{t.footer.socials.telegram}</a>
              <a href={contactData.instagramUrl} target="_blank" rel="noopener noreferrer" className="text-[15px] text-gray-400 hover:text-black transition-colors">{t.footer.socials.instagram}</a>
              <a href={contactData.emailUrl} className="text-[15px] text-gray-400 hover:text-black transition-colors">{t.footer.socials.email}</a>
            </div>
            <p className="order-2 md:order-1 text-[15px] text-gray-400">{t.footer.copyright}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
