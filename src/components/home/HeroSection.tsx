'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { 
  Sparkles, 
  Calendar, 
  ArrowRight, 
  ChevronRight, 
  ChevronLeft, 
  Flame,
  Star,
  MapPin,
  Phone
} from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { SIGNATURE_DISHES } from '@/data/restaurantData';

export const HeroSection: React.FC = () => {
  const { setIsReservationOpen, setSelectedDishModal, currentLocation } = useCart();
  const [activeDishIndex, setActiveDishIndex] = useState(0);
  const featuredDishes = SIGNATURE_DISHES.filter((d) => d.featured);

  // Auto-rotate featured showcase
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveDishIndex((prev) => (prev + 1) % featuredDishes.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [featuredDishes.length]);

  const currentDish = featuredDishes[activeDishIndex];

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden pt-8 pb-20">
      {/* Cinematic Background Layer */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=2000&q=90"
          alt="Royal Indian Dining Ambiance"
          fill
          priority
          className="object-cover object-center scale-105 filter brightness-[0.22] contrast-[1.1] animate-pulse-glow"
        />
        {/* Luxury Vignette & Radial Gold Glows */}
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-obsidian-950/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-obsidian-950 via-transparent to-obsidian-950" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-500/10 rounded-full blur-[140px] pointer-events-none" />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Headline & Value Proposition */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Honor Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/30 backdrop-blur-md flex-wrap">
              <div className="flex items-center text-gold-400">
                <Star className="w-3.5 h-3.5 fill-gold-400" />
                <Star className="w-3.5 h-3.5 fill-gold-400" />
                <Star className="w-3.5 h-3.5 fill-gold-400" />
                <Star className="w-3.5 h-3.5 fill-gold-400" />
                <Star className="w-3.5 h-3.5 fill-gold-400" />
              </div>
              <span className="text-xs uppercase tracking-[0.18em] text-gold-300 font-bold">
                100% Halal • Malabar & Royal Indian Haute Cuisine
              </span>
            </div>

            {/* Main Animated Headline */}
            <h1 className="font-serif text-4xl sm:text-6xl xl:text-7xl font-light tracking-tight text-cream-50 leading-[1.08]">
              A Royal Feast of <br />
              <span className="font-normal italic text-gold-gradient font-serif">Malabar & Mughal</span> <br />
              Gastronomy.
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base text-cream-200/80 max-w-xl font-light leading-relaxed">
              Welcome to <strong className="text-gold-300 font-semibold">Delicia Restaurant</strong> in Malappuram & Valluvambram. Savor authentic slow-dum Kaima Biryanis, coal-roasted Seafood Pollichathu, sizzling Tandoori kebabs, and rich Nalli Nihari crafted for unforgettable family moments and grand wedding banquets.
            </p>

            {/* Action Buttons & Quick Call */}
            <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <button
                onClick={() => setIsReservationOpen(true)}
                className="gold-btn px-8 py-4 rounded-full text-xs font-bold uppercase tracking-widest flex items-center gap-3 shadow-[0_10px_30px_rgba(212,175,55,0.35)]"
              >
                <Calendar className="w-4 h-4" />
                <span>Reserve Family Table</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#menu"
                className="px-7 py-4 rounded-full bg-obsidian-900/80 hover:bg-obsidian-800 border border-gold-500/30 hover:border-gold-400 text-xs font-semibold uppercase tracking-widest text-cream-100 transition-all flex items-center gap-2 backdrop-blur-md"
              >
                <span>Explore Digital Menu</span>
              </a>
            </div>

            {/* Live Branch Info Indicator */}
            <div className="p-4 rounded-2xl bg-obsidian-900/80 border border-gold-500/20 backdrop-blur-md space-y-2 max-w-xl">
              <div className="flex items-center gap-2 text-xs text-gold-300 font-semibold">
                <MapPin className="w-4 h-4 text-gold-400" />
                <span>Active Branch: {currentLocation.name}</span>
              </div>
              <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-cream-200/80 pt-1 border-t border-white/5">
                <span className="flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-gold-400" />
                  <strong>Phone:</strong> {currentLocation.phone}, {currentLocation.phoneAlt.slice(-2)}
                </span>
                <span className="text-emerald-400 font-medium">● Open Now for Dining & Takeaway</span>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="pt-4 border-t border-white/10 grid grid-cols-3 gap-4 max-w-lg">
              <div>
                <div className="font-serif text-2xl font-bold text-gold-300">100%</div>
                <div className="text-[11px] uppercase tracking-wider text-cream-300/60">Halal Certified</div>
              </div>
              <div>
                <div className="font-serif text-2xl font-bold text-gold-300">2</div>
                <div className="text-[11px] uppercase tracking-wider text-cream-300/60">Flagships in Kerala</div>
              </div>
              <div>
                <div className="font-serif text-2xl font-bold text-gold-300">25,000+</div>
                <div className="text-[11px] uppercase tracking-wider text-cream-300/60">Happy Families</div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Featured Dish Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md">
              {/* Gold Ring Halo */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-gold-500/20 via-gold-400/5 to-transparent blur-xl" />

              {/* Masterpiece Card */}
              <div className="relative rounded-3xl overflow-hidden glass-panel-gold p-6 border border-gold-500/30 shadow-2xl backdrop-blur-2xl">
                {/* Header tag */}
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <Flame className="w-4 h-4 text-gold-400" />
                    <span className="text-[11px] font-semibold uppercase tracking-widest text-gold-300">
                      Chef&apos;s Signature Masterpiece
                    </span>
                  </div>
                  <span className="text-xs font-serif text-gold-400">
                    0{activeDishIndex + 1} / 0{featuredDishes.length}
                  </span>
                </div>

                {/* Dish Image with hover zoom */}
                <div 
                  className="relative h-64 w-full my-4 rounded-2xl overflow-hidden cursor-pointer group"
                  onClick={() => setSelectedDishModal(currentDish)}
                >
                  <Image
                    src={currentDish.image}
                    alt={currentDish.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950/90 via-transparent to-transparent" />
                  
                  {/* Price Tag in INR */}
                  <div className="absolute top-3 right-3 px-3.5 py-1 rounded-full bg-obsidian-950/90 border border-gold-500/50 text-gold-300 text-sm font-serif font-bold backdrop-blur-md">
                    ₹{currentDish.price}
                  </div>

                  {/* Course Badge */}
                  {currentDish.course && (
                    <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-gold-500/20 border border-gold-500/40 text-gold-300 text-[10px] uppercase font-bold tracking-wider backdrop-blur-md">
                      {currentDish.course}
                    </div>
                  )}

                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-cream-200">
                    <span className="text-[11px] text-gold-300 italic">Click for Ingredients & Flavors</span>
                    <Sparkles className="w-4 h-4 text-gold-400 animate-pulse" />
                  </div>
                </div>

                {/* Dish Info */}
                <div className="space-y-2">
                  <h3 className="font-serif text-xl font-bold text-cream-100 leading-snug">
                    {currentDish.name}
                  </h3>
                  {currentDish.malayalamName && (
                    <p className="text-xs text-gold-400/90 font-medium">
                      {currentDish.malayalamName}
                    </p>
                  )}
                  <p className="text-xs text-cream-200/70 line-clamp-2 leading-relaxed">
                    {currentDish.description}
                  </p>
                </div>

                {/* Pairing Pill */}
                {currentDish.pairing && (
                  <div className="mt-4 p-2.5 rounded-xl bg-obsidian-900/90 border border-gold-500/20 text-[11px] text-cream-200/90 flex items-start gap-2">
                    <span className="text-gold-400 font-serif">🥤 Best With:</span>
                    <span className="italic text-cream-100">{currentDish.pairing}</span>
                  </div>
                )}

                {/* Controls */}
                <div className="mt-5 pt-3 border-t border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    {featuredDishes.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setActiveDishIndex(i)}
                        className={`h-1.5 rounded-full transition-all ${
                          i === activeDishIndex ? 'w-6 bg-gold-400' : 'w-2 bg-white/20'
                        }`}
                        aria-label={`Slide ${i + 1}`}
                      />
                    ))}
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setActiveDishIndex((prev) => (prev - 1 + featuredDishes.length) % featuredDishes.length)}
                      className="p-2 rounded-full bg-obsidian-800 hover:bg-gold-500/20 border border-white/10 hover:border-gold-400 text-cream-200 transition-colors"
                      aria-label="Previous Dish"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setActiveDishIndex((prev) => (prev + 1) % featuredDishes.length)}
                      className="p-2 rounded-full bg-obsidian-800 hover:bg-gold-500/20 border border-white/10 hover:border-gold-400 text-cream-200 transition-colors"
                      aria-label="Next Dish"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
