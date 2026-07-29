'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Calculator, 
  TrendingUp, 
  DollarSign, 
  Users, 
  Sparkles, 
  ArrowRight, 
  ShieldCheck,
  Building,
  Store,
  Briefcase,
  Layers
} from 'lucide-react';

export function AuditCalculator() {
  const [industry, setIndustry] = useState<'ecommerce' | 'saas' | 'b2b' | 'local'>('ecommerce');
  const [currentTraffic, setCurrentTraffic] = useState<number>(10000);
  const [avgOrderValue, setAvgOrderValue] = useState<number>(120);
  const [conversionRate, setConversionRate] = useState<number>(2.2);

  const growthMultiplier = industry === 'ecommerce' ? 3.4 : industry === 'saas' ? 4.1 : industry === 'b2b' ? 3.8 : 2.9;
  
  const projectedTraffic = Math.round(currentTraffic * growthMultiplier);
  const additionalTraffic = projectedTraffic - currentTraffic;
  const currentLeadsOrSales = Math.round((currentTraffic * (conversionRate / 100)));
  const projectedLeadsOrSales = Math.round((projectedTraffic * (conversionRate / 100)));
  const additionalMonthlyRevenue = Math.round((projectedLeadsOrSales - currentLeadsOrSales) * avgOrderValue);
  const annualRevenuePotential = additionalMonthlyRevenue * 12;

  return (
    <section id="calculator" className="py-24 relative bg-[#F4F5F6] border-t border-b border-[#13144D]/15 text-[#13144D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#13144D] text-[#02E3A7] border border-[#02E3A7]/30 text-xs font-extrabold uppercase tracking-wider mb-4">
            <Calculator className="w-3.5 h-3.5 text-[#02E3A7]" /> Interactive Organic Revenue Calculator™
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#13144D] tracking-tight mb-4">
            Calculate Your <span className="gradient-text-vibrant">Organic Growth Potential</span>
          </h2>
          <p className="text-base sm:text-lg text-[#13144D]/80">
            Adjust your business metrics to see how data-driven SEO engineering drives measurable bottom-line revenue.
          </p>
        </div>

        {/* Calculator Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Controls Panel */}
          <div className="lg:col-span-6 p-8 rounded-3xl bg-[#FFFFFF] border border-[#13144D]/15 shadow-xl space-y-8 backdrop-blur-xl">
            
            {/* Step 1: Industry */}
            <div>
              <label className="text-xs font-bold text-[#13144D] uppercase tracking-wider block mb-3">
                1. Select Industry Sector
              </label>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { id: 'ecommerce', label: 'E-Commerce Store', icon: Store },
                  { id: 'saas', label: 'B2B SaaS Platform', icon: Layers },
                  { id: 'b2b', label: 'B2B & Enterprise', icon: Briefcase },
                  { id: 'local', label: 'Local & Service Brand', icon: Building },
                ].map((item) => {
                  const Icon = item.icon;
                  const active = industry === item.id;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setIndustry(item.id as any)}
                      className={`p-3.5 rounded-xl border text-xs font-bold flex items-center gap-2.5 transition-all ${
                        active
                          ? 'bg-[#13144D] border-[#13144D] text-[#02E3A7] shadow-md'
                          : 'bg-[#F4F5F6] border-[#13144D]/15 text-[#13144D] hover:bg-[#13144D]/10'
                      }`}
                    >
                      <Icon className={`w-4 h-4 ${active ? 'text-[#02E3A7]' : 'text-[#13144D]'}`} />
                      <span>{item.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Current Monthly Organic Visitors Slider */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-bold text-[#13144D] uppercase tracking-wider">
                  2. Current Monthly Organic Traffic
                </label>
                <span className="text-sm font-black text-[#13144D] px-3 py-1 rounded-lg bg-[#F4F5F6] border border-[#13144D]/20">
                  {currentTraffic.toLocaleString()} Visitors/mo
                </span>
              </div>
              <input
                type="range"
                min="1000"
                max="100000"
                step="1000"
                value={currentTraffic}
                onChange={(e) => setCurrentTraffic(Number(e.target.value))}
                className="w-full h-2 bg-[#F4F5F6] rounded-lg appearance-none cursor-pointer accent-[#02E3A7]"
              />
              <div className="flex justify-between text-[11px] text-[#13144D]/70 mt-1">
                <span>1,000</span>
                <span>50,000</span>
                <span>100,000+</span>
              </div>
            </div>

            {/* Step 3: Average Order / Lead Lifetime Value */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-bold text-[#13144D] uppercase tracking-wider">
                  3. Avg Order / Customer Deal Value ($)
                </label>
                <span className="text-sm font-black text-[#13144D] px-3 py-1 rounded-lg bg-[#F4F5F6] border border-[#13144D]/20">
                  ${avgOrderValue.toLocaleString()}
                </span>
              </div>
              <input
                type="range"
                min="20"
                max="2500"
                step="10"
                value={avgOrderValue}
                onChange={(e) => setAvgOrderValue(Number(e.target.value))}
                className="w-full h-2 bg-[#F4F5F6] rounded-lg appearance-none cursor-pointer accent-[#02E3A7]"
              />
              <div className="flex justify-between text-[11px] text-[#13144D]/70 mt-1">
                <span>$20</span>
                <span>$1,000</span>
                <span>$2,500+</span>
              </div>
            </div>

            {/* Step 4: Estimated Conversion Rate */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-bold text-[#13144D] uppercase tracking-wider">
                  4. Site Conversion Rate (%)
                </label>
                <span className="text-sm font-black text-[#13144D] px-3 py-1 rounded-lg bg-[#F4F5F6] border border-[#13144D]/20">
                  {conversionRate}%
                </span>
              </div>
              <input
                type="range"
                min="0.5"
                max="8.0"
                step="0.1"
                value={conversionRate}
                onChange={(e) => setConversionRate(Number(e.target.value))}
                className="w-full h-2 bg-[#F4F5F6] rounded-lg appearance-none cursor-pointer accent-[#02E3A7]"
              />
            </div>

          </div>

          {/* Forecast Output Result Display Card */}
          <div className="lg:col-span-6">
            <div className="p-8 rounded-3xl bg-[#13144D] text-[#FFFFFF] shadow-2xl relative overflow-hidden border border-[#02E3A7]/30">
              
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#02E3A7]/10 rounded-full blur-2xl pointer-events-none"></div>

              <div className="flex items-center justify-between border-b border-[#02E3A7]/20 pb-4 mb-6">
                <span className="text-xs font-bold text-[#02E3A7] uppercase tracking-wider flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-[#6AF15C]" /> Revenue Engine™ Forecast
                </span>
                <span className="text-xs font-semibold text-[#F4F5F6]/70">
                  12-Month Organic Growth Model
                </span>
              </div>

              {/* Main Projected Annual Revenue Highlight */}
              <div className="mb-8">
                <span className="text-xs text-[#F4F5F6]/80 block mb-1">
                  Est. Additional Annual Organic Revenue:
                </span>
                <div className="text-4xl sm:text-5xl font-black text-[#02E3A7]">
                  +${annualRevenuePotential.toLocaleString()}
                </div>
                <span className="text-xs text-[#F4F5F6] mt-2 block">
                  That represents approximately <strong className="text-[#6AF15C]">+${additionalMonthlyRevenue.toLocaleString()}/month</strong> in recurring digital sales pipeline.
                </span>
              </div>

              {/* Breakdown Grid */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="p-4 rounded-2xl bg-[#0d0e38] border border-[#02E3A7]/20">
                  <span className="text-xs text-[#F4F5F6]/70 block mb-1">Projected Monthly Traffic</span>
                  <span className="text-xl font-bold text-white block">
                    {projectedTraffic.toLocaleString()}
                  </span>
                  <span className="text-[10px] text-[#02E3A7] font-extrabold">
                    +{additionalTraffic.toLocaleString()} new visitors
                  </span>
                </div>

                <div className="p-4 rounded-2xl bg-[#0d0e38] border border-[#02E3A7]/20">
                  <span className="text-xs text-[#F4F5F6]/70 block mb-1">Monthly Leads / Sales</span>
                  <span className="text-xl font-bold text-white block">
                    {projectedLeadsOrSales.toLocaleString()}
                  </span>
                  <span className="text-[10px] text-[#02E3A7] font-extrabold">
                    +{(projectedLeadsOrSales - currentLeadsOrSales).toLocaleString()} new acquisitions
                  </span>
                </div>
              </div>

              {/* CTA Form Trigger */}
              <div className="space-y-3">
                <Link
                  href="/contact"
                  className="btn-pro-green w-full py-4 rounded-2xl font-extrabold text-center flex items-center justify-center gap-2 transition-all text-sm shadow-xl text-[#13144D]"
                >
                  Get My Custom Revenue Plan <ArrowRight className="w-4 h-4 text-[#13144D]" />
                </Link>
                <div className="flex items-center justify-center gap-2 text-[11px] text-[#F4F5F6]/80">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#02E3A7]" />
                  <span>100% Confidential. Free ROI proposal built by senior strategists.</span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
