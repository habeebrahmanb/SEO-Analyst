export interface ServiceProcessStep {
  stepNumber: string;
  title: string;
  desc: string;
}

export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface Service {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  longDescription: string;
  iconName: string;
  deliverables: string[];
  metricsImpact: string;
  badge: string;
  processSteps: ServiceProcessStep[];
  targetAudience: string[];
  toolsUsed: string[];
  kpis: string[];
  faqs: ServiceFAQ[];
}

export const SERVICES_DATA: Service[] = [
  {
    id: "technical-seo",
    title: "Technical SEO Audit & Architecture",
    shortDesc: "Eliminate crawl errors, optimize core web vitals, and build a search-engine friendly site architecture.",
    fullDesc: "Comprehensive technical audit identifying indexation blockers, rendering bottlenecks, JavaScript execution issues, canonicalization errors, and XML sitemap configurations. Built to maximize crawl efficiency and pass all Google Core Web Vitals checks.",
    longDescription: "Technical SEO is the bedrock of search visibility. Without a crawlable, fast, and properly indexed website, even the highest-quality content fails to reach its search potential. We conduct deep-dive technical diagnostics across your site infrastructure, isolating indexation traps, Core Web Vitals performance bottlenecks (LCP, INP, CLS), and Javascript hydration issues. Our framework ensures search bots crawl your most profitable pages with maximum efficiency while users experience instant, fluid interactions.",
    iconName: "Cpu",
    deliverables: [
      "Core Web Vitals & Site Speed Optimization (LCP, INP, CLS)",
      "Crawl Budget & Indexability Overhaul",
      "JavaScript & Single Page Application (SPA) Rendering Fixes",
      "Schema Markup (Structured Data) Implementation",
      "Mobile-First Indexing & Responsive Architecture Audit",
      "Canonicalization & Duplicate Content Defense",
      "Robots.txt & XML Sitemap Optimization"
    ],
    metricsImpact: "Avg. +140% Crawl Efficiency & Sub-Second Page Loads",
    badge: "Core Service",
    processSteps: [
      {
        stepNumber: "01",
        title: "Deep Technical Crawl & Server Log Analysis",
        desc: "We analyze server access logs using Screaming Frog and Botify to trace exact Googlebot crawl paths, wasted budget, and HTTP status code bottlenecks."
      },
      {
        stepNumber: "02",
        title: "Core Web Vitals & Rendering Remediation",
        desc: "We refactor critical rendering paths, optimize images to modern WebP/AVIF formats, defer render-blocking JavaScript, and eliminate layout shifts."
      },
      {
        stepNumber: "03",
        title: "Structured Data & Entity Graph Deployment",
        desc: "Inject validated JSON-LD schema across Organization, Product, Article, and FAQ entities to earn prominent rich snippet features in search results."
      },
      {
        stepNumber: "04",
        title: "Continuous Indexing & Monitoring Setup",
        desc: "Configure automated Google Search Console monitoring and custom alerts to detect crawl drops, indexation failures, or dynamic rendering breaks immediately."
      }
    ],
    targetAudience: [
      "Enterprise Websites with 10,000+ indexed URLs",
      "E-Commerce Brands built on custom stacks, Shopify, or Magento",
      "SaaS Platforms running React, Next.js, Vue, or Angular single-page applications",
      "Publishers & Media Outlets suffering post-migration traffic drops"
    ],
    toolsUsed: ["Screaming Frog", "Google Search Console", "Lighthouse", "Chrome DevTools", "PageSpeed Insights", "DeepCrawl"],
    kpis: [
      "Google PageSpeed Score (Target: 95+ Mobile)",
      "Interaction to Next Paint (INP < 200ms)",
      "Largest Contentful Paint (LCP < 2.5s)",
      "Crawl Efficiency Ratio (% of key URLs regularly crawled)"
    ],
    faqs: [
      {
        question: "How long does a Technical SEO audit take to complete?",
        answer: "A comprehensive audit takes between 5 to 10 business days depending on site scale. You receive an actionable prioritized Jira/Trello ticketing checklist for your engineering team."
      },
      {
        question: "Do you fix the technical issues yourself or just provide recommendations?",
        answer: "Both! We work directly with your engineering and DevOps team via pull requests or implement fixes directly if granted CMS/code access."
      },
      {
        question: "Why are my Core Web Vitals failing despite fast internet speeds?",
        answer: "Core Web Vitals measure real-user experiences on mobile devices. Heavy JavaScript execution, uncompressed assets, third-party tracking scripts, and layout shifts during page load are common culprits."
      }
    ]
  },
  {
    id: "on-page-content",
    title: "On-Page SEO & Content Optimization",
    shortDesc: "Align page content with user search intent, optimize topical authority, and refine page structure.",
    fullDesc: "Strategic entity mapping and semantic content optimization that boosts keyword relevance and CTR. We utilize TF-IDF analysis, NLP keyword optimization, title tag testing, and internal linking SILO structures.",
    longDescription: "Modern search engines do not look for exact keyword repetitions; they measure topical authority, entity coverage, and how effectively your content answers user search intent. Our On-Page SEO service transforms average content into comprehensive, authoritative pillar assets. We systematically analyze top-ranking SERP competitors, optimize headings and semantic NLP term frequency, and construct rigid internal SILO link paths that distribute page equity directly to high-converting landing pages.",
    iconName: "FileText",
    deliverables: [
      "Semantic Search & Entity-Based Content Strategy",
      "Title Tag, Meta Description & H-Tag Copywriting for High CTR",
      "Internal Link SILO Architecture Optimization",
      "Keyword Intent Mapping (Informational, Transactional, Navigational)",
      "Duplicate Content & Thin Content Consolidation",
      "Featured Snippet & FAQ Drawer Capture Strategy"
    ],
    metricsImpact: "Avg. +3.2x Organic Keyword Rankings",
    badge: "High Growth",
    processSteps: [
      {
        stepNumber: "01",
        title: "Search Intent & Entity Gap Audit",
        desc: "Extract target entities and semantic topic trees using Surfer SEO and Clearscope to identify missing informational layers."
      },
      {
        stepNumber: "02",
        title: "Page Hierarchy & CTR Copy Optimization",
        desc: "Refactor heading tags (H1-H4), rewrite compelling titles and meta descriptions engineered for high SERP Click-Through Rates."
      },
      {
        stepNumber: "03",
        title: "SILO Internal Link Mapping",
        desc: "Establish directional internal link clusters connecting supporting informational articles directly to primary money pages."
      },
      {
        stepNumber: "04",
        title: "SERP Feature & Snippet Capture",
        desc: "Format concise definitions, bulleted lists, and tables designed specifically to trigger position zero Google featured snippets."
      }
    ],
    targetAudience: [
      "B2B SaaS Companies seeking lead-generating bottom-of-funnel content",
      "Service Providers aiming to rank for highly competitive regional keywords",
      "Content teams looking to scale organic search traffic without paid ads",
      "Websites needing post-Google Core Update content elevation"
    ],
    toolsUsed: ["SurferSEO", "Clearscope", "Ahrefs", "SEMrush", "Grammarly", "Google Trends"],
    kpis: [
      "Top 3 SERP Ranking Positions",
      "Organic Click-Through Rate (CTR)",
      "Topical Authority Score / Keyword Coverage",
      "Organic Time-on-Page & Reduced Bounce Rate"
    ],
    faqs: [
      {
        question: "What is a Content SILO structure?",
        answer: "A SILO structure organizes website content into clear topical categories. By linking related articles to a parent hub page, you establish high topical authority and help search engines understand parent-child page relationships."
      },
      {
        question: "How soon can we see ranking improvements from on-page changes?",
        answer: "On-page and structural content updates often yield ranking improvements within 2 to 4 weeks after Google re-crawls and re-indexes the updated pages."
      }
    ]
  },
  {
    id: "off-page-links",
    title: "High-DR Link Building & Digital PR",
    shortDesc: "Acquire authoritative, niche-relevant backlinks through white-hat outreach and custom digital PR.",
    fullDesc: "Ethical link building strategy that drives real domain rating authority and referral traffic. We conduct unlinked brand mention outreach, guest editorial placements, resource link acquisition, and competitor backlink gap analysis.",
    longDescription: "Backlinks remain one of Google's top ranking factors. However, automated spam links or low-quality link farms can severely trigger manual penalties. Our Off-Page Link Building strategy focuses exclusively on high-authority (DR 60+), niche-relevant websites with real organic traffic. Through personalized editorial outreach, original research data assets, unlinked brand mention reclamation, and digital PR campaigns, we build a resilient backlink profile that permanently elevates your website's domain trust.",
    iconName: "Link2",
    deliverables: [
      "White-Hat Editorial Guest Post Outreach (DR 60+ Sites)",
      "Unlinked Brand Mention & Re-claiming Broken Links",
      "Digital PR Link Bait Content & Original Data Assets",
      "Competitor Backlink Gap Identification",
      "Toxic Backlink Audit & Disavow File Management",
      "Niche Resource & Vendor Directory Placements"
    ],
    metricsImpact: "Avg. +25 Domain Authority Points",
    badge: "Authority Boost",
    processSteps: [
      {
        stepNumber: "01",
        title: "Backlink Gap & Toxic Link Audit",
        desc: "Analyze competitor backlink profiles to identify authoritative domain targets while cleaning spammy toxic inbound links."
      },
      {
        stepNumber: "02",
        title: "Link-Worthy Asset Creation",
        desc: "Produce original research studies, industry survey reports, or interactive calculators that naturally attract media editorial links."
      },
      {
        stepNumber: "03",
        title: "Personalized Publisher Outreach",
        desc: "Execute targeted email outreach to industry journalists, editors, and webmasters offering high-value guest contributions."
      },
      {
        stepNumber: "04",
        title: "Anchor Text & Target URL Distribution",
        desc: "Maintain natural anchor text distribution (brand, exact match, partial match) while directing domain equity to strategic pages."
      }
    ],
    targetAudience: [
      "High-Growth Companies competing in high-difficulty keyword spaces",
      "E-Commerce Stores looking to build foundational brand trust",
      "SaaS Startups looking to accelerate domain rating (DR) growth",
      "Niche Authority Sites scaling organic search reach"
    ],
    toolsUsed: ["Ahrefs", "Pitchbox", "BuzzStream", "Hunter.io", "HARO / Connectively", "Majestic"],
    kpis: [
      "Domain Rating (DR) / Domain Authority (DA) Growth",
      "Number of Live DR 60+ Referring Domains",
      "Referral Organic Traffic volume",
      "Target Page Keyword Velocity"
    ],
    faqs: [
      {
        question: "Are your link building techniques safe from Google penalties?",
        answer: "Yes, 100%. We practice strict white-hat editorial link building. We never buy PBN links, link farm packages, or automated spam comments."
      },
      {
        question: "How do you select target domains for backlink outreach?",
        answer: "We evaluate real organic search traffic (minimum 5,000+ monthly visits), organic keyword rankings, topical relevance, and domain rating (DR 50+) before initiating outreach."
      }
    ]
  },
  {
    id: "local-seo",
    title: "Local SEO & Google Business Profile",
    shortDesc: "Dominate the local 3-pack, capture high-intent local searchers, and drive foot traffic & inbound calls.",
    fullDesc: "Geotargeted optimization strategy designed for local service businesses and multi-location enterprises. Full Google Business Profile optimization, NAP consistency alignment, local citation building, and review generation workflows.",
    longDescription: "Over 46% of all Google searches have explicit local intent. For service-based businesses, law firms, dental clinics, or multi-location retailers, capturing a top spot in the Google Local 3-Pack delivers higher conversion rates than conventional web results. We optimize your Google Business Profile (GBP), ensure absolute Name-Address-Phone (NAP) consistency across top directories, build localized schema tags, and deploy automated review acquisition funnels that dominate your regional search market.",
    iconName: "MapPin",
    deliverables: [
      "Google Business Profile (GBP) Full Optimization & Post Strategy",
      "Local Citation Cleanup & Consistent NAP Syndication",
      "Geotargeted Landing Page Creation & Schema Markup",
      "Local Review Acquisition & Management Strategy",
      "Geo-grid Keyword Ranking & Map Visibility Tracking",
      "Local Competitor Map Pack Audit"
    ],
    metricsImpact: "Avg. +210% Local Map Pack Calls",
    badge: "Local Domination",
    processSteps: [
      {
        stepNumber: "01",
        title: "Google Business Profile Optimization",
        desc: "Maximize GBP primary/secondary categories, business descriptions, high-res photos, products, and operational attributes."
      },
      {
        stepNumber: "02",
        title: "Citation Audit & NAP Uniformity",
        desc: "Clean up conflicting Name, Address, and Phone directory listings on Yelp, Apple Maps, Bing Places, and regional directories."
      },
      {
        stepNumber: "03",
        title: "Localized Content & Schema Markup",
        desc: "Publish dedicated location landing pages with embedded LocalBusiness schema, geo-coordinates, and local service area text."
      },
      {
        stepNumber: "04",
        title: "Review Acquisition System Setup",
        desc: "Implement automated SMS/Email workflows prompting satisfied customers to leave verified 5-star Google reviews."
      }
    ],
    targetAudience: [
      "Multi-Location Franchises & Enterprise Retailers",
      "Healthcare Practices, Dentists, & Medical Clinics",
      "Law Firms & Professional Financial Advisors",
      "Home Service Providers (Plumbing, HVAC, Electrical, Roofing)"
    ],
    toolsUsed: ["BrightLocal", "Whitespark", "Google Business Profile", "Geo-Grid Rank Tracker", "Yext"],
    kpis: [
      "Google Maps 3-Pack Search Visibility",
      "Direct Inbound Phone Calls & Directions Requests",
      "Google Business Profile Impressions & Engagement",
      "Verified 5-Star Customer Reviews Count"
    ],
    faqs: [
      {
        question: "Why is my business not showing up in the Google Map Pack?",
        answer: "Common reasons include incomplete GBP optimization, category mismatch, inconsistent NAP data across citations, poor proximity signals, or lack of recent customer reviews."
      },
      {
        question: "Can you help multi-location businesses with Local SEO?",
        answer: "Absolutely. We build localized landing page architectures and manage multi-location GBP accounts with centralized reporting."
      }
    ]
  },
  {
    id: "ecommerce-seo",
    title: "E-Commerce SEO Expansion",
    shortDesc: "Scale revenue for Shopify, WooCommerce & Magento stores with product category ranking strategies.",
    fullDesc: "Tailored e-commerce optimization targeted at category page rankings, faceted navigation fix, schema product rich snippets, image search optimization, and conversion rate integration.",
    longDescription: "E-Commerce websites face unique technical and structural challenges: indexation bloat from faceted filter parameters, thin product descriptions, dynamic URL parameters, and competitive shopping queries. Our E-Commerce SEO growth framework solves these pain points systematically. We optimize your high-intent category hub pages, implement product schema rich snippets (pricing, stock, reviews), control faceted indexation parameters, and optimize product images for high-converting visual search traffic.",
    iconName: "ShoppingCart",
    deliverables: [
      "Faceted Navigation & Facet Indexation Management",
      "Product & Category Schema Markup (Price, Aggregate Rating)",
      "High-Intent E-Commerce Keyword Research",
      "Product Image Optimization & Visual Search SEO",
      "Conversion Rate Optimization (CRO) & User Experience Tweaks",
      "Out-of-Stock Product Management Guidelines"
    ],
    metricsImpact: "Avg. +380% Organic E-Commerce Sales",
    badge: "E-Com Scaling",
    processSteps: [
      {
        stepNumber: "01",
        title: "Faceted Filter & Indexation Fix",
        desc: "Configure canonical tags, robots directives, and AJAX filters to prevent search engines from crawling millions of useless product variation combinations."
      },
      {
        stepNumber: "02",
        title: "Category & Collection Page Optimization",
        desc: "Transform thin category grids into high-ranking topical landing pages enriched with buyer guides and optimized sub-category links."
      },
      {
        stepNumber: "03",
        title: "Rich Merchant Schema Deployment",
        desc: "Add comprehensive Product, Offer, and Merchant Return policy JSON-LD markup to unlock rich star ratings and pricing badges in Google SERPs."
      },
      {
        stepNumber: "04",
        title: "Internal Link Cross-Merchandising",
        desc: "Implement intelligent cross-selling content blocks and blog-to-product linking structures to convert reader traffic into buyers."
      }
    ],
    targetAudience: [
      "Shopify & Shopify Plus Merchants",
      "WooCommerce & BigCommerce Stores",
      "Custom Enterprise Headless Commerce Stacks",
      "Brands transitioning from Paid Ads to Organic Revenue"
    ],
    toolsUsed: ["Shopify Plus", "Screaming Frog", "Google Merchant Center", "Ahrefs", "Hotjar", "Google Search Console"],
    kpis: [
      "Organic Revenue & E-Commerce Conversion Rate",
      "Category Page Keyword Rankings",
      "Rich Product Snippet SERP Coverage",
      "Average Order Value (AOV) from Search Traffic"
    ],
    faqs: [
      {
        question: "How do you handle out-of-stock products for SEO?",
        answer: "We keep out-of-stock product pages live with clear back-in-stock notifications or 301 redirect discontinued products to the closest parent category to preserve link authority."
      },
      {
        question: "Can SEO replace paid Meta/Google Shopping Ads?",
        answer: "SEO creates a high-margin organic revenue baseline that reduces dependency on escalating Paid Ad Acquisition Costs (CAC), providing predictable compound growth."
      }
    ]
  },
  {
    id: "analytics-reporting",
    title: "SEO Analytics, GA4 & Custom Dashboards",
    shortDesc: "Turn raw search traffic data into clear actionable revenue insights with automated Looker Studio reporting.",
    fullDesc: "Complete setup of Google Analytics 4 (GA4), Google Search Console (GSC), custom conversion event tracking, search attribution models, and monthly ROI strategy reports.",
    longDescription: "Without accurate data attribution, SEO strategy is guesswork. We build enterprise-grade analytics tracking frameworks that accurately attribute search traffic to real business revenue, conversions, and pipeline growth. We configure custom Google Analytics 4 (GA4) event funnels, Google Search Console regex tracking, lead form attribution, and interactive Looker Studio dashboards so executives can view ROI at a glance.",
    iconName: "BarChart3",
    deliverables: [
      "GA4 Custom Events & Conversion Funnel Setup",
      "Google Search Console Integration & Advanced Regex Tracking",
      "Automated Looker Studio Executive Dashboard",
      "Keyword Rank Tracking (Daily Desktop & Mobile Monitoring)",
      "Monthly Strategy Consultations & Actionable Prioritization",
      "Multi-Touch Search Attribution Modeling"
    ],
    metricsImpact: "100% Transparent Attribution",
    badge: "Data Focused",
    processSteps: [
      {
        stepNumber: "01",
        title: "GA4 & Tag Manager Audit",
        desc: "Audit current tracking tags, resolve duplicate conversion triggers, and configure Google Tag Manager (GTM) custom event variables."
      },
      {
        stepNumber: "02",
        title: "Conversion Funnel & Goal Mapping",
        desc: "Set up tracking for lead form submissions, phone call clicks, PDF downloads, product checkout steps, and trial registrations."
      },
      {
        stepNumber: "03",
        title: "Custom Looker Studio Dashboard Creation",
        desc: "Build real-time, interactive executive dashboards synthesizing GA4, GSC, backlink metrics, and keyword position trends."
      },
      {
        stepNumber: "04",
        title: "Monthly Strategy Review",
        desc: "Conduct monthly video consultations breaking down metrics performance, key wins, and technical action items for the coming sprint."
      }
    ],
    targetAudience: [
      "CMOs & Marketing Executives requiring transparent ROI reports",
      "In-House Marketing Teams needing advanced GA4/GSC configuration",
      "E-Commerce & SaaS Brands scaling multi-channel search campaigns",
      "Agencies seeking white-label SEO analytics dashboards"
    ],
    toolsUsed: ["Google Analytics 4", "Google Tag Manager", "Looker Studio", "Google Search Console", "BigQuery", "Supermetrics"],
    kpis: [
      "Organic Conversion Rate & Lead Count",
      "Organic Revenue Attribution Accuracy",
      "Keyword Impressions & CTR Trend Graphs",
      "Assisted Organic Conversions Ratio"
    ],
    faqs: [
      {
        question: "Why does my GA4 show lower traffic numbers than Google Search Console?",
        answer: "Google Search Console measures total SERP impressions and clicks, whereas GA4 records actual user sessions on site (excluding ad-block users or non-consented tracking)."
      },
      {
        question: "Will I get access to real-time custom dashboards?",
        answer: "Yes, you receive permanent 24/7 access to an interactive Looker Studio dashboard updated daily with your latest traffic and ranking performance data."
      }
    ]
  }
];
