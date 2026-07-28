'use client';

import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Calendar, 
  Send, 
  CheckCircle2, 
  ShieldCheck, 
  Clock, 
  MessageSquare,
  Sparkles,
  Loader2
} from 'lucide-react';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    website: '',
    service: 'Technical SEO Audit',
    budget: '$2,500 - $5,000/mo',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 relative bg-grid-pattern bg-white">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-4">
            <MessageSquare className="w-3.5 h-3.5 text-emerald-600" /> Request Your Custom Proposal
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Ready To Accelerate Your <span className="gradient-text-emerald">Organic Revenue?</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Tell us about your domain and growth targets. Our senior strategists will build a custom organic proposal with ROI projections.
          </p>
        </div>

        {/* Main Grid: Form + Info Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Form Column */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-xl">
              
              {submitted ? (
                <div className="text-center py-12 space-y-4 animate-in zoom-in-95 duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-black text-slate-900">Proposal Request Sent!</h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto">
                    Thank you, <strong className="text-emerald-700">{formData.name}</strong>. Our team is auditing <span className="text-emerald-600 font-mono">{formData.website}</span> and will deliver your custom proposal within 24 business hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        website: '',
                        service: 'Technical SEO Audit',
                        budget: '$2,500 - $5,000/mo',
                        message: ''
                      });
                    }}
                    className="px-6 py-2.5 rounded-xl font-bold bg-slate-100 text-slate-700 text-xs hover:bg-slate-200 transition-colors mt-4"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Name */}
                    <div>
                      <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-2">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-colors"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-2">
                        Business Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="john@yourbrand.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Website URL */}
                    <div>
                      <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-2">
                        Website URL *
                      </label>
                      <input
                        type="url"
                        required
                        placeholder="https://yourbrand.com"
                        value={formData.website}
                        onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-colors"
                      />
                    </div>

                    {/* Primary Service Desired */}
                    <div>
                      <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-2">
                        Primary Service Needed
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-colors"
                      >
                        <option>Full Technical SEO Audit</option>
                        <option>Monthly SEO Retainer</option>
                        <option>On-Page & SILO Optimization</option>
                        <option>High-DR Link Building Campaign</option>
                        <option>Local SEO & Google Maps</option>
                        <option>E-Commerce SEO Overhaul</option>
                      </select>
                    </div>
                  </div>

                  {/* Estimated Monthly Budget */}
                  <div>
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-2">
                      Estimated Monthly Budget Range
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-colors"
                    >
                      <option>$1,500 - $2,500 / month</option>
                      <option>$2,500 - $5,000 / month</option>
                      <option>$5,000 - $10,000 / month</option>
                      <option>$10,000+ Enterprise Project</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-2">
                      Tell Us About Your Revenue Goals & Market Competitors
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Share details regarding your target keywords, main competitors, or tech stack..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-colors"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-pro-green w-full py-4 rounded-2xl text-sm flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin text-white" />
                        Generating Custom Proposal...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 text-white" /> Get My Free Organic Growth Proposal
                      </>
                    )}
                  </button>

                  <div className="flex items-center justify-center gap-4 text-xs text-slate-500 pt-2">
                    <span className="flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> Strict Confidentiality
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-emerald-600" /> Fast 24-Hour Turnaround
                    </span>
                  </div>

                </form>
              )}

            </div>
          </div>

          {/* Right Info Sidebar */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Contact Cards */}
            <div className="p-6 rounded-3xl bg-white border border-slate-200 space-y-6 shadow-xl">
              <h3 className="text-lg font-bold text-slate-900 mb-2">SEO Specialist Direct Line</h3>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">Direct Email</span>
                  <a href="mailto:proposals@seoanalyst.com" className="text-sm font-semibold text-slate-900 hover:text-emerald-700 transition-colors">
                    proposals@seoanalyst.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">Call Growth Specialist</span>
                  <a href="tel:8886015359" className="text-sm font-semibold text-slate-900 hover:text-emerald-700 transition-colors">
                    (888) 601-5359
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">Headquarters</span>
                  <span className="text-sm font-semibold text-slate-900">
                    San Francisco, CA • Remote Global Office
                  </span>
                </div>
              </div>
            </div>

            {/* Instant Booking Banner Card */}
            <div className="p-6 rounded-3xl bg-slate-900 text-white space-y-3 shadow-xl">
              <div className="w-10 h-10 rounded-xl bg-emerald-500 flex items-center justify-center font-bold">
                <Calendar className="w-5 h-5 text-white" />
              </div>
              <h4 className="text-lg font-bold text-white">Prefer an Immediate Screen Share?</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Schedule a 20-minute live screen share with a senior SEO strategist to walk through competitor gaps and keyword opportunities.
              </p>
              <a
                href="https://calendly.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold bg-emerald-500 text-white text-xs hover:bg-emerald-600 transition-colors"
              >
                Open Live Calendar <Sparkles className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
