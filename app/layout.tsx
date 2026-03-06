import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sugar Ray Ledesma | Senior Shopify Developer | Headless Commerce | Accessibility-First UI",
  description:
    "7+ years building scalable Shopify Plus storefronts, custom apps, and API-driven integrations. Liquid, React, Next.js, GraphQL. ADA/WCAG compliance, performance optimization.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen antialiased`}
        suppressHydrationWarning
      >
        <Header />
        <main className="pt-[72px] min-h-[calc(100vh-72px)] flex flex-col">
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
