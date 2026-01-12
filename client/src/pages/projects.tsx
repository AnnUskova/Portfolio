import { useState } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";

const projects = [
  {
    id: 1,
    year: "2024-26",
    category: "DEFI",
    role: "DESIGN LEAD",
    title: "Glacis Labs",
    description: "DeFi ecosystem for cross-chain operations. Created design system, brand identity, dApp design, ecosystem website, technical diagrams, and pitch deck.",
    images: [
      "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&q=80",
      "https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=600&q=80",
      "https://images.unsplash.com/photo-1622630998477-20aa696ecb05?w=600&q=80",
      "https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=600&q=80"
    ]
  },
  {
    id: 2,
    year: "2023-24",
    category: "FINTECH",
    role: "SENIOR DESIGNER",
    title: "PayFlow",
    description: "Payment platform for enterprise clients. Led the complete redesign of the dashboard, mobile app, and merchant portal.",
    images: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&q=80",
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80"
    ]
  },
  {
    id: 3,
    year: "2022-23",
    category: "SAAS",
    role: "PRODUCT DESIGNER",
    title: "Metric Studio",
    description: "Analytics platform for startups. Designed data visualization components, onboarding flows, and the complete design system.",
    images: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80"
    ]
  }
];

export default function Projects() {
  const [activeProject, setActiveProject] = useState(0);
  const [language, setLanguage] = useState<"en" | "ru">("en");

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
              <Link href="/" className="text-sm font-medium link-underline" data-testid="nav-home">
                Home
              </Link>
              <Link href="/projects" className="text-sm font-medium link-underline" data-testid="nav-projects">
                Projects
              </Link>
              <Link href="/#contact" className="text-sm font-medium link-underline" data-testid="nav-contact">
                Contact
              </Link>
            </div>
            <button 
              onClick={() => setLanguage(language === "en" ? "ru" : "en")}
              className="text-sm font-medium text-gray-500 hover:text-black transition-colors flex items-center gap-1"
              data-testid="button-language"
            >
              {language.toUpperCase()}
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none" className="mt-0.5">
                <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
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
            Projects
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
            <p className="text-sm text-gray-400">© 2026 Anna Uskova. All rights reserved.</p>
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
