'use client';

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import { 
  Search, 
  Filter, 
  Plus, 
  Check, 
  Info,
  Utensils
} from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { SIGNATURE_DISHES } from '@/data/restaurantData';
import { Dish } from '@/types';

export const DigitalMenu: React.FC = () => {
  const { addToCart, setSelectedDishModal } = useCart();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [dietaryFilter, setDietaryFilter] = useState<string>('all');
  const [addedDishId, setAddedDishId] = useState<string | null>(null);

  const categories = [
    { id: 'all', label: 'All Items' },
    { id: 'biryani', label: 'Dum Biryani & Rice' },
    { id: 'tandoori', label: 'Tandoor & Charcoal' },
    { id: 'seafood', label: 'Malabar Seafood' },
    { id: 'curries', label: 'Royal Curries' },
    { id: 'desserts', label: 'Desserts & Payasam' },
    { id: 'beverages', label: 'Kulukki & Sharbath' },
  ];

  const dietaryOptions = ['all', '100% Halal', 'Vegetarian', 'Chef Special', 'Jain Friendly', 'Kids Friendly'];

  const filteredDishes = useMemo(() => {
    return SIGNATURE_DISHES.filter((dish) => {
      const matchesCategory = selectedCategory === 'all' || dish.category === selectedCategory;
      const matchesSearch =
        dish.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (dish.malayalamName && dish.malayalamName.toLowerCase().includes(searchQuery.toLowerCase())) ||
        dish.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        dish.ingredients.some((ing) => ing.toLowerCase().includes(searchQuery.toLowerCase()));
      const matchesDietary =
        dietaryFilter === 'all' || dish.dietary.includes(dietaryFilter as any);

      return matchesCategory && matchesSearch && matchesDietary;
    });
  }, [selectedCategory, searchQuery, dietaryFilter]);

  const handleAdd = (dish: Dish, e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(dish, 1);
    setAddedDishId(dish.id);
    setTimeout(() => setAddedDishId(null), 1500);
  };

  return (
    <section id="menu" className="relative py-28 bg-obsidian-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs uppercase tracking-widest font-semibold">
            <Utensils className="w-3.5 h-3.5" />
            Culinary Repertoire
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-light text-cream-50 leading-tight">
            The Interactive <span className="font-normal italic text-gold-gradient">Digital Menu</span>
          </h2>
          <p className="text-sm sm:text-base text-cream-200/75 font-light leading-relaxed">
            Explore authentic Malabar Biryanis, charcoal Tandoor platters, and royal desserts. Filter by dietary choices or search for your favorite dish.
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="mb-10 space-y-6">
          <div className="flex flex-col md:flex-row items-center gap-4">
            {/* Search Input */}
            <div className="relative flex-1 w-full">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gold-400/70" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search Biryani, Al Faham, Neymeen, Payasam, Paneer..."
                className="w-full pl-11 pr-4 py-3.5 rounded-2xl bg-obsidian-900/90 border border-gold-500/25 text-xs text-cream-100 placeholder-cream-300/40 focus:outline-none focus:border-gold-400 transition-all backdrop-blur-xl"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-cream-300/60 hover:text-white"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Dietary Tags Pill Scroll */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto scrollbar-none">
              <span className="text-[11px] text-cream-300/50 uppercase tracking-widest flex items-center gap-1 shrink-0 pl-1">
                <Filter className="w-3 h-3 text-gold-400" /> Filter:
              </span>
              {dietaryOptions.map((diet) => (
                <button
                  key={diet}
                  onClick={() => setDietaryFilter(diet)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wide shrink-0 transition-all ${
                    dietaryFilter === diet
                      ? 'bg-gold-500 text-obsidian-950 font-bold shadow-md'
                      : 'bg-obsidian-800/80 text-cream-200 hover:text-gold-300 border border-white/5'
                  }`}
                >
                  {diet === 'all' ? 'All Items' : diet}
                </button>
              ))}
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none border-b border-white/10">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-5 py-3 rounded-xl text-xs uppercase tracking-widest font-semibold transition-all shrink-0 whitespace-nowrap ${
                  selectedCategory === cat.id
                    ? 'bg-gold-500/20 text-gold-300 border border-gold-400/60 shadow-[0_0_15px_rgba(212,175,55,0.15)]'
                    : 'text-cream-200/70 hover:text-cream-50 hover:bg-white/5'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between text-xs text-cream-300/60 mb-8">
          <span>Showing {filteredDishes.length} Delicia Specialties</span>
          {searchQuery && (
            <span>Results matching &ldquo;{searchQuery}&rdquo;</span>
          )}
        </div>

        {/* Dishes Grid */}
        {filteredDishes.length === 0 ? (
          <div className="text-center py-20 rounded-3xl glass-panel border border-white/10 space-y-3">
            <Utensils className="w-10 h-10 text-gold-400 mx-auto opacity-60" />
            <h3 className="font-serif text-xl text-cream-100">No dishes match your specific search</h3>
            <p className="text-xs text-cream-300/60">
              Try searching with another keyword or resetting filters.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
                setDietaryFilter('all');
              }}
              className="mt-2 px-5 py-2 rounded-full bg-gold-500/20 text-gold-300 border border-gold-400/40 text-xs font-semibold uppercase tracking-wider"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDishes.map((dish) => (
              <div
                key={dish.id}
                onClick={() => setSelectedDishModal(dish)}
                className="group relative rounded-3xl overflow-hidden glass-panel border border-gold-500/20 hover:border-gold-400/60 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_20px_45px_rgba(0,0,0,0.9),0_0_25px_rgba(212,175,55,0.12)] cursor-pointer flex flex-col justify-between"
              >
                {/* Image Section */}
                <div className="relative h-56 w-full overflow-hidden">
                  <Image
                    src={dish.image}
                    alt={dish.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-obsidian-950/20 to-transparent" />

                  {/* Price Tag in INR */}
                  <div className="absolute top-3 right-3 px-3.5 py-1 rounded-full bg-obsidian-950/90 border border-gold-500/50 text-gold-300 font-serif font-bold text-sm backdrop-blur-md">
                    ₹{dish.price}
                  </div>

                  {dish.origin && (
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-obsidian-950/80 border border-white/10 text-[9px] uppercase tracking-wider text-cream-200/80 backdrop-blur-md">
                      {dish.origin}
                    </div>
                  )}
                </div>

                {/* Content Section */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    {/* Dietary Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-2">
                      {dish.dietary.map((d) => (
                        <span
                          key={d}
                          className="px-2 py-0.5 rounded-md bg-gold-500/10 border border-gold-500/20 text-[9px] uppercase tracking-wider text-gold-300 font-medium"
                        >
                          {d}
                        </span>
                      ))}
                    </div>

                    <h3 className="font-serif text-lg font-bold text-cream-100 group-hover:text-gold-300 transition-colors leading-snug">
                      {dish.name}
                    </h3>

                    {dish.malayalamName && (
                      <p className="text-xs text-gold-400/90 font-medium line-clamp-1 mt-0.5">
                        {dish.malayalamName}
                      </p>
                    )}

                    <p className="text-xs text-cream-200/70 font-light mt-2 line-clamp-2 leading-relaxed">
                      {dish.description}
                    </p>

                    {/* Refreshment Pairing Snippet */}
                    {dish.pairing && (
                      <div className="mt-3 p-2 rounded-xl bg-obsidian-900/80 border border-white/5 text-[10px] text-cream-200/80 flex items-center gap-1.5">
                        <Utensils className="w-3 h-3 text-gold-400 shrink-0" />
                        <span className="truncate italic">Pair with: {dish.pairing}</span>
                      </div>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="pt-3 border-t border-white/10 flex items-center gap-2">
                    <button
                      onClick={(e) => handleAdd(dish, e)}
                      className={`flex-1 py-2.5 px-3 rounded-xl text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all ${
                        addedDishId === dish.id
                          ? 'bg-emerald-600 text-white'
                          : 'bg-gold-500/15 hover:bg-gold-500/25 border border-gold-500/30 text-gold-300'
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
                      title="Inspect Ingredients"
                    >
                      <Info className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
