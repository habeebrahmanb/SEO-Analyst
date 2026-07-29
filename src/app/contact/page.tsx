import React from 'react';
import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppWidget } from '@/components/WhatsAppWidget';
import { ContactSection } from '@/components/ContactSection';

export const metadata: Metadata = {
  title: "Contact & Organic Growth Strategy Consultation | SEO Analyst",
  description: "Request a custom SEO audit, monthly growth retainer proposal, or schedule a 20-minute live screen share consultation with senior strategists.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#080c14] text-slate-100 flex flex-col selection:bg-emerald-500 selection:text-slate-950">
      <Header />

      <main className="flex-grow pt-24">
        <ContactSection />
      </main>

      <WhatsAppWidget />
      <Footer />
    </div>
  );
}
