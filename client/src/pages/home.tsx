import { useState } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ChevronLeft, ChevronRight, X, Download } from "lucide-react";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { translations, projectTranslations, type Language } from "@/lib/translations";

import glacisImg from "@assets/Frame_22_1768330582626.png";
import maatImg from "@assets/Frame_23_1768330582626.png";
import skiziImg from "@assets/Frame_35_1768330582626.png";
import chefImg from "@assets/Frame_36_1768330582626.png";

import annaPhoto from "@assets/1046_1_1768336698195.png";

const projectImages: Record<number, string> = {
  1: glacisImg,
  2: maatImg,
  3: skiziImg,
  4: chefImg
};

export default function Home() {
  const [activeProject, setActiveProject] = useState(0);
  const [language, setLanguage] = useState<Language>("en");
  const [contactOpen, setContactOpen] = useState(false);

  const t = translations[language];
  const projects = projectTranslations[language];

  const stats = [
    { label: t.stats.experience, value: "8+" },
    { label: t.stats.projects, value: "30+" },
    { label: t.stats.location, value: t.stats.locationValue }
  ];

  const nextProject = () => {
    setActiveProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setActiveProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const contactData = {
    telegram: "@Ann_uskova",
    linkedin: "Anna Uskova",
    email: "anyauskowa@yandex.ru",
    telegramUrl: "https://t.me/Ann_uskova",
    linkedinUrl: "https://www.linkedin.com/in/anna-uskova-4b1169268/",
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
                className="text-sm font-medium link-underline"
                data-testid="nav-home"
              >
                {t.nav.home}
              </Link>
              <Link 
                href="/projects" 
                className="text-sm font-medium link-underline"
                data-testid="nav-projects"
              >
                {t.nav.projects}
              </Link>
              <button 
                onClick={() => setContactOpen(true)}
                className="text-sm font-medium link-underline"
                data-testid="nav-contact"
              >
                {t.nav.contact}
              </button>
            </div>
            <LanguageSwitcher language={language} onLanguageChange={setLanguage} />
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
              
              <div className="space-y-4 w-full max-w-md">
                <a 
                  href={contactData.telegramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-5 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors group"
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
                  className="flex items-center justify-between p-5 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors group"
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
                  className="flex items-center justify-between p-5 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors group"
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
                  className="flex items-center justify-center gap-3 p-5 bg-black text-white rounded-xl hover:bg-gray-800 transition-colors mt-8 h-14"
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

      <section className="pt-40 pb-24 lg:pt-48 lg:pb-32 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-start justify-between">
          <div className="max-w-4xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-[700px]"
            >
              <h1 className="text-4xl md:text-5xl lg:text-[52px] font-medium tracking-tight text-balance" style={{ lineHeight: '115%' }} data-testid="text-hero-title">
                {t.hero.title}
              </h1>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mt-8 max-w-2xl"
            >
              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed" data-testid="text-hero-description">
                {t.hero.description}
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-12 flex items-center gap-6"
            >
              <Link 
                href="/projects"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-black text-white text-base font-medium rounded-full hover:bg-gray-800 transition-colors h-14 min-w-[200px]"
                data-testid="button-view-work"
              >
                {t.hero.viewWork}
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <button 
                onClick={() => setContactOpen(true)}
                className="text-base font-medium link-underline"
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
          <div className="grid lg:grid-cols-[380px_1fr] gap-12 lg:gap-16 items-start">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col h-full"
            >
              <div className="flex-1 pt-4">
                <div className="flex items-center gap-2 text-xs text-gray-400 uppercase tracking-wider mb-8">
                  <span>{projects[activeProject].year}</span>
                  <span className="text-gray-200">/</span>
                  <span>{projects[activeProject].category}</span>
                  <span className="text-gray-200">/</span>
                  <span>{projects[activeProject].role}</span>
                </div>
                
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeProject}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.4 }}
                  >
                    <h3 className="text-5xl font-medium mb-8 tracking-tight" data-testid="text-project-title">
                      {projects[activeProject].title}
                    </h3>
                    
                    <p className="text-gray-500 leading-[1.6] mb-12 text-lg max-w-[320px]" data-testid="text-project-description">
                      {projects[activeProject].description}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="flex items-center gap-3 mt-auto pb-4">
                <button 
                  onClick={prevProject}
                  className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:border-black hover:bg-black hover:text-white transition-all duration-300 group"
                  data-testid="button-prev-project"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button 
                  onClick={nextProject}
                  className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:border-black hover:bg-black hover:text-white transition-all duration-300 group"
                  data-testid="button-next-project"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            </motion.div>

            <div className="relative">
              <div className="flex gap-6 items-start">
                <AnimatePresence mode="popLayout">
                  {[0, 1, 2, 3].map((offset) => {
                    const index = (activeProject + offset) % projects.length;
                    return (
                      <motion.div
                        key={`${index}-${offset}`}
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ 
                          opacity: 1, 
                          x: 0,
                          scale: offset === 0 ? 1 : 0.95
                        }}
                        exit={{ opacity: 0, x: -100 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="relative flex-shrink-0 w-[320px] rounded-[32px] overflow-hidden bg-white border border-gray-100 shadow-sm"
                      >
                        <img 
                          src={projectImages[projects[index].id]}
                          alt={projects[index].title}
                          className="w-full h-auto object-contain"
                          style={{ maxHeight: '480px' }}
                        />
                      </motion.div>
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
              className="grid gap-4"
            >
              {t.competencies.items.map((item) => (
                <div key={item.num} className="flex gap-6 p-5 rounded-xl border border-white/10 hover:border-white/20 transition-colors">
                  <span className="text-sm text-gray-500 font-mono">{item.num}</span>
                  <div>
                    <h3 className="font-medium text-lg">{item.title}</h3>
                    <p className="text-gray-400 text-sm mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
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
                href={contactData.emailUrl}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-black text-white text-sm font-medium rounded-full hover:bg-gray-800 transition-colors h-14 min-w-[200px]"
                data-testid="button-email-footer"
              >
                {t.footer.socials.email}
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <a 
                href={contactData.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-gray-200 text-sm font-medium rounded-full hover:bg-gray-50 transition-colors h-14 min-w-[200px]"
                data-testid="button-linkedin-footer"
              >
                {t.contact.linkedin}
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <footer className="py-8 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">{t.footer.copyright}</p>
            <div className="flex items-center gap-6">
              <a href={contactData.linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-gray-400 hover:text-black transition-colors">{t.footer.socials.linkedin}</a>
              <a href={contactData.telegramUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-gray-400 hover:text-black transition-colors">{t.footer.socials.telegram}</a>
              <a href={contactData.emailUrl} className="text-sm text-gray-400 hover:text-black transition-colors">{t.footer.socials.email}</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
