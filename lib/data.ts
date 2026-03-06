export const site = {
  name: "Sugar Ray Ledesma",
  logo: "/logo.png",
  title: "Senior Shopify Developer",
  subtitle: "7+ years building scalable Shopify Plus storefronts, custom apps, and API-driven integrations",
  email: "sugarledesma2000@gmail.com",
  phone: "+13463556022",
  location: "Taguig, Philippines",
  linkedin: "https://linkedin.com/in/sugar-ray-ledesma-b880a83a9",
  calendly: "", // optional
  /** Resume PDF path: place your file in public/ and set this to "/yourfilename.pdf" (e.g. "/resume.pdf") */
  resumePdf: "/resume.pdf",
} as const;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/resume", label: "Resume" },
  { href: "/contact", label: "Contact" },
] as const;

export type ProjectTag = "Shopify Plus" | "Headless" | "CRO" | "Custom Checkout" | "Apps";

export interface Project {
  slug: string;
  name: string;
  role: string;
  tags: ProjectTag[];
  stack: string[];
  result: string;
  thumbnail: string;
  clientType: string;
  timeline: string;
  problem: string;
  solution: string;
  resultsDetail: string[];
  screenshots?: string[];
  storeUrl?: string;
  /** Card header image URL – paste your image URL here to show it on project cards */
  cardImageUrl?: string;
  /** Image URLs for the project detail page – add as many as you want, in the order you want them displayed */
  detailImageUrls?: string[];
}

