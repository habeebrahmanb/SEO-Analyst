import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppWidget } from '@/components/WhatsAppWidget';
import { PORTFOLIO_DATA, CaseStudy } from '@/data/portfolioData';
import { 
  Award, 
  Calendar, 
  TrendingUp, 
  Zap, 
  CheckCircle2, 
  ChevronLeft, 
  Quote, 
  Wrench, 
  ArrowRight
} from 'lucide-react';

export async function generateStaticParams() {
  return PORTFOLIO_DATA.map((study) => ({
    id: study.id,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const study = PORTFOLIO_DATA.find((s) => s.id === id);
  if (!study) return { title: 'Case Study Not Found | SEO Analyst' };

  return {
    title: `${study.clientName} Case Study | Organic Search Growth`,
    description: study.headline,
  };
}

export default async function CaseStudyDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const study = PORTFOLIO_DATA.find((s) => s.id === id);

  if (!study) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#F4F5F6] text-[#13144D] flex flex-col selection:bg-[#02E3A7] selection:text-[#13144D]">
      <Header />

      <main className="flex-grow pt-32 pb-24">
        {/* Navigation Breadcrumb */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 text-xs font-bold text-[#13144D]/70 hover:text-[#13144D] transition-colors"
          >
            <ChevronLeft className="w-4 h-4 text-[#02E3A7]" /> Back to Case Studies
          </Link>
        </div>

        {/* Hero Section */}
        <section className="relative py-16 bg-grid-pattern overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl space-y-6">
              <div className="flex flex-wrap items-center gap-3">
                <span className="px-3 py-1 rounded-full bg-[#13144D] text-[#02E3A7] text-xs font-extrabold border border-[#02E3A7]/30">
                  {study.featuredTag}
                </span>
                <span className="text-xs text-[#13144D]/70 font-semibold flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-[#02E3A7]" /> {study.timeframe} Duration
                </span>
                <span className="text-xs text-[#13144D]/60">• {study.industry}</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#13144D] tracking-tight leading-tight">
                {study.clientName}
              </h1>

              <p className="text-xl sm:text-2xl text-[#02E3A7] font-extrabold leading-snug">
                "{study.headline}"
              </p>

              {/* Metrics Summary Row */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                {study.metrics.map((m, idx) => (
                  <div key={idx} className="p-5 rounded-2xl bg-[#FFFFFF] border border-[#13144D]/15 space-y-1 shadow-md">
                    <span className="text-xs text-[#13144D]/70 block">{m.label}</span>
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-black text-[#13144D]">{m.after}</span>
                      <span className="text-xs text-[#13144D]/50 line-through">from {m.before}</span>
                    </div>
                    <span className="text-xs font-bold text-[#02E3A7] block">{m.percentage} Increase</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Main Content Layout */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Main Content */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* Client Background */}
            <div className="p-8 sm:p-10 rounded-3xl bg-[#FFFFFF] border border-[#13144D]/15 space-y-4 shadow-xl">
              <h2 className="text-xl font-extrabold text-[#13144D] flex items-center gap-2">
                <BuildingIcon className="w-5 h-5 text-[#02E3A7]" /> Client Background & Baseline State
              </h2>
              <p className="text-[#13144D]/80 text-sm sm:text-base leading-relaxed">
                {study.detailedBackground}
              </p>
            </div>

            {/* The Challenge */}
            <div className="p-8 rounded-3xl bg-[#FFFFFF] border border-[#13144D]/15 space-y-4 shadow-xl">
              <h2 className="text-xl font-extrabold text-[#13144D] flex items-center gap-2">
                <Zap className="w-5 h-5 text-[#02E3A7]" /> Key Search & Technical Challenges
              </h2>
              <p className="text-[#13144D]/80 text-sm leading-relaxed p-4 rounded-2xl bg-[#F4F5F6] border border-[#13144D]/10">
                {study.challenge}
              </p>
            </div>

            {/* Step-by-Step Execution Methodology */}
            <div className="space-y-6">
              <h2 className="text-2xl font-extrabold text-[#13144D] flex items-center gap-2">
                <CheckCircle2 className="w-6 h-6 text-[#02E3A7]" /> Strategic Execution Blueprint
              </h2>
              <div className="space-y-4">
                {study.methodologySteps.map((step, idx) => (
                  <div key={idx} className="p-6 rounded-2xl bg-[#FFFFFF] border border-[#13144D]/15 space-y-2 shadow-sm">
                    <h3 className="text-base font-bold text-[#13144D] flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#02E3A7]"></span>
                      {step.title}
                    </h3>
                    <p className="text-xs text-[#13144D]/80 leading-relaxed pl-4 border-l-2 border-[#02E3A7]">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Client Quote */}
            {study.quote && (
              <div className="p-8 rounded-3xl bg-[#13144D] text-white border border-[#02E3A7]/30 space-y-4 relative shadow-2xl">
                <Quote className="w-10 h-10 text-[#02E3A7]/30 absolute top-6 right-6" />
                <p className="text-base sm:text-lg font-medium italic relative z-10 leading-relaxed text-[#F4F5F6]">
                  "{study.quote.text}"
                </p>
                <div>
                  <span className="block text-sm font-bold text-white">{study.quote.author}</span>
                  <span className="block text-xs text-[#02E3A7] font-medium">{study.quote.role}</span>
                </div>
              </div>
            )}

            {/* Key Takeaways */}
            <div className="p-8 rounded-3xl bg-[#FFFFFF] border border-[#13144D]/15 space-y-4 shadow-xl">
              <h2 className="text-xl font-extrabold text-[#13144D] flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-[#02E3A7]" /> Growth & Strategy Takeaways
              </h2>
              <ul className="space-y-3">
                {study.keyTakeaways.map((takeaway, idx) => (
                  <li key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-[#F4F5F6] border border-[#13144D]/10 text-xs text-[#13144D] font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#02E3A7] shrink-0 mt-0.5" />
                    <span>{takeaway}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Tech Stack */}
            <div className="p-6 rounded-3xl bg-[#FFFFFF] border border-[#13144D]/15 space-y-4 shadow-xl">
              <h3 className="text-sm font-bold text-[#13144D] uppercase tracking-wider flex items-center gap-2">
                <Wrench className="w-4 h-4 text-[#02E3A7]" /> Platform & Tools Used
              </h3>
              <div className="flex flex-wrap gap-2">
                {study.techStack.map((tech, idx) => (
                  <span key={idx} className="px-3 py-1 rounded-full bg-[#13144D] border border-[#02E3A7]/30 text-xs font-bold text-[#02E3A7]">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Campaign Summary Card */}
            <div className="p-6 rounded-3xl bg-[#FFFFFF] border border-[#13144D]/15 space-y-4 shadow-xl">
              <h3 className="text-sm font-bold text-[#13144D] uppercase tracking-wider">Campaign Overview</h3>
              <div className="space-y-3 text-xs text-[#13144D]">
                <div className="flex justify-between py-2 border-b border-[#13144D]/10">
                  <span className="text-[#13144D]/70">Client Industry:</span>
                  <span className="font-bold text-[#13144D]">{study.industry}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-[#13144D]/10">
                  <span className="text-[#13144D]/70">Execution Period:</span>
                  <span className="font-bold text-[#13144D]">{study.timeframe}</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-[#13144D]/70">Primary Goal:</span>
                  <span className="font-bold text-[#02E3A7]">{study.featuredTag}</span>
                </div>
              </div>
            </div>

            {/* Consultation CTA */}
            <div className="p-6 rounded-3xl bg-[#13144D] text-white border border-[#02E3A7]/30 space-y-4 shadow-2xl">
              <h3 className="text-lg font-extrabold text-white">Achieve Similar Organic ROI</h3>
              <p className="text-xs text-[#F4F5F6]/80 leading-relaxed">
                Get a comprehensive organic audit and strategy proposal customized for your brand.
              </p>
              <Link
                href="/contact"
                className="btn-pro-green w-full py-3.5 rounded-xl font-bold text-center text-xs text-[#13144D] flex items-center justify-center gap-2"
              >
                Request Free Custom Proposal <ArrowRight className="w-4 h-4 text-[#13144D]" />
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

function BuildingIcon(props: any) {
  return (
    <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5m0 0v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  );
}
