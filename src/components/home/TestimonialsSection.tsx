'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Star, Quote, ChevronLeft, ChevronRight, Sparkles, Award } from 'lucide-react';
import { REVIEWS_DATA } from '@/data/restaurantData';

export const TestimonialsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % REVIEWS_DATA.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const currentReview = REVIEWS_DATA[activeIndex];

  return (
    <section id="reviews" className="relative py-28 bg-obsidian-900/80 overflow-hidden">
      {/* Background radial gold glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-500/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs uppercase tracking-widest font-semibold">
            <Quote className="w-3.5 h-3.5" />
            Critics & Patrons Acclaim
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-light text-cream-50 leading-tight">
            Distinguished <span className="font-normal italic text-gold-gradient">Accolades</span>
          </h2>
          <p className="text-sm sm:text-base text-cream-200/75 font-light leading-relaxed">
            What the world&apos;s leading culinary critics, royalty, and gastronomy enthusiasts say about their Delicia experience.
          </p>
        </div>

        {/* Big Review Feature Carousel Card */}
        <div className="max-w-4xl mx-auto rounded-3xl glass-panel-gold p-8 sm:p-14 border border-gold-500/40 shadow-2xl relative">
          {/* Gold Quotation Mark */}
          <div className="absolute top-6 right-8 text-gold-500/20 font-serif text-8xl pointer-events-none select-none">
            “
          </div>

          <div className="space-y-8 relative z-10">
            {/* Rating Stars & Source Tag */}
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-1.5">
                {[...Array(currentReview.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold-400 text-gold-400" />
                ))}
                <span className="text-xs text-gold-300 font-semibold ml-2">5.0 / 5.0 Rating</span>
              </div>

              <div className="px-3.5 py-1 rounded-full bg-gold-500/20 border border-gold-500/40 text-gold-300 text-xs uppercase font-bold tracking-wider">
                {currentReview.source}
              </div>
            </div>

            {/* Main Quote Text */}
            <p className="font-serif text-xl sm:text-2xl lg:text-3xl text-cream-50 font-light leading-relaxed italic">
              &ldquo;{currentReview.comment}&rdquo;
            </p>

            {/* Author Profile and Recommended Dish */}
            <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-gold-400/60 shadow-lg">
                  <Image
                    src={currentReview.avatar}
                    alt={currentReview.author}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-serif text-lg font-bold text-cream-100">
                    {currentReview.author}
                  </h4>
                  <p className="text-xs text-gold-400/90 font-medium">
                    {currentReview.role} • {currentReview.date}
                  </p>
                </div>
              </div>

              <div className="text-left sm:text-right bg-obsidian-950/70 sm:bg-transparent p-3 sm:p-0 rounded-xl sm:rounded-none">
                <div className="text-[10px] uppercase tracking-widest text-cream-300/50">Critic&apos;s Highlight</div>
                <div className="text-xs font-serif text-gold-300 italic font-semibold">{currentReview.dishRecommended}</div>
              </div>
            </div>

            {/* Navigation Buttons and Indicators */}
            <div className="pt-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                {REVIEWS_DATA.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveIndex(i)}
                    className={`h-1.5 rounded-full transition-all ${
                      i === activeIndex ? 'w-8 bg-gold-400' : 'w-2.5 bg-white/20'
                    }`}
                    aria-label={`Review slide ${i + 1}`}
                  />
                ))}
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setActiveIndex((prev) => (prev - 1 + REVIEWS_DATA.length) % REVIEWS_DATA.length)}
                  className="p-2.5 rounded-full bg-obsidian-800 hover:bg-gold-500/20 border border-white/10 hover:border-gold-400 text-cream-200 transition-colors"
                  aria-label="Previous Review"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setActiveIndex((prev) => (prev + 1) % REVIEWS_DATA.length)}
                  className="p-2.5 rounded-full bg-obsidian-800 hover:bg-gold-500/20 border border-white/10 hover:border-gold-400 text-cream-200 transition-colors"
                  aria-label="Next Review"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
