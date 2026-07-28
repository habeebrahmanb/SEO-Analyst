'use client';

import React, { useState } from 'react';
import { 
  TrendingUp, 
  Search, 
  ArrowRight, 
  CheckCircle2, 
  BarChart2, 
  Globe, 
  Zap, 
  Award, 
  Star,
  ShieldAlert,
  ShieldCheck,
  Loader2,
  Sparkles,
  DollarSign,
  Users
} from 'lucide-react';

export function HeroSection() {
  const [auditUrl, setAuditUrl] = useState('');
  const [isAuditing, setIsAuditing] = useState(false);
  const [auditResult, setAuditResult] = useState<null | {
    score: number;
    speed: string;
    keywordsFound: number;
    issues: string[];
    estRevenueBoost: string;
  }>(null);

  const handleRunAudit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!auditUrl) return;
    setIsAuditing(true);
    setAuditResult(null);

    setTimeout(() => {
      setIsAuditing(false);
      setAuditResult({
        score: Math.floor(Math.random() * 25) + 68,
        speed: '1.4s LCP',
        keywordsFound: Math.floor(Math.random() * 950) + 520,
        estRevenueBoost: '$140,000 - $350,000/yr',
        issues: [
          'Missing high-intent commercial schema markup',
          'Unoptimized title tags limiting CTR by ~28%',
          'Core Web Vitals LCP delay on top landing pages'
        ]
      });
    }, 1800);
  };

  const metrics = [
    { value: '$10.2B+', label: 'Client Revenue Driven', sub: 'Verified across 1,000+ campaigns' },
    { value: '7.8M+', label: 'Qualified Leads Generated', sub: 'High-intent B2B & B2C inquiries' },
    { value: '98.4%', label: 'Client Retention Rate', sub: 'Industry-leading satisfaction' },
    { value: '785+', label: 'Digital Growth Specialists', sub: 'Tech-enabled execution team' },
  ];

  return (
    <section id="hero" className="relative pt-36 pb-20 md:pt-44 md:pb-28 overflow-hidden bg-grid-pattern bg-white">
      {/* Ambient background glow spheres */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[650px] h-[650px] bg-emerald-500/10 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-emerald-600/5 rounded-full blur-[130px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Hero Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold tracking-wide uppercase mb-6 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600 animate-spin" style={{ animationDuration: '4s' }} />
              Enterprise SEO Technology & Custom Organic Strategy
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15] mb-6">
              Drive Predictable Revenue With{' '}
              <span className="gradient-text-emerald">Tech-Enabled SEO</span> & Content Growth.
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-slate-600 font-normal leading-relaxed mb-8 max-w-2xl">
              Turn organic search intent into trackable bottom-line sales. Custom technical audits and data-driven organic campaigns built for high-growth brands.
            </p>

            {/* Quick Proposal Input Bar */}
            <div className="w-full max-w-xl mb-8">
              <form onSubmit={handleRunAudit} className="flex flex-col sm:flex-row gap-3 p-2 rounded-2xl bg-white border border-slate-200 shadow-xl">
                <div className="relative flex-1">
                  <Globe className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-emerald-600" />
                  <input
                    type="url"
                    required
                    placeholder="Enter your website URL (e.g. https://yourbrand.com)"
                    value={auditUrl}
                    onChange={(e) => setAuditUrl(e.target.value)}
                    className="w-full pl-11 pr-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isAuditing}
                  className="btn-pro-green px-6 py-3 rounded-xl text-sm font-bold flex items-center justify-center gap-2 whitespace-nowrap"
                >
                  {isAuditing ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-white" />
                      Analyzing Site...
                    </>
                  ) : (
                    <>
                      Send Me Proposal <ArrowRight className="w-4 h-4 text-white" />
                    </>
                  )}
                </button>
              </form>

              {/* Instant Audit Result Card */}
              {auditResult && (
                <div className="mt-4 p-5 rounded-2xl bg-white border border-emerald-200 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-300">
                  <div className="flex items-center justify-between mb-3 border-b border-slate-100 pb-3">
                    <div className="flex items-center gap-2">
                      <Zap className="w-5 h-5 text-emerald-600" />
                      <span className="text-sm font-bold text-slate-900">SEO Revenue Audit Snapshot</span>
                    </div>
                    <div className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-extrabold border border-emerald-300">
                      Health Score: {auditResult.score}/100
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 mb-3 text-xs">
                    <div className="p-2.5 rounded-lg bg-slate-50 text-slate-700 border border-slate-200">
                      <span className="text-slate-500 block text-[10px]">Page Speed:</span>
                      <span className="font-bold text-emerald-600">{auditResult.speed}</span>
                    </div>
                    <div className="p-2.5 rounded-lg bg-slate-50 text-slate-700 border border-slate-200">
                      <span className="text-slate-500 block text-[10px]">Keywords Found:</span>
                      <span className="font-bold text-slate-900">{auditResult.keywordsFound}+</span>
                    </div>
                    <div className="p-2.5 rounded-lg bg-slate-50 text-slate-700 border border-slate-200">
                      <span className="text-slate-500 block text-[10px]">Est. ROI Boost:</span>
                      <span className="font-bold text-emerald-600">{auditResult.estRevenueBoost}</span>
                    </div>
                  </div>
                  <div className="text-xs text-slate-700">
                    <span className="font-bold text-emerald-700 flex items-center gap-1 mb-1">
                      <ShieldAlert className="w-3.5 h-3.5" /> High-Priority Revenue Blockers Identified:
                    </span>
                    <ul className="list-disc list-inside space-y-1 text-slate-600 pl-1">
                      {auditResult.issues.map((issue, idx) => (
                        <li key={idx}>{issue}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-100 flex justify-end">
                    <a
                      href="#contact"
                      className="text-xs font-bold text-emerald-600 hover:text-emerald-700 flex items-center gap-1 hover:underline"
                    >
                      Get Custom 25-Page Growth & Revenue Plan &rarr;
                    </a>
                  </div>
                </div>
              )}
            </div>

            {/* Social Proof Badges */}
            <div className="flex flex-wrap items-center gap-6 text-xs text-slate-500 border-t border-slate-200 pt-6">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  <img className="w-7 h-7 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&auto=format&fit=crop&q=80" alt="Client Avatar" />
                  <img className="w-7 h-7 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&auto=format&fit=crop&q=80" alt="Client Avatar" />
                  <img className="w-7 h-7 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&auto=format&fit=crop&q=80" alt="Client Avatar" />
                </div>
                <div className="flex flex-col">
                  <div className="flex text-emerald-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-emerald-500" />
                    ))}
                  </div>
                  <span className="text-[11px] text-slate-700 font-semibold">4.9/5 Rating Across 500+ Client Reviews</span>
                </div>
              </div>
              <div className="h-4 w-px bg-slate-200"></div>
              <div className="flex items-center gap-2 font-medium text-slate-700">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Premier Google & Meta Certified Partner</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Dashboard Widget Preview */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl bg-white p-6 border border-slate-200 shadow-2xl shadow-slate-200/60 backdrop-blur-xl">
              
              {/* Header Bar of Card */}
              <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-5">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                  <span className="text-xs font-mono text-slate-500 ml-2">organic_growth_live.dashboard</span>
                </div>
                <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                  LIVE REVENUE ENGINE™
                </span>
              </div>

              {/* Chart Visual Simulation */}
              <div className="mb-6">
                <div className="flex items-baseline justify-between mb-2">
                  <div>
                    <span className="text-xs text-slate-500 block font-medium">Organic Client Revenue (YTD)</span>
                    <span className="text-3xl font-black text-slate-900">$2,458,900</span>
                  </div>
                  <div className="flex items-center gap-1 text-emerald-700 text-xs font-bold bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                    <TrendingUp className="w-3.5 h-3.5 text-emerald-600" /> +412.5% YoY
                  </div>
                </div>

                {/* SVG Emerald Green Trend Graph */}
                <div className="h-36 w-full pt-2">
                  <svg className="w-full h-full" viewBox="0 0 300 100" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="gradient-emerald-chart" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#10b981" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="#10b981" stopOpacity="0.0" />
                      </linearGradient>
                    </defs>
                    {/* Area under curve */}
                    <path
                      d="M 0,90 Q 50,70 100,55 T 200,25 T 300,8 L 300,100 L 0,100 Z"
                      fill="url(#gradient-emerald-chart)"
                    />
                    {/* Line path */}
                    <path
                      d="M 0,90 Q 50,70 100,55 T 200,25 T 300,8"
                      fill="none"
                      stroke="#059669"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                    />
                    {/* Pulsing Green Dots */}
                    <circle cx="300" cy="8" r="6" fill="#10b981" className="animate-ping" />
                    <circle cx="300" cy="8" r="4" fill="#059669" />
                  </svg>
                </div>
              </div>

              {/* Keyword Ranking Pulse Feed */}
              <div className="space-y-2.5">
                <span className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-1">
                  High Commercial Intent Keyword Positions
                </span>
                
                <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                    <span className="font-semibold text-slate-800">"enterprise ecommerce SEO agency"</span>
                  </div>
                  <span className="font-extrabold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded border border-emerald-200">
                    #1 Rank
                  </span>
                </div>

                <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                    <span className="font-semibold text-slate-800">"custom SEO audit services"</span>
                  </div>
                  <span className="font-extrabold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded border border-emerald-200">
                    #1 Rank
                  </span>
                </div>

                <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                    <span className="font-semibold text-slate-800">"organic lead generation strategy"</span>
                  </div>
                  <span className="font-extrabold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded border border-emerald-200">
                    #2 Rank
                  </span>
                </div>
              </div>
            </div>

            {/* Floating Achievement Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white border border-slate-200 p-4 rounded-2xl shadow-xl flex items-center gap-3 backdrop-blur-md hidden sm:flex">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 border border-emerald-200 flex items-center justify-center">
                <Award className="w-5 h-5 text-emerald-600" />
              </div>
              <div>
                <span className="block text-xs font-bold text-slate-900">#1 Rated Growth Agency</span>
                <span className="block text-[11px] text-slate-500">Verified Results & Direct ROI</span>
              </div>
            </div>

          </div>

        </div>

        {/* Statistics Grid Row */}
        <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {metrics.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white hover:bg-emerald-50/50 border border-slate-200 hover:border-emerald-300 transition-all duration-300 flex flex-col group shadow-sm hover:shadow-md"
            >
              <span className="text-3xl sm:text-4xl font-black gradient-text-emerald mb-2 group-hover:scale-105 transition-transform duration-300">
                {item.value}
              </span>
              <span className="text-sm font-bold text-slate-900 mb-1">{item.label}</span>
              <span className="text-xs text-slate-500">{item.sub}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
