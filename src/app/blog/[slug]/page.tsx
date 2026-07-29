import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppWidget } from '@/components/WhatsAppWidget';
import { BLOG_DATA, BlogPost } from '@/data/blogData';
import { 
  BookOpen, 
  Clock, 
  ChevronLeft, 
  CheckCircle2, 
  Lightbulb, 
  Sparkles, 
  ArrowRight,
  HelpCircle
} from 'lucide-react';

export async function generateStaticParams() {
  return BLOG_DATA.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_DATA.find((p) => p.slug === slug);
  if (!post) return { title: 'Article Not Found | SEO Analyst' };

  return {
    title: `${post.title} | SEO Growth Guide`,
    description: post.excerpt,
  };
}

export default async function BlogPostDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = BLOG_DATA.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = BLOG_DATA.filter((p) => post.relatedSlugs?.includes(p.slug) || p.category === post.category).filter((p) => p.slug !== post.slug);

  return (
    <div className="min-h-screen bg-[#F4F5F6] text-[#13144D] flex flex-col selection:bg-[#02E3A7] selection:text-[#13144D]">
      <Header />

      <main className="flex-grow pt-32 pb-24">
        {/* Navigation Breadcrumb */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs font-bold text-[#13144D]/70 hover:text-[#13144D] transition-colors"
          >
            <ChevronLeft className="w-4 h-4 text-[#02E3A7]" /> Back to SEO Blog
          </Link>
        </div>

        {/* Article Header */}
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
          <header className="space-y-6 border-b border-[#13144D]/15 pb-8">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-[#13144D] text-[#02E3A7] uppercase">
                {post.category}
              </span>
              <span className="text-xs text-[#13144D]/70 flex items-center gap-1 font-semibold">
                <Clock className="w-3.5 h-3.5 text-[#02E3A7]" /> {post.readTime}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#13144D] tracking-tight leading-tight">
              {post.title}
            </h1>

            <p className="text-lg text-[#13144D]/80 leading-relaxed font-medium">
              {post.excerpt}
            </p>

            <div className="flex items-center justify-between pt-4">
              <div className="flex items-center gap-3">
                <img
                  src={post.author.avatar}
                  alt={post.author.name}
                  className="w-11 h-11 rounded-full border border-[#13144D]/20 object-cover"
                />
                <div>
                  <span className="block text-sm font-bold text-[#13144D]">{post.author.name}</span>
                  <span className="block text-xs text-[#02E3A7] font-bold">{post.author.role} • {post.publishDate}</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                {post.tags.slice(0, 2).map((tag, idx) => (
                  <span key={idx} className="hidden sm:inline-block px-2.5 py-1 rounded-md bg-[#FFFFFF] border border-[#13144D]/15 text-[11px] text-[#13144D] font-bold">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </header>

          {/* Key Takeaways Box */}
          {post.keyTakeaways && post.keyTakeaways.length > 0 && (
            <div className="my-8 p-6 rounded-2xl bg-[#FFFFFF] border border-[#02E3A7] space-y-3 shadow-md">
              <h3 className="text-sm font-extrabold text-[#13144D] uppercase tracking-wider flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#02E3A7]" /> Executive Article Takeaways
              </h3>
              <ul className="space-y-2">
                {post.keyTakeaways.map((takeaway, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-[#13144D] font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#02E3A7] shrink-0 mt-0.5" />
                    <span>{takeaway}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Article Body Content */}
          <div className="space-y-8 text-[#13144D] leading-relaxed text-base py-6">
            <p className="text-lg text-[#13144D] font-medium italic border-l-2 border-[#02E3A7] pl-4 py-1 bg-[#FFFFFF] rounded-r-xl">
              {post.content.intro}
            </p>

            {post.content.sections.map((section, idx) => (
              <section key={idx} className="space-y-4 pt-4">
                <h2 className="text-2xl font-extrabold text-[#13144D] tracking-tight">
                  {section.heading}
                </h2>

                <p className="text-[#13144D]/90 leading-relaxed">
                  {section.body}
                </p>

                {section.bulletPoints && (
                  <ul className="space-y-2.5 my-4 pl-2">
                    {section.bulletPoints.map((bp, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-3 text-sm text-[#13144D] font-medium">
                        <CheckCircle2 className="w-4 h-4 text-[#02E3A7] shrink-0 mt-1" />
                        <span>{bp}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {section.proTip && (
                  <div className="p-5 rounded-2xl bg-[#FFFFFF] border border-[#02E3A7]/30 flex items-start gap-3.5 my-4 shadow-sm">
                    <Lightbulb className="w-6 h-6 text-[#02E3A7] shrink-0 mt-0.5" />
                    <div>
                      <span className="block text-xs font-extrabold text-[#13144D] uppercase tracking-wider mb-1">PRO-TIP STRATEGY</span>
                      <p className="text-xs sm:text-sm text-[#13144D]/90 leading-relaxed">{section.proTip}</p>
                    </div>
                  </div>
                )}
              </section>
            ))}

            {/* Article Conclusion */}
            <div className="pt-8 border-t border-[#13144D]/15 space-y-3">
              <h2 className="text-2xl font-extrabold text-[#13144D]">Summary & Implementation Next Steps</h2>
              <p className="text-[#13144D]/90 leading-relaxed">
                {post.content.conclusion}
              </p>
            </div>

            {/* FAQ Section */}
            {post.faqs && post.faqs.length > 0 && (
              <div className="pt-8 border-t border-[#13144D]/15 space-y-4">
                <h3 className="text-xl font-extrabold text-[#13144D] flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-[#02E3A7]" /> Frequently Asked Questions
                </h3>
                <div className="space-y-4">
                  {post.faqs.map((faq, idx) => (
                    <div key={idx} className="p-5 rounded-2xl bg-[#FFFFFF] border border-[#13144D]/15 space-y-2">
                      <h4 className="text-sm font-bold text-[#13144D]">{faq.question}</h4>
                      <p className="text-xs text-[#13144D]/80 leading-relaxed">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Author Bio Box */}
          <div className="mt-12 p-8 rounded-3xl bg-[#FFFFFF] border border-[#13144D]/15 flex flex-col sm:flex-row items-center gap-6 shadow-md">
            <img
              src={post.author.avatar}
              alt={post.author.name}
              className="w-16 h-16 rounded-2xl border border-[#13144D]/20 object-cover shrink-0"
            />
            <div className="space-y-1 text-center sm:text-left">
              <span className="text-xs font-bold text-[#02E3A7] uppercase tracking-wider">Written By</span>
              <h4 className="text-lg font-bold text-[#13144D]">{post.author.name}</h4>
              <p className="text-xs text-[#13144D]/70">{post.author.bio}</p>
            </div>
          </div>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <div className="mt-16 pt-12 border-t border-[#13144D]/15 space-y-6">
              <h3 className="text-2xl font-extrabold text-[#13144D]">Related Growth Blueprints</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {relatedPosts.map((rel) => (
                  <Link
                    key={rel.id}
                    href={`/blog/${rel.slug}`}
                    className="p-6 rounded-2xl bg-[#FFFFFF] border border-[#13144D]/15 hover:border-[#02E3A7] transition-colors space-y-2 block group shadow-sm"
                  >
                    <span className="text-[10px] font-bold text-[#02E3A7] uppercase">{rel.category}</span>
                    <h4 className="text-base font-bold text-[#13144D] group-hover:text-[#02E3A7] transition-colors">{rel.title}</h4>
                    <p className="text-xs text-[#13144D]/70 line-clamp-2">{rel.excerpt}</p>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Strategy Proposal Callout */}
          <div className="mt-16 p-8 rounded-3xl bg-[#13144D] text-white border border-[#02E3A7]/30 text-center space-y-4 shadow-2xl">
            <h3 className="text-2xl font-extrabold text-white">Ready To Apply These Tactics To Your Domain?</h3>
            <p className="text-sm text-[#F4F5F6]/80 max-w-lg mx-auto">
              Our engineering team will audit your Core Web Vitals, entity graph, and backlink structure to build a custom ROI plan.
            </p>
            <div className="pt-2">
              <Link href="/contact" className="btn-pro-green px-6 py-3 rounded-full text-xs font-bold text-[#13144D] inline-flex items-center gap-2">
                Request Strategy Proposal <ArrowRight className="w-4 h-4 text-[#13144D]" />
              </Link>
            </div>
          </div>

        </article>
      </main>

      <WhatsAppWidget />
      <Footer />
    </div>
  );
}
