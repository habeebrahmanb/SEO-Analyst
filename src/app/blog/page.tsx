import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppWidget } from '@/components/WhatsAppWidget';
import { BLOG_DATA } from '@/data/blogData';
import { BookOpen, Clock, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: "SEO Guides & Technical Knowledge Base | SEO Analyst",
  description: "Read in-depth technical SEO guides, Google Core update recovery frameworks, entity keyword research blueprints, and JSON-LD schema tutorials.",
};

export default function BlogIndexPage() {
  const featuredPost = BLOG_DATA[0];
  const remainingPosts = BLOG_DATA.slice(1);

  return (
    <div className="min-h-screen bg-[#F4F5F6] text-[#13144D] flex flex-col selection:bg-[#02E3A7] selection:text-[#13144D]">
      <Header />

      <main className="flex-grow pt-32 pb-24">
        {/* Banner */}
        <section className="relative py-16 bg-grid-pattern overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#13144D] text-[#02E3A7] border border-[#02E3A7]/30 text-xs font-extrabold uppercase tracking-wider mb-6">
              <BookOpen className="w-4 h-4 text-[#02E3A7]" /> Search Strategy Knowledge Base
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#13144D] tracking-tight mb-6">
              Organic Search <span className="gradient-text-emerald">Insights & Engineering</span>
            </h1>
            <p className="text-lg text-[#13144D]/80 max-w-3xl mx-auto leading-relaxed">
              In-depth research articles, core algorithm update recovery blueprints, and actionable SERP optimization guides written by senior technical SEO consultants.
            </p>
          </div>
        </section>

        {/* Featured Article Banner */}
        {featuredPost && (
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
            <div className="p-8 sm:p-12 rounded-3xl bg-[#13144D] text-white border border-[#02E3A7]/30 shadow-2xl relative overflow-hidden group transition-all">
              <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
                <div className="space-y-4 max-w-3xl">
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-[#02E3A7] text-[#13144D]">
                      Featured Guide
                    </span>
                    <span className="text-xs text-[#02E3A7] font-bold">{featuredPost.category}</span>
                    <span className="text-xs text-[#F4F5F6]/70">• {featuredPost.readTime}</span>
                  </div>

                  <h2 className="text-2xl sm:text-4xl font-black text-white group-hover:text-[#02E3A7] transition-colors leading-tight">
                    {featuredPost.title}
                  </h2>

                  <p className="text-sm text-[#F4F5F6]/90 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>

                  <div className="flex items-center gap-3 pt-2">
                    <img
                      src={featuredPost.author.avatar}
                      alt={featuredPost.author.name}
                      className="w-9 h-9 rounded-full border border-[#02E3A7]/30"
                    />
                    <div>
                      <span className="block text-xs font-bold text-white">{featuredPost.author.name}</span>
                      <span className="block text-[10px] text-[#F4F5F6]/70">{featuredPost.publishDate}</span>
                    </div>
                  </div>
                </div>

                <div className="shrink-0 w-full lg:w-auto">
                  <Link
                    href={`/blog/${featuredPost.slug}`}
                    className="btn-pro-green w-full lg:w-auto px-8 py-4 rounded-2xl text-sm font-bold text-[#13144D] flex items-center justify-center gap-2 shadow-xl hover:scale-105 transition-transform"
                  >
                    Read Complete Blueprint <ArrowRight className="w-4 h-4 text-[#13144D]" />
                  </Link>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* All Articles Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
          <h2 className="text-2xl font-extrabold text-[#13144D] mb-8">All SEO Growth Guides</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {remainingPosts.map((post) => (
              <article
                key={post.id}
                className="rounded-3xl bg-[#FFFFFF] border border-[#13144D]/15 hover:border-[#02E3A7] p-6 flex flex-col justify-between group transition-all duration-300 shadow-md hover:shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-full text-[10px] font-extrabold uppercase bg-[#13144D] text-[#02E3A7]">
                      {post.category}
                    </span>
                    <div className="flex items-center gap-1.5 text-xs text-[#13144D]/70">
                      <Clock className="w-3.5 h-3.5 text-[#02E3A7]" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-[#13144D] group-hover:text-[#02E3A7] transition-colors leading-snug mb-3">
                    {post.title}
                  </h3>

                  <p className="text-xs text-[#13144D]/80 line-clamp-3 mb-6 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#13144D]/15 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <img
                      src={post.author.avatar}
                      alt={post.author.name}
                      className="w-7 h-7 rounded-full border border-[#13144D]/20"
                    />
                    <div className="flex flex-col">
                      <span className="text-xs font-bold text-[#13144D]">{post.author.name}</span>
                      <span className="text-[10px] text-[#13144D]/60">{post.publishDate}</span>
                    </div>
                  </div>

                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-xs font-bold text-[#13144D] hover:text-[#02E3A7] flex items-center gap-1"
                  >
                    Read Guide &rarr;
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <WhatsAppWidget />
      <Footer />
    </div>
  );
}
