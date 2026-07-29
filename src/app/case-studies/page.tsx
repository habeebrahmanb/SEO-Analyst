import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppWidget } from '@/components/WhatsAppWidget';
import { PORTFOLIO_DATA } from '@/data/portfolioData';
import { Award, ArrowRight, Calendar, TrendingUp } from 'lucide-react';

export const metadata: Metadata = {
  title: "SEO Case Studies & Organic Revenue Results | SEO Analyst",
  description: "Verifiable case studies showing organic revenue surge from $45K to $280K/mo, #1 ranking for commercial queries, local map pack domination, and YMYL algorithm recovery.",
};

export default function CaseStudiesIndexPage() {
  return (
    <div className="min-h-screen bg-[#F4F5F6] text-[#13144D] flex flex-col selection:bg-[#02E3A7] selection:text-[#13144D]">
      <Header />

      <main className="flex-grow pt-32 pb-24">
        {/* Hero Banner */}
        <section className="relative py-16 bg-grid-pattern overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#13144D] text-[#02E3A7] border border-[#02E3A7]/30 text-xs font-extrabold uppercase tracking-wider mb-6">
              <Award className="w-4 h-4 text-[#02E3A7]" /> Proven Growth Track Record
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#13144D] tracking-tight mb-6">
              Verifiable Organic <span className="gradient-text-emerald">Case Studies</span>
            </h1>
            <p className="text-lg text-[#13144D]/80 max-w-3xl mx-auto leading-relaxed">
              Explore how technical SEO refactoring, entity content architecture, and strategic backlink campaigns transformed search traffic into multi-million dollar revenue engines.
            </p>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PORTFOLIO_DATA.map((study) => (
              <div
                key={study.id}
                className="rounded-3xl bg-[#FFFFFF] border border-[#13144D]/15 hover:border-[#02E3A7] p-8 flex flex-col justify-between group transition-all duration-300 shadow-md hover:shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-[#13144D] text-[#02E3A7]">
                      {study.featuredTag}
                    </span>
                    <div className="flex items-center gap-1.5 text-xs text-[#13144D]/70 font-semibold">
                      <Calendar className="w-3.5 h-3.5 text-[#02E3A7]" />
                      <span>{study.timeframe} Duration</span>
                    </div>
                  </div>

                  <span className="text-xs font-bold uppercase tracking-wider text-[#13144D]/60 block mb-1">
                    {study.industry} Case Study
                  </span>
                  <h2 className="text-2xl font-extrabold text-[#13144D] group-hover:text-[#02E3A7] transition-colors mb-3">
                    {study.clientName}
                  </h2>
                  <p className="text-sm font-bold text-[#02E3A7] mb-6 leading-relaxed">
                    "{study.headline}"
                  </p>

                  <p className="text-xs text-[#13144D]/80 leading-relaxed mb-6">
                    {study.summary}
                  </p>

                  {/* Metrics Row */}
                  <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl bg-[#F4F5F6] border border-[#13144D]/10 mb-6">
                    {study.metrics.map((m, idx) => (
                      <div key={idx} className="flex flex-col">
                        <span className="text-[10px] text-[#13144D]/70 truncate">{m.label}</span>
                        <span className="text-base font-black text-[#13144D]">{m.after}</span>
                        <span className="text-[10px] font-bold text-[#02E3A7]">{m.percentage}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-[#13144D]/15 flex items-center justify-between">
                  <span className="text-xs font-bold text-[#13144D]/70">Category: {study.category.toUpperCase()}</span>
                  <Link
                    href={`/case-studies/${study.id}`}
                    className="btn-pro-green px-5 py-2.5 rounded-xl text-xs font-bold text-[#13144D] flex items-center gap-1.5 hover:scale-105 transition-transform"
                  >
                    Read Full Case Study <ArrowRight className="w-4 h-4 text-[#13144D]" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Bottom Callout */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
          <div className="p-10 rounded-3xl bg-[#13144D] text-[#FFFFFF] text-center space-y-4 border border-[#02E3A7]/30 shadow-2xl">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">Want Comparable Ranking & Revenue Surge?</h3>
            <p className="text-sm text-[#F4F5F6]/80 max-w-xl mx-auto">
              Schedule a consultation to inspect your competitors' search vulnerability and receive a tailored organic growth plan.
            </p>
            <div className="pt-2">
              <Link href="/contact" className="btn-pro-green px-8 py-3.5 rounded-full text-sm font-bold text-[#13144D] inline-flex items-center gap-2">
                Request Strategy Proposal <ArrowRight className="w-4 h-4 text-[#13144D]" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <WhatsAppWidget />
      <Footer />
    </div>
  );
}
