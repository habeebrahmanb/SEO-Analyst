'use client';

import React, { useState } from 'react';
import { MessageCircle, X, Send, CheckCheck, Sparkles } from 'lucide-react';

export function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [userMessage, setUserMessage] = useState('');

  const defaultPhone = '15550192834'; // Target WhatsApp phone number

  const quickPrompts = [
    "Hi! I'd like a Free Organic Revenue Proposal for my site.",
    "Hello, what are your monthly SEO retainer pricing plans?",
    "Hi, I need help building high-DR backlinks for my brand."
  ];

  const handleSend = (textToSend?: string) => {
    const text = textToSend || userMessage || "Hello, I am interested in your SEO services!";
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/${defaultPhone}?text=${encodedText}`, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      
      {/* WhatsApp Chat Popup Box */}
      {isOpen && (
        <div className="mb-4 w-80 sm:w-96 rounded-3xl bg-[#FFFFFF] border border-[#13144D]/15 shadow-2xl overflow-hidden animate-in slide-in-from-bottom-5 duration-300">
          
          {/* Header Bar */}
          <div className="p-4 bg-[#13144D] text-[#02E3A7] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80"
                  alt="SEO Strategist"
                  className="w-10 h-10 rounded-full object-cover border-2 border-[#02E3A7]"
                />
                <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-[#6AF15C] border-2 border-[#13144D] animate-pulse"></span>
              </div>
              <div>
                <span className="block text-sm font-bold leading-tight text-white">SEO Growth Consultant</span>
                <span className="block text-[11px] text-[#F4F5F6]/80">
                  Online • Replies in &lt; 5 mins
                </span>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-full hover:bg-[#02E3A7]/20 transition-colors"
            >
              <X className="w-5 h-5 text-[#02E3A7]" />
            </button>
          </div>

          {/* Chat History Area */}
          <div className="p-4 bg-[#F4F5F6] space-y-3 min-h-[180px] max-h-[260px] overflow-y-auto">
            
            {/* Incoming Message Bubble */}
            <div className="flex items-start gap-2 max-w-[85%]">
              <div className="p-3.5 rounded-2xl bg-[#FFFFFF] border border-[#13144D]/15 text-xs text-[#13144D] shadow-sm space-y-1">
                <span className="font-bold text-[#13144D] block">Senior Growth Consultant</span>
                <p>
                  👋 Hi there! Looking to boost your organic search revenue or analyze competitor gaps? Send a quick message!
                </p>
                <div className="flex justify-end items-center gap-1 text-[10px] text-[#13144D]/60">
                  <span>Just now</span>
                  <CheckCheck className="w-3 h-3 text-[#02E3A7]" />
                </div>
              </div>
            </div>

            {/* Quick Select Prompts */}
            <div className="space-y-1.5 pt-2">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#13144D]/60 block">
                Suggested Topics:
              </span>
              {quickPrompts.map((prompt, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSend(prompt)}
                  className="w-full text-left p-2 rounded-xl bg-white hover:bg-[#F4F5F6] border border-[#13144D]/15 text-[11px] font-medium text-[#13144D] transition-colors flex items-center justify-between"
                >
                  <span className="truncate">{prompt}</span>
                  <Sparkles className="w-3 h-3 text-[#02E3A7] shrink-0 ml-1" />
                </button>
              ))}
            </div>

          </div>

          {/* Input Box Bar */}
          <div className="p-3 bg-white border-t border-[#13144D]/15 flex items-center gap-2">
            <input
              type="text"
              placeholder="Type your WhatsApp message..."
              value={userMessage}
              onChange={(e) => setUserMessage(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              className="flex-1 px-3.5 py-2 rounded-xl bg-[#F4F5F6] border border-[#13144D]/15 text-[#13144D] placeholder-[#13144D]/40 text-xs focus:outline-none focus:border-[#02E3A7]"
            />
            <button
              onClick={() => handleSend()}
              className="btn-pro-green p-2.5 rounded-xl transition-transform active:scale-95 text-[#13144D]"
              aria-label="Send WhatsApp message"
            >
              <Send className="w-4 h-4 text-[#13144D]" />
            </button>
          </div>

        </div>
      )}

      {/* Floating Trigger Circle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="btn-pro-green p-4 rounded-full shadow-2xl flex items-center justify-center gap-2 relative group hover:scale-105 active:scale-95 transition-all text-[#13144D] text-xs font-bold"
        aria-label="Open WhatsApp Chat"
      >
        <MessageCircle className="w-5 h-5 text-[#13144D]" />
        <span className="hidden sm:inline">Chat on WhatsApp</span>
      </button>

    </div>
  );
}
