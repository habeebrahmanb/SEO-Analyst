'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { PORTFOLIO_DATA, CaseStudy } from '@/data/portfolioData';
import { 
  TrendingUp, 
  ArrowUpRight, 
  CheckCircle, 
  Award, 
  Calendar,
  X,
  Zap,
  ArrowRight
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
    <section id="portfolio" className="py-24 relative bg-[#F4F5F6] bg-grid-pattern text-[#13144D] border-t border-[#13144D]/15">
      {/* Background ambient lighting */}
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#02E3A7]/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#13144D] text-[#02E3A7] border border-[#02E3A7]/30 text-xs font-extrabold uppercase tracking-wider mb-4">
            <Award className="w-3.5 h-3.5 text-[#02E3A7]" /> Client Revenue Case Studies
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#13144D] tracking-tight mb-4">
            Proven Strategy. <span className="gradient-text-vibrant">Verifiable ROI Growth.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#13144D]/80">
            Explore how data-backed technical SEO and intent-matched content campaigns generated multi-million dollar organic revenue.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-extrabold transition-all duration-200 ${
                activeCategory === cat.id
                  ? 'btn-pro-green shadow-md text-[#13144D]'
                  : 'bg-[#FFFFFF] border border-[#13144D]/15 text-[#13144D] hover:bg-[#13144D] hover:text-[#02E3A7]'
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
              className="rounded-3xl bg-[#FFFFFF] hover:bg-[#FFFFFF] border border-[#13144D]/15 hover:border-[#02E3A7] p-7 flex flex-col justify-between relative group transition-all duration-300 shadow-md hover:shadow-xl"
            >
              <div>
                {/* Header Tag & Timeframe */}
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full text-[11px] font-extrabold bg-[#13144D] text-[#02E3A7]">
                    {project.featuredTag}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-[#13144D]/70 font-semibold">
                    <Calendar className="w-3.5 h-3.5 text-[#02E3A7]" />
                    <span>{project.timeframe} Campaign</span>
                  </div>
                </div>

                {/* Client Name & Industry */}
                <div className="mb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#13144D]/60 block">
                    {project.industry} Case Study
                  </span>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-[#13144D] group-hover:text-[#02E3A7] transition-colors leading-snug">
                    {project.clientName}
                  </h3>
                </div>

                {/* Headline */}
                <p className="text-sm font-semibold text-[#13144D]/90 mb-6 leading-relaxed">
                  "{project.headline}"
                </p>

                {/* Metrics Comparison Grid */}
                <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl bg-[#F4F5F6] border border-[#13144D]/10 mb-6">
                  {project.metrics.map((metric, i) => (
                    <div key={i} className="flex flex-col">
                      <span className="text-[11px] text-[#13144D]/70 font-medium truncate">{metric.label}</span>
                      <div className="flex items-baseline gap-1 mt-1">
                        <span className="text-base sm:text-lg font-black text-[#13144D]">{metric.after}</span>
                      </div>
                      <span className="text-[10px] font-extrabold text-[#02E3A7]">{metric.percentage} Surge</span>
                    </div>
                  ))}
                </div>

                {/* Mini SVG Trend Line Preview */}
                <div className="h-16 w-full mb-6 relative rounded-xl bg-[#F4F5F6] border border-[#02E3A7]/20 overflow-hidden p-2">
                  <svg className="w-full h-full" viewBox="0 0 300 60" preserveAspectRatio="none">
                    <path
                      d="M 0,50 Q 75,40 150,25 T 300,5"
                      fill="none"
                      stroke="#02E3A7"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setSelectedCaseStudy(project)}
                  className="flex-1 py-3 rounded-xl font-bold bg-[#F4F5F6] hover:bg-[#13144D] hover:text-[#02E3A7] border border-[#13144D]/15 text-[#13144D] text-xs flex items-center justify-center gap-1.5 transition-colors"
                >
                  Quick Preview <Zap className="w-3.5 h-3.5" />
                </button>
                <Link
                  href={`/case-studies/${project.id}`}
                  className="btn-pro-green flex-1 py-3 rounded-xl font-extrabold text-[#13144D] text-xs flex items-center justify-center gap-1.5"
                >
                  Full Case Study <ArrowUpRight className="w-4 h-4 text-[#13144D]" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View All Case Studies Link */}
        <div className="mt-12 text-center">
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#13144D] border border-[#02E3A7]/30 text-[#02E3A7] hover:text-[#6AF15C] hover:border-[#6AF15C] text-sm font-bold transition-all"
          >
            Browse All Client Growth Case Studies <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Detailed Modal Popup for Quick View */}
        {selectedCaseStudy && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#13144D]/70 backdrop-blur-md animate-in fade-in duration-200">
            <div className="bg-[#FFFFFF] border border-[#02E3A7]/30 rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl relative text-[#13144D]">
              
              {/* Close Button */}
              <button
                onClick={() => setSelectedCaseStudy(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-[#F4F5F6] text-[#13144D] hover:bg-[#13144D] hover:text-[#02E3A7] transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 mb-3">
                <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-[#13144D] text-[#02E3A7]">
                  {selectedCaseStudy.industry}
                </span>
                <span className="text-xs text-[#13144D]/70 font-semibold">{selectedCaseStudy.timeframe} Duration</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-black text-[#13144D] mb-2">
                {selectedCaseStudy.clientName}
              </h2>
              <p className="text-sm font-bold text-[#02E3A7] mb-6">
                {selectedCaseStudy.headline}
              </p>

              {/* Challenge & Strategy Breakdown */}
              <div className="space-y-6 text-sm text-[#13144D] border-t border-b border-[#13144D]/15 py-6 mb-6">
                <div>
                  <h4 className="text-xs font-bold text-[#13144D] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <Zap className="w-4 h-4 text-[#02E3A7]" /> The Challenge
                  </h4>
                  <p className="bg-[#F4F5F6] p-4 rounded-2xl border border-[#13144D]/15 text-[#13144D]">
                    {selectedCaseStudy.challenge}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-bold text-[#13144D] uppercase tracking-wider mb-3 flex items-center gap-1.5">
                    <CheckCircle className="w-4 h-4 text-[#02E3A7]" /> Execution Strategy
                  </h4>
                  <div className="space-y-2">
                    {selectedCaseStudy.solution.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs bg-[#F4F5F6] p-3 rounded-xl border border-[#13144D]/15">
                        <span className="w-5 h-5 rounded-full bg-[#13144D] text-[#02E3A7] flex items-center justify-center shrink-0 text-[10px] font-bold">
                          {idx + 1}
                        </span>
                        <span className="text-[#13144D] font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Detailed Metrics Table */}
                <div>
                  <h4 className="text-xs font-bold text-[#13144D] uppercase tracking-wider mb-3">
                    Verified Campaign ROI
                  </h4>
                  <div className="grid grid-cols-3 gap-3 text-center">
                    {selectedCaseStudy.metrics.map((m, idx) => (
                      <div key={idx} className="p-3 rounded-xl bg-[#F4F5F6] border border-[#13144D]/15">
                        <span className="text-[10px] text-[#13144D]/70 block">{m.label}</span>
                        <span className="text-xs text-[#13144D]/50 line-through">Before: {m.before}</span>
                        <span className="text-base font-black text-[#02E3A7] block mt-0.5">{m.after}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom CTAs */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href={`/case-studies/${selectedCaseStudy.id}`}
                  onClick={() => setSelectedCaseStudy(null)}
                  className="btn-pro-green flex-1 py-3.5 rounded-xl font-extrabold text-center text-sm text-[#13144D] flex items-center justify-center gap-2"
                >
                  View Full Dedicated Case Study Page &rarr;
                </Link>
                <button
                  onClick={() => setSelectedCaseStudy(null)}
                  className="px-6 py-3.5 rounded-xl font-bold bg-[#F4F5F6] border border-[#13144D]/20 text-[#13144D] text-sm hover:bg-[#13144D] hover:text-[#02E3A7] transition-colors"
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
