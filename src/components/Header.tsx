'use client';

import React, { useState, useEffect } from 'react';
import { Search, Menu, X, ArrowRight, ShieldCheck, Sparkles, TrendingUp, Phone, ChevronRight } from 'lucide-react';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Case Studies', href: '#portfolio' },
    { name: 'Audit Calculator', href: '#calculator' },
    { name: 'SEO Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass-nav py-2.5 shadow-md border-b border-slate-200 bg-white/95'
          : 'bg-white/90 backdrop-blur-md py-3 border-b border-slate-200/80'
      }`}
    >
      {/* Top Banner Ticker */}
      <div className="hidden sm:block bg-slate-900 text-slate-200 text-[11px] py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-bold text-[10px] uppercase tracking-wider">
              PRO GROWTH FX™
            </span>
            <span className="text-slate-300 font-medium">
              Over <strong className="text-emerald-400 font-bold">$10.2 Billion</strong> in Verified Client Revenue Driven
            </span>
          </div>
          <div className="flex items-center gap-5 text-slate-300">
            <a href="tel:8886015359" className="hover:text-emerald-400 flex items-center gap-1.5 transition-colors font-semibold">
              <Phone className="w-3 h-3 text-emerald-400" />
              <span>Call SEO Specialist: (888) 601-5359</span>
            </a>
            <span className="text-slate-700">|</span>
            <a href="#calculator" className="hover:text-emerald-300 flex items-center gap-1 transition-colors text-emerald-400 font-bold">
              Get Proposal <ChevronRight className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-1">
        <div className="flex items-center justify-between">
          {/* Logo & Brand Name */}
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-emerald-500 flex items-center justify-center shadow-lg shadow-emerald-500/20 group-hover:scale-105 transition-transform duration-300">
              <TrendingUp className="w-5 h-5 text-white font-bold" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xl font-extrabold tracking-tight text-slate-900 group-hover:text-emerald-600 transition-colors">
                  SEO <span className="text-emerald-500">Analyst</span>
                </span>
                <span className="hidden sm:flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping"></span>
                  CERTIFIED PRO
                </span>
              </div>
              <span className="block text-[11px] text-slate-500 font-semibold tracking-wide">
                Organic Revenue Growth Partner
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-100/80 p-1.5 rounded-full border border-slate-200 backdrop-blur-md">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-4 py-2 text-sm font-semibold text-slate-700 hover:text-emerald-700 hover:bg-emerald-50 rounded-full transition-all duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Button & Status */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-semibold text-emerald-800">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              98.4% Client Retention
            </div>

            <a
              href="#calculator"
              className="btn-pro-green inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
            >
              <Sparkles className="w-4 h-4 text-white" />
              <span>Get Proposal</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-3">
            <a
              href="#calculator"
              className="px-3.5 py-2 text-xs font-bold rounded-full btn-pro-green text-white"
            >
              Proposal
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-slate-100 border border-slate-200 text-slate-700 hover:text-slate-900"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 py-6 px-6 mt-3 shadow-2xl animate-in slide-in-from-top duration-300">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 px-4 text-base font-semibold text-slate-800 hover:bg-emerald-50 rounded-xl transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 border-t border-slate-200 flex flex-col gap-3">
              <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-emerald-50 text-xs font-semibold text-emerald-800">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                $10B+ Client Revenue Generated
              </div>
              <a
                href="#calculator"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3 rounded-xl font-bold btn-pro-green text-white text-center flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                Get Instant Proposal
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
