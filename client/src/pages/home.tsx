import { useState } from "react";
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
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&q=80",
    tags: ["Design System", "Branding", "dApp"]
  },
  {
    id: 2,
    year: "2023-24",
    category: "FINTECH",
    role: "SENIOR DESIGNER",
    title: "PayFlow",
    description: "Payment platform for enterprise clients. Led the complete redesign of the dashboard, mobile app, and merchant portal.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["Product Design", "Mobile", "Dashboard"]
  },
  {
    id: 3,
    year: "2022-23",
    category: "SAAS",
    role: "PRODUCT DESIGNER",
    title: "Metric Studio",
    description: "Analytics platform for startups. Designed data visualization components, onboarding flows, and the complete design system.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    tags: ["Data Viz", "Design System", "SaaS"]
  }
];

const stats = [
  { label: "Years Experience", value: "8+" },
  { label: "Projects Delivered", value: "50+" },
  { label: "Based In", value: "Remote" }
];

export default function Home() {
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
              <a 
                href="#" 
                className="text-sm font-medium link-underline"
                data-testid="nav-home"
              >
                Home
              </a>
              <a 
                href="#projects" 
                className="text-sm font-medium link-underline"
                data-testid="nav-projects"
              >
                Projects
              </a>
              <a 
                href="#contact" 
                className="text-sm font-medium link-underline"
                data-testid="nav-contact"
              >
                Contact
              </a>
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

      <section className="pt-32 pb-24 lg:pt-40 lg:pb-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium leading-tight tracking-tight text-balance" data-testid="text-hero-title">
              Hi! I'm Anya Uskova — a product designer with 8+ years in the industry.
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
            <a 
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white text-sm font-medium rounded-full hover:bg-gray-800 transition-colors"
              data-testid="button-view-work"
            >
              View my work
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <a 
              href="#contact"
              className="text-sm font-medium link-underline"
              data-testid="link-contact"
            >
              Get in touch
            </a>
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
                <p className="font-display text-2xl md:text-3xl font-medium" data-testid={`text-stat-${stat.label.toLowerCase().replace(' ', '-')}`}>{stat.value}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="font-display text-3xl md:text-4xl font-medium" data-testid="text-section-projects">Selected Projects</h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-4 text-sm text-gray-400 mb-6">
                <span>{projects[activeProject].year}</span>
                <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                <span>{projects[activeProject].category}</span>
                <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                <span>{projects[activeProject].role}</span>
              </div>
              
              <h3 className="font-display text-4xl md:text-5xl font-medium mb-6" data-testid="text-project-title">
                {projects[activeProject].title}
              </h3>
              
              <p className="text-gray-600 text-lg leading-relaxed mb-8" data-testid="text-project-description">
                {projects[activeProject].description}
              </p>

              <div className="flex flex-wrap gap-2 mb-10">
                {projects[activeProject].tags.map((tag) => (
                  <span 
                    key={tag}
                    className="px-3 py-1 text-xs font-medium bg-gray-100 text-gray-600 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4">
                <button 
                  onClick={prevProject}
                  className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors"
                  data-testid="button-prev-project"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button 
                  onClick={nextProject}
                  className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors"
                  data-testid="button-next-project"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
                <span className="text-sm text-gray-400 ml-2">
                  {String(activeProject + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
                </span>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100 hover-lift">
                <motion.img 
                  key={activeProject}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  src={projects[activeProject].image}
                  alt={projects[activeProject].title}
                  className="w-full h-full object-cover"
                  data-testid="img-project"
                />
              </div>
              
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border border-gray-200 rounded-xl flex items-center justify-center bg-white">
                <span className="font-display text-4xl font-light text-gray-300">
                  {String(activeProject + 1).padStart(2, '0')}
                </span>
              </div>
            </motion.div>
          </div>

          <div className="mt-20 pt-12 border-t border-gray-100">
            <div className="grid md:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <motion.button
                  key={project.id}
                  onClick={() => setActiveProject(index)}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className={`text-left p-6 rounded-xl transition-all ${
                    activeProject === index 
                      ? 'bg-gray-50 ring-1 ring-gray-200' 
                      : 'hover:bg-gray-50'
                  }`}
                  data-testid={`button-project-${project.id}`}
                >
                  <span className="text-xs text-gray-400 font-medium">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h4 className="font-display text-xl font-medium mt-2 mb-2">{project.title}</h4>
                  <p className="text-sm text-gray-500">{project.category} · {project.year}</p>
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-medium leading-tight" data-testid="text-approach-title">
                Design with purpose.<br />
                Build with precision.
              </h2>
              <p className="mt-6 text-gray-400 text-lg leading-relaxed max-w-lg">
                I believe great design solves real problems. Every pixel, every interaction, every decision is intentional and serves the user's goals.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-6"
            >
              {[
                { num: "01", title: "Research & Strategy", desc: "Understanding users, markets, and business goals" },
                { num: "02", title: "Design Systems", desc: "Scalable, consistent, and efficient component libraries" },
                { num: "03", title: "Product Design", desc: "End-to-end product experiences from concept to launch" }
              ].map((item) => (
                <div key={item.num} className="flex gap-6 p-6 rounded-xl border border-white/10 hover:border-white/20 transition-colors">
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
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-medium" data-testid="text-contact-title">
              Let's work together
            </h2>
            <p className="mt-6 text-gray-600 text-lg">
              I'm currently available for freelance projects and full-time opportunities. Let's discuss how I can help bring your ideas to life.
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a 
                href="mailto:hello@anyauskova.com"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-black text-white text-sm font-medium rounded-full hover:bg-gray-800 transition-colors"
                data-testid="button-email"
              >
                hello@anyauskova.com
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <a 
                href="#"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-gray-200 text-sm font-medium rounded-full hover:bg-gray-50 transition-colors"
                data-testid="button-linkedin"
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
            <p className="text-sm text-gray-400">© 2026 Anya Uskova. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-sm text-gray-400 hover:text-black transition-colors">LinkedIn</a>
              <a href="#" className="text-sm text-gray-400 hover:text-black transition-colors">Dribbble</a>
              <a href="#" className="text-sm text-gray-400 hover:text-black transition-colors">Behance</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
