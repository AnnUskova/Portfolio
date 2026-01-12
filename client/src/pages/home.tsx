import { useState } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ChevronLeft, ChevronRight, X, Download } from "lucide-react";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { translations, projectTranslations, type Language } from "@/lib/translations";

export default function Home() {
  const [activeProject, setActiveProject] = useState(0);
  const [language, setLanguage] = useState<Language>("en");
  const [contactOpen, setContactOpen] = useState(false);

  const t = translations[language];
  const projects = projectTranslations[language];

  const stats = [
    { label: t.stats.experience, value: "8+" },
    { label: t.stats.projects, value: "50+" },
    { label: t.stats.location, value: t.stats.locationValue }
  ];

  const nextProject = () => {
    setActiveProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setActiveProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-8">
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
                  href="mailto:hello@annauskova.com"
                  className="flex items-center justify-between p-5 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors group"
                  data-testid="link-email"
                >
                  <span className="text-lg">{t.contact.email}</span>
                  <span className="text-gray-500 group-hover:text-black transition-colors flex items-center gap-2">
                    hello@annauskova.com
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </a>
                
                <a 
                  href="https://t.me/annauskova"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-5 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors group"
                  data-testid="link-telegram"
                >
                  <span className="text-lg">{t.contact.telegram}</span>
                  <span className="text-gray-500 group-hover:text-black transition-colors flex items-center gap-2">
                    @annauskova
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </a>
                
                <a 
                  href="https://linkedin.com/in/annauskova"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-5 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors group"
                  data-testid="link-linkedin"
                >
                  <span className="text-lg">{t.contact.linkedin}</span>
                  <span className="text-gray-500 group-hover:text-black transition-colors flex items-center gap-2">
                    Anna Uskova
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </a>
                
                <a 
                  href="/cv.pdf"
                  download
                  className="flex items-center justify-center gap-3 p-5 bg-black text-white rounded-xl hover:bg-gray-800 transition-colors mt-8"
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

      <section className="pt-32 pb-24 lg:pt-40 lg:pb-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium leading-tight tracking-tight text-balance" data-testid="text-hero-title">
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
              className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white text-sm font-medium rounded-full hover:bg-gray-800 transition-colors"
              data-testid="button-view-work"
            >
              {t.hero.viewWork}
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <button 
              onClick={() => setContactOpen(true)}
              className="text-sm font-medium link-underline"
              data-testid="link-contact"
            >
              {t.hero.getInTouch}
            </button>
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

      <section id="projects" className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-[300px_1fr] gap-12 lg:gap-16 items-start">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                <span>{projects[activeProject].year}</span>
                <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                <span>{projects[activeProject].category}</span>
                <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                <span>{projects[activeProject].role}</span>
              </div>
              
              <h3 className="text-4xl md:text-5xl font-medium mb-6" data-testid="text-project-title">
                {projects[activeProject].title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed mb-8" data-testid="text-project-description">
                {projects[activeProject].description}
              </p>

              <div className="flex items-center gap-4">
                <button 
                  onClick={prevProject}
                  className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors"
                  data-testid="button-prev-project"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button 
                  onClick={nextProject}
                  className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors"
                  data-testid="button-next-project"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="flex gap-4 overflow-x-auto pb-4 -mr-6 lg:-mr-12 pr-6 lg:pr-12 scrollbar-hide">
                {projects[activeProject].images.map((img, idx) => (
                  <motion.div
                    key={img}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    className={`flex-shrink-0 ${idx === 0 ? 'w-80 lg:w-96' : 'w-48 lg:w-56'} aspect-[4/5] rounded-xl overflow-hidden bg-gray-100`}
                  >
                    <img 
                      src={img}
                      alt={`${projects[activeProject].title} ${idx + 1}`}
                      className="w-full h-full object-cover"
                      data-testid={`img-project-${idx}`}
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
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
              className="space-y-4"
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
                href="mailto:hello@annauskova.com"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-black text-white text-sm font-medium rounded-full hover:bg-gray-800 transition-colors"
                data-testid="button-email"
              >
                hello@annauskova.com
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <a 
                href="https://linkedin.com/in/annauskova"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-gray-200 text-sm font-medium rounded-full hover:bg-gray-50 transition-colors"
                data-testid="button-linkedin-footer"
              >
                LinkedIn
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
