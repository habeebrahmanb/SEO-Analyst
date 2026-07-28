'use client';

import React, { useState } from 'react';
import { 
  TrendingUp, 
  Mail, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Globe, 
  Linkedin, 
  Twitter, 
  Github, 
  Youtube,
  Heart
} from 'lucide-react';

export function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setSubscribed(true);
    setTimeout(() => {
      setSubscribed(false);
      setNewsletterEmail('');
    }, 3000);
  };

  return (
    <footer className="bg-slate-900 border-t border-slate-800 text-slate-400 text-xs relative overflow-hidden">
      
      {/* Glow highlight */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-emerald-500/60 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <a href="#hero" className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-emerald-500 flex items-center justify-center shadow-lg shadow-emerald-500/20">
                <TrendingUp className="w-4 h-4 text-white font-bold" />
              </div>
              <span className="text-xl font-extrabold tracking-tight text-white">
                SEO <span className="text-emerald-400">Analyst</span>
              </span>
            </a>

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Data-driven organic growth consultancy. Specializing in technical SEO audits, Core Web Vitals optimization, entity content architecture, and high-impact B2B/B2C lead acquisition.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a href="#" className="p-2 rounded-xl bg-slate-800 border border-slate-700 text-slate-300 hover:text-white hover:border-emerald-500 transition-colors">
                <Linkedin className="w-4 h-4 text-emerald-400" />
              </a>
              <a href="#" className="p-2 rounded-xl bg-slate-800 border border-slate-700 text-slate-300 hover:text-white hover:border-emerald-500 transition-colors">
                <Twitter className="w-4 h-4 text-emerald-400" />
              </a>
              <a href="#" className="p-2 rounded-xl bg-slate-800 border border-slate-700 text-slate-300 hover:text-white hover:border-emerald-500 transition-colors">
                <Github className="w-4 h-4 text-emerald-400" />
              </a>
              <a href="#" className="p-2 rounded-xl bg-slate-800 border border-slate-700 text-slate-300 hover:text-white hover:border-emerald-500 transition-colors">
                <Youtube className="w-4 h-4 text-emerald-400" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-2">
              <li><a href="#hero" className="hover:text-emerald-400 transition-colors">Home Overview</a></li>
              <li><a href="#services" className="hover:text-emerald-400 transition-colors">Core Services</a></li>
              <li><a href="#portfolio" className="hover:text-emerald-400 transition-colors">Case Studies</a></li>
              <li><a href="#calculator" className="hover:text-emerald-400 transition-colors">Revenue Calculator</a></li>
              <li><a href="#blog" className="hover:text-emerald-400 transition-colors">SEO Insights & Blog</a></li>
              <li><a href="#contact" className="hover:text-emerald-400 transition-colors">Get Custom Proposal</a></li>
            </ul>
          </div>

          {/* Col 3: Services Catalog */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Growth Solutions</h4>
            <ul className="space-y-2">
              <li><a href="#services" className="hover:text-emerald-400 transition-colors">Core Web Vitals & Speed</a></li>
              <li><a href="#services" className="hover:text-emerald-400 transition-colors">Entity Search & Content SILO</a></li>
              <li><a href="#services" className="hover:text-emerald-400 transition-colors">High-DR Link Acquisition</a></li>
              <li><a href="#services" className="hover:text-emerald-400 transition-colors">Local 3-Pack Map Domination</a></li>
              <li><a href="#services" className="hover:text-emerald-400 transition-colors">Shopify & E-Com Revenue SEO</a></li>
              <li><a href="#services" className="hover:text-emerald-400 transition-colors">Organic Analytics Tracking</a></li>
            </ul>
          </div>

          {/* Col 4: Newsletter */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Organic Search Insider</h4>
            <p className="text-slate-400 text-xs">
              Subscribe to get actionable algorithm update breakdowns and SERP optimization tips delivered every week.
            </p>

            {subscribed ? (
              <div className="p-3 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 font-semibold flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" /> Subscribed to Growth Insider!
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  required
                  placeholder="name@company.com"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-white placeholder-slate-400 text-xs focus:outline-none focus:border-emerald-500"
                />
                <button
                  type="submit"
                  className="btn-pro-green px-4 py-2.5 rounded-xl font-bold text-xs shrink-0 text-white"
                >
                  Join
                </button>
              </form>
            )}
            <span className="text-[10px] text-slate-500 block">Zero spam. Unsubscribe anytime.</span>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <div>
            © {new Date().getFullYear()} SEO Analyst. All rights reserved. Over $10B+ Client Revenue Driven.
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-slate-300">Privacy Policy</a>
            <span>•</span>
            <a href="#" className="hover:text-slate-300">Terms of Service</a>
            <span>•</span>
            <span className="flex items-center gap-1 text-emerald-400 font-semibold">
              <ShieldCheck className="w-3.5 h-3.5" /> Schema Validated
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
