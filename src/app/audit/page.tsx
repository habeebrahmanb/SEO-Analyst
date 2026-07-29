import React from 'react';
import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppWidget } from '@/components/WhatsAppWidget';
import { AuditCalculator } from '@/components/AuditCalculator';
import { HeroSection } from '@/components/HeroSection';

export const metadata: Metadata = {
  title: "Interactive SEO ROI & Revenue Audit Calculator | SEO Analyst",
  description: "Calculate your website's organic traffic potential, estimated monthly lead growth, and additional annual revenue based on industry search benchmarks.",
};

export default function AuditPage() {
  return (
    <div className="min-h-screen bg-[#080c14] text-slate-100 flex flex-col selection:bg-emerald-500 selection:text-slate-950">
      <Header />

      <main className="flex-grow pt-24">
        <AuditCalculator />
      </main>

      <WhatsAppWidget />
      <Footer />
    </div>
  );
}
