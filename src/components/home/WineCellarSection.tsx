'use client';

import React, { useState } from 'react';
import { Sparkles, Award, Coffee, Utensils, Check } from 'lucide-react';
import { useCart } from '@/context/CartContext';

interface BeverageRecommendation {
  name: string;
  malayalamName: string;
  category: string;
  notes: string;
  servingStyle: string;
  price: number;
  bestPairedWith: string;
}

const BEVERAGE_RECOMMENDATIONS: Record<string, BeverageRecommendation> = {
  biryani: {
    name: 'Kashmiri Royal Saffron Qahwa & Sulaimani',
    malayalamName: 'കാശ്മീരി സുലൈമാനി & കുങ്കുമപ്പൂ ഖഹ്വ',
    category: 'Hot Herbal Digestif',
    notes: 'Brewed with wild cardamom pods, crushed cinnamon bark, pure Kashmiri saffron strands, and slivered almonds. The quintessential palate cleanser after a rich Malabar Dum Biryani.',
    servingStyle: 'Served steaming hot in hand-carved brass samovar cups',
    price: 90,
    bestPairedWith: 'Royal Malabar Kaima Mutton Dum Biryani'
  },
  alfaham: {
    name: 'Signature Blue Ocean Saffron & Mint Kulukki',
    malayalamName: 'ഡെലിഷ്യ സ്പെഷ്യൽ കുലുക്കി സർബത്ത്',
    category: 'Handcrafted Shaken Mocktail',
    notes: 'Zesty lemon juice, tender coconut water, basil seeds (sabja), green chili slit for a gentle kick, shaken vigorously over crushed ice and topped with saffron mist.',
    servingStyle: 'Chilled glass jar with mint bouquet & chili garnish',
    price: 140,
    bestPairedWith: 'Charcoal Kanthari Al Faham & Tandoori Platters'
  },
  seafood: {
    name: 'Fresh Tender Coconut (Elaneer) Mint Cooler',
    malayalamName: 'ഫ്രഷ് ഇളനീർ മിന്റ് കൂളർ',
    category: 'Natural Hydration',
    notes: 'Pure water harvested directly from local tender coconuts, blended with fresh garden mint leaves and a dash of rock salt to balance spicy seafood roasts.',
    servingStyle: 'Served inside a trimmed fresh coconut shell',
    price: 120,
    bestPairedWith: 'Beypore Tiger Prawns & Neymeen Pollichathu'
  },
  dessert: {
    name: 'Royal Pistachio Rose Petal Badam Milk',
    malayalamName: 'റോയൽ പിസ്ത റോസ് ബദാം മിൽക്ക്',
    category: 'Rich Milk Nectar',
    notes: 'Slow-simmered rich creamy milk infused with roasted Iranian pistachios, crushed almonds, organic rose water, and pure honey.',
    servingStyle: 'Chilled clay matka with dried rose petals and crushed nuts',
    price: 160,
    bestPairedWith: 'Royal 24K Gold Elaneer Payasam & Shahi Tukda'
  }
};

