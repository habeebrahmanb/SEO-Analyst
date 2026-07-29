'use client';

import React, { useState } from 'react';
import Link from 'next/link';
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
  Sparkles
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
    { value: '7.8M+', label: 'Qualified Leads Generated', sub: 'High-intent B2B & B2C search queries' },
    { value: '98.4%', label: 'Client Retention Rate', sub: 'Executive-level satisfaction' },
    { value: '785+', label: 'Digital Growth Campaigns', sub: 'Multi-industry success' },
  ];

  return (
    <section id="hero" className="relative pt-36 pb-20 md:pt-44 md:pb-28 overflow-hidden bg-grid-pattern bg-[#F4F5F6] text-[#13144D]">
      {/* Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[650px] h-[650px] bg-[#02E3A7]/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-[#6AF15C]/15 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Hero Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#13144D] text-[#02E3A7] border border-[#02E3A7]/30 text-xs font-extrabold tracking-wide uppercase mb-6 shadow-md">
              <Sparkles className="w-3.5 h-3.5 text-[#6AF15C] animate-spin" style={{ animationDuration: '4s' }} />
              Enterprise Search Engineering & Revenue Strategy
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#13144D] tracking-tight leading-[1.15] mb-6">
              Drive Predictable Revenue With{' '}
              <span className="gradient-text-emerald">Precision Organic SEO</span> & Strategic Architecture.
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-[#13144D]/80 font-normal leading-relaxed mb-8 max-w-2xl">
              Turn organic search intent into trackable bottom-line sales. Custom technical audits, full-page SILO architectures, and data-driven organic campaigns built for high-growth brands.
            </p>

            {/* Quick Proposal Input Bar */}
            <div className="w-full max-w-xl mb-8">
              <form onSubmit={handleRunAudit} className="flex flex-col sm:flex-row gap-3 p-2 rounded-2xl bg-[#FFFFFF] border border-[#13144D]/15 shadow-xl">
                <div className="relative flex-1">
                  <Globe className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-[#02E3A7]" />
                  <input
                    type="url"
                    required
                    placeholder="Enter your website URL (e.g. https://yourbrand.com)"
                    value={auditUrl}
                    onChange={(e) => setAuditUrl(e.target.value)}
                    className="w-full pl-11 pr-4 py-3 rounded-xl bg-[#F4F5F6] border border-[#13144D]/10 text-[#13144D] placeholder-[#13144D]/50 text-sm focus:outline-none focus:border-[#02E3A7] transition-all"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isAuditing}
                  className="btn-pro-green px-6 py-3 rounded-xl text-sm font-bold flex items-center justify-center gap-2 whitespace-nowrap text-[#13144D]"
                >
                  {isAuditing ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-[#13144D]" />
                      Analyzing Site...
                    </>
                  ) : (
                    <>
                      Audit Site <ArrowRight className="w-4 h-4 text-[#13144D]" />
                    </>
                  )}
                </button>
              </form>

              {/* Instant Audit Result Card */}
              {auditResult && (
                <div className="mt-4 p-5 rounded-2xl bg-[#FFFFFF] border border-[#02E3A7] shadow-2xl animate-in fade-in slide-in-from-top-4 duration-300">
                  <div className="flex items-center justify-between mb-3 border-b border-[#13144D]/10 pb-3">
                    <div className="flex items-center gap-2">
                      <Zap className="w-5 h-5 text-[#02E3A7]" />
                      <span className="text-sm font-bold text-[#13144D]">SEO Revenue Audit Snapshot</span>
                    </div>
                    <div className="px-3 py-1 rounded-full bg-[#13144D] text-[#02E3A7] text-xs font-extrabold">
                      Health Score: {auditResult.score}/100
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 mb-3 text-xs">
                    <div className="p-2.5 rounded-lg bg-[#F4F5F6] text-[#13144D] border border-[#13144D]/10">
                      <span className="text-[#13144D]/60 block text-[10px]">Page Speed:</span>
                      <span className="font-bold text-[#02E3A7]">{auditResult.speed}</span>
                    </div>
                    <div className="p-2.5 rounded-lg bg-[#F4F5F6] text-[#13144D] border border-[#13144D]/10">
                      <span className="text-[#13144D]/60 block text-[10px]">Keywords Found:</span>
                      <span className="font-bold text-[#13144D]">{auditResult.keywordsFound}+</span>
                    </div>
                    <div className="p-2.5 rounded-lg bg-[#F4F5F6] text-[#13144D] border border-[#13144D]/10">
                      <span className="text-[#13144D]/60 block text-[10px]">Est. ROI Boost:</span>
                      <span className="font-bold text-[#02E3A7]">{auditResult.estRevenueBoost}</span>
                    </div>
                  </div>
                  <div className="text-xs text-[#13144D]">
                    <span className="font-bold text-[#13144D] flex items-center gap-1 mb-1">
                      <ShieldAlert className="w-3.5 h-3.5 text-[#02E3A7]" /> Priority Revenue Blockers Identified:
                    </span>
                    <ul className="list-disc list-inside space-y-1 text-[#13144D]/80 pl-1">
                      {auditResult.issues.map((issue, idx) => (
                        <li key={idx}>{issue}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-4 pt-3 border-t border-[#13144D]/10 flex justify-end">
                    <Link
                      href="/audit"
                      className="text-xs font-bold text-[#13144D] hover:text-[#02E3A7] underline flex items-center gap-1"
                    >
                      Open Full Interactive Audit Tool &rarr;
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Social Proof Badges */}
            <div className="flex flex-wrap items-center gap-6 text-xs text-[#13144D]/70 border-t border-[#13144D]/15 pt-6">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  <img className="w-7 h-7 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&auto=format&fit=crop&q=80" alt="Client Avatar" />
                  <img className="w-7 h-7 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&auto=format&fit=crop&q=80" alt="Client Avatar" />
                  <img className="w-7 h-7 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&auto=format&fit=crop&q=80" alt="Client Avatar" />
                </div>
                <div className="flex flex-col">
                  <div className="flex text-[#02E3A7]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-[#02E3A7]" />
                    ))}
                  </div>
                  <span className="text-[11px] text-[#13144D] font-bold">4.9/5 Rating Across 500+ Verified Audits</span>
                </div>
              </div>
              <div className="h-4 w-px bg-[#13144D]/20"></div>
              <div className="flex items-center gap-2 font-semibold text-[#13144D]">
                <ShieldCheck className="w-4 h-4 text-[#02E3A7]" />
                <span>Premier Google Search & Analytics Partner</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Dashboard Widget Preview */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl bg-[#13144D] p-6 text-[#FFFFFF] shadow-2xl backdrop-blur-xl border border-[#02E3A7]/30">
              
              {/* Header Bar of Card */}
              <div className="flex items-center justify-between border-b border-[#02E3A7]/20 pb-4 mb-5">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                  <div className="w-3 h-3 rounded-full bg-[#02E3A7]"></div>
                  <span className="text-xs font-mono text-[#F4F5F6]/70 ml-2">organic_growth_live.dashboard</span>
                </div>
                <span className="px-2.5 py-1 rounded-full text-[10px] font-extrabold bg-[#02E3A7]/20 text-[#02E3A7] border border-[#02E3A7]/40">
                  LIVE REVENUE ENGINE™
                </span>
              </div>

              {/* Chart Visual Simulation */}
              <div className="mb-6">
                <div className="flex items-baseline justify-between mb-2">
                  <div>
                    <span className="text-xs text-[#F4F5F6]/70 block font-medium">Organic Client Revenue (YTD)</span>
                    <span className="text-3xl font-black text-[#FFFFFF]">$2,458,900</span>
                  </div>
                  <div className="flex items-center gap-1 text-[#13144D] text-xs font-bold bg-[#02E3A7] px-2.5 py-1 rounded-full">
                    <TrendingUp className="w-3.5 h-3.5 text-[#13144D]" /> +412.5% YoY
                  </div>
                </div>

                {/* SVG Teal Trend Graph */}
                <div className="h-36 w-full pt-2">
                  <svg className="w-full h-full" viewBox="0 0 300 100" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="gradient-teal-chart" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#02E3A7" stopOpacity="0.4" />
                        <stop offset="100%" stopColor="#02E3A7" stopOpacity="0.0" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M 0,90 Q 50,70 100,55 T 200,25 T 300,8 L 300,100 L 0,100 Z"
                      fill="url(#gradient-teal-chart)"
                    />
                    <path
                      d="M 0,90 Q 50,70 100,55 T 200,25 T 300,8"
                      fill="none"
                      stroke="#02E3A7"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                    />
                    <circle cx="300" cy="8" r="6" fill="#6AF15C" className="animate-ping" />
                    <circle cx="300" cy="8" r="4" fill="#02E3A7" />
                  </svg>
                </div>
              </div>

              {/* Keyword Ranking Pulse Feed */}
              <div className="space-y-2.5">
                <span className="text-xs font-bold text-[#F4F5F6] uppercase tracking-wider block mb-1">
                  High Commercial Intent Keyword Positions
                </span>
                
                <div className="flex items-center justify-between p-2.5 rounded-xl bg-[#0d0e38] border border-[#02E3A7]/20 text-xs">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#02E3A7]"></div>
                    <span className="font-semibold text-[#FFFFFF]">"enterprise ecommerce SEO agency"</span>
                  </div>
                  <span className="font-extrabold text-[#13144D] bg-[#02E3A7] px-2 py-0.5 rounded">
                    #1 Rank
                  </span>
                </div>

                <div className="flex items-center justify-between p-2.5 rounded-xl bg-[#0d0e38] border border-[#02E3A7]/20 text-xs">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#02E3A7]"></div>
                    <span className="font-semibold text-[#FFFFFF]">"custom SEO audit services"</span>
                  </div>
                  <span className="font-extrabold text-[#13144D] bg-[#02E3A7] px-2 py-0.5 rounded">
                    #1 Rank
                  </span>
                </div>

                <div className="flex items-center justify-between p-2.5 rounded-xl bg-[#0d0e38] border border-[#02E3A7]/20 text-xs">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#6AF15C]"></div>
                    <span className="font-semibold text-[#FFFFFF]">"organic lead generation strategy"</span>
                  </div>
                  <span className="font-extrabold text-[#13144D] bg-[#6AF15C] px-2 py-0.5 rounded">
                    #2 Rank
                  </span>
                </div>
              </div>
            </div>

            {/* Floating Achievement Badge */}
            <div className="absolute -bottom-6 -left-6 bg-[#FFFFFF] border border-[#13144D]/15 p-4 rounded-2xl shadow-xl flex items-center gap-3 backdrop-blur-md hidden sm:flex text-[#13144D]">
              <div className="w-10 h-10 rounded-xl bg-[#13144D] flex items-center justify-center">
                <Award className="w-5 h-5 text-[#02E3A7]" />
              </div>
              <div>
                <span className="block text-xs font-extrabold text-[#13144D]">#1 Rated Organic Specialist</span>
                <span className="block text-[11px] text-[#13144D]/70">Verified Results & Direct ROI</span>
              </div>
            </div>

          </div>

        </div>

        {/* Statistics Grid Row */}
        <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {metrics.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#FFFFFF] hover:bg-[#F4F5F6] border border-[#13144D]/15 transition-all duration-300 flex flex-col group shadow-md hover:shadow-xl hover:border-[#02E3A7]"
            >
              <span className="text-3xl sm:text-4xl font-black text-[#13144D] mb-2 group-hover:scale-105 transition-transform duration-300">
                {item.value}
              </span>
              <span className="text-sm font-bold text-[#13144D] mb-1">{item.label}</span>
              <span className="text-xs text-[#13144D]/70">{item.sub}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
