export interface Service {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  deliverables: string[];
  metricsImpact: string;
  badge: string;
}

export const SERVICES_DATA: Service[] = [
  {
    id: "technical-seo",
    title: "Technical SEO Audit & Architecture",
    shortDesc: "Eliminate crawl errors, optimize core web vitals, and build a search-engine friendly site architecture.",
    fullDesc: "Comprehensive technical audit identifying indexation blockers, rendering bottlenecks, JavaScript execution issues, canonicalization errors, and XML sitemap configurations. Built to maximize crawl efficiency and pass all Google Core Web Vitals checks.",
    iconName: "Cpu",
    deliverables: [
      "Core Web Vitals & Site Speed Optimization (LCP, INP, CLS)",
      "Crawl Budget & Indexability Overhaul",
      "JavaScript & Single Page Application (SPA) Rendering Fixes",
      "Schema Markup (Structured Data) Implementation",
      "Mobile-First Indexing & Responsive Architecture Audit"
    ],
    metricsImpact: "Avg. +140% Crawl Efficiency & Fast Page Loads",
    badge: "Core Service"
  },
  {
    id: "on-page-content",
    title: "On-Page SEO & Content Optimization",
    shortDesc: "Align page content with user search intent, optimize topical authority, and refine page structure.",
    fullDesc: "Strategic entity mapping and semantic content optimization that boosts keyword relevance and CTR. We utilize TF-IDF analysis, NLP keyword optimization, title tag testing, and internal linking SILO structures.",
    iconName: "FileText",
    deliverables: [
      "Semantic Search & Entity-Based Content Strategy",
      "Title Tag, Meta Description & H-Tag Copywriting for High CTR",
      "Internal Link SILO Architecture Optimization",
      "Keyword Intent Mapping (Informational, Transactional, Navigational)",
      "Duplicate Content & Thin Content Consolidation"
    ],
    metricsImpact: "Avg. +3.2x Organic Keyword Rankings",
    badge: "High Growth"
  },
  {
    id: "off-page-links",
    title: "High-DR Link Building & Digital PR",
    shortDesc: "Acquire authoritative, niche-relevant backlinks through white-hat outreach and custom digital PR.",
    fullDesc: "Ethical link building strategy that drives real domain rating authority and referral traffic. We conduct unlinked brand mention outreach, guest editorial placements, resource link acquisition, and competitor backlink gap analysis.",
    iconName: "Link2",
    deliverables: [
      "White-Hat Editorial Guest Post Outreach (DR 60+ Sites)",
      "Unlinked Brand Mention & Re-claiming Broken Links",
      "Digital PR Link Bait Content & Original Data Assets",
      "Competitor Backlink Gap Identification",
      "Toxic Backlink Audit & Disavow File Management"
    ],
    metricsImpact: "Avg. +25 Domain Authority Points",
    badge: "Authority Boost"
  },
  {
    id: "local-seo",
    title: "Local SEO & Google Business Profile",
    shortDesc: "Dominate the local 3-pack, capture high-intent local searchers, and drive foot traffic & inbound calls.",
    fullDesc: "Geotargeted optimization strategy designed for local service businesses and multi-location enterprises. Full Google Business Profile optimization, NAP consistency alignment, local citation building, and review generation workflows.",
    iconName: "MapPin",
    deliverables: [
      "Google Business Profile (GBP) Full Optimization & Post Strategy",
      "Local Citation Cleanup & Consistent NAP Syndication",
      "Geotargeted Landing Page Creation & Schema Markup",
      "Local Review Acquisition & Management Strategy",
      "Geo-grid Keyword Ranking & Map Visibility Tracking"
    ],
    metricsImpact: "Avg. +210% Local Map Pack Calls",
    badge: "Local Domination"
  },
  {
    id: "ecommerce-seo",
    title: "E-Commerce SEO Expansion",
    shortDesc: "Scale revenue for Shopify, WooCommerce & Magento stores with product category ranking strategies.",
    fullDesc: "Tailored e-commerce optimization targeted at category page rankings, faceted navigation fix, schema product rich snippets, image search optimization, and conversion rate integration.",
    iconName: "ShoppingCart",
    deliverables: [
      "Faceted Navigation & Facet Indexation Management",
      "Product & Category Schema Markup (Price, Aggregate Rating)",
      "High-Intent E-Commerce Keyword Research",
      "Product Image Optimization & Visual Search SEO",
      "Conversion Rate Optimization (CRO) & User Experience Tweaks"
    ],
    metricsImpact: "Avg. +380% Organic E-Commerce Sales",
    badge: "E-Com Scaling"
  },
  {
    id: "analytics-reporting",
    title: "SEO Analytics, GA4 & Custom Dashboards",
    shortDesc: "Turn raw search traffic data into clear actionable revenue insights with automated Looker Studio reporting.",
    fullDesc: "Complete setup of Google Analytics 4 (GA4), Google Search Console (GSC), custom conversion event tracking, search attribution models, and monthly ROI strategy reports.",
    iconName: "BarChart3",
    deliverables: [
      "GA4 Custom Events & Conversion Funnel Setup",
      "Google Search Console Integration & Advanced Regex Tracking",
      "Automated Looker Studio Executive Dashboard",
      "Keyword Rank Tracking (Daily Desktop & Mobile Monitoring)",
      "Monthly Strategy Consultations & Actionable Prioritization"
    ],
    metricsImpact: "100% Transparent Attribution",
    badge: "Data Focused"
  }
];