export const projects: Project[] = [
  {
    slug: "headless-shopify-store",
    name: "Verishop",
    role: "Ecommerce Developer",
    tags: ["Headless", "Shopify Plus"],
    stack: ["Next.js", "GraphQL", "Shopify Plus"],
    result: "42% faster load · +18% conversion",
    thumbnail: "/projects/headless-placeholder.jpg",
    cardImageUrl: "/sites/1.png",
    detailImageUrls: [
      "https://image.thum.io/get/width/1200/crop/800/https%3A%2F%2Fwww.verishop.com%2F",
      "https://image.thum.io/get/width/1200/crop/800/https%3A%2F%2Fwww.verishop.com%2Fau%2Fwomen",
      "https://image.thum.io/get/width/1200/crop/800/https%3A%2F%2Fwww.verishop.com%2Fau%2Fwomen%2Fbags",
    ],
    clientType: "E-commerce brand",
    timeline: "2022 – 2023",
    storeUrl: "https://www.verishop.com",
    problem: "Existing Shopify theme was slow and limited conversion. Client needed a faster, more flexible storefront with better UX.",
    solution:
      "Developed and optimized a headless Shopify Plus eCommerce platform using Next.js and GraphQL to improve storefront performance and scalability. Implemented modern frontend architecture with API-driven data fetching to deliver a faster and more responsive shopping experience.",
    resultsDetail: [
      "Improved site performance resulting in 42% faster page load times",
      "Increased conversion rate by 18% through performance optimization and enhanced UX",
      "Built scalable headless commerce architecture integrating Shopify APIs via GraphQL",
      "Optimized product and checkout flows for improved customer engagement",
    ],
  },
  {
    slug: "cro-performance-overhaul",
    name: "Gymshark",
    role: "Ecommerce Developer",
    tags: ["CRO", "Shopify Plus"],
    stack: ["Shopify Plus", "Liquid", "Next.js"],
    result: "Speed ↑ 55% · Conversion ↑ 22% · Revenue growth",
    thumbnail: "/projects/cro-placeholder.jpg",
    cardImageUrl: "/sites/2.png",
    detailImageUrls: [
      "https://image.thum.io/get/width/1200/crop/800/https%3A%2F%2Fwww.gymshark.com%2F",
      "https://image.thum.io/get/width/1200/crop/800/https%3A%2F%2Fwww.gymshark.com%2Fcollections%2Fnew-releases",
      "https://image.thum.io/get/width/1200/crop/800/https%3A%2F%2Fwww.gymshark.com%2Fcollections%2Fleggings%2Fwomens",
    ],
    clientType: "Agency client",
    timeline: "2021 – 2023",
    storeUrl: "https://www.gymshark.com",
    problem: "Store had poor load times and low conversion. Multiple third-party scripts and unoptimized theme were hurting revenue.",
    solution:
      "Led a CRO and performance optimization initiative for a high-traffic Shopify Plus eCommerce platform. Improved site speed, enhanced user experience, and optimized the storefront architecture using Liquid, Next.js, and modern Shopify development practices.",
    resultsDetail: [
      "Increased site speed by 55%, improving overall storefront performance",
      "Boosted conversion rate by 22% through UX and checkout optimization",
      "Contributed to revenue growth by improving product discovery and page performance",
      "Optimized Shopify Plus storefront and Liquid templates for scalable, high-traffic commerce environments",
    ],
  },
  {
    slug: "custom-checkout-subscriptions",
    name: "Huel",
    role: "Ecommerce Developer",
    tags: ["Custom Checkout", "Apps", "Shopify Plus"],
    stack: ["Shopify Plus", "Checkout Extensibility", "Recharge", "Zapier"],
    result: "Custom checkout · Subscription revenue ↑",
    thumbnail: "/projects/checkout-placeholder.jpg",
    cardImageUrl: "/sites/3.png",
    detailImageUrls: [
      "https://image.thum.io/get/width/1200/crop/800/https%3A%2F%2Fhuel.com%2F",
      "https://image.thum.io/get/width/1200/crop/800/https%3A%2F%2Fhuel.com%2Fproducts%2Fhuel-ready-to-drink",
      "https://image.thum.io/get/width/1200/crop/800/https%3A%2F%2Fhuel.com%2Fpages%2Fnutrition",
    ],
    clientType: "Subscription brand",
    timeline: "2022 – Present",
    storeUrl: "https://huel.com",
    problem: "Client needed custom checkout logic, discount/bundle rules, and subscription flows that default Shopify couldn’t support.",
    solution:
      "Developed custom checkout and subscription workflows for a Shopify Plus storefront, focusing on improving recurring purchase experiences and streamlining the checkout process. Implemented advanced checkout customization using Shopify Checkout Extensibility and integrated subscription management through Recharge and Zapier automation.",
    resultsDetail: [
      "Built custom Shopify Plus checkout extensions to support subscription-based purchases",
      "Integrated Recharge subscription platform for recurring billing and order management",
      "Automated workflows using Zapier to improve order processing and customer lifecycle management",
      "Enhanced subscription checkout experience to increase recurring revenue and customer retention",
    ],
  },
  {
    slug: "colourpop-store",
    name: "Colourpop",
    role: "Ecommerce Developer",
    tags: ["Shopify Plus", "CRO"],
    stack: ["Shopify", "Liquid", "PageFly", "Shogun"],
    result: "Store migration · Performance optimized · CRO-focused",
    thumbnail: "/projects/colourpop-placeholder.jpg",
    cardImageUrl: "/sites/4.png",
    detailImageUrls: [
      "https://image.thum.io/get/width/1200/crop/800/https%3A%2F%2Fcolourpop.com%2F",
      "https://image.thum.io/get/width/1200/crop/800/https%3A%2F%2Fcolourpop.com%2Fcollections%2Fbest-sellers",
      "https://image.thum.io/get/width/1200/crop/800/https%3A%2F%2Fcolourpop.com%2Fcollections%2Fnew",
    ],
    clientType: "E-commerce brand",
    timeline: "2023",
    storeUrl: "https://colourpop.com",
    problem: "Client needed store migration to Shopify with high-traffic support, performance improvements, and conversion optimization for a large product catalog.",
    solution:
      "Led development and optimization of a high-volume Shopify storefront, focusing on store migration, performance improvements, and conversion rate optimization. Implemented scalable storefront architecture using Shopify Liquid and page-builder integrations to support high traffic and large product catalogs.",
    resultsDetail: [
      "Supported store migration to Shopify, ensuring smooth transition with minimal downtime",
      "Optimized storefront performance for high-traffic ecommerce operations",
      "Implemented CRO-focused page layouts to improve product discovery and customer engagement",
      "Integrated PageFly and Shogun for flexible page building and marketing campaigns",
      "Improved overall site responsiveness and user experience for large-scale product catalogs",
    ],
  },
  {
    slug: "allbirds-headless",
    name: "Allbirds",
    role: "Ecommerce Developer",
    tags: ["Headless", "Shopify Plus"],
    stack: ["Next.js", "GraphQL", "Shopify Plus"],
    result: "42% faster load · +18% conversion",
    thumbnail: "/projects/allbirds-placeholder.jpg",
    cardImageUrl: "/sites/6.png",
    detailImageUrls: [
      "https://image.thum.io/get/width/1200/crop/800/https%3A%2F%2Fwww.allbirds.com%2F",
      "https://image.thum.io/get/width/1200/crop/800/https%3A%2F%2Fwww.allbirds.com%2Fcollections%2Fmens",
      "https://image.thum.io/get/width/1200/crop/800/https%3A%2F%2Fwww.allbirds.com%2Fcollections%2Fwomens",
    ],
    clientType: "E-commerce brand",
    timeline: "2022 – 2023",
    storeUrl: "https://www.allbirds.com",
    problem: "Client needed a modern, performant storefront with better scalability and user experience for a high-traffic ecommerce platform.",
    solution:
      "Developed a headless Shopify Plus storefront using Next.js and GraphQL, delivering a modern, API-driven architecture that improved performance, scalability, and user experience for a high-traffic ecommerce platform.",
    resultsDetail: [
      "Implemented headless commerce architecture connecting Shopify Storefront APIs via GraphQL",
      "Improved page load speed by 42% through server-side rendering and performance optimization with Next.js",
      "Increased conversion rate by 18% by optimizing product pages and checkout flow",
      "Built modular React components for scalable storefront development",
      "Optimized API queries and caching strategies to enhance storefront responsiveness",
    ],
  },
  {
    slug: "evielab-green",
    name: "Evielab",
    role: "Ecommerce Developer",
    tags: ["Shopify Plus", "CRO"],
    stack: ["Shopify", "Liquid", "Judge.me"],
    result: "Full store build · Product catalog · Reviews & UX",
    thumbnail: "/projects/evielab-placeholder.jpg",
    cardImageUrl: "/sites/5.png",
    detailImageUrls: [
      "https://image.thum.io/get/width/1200/crop/800/https%3A%2F%2Fevielab-green.com%2F",
      "https://image.thum.io/get/width/1200/crop/800/https%3A%2F%2Fevielab-green.com%2Fen%2Fcollections%2Ffrontpage",
      "https://image.thum.io/get/width/1200/crop/800/https%3A%2F%2Fevielab-green.com%2Fen%2Fpages%2Fcontact",
    ],
    clientType: "E-commerce brand",
    timeline: "2023 – Present",
    storeUrl: "https://evielab-green.com/",
    problem:
      "Evielab needed a performant, trustworthy e-commerce storefront for their CBD micropearl products (The Pearls by Evielab), with clear product discovery, customer reviews, and a seamless checkout experience for a wellness/health-conscious audience.",
    solution:
      "Developed and optimized the Evielab Shopify storefront for The Pearls by Evielab—the first solid sublingual CBD micropearl line. Built a scalable product catalog (Relax, Sleep, Relief, Pure, and bundled offerings), integrated Judge.me for customer reviews and social proof, and implemented clear benefit-led messaging, free-delivery thresholds, and a multi-language experience to support EU markets.",
    resultsDetail: [
      "Delivered full Shopify storefront with collections, product pages, and checkout optimized for conversion",
      "Integrated Judge.me reviews and ratings to build trust and improve product discovery",
      "Implemented benefit-led UX and promotional messaging (e.g. free delivery from 4 products)",
      "Supported multi-language (EN/FR) and responsive design for desktop and mobile",
      "Aligned store with brand positioning: patented, Made in France, THC-free, and doser-stick format",
    ],
  },
];

