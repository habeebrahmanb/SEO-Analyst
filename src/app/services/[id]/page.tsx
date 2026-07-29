import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppWidget } from '@/components/WhatsAppWidget';
import { SERVICES_DATA, Service } from '@/data/servicesData';
import { PORTFOLIO_DATA } from '@/data/portfolioData';
import { 
  Cpu, 
  FileText, 
  Link2, 
  MapPin, 
  ShoppingCart, 
  BarChart3, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight, 
  Zap, 
  HelpCircle, 
  Target, 
  Wrench, 
  TrendingUp,
  ChevronLeft
} from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Cpu: <Cpu className="w-10 h-10 text-[#02E3A7]" />,
  FileText: <FileText className="w-10 h-10 text-[#02E3A7]" />,
  Link2: <Link2 className="w-10 h-10 text-[#02E3A7]" />,
  MapPin: <MapPin className="w-10 h-10 text-[#02E3A7]" />,
  ShoppingCart: <ShoppingCart className="w-10 h-10 text-[#02E3A7]" />,
  BarChart3: <BarChart3 className="w-10 h-10 text-[#02E3A7]" />,
};

export async function generateStaticParams() {
  return SERVICES_DATA.map((service) => ({
    id: service.id,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const service = SERVICES_DATA.find((s) => s.id === id);
  if (!service) return { title: 'Service Not Found | SEO Analyst' };

  return {
    title: `${service.title} | SEO Growth Strategy`,
    description: service.shortDesc,
  };
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const service = SERVICES_DATA.find((s) => s.id === id);

  if (!service) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#F4F5F6] text-[#13144D] flex flex-col selection:bg-[#02E3A7] selection:text-[#13144D]">
      <Header />

      <main className="flex-grow pt-32 pb-24">
        {/* Navigation back breadcrumb */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-xs font-bold text-[#13144D]/70 hover:text-[#13144D] transition-colors"
          >
            <ChevronLeft className="w-4 h-4 text-[#02E3A7]" /> Back to All Services
          </Link>
        </div>

        {/* Hero Section */}
        <section className="relative py-16 bg-grid-pattern overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl space-y-6">
              <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-[#13144D] text-[#02E3A7] border border-[#02E3A7]/30 text-xs font-extrabold uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-[#6AF15C] animate-pulse"></span>
                {service.badge} Solution Blueprint
              </div>

              <div className="flex items-center gap-5">
                <div className="w-16 h-16 rounded-2xl bg-[#13144D] flex items-center justify-center shrink-0">
                  {iconMap[service.iconName]}
                </div>
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#13144D] tracking-tight leading-tight">
                  {service.title}
                </h1>
              </div>

              <p className="text-lg sm:text-xl text-[#13144D]/80 leading-relaxed font-medium">
                {service.fullDesc}
              </p>

              <div className="p-4 rounded-2xl bg-[#FFFFFF] border border-[#02E3A7] inline-flex items-center gap-4 text-sm font-extrabold text-[#13144D]">
                <TrendingUp className="w-5 h-5 text-[#02E3A7] shrink-0" />
                <span>Expected Impact: {service.metricsImpact}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Explanation & Process */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Main Column */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* Strategy Deep Dive */}
            <div className="p-8 sm:p-10 rounded-3xl bg-[#FFFFFF] border border-[#13144D]/15 shadow-xl space-y-6">
              <h2 className="text-2xl font-extrabold text-[#13144D] flex items-center gap-2">
                <Sparkles className="w-6 h-6 text-[#02E3A7]" /> Executive Overview & Technical Strategy
              </h2>
              <p className="text-[#13144D]/80 leading-relaxed text-sm sm:text-base">
                {service.longDescription}
              </p>
            </div>

            {/* 4-Step Implementation Process Framework */}
            <div className="space-y-6">
              <h2 className="text-2xl font-extrabold text-[#13144D] flex items-center gap-2">
                <Zap className="w-6 h-6 text-[#02E3A7]" /> 4-Step Execution Framework
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {service.processSteps.map((step, idx) => (
                  <div key={idx} className="p-6 rounded-2xl bg-[#FFFFFF] border border-[#13144D]/15 space-y-3 relative overflow-hidden group hover:border-[#02E3A7] transition-colors shadow-sm">
                    <span className="text-3xl font-black text-[#13144D]/20 group-hover:text-[#02E3A7] transition-colors">
                      {step.stepNumber}
                    </span>
                    <h3 className="text-base font-bold text-[#13144D]">{step.title}</h3>
                    <p className="text-xs text-[#13144D]/80 leading-relaxed">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Deliverables Checklist */}
            <div className="p-8 rounded-3xl bg-[#FFFFFF] border border-[#13144D]/15 space-y-6 shadow-xl">
              <h2 className="text-2xl font-extrabold text-[#13144D] flex items-center gap-2">
                <CheckCircle2 className="w-6 h-6 text-[#02E3A7]" /> Complete Deliverables Inventory
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.deliverables.map((item, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-[#F4F5F6] border border-[#13144D]/10 flex items-start gap-3 text-xs text-[#13144D] font-bold">
                    <CheckCircle2 className="w-4 h-4 text-[#02E3A7] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Service FAQs */}
            {service.faqs && service.faqs.length > 0 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-extrabold text-[#13144D] flex items-center gap-2">
                  <HelpCircle className="w-6 h-6 text-[#02E3A7]" /> Service FAQs & Technical Guidance
                </h2>
                <div className="space-y-4">
                  {service.faqs.map((faq, idx) => (
                    <div key={idx} className="p-6 rounded-2xl bg-[#FFFFFF] border border-[#13144D]/15 space-y-2">
                      <h3 className="text-sm font-bold text-[#13144D] flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#02E3A7]"></span>
                        {faq.question}
                      </h3>
                      <p className="text-xs text-[#13144D]/80 leading-relaxed pl-4 border-l-2 border-[#02E3A7]">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>

          {/* Sidebar Column */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Target Audience */}
            <div className="p-6 rounded-3xl bg-[#FFFFFF] border border-[#13144D]/15 space-y-4 shadow-xl">
              <h3 className="text-sm font-bold text-[#13144D] uppercase tracking-wider flex items-center gap-2">
                <Target className="w-4 h-4 text-[#02E3A7]" /> Ideal Brand Fit
              </h3>
              <div className="space-y-2 text-xs text-[#13144D]">
                {service.targetAudience.map((aud, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-[#F4F5F6] border border-[#13144D]/10 flex items-start gap-2">
                    <span className="text-[#02E3A7] font-bold">•</span>
                    <span>{aud}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tools Stack */}
            <div className="p-6 rounded-3xl bg-[#FFFFFF] border border-[#13144D]/15 space-y-4 shadow-xl">
              <h3 className="text-sm font-bold text-[#13144D] uppercase tracking-wider flex items-center gap-2">
                <Wrench className="w-4 h-4 text-[#02E3A7]" /> Execution Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {service.toolsUsed.map((tool, idx) => (
                  <span key={idx} className="px-3 py-1 rounded-full bg-[#13144D] border border-[#02E3A7]/30 text-xs font-bold text-[#02E3A7]">
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* Core KPIs */}
            <div className="p-6 rounded-3xl bg-[#FFFFFF] border border-[#13144D]/15 space-y-4 shadow-xl">
              <h3 className="text-sm font-bold text-[#13144D] uppercase tracking-wider flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-[#02E3A7]" /> Measured Campaign KPIs
              </h3>
              <div className="space-y-2 text-xs text-[#13144D]">
                {service.kpis.map((kpi, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-[#F4F5F6] border border-[#13144D]/10 flex items-center justify-between">
                    <span className="font-bold text-[#13144D]">{kpi}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Direct Booking Card */}
            <div className="p-6 rounded-3xl bg-[#13144D] text-white border border-[#02E3A7]/30 space-y-4 shadow-2xl">
              <h3 className="text-lg font-extrabold text-white">Get This Custom Strategy</h3>
              <p className="text-xs text-[#F4F5F6]/80 leading-relaxed">
                Receive a dedicated technical roadmap and competitive gap audit tailored specifically to your domain.
              </p>
              <Link
                href="/contact"
                className="btn-pro-green w-full py-3.5 rounded-xl font-bold text-center text-xs text-[#13144D] flex items-center justify-center gap-2"
              >
                Request Custom Proposal <ArrowRight className="w-4 h-4 text-[#13144D]" />
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
