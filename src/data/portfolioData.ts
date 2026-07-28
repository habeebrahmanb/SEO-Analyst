export interface CaseStudy {
  id: string;
  clientName: string;
  industry: string;
  category: 'ecommerce' | 'saas' | 'b2b' | 'local';
  timeframe: string;
  headline: string;
  summary: string;
  challenge: string;
  solution: string[];
  metrics: {
    label: string;
    before: string;
    after: string;
    percentage: string;
  }[];
  chartData: { month: string; traffic: number; keywords: number }[];
  featuredTag: string;
}

export const PORTFOLIO_DATA: CaseStudy[] = [
  {
    id: "lumina-apparel",
    clientName: "Lumina Fashion & Apparel",
    industry: "E-Commerce",
    category: "ecommerce",
    timeframe: "8 Months",
    headline: "Scaled Organic Revenue from $45K to $280K/month via Category SILO & Schema Optimization",
    summary: "Overhauled Shopify store architecture, resolved faceted navigation canonical issues, and dominated competitive fashion search queries.",
    challenge: "Lumina faced steep keyword cannibalization across 1,200 product variants, slow mobile load speeds (LCP > 4.2s), and poor category page ranking.",
    solution: [
      "Restructured navigation into clean SILO category hierarchies",
      "Implemented dynamic Product & Merchant Return Policy schema tags",
      "Optimized 85 high-intent buyer category landing pages with enriched TF-IDF copy",
      "Built 42 high-DR guest editorial links from top fashion & lifestyle publications"
    ],
    metrics: [
      { label: "Organic Monthly Traffic", before: "18.5K", after: "124.8K", percentage: "+574%" },
      { label: "Top 3 Keywords", before: "14", after: "186", percentage: "+1,228%" },
      { label: "Monthly Organic Revenue", before: "$45,000", after: "$280,000", percentage: "+522%" }
    ],
    chartData: [
      { month: "Month 1", traffic: 18500, keywords: 14 },
      { month: "Month 2", traffic: 24200, keywords: 32 },
      { month: "Month 3", traffic: 41000, keywords: 58 },
      { month: "Month 4", traffic: 63500, keywords: 94 },
      { month: "Month 5", traffic: 82000, keywords: 120 },
      { month: "Month 6", traffic: 98400, keywords: 145 },
      { month: "Month 7", traffic: 112000, keywords: 168 },
      { month: "Month 8", traffic: 124800, keywords: 186 },
    ],
    featuredTag: "E-Com Revenue Surge"
  },
  {
    id: "cloudflow-saas",
    clientName: "CloudFlow DevOps",
    industry: "B2B SaaS",
    category: "saas",
    timeframe: "6 Months",
    headline: "Captured #1 Ranking for High-Intent Commercial Term 'CI/CD Pipeline Automation'",
    summary: "Executed comprehensive technical audit, programmatic pillar content strategy, and authoritative developer backlink campaigns.",
    challenge: "Low domain authority (DR 24) competing against established legacy DevOps platforms with zero top-3 search presence.",
    solution: [
      "Created 15 interactive technical guides & comparison matrix pillars",
      "Acquired high-authority links from GitHub, TechCrunch, and HackerNoon contributors",
      "Refactored Next.js rendering to server-side static page generation for sub-second load times",
      "Mapped user search intent to targeted SaaS trial landing pages"
    ],
    metrics: [
      { label: "Qualified Lead Signups", before: "120/mo", after: "850/mo", percentage: "+608%" },
      { label: "Domain Rating (DR)", before: "DR 24", after: "DR 52", percentage: "+116%" },
      { label: "Organic Impressions", before: "45K/mo", after: "620K/mo", percentage: "+1,277%" }
    ],
    chartData: [
      { month: "Month 1", traffic: 5200, keywords: 8 },
      { month: "Month 2", traffic: 11400, keywords: 24 },
      { month: "Month 3", traffic: 28900, keywords: 56 },
      { month: "Month 4", traffic: 49000, keywords: 92 },
      { month: "Month 5", traffic: 74200, keywords: 135 },
      { month: "Month 6", traffic: 96500, keywords: 172 },
    ],
    featuredTag: "B2B SaaS Growth"
  },
  {
    id: "apex-dental",
    clientName: "Apex Dental Specialists",
    industry: "Healthcare & Local",
    category: "local",
    timeframe: "4 Months",
    headline: "Dominated Local Google 3-Pack Across 5 Regional Metropolitan Areas",
    summary: "Geotargeted Local SEO blueprint with Google Business Profile optimization, local citation cleanup, and patient review funnels.",
    challenge: "Invisible in map packs for search terms like 'emergency dentist near me' and 'cosmetic dental implants'.",
    solution: [
      "Optimized 5 Google Business Profiles with weekly posts, geotagged photos & FAQ updates",
      "Created 85 location-specific landing pages with LocalBusiness Schema Markup",
      "Generated 230+ verified 5-star Google patient reviews using automated SMS workflows",
      "Cleaned up inconsistent NAP citations across 60+ business directories"
    ],
    metrics: [
      { label: "Google Maps Views", before: "3,200", after: "28,500", percentage: "+790%" },
      { label: "Direct Inbound Calls", before: "42/mo", after: "315/mo", percentage: "+650%" },
      { label: "Local 3-Pack Rankings", before: "#12 Avg", after: "#1 Rank", percentage: "#1 Position" }
    ],
    chartData: [
      { month: "Month 1", traffic: 1400, keywords: 12 },
      { month: "Month 2", traffic: 3800, keywords: 45 },
      { month: "Month 3", traffic: 7900, keywords: 88 },
      { month: "Month 4", traffic: 12600, keywords: 140 },
    ],
    featuredTag: "Local Map Domination"
  },
  {
    id: "fintech-horizon",
    clientName: "Horizon Wealth Advisory",
    industry: "Financial Services",
    category: "b2b",
    timeframe: "10 Months",
    headline: "Overcame Google YMYL (Your Money Your Life) E-E-A-T Quality Guidelines",
    summary: "Built authoritativeness credentials, structured financial calculator tooling, and acquired top-tier financial editorial links.",
    challenge: "Organic traffic drop following Google Core Algorithm Update due to missing E-E-A-T signals and author verification.",
    solution: [
      "Created detailed CFP (Certified Financial Planner) author bios with Person schema",
      "Added inline citations, peer-reviewed financial sources, and editorial review badges",
      "Built custom interactive retirement ROI tools earning natural editorial backlinks",
      "Optimized core web vitals and SSL security protocol parameters"
    ],
    metrics: [
      { label: "Organic Monthly Traffic", before: "12.4K", after: "94.2K", percentage: "+660%" },
      { label: "High-DR Backlinks", before: "18", after: "145", percentage: "+705%" },
      { label: "Consultation Bookings", before: "18/mo", after: "165/mo", percentage: "+816%" }
    ],
    chartData: [
      { month: "Month 1", traffic: 12400, keywords: 22 },
      { month: "Month 2", traffic: 18900, keywords: 41 },
      { month: "Month 3", traffic: 31200, keywords: 68 },
      { month: "Month 4", traffic: 48500, keywords: 104 },
      { month: "Month 5", traffic: 62000, keywords: 135 },
      { month: "Month 6", traffic: 74800, keywords: 160 },
      { month: "Month 7", traffic: 83500, keywords: 182 },
      { month: "Month 8", traffic: 89100, keywords: 198 },
      { month: "Month 9", traffic: 92400, keywords: 215 },
      { month: "Month 10", traffic: 94200, keywords: 230 }
    ],
    featuredTag: "YMYL Recovery"
  }
];