export const trustedSnapshot = [
  "/Certification_badget/Certification_badget1.png",
  "/Certification_badget/Certification_badget2.png",
  "/Certification_badget/Certification_badget3.png",
  "/Certification_badget/Certification_badget4.png"
] as const;

export const whatIDo = [
  {
    id: "shopify-theme",
    title: "Shopify Theme & Plus Development",
    description:
      "Custom Shopify & Plus builds with clean architecture, advanced Liquid logic, and scalable Shopify 2.0 patterns.",
    bullets: [
      "Shopify Plus features & Checkout Extensibility",
      "Advanced Liquid, metafields & product logic",
      "Shopify 2.0 migrations & theme architecture",
    ],
  },
  {
    id: "headless",
    title: "Headless Commerce",
    description:
      "High-performance headless storefronts using Next.js + Shopify APIs, built for speed, SEO, and flexibility.",
    bullets: [
      "Next.js (SSR / ISR) storefronts",
      "Storefront & Admin API integrations",
      "Performance-first, SEO-ready architecture",
    ],
  },
  {
    id: "cro",
    title: "CRO & Performance Optimization",
    description:
      "Conversion-focused UI and performance optimization driven by data, not guesswork.",
    bullets: [
      "Core Web Vitals & Lighthouse optimization",
      "PDP, cart & checkout UX improvements",
      "Conversion and speed audits",
    ],
  },
  {
    id: "app-integration",
    title: "App & Integration Development",
    description:
      "Custom Shopify apps and integrations that extend platform capabilities.",
    bullets: [
      "Custom Shopify apps & extensions",
      "Subscriptions (Recharge & custom logic)",
      "Payments & third-party integrations",
    ],
  },
];

