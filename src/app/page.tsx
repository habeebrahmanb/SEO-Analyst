import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { ServicesSection } from '@/components/ServicesSection';
import { PortfolioSection } from '@/components/PortfolioSection';
import { AuditCalculator } from '@/components/AuditCalculator';
import { BlogSection } from '@/components/BlogSection';
import { ContactSection } from '@/components/ContactSection';
import { WhatsAppWidget } from '@/components/WhatsAppWidget';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#080c14] text-slate-100 flex flex-col selection:bg-emerald-500 selection:text-slate-950">
      {/* Fixed Sticky Header */}
      <Header />

      {/* Main Single Page Sections */}
      <main className="flex-grow">
        {/* Hero & Real-time Audit Checker */}
        <HeroSection />

        {/* Services & Deliverables Inspector */}
        <ServicesSection />

        {/* Verifiable Case Studies & Ranking Growth */}
        <PortfolioSection />

        {/* Interactive SEO ROI & Revenue Calculator */}
        <AuditCalculator />

        {/* SEO Guides & Knowledge Base Modal Reader */}
        <BlogSection />

        {/* Inquiry Form & Consultation Booking */}
        <ContactSection />
      </main>

      {/* WhatsApp Floating Live Chat Widget */}
      <WhatsAppWidget />

      {/* Detailed Multi-column Footer */}
      <Footer />
    </div>
  );
}
