'use client';

import React, { useState } from 'react';
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
  Layers
} from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Cpu: <Cpu className="w-6 h-6 text-emerald-600" />,
  FileText: <FileText className="w-6 h-6 text-emerald-600" />,
  Link2: <Link2 className="w-6 h-6 text-emerald-600" />,
  MapPin: <MapPin className="w-6 h-6 text-emerald-600" />,
  ShoppingCart: <ShoppingCart className="w-6 h-6 text-emerald-600" />,
  BarChart3: <BarChart3 className="w-6 h-6 text-emerald-600" />,
};

export function ServicesSection() {
  const [selectedService, setSelectedService] = useState<Service>(SERVICES_DATA[0]);
  const [activeTab, setActiveTab] = useState<string>(SERVICES_DATA[0].id);

  const handleSelect = (service: Service) => {
    setSelectedService(service);
    setActiveTab(service.id);
  };

  return (
    <section id="services" className="py-24 relative bg-slate-50 border-t border-b border-slate-200">
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-4">
            <Layers className="w-3.5 h-3.5 text-emerald-600" /> Full-Service Organic Capabilities
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Tech-Enabled <span className="gradient-text-emerald">SEO Solutions</span> Built For Revenue Growth
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
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
                      ? 'bg-white border-emerald-500 shadow-lg shadow-emerald-500/10 scale-[1.02]'
                      : 'bg-white border-slate-200 hover:bg-slate-50 hover:border-slate-300'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center">
                        {iconMap[service.iconName]}
                      </div>
                      <span className={`text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full border ${
                        isSelected
                          ? 'bg-emerald-100 text-emerald-800 border-emerald-300'
                          : 'bg-slate-100 text-slate-600 border-slate-200'
                      }`}>
                        {service.badge}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2 leading-snug">
                      {service.title}
                    </h3>
                    <p className="text-xs text-slate-600 line-clamp-3 mb-4 leading-relaxed">
                      {service.shortDesc}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-slate-100 text-xs">
                    <span className="text-emerald-700 font-bold">{service.metricsImpact}</span>
                    <ChevronRight className={`w-4 h-4 transition-transform ${isSelected ? 'text-emerald-600 translate-x-1' : 'text-slate-400'}`} />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Inspector Panel */}
          <div className="lg:col-span-6 sticky top-28">
            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-xl relative overflow-hidden">
              
              <div className="flex items-center justify-between border-b border-slate-100 pb-5 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center">
                    {iconMap[selectedService.iconName]}
                  </div>
                  <div>
                    <span className="text-xs font-bold text-emerald-600 uppercase tracking-wide">
                      Campaign Blueprint Inspector
                    </span>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                      {selectedService.title}
                    </h3>
                  </div>
                </div>
              </div>

              {/* Full Description */}
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                {selectedService.fullDesc}
              </p>

              {/* Deliverables List */}
              <div className="mb-8">
                <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-4 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-emerald-600" /> Included Strategy Deliverables
                </h4>
                <div className="space-y-3">
                  {selectedService.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="text-slate-800 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Expected Impact Highlight */}
              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-between">
                <div>
                  <span className="text-xs text-slate-600 block">Verified Campaign Impact:</span>
                  <span className="text-base font-extrabold text-emerald-900">{selectedService.metricsImpact}</span>
                </div>
                <a
                  href="#contact"
                  className="btn-pro-green px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1"
                >
                  Request Strategy <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
