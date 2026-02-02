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
  title: "Dejan Mitrovic | Senior Shopify & Headless Commerce Developer",
  description:
    "8+ years building high-performance Shopify & Shopify Plus stores with Next.js. Headless commerce, CRO, custom checkout.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${geistSans.variable} ${geistMono.variable} min-h-screen antialiased`}>
        <Header />
        <main className="pt-[72px] min-h-[calc(100vh-72px)] flex flex-col">
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
