import { useState } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { translations, projectTranslations, type Language } from "@/lib/translations";

export default function Projects() {
  const [language, setLanguage] = useState<Language>("en");

  const t = translations[language];
  const projects = projectTranslations[language];

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
              <div className="grid lg:grid-cols-[300px_1fr] gap-12 lg:gap-16 items-start">
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
                  
                  <p className="text-gray-600 leading-relaxed" data-testid={`text-project-desc-${project.id}`}>
                    {project.description}
                  </p>
                </div>

                <div className="flex gap-4 overflow-x-auto pb-4 -mr-6 lg:-mr-12 pr-6 lg:pr-12">
                  {project.images.map((img, idx) => (
                    <div
                      key={img}
                      className={`flex-shrink-0 ${idx === 0 ? 'w-80 lg:w-96' : 'w-48 lg:w-56'} aspect-[4/5] rounded-xl overflow-hidden bg-gray-100`}
                    >
                      <img 
                        src={img}
                        alt={`${project.title} ${idx + 1}`}
                        className="w-full h-full object-cover"
                        data-testid={`img-project-${project.id}-${idx}`}
                      />
                    </div>
                  ))}
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
              <a href="https://linkedin.com/in/annauskova" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-400 hover:text-black transition-colors">LinkedIn</a>
              <a href="#" className="text-sm text-gray-400 hover:text-black transition-colors">Dribbble</a>
              <a href="#" className="text-sm text-gray-400 hover:text-black transition-colors">Behance</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
