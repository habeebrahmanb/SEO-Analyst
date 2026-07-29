export interface CaseStudy {
  id: string;
  clientName: string;
  industry: string;
  category: 'ecommerce' | 'saas' | 'b2b' | 'local';
  timeframe: string;
  headline: string;
  summary: string;
  detailedBackground: string;
  challenge: string;
  solution: string[];
  methodologySteps: {
    title: string;
    description: string;
  }[];
  metrics: {
    label: string;
    before: string;
    after: string;
    percentage: string;
  }[];
  chartData: { month: string; traffic: number; keywords: number }[];
  techStack: string[];
  quote?: {
    text: string;
    author: string;
    role: string;
  };
  keyTakeaways: string[];
  featuredTag: string;
}

export const PORTFOLIO_DATA: CaseStudy[] = [
  {
    id: "lumina-apparel",
    clientName: "Lumina Fashion & Apparel",
    industry: "E-Commerce & Apparel",
    category: "ecommerce",
    timeframe: "8 Months",
    headline: "Scaled Organic Revenue from $45K to $280K/month via Category SILO & Schema Optimization",
    summary: "Overhauled Shopify store architecture, resolved faceted navigation canonical issues, and dominated competitive fashion search queries.",
    detailedBackground: "Lumina Fashion is a premier online direct-to-consumer (DTC) apparel brand with over 1,200 product variants spanning outerwear, footwear, and accessories. Prior to our partnership, Lumina relied heavily on Facebook and Instagram Meta Ads for revenue. However, rising Customer Acquisition Costs (CAC) severely eroded profit margins. Despite having high-quality products, their organic search presence was stagnant due to technical indexation flaws and unoptimized collection pages.",
    challenge: "Lumina faced steep keyword cannibalization across 1,200 product variants, slow mobile load speeds (LCP > 4.2s), and poor category page ranking. Endless pagination and unfiltered faceted parameters generated over 15,000 duplicate URL parameters that exhausted Google's crawl budget.",
    solution: [
      "Restructured navigation into clean SILO category hierarchies",
      "Implemented dynamic Product & Merchant Return Policy schema tags",
      "Optimized 85 high-intent buyer category landing pages with enriched TF-IDF copy",
      "Built 42 high-DR guest editorial links from top fashion & lifestyle publications"
    ],
    methodologySteps: [
      {
        title: "1. Faceted Navigation & Crawl Budget De-bloat",
        description: "Configured robots.txt exclusions and canonical parameters to prevent search bots from indexing non-essential filter combinations (e.g. color, size, sort-by)."
      },
      {
        title: "2. E-Commerce Category SILO Architecture",
        description: "Re-architected URL paths into strict logical hubs (e.g., /collections/women/jackets/leather) to concentrate internal link equity into target buyer collection pages."
      },
      {
        title: "3. Merchant Rich Snippets Deployment",
        description: "Injected dynamic JSON-LD schema for Product, Offer, AggregateRating, and InStock availability, unlocking eye-catching star ratings and price badges in Google SERPs."
      },
      {
        title: "4. Editorial Fashion PR & High-DR Backlink Campaign",
        description: "Secured high-authority editorial link mentions on Vogue, GQ, and major lifestyle publications, increasing domain rating from DR 28 to DR 56."
      }
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
      { month: "Month 8", traffic: 124800, keywords: 186 }
    ],
    techStack: ["Shopify Plus", "Screaming Frog", "SurferSEO", "Ahrefs", "Google Merchant Center", "Looker Studio"],
    quote: {
      text: "The transformation in our organic revenue was astounding. Organic search went from an afterthought to our #1 revenue driver, drastically reducing our reliance on expensive paid ads.",
      author: "Elena Rostova",
      role: "VP of E-Commerce, Lumina Apparel"
    },
    keyTakeaways: [
      "Controlling faceted filter indexation immediately restores crawl budget efficiency for big e-commerce sites.",
      "Optimizing category pages yields significantly higher ROI than focusing solely on individual product pages.",
      "Rich product snippet schema boosts SERP click-through rates by up to 35%."
    ],
    featuredTag: "E-Com Revenue Surge"
  },
  {
    id: "cloudflow-saas",
    clientName: "CloudFlow DevOps",
    industry: "B2B SaaS & Cloud Infrastructure",
    category: "saas",
    timeframe: "6 Months",
    headline: "Captured #1 Ranking for High-Intent Commercial Term 'CI/CD Pipeline Automation'",
    summary: "Executed comprehensive technical audit, programmatic pillar content strategy, and authoritative developer backlink campaigns.",
    detailedBackground: "CloudFlow is an enterprise SaaS platform offering automated CI/CD pipeline deployment tools for DevOps engineers and software architects. Despite having a superior product, CloudFlow was virtually invisible on search engines, ranking on Page 4 or 5 for key commercial queries like 'CI/CD pipeline automation' and 'Kubernetes deployment pipeline'. Legacy competitors dominated the search landscape.",
    challenge: "Low domain authority (DR 24) competing against established legacy DevOps platforms with zero top-3 search presence. Additionally, heavy client-side JavaScript rendering caused Googlebot hydration delays and unindexed documentation pages.",
    solution: [
      "Created 15 interactive technical guides & comparison matrix pillars",
      "Acquired high-authority links from GitHub, TechCrunch, and HackerNoon contributors",
      "Refactored Next.js rendering to server-side static page generation for sub-second load times",
      "Mapped user search intent to targeted SaaS trial landing pages"
    ],
    methodologySteps: [
      {
        title: "1. Next.js Server-Side Rendering (SSR) & Speed Refactor",
        description: "Migrated documentation and landing pages from client-rendered SPA scripts to statically pre-rendered Next.js pages, improving LCP from 3.8s to 0.7s."
      },
      {
        title: "2. Technical Pillar & Competitor Comparison Hub",
        description: "Created comprehensive comparison matrices (e.g. 'CloudFlow vs Jenkins', 'CloudFlow vs GitLab CI') targeting high-intent buyers ready to switch tools."
      },
      {
        title: "3. Developer Community Digital PR Campaign",
        description: "Published open-source DevOps benchmarks on HackerNoon and GitHub, generating 65+ organic editorial backlinks from engineering portals."
      },
      {
        title: "4. Conversion Rate & Trial Funnel Optimization",
        description: "Added sticky interactive demo widgets and free trial callouts across top-performing technical articles."
      }
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
      { month: "Month 6", traffic: 96500, keywords: 172 }
    ],
    techStack: ["Next.js", "Vercel", "Clearscope", "Ahrefs", "Google Analytics 4", "Hotjar"],
    quote: {
      text: "Securing the #1 spot for our dream keyword generated a surge of enterprise signups. The quality of organic leads far surpassed what we were getting from LinkedIn ads.",
      author: "Marcus Vance",
      role: "Head of Growth, CloudFlow DevOps"
    },
    keyTakeaways: [
      "Sub-second page speeds and SSR are non-negotiable for technical developer audiences and Googlebot.",
      "Competitor comparison pages convert organic search visitors at 4x the rate of standard blog posts.",
      "Earning authoritative backlinks from developer hubs builds unshakeable domain authority."
    ],
    featuredTag: "B2B SaaS Growth"
  },
  {
    id: "apex-dental",
    clientName: "Apex Dental Specialists",
    industry: "Healthcare & Local Services",
    category: "local",
    timeframe: "4 Months",
    headline: "Dominated Local Google 3-Pack Across 5 Regional Metropolitan Areas",
    summary: "Geotargeted Local SEO blueprint with Google Business Profile optimization, local citation cleanup, and patient review funnels.",
    detailedBackground: "Apex Dental Specialists is a multi-location dental practice operating 5 clinics across major suburban hubs. They specialized in high-margin cosmetic procedures such as dental implants and Invisalign. However, prospective patients searching for 'emergency dentist near me' or 'best dental implants in [City]' were choosing competitors because Apex was missing from the Google Map Pack.",
    challenge: "Invisible in map packs for search terms like 'emergency dentist near me' and 'cosmetic dental implants'. Name, Address, Phone (NAP) data was inconsistent across 45 directory platforms due to recent clinic rebranding.",
    solution: [
      "Optimized 5 Google Business Profiles with weekly posts, geotagged photos & FAQ updates",
      "Created 85 location-specific landing pages with LocalBusiness Schema Markup",
      "Generated 230+ verified 5-star Google patient reviews using automated SMS workflows",
      "Cleaned up inconsistent NAP citations across 60+ business directories"
    ],
    methodologySteps: [
      {
        title: "1. NAP Consistency & Citation Cleanup",
        description: "Audited and corrected conflicting phone numbers, store names, and street addresses across Google, Apple Maps, Bing, Yelp, and Healthgrades."
      },
      {
        title: "2. Google Business Profile Signal Maximization",
        description: "Optimized GBP categories, uploaded 100+ geotagged clinic photos, and established automated weekly Q&A post updates."
      },
      {
        title: "3. Location Landing Pages & Geotargeted Schema",
        description: "Built dedicated landing pages for each clinic location featuring doctor bios, clinic maps, patient reviews, and LocalBusiness schema."
      },
      {
        title: "4. Automated Review Acquisition System",
        description: "Integrated post-appointment SMS triggers asking patients to share their experience on Google Reviews."
      }
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
      { month: "Month 4", traffic: 12600, keywords: 140 }
    ],
    techStack: ["BrightLocal", "Whitespark", "Google Business Profile", "Twilio SMS", "Schema.org Validator"],
    quote: {
      text: "Our phone lines are literally ringing non-stop. Ranking #1 on Google Maps for all 5 clinic locations filled our appointment calendars 2 months in advance.",
      author: "Dr. Sarah Lin",
      role: "Managing Director, Apex Dental Specialists"
    },
    keyTakeaways: [
      "Consistent NAP citation data is essential for Google to trust your business location signals.",
      "Fresh, verified customer reviews directly boost Map Pack proximity rankings.",
      "Location-specific landing pages bridge website search traffic with Google Maps queries."
    ],
    featuredTag: "Local Map Domination"
  },
  {
    id: "fintech-horizon",
    clientName: "Horizon Wealth Advisory",
    industry: "Financial Services & B2B",
    category: "b2b",
    timeframe: "10 Months",
    headline: "Overcame Google YMYL (Your Money Your Life) E-E-A-T Quality Guidelines",
    summary: "Built authoritativeness credentials, structured financial calculator tooling, and acquired top-tier financial editorial links.",
    detailedBackground: "Horizon Wealth Advisory provides wealth management, estate planning, and retirement advisory services for high-net-worth individuals. Following a broad Google Core Algorithm Update targeting YMYL (Your Money Your Life) sites, Horizon experienced a steep 60% traffic drop. Google's algorithm demanded strict proof of author expertise, citation of accredited sources, and bulletproof trust signals.",
    challenge: "Organic traffic drop following Google Core Algorithm Update due to missing E-E-A-T signals and author verification. Generic articles lacked accredited CFP citations and peer-reviewed disclaimers.",
    solution: [
      "Created detailed CFP (Certified Financial Planner) author bios with Person schema",
      "Added inline citations, peer-reviewed financial sources, and editorial review badges",
      "Built custom interactive retirement ROI tools earning natural editorial backlinks",
      "Optimized core web vitals and SSL security protocol parameters"
    ],
    methodologySteps: [
      {
        title: "1. E-E-A-T & Author Credential Overhaul",
        description: "Published verified CFP author pages with LinkedIn links, credentials, awards, and connected Person schema tags."
      },
      {
        title: "2. YMYL Content Editorial Review Process",
        description: "Refactored 120 financial articles to include explicit source citations, editorial review badges, and financial disclaimers."
      },
      {
        title: "3. Interactive Financial Tool Creation",
        description: "Built free retirement ROI and tax savings calculators that attracted editorial backlinks from Forbes, Bloomberg, and Business Insider."
      },
      {
        title: "4. Digital PR & Financial Media Outreach",
        description: "Secured expert commentary placements for Horizon's lead advisor in major financial publications."
      }
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
    techStack: ["WordPress", "SurferSEO", "Ahrefs", "HARO", "Looker Studio", "Google Search Console"],
    quote: {
      text: "Not only did we fully recover from the algorithm penalty, but our consultation pipeline reached an all-time high. Our team is seen as the go-to authority in our financial space.",
      author: "David Sterling",
      role: "Senior Partner, Horizon Wealth"
    },
    keyTakeaways: [
      "YMYL websites require strict author verification, credentials, and Person schema.",
      "Interactive tools serve as magnet assets for high-authority media links.",
      "Clear editorial review badges restore search engine trust following Core Update drops."
    ],
    featuredTag: "YMYL Recovery"
  }
];
