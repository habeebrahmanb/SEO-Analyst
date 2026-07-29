import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SEO Analyst | Technical Organic Growth & Search Strategy Specialist",
  description: "Senior Technical SEO Analyst and Organic Growth Specialist. Audits, Core Web Vitals, SILO Content Architecture, High-DR Link Acquisition, and Enterprise Ranking Strategy.",
  keywords: ["SEO Analyst", "Technical SEO Consultant", "Organic Growth Specialist", "Google Core Web Vitals", "Link Building Strategy", "E-Commerce SEO", "B2B SaaS SEO Audit"],
  authors: [{ name: "SEO Analyst" }],
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: ["/favicon.ico"],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "SEO Analyst | Data-Driven Search Strategy",
    description: "Transform search intent into predictable organic revenue. View verifiable case studies and request a free audit.",
    type: "website",
    locale: "en_US",
    siteName: "SEO Analyst Portfolio",
    images: [
      {
        url: "/icon-512.png",
        width: 512,
        height: 512,
        alt: "SEO Analyst Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SEO Analyst | Technical Organic Growth",
    description: "Data-driven SEO strategies for SaaS, E-Commerce, and Enterprise brands.",
    images: ["/icon-512.png"],
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
    "logo": "https://seoanalyst.com/icon-512.png",
    "image": "https://seoanalyst.com/icon-512.png",
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
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon-32x32.png" type="image/png" sizes="32x32" />
        <link rel="icon" href="/favicon-48x48.png" type="image/png" sizes="48x48" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />
        <link rel="manifest" href="/site.webmanifest" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans bg-[#F4F5F6] text-[#13144D] antialiased selection:bg-[#02E3A7] selection:text-[#13144D]">
        {children}
      </body>
    </html>
  );
}
