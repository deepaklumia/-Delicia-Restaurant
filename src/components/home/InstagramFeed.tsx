'use client';

import React from 'react';
import Image from 'next/image';
import { Instagram, Heart, MessageCircle, ExternalLink, Sparkles } from 'lucide-react';
import { INSTAGRAM_POSTS } from '@/data/restaurantData';

export const InstagramFeed: React.FC = () => {
  return (
    <section className="relative py-24 bg-obsidian-900/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs uppercase tracking-widest font-semibold">
              <Instagram className="w-3.5 h-3.5" />
              Social Epicurean Gallery
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-light text-cream-50">
              Moments of <span className="font-normal italic text-gold-gradient">Opulence</span>
            </h2>
            <p className="text-xs sm:text-sm text-cream-200/70 font-light">
              Follow our global journey behind the pass and in our dining rooms. Tag <strong className="text-gold-300">#DeliciaGastronomie</strong> to be featured.
            </p>
          </div>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="self-start md:self-auto px-6 py-3 rounded-full border border-gold-500/30 hover:border-gold-400 bg-obsidian-950/80 text-xs font-semibold uppercase tracking-widest text-gold-300 flex items-center gap-2 transition-all hover:shadow-[0_0_20px_rgba(212,175,55,0.2)]"
          >
            <Instagram className="w-4 h-4" />
            <span>@DeliciaDining (240K Patrons)</span>
            <ExternalLink className="w-3.5 h-3.5 text-gold-400" />
          </a>
        </div>

        {/* 6-Image Dynamic Mosaic */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {INSTAGRAM_POSTS.map((post) => (
            <a
              key={post.id}
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square rounded-2xl overflow-hidden glass-panel border border-white/10 hover:border-gold-400/60 transition-all duration-500 hover:shadow-2xl"
            >
              <Image
                src={post.image}
                alt={post.caption}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-obsidian-950/85 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 flex flex-col justify-between text-xs text-cream-100 backdrop-blur-sm">
                <p className="line-clamp-3 text-[11px] font-light italic leading-relaxed text-cream-200">
                  {post.caption}
                </p>

                <div className="flex items-center justify-between text-gold-300 text-xs font-semibold border-t border-white/10 pt-2">
                  <span className="flex items-center gap-1">
                    <Heart className="w-3.5 h-3.5 fill-gold-400 text-gold-400" />
                    {post.likes.toLocaleString()}
                  </span>
                  <span className="flex items-center gap-1">
                    <MessageCircle className="w-3.5 h-3.5 text-gold-400" />
                    {post.comments}
                  </span>
                </div>
              </div>

              {/* Instagram Mini Icon Corner */}
              <div className="absolute top-2.5 right-2.5 p-1.5 rounded-full bg-obsidian-950/70 text-cream-200 group-hover:opacity-0 transition-opacity backdrop-blur-md">
                <Instagram className="w-3 h-3 text-gold-400" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
