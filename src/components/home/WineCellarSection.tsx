'use client';

import React, { useState } from 'react';
import { Wine, Sparkles, Award, Compass, Check, ArrowRight } from 'lucide-react';
import { useCart } from '@/context/CartContext';

interface WineRecommendation {
  name: string;
  vintage: string;
  appellation: string;
  region: string;
  notes: string;
  servingTemp: string;
  bottlePrice: number;
  glassPrice?: number;
  bestPairedWith: string;
}

const WINE_RECOMMENDATIONS: Record<string, WineRecommendation> = {
  wagyu: {
    name: 'Château Margaux 1er Grand Cru Classé',
    vintage: '2015',
    appellation: 'Margaux AOC',
    region: 'Bordeaux, France',
    notes: 'Complex aromas of blackcurrant, violets, smoked cedar, and graphite. Velvety tannins harmonize with the ultra-rich marbling of A5 Wagyu.',
    servingTemp: '17°C (63°F)',
    bottlePrice: 1850,
    glassPrice: 320,
    bestPairedWith: 'Miyazaki A5 Wagyu & Dry-Aged Tomahawk'
  },
  seafood: {
    name: 'Domaine Leflaive Puligny-Montrachet 1er Cru Les Pucelles',
    vintage: '2018',
    appellation: 'Puligny-Montrachet AOC',
    region: 'Côte de Beaune, Burgundy, France',
    notes: 'Sublime minerality, white flowers, lemon curd, toasted hazelnuts, and creamy salinity that cuts through buttery blue lobster and king crab.',
    servingTemp: '12°C (54°F)',
    bottlePrice: 980,
    glassPrice: 175,
    bestPairedWith: 'Brittany Blue Lobster & Hokkaido Scallops'
  },
  truffle: {
    name: 'Gaja Barbaresco DOCG Sori San Lorenzo',
    vintage: '2016',
    appellation: 'Barbaresco DOCG',
    region: 'Piedmont, Italy',
    notes: 'Intense rose petals, tar, wild cherries, damp forest floor, and structured acidity that magnifies the pungent earthy aroma of fresh Alba white truffles.',
    servingTemp: '16°C (61°F)',
    bottlePrice: 850,
    glassPrice: 155,
    bestPairedWith: 'Alba White Truffle Tajarin & Duck Agnolotti'
  },
  caviar: {
    name: 'Dom Pérignon Vintage Brut Champagne P2',
    vintage: '2004',
    appellation: 'Champagne AOC',
    region: 'Épernay, Champagne, France',
    notes: 'Plénitude 2: dynamic freshness, brioche, candied citrus peel, toasted almond, and microscopic effervescence that balances the briny caviar pearls.',
    servingTemp: '9°C (48°F)',
    bottlePrice: 1150,
    glassPrice: 195,
    bestPairedWith: 'Imperial Royal Ossetra Caviar Service'
  }
};

