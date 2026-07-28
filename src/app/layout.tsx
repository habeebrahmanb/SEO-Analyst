import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "SEO Analyst | Technical Organic Growth & Search Strategy Specialist",
  description: "Senior Technical SEO Analyst and Organic Growth Specialist. Audits, Core Web Vitals, SILO Content Architecture, High-DR Link Acquisition, and Enterprise Ranking Strategy.",
  keywords: ["SEO Analyst", "Technical SEO Consultant", "Organic Growth Specialist", "Google Core Web Vitals", "Link Building Strategy", "E-Commerce SEO", "B2B SaaS SEO Audit"],
  authors: [{ name: "SEO Analyst" }],
  openGraph: {
    title: "SEO Analyst | Data-Driven Search Strategy",
    description: "Transform search intent into predictable organic revenue. View verifiable case studies and request a free audit.",
    type: "website",
    locale: "en_US",
    siteName: "SEO Analyst Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "SEO Analyst | Technical Organic Growth",
    description: "Data-driven SEO strategies for SaaS, E-Commerce, and Enterprise brands.",
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Structured JSON-LD Schema for SEO Professional Service
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "SEO Analyst Consultancy",
    "description": "Senior Technical SEO Analyst and Organic Growth Specialist providing technical audits, SILO architecture, and enterprise search strategies.",
    "url": "https://seoanalyst.com",
    "priceRange": "$$$",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "San Francisco",
      "addressRegion": "CA",
      "addressCountry": "US"
    },
    "knowsAbout": [
      "Search Engine Optimization",
      "Core Web Vitals",
      "JSON-LD Schema Markup",
      "Information Architecture",
      "Google Search Console",
      "Digital PR & Link Building"
    ]
  };

  return (
    <html lang="en" className="scroll-smooth dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${plusJakartaSans.variable} font-sans bg-[#080c14] text-slate-100 antialiased selection:bg-emerald-500 selection:text-slate-950`}>
        {children}
      </body>
    </html>
  );
}
