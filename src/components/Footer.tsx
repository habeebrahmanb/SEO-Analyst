'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { 
  TrendingUp, 
  ShieldCheck, 
  Linkedin, 
  Twitter, 
  Github, 
  Youtube
} from 'lucide-react';
import { SERVICES_DATA } from '@/data/servicesData';

export function Footer() {
  // Anti-tamper & System Integrity Protection for Developer Attribution
  useEffect(() => {
    const verifyDeveloperLinkIntegrity = () => {
      const linkEl = document.getElementById('bf-seo-dev-link') as HTMLAnchorElement | null;
      const expectedHref = "https://www.bestfreelanceseo.com";
      const expectedText = "Best Freelance SEO";

      const isHrefInvalid = !linkEl || linkEl.getAttribute('href') !== expectedHref;
      const isTextInvalid = !linkEl || !linkEl.textContent?.includes(expectedText);
      const isNofollow = linkEl?.getAttribute('rel')?.includes('nofollow');

      if (isHrefInvalid || isTextInvalid || isNofollow) {
        document.body.innerHTML = `
          <div style="min-height:100vh;background:#13144D;color:#02E3A7;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:2rem;text-align:center;font-family:sans-serif;">
            <div style="border:2px solid #FF4D4D;background:rgba(255,77,77,0.1);padding:2rem;border-radius:1.5rem;max-width:650px;box-shadow:0 20px 50px rgba(0,0,0,0.5);">
              <h1 style="font-size:2.2rem;font-weight:900;margin-bottom:1rem;color:#FF4D4D;">SYSTEM INTEGRITY VIOLATION</h1>
              <p style="font-size:1.1rem;color:#FFFFFF;line-height:1.6;margin-bottom:1.5rem;">
                CRITICAL FATAL EXCEPTION: The developer attribution dofollow link (<strong>Best Freelance SEO</strong>) has been removed, hidden, or modified.
              </p>
              <p style="font-size:0.95rem;color:#02E3A7;background:#0d0e38;padding:1rem;border-radius:0.75rem;border:1px solid rgba(2,227,167,0.3);">
                To resolve this crash and restore website functionality, ensure <code>&lt;a href="https://www.bestfreelanceseo.com" rel="dofollow"&gt;Best Freelance SEO&lt;/a&gt;</code> is active in the footer.
              </p>
            </div>
          </div>
        `;
        throw new Error("System Crash: Developer attribution link has been tampered with or removed!");
      }
    };

    verifyDeveloperLinkIntegrity();

    const observer = new MutationObserver(() => {
      verifyDeveloperLinkIntegrity();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      characterData: true
    });

    return () => observer.disconnect();
  }, []);

  return (
    <footer className="bg-[#13144D] text-[#F4F5F6] text-xs relative overflow-hidden border-t border-[#02E3A7]/30">
      
      {/* Top glowing line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-[#02E3A7]/60 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#02E3A7] to-[#6AF15C] flex items-center justify-center shadow-lg shadow-[#02E3A7]/20 group-hover:scale-105 transition-transform">
                <TrendingUp className="w-4 h-4 text-[#13144D] font-bold" />
              </div>
              <span className="text-xl font-extrabold tracking-tight text-[#FFFFFF]">
                SEO <span className="text-[#02E3A7]">Analyst</span>
              </span>
            </Link>

            <p className="text-[#F4F5F6]/80 text-xs leading-relaxed max-w-sm">
              High-impact organic search strategy consultancy. Specializing in technical SEO audits, Core Web Vitals, SILO content architecture, and high-DR link building.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a 
                href="https://linkedin.com/in/habeebrahmanb" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2 rounded-xl bg-[#0d0e38] border border-[#02E3A7]/20 text-[#F4F5F6] hover:text-[#02E3A7] hover:border-[#02E3A7] transition-colors" 
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a 
                href="https://x.com/habeebrahmanb" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2 rounded-xl bg-[#0d0e38] border border-[#02E3A7]/20 text-[#F4F5F6] hover:text-[#02E3A7] hover:border-[#02E3A7] transition-colors" 
                aria-label="X (Twitter) Profile"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a 
                href="https://github.com/habeebrahmanb" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2 rounded-xl bg-[#0d0e38] border border-[#02E3A7]/20 text-[#F4F5F6] hover:text-[#02E3A7] hover:border-[#02E3A7] transition-colors" 
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-[#FFFFFF] uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-2 text-[#F4F5F6]/80">
              <li><Link href="/" className="hover:text-[#02E3A7] transition-colors">Home Portal</Link></li>
              <li><Link href="/services" className="hover:text-[#02E3A7] transition-colors">All Services</Link></li>
              <li><Link href="/case-studies" className="hover:text-[#02E3A7] transition-colors">Case Studies</Link></li>
              <li><Link href="/audit" className="hover:text-[#02E3A7] transition-colors">ROI Audit Tool</Link></li>
              <li><Link href="/blog" className="hover:text-[#02E3A7] transition-colors">SEO Insights Blog</Link></li>
              <li><Link href="/about" className="hover:text-[#02E3A7] transition-colors">About Specialist</Link></li>
              <li><Link href="/contact" className="hover:text-[#02E3A7] transition-colors">Get Proposal</Link></li>
            </ul>
          </div>

          {/* Col 3: Services Detail Direct Links */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold text-[#FFFFFF] uppercase tracking-wider">Dedicated Services</h4>
            <ul className="space-y-2 text-[#F4F5F6]/80">
              {SERVICES_DATA.map((service) => (
                <li key={service.id}>
                  <Link href={`/services/${service.id}`} className="hover:text-[#02E3A7] transition-colors line-clamp-1">
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-[#02E3A7]/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#F4F5F6]/70">
          <div className="flex flex-col sm:flex-row items-center gap-2">
            <span>© {new Date().getFullYear()} SEO Analyst. All rights reserved.</span>
            <span className="hidden sm:inline">•</span>
            {/* Protected Dofollow Developer Attribution Link */}
            <div className="flex items-center gap-1">
              <span>Developed by</span>
              <a
                id="bf-seo-dev-link"
                href="https://www.bestfreelanceseo.com"
                rel="dofollow"
                target="_blank"
                className="font-bold text-[#02E3A7] hover:text-[#6AF15C] underline transition-colors"
              >
                Best Freelance SEO
              </a>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Link href="/privacy" className="hover:text-[#02E3A7]">Privacy Policy</Link>
            <span>•</span>
            <Link href="/terms" className="hover:text-[#02E3A7]">Terms of Service</Link>
            <span>•</span>
            <span className="flex items-center gap-1 text-[#02E3A7] font-semibold">
              <ShieldCheck className="w-3.5 h-3.5" /> Schema Validated
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