export const techStack = {
  commerce: ["Shopify", "Next.js", "React", "GraphQL"],
  infra: ["Docker", "AWS", "Vercel"],
  tools: ["Git", "Figma", "Jira", "CI/CD"],
};

export const services = [
  {
    title: "Shopify Development",
    items: ["Theme & custom Liquid", "Shopify 2.0 migration"],
  },
  {
    title: "Shopify Plus",
    items: ["Checkout customization", "Scripts / Functions", "High-volume scaling"],
  },
  {
    title: "Headless Commerce",
    items: ["Next.js + Shopify", "Performance-first builds"],
  },
  {
    title: "Optimization & CRO",
    items: ["Speed optimization", "Conversion-focused UI"],
  },
  {
    title: "Integrations & Apps",
    items: ["Subscriptions", "Payments", "Custom Shopify apps"],
  },
];

export const experience = [
  {
    company: "Upwork",
    role: "Senior Shopify & Headless Commerce Developer",
    period: "05/2025 – Present",
    location: "Remote / International Clients",
    bullets: [
      "Architected and delivered enterprise-grade Shopify Plus storefronts with complex Liquid schema structures, dynamic sections, metafields, and scalable theme architecture.",
      "Built headless commerce platforms using React and Next.js, integrating Shopify Storefront APIs, GraphQL endpoints, and webhook-driven workflows to support real-time ecommerce functionality.",
      "Implemented fully compliant ADA/WCAG accessibility solutions at the code level, including semantic HTML structures, ARIA roles, keyboard navigation, focus management, screen reader compatibility, and contrast optimization — ensuring accessibility without reliance on overlay scripts.",
      "Designed and developed custom Shopify apps integrating payment gateways, logistics APIs, CRM platforms, and subscription workflows to support advanced ecommerce operations.",
      "Led performance optimization initiatives by implementing code splitting, caching strategies, lazy loading, CDN asset delivery, and image optimization, significantly improving Lighthouse and Core Web Vitals scores.",
      "Established CI/CD pipelines and automated deployment workflows, enabling faster release cycles and consistent quality standards.",
      "Conducted technical mentorship and code reviews, improving development practices and enforcing accessibility-first engineering guidelines.",
      "Produced architecture documentation and API specifications to support scalable and maintainable ecommerce infrastructure.",
    ],
  },
  {
    company: "Nexora Digital Labs",
    role: "Senior Web Application Developer (Shopify & Ecommerce Systems)",
    period: "01/2023 – 04/2025",
    location: "Taguig City, Metro Manila, Philippines",
    bullets: [
      "Designed and implemented custom Shopify storefront experiences supporting advanced promotions, membership logic, and multi-store deployments.",
      "Developed Liquid-based UI components with strong focus on accessible and responsive design, ensuring compatibility across devices and assistive technologies.",
      "Integrated Shopify Admin APIs, Storefront APIs, and webhook automations, enabling dynamic product management and backend workflow automation.",
      "Built reusable frontend modules using modern JavaScript frameworks, improving scalability and maintainability across multiple ecommerce projects.",
      "Collaborated closely with product managers and designers to translate Figma-based designs into high-performance, accessibility-compliant interfaces.",
      "Optimized frontend performance through structured refactoring, caching strategies, and improved asset loading techniques.",
      "Supported headless architecture initiatives connecting Shopify data to React-based frontend applications.",
    ],
  },
  {
    company: "BluePeak Software Solutions",
    role: "Web Developer (Frontend & Ecommerce Platforms)",
    period: "01/2019 – 12/2022",
    location: "Makati City, Metro Manila, Philippines",
    bullets: [
      "Developed responsive ecommerce interfaces using HTML5, CSS3, JavaScript, and PHP, contributing to scalable CMS-driven storefront solutions.",
      "Assisted in building and customizing ecommerce workflows including checkout integrations, product display logic, and backend API connectivity.",
      "Improved legacy codebases by implementing clean frontend architecture practices and accessibility improvements, enhancing usability and performance.",
      "Collaborated in Agile teams delivering frontend features aligned with evolving business requirements.",
      "Supported deployment pipelines, Git workflows, and ongoing maintenance of production ecommerce platforms.",
    ],
  },
];

