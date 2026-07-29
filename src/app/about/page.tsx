import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppWidget } from '@/components/WhatsAppWidget';
import { Award, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: "About the Senior SEO Analyst & Growth Specialist",
  description: "Learn about our data-driven organic search consultancy, technical auditing methodology, core principles, and verified client growth track record.",
};

export default function AboutPage() {
  const tools = [
    "Screaming Frog", "Ahrefs", "Google Search Console", "Google Analytics 4", "Looker Studio",
    "SurferSEO", "BrightLocal", "Python (SEO Automation)", "Schema.org / JSON-LD", "Botify", "Clearscope", "Lighthouse"
  ];

  const milestones = [
    { year: "2018", title: "Technical Search Consultancy Founded", desc: "Started auditing enterprise e-commerce and SaaS sites." },
    { year: "2020", title: "Scaled $100M+ Organic Client Revenue", desc: "Engineered SILO content hub frameworks for B2B brands." },
    { year: "2023", title: "YMYL & E-E-A-T Recovery Framework", desc: "Built proprietary diagnostic tools to reverse Core Update penalties." },
    { year: "2026", title: "Over $10.2B+ Organic Revenue Generated", desc: "Serving top global brands across 15+ search markets." },
  ];

  return (
    <div className="min-h-screen bg-[#F4F5F6] text-[#13144D] flex flex-col selection:bg-[#02E3A7] selection:text-[#13144D]">
      <Header />

      <main className="flex-grow pt-32 pb-24">
        {/* Hero */}
        <section className="relative py-16 bg-grid-pattern overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#13144D] text-[#02E3A7] border border-[#02E3A7]/30 text-xs font-extrabold uppercase tracking-wider mb-6">
              <Award className="w-4 h-4 text-[#02E3A7]" /> Senior Technical Search Consultancy
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#13144D] tracking-tight mb-6">
              Engineering <span className="gradient-text-emerald">Predictable Search Revenue</span>
            </h1>
            <p className="text-lg text-[#13144D]/80 max-w-3xl mx-auto leading-relaxed">
              We bridge technical site architecture, natural language processing (NLP) entity mapping, and white-hat link authority to generate sustainable, high-margin search growth.
            </p>
          </div>
        </section>

        {/* Bio & Philosophy */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="p-8 rounded-3xl bg-[#FFFFFF] border border-[#13144D]/15 space-y-4 shadow-xl">
              <h2 className="text-2xl font-extrabold text-[#13144D]">Our Data-Driven Growth Philosophy</h2>
              <p className="text-[#13144D]/80 text-sm leading-relaxed">
                Most agencies focus on vanity metrics like impressions or low-value keyword counts. We measure success on trackable business leads, e-commerce purchases, and net profit.
              </p>
              <p className="text-[#13144D]/80 text-sm leading-relaxed">
                By treating search engine algorithms as complex data structures, we systematically eliminate rendering bottlenecks, optimize Core Web Vitals, and construct rigid internal SILO link graphs that Google rewards.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-[#FFFFFF] border border-[#13144D]/15 text-center shadow-md">
                <span className="text-3xl font-black text-[#13144D]">$10.2B+</span>
                <span className="text-xs text-[#13144D]/70 block mt-1">Verified Client Revenue</span>
              </div>
              <div className="p-5 rounded-2xl bg-[#FFFFFF] border border-[#13144D]/15 text-center shadow-md">
                <span className="text-3xl font-black text-[#02E3A7]">98.4%</span>
                <span className="text-xs text-[#13144D]/70 block mt-1">Client Retention Rate</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            {/* Timeline Milestones */}
            <div className="p-8 rounded-3xl bg-[#FFFFFF] border border-[#13144D]/15 space-y-6 shadow-xl">
              <h3 className="text-lg font-extrabold text-[#13144D]">Track Record & Growth Milestones</h3>
              <div className="space-y-4">
                {milestones.map((m, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-3 rounded-xl bg-[#F4F5F6] border border-[#13144D]/10">
                    <span className="px-3 py-1 rounded-lg bg-[#13144D] text-[#02E3A7] text-xs font-black shrink-0">
                      {m.year}
                    </span>
                    <div>
                      <h4 className="text-sm font-bold text-[#13144D]">{m.title}</h4>
                      <p className="text-xs text-[#13144D]/70">{m.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Tools Tech Stack */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
          <div className="p-8 rounded-3xl bg-[#FFFFFF] border border-[#13144D]/15 space-y-6 shadow-xl">
            <h3 className="text-xl font-extrabold text-[#13144D] text-center">Enterprise Analytics & Diagnostic Stack</h3>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {tools.map((t, i) => (
                <span key={i} className="px-4 py-2 rounded-xl bg-[#13144D] border border-[#02E3A7]/30 text-xs font-bold text-[#02E3A7]">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 text-center">
          <div className="p-10 rounded-3xl bg-[#13144D] text-white border border-[#02E3A7]/30 space-y-4 shadow-2xl">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">Ready To Scale Your Organic Revenue Baseline?</h3>
            <p className="text-sm text-[#F4F5F6]/80 max-w-xl mx-auto">
              Schedule an executive strategy consultation to receive a custom technical roadmap.
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
