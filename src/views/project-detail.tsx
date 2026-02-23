"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ArrowLeft, X, ChevronRight, ChevronLeft, Download, Zap, ZoomIn, ZoomOut } from "lucide-react";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { translations, projectTranslations, type Language } from "@/lib/translations";

import glacisDappImg from "@/assets/GL_dApp_1770754812223.webp";
import xSwapImg from "@/assets/xswap_main.webp";
import zooGeneral from "@/assets/zoodao_general.webp";
import zooGeneralDark from "@/assets/zoodao_general_dark.webp";
import zooSchemeV2 from "@/assets/zoodao_scheme_v2.webp";
import zooSchemeNoPic from "@/assets/zoodao_scheme_nopic.webp";
import zeroDeltaImg from "@/assets/zero_delta_main.webp";

import glacisScheme1 from "@/assets/glacis_scheme_1.webp";
import glacisScheme2 from "@/assets/glacis_scheme_2.webp";
import glacisMainPage from "@/assets/glacis_main_page_v2.webp";
import glacisTransactionDetails from "@/assets/glacis_transaction_details.webp";
import glacisMobileDetails from "@/assets/glacis_mobile_details_v2.png";
import glacisRetryData from "@/assets/glacis_retry_data.webp";
import glacisAnalytics from "@/assets/glacis_analytics.webp";

import maatSlide1 from "@/assets/maat_slide_1.webp";
import maatSlide2 from "@/assets/maat_slide_2.webp";
import maatSlide3 from "@/assets/maat_slide_3.webp";
import maatSlide4 from "@/assets/maat_slide_4.webp";
import maatSlide5 from "@/assets/maat_slide_5.webp";
import maatSlide6 from "@/assets/maat_slide_6.webp";
import maatSlide7 from "@/assets/maat_slide_7.webp";
import maatSlide8 from "@/assets/maat_slide_8.webp";
import maatSlide9 from "@/assets/maat_slide_9.webp";
import maatSlide10 from "@/assets/maat_slide_10.webp";
import maatSlide11 from "@/assets/maat_slide_11.webp";
import maatSlide12 from "@/assets/maat_slide_12.webp";
import maatSlide13 from "@/assets/maat_slide_13.webp";
import maatSlide14 from "@/assets/maat_slide_14.webp";

import moonbeamImg from "@/assets/moonbeam_cover.webp";
import cryptovecheImg from "@/assets/cryptoveche_cover.webp";
import uxResearchImg from "@/assets/ux_research_cover.webp";
import pholendImg from "@/assets/pholend_cover.webp";
import dickbuttsImg from "@/assets/dickbutts_cover_v2.webp";
import zkDickbuttsImg from "@/assets/zkDickButts_1.webp";
import dickbuttsMintImg from "@/assets/DickButts - Mint.jpg";
import skiziCoverImg from "@/assets/skizi_cover_new.webp";
import skiziSlide1 from "@/assets/skizi_slide_1.webp";
import skiziSlide2 from "@/assets/skizi_slide_2.webp";
import skiziSlide3 from "@/assets/skizi_slide_3.webp";
import skiziSlide4 from "@/assets/skizi_slide_4.webp";
import skiziSlide5 from "@/assets/skizi_slide_5.webp";

import twoGoCoverImg from "@/assets/2go_cover.webp";
import zoodaoCoverImg from "@/assets/zoodao_cover_v3.webp";
import maatCoverImg from "@/assets/maat_pd_cover_v3.webp";

const projectImages: Record<number, string | null> = {
  1: glacisDappImg.src,
  2: xSwapImg.src,
  3: skiziCoverImg.src,
  4: twoGoCoverImg.src,
  5: moonbeamImg.src,
  6: cryptovecheImg.src,
  7: uxResearchImg.src,
  8: pholendImg.src,
  9: dickbuttsImg.src,
  10: null,
  12: zoodaoCoverImg.src,
  13: maatCoverImg.src,
  14: zeroDeltaImg.src
};

type LightboxItem = {
  src: string;
  alt: string;
};

const zooSlides: LightboxItem[] = [
  { src: zooSchemeNoPic.src, alt: "ZooDAO System Scheme Overview" },
  { src: zooSchemeV2.src, alt: "ZooDAO System Scheme V2" },
  { src: zooGeneralDark.src, alt: "ZooDAO Concept Dark" },
  { src: zooGeneral.src, alt: "ZooDAO Concept Light" }
];

const maatSlides: LightboxItem[] = [
  { src: maatSlide1.src, alt: "MAAT Presentation Slide 1" },
  { src: maatSlide2.src, alt: "MAAT Presentation Slide 2" },
  { src: maatSlide3.src, alt: "MAAT Presentation Slide 3" },
  { src: maatSlide4.src, alt: "MAAT Presentation Slide 4" },
  { src: maatSlide5.src, alt: "MAAT Presentation Slide 5" },
  { src: maatSlide6.src, alt: "MAAT Presentation Slide 6" },
  { src: maatSlide7.src, alt: "MAAT Presentation Slide 7" },
  { src: maatSlide8.src, alt: "MAAT Presentation Slide 8" },
  { src: maatSlide9.src, alt: "MAAT Presentation Slide 9" },
  { src: maatSlide10.src, alt: "MAAT Presentation Slide 10" },
  { src: maatSlide11.src, alt: "MAAT Presentation Slide 11" },
  { src: maatSlide12.src, alt: "MAAT Presentation Slide 12" },
  { src: maatSlide13.src, alt: "MAAT Presentation Slide 13" },
  { src: maatSlide14.src, alt: "MAAT Presentation Slide 14" }
];

const skiziSlides: LightboxItem[] = [
  { src: skiziSlide1.src, alt: "SKIZI Slide 1" },
  { src: skiziSlide2.src, alt: "SKIZI Slide 2" },
  { src: skiziSlide3.src, alt: "SKIZI Slide 3" },
  { src: skiziSlide4.src, alt: "SKIZI Slide 4" },
  { src: skiziSlide5.src, alt: "SKIZI Slide 5" }
];

const glacisSchemeSlides: LightboxItem[] = [
  { src: glacisScheme1.src, alt: "Glacis Scheme 1" },
  { src: glacisScheme2.src, alt: "Glacis Scheme 2" }
];

const glacisLightSlides: LightboxItem[] = [
  { src: "/glacis_light_main.webp", alt: "Main" },
  { src: "/glacis_light_tx_details.webp", alt: "Transaction Details" },
  { src: "/glacis_light_retry.webp", alt: "Retry" },
  { src: "/glacis_light_analytics.webp", alt: "Analytics" },
  { src: "/glacis_light_select_chain.webp", alt: "Select Chain" },
  { src: "/glacis_light_airlift.webp", alt: "Airlift" },
  { src: "/glacis_light_404.webp", alt: "404" }
];

const xswapFlowSlides: LightboxItem[] = [
  { src: "/Swap_1770223795857.webp", alt: "User Flow Swap" },
  { src: "/Provide_Liquidity_1770223795856.webp", alt: "User Flow Pools Add" },
  { src: "/Remove_Liquidity_1770223795857.webp", alt: "User Flow Pools Remove" },
  { src: "/Token_sale_1770223795858.webp", alt: "User Flow Token Sale" }
];

const xswapDraftSlides: LightboxItem[] = [
  { src: "/Staking_Draft_Updated.webp", alt: "Draft Staking" },
  { src: "/TokenSale_Draft.webp", alt: "Draft Token Sale" },
  { src: "/Relations_Draft.webp", alt: "Draft Relations" }
];

const xswapConclusionSlides: LightboxItem[] = [
  { src: "/Viet_Token_Sale.webp", alt: "Vietnamese Token Sale" },
  { src: "/Viet_Pools.webp", alt: "Vietnamese Pools" },
  { src: "/Viet_Route.webp", alt: "Vietnamese Route" },
  { src: "/UI_Library_1.webp", alt: "UI Library 1" },
  { src: "/UI_Library_2.webp", alt: "UI Library 2" }
];

