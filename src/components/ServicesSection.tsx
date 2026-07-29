'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { SERVICES_DATA, Service } from '@/data/servicesData';
import { 
  Cpu, 
  FileText, 
  Link2, 
  MapPin, 
  ShoppingCart, 
  BarChart3, 
  CheckCircle2, 
  ChevronRight,
  Sparkles,
  ArrowUpRight,
  Layers,
  ArrowRight
} from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Cpu: <Cpu className="w-6 h-6 text-[#02E3A7]" />,
  FileText: <FileText className="w-6 h-6 text-[#02E3A7]" />,
  Link2: <Link2 className="w-6 h-6 text-[#02E3A7]" />,
  MapPin: <MapPin className="w-6 h-6 text-[#02E3A7]" />,
  ShoppingCart: <ShoppingCart className="w-6 h-6 text-[#02E3A7]" />,
  BarChart3: <BarChart3 className="w-6 h-6 text-[#02E3A7]" />,
};

export function ServicesSection() {
  const [selectedService, setSelectedService] = useState<Service>(SERVICES_DATA[0]);
  const [activeTab, setActiveTab] = useState<string>(SERVICES_DATA[0].id);

  const handleSelect = (service: Service) => {
    setSelectedService(service);
    setActiveTab(service.id);
  };

  return (
    <section id="services" className="py-24 relative bg-[#F4F5F6] border-t border-b border-[#13144D]/15 text-[#13144D]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#02E3A7]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#13144D] text-[#02E3A7] border border-[#02E3A7]/30 text-xs font-extrabold uppercase tracking-wider mb-4">
            <Layers className="w-3.5 h-3.5 text-[#02E3A7]" /> Full-Service Capabilities
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#13144D] tracking-tight mb-4">
            Tech-Enabled <span className="gradient-text-vibrant">SEO Solutions</span> Built For Revenue Growth
          </h2>
          <p className="text-base sm:text-lg text-[#13144D]/80">
            Data-driven search engineering combined with dedicated strategists focused on keyword rankings, qualified leads, and measurable bottom-line growth.
          </p>
        </div>

        {/* Services Layout: Cards Grid + Interactive Detail Inspector */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Cards Grid */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {SERVICES_DATA.map((service) => {
              const isSelected = activeTab === service.id;
              return (
                <div
                  key={service.id}
                  onClick={() => handleSelect(service)}
                  className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 border flex flex-col justify-between ${
                    isSelected
                      ? 'bg-[#13144D] text-white border-[#02E3A7] shadow-xl scale-[1.02]'
                      : 'bg-[#FFFFFF] text-[#13144D] border-[#13144D]/15 hover:border-[#02E3A7]'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-12 h-12 rounded-xl border flex items-center justify-center ${isSelected ? 'bg-[#0d0e38] border-[#02E3A7]/40' : 'bg-[#F4F5F6] border-[#13144D]/15'}`}>
                        {iconMap[service.iconName]}
                      </div>
                      <span className={`text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full border ${
                        isSelected
                          ? 'bg-[#02E3A7] text-[#13144D] border-[#02E3A7]'
                          : 'bg-[#13144D] text-[#02E3A7] border-[#13144D]'
                      }`}>
                        {service.badge}
                      </span>
                    </div>
                    <h3 className={`text-lg font-bold mb-2 leading-snug ${isSelected ? 'text-white' : 'text-[#13144D]'}`}>
                      {service.title}
                    </h3>
                    <p className={`text-xs line-clamp-3 mb-4 leading-relaxed ${isSelected ? 'text-[#F4F5F6]/80' : 'text-[#13144D]/80'}`}>
                      {service.shortDesc}
                    </p>
                  </div>

                  <div className={`flex items-center justify-between pt-3 border-t text-xs ${isSelected ? 'border-[#02E3A7]/30' : 'border-[#13144D]/15'}`}>
                    <span className={`font-extrabold ${isSelected ? 'text-[#02E3A7]' : 'text-[#13144D]'}`}>{service.metricsImpact}</span>
                    <div className="flex items-center gap-1">
                      <Link
                        href={`/services/${service.id}`}
                        onClick={(e) => e.stopPropagation()}
                        className={`text-[11px] font-semibold underline ${isSelected ? 'text-[#6AF15C]' : 'text-[#13144D]/70 hover:text-[#13144D]'}`}
                      >
                        Details
                      </Link>
                      <ChevronRight className={`w-4 h-4 transition-transform ${isSelected ? 'text-[#02E3A7] translate-x-1' : 'text-[#13144D]/40'}`} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Inspector Panel */}
          <div className="lg:col-span-6 sticky top-28">
            <div className="p-8 rounded-3xl bg-[#13144D] text-[#FFFFFF] shadow-2xl relative overflow-hidden border border-[#02E3A7]/30">
              
              <div className="flex items-center justify-between border-b border-[#02E3A7]/20 pb-5 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-[#02E3A7] text-[#13144D] flex items-center justify-center font-bold">
                    {iconMap[selectedService.iconName]}
                  </div>
                  <div>
                    <span className="text-xs font-bold text-[#02E3A7] uppercase tracking-wide">
                      Campaign Blueprint Inspector
                    </span>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                      {selectedService.title}
                    </h3>
                  </div>
                </div>
              </div>

              {/* Full Description */}
              <p className="text-sm text-[#F4F5F6]/90 leading-relaxed mb-6">
                {selectedService.fullDesc}
              </p>

              {/* Deliverables List */}
              <div className="mb-8">
                <h4 className="text-xs font-bold text-[#02E3A7] uppercase tracking-wider mb-4 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#6AF15C]" /> Included Strategy Deliverables
                </h4>
                <div className="space-y-3">
                  {selectedService.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-[#0d0e38] border border-[#02E3A7]/20 text-xs">
                      <CheckCircle2 className="w-4 h-4 text-[#02E3A7] shrink-0 mt-0.5" />
                      <span className="text-[#FFFFFF] font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Expected Impact Highlight & Action Buttons */}
              <div className="p-4 rounded-2xl bg-[#02E3A7] text-[#13144D] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs text-[#13144D]/80 block font-bold">Verified Campaign Impact:</span>
                  <span className="text-base font-black text-[#13144D]">{selectedService.metricsImpact}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Link
                    href={`/services/${selectedService.id}`}
                    className="btn-pro-outline px-3.5 py-2 rounded-xl text-xs font-bold flex items-center gap-1"
                  >
                    View Page &rarr;
                  </Link>
                  <Link
                    href="/contact"
                    className="btn-pro-green px-4 py-2 rounded-xl text-xs font-extrabold transition-all flex items-center gap-1 text-[#13144D]"
                  >
                    Request Strategy <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* View All Services Footer Link */}
        <div className="mt-12 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#13144D] border border-[#02E3A7]/30 text-[#02E3A7] hover:text-[#6AF15C] hover:border-[#6AF15C] text-sm font-bold transition-all"
          >
            Explore All Detailed Growth Services <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
