import { useState, useEffect, useRef } from "react";
import { Link, useRoute } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ArrowLeft, X, ChevronRight, Download, Zap } from "lucide-react";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { translations, projectTranslations, type Language } from "@/lib/translations";

import glacisImg from "@assets/зеро_дельта_1770041205735.png";
import xSwapImg from "@assets/image_1770052489389.png";
import skiziImg from "@assets/SKIZI_1768337984890.png";
import chefImg from "@assets/AI_Chef_1768337984889.png";

const projectMocks: Record<number, string> = {
  1: glacisImg,
  2: xSwapImg,
  3: skiziImg,
  4: chefImg
};

const projectImages: Record<number, string> = {
  1: glacisImg,
  2: xSwapImg,
  3: skiziImg,
  4: chefImg
};

export default function ProjectDetail() {
  const [, params] = useRoute("/projects/:id");
  const id = params?.id ? parseInt(params.id) : 1;
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem("app_language");
    if (saved === "en" || saved === "ru") return saved as Language;
    const browserLang = navigator.language.split('-')[0];
    return browserLang === "ru" ? "ru" : "en";
  });

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem("app_language", lang);
  };

  const [contactOpen, setContactOpen] = useState(false);
  const [tldrOpen, setTldrOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const t = translations[language];
  const projects = projectTranslations[language];
  const projectIndex = projects.findIndex(p => p.id === id);
  const project = projects[projectIndex] || projects[0];
  const nextProject = projects[(projectIndex + 1) % projects.length];

  const scrollContainerRef1 = useRef<HTMLDivElement>(null);
  const scrollContainerRef2 = useRef<HTMLDivElement>(null);
  const [isDragging1, setIsDragging1] = useState(false);
  const [isDragging2, setIsDragging2] = useState(false);
  const [hasMoved1, setHasMoved1] = useState(false);
  const [hasMoved2, setHasMoved2] = useState(false);
  const [startX1, setStartX1] = useState(0);
  const [startX2, setStartX2] = useState(0);
  const [scrollLeft1, setScrollLeft1] = useState(0);
  const [scrollLeft2, setScrollLeft2] = useState(0);

  const handleMouseDown1 = (e: React.MouseEvent) => {
    if (!scrollContainerRef1.current) return;
    setIsDragging1(true);
    setHasMoved1(false);
    setStartX1(e.pageX - scrollContainerRef1.current.offsetLeft);
    setScrollLeft1(scrollContainerRef1.current.scrollLeft);
  };

  const handleMouseDown2 = (e: React.MouseEvent) => {
    if (!scrollContainerRef2.current) return;
    setIsDragging2(true);
    setHasMoved2(false);
    setStartX2(e.pageX - scrollContainerRef2.current.offsetLeft);
    setScrollLeft2(scrollContainerRef2.current.scrollLeft);
  };

  const handleMouseMove1 = (e: React.MouseEvent) => {
    if (!isDragging1 || !scrollContainerRef1.current) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef1.current.offsetLeft;
    const walk = (x - startX1) * 2;
    if (Math.abs(walk) > 5) setHasMoved1(true);
    scrollContainerRef1.current.scrollLeft = scrollLeft1 - walk;
  };

  const handleMouseMove2 = (e: React.MouseEvent) => {
    if (!isDragging2 || !scrollContainerRef2.current) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef2.current.offsetLeft;
    const walk = (x - startX2) * 2;
    if (Math.abs(walk) > 5) setHasMoved2(true);
    scrollContainerRef2.current.scrollLeft = scrollLeft2 - walk;
  };

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
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[200] bg-black/25 backdrop-blur-sm flex items-center justify-center p-6 cursor-pointer"
          >
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={selectedImage}
              alt="Full screen view"
              className="max-w-full max-h-full object-contain rounded-lg"
            />
          </motion.div>
        )}
      </AnimatePresence>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-12">
              <Link 
                href="/" 
                className={`text-[15px] font-medium transition-colors ${window.location.pathname === "/" ? "text-black" : "text-gray-400 hover:text-black"}`}
              >
                {t.nav.home}
              </Link>
              <Link 
                href="/projects" 
                className={`text-[15px] font-medium transition-colors ${window.location.pathname.startsWith("/projects") ? "text-black" : "text-gray-400 hover:text-black"}`}
              >
                {t.nav.projects}
              </Link>
              <button onClick={() => setContactOpen(true)} className="text-[15px] font-medium text-gray-400 hover:text-black transition-colors">
                {t.nav.contact}
              </button>
            </div>
            <LanguageSwitcher language={language} onLanguageChange={handleLanguageChange} />
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
              <div className="space-y-[10px] w-full max-w-md">
                <a href={contactData.telegramUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-6 border border-gray-200 rounded-[18px] hover:bg-gray-50 transition-colors group" data-testid="link-telegram">
                  <span className="text-lg">{t.contact.telegram}</span>
                  <span className="text-gray-500 group-hover:text-black transition-colors flex items-center gap-2">
                    @Ann_uskova <ArrowUpRight className="w-4 h-4" />
                  </span>
                </a>
                <a href={contactData.linkedinUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-6 border border-gray-200 rounded-[18px] hover:bg-gray-50 transition-colors group" data-testid="link-linkedin">
                  <span className="text-lg">{t.contact.linkedin}</span>
                  <span className="text-gray-500 group-hover:text-black transition-colors flex items-center gap-2">
                    Anna Uskova <ArrowUpRight className="w-4 h-4" />
                  </span>
                </a>
                <a href={contactData.emailUrl} className="flex items-center justify-between p-6 border border-gray-200 rounded-[18px] hover:bg-gray-50 transition-colors group" data-testid="link-email">
                  <span className="text-lg">{t.contact.email}</span>
                  <span className="text-gray-500 group-hover:text-black transition-colors flex items-center gap-2">
                    anyauskowa@yandex.ru <ArrowUpRight className="w-4 h-4" />
                  </span>
                </a>
                
                <a 
                  href={language === "ru" ? "/cv_ru.pdf" : "/cv_en.pdf"}
                  download
                  className="flex items-center justify-center gap-3 px-8 bg-black text-white rounded-full hover:bg-gray-800 transition-colors mt-10 h-14"
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
      <main className="pt-24 lg:pt-32">
        {/* Hero Section */}
        <section className="px-6 lg:px-12 max-w-7xl mx-auto mb-12">
          <Link href="/projects" className="inline-flex items-center gap-2 text-gray-400 hover:text-black transition-colors mb-8 group">
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span className="text-sm font-medium">{t.projectsPage.backToProjects}</span>
          </Link>

          <div className="w-full">
            <div className="flex flex-col md:flex-row md:items-center gap-9 mb-8 w-full relative">
              <h1 className="md:text-5xl lg:text-6xl font-medium tracking-tight text-[40px] md:text-[48px] leading-[1.1]" style={{ lineHeight: '110%' }}>
                {project.title}
              </h1>

              <div className="flex flex-wrap gap-2 items-center translate-y-[8px]">
                <span className="px-3 py-[6px] bg-[#F3F8FF] rounded-full text-[10px] font-medium text-gray-500 uppercase tracking-wider">
                  {project.year}
                </span>
                <span className="px-3 py-[6px] bg-[#F3F8FF] rounded-full text-[10px] font-medium text-gray-500 uppercase tracking-wider">
                  {project.category}
                </span>
                <span className="px-3 py-[6px] bg-[#F3F8FF] rounded-full text-[10px] font-medium text-gray-500 uppercase tracking-wider">
                  {project.role}
                </span>
              </div>

              {project.id === 2 && (
                <div className="md:ml-auto relative">
                  <button 
                    onClick={() => setTldrOpen(!tldrOpen)}
                    className="flex items-center gap-2 px-4 py-3 rounded-full border border-gray-100 bg-white shadow-sm hover:bg-gray-50 transition-all duration-300 group pl-[24px] pr-[24px]"
                  >
                    <Zap className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    <span className="text-sm font-medium text-gray-600">TL;DR</span>
                  </button>

                  <AnimatePresence>
                    {tldrOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        className="absolute right-0 top-14 w-[320px] md:w-[480px] bg-white rounded-3xl p-8 shadow-2xl border border-gray-100 z-50"
                      >
                        <div className="flex items-start justify-between mb-6">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center">
                              <Zap className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                            </div>
                            <h4 className="font-medium text-lg">Quick Summary</h4>
                          </div>
                          <button 
                            onClick={() => setTldrOpen(false)}
                            className="p-1 hover:bg-gray-100 rounded-full transition-colors"
                          >
                            <X className="w-5 h-5" />
                          </button>
                        </div>
                        <p className="text-[16px] leading-relaxed text-gray-600">
                          xSwap — AMM dApp на CrossFi. За 1 месяц собрала UX/UI для Swap, Pools, Token Sale и Lock/Voting, координировала фронт, работала в связке с solidity. Сделала интерфейс, который не пугает: slippage и прозрачный Route в swap, понятные liquidity-пулы с multi-step подсказками, Token Sale с Profit Estimator и видеогайдами, плюс сложный Lock/Voting — с продуманными корнер-кейсами и состояниями транзакций.
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )}
            </div>
            
            <p className="md:text-xl text-gray-500 max-w-2xl text-[18px] leading-relaxed mb-12">
              {project.description}
            </p>

            <div className="max-w-2xl aspect-[16/9] rounded-2xl overflow-hidden bg-gray-100 shadow-sm border border-gray-100 mb-12">
              <img 
                src={projectMocks[project.id]} 
                alt={project.title} 
                className="w-full h-full object-cover"
              />
            </div>

            {project.id === 2 && (
              <div className="max-w-[calc(56rem-80px)] mb-20">
                <h2 className="text-2xl font-medium mb-6">Контекст и продуктовые вызовы</h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">DeFi-интерфейсы — это зона высокого риска: ошибка стоит денег, а непонимание механики быстро превращается в недоверие. Поэтому важно было:</p>
                <ul className="space-y-4">
                  {[
                    "снизить вероятность ошибок при транзакциях (например, изменение значений в инпутах, когда свап в процессе, или уход с формы во время аппрува, или недостаток газа и тд);",
                    "обеспечить максимальную прозрачность для опытных пользователей и поддержку для новичков (когда только вникаешь в DeFi, хочется, чтобы везде были развешаны хинты...);",
                    "снизить барьер входа: без XFI нельзя оплатить gas и провести транзакцию, из-за этого пользователи часто уходят “разбираться” и не возвращаются;",
                    "усилить конверсию без шума: оформить token sale так, чтобы стимулировать пользователя цифрами и ясной логикой."
                  ].map((item, i) => (
                    <li key={i} className="flex gap-4 text-lg text-gray-600 leading-relaxed">
                      <span className="text-black font-medium">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-16">
                  <h2 className="text-2xl font-medium mb-2">User Flow и другие лекарства</h2>
                  <p className="text-[18px] text-gray-600 leading-relaxed mt-3 mb-12">
                    Чтобы избежать ошибок, определяю все места, где они могут возникнуть:
                  </p>
                  
                  <div className="relative -mr-[calc((100vw-100%)/2)] w-[calc(100%+((100vw-100%)/2))]">
                    <div 
                      ref={scrollContainerRef1}
                      onMouseDown={handleMouseDown1}
                      onMouseLeave={() => setIsDragging1(false)}
                      onMouseUp={() => setIsDragging1(false)}
                      onMouseMove={handleMouseMove1}
                      className={`flex overflow-x-auto pb-4 gap-6 no-scrollbar ${isDragging1 ? 'cursor-grabbing select-none' : 'cursor-grab'}`}
                    >
                      {[
                        { src: "/Swap_1770223795857.png", alt: "User Flow Swap" },
                        { src: "/Provide_Liquidity_1770223795856.png", alt: "User Flow Pools Add" },
                        { src: "/Remove_Liquidity_1770223795857.png", alt: "User Flow Pools Remove" },
                        { src: "/Token_sale_1770223795858.png", alt: "User Flow Token Sale" }
                      ].map((img, idx) => (
                        <div key={idx} className="flex-shrink-0 w-[85vw] md:w-[600px]">
                          <div 
                            onClick={() => !hasMoved1 && setSelectedImage(img.src)}
                            className={`rounded-3xl overflow-hidden border border-gray-100 shadow-sm bg-white ${isDragging1 ? 'cursor-grabbing' : 'cursor-grab'}`}
                          >
                            <img 
                              src={img.src} 
                              alt={img.alt} 
                              className="w-full h-auto object-contain pointer-events-none"
                            />
                          </div>
                        </div>
                      ))}
                      {/* Spacer to allow scrolling past the last item to the screen edge */}
                      <div className="flex-shrink-0 w-[calc((100vw-100%)/2)]" />
                    </div>
                  </div>

                  <p className="text-[18px] text-gray-600 leading-relaxed mt-8 mb-4">
                    И дальше согласуем механики с solidity и фронтом. Вот пара черновых схем — здесь staking/locking, связи между сущностями и немного токен сейла.
                  </p>

                  <div className="relative -mr-[calc((100vw-100%)/2)] w-[calc(100%+((100vw-100%)/2))]">
                    <div 
                      ref={scrollContainerRef2}
                      onMouseDown={handleMouseDown2}
                      onMouseLeave={() => setIsDragging2(false)}
                      onMouseUp={() => setIsDragging2(false)}
                      onMouseMove={handleMouseMove2}
                      className={`flex overflow-x-auto pb-4 gap-6 no-scrollbar ${isDragging2 ? 'cursor-grabbing select-none' : 'cursor-grab'}`}
                    >
                      {[
                        { src: "/Staking_Draft_Updated.png", alt: "Draft Staking", width: "md:w-[600px]" },
                        { src: "/TokenSale_Draft.png", alt: "Draft Token Sale", width: "md:w-[400px]" },
                        { src: "/Relations_Draft.png", alt: "Draft Relations", width: "md:w-[600px]" }
                      ].map((img, idx) => (
                        <div key={idx} className={`flex-shrink-0 w-[85vw] ${img.width}`}>
                          <div 
                            onClick={() => !hasMoved2 && setSelectedImage(img.src)}
                            className={`rounded-3xl overflow-hidden border border-gray-100 shadow-sm bg-white ${isDragging2 ? 'cursor-grabbing' : 'cursor-grab'}`}
                          >
                            <img 
                              src={img.src} 
                              alt={img.alt} 
                              className="w-full h-auto object-contain pointer-events-none"
                            />
                          </div>
                        </div>
                      ))}
                      {/* Spacer to allow scrolling past the last item to the screen edge */}
                      <div className="flex-shrink-0 w-[calc((100vw-100%)/2)]" />
                    </div>
                  </div>

                  <p className="text-[18px] text-gray-600 leading-relaxed mt-12 mb-4">
                    После – собираю интерактивные прототипы и прогняю быстрые A/B-проверки внутри команды и на нескольких пользователях (более масштабное тестирование не проводим, потому что нет времени и ресурсов, потому что стартап). По результатам – итеративно улучшаю копирайт, подсказки и структуру, чтобы уменьшить непонимание на критичных шагах.
                  </p>
                </div>
              </div>
            )}

            {project.id === 2 && (
              <div className="max-w-[calc(56rem-80px)] space-y-12 pb-20">
                <section>
                  <h2 className="text-2xl font-medium mb-8">Решения по фичам</h2>
                  
                  <div className="space-y-12 text-[18px] text-gray-600 leading-relaxed">
                    <div className="space-y-4">
                      <p className="font-medium text-black">Swap</p>
                      <p>Один из главных флоу – это свап. Пользователь здесь хочет поменять один токен на другой. По устоявшемуся паттерну облегчаем ему жизнь кнопкой «Мах», добавляем кнопку свапа полей, показываем, сколько в кошельке, и значение в долларах.</p>
                      
                      <div className="my-12 rounded-3xl overflow-hidden border border-gray-100 shadow-sm bg-white">
                        <img 
                          src="/Swap_UI_Showcase_New.png" 
                          alt="Swap UI Showcase" 
                          className="w-full h-auto object-contain cursor-pointer"
                          onClick={() => setSelectedImage("/Swap_UI_Showcase_New.png")}
                        />
                      </div>
                      <div className="space-y-4">
                        <p>Из нового – правый блок с кнопками:</p>
                        <ul className="space-y-4">
                          {[
                            "настройки – это изменение слиппэджа с возможностью ввести кастомное значение;",
                            "знак вопроса – пояснение, как работает наша (любая) свапалка, с указанием конкретных шагов;",
                            "и faucet – клейм XFI (нативной валюты сети). Там же объяснили, зачем XFI нужен, и как работает клейм."
                          ].map((item, i) => (
                            <li key={i} className="flex gap-4 text-lg text-gray-600 leading-relaxed">
                              <span className="text-black font-medium">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <p>
                        Встроенный Faucet закрывает критичную точку оттока: пользователь не уходит из продукта, чтобы найти XFI для газа, и быстрее проходит первый swap.
                      </p>

                      <div className="my-12 rounded-3xl overflow-hidden border border-gray-100 shadow-sm bg-white">
                        <img 
                          src="/Features_Showcase.png" 
                          alt="Features Showcase" 
                          className="w-full h-auto object-contain cursor-pointer"
                          onClick={() => setSelectedImage("/Features_Showcase.png")}
                        />
                      </div>

                      <p>После заполнения формы показываем пользователю информацию о будущем свапе – курс, price impact (предупреждаем, если он слишком высокий), network cost и т.д. Для advanced-пользователей добавили Route – он показывает, через какие токены и пулы пройдёт свап. Здесь есть возможность скопировать адрес пула или контракта токена + объяснение оптимизации и стоимости газа: "Best price route costs ~$6.97 in gas... considers split routes, multiple hops, and gas cost of each step." Это делает продукт прозрачным – мы точно видим, как он работает, откуда эти цифры и уверены в том, что произойдет дальше (вот бы в жизни так).</p>

                      <div className="my-12">
                        <div className="rounded-3xl overflow-hidden border border-gray-100 shadow-sm bg-white">
                          <img 
                            src="/Swap_States_Showcase.png" 
                            alt="Route и некоторые состояния формы свапа" 
                            className="w-full h-auto object-contain cursor-pointer"
                            onClick={() => setSelectedImage("/Swap_States_Showcase.png")}
                          />
                        </div>
                        <p className="text-sm text-gray-400 mt-4 text-center italic">Route и некоторые состояния формы свапа</p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <p className="font-medium text-black">Pools</p>
                      <p>Пулы я разделила на два блока:</p>
                      <ul className="space-y-4">
                        {[
                          "My positions — управление активными позициями и быстрые действия",
                          "и All pools — витрина для сравнения и выбора (TVL/APY/объёмы)."
                        ].map((item, i) => (
                          <li key={i} className="flex gap-4 text-lg text-gray-600 leading-relaxed">
                            <span className="text-black font-medium">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                      <p>Claim rewards осуществляется не с каждой позиции отдельно, а со всех сразу, чтобы упростить процесс.</p>

                      <div className="my-12">
                        <div className="rounded-3xl overflow-hidden border border-gray-100 shadow-sm bg-white">
                          <img 
                            src="/Pools_UI_Showcase.png" 
                            alt="Pools UI Showcase" 
                            className="w-full h-auto object-contain cursor-pointer"
                            onClick={() => setSelectedImage("/Pools_UI_Showcase.png")}
                          />
                        </div>
                      </div>

                      <div className="space-y-4">
                        <p className="font-medium text-black">Add/Remove liquidity</p>
                        <p>
                          Добавление ликвидности – это несколько шагов с подтверждениями в кошельке. Я добавила подсказки и степпер, чтобы было понятно, на каком этапе пользователь сейчас. Пока шаг выполняется – все кнопки и поля задизейблены, чтобы избежать ошибок.
                        </p>

                        <div className="my-12">
                          <div className="rounded-3xl overflow-hidden border border-gray-100 shadow-sm bg-white">
                            <img 
                              src="/Add_Liquidity_Showcase.png" 
                              alt="Add Liquidity Stepper and States" 
                              className="w-full h-auto object-contain cursor-pointer"
                              onClick={() => setSelectedImage("/Add_Liquidity_Showcase.png")}
                            />
                          </div>
                        </div>

                        <div className="my-12">
                          <div className="rounded-3xl overflow-hidden border border-gray-100 shadow-sm bg-white">
                            <img 
                              src="/Remove_Liquidity_Showcase.png" 
                              alt="Remove Liquidity Showcase" 
                              className="w-full h-auto object-contain cursor-pointer"
                              onClick={() => setSelectedImage("/Remove_Liquidity_Showcase.png")}
                            />
                          </div>
                          <p className="text-sm text-gray-400 mt-4 text-center italic">Remove liquidity выглядит уже проще, но увеличился инфо блок.</p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <p className="font-medium text-black">Token Sale: маркетинг без ощущения “впаривания”</p>
                      <p>
                        Token Sale должен не только работать технически, но и мотивировать. Я добавила Profit Estimator (калькулятор доходности) и видео-гайды для новичков, чтобы снизить барьера входа и нагрузку на саппорт.
                      </p>
                      <p className="italic">
                        “Снижение барьера входа: Profit Estimator + видеогайды для новичков.”
                      </p>
                    </div>

                    <div className="space-y-4">
                      <p className="font-medium text-black">Lock + Voting: самый сложный модуль</p>
                      <p>
                        Это был самый нетривиальный блок: мало референсов, высокая цена ошибки. Я разложила механику на понятные сущности, спроектировала сценарии голосования и оформила действие с понятными подсказками и расчетами влияния на APY.
                      </p>
                      <p className="italic">
                        “Голосование как продуктовый инструмент: показываем влияние на APY и стоимость транзакции.”
                      </p>
                    </div>

                    <div className="space-y-4">
                      <p className="font-medium text-black">Главная страница: “посадочная внутри продукта”</p>
                      <p>
                        Я спроектировала главную как навигационный хаб: быстро вводит в механику (swap/pools/rewards/token sale) и помогает выбрать следующий шаг без чтения документации.
                      </p>
                      <p className="italic">
                        “Main screen = short onboarding.”
                      </p>
                    </div>
                  </div>
                </section>
              </div>
            )}
          </div>
        </section>

        {/* Project Content */}
        <section className="px-6 lg:px-12 max-w-7xl mx-auto mb-20">
          {project.id === 5 && project.content && (
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
                  {project.content.process.steps.map((step: any, idx: number) => (
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
