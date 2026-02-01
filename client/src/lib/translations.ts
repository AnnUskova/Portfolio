export const translations = {
  en: {
    nav: {
      home: "Home",
      projects: "Projects",
      contact: "Contact"
    },
    hero: {
      title: "Hi! I'm Anna Uskova — a product designer with 8+ years in the industry.",
      description: "I work with high-load systems, DeFi protocols and B2C products — from research to polished UI.",
      viewWork: "View my work",
      getInTouch: "Get in touch"
    },
    stats: {
      experience: "Years Experience",
      projects: "Projects Delivered",
      location: "Location",
      locationValue: "Remote / Hybrid"
    },
    competencies: {
      title: "About me",
      description: "I help companies create exceptional digital products — from early research to final delivery.",
      items: [
        { num: "01", title: "Education", desc: "Bachelor's degree, SPbU (Saint Petersburg State University), Faculty of Journalism and Mass Communications, Department of Media Design." },
        { num: "02", title: "Languages", desc: "English – B2, Spanish – A2." },
        { num: "03", title: "Additional Info", desc: "I love my job, and now I'm also learning to build websites with AI tools." },
        { num: "04", title: "Free time", desc: "I make music, learn to sew clothes, and try to travel as much as possible." }
      ]
    },
    contact: {
      title: "Let's work together",
      description: "I'm available for freelance projects and full-time opportunities. Let's discuss how I can help bring your ideas to life.",
      modalTitle: "Let's connect",
      email: "Email",
      telegram: "Telegram",
      linkedin: "LinkedIn",
      downloadCV: "Download CV"
    },
    footer: {
      copyright: "© 2026 Anna Uskova. All rights reserved.",
      socials: {
        linkedin: "LinkedIn",
        telegram: "Telegram",
        instagram: "Instagram",
        email: "Email"
      }
    },
    projectsPage: {
      title: "Projects",
      subtitle: "A collection of high-load systems, DeFi protocols, and digital products I've shaped over the years.",
      backToProjects: "Back to projects",
      viewLive: "View Live Project",
      nextProject: "Next Project",
      tabs: {
        uxui: "UX/UI",
        strategy: "Strategy & Systems",
        research: "Research"
      }
    }
  },
  ru: {
    nav: {
      home: "Главная",
      projects: "Проекты",
      contact: "Контакты"
    },
    hero: {
      title: "Привет! Я Аня Ускова — продуктовый дизайнер с опытом в индустрии более 8 лет.",
      description: "Проектирую сложные системы, DeFi протоколы и B2C продукты.",
      viewWork: "Смотреть работы",
      getInTouch: "Связаться"
    },
    stats: {
      experience: "Опыт",
      projects: "Проектов",
      location: "Локация",
      locationValue: "Удалённо / Гибрид"
    },
    competencies: {
      title: "Обо мне",
      description: "Работаю с азартом (и пикселями) и делаю хороший добрый дизайн. Подхожу к задачам вдумчиво, анализирую, предлагаю, не боюсь неопределенности. Люблю свою работу — поэтому готова даже в офис ходить.",
      items: [
        { num: "01", title: "Образование", desc: "Высшее, СПбГУ.\nФакультет: Высшая школа журналистики и массовых коммуникаций.\nКафедра: Медиадизайн." },
        { num: "02", title: "Языки", desc: "Английский – B2, испанский – A2." },
        { num: "03", title: "Еще", desc: "Теперь не только делаю дизайн и исследования, но и учусь верстать сайты ИИшками (вот например этот)." },
        { num: "04", title: "В свободное время", desc: "Занимаюсь музыкой, путешествую и учусь шить одежду." }
      ]
    },
    contact: {
      title: "Давайте работать вместе",
      description: "Открыта для фриланс-проектов и постоянного сотрудничества. Давайте обсудим, как я могу помочь воплотить ваши идеи.",
      modalTitle: "Связаться со мной",
      email: "Почта",
      telegram: "Телеграм",
      linkedin: "LinkedIn",
      downloadCV: "Скачать CV"
    },
    footer: {
      copyright: "© 2026 Анна Ускова. Все права защищены.",
      socials: {
        linkedin: "LinkedIn",
        telegram: "Телеграм",
        instagram: "Инстаграм",
        email: "Почта"
      }
    },
    projectsPage: {
      title: "Проекты",
      subtitle: "Коллекция высоконагруженных систем, DeFi-протоколов и цифровых продуктов, созданных за последние 8 лет.",
      backToProjects: "Назад к проектам",
      viewLive: "Смотреть вживую",
      nextProject: "Следующий проект",
      tabs: {
        uxui: "UX/UI",
        strategy: "Стратегия и Системы",
        research: "Исследования"
      }
    }
  }
};

