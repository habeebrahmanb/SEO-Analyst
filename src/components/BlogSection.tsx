'use client';

import React, { useState } from 'react';
import { BLOG_DATA, BlogPost } from '@/data/blogData';
import { 
  BookOpen, 
  Clock, 
  ArrowRight, 
  X, 
  Share2, 
  Sparkles,
  CheckCircle,
  Lightbulb
} from 'lucide-react';

export function BlogSection() {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  return (
    <section id="blog" className="py-24 relative bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-4">
              <BookOpen className="w-3.5 h-3.5 text-emerald-600" /> SEO Insights & Growth Engineering
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
              Latest <span className="gradient-text-emerald">Search Engine Growth</span> Guides
            </h2>
          </div>
          <p className="text-sm text-slate-600 max-w-md">
            In-depth teardowns on algorithm updates, technical indexability, JSON-LD schema, and semantic entity optimization.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_DATA.map((post) => (
            <article
              key={post.id}
              className="rounded-3xl bg-white border border-slate-200 hover:border-emerald-300 p-6 flex flex-col justify-between group cursor-pointer transition-all duration-300 shadow-sm hover:shadow-md"
              onClick={() => setSelectedPost(post)}
            >
              <div>
                {/* Meta Bar */}
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-emerald-50 text-emerald-800 border border-emerald-200">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-slate-500">
                    <Clock className="w-3.5 h-3.5 text-emerald-600" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-700 transition-colors leading-snug mb-3">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-xs text-slate-600 line-clamp-3 mb-6 leading-relaxed">
                  {post.excerpt}
                </p>
              </div>

              {/* Author & Read Link */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <img
                    src={post.author.avatar}
                    alt={post.author.name}
                    className="w-7 h-7 rounded-full object-cover border border-emerald-200"
                  />
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-slate-800">{post.author.name}</span>
                    <span className="text-[10px] text-slate-500">{post.publishDate}</span>
                  </div>
                </div>

                <span className="text-xs font-bold text-emerald-600 group-hover:translate-x-1 transition-transform flex items-center gap-1">
                  Read Article &rarr;
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* Interactive Reader Modal Overlay */}
        {selectedPost && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md animate-in fade-in duration-200">
            <div className="bg-white border border-slate-200 rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-10 shadow-2xl relative">
              
              {/* Close Button */}
              <button
                onClick={() => setSelectedPost(null)}
                className="absolute top-6 right-6 p-2.5 rounded-full bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 border border-emerald-200">
                  {selectedPost.category}
                </span>
                <span className="text-xs text-slate-500 font-semibold">{selectedPost.readTime}</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-black text-slate-900 mb-4 leading-tight">
                {selectedPost.title}
              </h2>

              <div className="flex items-center gap-3 border-b border-slate-100 pb-6 mb-6">
                <img
                  src={selectedPost.author.avatar}
                  alt={selectedPost.author.name}
                  className="w-10 h-10 rounded-full border border-emerald-200"
                />
                <div>
                  <span className="block text-sm font-bold text-slate-900">{selectedPost.author.name}</span>
                  <span className="block text-xs text-slate-500">{selectedPost.author.role}</span>
                </div>
              </div>

              {/* Article Content */}
              <div className="space-y-6 text-sm text-slate-700 leading-relaxed mb-8">
                <p className="text-base text-slate-800 font-medium italic border-l-2 border-emerald-500 pl-4 py-1">
                  {selectedPost.content.intro}
                </p>

                {selectedPost.content.sections.map((sec, idx) => (
                  <div key={idx} className="space-y-3">
                    <h3 className="text-lg font-bold text-slate-900">{sec.heading}</h3>
                    <p className="text-slate-700">{sec.body}</p>

                    {sec.bulletPoints && (
                      <ul className="space-y-2 mt-2">
                        {sec.bulletPoints.map((point, pIdx) => (
                          <li key={pIdx} className="flex items-start gap-2 text-xs text-slate-700">
                            <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {sec.proTip && (
                      <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 flex items-start gap-3 mt-3">
                        <Lightbulb className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                        <div>
                          <span className="block text-xs font-bold text-emerald-800">Pro-Tip Strategy:</span>
                          <span className="text-xs text-slate-700">{sec.proTip}</span>
                        </div>
                      </div>
                    )}
                  </div>
                ))}

                {/* Conclusion */}
                <div className="pt-6 border-t border-slate-100">
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Final Takeaway</h3>
                  <p className="text-slate-700">{selectedPost.content.conclusion}</p>
                </div>
              </div>

              <div className="flex justify-end gap-3 pt-4 border-t border-slate-100">
                <button
                  onClick={() => setSelectedPost(null)}
                  className="px-6 py-3 rounded-xl font-bold bg-slate-100 border border-slate-200 text-slate-700 text-xs hover:bg-slate-200 transition-colors"
                >
                  Close Article
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
