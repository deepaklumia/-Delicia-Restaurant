'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Sparkles, Plus, Info, Flame, Check, Utensils } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { SIGNATURE_DISHES } from '@/data/restaurantData';
import { Dish } from '@/types';

export const SignatureDishes: React.FC = () => {
  const { addToCart, setSelectedDishModal } = useCart();
  const [addedDishId, setAddedDishId] = useState<string | null>(null);

  const handleAddDish = (dish: Dish, e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(dish, 1);
    setAddedDishId(dish.id);
    setTimeout(() => setAddedDishId(null), 1500);
  };

  return (
    <section id="signatures" className="relative py-28 bg-obsidian-950">
      {/* Background Accent Gradients */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-gold-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs uppercase tracking-widest font-semibold">
              <Flame className="w-3.5 h-3.5" />
              Royal Culinary Highlights
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-light text-cream-50 leading-tight">
              Signature <span className="font-normal italic text-gold-gradient">Masterpieces</span>
            </h2>
            <p className="text-sm text-cream-200/75 font-light">
              Iconic dishes perfected over generations — from fragrant slow-cooked dum biryani to coal-fired royal kebabs.
            </p>
          </div>

          <a
            href="#menu"
            className="self-start md:self-auto px-6 py-3 rounded-full border border-gold-500/40 text-xs font-semibold uppercase tracking-widest text-gold-300 hover:bg-gold-500/10 transition-all"
          >
            View Complete Menu & Prices →
          </a>
        </div>

        {/* 3D-Tilt Style Dish Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SIGNATURE_DISHES.slice(0, 6).map((dish) => (
            <div
              key={dish.id}
              onClick={() => setSelectedDishModal(dish)}
              className="group relative rounded-3xl overflow-hidden glass-panel border border-gold-500/20 hover:border-gold-400/60 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_45px_rgba(0,0,0,0.9),0_0_30px_rgba(212,175,55,0.15)] cursor-pointer flex flex-col justify-between"
            >
              {/* Image Container */}
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={dish.image}
                  alt={dish.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-obsidian-950/20 to-transparent" />

                {/* Price Pill in INR */}
                <div className="absolute top-4 right-4 px-3.5 py-1 rounded-full bg-obsidian-950/90 border border-gold-500/50 text-gold-300 font-serif font-bold text-sm backdrop-blur-md">
                  ₹{dish.price}
                </div>

                {/* Chef Special Badge */}
                {dish.chefSpecial && (
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-gold-500/20 border border-gold-400/40 text-gold-300 text-[10px] font-bold uppercase tracking-wider backdrop-blur-md flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-gold-400" />
                    Chef&apos;s Special
                  </div>
                )}

                {/* Beverage Pairing Overlay */}
                {dish.pairing && (
                  <div className="absolute bottom-3 left-3 right-3 px-3 py-1.5 rounded-xl bg-obsidian-950/90 border border-gold-500/20 text-[10px] text-cream-200 backdrop-blur-md flex items-center gap-1.5 opacity-90 group-hover:opacity-100 transition-opacity">
                    <Utensils className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                    <span className="truncate italic">{dish.pairing}</span>
                  </div>
                )}
              </div>

              {/* Dish Content */}
              <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    {dish.dietary.slice(0, 2).map((d) => (
                      <span key={d} className="text-[10px] uppercase font-semibold text-gold-400/80 tracking-wider">
                        • {d}
                      </span>
                    ))}
                  </div>

                  <h3 className="font-serif text-xl font-bold text-cream-100 group-hover:text-gold-300 transition-colors leading-snug">
                    {dish.name}
                  </h3>

                  {dish.malayalamName && (
                    <p className="text-xs text-gold-400/80 font-medium line-clamp-1 mt-0.5">
                      {dish.malayalamName}
                    </p>
                  )}

                  <p className="text-xs text-cream-200/70 font-light mt-2 line-clamp-2 leading-relaxed">
                    {dish.description}
                  </p>
                </div>

                {/* Card Footer Actions */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-3 mt-4">
                  <button
                    onClick={(e) => handleAddDish(dish, e)}
                    className={`flex-1 py-2.5 px-4 rounded-xl text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-all ${
                      addedDishId === dish.id
                        ? 'bg-emerald-600 text-white'
                        : 'bg-gold-500/15 hover:bg-gold-500/25 border border-gold-500/40 text-gold-300'
                    }`}
                  >
                    {addedDishId === dish.id ? (
                      <>
                        <Check className="w-3.5 h-3.5" />
                        Added
                      </>
                    ) : (
                      <>
                        <Plus className="w-3.5 h-3.5" />
                        Add to Order
                      </>
                    )}
                  </button>

                  <button
                    onClick={() => setSelectedDishModal(dish)}
                    className="p-2.5 rounded-xl bg-obsidian-800/80 hover:bg-obsidian-700 border border-white/10 text-cream-200 hover:text-gold-300 transition-colors"
                    aria-label="View dish details"
                  >
                    <Info className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