export const projectTranslations = {
  en: [
    {
      id: 1,
      year: "2024-26",
      category: "DEFI",
      role: "DESIGN LEAD",
      title: "Glacis Labs",
      description: "DeFi ecosystem for cross-chain operations. Created design system, brand identity, dApp design, ecosystem website, technical diagrams, and pitch deck."
    },
    {
      id: 2,
      year: "2024",
      category: "DEFI",
      role: "DESIGN LEAD",
      title: "MAAT",
      description: "An automated fund reinvestment system that optimizes asset allocation based on real-time market volatility. Developed the visual identity, comprehensive dApp interface, and a scalable design system while leading the design execution team."
    },
    {
      id: 3,
      year: "2023",
      category: "GREEN TOOLS",
      role: "PRODUCT DESIGNER",
      title: "SKIZI",
      description: "A high-performance infrastructure for automating green energy certificate accounting. Designed to handle high-load data processing for environmental impact tracking."
    },
    {
      id: 4,
      year: "2025",
      category: "FOOD APP",
      role: "SENIOR PRODUCT DESIGNER",
      title: "AI Chef",
      description: "An innovative mobile experience for AI-powered recipe generation. Built the entire product experience from initial concept to detailed interface design for modern cooking enthusiasts."
    },
    {
      id: 5,
      year: "2024",
      category: "UX RESEARCH",
      role: "UX RESEARCHER",
      title: "Travel e-commerce Case Study",
      description: "Comprehensive UX research of a travel platform's main page for both desktop and mobile versions, identifying friction points and improving conversion paths.",
      content: {
        nda: "NDA notice: This project is under NDA. Brand, screenshots, screen recordings, direct user quotes, and detailed metrics are hidden or generalized.",
        goal: {
          title: "Goal",
          text: "Understand: how clear the home page is 'from the first screen'; how easily key actions and sections are found; which blocks add value and which create friction; what to prioritize for improvements."
        },
        process: {
          title: "Research Process",
          steps: [
            {
              name: "Framing and Planning",
              text: "Defined goals, formed a list of scenarios and success metrics (success rate, subjective ratings, comments), and determined the need to compare mobile vs desktop."
            },
            {
              name: "Methodology and Tasks Design",
              text: "Chose unmoderated remote testing + surveying on the PathWay platform to get 'first click' data and check block discoverability. Scenarios included finding tours, popular countries, hot deals, loyalty program, and newsletter subscription."
            },
            {
              name: "Recruiting and Sample",
              text: "Audience: users with online booking experience. Sample — ~100 participants (internally: 102), distributed by device."
            },
            {
              name: "Conducting",
              text: "Participants completed tasks independently, provided ease-of-use ratings after each, and left comments. This revealed where people go 'by default' and where they get confused."
            },
            {
              name: "Analysis and Synthesis",
              text: "Collected results by performance signals (success, time, speed) and explanations (comments and patterns). Grouped findings into themes prioritized by impact and friction scale."
            }
          ]
        },
        results: {
          title: "Key Findings",
          text: "Search is the page anchor, but overall clutter can reduce efficiency. Deep scenarios are sensitive to page length and 'scroll fatigue'. Users use alternative entry points for some sections, indicating visibility issues on the first screen."
        }
      }
    }
  ],
  ru: [
    {
      id: 1,
      year: "2024-26",
      category: "DEFI",
      role: "DESIGN LEAD",
      title: "Glacis Labs",
      description: "Экосистема DeFi продуктов для работы с cross-chain операциями. Для них я собрала дизайн-систему и разработала фирменный стиль, сделала дизайн dApp, сайта экосистемы, визуализации технических схем и питч деки."
    },
    {
      id: 2,
      year: "2024",
      category: "DEFI",
      role: "DESIGN LEAD",
      title: "MAAT",
      description: "Автоматизированная система реинвестирования средств, принимающая решения на основе текущих рыночных условий. Разработала фирменный стиль, интерфейс dApp и масштабируемую дизайн-систему, а также руководила командой дизайнеров для реализации продукта."
    },
    {
      id: 3,
      year: "2023",
      category: "GREEN TOOLS",
      role: "PRODUCT DESIGNER",
      title: "СКИЗИ",
      description: "Высоконагруженная система для автоматизации учета зеленой энергии. Обеспечивает прозрачность и точность в отслеживании экологических сертификатов в реальном времени."
    },
    {
      id: 4,
      year: "2025",
      category: "FOOD APP",
      role: "SENIOR PRODUCT DESIGNER",
      title: "AI Chef",
      description: "Инновационное мобильное приложение для AI-генерации рецептов. Заказная разработка полного цикла: от концепции до финального интерфейса."
    },
    {
      id: 5,
      year: "2024",
      category: "UX RESEARCH",
      role: "UX RESEARCHER",
      title: "Travel e-commerce Case Study",
      description: "Комплексное UX-исследование главной страницы тревел-платформы (desktop + mobile) для выявления точек трения и оптимизации путей конверсии.",
      content: {
        nda: "NDA notice: проект под NDA. Бренд, скриншоты, записи экранов, прямые цитаты пользователей и детальные метрики скрыты/обобщены.",
        goal: {
          title: "Цель",
          text: "Понять: насколько главная понятна “с первого экрана”; насколько легко находят ключевые действия и разделы; какие блоки добавляют ценность, а какие создают лишнее трение; что приоритизировать в улучшениях."
        },
        process: {
          title: "Процесс исследования",
          steps: [
            {
              name: "Фрейминг и планирование",
              text: "Зафиксировала цели, сформировала список сценариев и метрик успеха (успешность выполнения, субъективные оценки, комментарии), определила необходимость сравнения mobile vs desktop."
            },
            {
              name: "Дизайн методологии и заданий",
              text: "Выбрала немодерируемое удалённое тестирование + анкетирование на платформе PathWay. Сценарии включали поиск тура, популярных стран, горящих туров, программы лояльности и подписку на рассылку."
            },
            {
              name: "Рекрутинг и выборка",
              text: "Аудитория: пользователи с опытом онлайн-бронирования. Выборка — ~100 участников (внутренне: 102), распределение по устройствам."
            },
            {
              name: "Проведение",
              text: "Участники проходили задания самостоятельно, давали оценки и оставляли комментарии. Это выявило, куда люди идут “по умолчанию” и где путаются."
            },
            {
              name: "Анализ и синтез",
              text: "Собрала результаты по performance-сигналам и комментариям. Сгруппировала находки в темы и приоритезировала по влиянию и масштабу трения."
            }
          ]
        },
        results: {
          title: "Ключевые выводы",
          text: "Поиск — якорь страницы, но перегруженность снижает эффективность. Глубокие сценарии чувствительны к длине страницы и “усталости от скролла”. Пользователи используют альтернативные точки входа для части разделов, что указывает на проблемы заметности на первом экране."
        }
      }
    }
  ]
};

export type Language = "en" | "ru";
