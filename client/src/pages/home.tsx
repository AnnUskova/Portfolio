import { useState } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ChevronLeft, ChevronRight, X, Download } from "lucide-react";

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

const stats = [
  { label: "Years Experience", value: "8+" },
  { label: "Projects Delivered", value: "50+" },
  { label: "Location", value: "Remote / Hybrid" }
];

const competencies = [
  { num: "01", title: "UX Research", desc: "Deep user research, interviews, testing and data analysis" },
  { num: "02", title: "Design Systems", desc: "Scalable component libraries and brand guidelines" },
  { num: "03", title: "Product from Scratch", desc: "End-to-end design from concept to launch" },
  { num: "04", title: "Redesign", desc: "Revamping existing products for better UX and conversion" },
  { num: "05", title: "Team Leadership", desc: "Managing design teams for end-to-end delivery" }
];

export default function Home() {
  const [activeProject, setActiveProject] = useState(0);
  const [language, setLanguage] = useState<"en" | "ru">("en");
  const [contactOpen, setContactOpen] = useState(false);

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
                Home
              </Link>
              <Link 
                href="/projects" 
                className="text-sm font-medium link-underline"
                data-testid="nav-projects"
              >
                Projects
              </Link>
              <button 
                onClick={() => setContactOpen(true)}
                className="text-sm font-medium link-underline"
                data-testid="nav-contact"
              >
                Contact
              </button>
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
              <h2 className="text-4xl md:text-5xl font-medium mb-12 text-center">Let's connect</h2>
              
              <div className="space-y-4 w-full max-w-md">
                <a 
                  href="mailto:hello@annauskova.com"
                  className="flex items-center justify-between p-5 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors group"
                  data-testid="link-email"
                >
                  <span className="text-lg">Email</span>
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
                  <span className="text-lg">Telegram</span>
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
                  <span className="text-lg">LinkedIn</span>
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
                  <span className="text-lg font-medium">Download CV</span>
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
              Hi! I'm Anna Uskova — a product designer with 8+ years in the industry.
            </h1>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-8 max-w-2xl"
          >
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed" data-testid="text-hero-description">
              I design DeFi protocols, high-load systems, and products for wide audiences.
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
              View my work
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <button 
              onClick={() => setContactOpen(true)}
              className="text-sm font-medium link-underline"
              data-testid="link-contact"
            >
              Get in touch
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
                <p className="text-2xl md:text-3xl font-medium" data-testid={`text-stat-${stat.label.toLowerCase().replace(' ', '-')}`}>{stat.value}</p>
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
                What I do
              </h2>
              <p className="mt-6 text-gray-400 text-lg leading-relaxed max-w-lg">
                I help companies create exceptional digital products — from early research to final delivery.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-4"
            >
              {competencies.map((item) => (
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
              Let's work together
            </h2>
            <p className="mt-6 text-gray-600 text-lg">
              I'm available for freelance projects and full-time opportunities. Let's discuss how I can help bring your ideas to life.
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
