import { useState, useEffect } from "react";
import { Link, useRoute } from "wouter";
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
  const [, params] = useRoute("/projects/:id");
  const id = params?.id ? parseInt(params.id) : 1;
  const [language, setLanguage] = useState<Language>("en");
  const [contactOpen, setContactOpen] = useState(false);

  const t = translations[language];
  const projects = projectTranslations[language];
  const project = projects.find(p => p.id === id) || projects[0];
  const nextProject = projects[(projects.findIndex(p => p.id === id) + 1) % projects.length];

  const contactData = {
    telegramUrl: "https://t.me/Ann_uskova",
    linkedinUrl: "https://www.linkedin.com/in/anna-uskova-4b1169268/",
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
              <Link href="/" className="text-[15px] font-medium link-underline">
                {t.nav.home}
              </Link>
              <Link href="/projects" className="text-[15px] font-medium link-underline">
                {t.nav.projects}
              </Link>
              <button onClick={() => setContactOpen(true)} className="text-[15px] font-medium link-underline">
                {t.nav.contact}
              </button>
            </div>
            <LanguageSwitcher language={language} onLanguageChange={setLanguage} />
          </div>
        </div>
      </nav>

      <main className="pt-24 lg:pt-32">
        {/* Hero Section */}
        <section className="px-6 lg:px-12 max-w-7xl mx-auto mb-20">
          <Link href="/projects" className="inline-flex items-center gap-2 text-gray-400 hover:text-black transition-colors mb-12 group">
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span className="text-sm font-medium">{t.projectsPage.backToProjects}</span>
          </Link>

          <div className="max-w-4xl">
            <div className="flex items-center gap-3 text-[13px] text-gray-400 uppercase tracking-widest mb-6">
              <span>{project.year}</span>
              <span className="w-1 h-1 rounded-full bg-gray-300" />
              <span>{project.category}</span>
              <span className="w-1 h-1 rounded-full bg-gray-300" />
              <span>{project.role}</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-medium tracking-tight mb-8" style={{ lineHeight: '110%' }}>
              {project.title}
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-500 leading-relaxed max-w-3xl">
              {project.description}
            </p>
          </div>
        </section>

        {/* Main Image */}
        <section className="px-6 lg:px-12 max-w-7xl mx-auto mb-24">
          <div className="aspect-[16/9] rounded-[40px] overflow-hidden bg-gray-100 shadow-xl">
            <img 
              src={projectImages[project.id]} 
              alt={project.title} 
              className="w-full h-full object-cover"
            />
          </div>
        </section>

        {/* Story Section - Mockup for Garri style */}
        <section className="px-6 lg:px-12 max-w-7xl mx-auto mb-32">
          <div className="grid lg:grid-cols-[1fr_2fr] gap-16 lg:gap-32">
            <div>
              <h2 className="text-2xl font-medium mb-6 uppercase tracking-wider text-gray-400">The Challenge</h2>
            </div>
            <div className="text-xl md:text-2xl leading-relaxed text-gray-800 font-normal">
              For most users, the project required a seamless transition between complex data sets and intuitive interfaces. 
              We solved critical infrastructure tasks on the spot, but needed to ensure the overall ecosystem felt cohesive 
              and user-centric across all touchpoints.
            </div>
          </div>
        </section>

        <section className="px-6 lg:px-12 max-w-7xl mx-auto mb-32">
          <div className="grid lg:grid-cols-[1fr_2fr] gap-16 lg:gap-32">
            <div>
              <h2 className="text-2xl font-medium mb-6 uppercase tracking-wider text-gray-400">The Solution</h2>
            </div>
            <div className="text-xl md:text-2xl leading-relaxed text-gray-800 font-normal">
              Merging disparate functions into a unified workspace allowed us to provide answers without complex navigation. 
              The new architecture and visual language provided a better UX for the users as well as brought additional 
              value for stakeholders and the product ecosystem.
            </div>
          </div>
        </section>

        {/* Process Images Placeholder */}
        <section className="px-6 lg:px-12 max-w-7xl mx-auto mb-32 grid md:grid-cols-2 gap-8">
          <div className="aspect-square rounded-[32px] bg-gray-50 border border-gray-100 flex items-center justify-center p-12 overflow-hidden">
             <div className="w-full h-full bg-gray-100 rounded-2xl animate-pulse" />
          </div>
          <div className="aspect-square rounded-[32px] bg-gray-50 border border-gray-100 flex items-center justify-center p-12 overflow-hidden">
             <div className="w-full h-full bg-gray-100 rounded-2xl animate-pulse" />
          </div>
        </section>

        {/* Footer Navigation */}
        <section className="border-t border-gray-100 py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
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
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center">
          <p className="text-[15px] text-gray-400">{t.footer.copyright}</p>
          <div className="flex gap-8">
            <a href={contactData.linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-[15px] text-gray-400 hover:text-black transition-colors">LinkedIn</a>
            <a href={contactData.telegramUrl} target="_blank" rel="noopener noreferrer" className="text-[15px] text-gray-400 hover:text-black transition-colors">Telegram</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
