'use client';

import React, { useState } from 'react';
import { PORTFOLIO_DATA, CaseStudy } from '@/data/portfolioData';
import { 
  TrendingUp, 
  ArrowUpRight, 
  CheckCircle, 
  Layers, 
  Award, 
  BarChart, 
  Calendar,
  X,
  ExternalLink,
  Zap
} from 'lucide-react';

export function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null);

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'ecommerce', label: 'E-Commerce' },
    { id: 'saas', label: 'B2B SaaS' },
    { id: 'local', label: 'Local & Healthcare' },
    { id: 'b2b', label: 'Finance & B2B' },
  ];

  const filteredProjects = activeCategory === 'all'
    ? PORTFOLIO_DATA
    : PORTFOLIO_DATA.filter((p) => p.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 relative bg-grid-pattern bg-white">
      {/* Background ambient lighting */}
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-4">
            <Award className="w-3.5 h-3.5 text-emerald-600" /> Client Revenue Case Studies
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Proven Strategy. <span className="gradient-text-emerald">Verifiable ROI Growth.</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Explore how data-backed technical SEO and intent-matched content campaigns generated multi-million dollar organic revenue.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all duration-200 ${
                activeCategory === cat.id
                  ? 'btn-pro-green shadow-md'
                  : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-slate-300'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-3xl bg-white hover:bg-emerald-50/20 border border-slate-200 hover:border-emerald-300 p-7 flex flex-col justify-between relative group transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <div>
                {/* Header Tag & Timeframe */}
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full text-[11px] font-extrabold bg-emerald-100 text-emerald-800 border border-emerald-200">
                    {project.featuredTag}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 font-semibold">
                    <Calendar className="w-3.5 h-3.5 text-emerald-600" />
                    <span>{project.timeframe} Campaign</span>
                  </div>
                </div>

                {/* Client Name & Industry */}
                <div className="mb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
                    {project.industry} Case Study
                  </span>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 group-hover:text-emerald-700 transition-colors leading-snug">
                    {project.clientName}
                  </h3>
                </div>

                {/* Headline */}
                <p className="text-sm font-semibold text-slate-700 mb-6 leading-relaxed">
                  "{project.headline}"
                </p>

                {/* Metrics Comparison Grid */}
                <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-200 mb-6">
                  {project.metrics.map((metric, i) => (
                    <div key={i} className="flex flex-col">
                      <span className="text-[11px] text-slate-500 font-medium truncate">{metric.label}</span>
                      <div className="flex items-baseline gap-1 mt-1">
                        <span className="text-base sm:text-lg font-black text-slate-900">{metric.after}</span>
                      </div>
                      <span className="text-[10px] font-extrabold text-emerald-700">{metric.percentage} Surge</span>
                    </div>
                  ))}
                </div>

                {/* Mini SVG Trend Line Preview */}
                <div className="h-16 w-full mb-6 relative rounded-xl bg-emerald-50/50 border border-emerald-100 overflow-hidden p-2">
                  <svg className="w-full h-full" viewBox="0 0 300 60" preserveAspectRatio="none">
                    <path
                      d="M 0,50 Q 75,40 150,25 T 300,5"
                      fill="none"
                      stroke="#059669"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={() => setSelectedCaseStudy(project)}
                className="w-full py-3 rounded-xl font-bold bg-slate-50 hover:bg-emerald-50 border border-slate-200 text-slate-900 text-xs flex items-center justify-center gap-2 transition-colors"
              >
                Read Full Campaign Breakdown <ArrowUpRight className="w-4 h-4 text-emerald-600" />
              </button>
            </div>
          ))}
        </div>

        {/* Detailed Modal Popup for Selected Case Study */}
        {selectedCaseStudy && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md animate-in fade-in duration-200">
            <div className="bg-white border border-slate-200 rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl relative">
              
              {/* Close Button */}
              <button
                onClick={() => setSelectedCaseStudy(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 mb-3">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 border border-emerald-200">
                  {selectedCaseStudy.industry}
                </span>
                <span className="text-xs text-slate-500 font-semibold">{selectedCaseStudy.timeframe} Duration</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-2">
                {selectedCaseStudy.clientName}
              </h2>
              <p className="text-sm font-semibold text-emerald-700 mb-6">
                {selectedCaseStudy.headline}
              </p>

              {/* Challenge & Strategy Breakdown */}
              <div className="space-y-6 text-sm text-slate-700 border-t border-b border-slate-100 py-6 mb-6">
                <div>
                  <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <Zap className="w-4 h-4 text-emerald-600" /> The Challenge
                  </h4>
                  <p className="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-slate-700">
                    {selectedCaseStudy.challenge}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                    <CheckCircle className="w-4 h-4 text-emerald-600" /> Execution Strategy
                  </h4>
                  <div className="space-y-2">
                    {selectedCaseStudy.solution.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs bg-slate-50 p-3 rounded-xl border border-slate-200">
                        <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 text-[10px] font-bold">
                          {idx + 1}
                        </span>
                        <span className="text-slate-800 font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Detailed Metrics Table */}
                <div>
                  <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-3">
                    Verified Campaign ROI
                  </h4>
                  <div className="grid grid-cols-3 gap-3 text-center">
                    {selectedCaseStudy.metrics.map((m, idx) => (
                      <div key={idx} className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                        <span className="text-[10px] text-slate-500 block">{m.label}</span>
                        <span className="text-xs text-slate-400 line-through">Before: {m.before}</span>
                        <span className="text-base font-black text-emerald-700 block mt-0.5">{m.after}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom CTAs */}
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="#contact"
                  onClick={() => setSelectedCaseStudy(null)}
                  className="btn-pro-green flex-1 py-3.5 rounded-xl font-bold text-center text-sm"
                >
                  Get Similar Growth For Your Brand
                </a>
                <button
                  onClick={() => setSelectedCaseStudy(null)}
                  className="px-6 py-3.5 rounded-xl font-bold bg-slate-100 border border-slate-200 text-slate-700 text-sm hover:bg-slate-200 transition-colors"
                >
                  Close Window
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
