import { useState } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { translations, projectTranslations, type Language } from "@/lib/translations";

import glacisImg from "@assets/Frame_22_1768330582626.png";
import maatImg from "@assets/Frame_23_1768330582626.png";
import skiziImg from "@assets/Frame_35_1768330582626.png";
import chefImg from "@assets/Frame_36_1768330582626.png";

const projectImages: Record<number, string> = {
  1: glacisImg,
  2: maatImg,
  3: skiziImg,
  4: chefImg
};

export default function Projects() {
  const [language, setLanguage] = useState<Language>("en");

  const t = translations[language];
  const projects = projectTranslations[language];

  const contactData = {
    telegramUrl: "https://t.me/Ann_uskova",
    linkedinUrl: "https://www.linkedin.com/in/anna-uskova-4b1169268/",
    emailUrl: "mailto:anyauskowa@yandex.ru"
  };

  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-8">
              <Link href="/" className="text-sm font-medium link-underline" data-testid="nav-home">
                {t.nav.home}
              </Link>
              <Link href="/projects" className="text-sm font-medium link-underline" data-testid="nav-projects">
                {t.nav.projects}
              </Link>
              <Link href="/#contact" className="text-sm font-medium link-underline" data-testid="nav-contact">
                {t.nav.contact}
              </Link>
            </div>
            <LanguageSwitcher language={language} onLanguageChange={setLanguage} />
          </div>
        </div>
      </nav>

      <section className="pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-medium"
            data-testid="text-page-title"
          >
            {t.projectsPage.title}
          </motion.h1>
        </div>
      </section>

      <section className="pb-24 lg:pb-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="py-16 border-b border-gray-100 last:border-0"
            >
              <div className="grid lg:grid-cols-[400px_1fr] gap-12 lg:gap-24 items-center">
                <div>
                  <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                    <span>{project.year}</span>
                    <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                    <span>{project.category}</span>
                    <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                    <span>{project.role}</span>
                  </div>
                  
                  <h3 className="text-4xl font-medium mb-6" data-testid={`text-project-title-${project.id}`}>
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed text-lg" data-testid={`text-project-desc-${project.id}`}>
                    {project.description}
                  </p>
                </div>

                <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-gray-100">
                  <img 
                    src={projectImages[project.id]}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    data-testid={`img-project-page-${project.id}`}
                  />
                </div>
              </div>
            </motion.div>
          ))}
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