export const WineCellarSection: React.FC = () => {
  const { setIsReservationOpen } = useCart();
  const [selectedPairing, setSelectedPairing] = useState<'wagyu' | 'seafood' | 'truffle' | 'caviar'>('wagyu');

  const currentWine = WINE_RECOMMENDATIONS[selectedPairing];

  return (
    <section id="wine-cellar" className="relative py-28 bg-obsidian-950 overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-burgundy-900/25 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-gold-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs uppercase tracking-widest font-semibold">
            <Wine className="w-3.5 h-3.5" />
            Grand Cru Wine Spectator Program
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-light text-cream-50 leading-tight">
            The Subterranean <span className="font-normal italic text-gold-gradient">Wine Vault</span>
          </h2>
          <p className="text-sm sm:text-base text-cream-200/75 font-light leading-relaxed">
            Housing over 3,400 reference bottles under precise climatic control. Use our interactive Sommelier Assistant to discover your ultimate pairing.
          </p>
        </div>

        {/* Interactive Sommelier Pairing Experience */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: Pairing Selector Buttons */}
          <div className="lg:col-span-5 space-y-4">
            <div className="text-xs uppercase tracking-widest text-cream-300/60 font-semibold mb-2">
              Select Your Dining Palate:
            </div>

            {[
              { id: 'wagyu', label: 'Prime Wagyu & Dry-Aged Beef', sub: 'Bold, structured Premier Grand Cru Reds', icon: '🥩' },
              { id: 'seafood', label: 'Blue Lobster & Shellfish', sub: 'Mineral, rich White Burgundy & Chablis', icon: '🦞' },
              { id: 'truffle', label: 'Alba White Truffles & Pasta', sub: 'Aromatic Piedmontese Barolo & Barbaresco', icon: '🍄' },
              { id: 'caviar', label: 'Royal Ossetra Caviar & Raw Bar', sub: 'Vintage Champagne Plénitude & Blanc de Blancs', icon: '🥂' },
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

            {/* Sommelier Consultation Note */}
            <div className="p-4 rounded-xl bg-obsidian-900 border border-white/10 text-xs text-cream-200/80 flex items-center gap-3">
              <Sparkles className="w-4 h-4 text-gold-400 shrink-0" />
              <span>
                Need rare collector vintages? Master Sommelier Antoine is available for private cellar consultations.
              </span>
            </div>
          </div>

          {/* Right: Sommelier Bottle Reveal Card */}
          <div className="lg:col-span-7 rounded-3xl glass-panel-gold p-8 sm:p-10 border border-gold-500/40 shadow-2xl relative">
            <div className="space-y-6">
              {/* Header with Appellation and Vintage */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
                <div>
                  <div className="flex items-center gap-2 text-gold-400 text-xs uppercase tracking-widest font-semibold mb-1">
                    <Award className="w-4 h-4" />
                    Sommelier Selection of the House
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-cream-50">
                    {currentWine.name}
                  </h3>
                  <div className="text-xs text-gold-300 font-serif mt-1">
                    Vintage {currentWine.vintage} • {currentWine.appellation} ({currentWine.region})
                  </div>
                </div>

                <div className="sm:text-right">
                  <div className="font-serif text-3xl font-bold text-gold-gradient">
                    ${currentWine.bottlePrice}
                  </div>
                  <div className="text-[11px] text-cream-300/60 font-light">
                    750ml Bottle {currentWine.glassPrice ? `• $${currentWine.glassPrice}/glass` : ''}
                  </div>
                </div>
              </div>

              {/* Tasting Notes */}
              <div className="space-y-2">
                <div className="text-xs uppercase tracking-widest text-cream-300/50 font-semibold">
                  Tasting & Terroir Profile
                </div>
                <p className="text-xs sm:text-sm text-cream-100 font-light leading-relaxed italic bg-obsidian-950/70 p-4 rounded-xl border border-white/5">
                  &ldquo;{currentWine.notes}&rdquo;
                </p>
              </div>

              {/* Pairing Metrics */}
              <div className="grid grid-cols-2 gap-4 text-xs">
                <div className="p-4 rounded-xl bg-obsidian-950/50 border border-white/5 space-y-1">
                  <div className="text-cream-300/50 uppercase tracking-widest text-[10px]">Optimal Serving Temp</div>
                  <div className="font-serif text-base text-gold-300 font-semibold">{currentWine.servingTemp}</div>
                </div>
                <div className="p-4 rounded-xl bg-obsidian-950/50 border border-white/5 space-y-1">
                  <div className="text-cream-300/50 uppercase tracking-widest text-[10px]">Harmonious Pairing</div>
                  <div className="font-serif text-xs text-cream-100 font-medium truncate">{currentWine.bestPairedWith}</div>
                </div>
              </div>

              {/* Card CTA */}
              <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-cream-300/60">
                  Stored at 13°C / 70% humidity in our underground vault.
                </div>
                <button
                  onClick={() => setIsReservationOpen(true)}
                  className="w-full sm:w-auto gold-btn px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg"
                >
                  <Wine className="w-4 h-4" />
                  Reserve With Wine Pairing
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
