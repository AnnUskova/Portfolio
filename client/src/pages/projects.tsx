import { useState, useEffect } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, X, Download } from "lucide-react";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { translations, projectTranslations, type Language } from "@/lib/translations";

import zeroDeltaImg from "@assets/зеро_дельта_1770041205735.png";
import xSwapImg from "@assets/image_1770052489389.png";
import zeroDeltaCoverImg from "@/assets/zero_delta_cover.png";
import twoGoCoverImg from "@/assets/2go_cover.png";
import zoodaoCoverImg from "@/assets/zoodao_cover_v3.png";
import maatCoverImg from "@/assets/maat_cover_final.png";

const projectImages: Record<number, string | null> = {
  1: zeroDeltaImg,
  2: xSwapImg,
  3: null, // SKIZI
  4: twoGoCoverImg, // 2Go
  5: null,
  6: null,
  7: null,
  8: null,
  9: null,
  10: maatCoverImg,
  11: zeroDeltaCoverImg,
  12: zoodaoCoverImg,
  13: null
};

export default function Projects() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

  const [activeTab, setActiveTab] = useState(() => {
    // Check URL parameters for initial tab
    const params = new URLSearchParams(window.location.search);
    const tab = params.get("tab");
    return (tab && ["uxui", "strategy", "research"].includes(tab)) ? tab : "uxui";
  });
  const [contactOpen, setContactOpen] = useState(false);

  const t = translations[language];
  const allProjects = projectTranslations[language];
  
  const projects = allProjects.filter(p => {
    if (activeTab === "uxui") return [1, 2, 3, 4, 5, 6, 8, 9, 10].includes(p.id);
    if (activeTab === "strategy") return [11, 12, 13].includes(p.id);
    if (activeTab === "research") return [7].includes(p.id);
    return true; 
  });

  const tabs = [
    { id: "uxui", label: t.projectsPage.tabs.uxui },
    { id: "strategy", label: t.projectsPage.tabs.strategy },
    { id: "research", label: t.projectsPage.tabs.research },
  ];

  const contactData = {
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
              >
                {t.nav.home}
              </Link>
              <Link 
                href="/projects" 
                className={`text-[15px] font-medium transition-colors ${window.location.pathname === "/projects" ? "text-black" : "text-gray-400 hover:text-black"}`}
              >
                {t.nav.projects}
              </Link>
              <button onClick={() => setContactOpen(true)} className="text-[15px] font-medium text-gray-400 hover:text-black transition-colors">
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
          >
            <div className="absolute top-6 right-6">
              <button onClick={() => setContactOpen(false)} className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="h-full flex flex-col items-center justify-center px-6">
              <h2 className="text-4xl md:text-5xl font-medium mb-12 text-center">{t.contact.modalTitle}</h2>
            <div className="space-y-[10px] w-full max-w-md">
                <a href={contactData.telegramUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-6 border border-gray-200 rounded-[18px] hover:bg-gray-50 transition-colors group" data-testid="link-telegram">
                  <span className="text-lg">{t.contact.telegram}</span>
                  <span className="text-gray-500 group-hover:text-black transition-colors flex items-center gap-2">
                    @Ann_uskova <ArrowUpRight className="w-4 h-4" />
                  </span>
                </a>
                <a href={contactData.linkedinUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-6 border border-gray-200 rounded-[18px] hover:bg-gray-50 transition-colors group" data-testid="link-linkedin">
                  <span className="text-lg">{t.contact.linkedin}</span>
                  <span className="text-gray-500 group-hover:text-black transition-colors flex items-center gap-2">
                    Anna Uskova <ArrowUpRight className="w-4 h-4" />
                  </span>
                </a>
                <a href={contactData.emailUrl} className="flex items-center justify-between p-6 border border-gray-200 rounded-[18px] hover:bg-gray-50 transition-colors group" data-testid="link-email">
                  <span className="text-lg">{t.contact.email}</span>
                  <span className="text-gray-500 group-hover:text-black transition-colors flex items-center gap-2">
                    anyauskowa@yandex.ru <ArrowUpRight className="w-4 h-4" />
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

      <main className="pt-28 pb-24 lg:pt-28 lg:pb-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <header className="mb-12">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight mb-14"
            >
              {t.projectsPage.title}
            </motion.h1>

            <div className="flex items-center gap-1 border-b border-gray-100 pb-1 w-fit">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2 text-[15px] font-medium transition-all relative ${
                    activeTab === tab.id ? "text-black" : "text-gray-400 hover:text-gray-600"
                  }`}
                >
                  {tab.label}
                  {activeTab === tab.id && (
                    <motion.div 
                      layoutId="activeTab"
                      className="absolute bottom-[-5px] left-0 right-0 h-[2px] bg-black"
                    />
                  )}
                </button>
              ))}
            </div>
          </header>

          <AnimatePresence mode="wait">
            <motion.div 
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12"
            >
              {projects.map((project, index) => (
                <Link key={project.id} href={`/projects/${project.id}`}>
                  <motion.div
                    className="group cursor-pointer"
                    transition={{ delay: (index % 3) * 0.1 }}
                  >
                    <div className="relative aspect-[16/11] rounded-[24px] overflow-hidden bg-[#F1F1F1] mb-6 border border-gray-100 shadow-sm transition-transform duration-500 group-hover:shadow-md">
                      {projectImages[project.id] ? (
                        <img 
                          src={projectImages[project.id] as string} 
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      ) : (
                        <div className="w-full h-full bg-[#F1F1F1]" />
                      )}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />
                    </div>
                    
                    <div className="flex flex-col">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-2xl font-medium tracking-tight group-hover:text-gray-600 transition-colors">{project.title}</h3>
                        <ArrowUpRight className="w-5 h-5 text-gray-300 group-hover:text-black transition-colors" />
                      </div>
                      <p className="text-gray-500 text-[15px] leading-relaxed mb-5 line-clamp-2">
                        {project.id === 8 && language === "ru" 
                          ? "Лендинг-протокол на сети CrossFi. Визуальный стиль, dApp и лендинг."
                          : project.id === 3
                            ? (language === "ru" 
                              ? "Система автоматизации учета зеленой энергии. Десктоп интерфейс на 8 ролей."
                              : "Green energy accounting automation system. Desktop interface with 8 user roles.")
                            : project.id === 2
                              ? (language === "ru"
                                ? "AMM на сети CrossFi. Swap, pools и veToken voting – дизайн и запуск за 1 месяц."
                                : "AMM on CrossFi network. Swap, pools, and veToken voting – design and launch in 1 month.")
                              : project.id === 4
                              ? (language === "ru"
                                ? "Фриланс-проект сервиса акций. Mobile app для В2С, десктоп для B2B и админ-панель."
                                : "Freelance deals service. B2C mobile app, B2B desktop app, and admin panel.")
                            : project.id === 5
                              ? (language === "ru"
                                ? "Парт-тайм с топ DeFi-протоколом: раздел Projects и редизайн Governance в dApp."
                                : "Part-time with top DeFi protocol: Projects section and Governance redesign in dApp.")
                            : project.id === 6
                              ? (language === "ru"
                                ? "Блокчейн-голосование: клиент, админка, mobile app. Мой первый большой продукт."
                                : "Blockchain voting: client, admin panel, mobile app. My first major product.")
                            : project.id === 12
                              ? (language === "ru"
                                ? "Схемы работы системы для инвесторов и комьюнити."
                                : "System diagrams for investors and the community.")
                              : project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mt-auto">
                        <span className="px-3 py-1 bg-gray-50 text-gray-500 text-[11px] font-medium uppercase tracking-wider rounded-full border border-gray-100">{project.year}</span>
                        <span className="px-3 py-1 bg-gray-50 text-gray-500 text-[11px] font-medium uppercase tracking-wider rounded-full border border-gray-100">{project.role}</span>
                        <span className="px-3 py-1 bg-gray-50 text-gray-500 text-[11px] font-medium uppercase tracking-wider rounded-full border border-gray-100">{project.category}</span>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>

      <footer className="py-12 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center text-gray-400">
          <p className="text-[15px]">{t.footer.copyright}</p>
          <div className="flex gap-8">
            <a href={contactData.linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-[15px] hover:text-black transition-colors">LinkedIn</a>
            <a href={contactData.telegramUrl} target="_blank" rel="noopener noreferrer" className="text-[15px] hover:text-black transition-colors">Telegram</a>
            <a href={contactData.instagramUrl} target="_blank" rel="noopener noreferrer" className="text-[15px] hover:text-black transition-colors">Instagram</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
