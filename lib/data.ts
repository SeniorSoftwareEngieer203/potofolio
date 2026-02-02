export const site = {
  name: "Dejan Mitrovic",
  logo: "/logo.png",
  title: "Senior Shopify & Headless Commerce Developer",
  subtitle: "8+ years building high-performance Shopify & Shopify Plus stores with Next.js",
  email: "dejanmitrovic1230@gmail.com",
  phone: "+385 99 8519687",
  location: "Požega, Croatia",
  linkedin: "https://linkedin.com/in/dejan-mitrović-39b75a348",
  calendly: "", // optional
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
}

export const projects: Project[] = [
  {
    slug: "headless-shopify-store",
    name: "Headless Shopify Store",
    role: "Ecommerce Developer",
    tags: ["Headless", "Shopify Plus"],
    stack: ["Next.js", "GraphQL", "Shopify Plus"],
    result: "42% faster load · +18% conversion",
    thumbnail: "/projects/headless-placeholder.jpg",
    clientType: "E-commerce brand",
    timeline: "2022 – 2023",
    problem: "Existing Shopify theme was slow and limited conversion. Client needed a faster, more flexible storefront with better UX.",
    solution: "Built a headless storefront with Next.js and Shopify Storefront API. Optimized Core Web Vitals, implemented dynamic product recommendations, and streamlined checkout flow.",
    resultsDetail: [
      "42% improvement in LCP (Largest Contentful Paint)",
      "18% increase in conversion rate",
      "Stable under high traffic; zero downtime post-launch",
    ],
  },
  {
    slug: "cro-performance-overhaul",
    name: "CRO & Performance Overhaul",
    role: "Ecommerce Developer",
    tags: ["CRO", "Shopify Plus"],
    stack: ["Shopify Plus", "Liquid", "Next.js"],
    result: "Speed ↑ 55% · Conversion ↑ 22% · Revenue growth",
    thumbnail: "/projects/cro-placeholder.jpg",
    clientType: "Agency client",
    timeline: "2021 – 2023",
    problem: "Store had poor load times and low conversion. Multiple third-party scripts and unoptimized theme were hurting revenue.",
    solution: "Migrated from Shopify 1.0 to 2.0, optimized Liquid and assets, integrated Recharge for subscriptions, and applied conversion-focused UI changes.",
    resultsDetail: [
      "55% faster page load",
      "22% conversion rate increase",
      "Substantial revenue growth through streamlined checkout",
    ],
  },
  {
    slug: "custom-checkout-subscriptions",
    name: "Custom Checkout & Subscriptions",
    role: "Ecommerce Developer",
    tags: ["Custom Checkout", "Apps", "Shopify Plus"],
    stack: ["Shopify Plus", "Checkout Extensibility", "Recharge", "Zapier"],
    result: "Custom checkout · Subscription revenue ↑",
    thumbnail: "/projects/checkout-placeholder.jpg",
    clientType: "Subscription brand",
    timeline: "2022 – Present",
    problem: "Client needed custom checkout logic, discount/bundle rules, and subscription flows that default Shopify couldn’t support.",
    solution: "Built discount and bundle logic with Shopify Functions, customized checkout with Checkout Extensibility, and integrated Recharge and Zapier for subscriptions.",
    resultsDetail: [
      "Custom discount and bundle functions in production",
      "Seamless subscription signup and management",
      "Third-party integrations (Mailchimp, live chat, SSL) without slowing the store",
    ],
  },
  {
    slug: "high-volume-store-build",
    name: "High-Volume Store Build",
    role: "Shopify Developer",
    tags: ["Shopify Plus", "CRO"],
    stack: ["Shopify", "Liquid", "PageFly", "Shogun"],
    result: "Store migration · Performance optimized · CRO-focused",
    thumbnail: "/projects/high-volume-placeholder.jpg",
    clientType: "Agency / Brand",
    timeline: "2023",
    problem: "Client had an HTML/legacy store that needed to move to Shopify with custom pages and fast turnaround.",
    solution: "Designed and built major pages from requirements, converted HTML to Shopify, integrated payment and inventory systems, and optimized for performance and conversion.",
    resultsDetail: [
      "Full store integration from HTML to Shopify",
      "Reduced load times and increased conversion rates",
      "Stable codebase with minimal downtime",
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
    company: "Life on Mars",
    role: "Ecommerce Developer",
    period: "06/2019 – Present",
    location: "Remote",
    bullets: [
      "Worked with core Shopify developer in this agency",
      "Widget customization based on client requirement; optimized speed using headless (Next.js and GraphQL)",
      "Updated Shopify 1.0 to 2.0; built discount and bundle function using Shopify server script (Shopify Plus)",
      "Customized checkout pages (Shopify Plus)",
      "Integrated with Zapier, Recharge subscription; built pages using PageFly, Shogun, GemPages",
      "Optimized conversion rate; integration of third-party add-ons (Mailchimp, Wishlist, Live chat, SSL); built Shopify apps",
    ],
  },
  {
    company: "Nala Networks",
    role: "Ecommerce Developer",
    period: "03/2021 – 10/2023",
    location: "Remote",
    bullets: [
      "Designed major pages based on client requirement; HTML conversion after design approval",
      "Store integration from HTML to Shopify; third-party add-ons (Mailchimp, Wishlist, Live chat, SSL)",
      "Optimized website performance, reducing load times and increasing conversion rates, contributing to substantial revenue growth",
      "Partnered with cross-functional teams; seamless integration of payment gateways and inventory management",
      "Debugged and refined e-commerce codebase, enhancing stability and reducing downtime",
    ],
  },
  {
    company: "DominatEcom",
    role: "Shopify Developer",
    period: "04/2023 – 08/2023",
    location: "Remote",
    bullets: [
      "Designed pages based on client requirement",
      "Store integration from HTML to Shopify; widget customization; payment and shipping configuration",
      "UI/UX design for web and mobile; custom Shopify solutions",
      "Cutting-edge features that boosted user engagement and streamlined checkout",
    ],
  },
];

export const education = {
  degree: "Master's degree in commerce",
  school: "Sveučilište J.J. Strossmayera u Osijeku",
  year: "2015",
  location: "Osijek",
  gpa: "3.60 GPA",
};

export const summary =
  "Ecommerce Project Manager and Shopify Developer with over 8 years of experience in custom solutions and e-commerce. Expertise in Shopify Plus, headless commerce (Next.js, React), and third-party integrations, driving revenue growth through optimized conversion and streamlined checkout. Comfortable owning multiple projects in remote, async teams with strong accountability and craftsmanship.";

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  avatar: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "Working with Dejan was a great experience from start to finish. The project was delivered on time with excellent attention to detail. Communication was clear, professional, and very responsive.",
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
  "Shopify Expertise": [
    "Shopify Theme Development",
    "Shopify Plus Development",
    "Shopify App Development",
    "Shopify API Integration",
    "Custom Checkout Solutions",
    "Shopify Liquid Programming",
    "Store Migration & Setup",
  ],
  "Frontend": [
    "TypeScript",
    "JavaScript (ES6+)",
    "React / Next.js (Headless Shopify)",
    "Vue.js / Nuxt.js",
    "HTML5",
    "CSS3",
    "Tailwind",
  ],
  "Backend exposure": ["Laravel", "Node.js", "Ruby on Rails"],
  "CMS": ["Shopify", "WordPress (frontend-focused)"],
  "UX & Performance": [
    "Conversion-focused UI",
    "Accessibility",
    "Performance optimization",
  ],
  "Tools": [
    "Git / GitHub",
    "Figma",
    "Jira / Linear / Azure DevOps",
    "Vercel",
    "Docker",
    "AWS",
    "CI/CD tools",
  ],
};
