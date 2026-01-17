import { useState } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { translations, projectTranslations, type Language } from "@/lib/translations";

import glacisImg from "@assets/GLACIS_1768337984889.png";
import maatImg from "@assets/MAAT_1768337984889.png";
import skiziImg from "@assets/SKIZI_1768337984890.png";
import chefImg from "@assets/AI_Chef_1768337984889.png";

const projectImages: Record<number, string> = {
  1: glacisImg,
  2: maatImg,
  3: skiziImg,
  4: chefImg
};

export default function Projects() {
  const [language, setLanguage] = useState<Language>("en");
  const [contactOpen, setContactOpen] = useState(false);

  const t = translations[language];
  const projects = projectTranslations[language];

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
              <Link href="/" className="text-[15px] font-medium link-underline" data-testid="nav-home">
                {t.nav.home}
              </Link>
              <Link href="/projects" className="text-[15px] font-medium link-underline" data-testid="nav-projects">
                {t.nav.projects}
              </Link>
              <button onClick={() => setContactOpen(true)} className="text-[15px] font-medium link-underline" data-testid="nav-contact">
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
              <button onClick={() => setContactOpen(false)} className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors" data-testid="button-close-contact">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="h-full flex flex-col items-center justify-center px-6">
              <h2 className="text-4xl md:text-5xl font-medium mb-12 text-center">{t.contact.modalTitle}</h2>
              <div className="space-y-4 w-full max-w-md">
                <a href={contactData.telegramUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-5 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors group" data-testid="link-telegram">
                  <span className="text-lg">{t.contact.telegram}</span>
                  <span className="text-gray-500 group-hover:text-black transition-colors flex items-center gap-2">
                    {contactData.telegram}
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </a>
                <a href={contactData.linkedinUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-5 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors group" data-testid="link-linkedin">
                  <span className="text-lg">{t.contact.linkedin}</span>
                  <span className="text-gray-500 group-hover:text-black transition-colors flex items-center gap-2">
                    {contactData.linkedin}
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </a>
                <a href={contactData.emailUrl} className="flex items-center justify-between p-5 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors group" data-testid="link-email">
                  <span className="text-lg">{t.contact.email}</span>
                  <span className="text-gray-500 group-hover:text-black transition-colors flex items-center gap-2">
                    {contactData.email}
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="pt-32 pb-24 lg:pt-40 lg:pb-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <header className="max-w-3xl mb-16 lg:mb-24">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight mb-8"
              style={{ lineHeight: '110%' }}
            >
              {t.projectsPage.title}
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-500 leading-relaxed"
            >
              {t.projectsPage.subtitle}
            </motion.p>
          </header>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-x-8 gap-y-16">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index % 2 * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[16/10] rounded-[32px] overflow-hidden bg-gray-100 mb-8 border border-gray-100 shadow-sm transition-transform duration-500 group-hover:scale-[1.02]">
                  <img 
                    src={projectImages[project.id]} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />
                </div>
                
                <div className="flex flex-col">
                  <div className="flex items-center gap-3 text-[13px] text-gray-400 uppercase tracking-wider mb-4">
                    <span>{project.year}</span>
                    <span className="w-1 h-1 rounded-full bg-gray-300" />
                    <span>{project.category}</span>
                    <span className="w-1 h-1 rounded-full bg-gray-300" />
                    <span>{project.role}</span>
                  </div>
                  
                  <div className="flex items-start justify-between group-hover:translate-x-1 transition-transform duration-300">
                    <div>
                      <h3 className="text-3xl font-medium mb-3 tracking-tight">{project.title}</h3>
                      <p className="text-gray-500 leading-relaxed max-w-md">{project.description}</p>
                    </div>
                    <div className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center group-hover:bg-black group-hover:text-white group-hover:border-black transition-all duration-300">
                      <ArrowUpRight className="w-6 h-6" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      <footer className="py-12 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center">
          <p className="text-[15px] text-gray-400">{t.footer.copyright}</p>
          <div className="flex gap-8">
            <a href={contactData.linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-[15px] text-gray-400 hover:text-black transition-colors">{t.footer.socials.linkedin}</a>
            <a href={contactData.telegramUrl} target="_blank" rel="noopener noreferrer" className="text-[15px] text-gray-400 hover:text-black transition-colors">{t.footer.socials.telegram}</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
