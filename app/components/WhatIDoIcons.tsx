const iconClass = "size-10 shrink-0";
const strokeClass = "stroke-[var(--accent)] fill-none stroke-[1.5]";

export function ShopifyThemeIcon() {
  return (
    <svg
      className={iconClass}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      {/* Cart body */}
      <path
        className={strokeClass}
        d="M8 12h20l2 8H10L8 12z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        className={strokeClass}
        d="M10 22a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zM22 22a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3z"
      />
      <path
        className={strokeClass}
        d="M9 12L8 8h22"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Arrow right inside cart */}
      <path
        className={strokeClass}
        d="M14 18h5M17 16v4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* </> code symbol */}
      <text
        x="26"
        y="24"
        className="fill-[var(--accent)] font-mono text-[10px] font-medium"
      >
        {"/>"}
      </text>
    </svg>
  );
}

export function HeadlessCommerceIcon() {
  return (
    <svg
      className={iconClass}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      {/* Storefront roof */}
      <path
        className={strokeClass}
        d="M20 8L6 16v2h28v-2L20 8z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Lightning from roof */}
      <path
        className={strokeClass}
        d="M20 12v6l3-3h-2l1.5-3h-2.5l-1 0z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Building base */}
      <path
        className={strokeClass}
        d="M8 18h12v12H8V18z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* </> code symbol to the right */}
      <text
        x="24"
        y="28"
        className="fill-[var(--accent)] font-mono text-[9px] font-medium"
      >
        {"/>"}
      </text>
    </svg>
  );
}

export function CROPerformanceIcon() {
  return (
    <svg
      className={iconClass}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      {/* Ascending bar chart */}
      <path
        className={strokeClass}
        d="M8 28v-6h4v6H8z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        className={strokeClass}
        d="M14 28v-12h4v12h-4z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        className={strokeClass}
        d="M20 28v-18h4v18h-4z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        className={strokeClass}
        d="M8 28h16"
        strokeLinecap="round"
      />
      {/* Stopwatch */}
      <circle
        className={strokeClass}
        cx="30"
        cy="14"
        r="6"
      />
      <path
        className={strokeClass}
        d="M30 10v4l2 2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        className={strokeClass}
        d="M30 8V6h2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function AppIntegrationIcon() {
  return (
    <svg
      className={iconClass}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      {/* Gear/cog with teeth */}
      <path
        className={strokeClass}
        d="M20 8v4M20 28v4M8 20h4M28 20h4M11.5 11.5l2.8 2.8M25.7 25.7l2.8 2.8M11.5 28.5l2.8-2.8M25.7 14.3l2.8-2.8"
        strokeLinecap="round"
      />
      <circle
        className={strokeClass}
        cx="20"
        cy="20"
        r="6"
      />
      {/* 2x2 grid of squares inside gear */}
      <rect
        className="fill-[var(--accent)] stroke-[var(--accent)]"
        x="17"
        y="17"
        width="2"
        height="2"
        rx="0.3"
      />
      <rect
        className="fill-[var(--accent)] stroke-[var(--accent)]"
        x="21"
        y="17"
        width="2"
        height="2"
        rx="0.3"
      />
      <rect
        className="fill-[var(--accent)] stroke-[var(--accent)]"
        x="17"
        y="21"
        width="2"
        height="2"
        rx="0.3"
      />
      <rect
        className="fill-[var(--accent)] stroke-[var(--accent)]"
        x="21"
        y="21"
        width="2"
        height="2"
        rx="0.3"
      />
    </svg>
  );
}

const iconMap = {
  "shopify-theme": ShopifyThemeIcon,
  headless: HeadlessCommerceIcon,
  cro: CROPerformanceIcon,
  "app-integration": AppIntegrationIcon,
} as const;

export type WhatIDoIconId = keyof typeof iconMap;

export function WhatIDoIcon({ id }: { id: WhatIDoIconId }) {
  const Icon = iconMap[id];
  return Icon ? <Icon /> : null;
}
