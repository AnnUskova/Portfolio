import { useState } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ChevronLeft, ChevronRight, X, Download } from "lucide-react";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { translations, projectTranslations, type Language } from "@/lib/translations";

import glacisImg from "@assets/GLACIS_1768337984889.png";
import maatImg from "@assets/MAAT_1768337984889.png";
import skiziImg from "@assets/SKIZI_1768337984890.png";
import chefImg from "@assets/AI_Chef_1768337984889.png";

import annaPhoto from "@assets/1046_1_1768336698195.png";

import zeroDeltaImg from "@assets/зеро_дельта_1770041205735.png";
import glacisDappImg from "@assets/GL_dApp_1770754812223.png";
import xSwapImg from "@assets/image_1770052489389.png";
import zeroDeltaCoverImg from "@/assets/zero_delta_cover.png";
import twoGoCoverImg from "@/assets/2go_cover.png";
import twoGoSliderImg from "@/assets/2go_slider.png";
import gradientBar from "@assets/image_1770061190853.png";

const projectImages: Record<number, string | null> = {
  1: glacisDappImg,
  14: zeroDeltaImg,
  2: xSwapImg,
  3: null, // SKIZI
  4: twoGoSliderImg // 2Go
};

export default function Home() {
  const [activeProject, setActiveProject] = useState(0);
  const [language, setLanguage] = useState<Language>(() => {
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

  const t = translations[language];
  const projects = projectTranslations[language];

  const stats = [
    { label: t.stats.experience, value: "8+" },
    { label: t.stats.projects, value: "30+" },
    { label: t.stats.location, value: t.stats.locationValue }
  ];

  const nextProject = () => {
    setActiveProject((prev) => (prev + 1) % 7); // Limit to first 7 projects
  };

  const prevProject = () => {
    setActiveProject((prev) => (prev - 1 + 7) % 7); // Limit to first 7 projects
  };

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
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-12">
              <Link 
                href="/" 
                className={`text-[15px] font-medium transition-colors ${window.location.pathname === "/" ? "text-black" : "text-gray-400 hover:text-black"}`}
                data-testid="nav-home"
              >
                {t.nav.home}
              </Link>
              <Link 
                href="/projects" 
                className={`text-[15px] font-medium transition-colors ${window.location.pathname === "/projects" ? "text-black" : "text-gray-400 hover:text-black"}`}
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
            <LanguageSwitcher language={language} onLanguageChange={handleLanguageChange} />
          </div>
        </div>
      </nav>

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
                  href={language === "ru" ? "/cv_ru.pdf" : "/cv_en.pdf"}
                  download
                  className="flex items-center justify-center gap-3 px-8 bg-black text-white rounded-full hover:bg-gray-800 transition-colors mt-10 h-14"
                  data-testid="button-download-cv"
                >
                  <Download className="w-5 h-5" />
                  <span className="text-lg font-medium">{t.contact.downloadCV}</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <section className="pt-40 pb-24 lg:pt-52 lg:pb-32 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-start justify-between">
          <div className="max-w-4xl pt-5">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-[700px]"
            >
              <h1 className={`font-medium tracking-tight text-balance whitespace-pre-line ${language === "ru" ? "text-4xl md:text-5xl lg:text-[52px]" : "text-4xl md:text-5xl lg:text-[52px]"}`} style={{ lineHeight: '115%' }} data-testid="text-hero-title">
                {t.hero.title}
              </h1>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mt-6 max-w-2xl"
            >
              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed whitespace-pre-line" data-testid="text-hero-description">
                {t.hero.description}
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-16 flex items-center gap-6"
            >
              <button 
                onClick={() => {
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center justify-center px-8 py-3 bg-black text-white text-[15px] font-medium rounded-full hover:bg-gray-800 transition-colors h-14 min-w-[200px]"
                data-testid="button-view-work"
              >
                {t.hero.viewWork}
              </button>
              <button 
                onClick={() => setContactOpen(true)}
                className="text-[15px] font-medium link-underline"
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
              src={annaPhoto} 
              alt="Anna Uskova" 
              loading="eager"
              decoding="async"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      <section className="py-8 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div 
                key={stat.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                className="text-center md:text-left"
              >
                <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">{stat.label}</p>
                <p className="text-2xl md:text-3xl font-medium" data-testid={`text-stat-${index}`}>{stat.value}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="py-24 lg:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-[380px_1fr] gap-12 lg:gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col h-[392px]"
            >
              <div className="flex-1 flex flex-col pt-4">
                <div className="flex items-center gap-2 text-xs text-gray-400 uppercase tracking-wider mb-14">
                  <span>{projects[activeProject].year}</span>
                  <span className="text-gray-200">/</span>
                  <span>{projects[activeProject].category}</span>
                  <span className="text-gray-200">/</span>
                  <span>{projects[activeProject].role}</span>
                </div>
                
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`${activeProject}-${language}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.4 }}
                    className="h-[200px] flex flex-col justify-center"
                  >
                    <h3 className="text-5xl font-medium mb-6 tracking-tight" data-testid="text-project-title">
                      {projects[activeProject].title}
                    </h3>
                    
                    <p className="text-gray-500 leading-[1.6] text-lg max-w-[320px]" data-testid="text-project-description">
                      {projects[activeProject].description}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="flex items-center gap-6 mt-auto">
                <div className="flex items-center gap-3">
                  <button 
                    onClick={prevProject}
                    className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:border-black hover:bg-black hover:text-white transition-all duration-300 group"
                    data-testid="button-prev-project"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button 
                    onClick={() => {
                      const nextIdx = (activeProject + 1) % 7; // Limit to first 7 projects
                      setActiveProject(nextIdx);
                    }}
                    className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:border-black hover:bg-black hover:text-white transition-all duration-300 group"
                    data-testid="button-next-project"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </div>

                <Link 
                  href="/projects"
                  className="inline-flex items-center gap-2 px-6 h-12 border border-gray-200 rounded-full text-[14px] font-medium text-gray-500 hover:text-white hover:bg-black hover:border-black transition-all duration-300 group"
                  data-testid="link-all-projects-bottom"
                >
                  {language === "ru" ? "Все проекты" : "All Projects"}
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </motion.div>

            <div className="relative flex items-center h-[392px]">
              <div className="flex gap-2 items-start w-full">
                <AnimatePresence mode="popLayout">
                    {[0, 1, 2].map((offset) => {
                    const index = (activeProject + offset) % 7; // Limit to first 7 projects
                    const isFirst = offset === 0;
                    return (
                      <Link 
                        key={`${index}-${offset}`}
                        href={`/projects/${projects[index].id}`}
                        className={`${isFirst ? "w-[calc(65%+104px)]" : "w-[calc(25%+152px)]"} flex-shrink-0`}
                      >
                        <motion.div
                          initial={{ opacity: 0, x: 100 }}
                          animate={{ 
                            opacity: 1, 
                            x: 0,
                            scale: isFirst ? 1 : 0.95
                          }}
                          exit={{ opacity: 0, x: -100 }}
                          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                          className="relative h-[392px] rounded-[24px] overflow-hidden bg-[#F1F1F1] border border-gray-100 shadow-sm cursor-pointer group"
                        >
                          {projectImages[projects[index].id] ? (
                            <img 
                              src={projectImages[projects[index].id] as string}
                              alt={projects[index].title}
                              loading={offset === 0 ? "eager" : "lazy"}
                              decoding="async"
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                          ) : (
                            <div className="w-full h-full bg-[#F1F1F1]" />
                          )}
                        </motion.div>
                      </Link>
                    );
                  })}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-black text-white">
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
                <div key={item.num} className="flex gap-6 p-5 rounded-[18px] border border-white/10 hover:border-white/20 transition-colors">
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
              <img src={gradientBar} className="w-full h-full object-cover opacity-80" alt="" />
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
            <p className="text-[15px] text-gray-400">{t.footer.copyright}</p>
            <div className="flex items-center gap-6">
              <a href={contactData.linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-[15px] text-gray-400 hover:text-black transition-colors">{t.footer.socials.linkedin}</a>
              <a href={contactData.telegramUrl} target="_blank" rel="noopener noreferrer" className="text-[15px] text-gray-400 hover:text-black transition-colors">{t.footer.socials.telegram}</a>
              <a href={contactData.instagramUrl} target="_blank" rel="noopener noreferrer" className="text-[15px] text-gray-400 hover:text-black transition-colors">{t.footer.socials.instagram}</a>
              <a href={contactData.emailUrl} className="text-[15px] text-gray-400 hover:text-black transition-colors">{t.footer.socials.email}</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
