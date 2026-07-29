'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Sparkles, TrendingUp, Phone, ChevronRight } from 'lucide-react';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

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
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Audit Tool', href: '/audit' },
    { name: 'SEO Blog', href: '/blog' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? 'glass-nav py-2.5 shadow-xl border-b border-[#02E3A7]/30 bg-[#13144D]/95'
          : 'bg-[#13144D]/90 backdrop-blur-md py-3 border-b border-[#02E3A7]/20'
        }`}
    >
      {/* Top Banner Ticker */}
      <div className="hidden sm:block bg-[#0d0e38] text-[#FFFFFF] text-[11px] py-1.5 border-b border-[#02E3A7]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-[#02E3A7]/20 text-[#02E3A7] font-bold text-[10px] uppercase tracking-wider border border-[#02E3A7]/30">
              ORGANIC GROWTH ENGINE™
            </span>
            <span className="text-[#F4F5F6] font-medium">
              Over <strong className="text-[#6AF15C] font-bold">$10.2 Billion</strong> in Verified Organic Revenue Driven
            </span>
          </div>
          <div className="flex items-center gap-5 text-[#F4F5F6]">
            <a href="tel:8886015359" className="hover:text-[#02E3A7] flex items-center gap-1.5 transition-colors font-semibold">
              <Phone className="w-3 h-3 text-[#02E3A7]" />
              <span>Call SEO Specialist: (888) 601-5359</span>
            </a>
            <span className="text-[#FFFFFF]/20">|</span>
            <Link href="/audit" className="hover:text-[#6AF15C] flex items-center gap-1 transition-colors text-[#02E3A7] font-bold">
              Get Proposal <ChevronRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-1">
        <div className="flex items-center justify-between">
          {/* Logo & Brand Name */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#02E3A7] to-[#6AF15C] flex items-center justify-center shadow-lg shadow-[#02E3A7]/20 group-hover:scale-105 transition-transform duration-300">
              <TrendingUp className="w-5 h-5 text-[#13144D] font-extrabold" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xl font-extrabold tracking-tight text-[#FFFFFF]">
                  SEO <span className="text-[#02E3A7]">Analyst</span>
                </span>
                <span className="hidden sm:flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#02E3A7]/20 text-[#02E3A7] border border-[#02E3A7]/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#6AF15C] animate-ping"></span>
                  EXECUTIVE PRO
                </span>
              </div>
              <span className="block text-[11px] text-[#F4F5F6]/70 font-semibold tracking-wide">
                Organic Revenue Growth Partner
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-[#0d0e38]/80 p-1.5 rounded-full border border-[#02E3A7]/20 backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-3.5 py-1.5 text-xs font-bold rounded-full transition-all duration-200 ${isActive
                      ? 'bg-[#02E3A7] text-[#13144D] shadow-md shadow-[#02E3A7]/20'
                      : 'text-[#F4F5F6] hover:text-[#02E3A7] hover:bg-[#FFFFFF]/10'
                    }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Button */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#02E3A7]/10 border border-[#02E3A7]/30 text-xs font-bold text-[#02E3A7]">
              <span className="w-2 h-2 rounded-full bg-[#6AF15C] animate-pulse"></span>
              98.4% Retention
            </div>

            <Link
              href="/audit"
              className="btn-pro-green inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold transition-all duration-200"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#13144D]" />
              <span>Free Instant Audit</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-3">
            <Link
              href="/audit"
              className="px-3.5 py-2 text-xs font-bold rounded-full btn-pro-green"
            >
              Audit Tool
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-[#0d0e38] border border-[#02E3A7]/30 text-[#FFFFFF]"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-[#02E3A7]" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#13144D] border-b border-[#02E3A7]/30 py-6 px-6 mt-3 shadow-2xl animate-in slide-in-from-top duration-300">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`py-2.5 px-4 text-sm font-bold rounded-xl transition-colors flex items-center justify-between ${isActive
                      ? 'bg-[#02E3A7] text-[#13144D]'
                      : 'text-[#FFFFFF] hover:bg-[#0d0e38]'
                    }`}
                >
                  <span>{link.name}</span>
                  {isActive && <ChevronRight className="w-4 h-4 text-[#13144D]" />}
                </Link>
              );
            })}
            <div className="pt-4 border-t border-[#02E3A7]/20 flex flex-col gap-3">
              <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[#02E3A7]/10 text-xs font-bold text-[#02E3A7] border border-[#02E3A7]/20">
                <span className="w-2 h-2 rounded-full bg-[#6AF15C]"></span>
                $10B+ Client Revenue Generated
              </div>
              <Link
                href="/audit"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3 rounded-xl font-bold btn-pro-green text-center flex items-center justify-center gap-2 text-sm text-[#13144D]"
              >
                <Sparkles className="w-4 h-4" />
                Run Free ROI Audit
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