export const WineCellarSection: React.FC = () => {
  const { setIsReservationOpen } = useCart();
  const [selectedPairing, setSelectedPairing] = useState<'biryani' | 'alfaham' | 'seafood' | 'dessert'>('biryani');

  const currentBev = BEVERAGE_RECOMMENDATIONS[selectedPairing];

  return (
    <section id="beverages" className="relative py-28 bg-obsidian-950 overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-burgundy-900/25 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-gold-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs uppercase tracking-widest font-semibold">
            <Coffee className="w-3.5 h-3.5" />
            The Royal Beverage & Qahwa Lounge
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-light text-cream-50 leading-tight">
            Artisanal <span className="font-normal italic text-gold-gradient">Mocktails & Hot Qahwas</span>
          </h2>
          <p className="text-sm sm:text-base text-cream-200/75 font-light leading-relaxed">
            Every grand feast at Delicia is paired with handcrafted refreshers — from traditional Malabar Sulaimani to vibrant Kulukki mocktails.
          </p>
        </div>

        {/* Interactive Beverage Pairing Experience */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: Pairing Selector Buttons */}
          <div className="lg:col-span-5 space-y-4">
            <div className="text-xs uppercase tracking-widest text-cream-300/60 font-semibold mb-2">
              Select Your Meal Pairing:
            </div>

            {[
              { id: 'biryani', label: 'With Malabar Dum Biryani', sub: 'Kashmiri Saffron Qahwa & Sulaimani', icon: '☕' },
              { id: 'alfaham', label: 'With Charcoal Al Faham', sub: 'Handcrafted Shaken Saffron Kulukki', icon: '🍹' },
              { id: 'seafood', label: 'With Seafood Pollichathu', sub: 'Pure Tender Coconut Mint Cooler', icon: '🥥' },
              { id: 'dessert', label: 'With Royal Sweet Payasam', sub: 'Pistachio Rose Petal Badam Nectar', icon: '🥛' },
            ].map((option) => (
              <button
                key={option.id}
                onClick={() => setSelectedPairing(option.id as any)}
                className={`w-full p-5 rounded-2xl text-left transition-all duration-300 border flex items-center justify-between ${
                  selectedPairing === option.id
                    ? 'glass-panel-gold border-gold-400/50 shadow-xl'
                    : 'glass-panel border-white/5 hover:border-gold-500/30'
                }`}
              >
                <div className="flex items-center gap-4">
                  <span className="text-2xl">{option.icon}</span>
                  <div>
                    <div className="font-serif text-base sm:text-lg font-bold text-cream-100">
                      {option.label}
                    </div>
                    <div className="text-xs text-cream-200/60 font-light mt-0.5">
                      {option.sub}
                    </div>
                  </div>
                </div>
                {selectedPairing === option.id && (
                  <div className="w-6 h-6 rounded-full bg-gold-500 text-obsidian-950 flex items-center justify-center font-bold text-xs">
                    ✓
                  </div>
                )}
              </button>
            ))}

            {/* Special Lounge note */}
            <div className="p-4 rounded-xl bg-obsidian-900 border border-white/10 text-xs text-cream-200/80 flex items-center gap-3">
              <Sparkles className="w-4 h-4 text-gold-400 shrink-0" />
              <span>
                Enjoy complimentary traditional hot Sulaimani tea with every dine-in Biryani order at both branches.
              </span>
            </div>
          </div>

          {/* Right: Beverage Reveal Card */}
          <div className="lg:col-span-7 rounded-3xl glass-panel-gold p-8 sm:p-10 border border-gold-500/40 shadow-2xl relative">
            <div className="space-y-6">
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
                <div>
                  <div className="flex items-center gap-2 text-gold-400 text-xs uppercase tracking-widest font-semibold mb-1">
                    <Award className="w-4 h-4" />
                    Signature Beverage Selection
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-cream-50">
                    {currentBev.name}
                  </h3>
                  <div className="text-xs text-gold-300 font-medium mt-1">
                    {currentBev.malayalamName} • {currentBev.category}
                  </div>
                </div>

                <div className="sm:text-right">
                  <div className="font-serif text-3xl font-bold text-gold-gradient">
                    ₹{currentBev.price}
                  </div>
                  <div className="text-[11px] text-cream-300/60 font-light">
                    Per Glass / Clay Cup
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="space-y-2">
                <div className="text-xs uppercase tracking-widest text-cream-300/50 font-semibold">
                  Ingredients & Flavor Profile
                </div>
                <p className="text-xs sm:text-sm text-cream-100 font-light leading-relaxed italic bg-obsidian-950/70 p-4 rounded-xl border border-white/5">
                  &ldquo;{currentBev.notes}&rdquo;
                </p>
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-2 gap-4 text-xs">
                <div className="p-4 rounded-xl bg-obsidian-950/50 border border-white/5 space-y-1">
                  <div className="text-cream-300/50 uppercase tracking-widest text-[10px]">Presentation Style</div>
                  <div className="font-serif text-xs text-gold-300 font-semibold">{currentBev.servingStyle}</div>
                </div>
                <div className="p-4 rounded-xl bg-obsidian-950/50 border border-white/5 space-y-1">
                  <div className="text-cream-300/50 uppercase tracking-widest text-[10px]">Perfect Pairing</div>
                  <div className="font-serif text-xs text-cream-100 font-medium truncate">{currentBev.bestPairedWith}</div>
                </div>
              </div>

              {/* Card CTA */}
              <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-cream-300/60">
                  Prepared fresh to order in our live mocktail and tea bar.
                </div>
                <button
                  onClick={() => setIsReservationOpen(true)}
                  className="w-full sm:w-auto gold-btn px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg"
                >
                  <Utensils className="w-4 h-4" />
                  Book Table & Refreshments
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
