'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { BLOG_DATA, BlogPost } from '@/data/blogData';
import { 
  BookOpen, 
  Clock, 
  ArrowRight, 
  X, 
  CheckCircle, 
  Lightbulb,
  ArrowUpRight
} from 'lucide-react';

export function BlogSection() {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  return (
    <section id="blog" className="py-24 relative bg-[#F4F5F6] border-b border-[#13144D]/15 text-[#13144D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#13144D] text-[#02E3A7] border border-[#02E3A7]/30 text-xs font-extrabold uppercase tracking-wider mb-4">
              <BookOpen className="w-3.5 h-3.5 text-[#02E3A7]" /> SEO Engineering Knowledge Base
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#13144D] tracking-tight">
              Latest <span className="gradient-text-vibrant">Search Engine Growth</span> Guides
            </h2>
          </div>
          <div className="flex flex-col items-start md:items-end gap-3">
            <p className="text-sm text-[#13144D]/80 max-w-md">
              In-depth teardowns on algorithm updates, technical indexability, JSON-LD schema, and semantic entity optimization.
            </p>
            <Link
              href="/blog"
              className="text-xs font-bold text-[#13144D] hover:text-[#02E3A7] flex items-center gap-1 underline"
            >
              Browse All Blog Guides &rarr;
            </Link>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_DATA.map((post) => (
            <article
              key={post.id}
              className="rounded-3xl bg-[#FFFFFF] border border-[#13144D]/15 hover:border-[#02E3A7] p-6 flex flex-col justify-between group transition-all duration-300 shadow-md hover:shadow-xl"
            >
              <div>
                {/* Meta Bar */}
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-[#13144D] text-[#02E3A7]">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-[#13144D]/70">
                    <Clock className="w-3.5 h-3.5 text-[#02E3A7]" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-[#13144D] group-hover:text-[#02E3A7] transition-colors leading-snug mb-3">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-xs text-[#13144D]/80 line-clamp-3 mb-6 leading-relaxed">
                  {post.excerpt}
                </p>
              </div>

              {/* Author & Read Link */}
              <div className="pt-4 border-t border-[#13144D]/15 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <img
                    src={post.author.avatar}
                    alt={post.author.name}
                    className="w-7 h-7 rounded-full object-cover border border-[#13144D]/20"
                  />
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-[#13144D]">{post.author.name}</span>
                    <span className="text-[10px] text-[#13144D]/60">{post.publishDate}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setSelectedPost(post)}
                    className="text-[11px] font-semibold text-[#13144D]/70 hover:text-[#13144D] underline"
                  >
                    Quick View
                  </button>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-xs font-bold text-[#13144D] hover:text-[#02E3A7] flex items-center gap-1"
                  >
                    Read Guide &rarr;
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Interactive Reader Modal Overlay */}
        {selectedPost && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#13144D]/70 backdrop-blur-md animate-in fade-in duration-200">
            <div className="bg-[#FFFFFF] border border-[#02E3A7]/30 rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-10 shadow-2xl relative text-[#13144D]">
              
              {/* Close Button */}
              <button
                onClick={() => setSelectedPost(null)}
                className="absolute top-6 right-6 p-2.5 rounded-full bg-[#F4F5F6] text-[#13144D] hover:bg-[#13144D] hover:text-[#02E3A7] transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-[#13144D] text-[#02E3A7]">
                  {selectedPost.category}
                </span>
                <span className="text-xs text-[#13144D]/70 font-semibold">{selectedPost.readTime}</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-black text-[#13144D] mb-4 leading-tight">
                {selectedPost.title}
              </h2>

              <div className="flex items-center gap-3 border-b border-[#13144D]/15 pb-6 mb-6">
                <img
                  src={selectedPost.author.avatar}
                  alt={selectedPost.author.name}
                  className="w-10 h-10 rounded-full border border-[#13144D]/20"
                />
                <div>
                  <span className="block text-sm font-bold text-[#13144D]">{selectedPost.author.name}</span>
                  <span className="block text-xs text-[#13144D]/70">{selectedPost.author.role}</span>
                </div>
              </div>

              {/* Article Content */}
              <div className="space-y-6 text-sm text-[#13144D] leading-relaxed mb-8">
                <p className="text-base text-[#13144D] font-medium italic border-l-2 border-[#02E3A7] pl-4 py-1 bg-[#F4F5F6] rounded-r-xl">
                  {selectedPost.content.intro}
                </p>

                {selectedPost.content.sections.map((sec, idx) => (
                  <div key={idx} className="space-y-3">
                    <h3 className="text-lg font-bold text-[#13144D]">{sec.heading}</h3>
                    <p className="text-[#13144D]/90">{sec.body}</p>

                    {sec.bulletPoints && (
                      <ul className="space-y-2 mt-2">
                        {sec.bulletPoints.map((point, pIdx) => (
                          <li key={pIdx} className="flex items-start gap-2 text-xs text-[#13144D]">
                            <CheckCircle className="w-4 h-4 text-[#02E3A7] shrink-0 mt-0.5" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {sec.proTip && (
                      <div className="p-4 rounded-xl bg-[#F4F5F6] border border-[#02E3A7]/30 flex items-start gap-3 mt-3">
                        <Lightbulb className="w-5 h-5 text-[#02E3A7] shrink-0 mt-0.5" />
                        <div>
                          <span className="block text-xs font-bold text-[#13144D]">Pro-Tip Strategy:</span>
                          <span className="text-xs text-[#13144D]/90">{sec.proTip}</span>
                        </div>
                      </div>
                    )}
                  </div>
                ))}

                {/* Conclusion */}
                <div className="pt-6 border-t border-[#13144D]/15">
                  <h3 className="text-lg font-bold text-[#13144D] mb-2">Final Takeaway</h3>
                  <p className="text-[#13144D]/90">{selectedPost.content.conclusion}</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row justify-end gap-3 pt-4 border-t border-[#13144D]/15">
                <Link
                  href={`/blog/${selectedPost.slug}`}
                  onClick={() => setSelectedPost(null)}
                  className="btn-pro-green px-6 py-3 rounded-xl font-extrabold text-[#13144D] text-xs flex items-center justify-center gap-1.5"
                >
                  Open Full Post Page <ArrowUpRight className="w-4 h-4" />
                </Link>
                <button
                  onClick={() => setSelectedPost(null)}
                  className="px-6 py-3 rounded-xl font-bold bg-[#F4F5F6] border border-[#13144D]/20 text-[#13144D] text-xs hover:bg-[#13144D] hover:text-[#02E3A7] transition-colors"
                >
                  Close Window
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
