import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppWidget } from '@/components/WhatsAppWidget';
import { SERVICES_DATA } from '@/data/servicesData';
import { Cpu, FileText, Link2, MapPin, ShoppingCart, BarChart3, ArrowRight, CheckCircle2, Sparkles, Layers } from 'lucide-react';

export const metadata: Metadata = {
  title: "Organic SEO Services & Deliverables | SEO Analyst",
  description: "Explore enterprise technical audits, SILO content architecture, high-DR backlink acquisition, local map domination, and e-commerce revenue growth solutions.",
};

const iconMap: Record<string, React.ReactNode> = {
  Cpu: <Cpu className="w-8 h-8 text-[#02E3A7]" />,
  FileText: <FileText className="w-8 h-8 text-[#02E3A7]" />,
  Link2: <Link2 className="w-8 h-8 text-[#02E3A7]" />,
  MapPin: <MapPin className="w-8 h-8 text-[#02E3A7]" />,
  ShoppingCart: <ShoppingCart className="w-8 h-8 text-[#02E3A7]" />,
  BarChart3: <BarChart3 className="w-8 h-8 text-[#02E3A7]" />,
};

export default function ServicesIndexPage() {
  return (
    <div className="min-h-screen bg-[#F4F5F6] text-[#13144D] flex flex-col selection:bg-[#02E3A7] selection:text-[#13144D]">
      <Header />

      <main className="flex-grow pt-32 pb-24">
        {/* Banner */}
        <section className="relative py-16 bg-grid-pattern overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#13144D] text-[#02E3A7] border border-[#02E3A7]/30 text-xs font-extrabold uppercase tracking-wider mb-6">
              <Layers className="w-4 h-4 text-[#02E3A7]" /> Full-Spectrum Growth Engineering
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#13144D] tracking-tight mb-6">
              Enterprise Organic <span className="gradient-text-emerald">SEO Capabilities</span>
            </h1>
            <p className="text-lg text-[#13144D]/80 max-w-3xl mx-auto leading-relaxed">
              Every service is engineered around technical precision, intent-focused content architecture, and verifiable bottom-line revenue. Choose a service below to inspect full strategy blueprints.
            </p>
          </div>
        </section>

        {/* Services List Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES_DATA.map((service) => (
              <div
                key={service.id}
                className="rounded-3xl bg-[#FFFFFF] border border-[#13144D]/15 hover:border-[#02E3A7] p-8 flex flex-col justify-between group transition-all duration-300 shadow-md hover:shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-[#13144D] flex items-center justify-center">
                      {iconMap[service.iconName]}
                    </div>
                    <span className="text-xs font-extrabold uppercase px-3 py-1 rounded-full bg-[#02E3A7] text-[#13144D]">
                      {service.badge}
                    </span>
                  </div>

                  <h2 className="text-xl font-extrabold text-[#13144D] mb-3 group-hover:text-[#02E3A7] transition-colors">
                    {service.title}
                  </h2>

                  <p className="text-xs text-[#13144D]/80 leading-relaxed mb-6">
                    {service.shortDesc}
                  </p>

                  {/* Core Deliverables Preview */}
                  <div className="space-y-2 mb-6">
                    <span className="text-[11px] font-bold text-[#13144D]/60 uppercase tracking-wider block">Key Deliverables:</span>
                    {service.deliverables.slice(0, 3).map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-[#13144D]">
                        <CheckCircle2 className="w-4 h-4 text-[#02E3A7] shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-[#13144D]/15 flex items-center justify-between">
                  <span className="text-xs font-bold text-[#13144D]">{service.metricsImpact}</span>
                  <Link
                    href={`/services/${service.id}`}
                    className="btn-pro-green px-4 py-2 rounded-xl text-xs font-bold text-[#13144D] flex items-center gap-1.5 hover:scale-105 transition-transform"
                  >
                    View Strategy <ArrowRight className="w-3.5 h-3.5 text-[#13144D]" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Audit CTA Banner */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
          <div className="p-10 rounded-3xl bg-[#13144D] text-white border border-[#02E3A7]/30 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#02E3A7]/20 text-[#02E3A7] text-xs font-bold">
                <Sparkles className="w-4 h-4 text-[#6AF15C]" /> Customized Service Packages
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">Unsure Which SEO Service Fits Your Site?</h3>
              <p className="text-sm text-[#F4F5F6]/80">
                Run our free interactive SEO ROI Audit or speak with our senior strategist to receive a personalized multi-channel growth recommendation.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 shrink-0">
              <Link href="/audit" className="btn-pro-green px-6 py-3.5 rounded-xl text-sm font-bold text-[#13144D] flex items-center justify-center gap-2">
                Run Free ROI Audit <ArrowRight className="w-4 h-4 text-[#13144D]" />
              </Link>
              <Link href="/contact" className="btn-pro-outline px-6 py-3.5 rounded-xl text-sm font-bold flex items-center justify-center gap-2">
                Book Consultation
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
