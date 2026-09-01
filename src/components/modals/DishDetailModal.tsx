'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { 
  X, 
  Clock, 
  Flame, 
  Plus, 
  Minus, 
  Check, 
  MapPin, 
  ChefHat,
  Utensils
} from 'lucide-react';
import { useCart } from '@/context/CartContext';

export const DishDetailModal: React.FC = () => {
  const { selectedDishModal, setSelectedDishModal, addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  if (!selectedDishModal) return null;

  const dish = selectedDishModal;

  const handleAddToCart = () => {
    addToCart(dish, quantity);
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
      setSelectedDishModal(null);
      setQuantity(1);
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-obsidian-950/85 backdrop-blur-xl animate-fade-in">
      <div 
        className="relative w-full max-w-2xl rounded-3xl glass-panel-gold overflow-hidden border border-gold-500/40 shadow-2xl my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={() => setSelectedDishModal(null)}
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-obsidian-950/80 hover:bg-gold-500/20 text-cream-200 hover:text-gold-300 border border-white/10 transition-colors backdrop-blur-md"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Top Image Banner */}
        <div className="relative h-72 sm:h-80 w-full">
          <Image
            src={dish.image}
            alt={dish.name}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-obsidian-950/30 to-transparent" />

          {/* Price Tag in INR */}
          <div className="absolute bottom-4 right-6 px-4 py-1.5 rounded-full bg-obsidian-950/90 border border-gold-400 text-gold-300 font-serif font-bold text-lg backdrop-blur-md">
            ₹{dish.price}
          </div>

          {/* Dietary tags */}
          <div className="absolute bottom-4 left-6 flex flex-wrap gap-2">
            {dish.dietary.map((d) => (
              <span
                key={d}
                className="px-3 py-1 rounded-full bg-gold-500/20 border border-gold-400/50 text-gold-300 text-[10px] uppercase font-bold tracking-wider backdrop-blur-md"
              >
                {d}
              </span>
            ))}
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          <div className="space-y-1">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-cream-50">
              {dish.name}
            </h3>
            {dish.malayalamName && (
              <p className="text-sm text-gold-400 font-medium">
                {dish.malayalamName}
              </p>
            )}
            <p className="text-xs sm:text-sm text-cream-200/80 font-light leading-relaxed pt-2">
              {dish.description}
            </p>
          </div>

          {/* Provenance and Info Badges */}
          <div className="grid grid-cols-3 gap-3 text-xs">
            {dish.origin && (
              <div className="p-3 rounded-xl bg-obsidian-950/60 border border-white/5 space-y-0.5">
                <div className="text-[10px] text-cream-300/50 uppercase tracking-widest flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-gold-400" /> Origin
                </div>
                <div className="text-cream-100 font-medium truncate">{dish.origin}</div>
              </div>
            )}
            {dish.calories && (
              <div className="p-3 rounded-xl bg-obsidian-950/60 border border-white/5 space-y-0.5">
                <div className="text-[10px] text-cream-300/50 uppercase tracking-widest flex items-center gap-1">
                  <Flame className="w-3 h-3 text-gold-400" /> Energy
                </div>
                <div className="text-cream-100 font-medium">{dish.calories} kcal</div>
              </div>
            )}
            {dish.prepTime && (
              <div className="p-3 rounded-xl bg-obsidian-950/60 border border-white/5 space-y-0.5">
                <div className="text-[10px] text-cream-300/50 uppercase tracking-widest flex items-center gap-1">
                  <Clock className="w-3 h-3 text-gold-400" /> Preparation
                </div>
                <div className="text-cream-100 font-medium">{dish.prepTime}</div>
              </div>
            )}
          </div>

          {/* Ingredients Breakdown */}
          <div className="space-y-2">
            <div className="text-xs uppercase tracking-widest text-cream-300/60 font-semibold flex items-center gap-1.5">
              <ChefHat className="w-3.5 h-3.5 text-gold-400" />
              Authentic Ingredients
            </div>
            <div className="flex flex-wrap gap-2">
              {dish.ingredients.map((ing, i) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded-lg bg-obsidian-900 border border-white/10 text-xs text-cream-200"
                >
                  {ing}
                </span>
              ))}
            </div>
          </div>

          {/* Refreshment Pairing */}
          {dish.pairing && (
            <div className="p-4 rounded-2xl bg-burgundy-950/40 border border-gold-500/30 flex items-start gap-3">
              <Utensils className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />
              <div>
                <div className="text-[10px] uppercase tracking-widest text-gold-400 font-semibold">
                  Recommended Refreshment Pairing
                </div>
                <div className="font-serif text-sm text-cream-100 italic mt-0.5">
                  {dish.pairing}
                </div>
              </div>
            </div>
          )}

          {/* Action Row */}
          <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="text-xs text-cream-300/60 uppercase tracking-wider">Quantity:</span>
              <div className="flex items-center bg-obsidian-900 rounded-xl border border-white/10">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-2 text-cream-300 hover:text-white"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="px-3 text-sm font-bold text-cream-100 font-mono">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-2 text-cream-300 hover:text-white"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            <button
              onClick={handleAddToCart}
              className={`w-full sm:w-auto gold-btn px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 transition-all ${
                added ? 'bg-emerald-600' : ''
              }`}
            >
              {added ? (
                <>
                  <Check className="w-4 h-4" /> Added to Bag
                </>
              ) : (
                <>
                  <Plus className="w-4 h-4" />
                  Add to Food Order (₹{dish.price * quantity})
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
