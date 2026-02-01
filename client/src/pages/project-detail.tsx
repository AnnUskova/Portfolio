import { useState, useEffect } from "react";
import { Link, useRoute, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ArrowLeft, X, ChevronRight } from "lucide-react";
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

export default function ProjectDetail() {
  const [location] = useLocation();
  const [, params] = useRoute("/projects/:id");
  const id = params?.id ? parseInt(params.id) : 1;
  const [language, setLanguage] = useState<Language>("en");
  const [contactOpen, setContactOpen] = useState(false);

  const t = translations[language];
  const projects = projectTranslations[language];
  const projectIndex = projects.findIndex(p => p.id === id);
  const project = projects[projectIndex] || projects[0];
  const nextProject = projects[(projectIndex + 1) % projects.length];

  const contactData = {
    telegramUrl: "https://t.me/Ann_uskova",
    linkedinUrl: "https://www.linkedin.com/in/anna-uskova-4b1169268/",
    instagramUrl: "https://instagram.com/ann_uskova",
    emailUrl: "mailto:anyauskowa@yandex.ru"
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-12">
              <Link href="/" className={`text-[15px] font-medium link-underline ${location === "/" ? "text-black" : "text-gray-400 hover:text-black"}`}>
                {t.nav.home}
              </Link>
              <Link href="/projects" className={`text-[15px] font-medium link-underline ${location.startsWith("/projects") ? "text-black" : "text-gray-400 hover:text-black"}`}>
                {t.nav.projects}
              </Link>
              <button onClick={() => setContactOpen(true)} className="text-[15px] font-medium text-gray-400 hover:text-black link-underline">
                {t.nav.contact}
              </button>
            </div>
            <LanguageSwitcher language={language} onLanguageChange={setLanguage} />
          </div>
        </div>
      </nav>

      <main className="pt-24 lg:pt-32">
        {/* Hero Section */}
        <section className="px-6 lg:px-12 max-w-7xl mx-auto mb-12">
          <Link href="/projects" className="inline-flex items-center gap-2 text-gray-400 hover:text-black transition-colors mb-8 group">
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span className="text-sm font-medium">{t.projectsPage.backToProjects}</span>
          </Link>

          <div className="max-w-4xl">
            <div className="flex items-center gap-3 text-[12px] text-gray-400 uppercase tracking-widest mb-4">
              <span>{project.year}</span>
              <span className="w-1 h-1 rounded-full bg-gray-300" />
              <span>{project.category}</span>
              <span className="w-1 h-1 rounded-full bg-gray-300" />
              <span>{project.role}</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight mb-6" style={{ lineHeight: '110%' }}>
              {project.title}
            </h1>
            
            <p className="text-lg md:text-xl text-gray-500 leading-relaxed max-w-2xl">
              {project.description}
            </p>
          </div>
        </section>

        {/* Project Content */}
        <section className="px-6 lg:px-12 max-w-7xl mx-auto mb-20">
          {project.id === 5 && project.content ? (
            <div className="max-w-4xl space-y-12 mb-24">
              <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 text-gray-500 text-[15px] italic">
                {project.content.nda}
              </div>

              <section>
                <h2 className="text-sm font-medium mb-4 uppercase tracking-wider text-gray-400">{project.content.goal.title}</h2>
                <div className="text-lg md:text-xl leading-relaxed text-gray-800 font-normal">
                  {project.content.goal.text}
                </div>
              </section>

              <section>
                <h2 className="text-sm font-medium mb-8 uppercase tracking-wider text-gray-400">{project.content.process.title}</h2>
                <div className="space-y-8">
                  {project.content.process.steps.map((step, idx) => (
                    <div key={idx} className="flex gap-4 group">
                      <span className="text-xs font-mono text-gray-300 mt-1.5 flex-shrink-0">0{idx + 1}</span>
                      <div>
                        <h3 className="text-xl font-medium mb-2">{step.name}</h3>
                        <p className="text-lg text-gray-600 leading-relaxed">{step.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section className="p-10 bg-black text-white rounded-[32px]">
                <h2 className="text-[11px] font-medium mb-6 uppercase tracking-widest text-gray-500">{project.content.results.title}</h2>
                <div className="text-lg md:text-xl leading-relaxed font-normal">
                  {project.content.results.text}
                </div>
              </section>
            </div>
          ) : (
            <div className="aspect-[16/9] rounded-[32px] overflow-hidden bg-gray-100 shadow-xl">
              <img 
                src={projectImages[project.id]} 
                alt={project.title} 
                className="w-full h-full object-cover"
              />
            </div>
          )}
        </section>

        {/* Footer Navigation */}
        <section className="border-t border-gray-100 py-24">
          <div className="max-w-7xl auto px-6 lg:px-12">
            <Link href={`/projects/${nextProject.id}`} className="group flex flex-col items-center text-center">
              <span className="text-gray-400 uppercase tracking-widest text-sm mb-8">{t.projectsPage.nextProject}</span>
              <h2 className="text-5xl md:text-7xl font-medium mb-12 tracking-tight group-hover:scale-105 transition-transform duration-500">
                {nextProject.title}
              </h2>
              <div className="w-20 h-20 rounded-full border border-gray-200 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all duration-300">
                <ChevronRight className="w-8 h-8" />
              </div>
            </Link>
          </div>
        </section>
      </main>

      <footer className="py-12 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[15px] text-gray-400">{t.footer.copyright}</p>
          <div className="flex gap-8">
            <a href={contactData.linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-[15px] text-gray-400 hover:text-black transition-colors">LinkedIn</a>
            <a href={contactData.telegramUrl} target="_blank" rel="noopener noreferrer" className="text-[15px] text-gray-400 hover:text-black transition-colors">Telegram</a>
            <a href={contactData.instagramUrl} target="_blank" rel="noopener noreferrer" className="text-[15px] text-gray-400 hover:text-black transition-colors">Instagram</a>
            <a href={contactData.emailUrl} className="text-[15px] text-gray-400 hover:text-black transition-colors">Email</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