export default function ProjectDetail() {
  const params = useParams<{ id: string }>();
  const pathname = usePathname();
  const rawId = Array.isArray(params?.id) ? params.id[0] : params?.id;
  const id = rawId ? parseInt(rawId, 10) : 1;
  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window === "undefined") return "en";
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
  const [lightboxItems, setLightboxItems] = useState<LightboxItem[]>([]);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [lightboxZoom, setLightboxZoom] = useState(1);
  const [lightboxPan, setLightboxPan] = useState({ x: 0, y: 0 });
  const [isPanningImage, setIsPanningImage] = useState(false);
  const [panStart, setPanStart] = useState({ x: 0, y: 0 });
  const [maatInlineIndex, setMaatInlineIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);

  const t = translations[language];
  // Filter out hidden projects (5: Moonbeam, 10: MAAT)
  const projects = projectTranslations[language].filter(p => ![5, 10].includes(p.id));
  const projectIndex = projects.findIndex(p => p.id === id);
  // If current project is hidden/not found, default to first available
  const project = projectIndex !== -1 ? projects[projectIndex] : projectTranslations[language].find(p => p.id === id) || projects[0];
  
  // Calculate next project based on filtered list
  const nextProject = projects[(projectIndex + 1) % projects.length];

  const scrollContainerRef1 = useRef<HTMLDivElement>(null);
  const scrollContainerRef2 = useRef<HTMLDivElement>(null);
  const scrollContainerRef3 = useRef<HTMLDivElement>(null);
  const scrollContainerRef4 = useRef<HTMLDivElement>(null);
  const [isDragging1, setIsDragging1] = useState(false);
  const [isDragging2, setIsDragging2] = useState(false);
  const [isDragging3, setIsDragging3] = useState(false);
  const [isDragging4, setIsDragging4] = useState(false);
  const [hasMoved1, setHasMoved1] = useState(false);
  const [hasMoved2, setHasMoved2] = useState(false);
  const [hasMoved3, setHasMoved3] = useState(false);
  const [hasMoved4, setHasMoved4] = useState(false);
  const [startX1, setStartX1] = useState(0);
  const [startX2, setStartX2] = useState(0);
  const [startX3, setStartX3] = useState(0);
  const [startX4, setStartX4] = useState(0);
  const [scrollLeft1, setScrollLeft1] = useState(0);
  const [scrollLeft2, setScrollLeft2] = useState(0);
  const [scrollLeft3, setScrollLeft3] = useState(0);
  const [scrollLeft4, setScrollLeft4] = useState(0);

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

  const handleMouseDown3 = (e: React.MouseEvent) => {
    if (!scrollContainerRef3.current) return;
    setIsDragging3(true);
    setHasMoved3(false);
    setStartX3(e.pageX - scrollContainerRef3.current.offsetLeft);
    setScrollLeft3(scrollContainerRef3.current.scrollLeft);
  };

  const handleMouseDown4 = (e: React.MouseEvent) => {
    if (!scrollContainerRef4.current) return;
    setIsDragging4(true);
    setHasMoved4(false);
    setStartX4(e.pageX - scrollContainerRef4.current.offsetLeft);
    setScrollLeft4(scrollContainerRef4.current.scrollLeft);
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

  const handleMouseMove3 = (e: React.MouseEvent) => {
    if (!isDragging3 || !scrollContainerRef3.current) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef3.current.offsetLeft;
    const walk = (x - startX3) * 2;
    if (Math.abs(walk) > 5) setHasMoved3(true);
    scrollContainerRef3.current.scrollLeft = scrollLeft3 - walk;
  };

  const handleMouseMove4 = (e: React.MouseEvent) => {
    if (!isDragging4 || !scrollContainerRef4.current) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef4.current.offsetLeft;
    const walk = (x - startX4) * 2;
    if (Math.abs(walk) > 5) setHasMoved4(true);
    scrollContainerRef4.current.scrollLeft = scrollLeft4 - walk;
  };

  const contactData = {
    telegramUrl: "https://t.me/Ann_uskova",
    linkedinUrl: "https://www.linkedin.com/in/anna-uskova-4b1169268/",
    instagramUrl: "https://instagram.com/ann_uskova",
    emailUrl: "mailto:anyauskowa@yandex.ru"
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    setMaatInlineIndex(0);
  }, [id]);

  const getBackLink = () => {
    if ([11, 12, 13].includes(id)) return "/projects?tab=strategy";
    if ([7].includes(id)) return "/projects?tab=research";
    return "/projects?tab=uxui";
  };

  const isLightboxOpen = lightboxItems.length > 0;
  const currentLightboxItem = lightboxItems[lightboxIndex];

  const resetLightboxView = () => {
    setLightboxZoom(1);
    setLightboxPan({ x: 0, y: 0 });
    setIsPanningImage(false);
  };

  const openLightbox = (items: LightboxItem[], index = 0) => {
    if (!items.length) return;
    setLightboxItems(items);
    setLightboxIndex(Math.min(Math.max(index, 0), items.length - 1));
    resetLightboxView();
  };

  const closeLightbox = () => {
    setLightboxItems([]);
    setLightboxIndex(0);
    resetLightboxView();
  };

  const goToLightboxIndex = (index: number) => {
    if (!lightboxItems.length) return;
    const nextIndex = (index + lightboxItems.length) % lightboxItems.length;
    setLightboxIndex(nextIndex);
    resetLightboxView();
  };

  const zoomLightbox = (direction: 1 | -1) => {
    setLightboxZoom((prev) => {
      const next = Math.min(3, Math.max(1, Number((prev + direction * 0.25).toFixed(2))));
      if (next === 1) setLightboxPan({ x: 0, y: 0 });
      return next;
    });
  };

  const openSingleImage = (src: string, alt: string) => {
    openLightbox([{ src, alt }], 0);
  };

  useEffect(() => {
    if (!isLightboxOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeLightbox();
      if (event.key === "ArrowRight") goToLightboxIndex(lightboxIndex + 1);
      if (event.key === "ArrowLeft") goToLightboxIndex(lightboxIndex - 1);
      if (event.key === "+" || event.key === "=") zoomLightbox(1);
      if (event.key === "-" || event.key === "_") zoomLightbox(-1);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isLightboxOpen, lightboxIndex, lightboxItems.length]);

  return (
    <div className="min-h-screen bg-white">
      <AnimatePresence>
        {isLightboxOpen && currentLightboxItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-black/65 flex items-center justify-center overflow-hidden p-4 md:p-8"
            onClick={closeLightbox}
            onTouchStart={(event) => {
              if (lightboxZoom > 1) return;
              touchStartX.current = event.touches[0]?.clientX ?? null;
            }}
            onTouchEnd={(event) => {
              if (lightboxZoom > 1 || touchStartX.current === null) return;
              const endX = event.changedTouches[0]?.clientX ?? touchStartX.current;
              const deltaX = endX - touchStartX.current;
              if (Math.abs(deltaX) > 50) {
                goToLightboxIndex(lightboxIndex + (deltaX < 0 ? 1 : -1));
              }
              touchStartX.current = null;
            }}
          >
            <div className="absolute top-5 right-5 z-[210] flex items-center gap-2">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  zoomLightbox(-1);
                }}
                className="w-10 h-10 rounded-full bg-black/65 hover:bg-black/80 border border-white/40 text-white shadow-lg backdrop-blur-md flex items-center justify-center transition-colors"
                aria-label="Zoom out"
              >
                <ZoomOut className="w-5 h-5" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  zoomLightbox(1);
                }}
                className="w-10 h-10 rounded-full bg-black/65 hover:bg-black/80 border border-white/40 text-white shadow-lg backdrop-blur-md flex items-center justify-center transition-colors"
                aria-label="Zoom in"
              >
                <ZoomIn className="w-5 h-5" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  closeLightbox();
                }}
                className="w-10 h-10 rounded-full bg-black/65 hover:bg-black/80 border border-white/40 text-white shadow-lg backdrop-blur-md flex items-center justify-center transition-colors"
                aria-label="Close lightbox"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className={`relative flex items-center justify-center w-full h-full ${lightboxZoom > 1 ? "cursor-grab active:cursor-grabbing" : "cursor-auto"}`}
              onClick={(e) => {
                e.stopPropagation();
              }}
              onMouseDown={(event) => {
                if (lightboxZoom <= 1) return;
                event.stopPropagation();
                setIsPanningImage(true);
                setPanStart({ x: event.clientX - lightboxPan.x, y: event.clientY - lightboxPan.y });
              }}
              onMouseMove={(event) => {
                if (!isPanningImage || lightboxZoom <= 1) return;
                setLightboxPan({
                  x: event.clientX - panStart.x,
                  y: event.clientY - panStart.y
                });
              }}
              onMouseUp={() => setIsPanningImage(false)}
              onMouseLeave={() => setIsPanningImage(false)}
              onWheel={(event) => {
                event.preventDefault();
                event.stopPropagation();
                zoomLightbox(event.deltaY < 0 ? 1 : -1);
              }}
            >
              <motion.img
                src={currentLightboxItem.src}
                alt={currentLightboxItem.alt}
                draggable={false}
                animate={{ 
                  scale: lightboxZoom,
                  x: lightboxZoom > 1 ? lightboxPan.x : 0,
                  y: lightboxZoom > 1 ? lightboxPan.y : 0
                }}
                transition={{ 
                  scale: { type: "spring", damping: 24, stiffness: 210 },
                  x: { type: "tween", duration: 0 },
                  y: { type: "tween", duration: 0 }
                }}
                className="rounded-xl shadow-2xl pointer-events-none max-w-[92vw] max-h-[88vh] object-contain"
              />
            </motion.div>

            {lightboxItems.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    goToLightboxIndex(lightboxIndex - 1);
                  }}
                  className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/65 hover:bg-black/80 border border-white/40 text-white shadow-lg backdrop-blur-md flex items-center justify-center transition-colors"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    goToLightboxIndex(lightboxIndex + 1);
                  }}
                  className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/65 hover:bg-black/80 border border-white/40 text-white shadow-lg backdrop-blur-md flex items-center justify-center transition-colors"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </>
            )}

            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 text-white text-sm bg-black/70 border border-white/30 shadow-lg px-3 py-1 rounded-full">
              {lightboxIndex + 1} / {lightboxItems.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-12">
              <Link 
                href="/" 
                className={`text-[15px] font-medium transition-colors ${pathname === "/" ? "text-black" : "text-gray-400 hover:text-black"}`}
              >
                {t.nav.home}
              </Link>
              <Link 
                href="/projects" 
                className={`text-[15px] font-medium transition-colors ${pathname.startsWith("/projects") ? "text-black" : "text-gray-400 hover:text-black"}`}
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
                <a href={contactData.emailUrl} className="flex items-center justify-between p-6 border border-gray-200 rounded-[18px] hover:bg-gray-50 transition-colors group" data-testid="link-email">
                  <span className="text-lg">{t.contact.email}</span>
                  <span className="text-gray-500 group-hover:text-black transition-colors flex items-center gap-2">
                    anyauskowa@yandex.ru <ArrowUpRight className="w-4 h-4" />
                  </span>
                </a>
                <a href={contactData.linkedinUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-6 border border-gray-200 rounded-[18px] hover:bg-gray-50 transition-colors group" data-testid="link-linkedin">
                  <span className="text-lg">{t.contact.linkedin}</span>
                  <span className="text-gray-500 group-hover:text-black transition-colors flex items-center gap-2">
                    Anna Uskova <ArrowUpRight className="w-4 h-4" />
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
          <Link href={getBackLink()} className="inline-flex items-center gap-2 text-gray-400 hover:text-black transition-colors mb-8 group">
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

              {(project.id === 2 || project.id === 1) && (
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
                          {project.id === 1 
                            ? "Lead Product Designer в Glacis Labs: собрала визуальную систему бренда и спроектировала dApp для трекинга кроссчейн-транзакций (до 5 бриджей) с прозрачной моделью статусов, ретраями и аналитикой. Масштабировала продукт с V1 до V2 после запуска AirLift и расширения аналитики."
                            : "xSwap — AMM dApp на CrossFi. За 1 месяц собрала UX/UI для Swap, Pools, Token Sale и Lock/Voting, координировала фронт, работала в связке с solidity. Сделала интерфейс, который не пугает: slippage и прозрачный Route в swap, понятные liquidity-пулы с multi-step подсказками, Token Sale с Profit Estimator и видеогайдами, плюс сложный Lock/Voting — с продуманными корнер-кейсами и состояниями транзакций."
                          }
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )}
            </div>
            
            <p className="md:text-xl text-gray-500 max-w-2xl text-[18px] leading-relaxed mb-6">
              {project.id === 2 ? (
                language === "ru" 
                  ? "xSwap – AMM на сети CrossFi. Здесь есть swap, liquidity pools, staking, token sale и veToken-механика с голосованием за распределение инсентивов. Моя задача – собрать UX/UI так, чтобы новички не спотыкались о \"как свапать на новой сети\", а опытные пользователи могли заглянуть в Route и удивиться, как система здорово его оптимизирует."
                  : "xSwap is an AMM on the CrossFi network. It includes swap, liquidity pools, staking, token sale, and a veToken voting mechanism that controls how incentives are distributed. My goal was to design a product UX/UI where beginners don’t get stuck on “how do I even swap on a new network?”, while advanced users can open the Route view and see (and trust) how well the system optimizes it."
              ) : project.id === 12 ? (
                language === "ru"
                  ? "ZooDAO – платформа под управлением сообщества, которая позволяет получать пассивный доход от протоколов за счёт геймификации. DeFi протоколы \"сражаются\" друг с другом на арене, а пользователи вносят депозит и голосуют, победители получают инсентивы. Звучит просто, но под капотом механики zAggregator, zBribe и boost, которые проще объяснить наглядно."
                  : "ZooDAO is a community-governed platform that enables passive income from protocols through gamification. DeFi protocols “battle” in the arena, while users deposit and vote, with winners receiving incentives. It sounds simple, but under the hood are zAggregator, zBribe, and boost mechanics that are easier to explain visually."
              ) : project.id === 13 ? (
                language === "ru"
                  ? <>Презентация продукта MAAT для инвесторов.<br/>Некоторые данные заблюрены – это специально.</>
                  : <>Investor presentation deck for the MAAT protocol.<br/>Some data is blurred intentionally.</>
              ) : project.id === 3 ? (
                language === "ru"
                  ? "СКИЗИ (Система координации использования зелёных инструментов) – это система учёта зелёных сертификатов и прав. В ней можно передавать права между владельцами и «погашать» их – отмечать как использованные, когда компания хочет подтвердить потребление зелёной энергии."
                  : project.description
              ) : project.id === 1 ? (
                language === "ru"
                  ? "Glacis labs – американский стартап, который предлагает решения разработчикам децентрализованных приложений. Они создали экосистему DeFi-продуктов, а я отвечала за все ее визуальные составляющие."
                  : project.description
              ) : (
                project.description
              )}
            </p>

            {(project.id === 12 || project.id === 13) && (
              <div className="w-full space-y-8 mb-20">
                {project.id === 12 ? (
                  <>
                    <div className="space-y-4">
                      <div className="rounded-[32px] overflow-hidden border border-gray-100 shadow-sm bg-white">
                        <img 
                          src={zooSchemeNoPic.src} 
                          alt="ZooDAO System Scheme Overview" 
                          className="w-full h-auto object-contain cursor-zoom-in"
                          onClick={() => openLightbox(zooSlides, 0)}
                        />
                      </div>
                      <p className="text-sm text-gray-400 text-center italic">
                        {language === "ru" 
                          ? "Та самая схема, из которой вы поймете, как работают все модули приложения"
                          : "The very scheme that helps you understand how all application modules work"}
                      </p>
                    </div>
                    <div className="space-y-4">
                      <div className="rounded-[32px] overflow-hidden border border-gray-100 shadow-sm bg-white">
                        <img 
                          src={zooSchemeV2.src} 
                          alt="ZooDAO System Scheme V2" 
                          className="w-full h-auto object-contain cursor-zoom-in"
                          onClick={() => openLightbox(zooSlides, 1)}
                        />
                      </div>
                      <p className="text-sm text-gray-400 text-center italic">
                        {language === "ru" 
                          ? "Та же схема, но с картинками"
                          : "The same scheme, but with images"}
                      </p>
                    </div>
                    <div className="space-y-4">
                      <div className="rounded-[32px] overflow-hidden border border-gray-100 shadow-sm bg-white">
                        <img 
                          src={zooGeneralDark.src} 
                          alt="ZooDAO Concept Dark" 
                          className="w-full h-auto object-contain cursor-zoom-in"
                          onClick={() => openLightbox(zooSlides, 2)}
                        />
                      </div>
                      <p className="text-sm text-gray-400 text-center italic">
                        {language === "ru" 
                          ? "Менее подробная схема в темной теме"
                          : "A less detailed diagram in dark theme"}
                      </p>
                    </div>
                    <div className="space-y-4">
                      <div className="rounded-[32px] overflow-hidden border border-gray-100 shadow-sm bg-white">
                        <img 
                          src={zooGeneral.src} 
                          alt="ZooDAO Concept Light" 
                          className="w-full h-auto object-contain cursor-zoom-in"
                          onClick={() => openLightbox(zooSlides, 3)}
                        />
                      </div>
                      <p className="text-sm text-gray-400 text-center italic">
                        {language === "ru" 
                          ? "... и в светлой теме"
                          : "... and in light theme"}
                      </p>
                    </div>
                  </>
                ) : project.id === 13 ? (
                  <div className="space-y-4 max-w-[80%]">
                    <div className="relative rounded-[20px] overflow-hidden border border-gray-100 shadow-sm bg-gray-50">
                      <img
                        src={maatSlides[maatInlineIndex].src}
                        alt={maatSlides[maatInlineIndex].alt}
                        className="w-full h-auto object-contain cursor-zoom-in"
                        onClick={() => openLightbox(maatSlides, maatInlineIndex)}
                      />
                      <button
                        onClick={() => setMaatInlineIndex((prev) => (prev - 1 + maatSlides.length) % maatSlides.length)}
                        className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/65 hover:bg-black/80 text-white flex items-center justify-center transition-colors"
                        aria-label="Previous slide"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>
                      <button
                        onClick={() => setMaatInlineIndex((prev) => (prev + 1) % maatSlides.length)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/65 hover:bg-black/80 text-white flex items-center justify-center transition-colors"
                        aria-label="Next slide"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    </div>
                    <div className="flex items-center justify-center gap-1.5">
                      {maatSlides.map((slide, idx) => (
                        <button
                          key={slide.src}
                          onClick={() => setMaatInlineIndex(idx)}
                          className={`h-1.5 rounded-full transition-all ${idx === maatInlineIndex ? "w-6 bg-black" : "w-2 bg-gray-300 hover:bg-gray-400"}`}
                          aria-label={`Go to slide ${idx + 1}`}
                        />
                      ))}
                    </div>
                  </div>
                ) : null}
              </div>
            )}
            
            {![7, 12, 13].includes(project.id) && projectImages[project.id] && (
              <div className="w-full mb-12 max-w-2xl">
                <div className="rounded-[24px] overflow-hidden border border-gray-100 shadow-sm bg-white">
                  <img 
                    src={projectImages[project.id] || ""} 
                    alt={`${project.title} Cover`} 
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            )}

            {project.id === 3 && language === "ru" && (
              <div className="max-w-[calc(56rem-80px)] mb-16">
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  Я была единственным дизайнером на проекте, вела его с нуля до запуска (1,5 года). Много взаимодействовала с бизнесом и разработкой, много разговаривала с заказчиками (на тот момент – Совет рынка).
                </p>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  Разработка проекта началась с тендера – за три дня нужно было задизайнить несколько экранов системы и описать, как она будет работать. Для тендера я сделала такие макеты (и мы выиграли 😎):
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
                    {skiziSlides.map((img, idx) => (
                      <div key={img.src} className="flex-shrink-0 w-[85vw] md:w-[900px]">
                        <div
                          onClick={() => !hasMoved2 && openLightbox(skiziSlides, idx)}
                          className={`rounded-3xl overflow-hidden border border-gray-100 shadow-sm bg-white ${isDragging2 ? 'cursor-grabbing' : 'cursor-grab'}`}
                        >
                          <img
                            src={img.src}
                            alt={img.alt}
                            className="w-full aspect-video object-cover object-top pointer-events-none"
                          />
                        </div>
                      </div>
                    ))}
                    <div className="flex-shrink-0 w-[calc((100vw-100%)/2)]" />
                  </div>
                </div>
              </div>
            )}

            {project.id === 9 && language === "ru" && (
              <div className="max-w-[calc(56rem-80px)] mb-16">
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  За пару дней я собрала лендинг и страницу покупки, а дизайнер NFTшек дополнил мой макет пиксельным взывом на фон. Моей целью было понятно рассказать о продукте, подкрепить рассказ социальными доказательствами и довести пользователя до покупки. На странице минт – развести два сценария приобретения, дать все вводные для покупки и понятную кнопку действия.
                </p>

                <div className="mt-8 rounded-3xl overflow-hidden border border-gray-100 shadow-sm bg-white max-w-[750px]">
                  <img
                    src={zkDickbuttsImg.src}
                    alt="zkDickButts landing page"
                    className="w-full h-auto object-contain cursor-pointer"
                    onClick={() => openSingleImage(zkDickbuttsImg.src, "zkDickButts landing page")}
                  />
                </div>

                <div className="mt-6 rounded-3xl overflow-hidden border border-gray-100 shadow-sm bg-white max-w-[750px]">
                  <img
                    src={dickbuttsMintImg.src}
                    alt="DickButts mint page"
                    className="w-full h-auto object-contain cursor-pointer"
                    onClick={() => openSingleImage(dickbuttsMintImg.src, "DickButts mint page")}
                  />
                </div>
              </div>
            )}

            {project.id === 1 && (
              <div className="max-w-[calc(56rem-80px)] mb-20">
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  {language === "ru" 
                    ? "Моя роль на проекте – Lead Product Designer. Я руководила международной командой из junior-дизайнера, аутсорс графических и motion-дизайнеров и сама много делала руками."
                    : "My role on the project was Lead Product Designer. I managed an international team consisting of a junior designer and outsourced graphic and motion designers, and of course, I did a lot of hands-on work myself."}
                </p>

                <h2 className="text-2xl font-medium mb-6">
                  {language === "ru" ? "Задачи и контекст" : "Tasks and Context"}
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-4">
                  {language === "ru" ? "Когда я пришла в проект, компании нужны были:" : "When I joined the project, the company needed:"}
                </p>
                <ul className="space-y-2 mb-8">
                  {(language === "ru" ? [
                    "фирменный стиль",
                    "dApp",
                    "сайт",
                    "презентации для инвесторов",
                    "медиа-материалы."
                  ] : [
                    "brand identity",
                    "dApp",
                    "website",
                    "investor presentations",
                    "media materials."
                  ]).map((item, i) => (
                    <li key={i} className="flex gap-4 text-lg text-gray-600 leading-relaxed">
                      <span className="text-black font-medium">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-lg text-gray-600 leading-relaxed mb-12">
                   {language === "ru" ? "Медиа-материалы я отдала на аутсорс (и итерационно контролировала), за остальное взялась сама." : "I outsourced the media materials (and managed the process iteratively), and took on the rest myself."}
                </p>

                <h2 className="text-2xl font-medium mb-6">dApp</h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  {language === "ru" ? "После определения стилевого направления я начала разрабатывать dApp. Его основная функция – отслеживание статуса транзакции онлайн. Звучит как дефолтный Scan app, но меня попросили отразить статусы графически, а сложность в том, что транзакция может идти через пять бриджей. Выглядит это так (схема от разработчиков):" : "After defining the style direction, I started developing the dApp. Its main function is tracking transaction status online. It sounds like a default Scan app, but I was asked to visualize statuses graphically, and the complexity is that a transaction can go through five bridges. It looks like this (schema from developers):"}
                </p>

                <div className="relative -mr-[calc((100vw-100%)/2)] w-[calc(100%+((100vw-100%)/2))] mb-12">
                  <div 
                    ref={scrollContainerRef1}
                    onMouseDown={handleMouseDown1}
                    onMouseLeave={() => setIsDragging1(false)}
                    onMouseUp={() => setIsDragging1(false)}
                    onMouseMove={handleMouseMove1}
                    className={`flex overflow-x-auto pb-4 gap-6 no-scrollbar ${isDragging1 ? 'cursor-grabbing select-none' : 'cursor-grab'}`}
                  >
                    {glacisSchemeSlides.map((img, idx) => (
                      <div key={idx} className="flex-shrink-0 w-[85vw] md:w-[600px]">
                        <div 
                          onClick={() => !hasMoved1 && openLightbox(glacisSchemeSlides, idx)}
                          className={`rounded-3xl overflow-hidden border border-gray-100 shadow-sm bg-white ${isDragging1 ? 'cursor-grabbing' : 'cursor-grab'}`}
                        >
                          <img 
                            src={img.src} 
                            alt={img.alt} 
                            className="w-full aspect-video object-cover object-top pointer-events-none"
                          />
                        </div>
                      </div>
                    ))}
                    {/* Spacer to allow scrolling past the last item to the screen edge */}
                    <div className="flex-shrink-0 w-[calc((100vw-100%)/2)]" />
                  </div>
                </div>
                
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  {language === "ru" ? "Еще в приложении должен быть блок аналитики, которая бы отражала общее количество транзакций за период, стоимость газа, скорость транзакции, наиболее популярные Chain Paths и т.д. Не забудем и про расширенный блок фильтрации, чтобы пользователь мог максимально кастомизировать графики." : "The app also needed an analytics block reflecting the total number of transactions over a period, gas cost, transaction speed, most popular Chain Paths, etc. And let's not forget the advanced filtering block so the user can fully customize the charts."}
                </p>
                 <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  {language === "ru" ? "Аудитория приложения – разработчики (85%) и пользователи web3 продуктов (15%), преимущественно западная. Высокая плотность данных приветствуется, а скорость диагностики (быстро понять, почему транзакция легла) – один из приоритетов." : "The app's audience is developers (85%) and web3 product users (15%), primarily Western. High data density is welcomed, and diagnostic speed (quickly understanding why a transaction failed) is a priority."}
                </p>
                 <p className="text-lg text-gray-600 leading-relaxed mb-12">
                  {language === "ru" ? "После разработки дизайна V1 джуниор-дизайнер ушел, а вводные усложнились: у Glacis Labs появился второй продукт, AirLift, который расширял раздел аналитики и вводил еще одну переменную для транзакций. Итак, V2:" : "After developing the V1 design, the junior designer left, and the requirements became more complex: Glacis Labs launched a second product, AirLift, which expanded the analytics section and introduced another variable for transactions. So, V2:"}
                </p>

                <h2 className="text-2xl font-medium mb-6">{language === "ru" ? "Главная страница" : "Main Page"}</h2>

                <div className="mt-6 mb-12 rounded-3xl overflow-hidden border border-gray-100 shadow-sm bg-white">
                  <img 
                    src={glacisMainPage.src}  
                    alt="Glacis Main Page" 
                    className="w-full h-auto object-contain cursor-pointer"
                    onClick={() => openSingleImage(glacisMainPage.src, "Glacis Main Page")}
                  />
                </div>

                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                   {language === "ru" ? "Наверху – мини-статистика по всему dApp, которая дает новому пользователю представление о масштабах экосистемы и количестве проходящих через нее транзакций, а пользователю постоянному – возможность отслеживать изменения («ого, было 10 сетей, а сейчас уже 21, как быстро они растут»)." : "At the top is mini-statistics for the entire dApp, giving new users an idea of the ecosystem's scale and transaction volume, and allowing regular users to track changes (“wow, there were 10 networks, now 21, they grow so fast”)."}
                </p>
                <p className="text-lg text-gray-600 leading-relaxed mb-12">
                   {language === "ru" ? "Далее – список последних транзакций в табличном представлении – довольно привычно для аудитории и типично для сканеров. Поисковая строка для быстрой проверки, фильтры – если ищу закономерности, сортировка по времени. Изначально делили транзакции по продуктам (вкладки Glacis core и AirLift), но после тестирования объединили их в одну таблицу – убрали лишний шаг, оставив возможность фильтрации по продукту." : "Next is the list of recent transactions with search and filtering, and sorting added to the “Time” column. We can also switch tabs to choose the product – Glacis Core or Airlift (it works with tokens, but that's a detail)."}
                </p>

                <h2 className="text-2xl font-medium mb-6">{language === "ru" ? "Детали транзакции" : "Transaction Details"}</h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                   {language === "ru" ? "По нажатии на строку таблицы мы проваливаемся в детали транзакции. Под заголовок я вынесла время транзакции, статус и продукт. Далее – все что может быть полезно: Message ID, From/To, Source / Destination и т.д. Везде, где можно и нужно, кнопка копирования. Ниже – подробное отображение статуса транзакции. В данном примере она идет через два бриджа – Wormhole и LayerZero и у каждого свой статус. Пользователь видит, что через Wormhole транзакция уже прошла, а через LayerZero еще нет, но уже почти. Также он видит альтернативные пути, по которым могла пойти транзакция." : "Clicking a table row takes us to transaction details. Under the header, I placed transaction time, status, and product. Then – everything useful: Message ID, From/To, Source / Destination, etc. Copy buttons everywhere needed. Below is the detailed transaction status. In this example, it goes through two bridges – Wormhole and LayerZero, each with its status. The user sees Wormhole is done, LayerZero is pending. They also see alternative paths the transaction could have taken."}
                </p>

                <div className="my-12 rounded-3xl overflow-hidden border border-gray-100 shadow-sm bg-white">
                  <img 
                    src={glacisTransactionDetails.src} 
                    alt="Glacis Transaction Details" 
                    className="w-full h-auto object-contain cursor-pointer"
                    onClick={() => openSingleImage(glacisTransactionDetails.src, "Glacis Transaction Details")}
                  />
                </div>

                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                   {language === "ru" ? "Для мобильной версии этот блок сделала более компактным, но с возможностью развернуть, перевернув экран:" : "For mobile, I made this block more compact, but expandable by rotating the screen:"}
                </p>

                <div className="my-12 rounded-3xl overflow-hidden border border-gray-100 shadow-sm bg-white">
                  <img 
                    src={glacisMobileDetails.src} 
                    alt="Glacis Mobile Details" 
                    className="w-full h-auto object-contain cursor-pointer"
                    onClick={() => openSingleImage(glacisMobileDetails.src, "Glacis Mobile Details")}
                  />
                </div>

                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                   {language === "ru" ? "В случае ошибки система автоматически запускает Retry и это отображается в интерфейсе dApp:" : "In case of error, the system automatically triggers a Retry, displayed in the dApp interface:"}
                </p>

                <div className="my-12 rounded-3xl overflow-hidden border border-gray-100 shadow-sm bg-white">
                  <img 
                    src={glacisRetryData.src} 
                    alt="Glacis Retry Data" 
                    className="w-full h-auto object-contain cursor-pointer"
                    onClick={() => openSingleImage(glacisRetryData.src, "Glacis Retry Data")}
                  />
                </div>

                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                   {language === "ru" ? "Появляются две вкладки: «Main data» – что с транзакцией сейчас (или, если она в статусе «Executed», как она была выполнена), и «Retry data» – список ретраев. Ретраев может быть несколько (разработчики говорят, 99+, но пока такого кейса не было), все они видны пользователю. Он может отследить, на каком именно этапе и бридже произошла ошибка – так система делает исполнение транзакции прозрачным." : "Two tabs appear: “Main data” – current status (or how it was executed), and “Retry data” – list of retries. There can be multiple retries (devs say 99+, but haven't seen that yet), all visible to the user. They can track exactly at which stage and bridge the error occurred – making execution transparent."}
                </p>
                <p className="text-lg text-gray-600 leading-relaxed mb-12">
                   {language === "ru" ? "Если страница деталей транзакции медленно загружается – видим вот такой чудесный лоадер:" : "If the transaction details page loads slowly – we see this wonderful loader:"}
                </p>

                <div className="my-12 rounded-3xl overflow-hidden border border-gray-100 shadow-sm bg-white relative group">
                  <video 
                    src="/glacis_loader.mp4" 
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-auto object-contain"
                  />
                </div>

                <h2 className="text-2xl font-medium mb-6">{language === "ru" ? "Аналитика" : "Analytics"}</h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                   {language === "ru" ? "Аналитику можно посмотреть по продуктам Glacis Core и AirLift – графики и набор данных будут разные. Chains Overview пока в разработке." : "Analytics is available for Glacis Core and AirLift – charts and datasets differ. Chains Overview is in development."}
                </p>

                <div className="my-12 rounded-3xl overflow-hidden border border-gray-100 shadow-sm bg-white">
                  <img 
                    src={glacisAnalytics.src} 
                    alt="Glacis Analytics" 
                    className="w-full h-auto object-contain cursor-pointer"
                    onClick={() => openSingleImage(glacisAnalytics.src, "Glacis Analytics")}
                  />
                </div>


                <h2 className="text-2xl font-medium mb-6">{language === "ru" ? "Светлая тема" : "Light Theme"}</h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                   {language === "ru" ? "Выглядит вот так:" : "Looks like this:"}
                </p>

                <div className="relative -mr-[calc((100vw-100%)/2)] w-[calc(100%+((100vw-100%)/2))]">
                  <div 
                    ref={scrollContainerRef4}
                    onMouseDown={handleMouseDown4}
                    onMouseLeave={() => setIsDragging4(false)}
                    onMouseUp={() => setIsDragging4(false)}
                    onMouseMove={handleMouseMove4}
                    className={`flex overflow-x-auto pb-4 gap-6 no-scrollbar ${isDragging4 ? 'cursor-grabbing select-none' : 'cursor-grab'}`}
                  >
                    {glacisLightSlides.map((img, idx) => (
                      <div key={idx} className="flex-shrink-0 w-[85vw] md:w-[600px]">
                        <div 
                          onClick={() => !hasMoved4 && openLightbox(glacisLightSlides, idx)}
                          className={`rounded-3xl overflow-hidden border border-gray-100 shadow-sm bg-white ${isDragging4 ? 'cursor-grabbing' : 'cursor-grab'}`}
                        >
                          <img 
                            src={img.src} 
                            alt={img.alt} 
                            className="w-full aspect-video object-cover object-top pointer-events-none"
                          />
                        </div>
                      </div>
                    ))}
                    {/* Spacer to allow scrolling past the last item to the screen edge */}
                    <div className="flex-shrink-0 w-[calc((100vw-100%)/2)]" />
                  </div>
                </div>

                <section className="mt-16">
                  <h2 className="text-2xl font-medium mb-6">
                    {language === "ru" ? "Итог" : "Outcome"}
                  </h2>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {language === "ru"
                      ? "Я спроектировала dApp с упором на быструю диагностику транзакций – от таблицы и поиска до детальных статусов по нескольким бриджам и истории retry. Под изменения продукта (V2 + AirLift) переработала структуру и упростила путь пользователя, добавила расширяемую аналитику с фильтрами и кастомизацией. Параллельно курировала аутсорс по графике и моушену, контролируя качество и соответствие стилю."
                      : "I designed the dApp around fast transaction troubleshooting: from table view and search to detailed multi-bridge statuses and retry history. When the product evolved (V2 + AirLift), I reworked the structure, removed extra friction, and added scalable analytics with filters and customization. In parallel, I managed outsourced graphics and motion, keeping quality and style consistent."}
                  </p>
                </section>
              </div>
            )}

            {project.id === 2 && (
              <div className="max-w-[calc(56rem-80px)] mb-20">
                <h2 className="text-2xl font-medium mb-6">
                  {language === "ru" ? "Контекст и продуктовые задачи" : "Context & product challenges"}
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  {language === "ru" 
                    ? "DeFi-интерфейсы — это зона высокого риска: ошибка стоит денег, а непонимание механики может превратиться в недоверие. Поэтому важно было:"
                    : "DeFi UX is high-stakes: one mistake costs money, and confusing mechanics quickly turn into distrust. So the key goals were:"}
                </p>
                <ul className="space-y-2">
                  {(language === "ru" 
                    ? [
                        "снизить вероятность ошибок при транзакциях (например, изменение значений в инпутах, когда свап в процессе, или уход с формы во время аппрува, или недостаток газа и тд);",
                        "обеспечить максимальную прозрачность для опытных пользователей и поддержку для новичков (когда только вникаешь в DeFi, хочется, чтобы везде были развешаны хинты...);",
                        "снизить барьер входа: без XFI нельзя оплатить gas и провести транзакцию, из-за этого пользователи часто уходят разбираться и не возвращаются;",
                        "помочь маркетингу: оформить token sale так, чтобы стимулировать пользователя цифрами и ясной логикой."
                      ]
                    : [
                        "Reduce transaction errors, like changing inputs mid-swap, leaving the form during approval, running out of gas, and other “classic” crypto pitfalls.",
                        "Keep it transparent for advanced users while still being friendly to beginners (when you’re new to DeFi, you want helpful hints everywhere).",
                        "Lower the entry barrier: without XFI you can’t pay gas and send a transaction, and people often leave to “figure it out” and never come back.",
                        "Support marketing without breaking UX: make token sale conversion-friendly through numbers and clear logic."
                      ]
                  ).map((item, i) => (
                    <li key={i} className="flex gap-4 text-lg text-gray-600 leading-relaxed">
                      <span className="text-black font-medium">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-16">
                  <h2 className="text-2xl font-medium mb-2">
                    {language === "ru" ? "User Flow и другие схемы" : "User flows and other diagrams"}
                  </h2>
                  <p className="text-[18px] text-gray-600 leading-relaxed mt-3 mb-12">
                    {language === "ru"
                      ? "Чтобы избежать ошибок, определяю все места, где они могут возникнуть:"
                      : "To prevent mistakes, I first map every place where things can go wrong and attach the relevant states and errors."}
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
                      {xswapFlowSlides.map((img, idx) => (
                        <div key={idx} className="flex-shrink-0 w-[85vw] md:w-[600px]">
                          <div 
                            onClick={() => !hasMoved1 && openLightbox(xswapFlowSlides, idx)}
                            className={`rounded-3xl overflow-hidden border border-gray-100 shadow-sm bg-white ${isDragging1 ? 'cursor-grabbing' : 'cursor-grab'}`}
                          >
                            <img 
                              src={img.src} 
                              alt={img.alt} 
                              className="w-full aspect-video object-cover object-top pointer-events-none"
                            />
                          </div>
                        </div>
                      ))}
                      {/* Spacer to allow scrolling past the last item to the screen edge */}
                      <div className="flex-shrink-0 w-[calc((100vw-100%)/2)]" />
                    </div>
                  </div>

                  <p className="text-[18px] text-gray-600 leading-relaxed mt-8 mb-4">
                    {language === "ru"
                      ? "И дальше согласуем механики с solidity и фронтом. Вот парочка схем – здесь staking/locking, связи между сущностями и немного токен сейла."
                      : "Then we align the mechanics with the Solidity and frontend teams. I also did a few “marker on a whiteboard” drafts — staking/locking logic, entity relationships, and a bit of token sale."}
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
                        { src: "/Staking_Draft_Updated.webp", alt: "Draft Staking", width: "md:w-[600px]" },
                        { src: "/TokenSale_Draft.webp", alt: "Draft Token Sale", width: "md:w-[400px]" },
                        { src: "/Relations_Draft.webp", alt: "Draft Relations", width: "md:w-[600px]" }
                      ].map((img, idx) => (
                        <div key={idx} className={`flex-shrink-0 w-[85vw] ${img.width}`}>
                          <div 
                            onClick={() => !hasMoved2 && openLightbox(xswapDraftSlides, idx)}
                            className={`rounded-3xl overflow-hidden border border-gray-100 shadow-sm bg-white ${isDragging2 ? 'cursor-grabbing' : 'cursor-grab'}`}
                          >
                            <img 
                              src={img.src} 
                              alt={img.alt} 
                              className="w-full aspect-video object-cover object-top pointer-events-none"
                            />
                          </div>
                        </div>
                      ))}
                      {/* Spacer to allow scrolling past the last item to the screen edge */}
                      <div className="flex-shrink-0 w-[calc((100vw-100%)/2)]" />
                    </div>
                  </div>

                  <p className="text-[18px] text-gray-600 leading-relaxed mt-12 mb-4">
                    {language === "ru"
                      ? "После – собираю интерактивные прототипы и прогняю быстрые A/B-проверки внутри команды и на нескольких пользователях (более масштабное тестирование не проводим, потому что нет времени и ресурсов, потому что стартап). По результатам – итеративно улучшаю копирайт, подсказки и структуру, чтобы уменьшить непонимание на критичных шагах."
                      : "After that, I built interactive prototypes and ran quick A/B checks inside the team and with a few users. Based on the feedback, I iterated on copy, hints, and structure to reduce confusion on the critical steps."}
                  </p>
                </div>
              </div>
            )}

            {project.id === 2 && (
              <div className="max-w-[calc(56rem-80px)] space-y-12 pb-20">
                <section>
                  <h2 className="text-2xl font-medium mb-8">
                    {language === "ru" ? "Решения по фичам" : "Feature decisions"}
                  </h2>
                  
                  <div className="space-y-12 text-[18px] text-gray-600 leading-relaxed">
                    <div className="space-y-4">
                      <p className="font-medium text-black">Swap</p>
                      <p>
                        {language === "ru" 
                          ? "Один из главных флоу – это свап. Пользователь здесь хочет поменять один токен на другой. По устоявшемуся паттерну облегчаем ему жизнь кнопкой «Мах», добавляем кнопку свапа полей, показываем, сколько в кошельке, и значение в долларах."
                          : "Swap is one of the core flows: users come here to exchange one token for another. I followed the standard pattern to keep it familiar: Max button, token-field switch, wallet balance, and USD value."
                        }
                      </p>
                      
                      <div className="my-12 rounded-3xl overflow-hidden border border-gray-100 shadow-sm bg-white">
                        <img 
                          src="/Swap_UI_Showcase_New.webp" 
                          alt="Swap UI Showcase" 
                          className="w-full h-auto object-contain cursor-pointer"
                          onClick={() => openSingleImage("/Swap_UI_Showcase_New.webp", "Swap UI Showcase")}
                        />
                      </div>
                      <div className="space-y-4">
                        <p>
                          {language === "ru" ? "Правый блок с кнопками:" : "On the right, there’s a small action block:"}
                        </p>
                        <ul className="space-y-2">
                          {(language === "ru" 
                            ? [
                                "настройки – это изменение слиппэджа с возможностью ввести кастомное значение;",
                                "знак вопроса – пояснение, как работает наша (любая) свапалка, с указанием конкретных шагов;",
                                "и faucet – клейм XFI (нативной валюты сети). Там же объяснили, зачем XFI нужен, и как работает клейм."
                              ]
                            : [
                                "Settings: slippage presets + custom slippage input",
                                "Help (?): a short “how this swap works” walkthrough with concrete steps",
                                "Faucet: claim XFI (the network’s native token). We explain why XFI is needed and how claiming works."
                              ]
                          ).map((item, i) => (
                            <li key={i} className="flex gap-4 text-lg text-gray-600 leading-relaxed">
                              <span className="text-black font-medium">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <p>
                        {language === "ru"
                          ? "Встроенный Faucet закрывает критичную точку оттока: пользователь не уходит из продукта, чтобы найти XFI для газа, и быстрее проходит первый swap."
                          : "The built-in Faucet removes a major drop-off point: users don’t leave the product to hunt for gas, and can complete their first swap faster."
                        }
                      </p>

                      <div className="my-12 rounded-3xl overflow-hidden border border-gray-100 shadow-sm bg-white">
                        <img 
                          src="/Features_Showcase.webp" 
                          alt="Features Showcase" 
                          className="w-full h-auto object-contain cursor-pointer"
                          onClick={() => openSingleImage("/Features_Showcase.webp", "Features Showcase")}
                        />
                      </div>

                      <p>
                        {language === "ru"
                          ? "После заполнения формы показываем пользователю информацию о будущем свапе – курс, price impact (предупреждаем, если он слишком высокий), network cost и т.д. Для advanced-пользователей добавили Route – он показывает, через какие токены и пулы пройдёт свап. Здесь есть возможность скопировать адрес пула или контракта токена + объяснение оптимизации и стоимости газа: \"Best price route costs ~$6.97 in gas... considers split routes, multiple hops, and gas cost of each step.\" Это делает продукт прозрачным – мы точно видим, как он работает, откуда эти цифры и уверены в том, что произойдет дальше (вот бы в жизни так)."
                          : "After the form is filled, we show the important details: rate, price impact (with warnings when it’s too high), network cost, etc. For advanced users, there’s Route — it shows which tokens and pools the swap goes through. You can copy pool or token contract addresses, and we explain route optimization and gas cost, e.g.:\n“Best price route costs ~$6.97 in gas… considers split routes, multiple hops, and the gas cost of each step.”\nThis makes the product feel transparent: you can see how it works and why the numbers look the way they do."
                        }
                      </p>

                      <div className="my-12">
                        <div className="rounded-3xl overflow-hidden border border-gray-100 shadow-sm bg-white">
                          <img 
                            src="/Swap_States_Showcase.webp" 
                            alt="Route и некоторые состояния формы свапа" 
                            className="w-full h-auto object-contain cursor-pointer"
                            onClick={() => openSingleImage("/Swap_States_Showcase.webp", "Swap states showcase")}
                          />
                        </div>
                        <p className="text-sm text-gray-400 mt-4 text-center italic">Route и некоторые состояния формы свапа</p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <p className="font-medium text-black">Pools</p>
                      <p>Пулы я разделила на два блока:</p>
                      <ul className="space-y-2">
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
                            src="/Pools_UI_Showcase.webp" 
                            alt="Pools UI Showcase" 
                            loading="lazy"
                            className="w-full h-auto object-contain cursor-pointer"
                            onClick={() => openSingleImage("/Pools_UI_Showcase.webp", "Pools UI Showcase")}
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
                              src="/Add_Liquidity_Showcase.webp" 
                              alt="Add Liquidity Stepper and States" 
                              loading="lazy"
                              className="w-full h-auto object-contain cursor-pointer"
                              onClick={() => openSingleImage("/Add_Liquidity_Showcase.webp", "Add Liquidity Stepper and States")}
                            />
                          </div>
                        </div>

                        <div className="my-12">
                          <div className="rounded-3xl overflow-hidden border border-gray-100 shadow-sm bg-white">
                            <img 
                              src="/Remove_Liquidity_Showcase.webp" 
                              alt="Remove Liquidity Showcase" 
                              loading="lazy"
                              className="w-full h-auto object-contain cursor-pointer"
                              onClick={() => openSingleImage("/Remove_Liquidity_Showcase.webp", "Remove Liquidity Showcase")}
                            />
                          </div>
                          <p className="text-sm text-gray-400 mt-4 text-center italic">Remove liquidity выглядит уже проще, но увеличился инфо блок.</p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <p className="font-medium text-black">Token Sale</p>
                      <p>Token Sale должен продавать токен платформы (SWA), чтобы в дальнейшем принести пользователю прибыль. Для этого нужно выбрать сеть – самое важное, поэтому в красном алерте, и успеть купить токен подешевле – таймер с обратным отсчетом, условия и цена покупки на нынешнем и следующем этапе. Чтобы усилить мотивацию, я добавила кликабельный калькулятор прибыли. По дефолту он заполнен, в него можно потыкать и поменять значение, а вообще он синхронизирован с полем на основной форме. При заполнении формы слева – в калькуляторе прибыли пользователь сразу увидит, сколько он рассчетно получит через 3 месяца.</p>

                      <div className="my-12">
                        <div className="rounded-3xl overflow-hidden border border-gray-100 shadow-sm bg-white">
                          <img 
                            src="/Token_Sale_Showcase.webp" 
                            alt="Token Sale Showcase" 
                            loading="lazy"
                            className="w-full h-auto object-contain cursor-pointer"
                            onClick={() => openSingleImage("/Token_Sale_Showcase.webp", "Token Sale Showcase")}
                          />
                        </div>
                      </div>
                      <p>Еще я добавила видео-гайды для новичков, чтобы снизить барьер входа и нагрузку на саппорт. Вот так они выглядели:</p>
                      
                      <div className="my-12">
                        <div className="rounded-3xl overflow-hidden border border-gray-100 shadow-sm bg-white relative group">
                          <video 
                            src="/Token_Sale_Guides.mp4" 
                            controls
                            playsInline
                            className="w-full h-auto object-contain"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <p className="font-medium text-black">Lock + Voting</p>
                      <p>Этот раздел был самым нетривиальным в проектировании – мало хороших референсов, много новых сущностей: veSWA, voting power, incentives. Механика следующая: когда пользователь лочит SWA, он получает veSWA – это его voting power. С помощью veSWA он голосует за пулы и тем самым влияет на распределение incentives и итоговую доходность. Я разделила сценарии на Lock (локи, сроки, unlock) и Voting (голоса и их эффект), добавила ключевые метрики (veSWA, rewards, unlock date) и подсказки/empty states.</p>

                      <div className="my-12">
                        <div className="rounded-3xl overflow-hidden border border-gray-100 shadow-sm bg-white">
                          <img 
                            src="/Lock_Voting_Showcase.webp" 
                            alt="Lock + Voting Showcase" 
                            loading="lazy"
                            className="w-full h-auto object-contain cursor-pointer"
                            onClick={() => openSingleImage("/Lock_Voting_Showcase.webp", "Lock + Voting Showcase")}
                          />
                        </div>
                      </div>

                      <div className="my-12">
                        <div className="rounded-3xl overflow-hidden border border-gray-100 shadow-sm bg-white">
                          <img 
                            src="/Lock_Voting_Popups.webp" 
                            alt="Lock and Vote Popups" 
                            loading="lazy"
                            className="w-full h-auto object-contain cursor-pointer"
                            onClick={() => openSingleImage("/Lock_Voting_Popups.webp", "Lock and Vote Popups")}
                          />
                        </div>
                        <p className="text-sm text-gray-400 mt-4 text-center italic">Попапы для vote и lock</p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <p className="font-medium text-black">{project.content?.conclusion?.title}</p>
                      <p>{project.content?.conclusion?.text}</p>

                      <div className="mt-12">
                        <div className="relative -mr-[calc((100vw-100%)/2)] w-[calc(100%+((100vw-100%)/2))]">
                          <div 
                            ref={scrollContainerRef3}
                            onMouseDown={handleMouseDown3}
                            onMouseLeave={() => setIsDragging3(false)}
                            onMouseUp={() => setIsDragging3(false)}
                            onMouseMove={handleMouseMove3}
                            className={`flex overflow-x-auto pb-4 gap-6 no-scrollbar ${isDragging3 ? 'cursor-grabbing select-none' : 'cursor-grab'}`}
                          >
                            {[
                              { src: "/Viet_Token_Sale.webp", alt: "Vietnamese Token Sale", width: "md:w-[600px]" },
                              { src: "/Viet_Pools.webp", alt: "Vietnamese Pools", width: "md:w-[600px]" },
                              { src: "/Viet_Route.webp", alt: "Vietnamese Route", width: "md:w-[400px]" },
                              { src: "/UI_Library_1.webp", alt: "UI Library 1", width: "md:w-[600px]" },
                              { src: "/UI_Library_2.webp", alt: "UI Library 2", width: "md:w-[600px]" }
                            ].map((img, idx) => (
                              <div key={idx} className={`flex-shrink-0 w-[85vw] ${img.width}`}>
                                <div 
                                  onClick={() => !hasMoved3 && openLightbox(xswapConclusionSlides, idx)}
                                  className={`rounded-3xl overflow-hidden border border-gray-100 shadow-sm bg-white ${isDragging3 ? 'cursor-grabbing' : 'cursor-grab'}`}
                                >
                                  <img 
                                    src={img.src} 
                                    alt={img.alt} 
                                    loading="lazy"
                                    className="w-full aspect-video object-cover object-top pointer-events-none"
                                  />
                                </div>
                              </div>
                            ))}
                            <div className="flex-shrink-0 w-[calc((100vw-100%)/2)]" />
                          </div>
                        </div>
                        <p className="text-sm text-gray-400 mt-6 text-center italic">{project.content?.conclusion?.vietnamCaption}</p>
                      </div>
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
                <div className="text-lg md:text-xl leading-relaxed font-normal whitespace-pre-line">
                  {project.content.results.text}
                </div>
              </section>
            </div>
          )}
        </section>

        {/* Footer Navigation - Related Projects */}
        <section className="border-t border-gray-100 py-24 lg:py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="flex justify-between items-end mb-12">
              <h2 className="text-3xl font-medium tracking-tight">
                {language === "ru" ? "Другие проекты" : "Other Projects"}
              </h2>
              <Link href="/projects" className="text-[15px] font-medium link-underline">
                {language === "ru" ? "Все проекты" : "All Projects"}
              </Link>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {projects
                .filter(p => p.id !== id)
                .slice(0, 3)
                .map((p) => (
                  <Link 
                    key={p.id} 
                    href={`/projects/${p.id}`}
                    className="group flex flex-col"
                  >
                    <div className="relative aspect-[4/3] rounded-[28px] overflow-hidden bg-[#F1F1F1] border border-gray-100 mb-6">
                      {projectImages[p.id] ? (
                        <img 
                          src={projectImages[p.id] as string}
                          alt={p.title}
                          loading="lazy"
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      ) : (
                        <div className="w-full h-full bg-[#F1F1F1]" />
                      )}
                    </div>
                    <div className="flex items-center gap-2 text-[12px] text-gray-400 uppercase tracking-wider mb-2">
                      <span>{p.year}</span>
                      <span className="text-gray-200">/</span>
                      <span>{p.category}</span>
                    </div>
                    <h3 className="text-xl font-medium mb-2 group-hover:text-gray-600 transition-colors">
                      {p.title}
                    </h3>
                    <p className="text-sm text-gray-500 line-clamp-2 leading-relaxed">
                      {p.description}
                    </p>
                  </Link>
                ))}
            </div>
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