export const education = {
  degree: "B.Sc. in Computer Science",
  school: "Taguig City University",
  year: "06/2017 – 04/2021",
  location: "Taguig City, Metro Manila, Philippines",
  gpa: "", // optional, e.g. "GPA 3.8"
};

export const summary =
  "Senior Web Application Developer with 7+ years of experience specializing in Shopify architecture, accessibility-first UI engineering, and headless commerce platforms. Experienced building scalable Shopify Plus storefronts, custom apps, and API-driven integrations using Liquid, React, Next.js, and GraphQL. Strong focus on ADA/WCAG compliance at the code level, performance optimization, and clean frontend architecture. Passionate about mentoring teams, improving engineering standards, and delivering high-traffic ecommerce experiences with reliability and scalability.";

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  avatar: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "Working with Sugar Ray was a great experience from start to finish. The project was delivered on time with excellent attention to detail. Communication was clear, professional, and very responsive.",
    name: "Daniel Roberts",
    role: "Startup Founder",
    avatar: "/last_clients/Daniel Roberts.jpg",
  },
  {
    quote:
      "Outstanding Shopify Plus development. Our store performance and conversion rates improved significantly. Highly recommend for headless and custom checkout work.",
    name: "Sarah Mitchell",
    role: "E-commerce Director",
    avatar: "/last_clients/Sarah Mitchell.jpg",
  },
  {
    quote:
      "Professional, reliable, and technically excellent. Delivered a complex headless storefront on time. Will work with again.",
    name: "Aaron Knox",
    role: "Brand Owner",
    avatar: "/last_clients/Aaron Knox.jpg",
  },
];

export const skills = {
  "Shopify Architecture & Ecommerce Engineering": [
    "Shopify Plus",
    "Liquid",
    "Metafields",
    "Checkout Customization",
    "Custom Apps",
    "GraphQL/REST APIs",
    "Webhooks",
    "Multi-Store Architecture",
  ],
  "Accessibility-First Frontend Engineering": [
    "ADA/WCAG Compliance",
    "Semantic HTML",
    "ARIA Attributes",
    "Keyboard Navigation",
    "Screen Reader Optimization",
    "Inclusive UX Design",
  ],
  "Headless Commerce & Modern Frontend": [
    "React",
    "Next.js",
    "SSR/SSG",
    "Jamstack Architectures",
    "Tailwind CSS",
    "Performance Optimization",
  ],
  "Cloud, DevOps & Performance Engineering": [
    "AWS/GCP Concepts",
    "Docker Basics",
    "CI/CD Pipelines",
    "Git Workflows",
    "SEO Optimization",
    "Core Web Vitals",
  ],
  "Engineering Leadership & Collaboration": [
    "Code Reviews",
    "Technical Documentation",
    "Architecture Planning",
    "Mentoring Developers",
    "Agile/Scrum Practices",
  ],
};
