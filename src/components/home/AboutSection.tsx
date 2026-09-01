'use client';

import React from 'react';
import Image from 'next/image';
import { Award, Compass, HeartHandshake, Sparkles, CheckCircle2, Flame } from 'lucide-react';
import { AWARDS } from '@/data/restaurantData';

export const AboutSection: React.FC = () => {
  const milestones = [
    { number: '28', label: 'Years of Culinary Mastery', sub: 'Founded in Paris, 1996' },
    { number: '3', label: 'Michelin Stars', sub: 'Consecutive Highest Honors' },
    { number: '1,250+', label: 'Exclusive Galas Catered', sub: 'Global Royalty & Fortune 500' },
    { number: '99.8%', label: 'Guest Perfection Score', sub: 'Over 140,000 Diners' },
  ];

  return (
    <section id="about" className="relative py-28 bg-obsidian-900/60 overflow-hidden">
      {/* Background Subtle Luxury Accents */}
      <div className="absolute top-1/2 -left-48 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-burgundy-900/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs uppercase tracking-widest font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            The Delicia Legacy
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-light text-cream-50 leading-tight">
            A Symphony of <span className="font-normal italic text-gold-gradient">Passion</span>, Precision & Provenance
          </h2>
          <p className="text-sm sm:text-base text-cream-200/70 font-light leading-relaxed">
            Founded with an uncompromising quest for culinary perfection, Delicia marries French classical haute cuisine technique with Japanese reverence for seasonal micro-seasons.
          </p>
        </div>

        {/* Story Grid with Chef & Dining Room imagery */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          {/* Left: Chef Portrait & Plaque */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg">
              {/* Gold frame offset */}
              <div className="absolute -inset-3 rounded-2xl border border-gold-500/30 -rotate-1 pointer-events-none" />
              
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gold-500/40">
                <Image
                  src="https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=1000&q=85"
                  alt="Executive Chef Antoine Delicia"
                  width={600}
                  height={750}
                  className="object-cover w-full h-[520px] filter contrast-[1.05]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-obsidian-950/20 to-transparent" />

                {/* Floating Chef Citation Badge */}
                <div className="absolute bottom-6 left-6 right-6 p-5 rounded-xl bg-obsidian-950/90 border border-gold-500/40 backdrop-blur-xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-serif text-lg font-bold text-cream-50">Chef Antoine Delicia</h4>
                      <p className="text-xs text-gold-400 uppercase tracking-widest font-medium">
                        Culinary Director & 3-Star Michelin Laureate
                      </p>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-gold-500/20 border border-gold-400 flex items-center justify-center">
                      <Flame className="w-5 h-5 text-gold-400" />
                    </div>
                  </div>
                  <p className="mt-3 text-xs italic text-cream-200/80 leading-relaxed border-t border-white/10 pt-3">
                    &ldquo;Every plate is an intimate conversation between the earth, the sea, and the human soul. We do not just serve food; we craft memories that linger for a lifetime.&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Three Pillars of Excellence */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4 p-5 rounded-2xl glass-panel glass-panel-hover">
                <div className="p-3 rounded-xl bg-gold-500/15 border border-gold-500/30 text-gold-400 shrink-0">
                  <Compass className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-cream-100 mb-1">
                    Direct Micro-Terroir Sourcing
                  </h3>
                  <p className="text-xs text-cream-200/75 leading-relaxed">
                    We harvest directly from family-run biodynamic estates in Miyazaki, Brittany, Alba, and Provence. Every ingredient arrives within 24 hours of harvest or harvest-catch.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 rounded-2xl glass-panel glass-panel-hover">
                <div className="p-3 rounded-xl bg-gold-500/15 border border-gold-500/30 text-gold-400 shrink-0">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-cream-100 mb-1">
                    Unmatched Sommelier Cellar
                  </h3>
                  <p className="text-xs text-cream-200/75 leading-relaxed">
                    Over 3,400 reference labels from centuries-old Bordeaux châteaux, Burgundy Premier Crus, and artisanal biodynamic estates, managed by Grand Sommelier Antoine de la Rivière.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 rounded-2xl glass-panel glass-panel-hover">
                <div className="p-3 rounded-xl bg-gold-500/15 border border-gold-500/30 text-gold-400 shrink-0">
                  <HeartHandshake className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-cream-100 mb-1">
                    Bespoke Hospitality & Private Vaults
                  </h3>
                  <p className="text-xs text-cream-200/75 leading-relaxed">
                    Personalized dining itineraries, discreet VIP suites, tailored tasting journeys for celebratory milestones, and world-class luxury catering operations globally.
                  </p>
                </div>
              </div>
            </div>

            {/* Accreditations checklist */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-obsidian-950 to-obsidian-900 border border-gold-500/20">
              <div className="text-xs uppercase tracking-widest text-gold-400 font-semibold mb-3">
                Our Gastronomic Commitments
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-cream-200/90">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-gold-400" />
                  100% Certified Sustainable Seafood
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-gold-400" />
                  Zero Single-Use Waste Operations
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-gold-400" />
                  Himalayan Salt Dry-Aging On-Premise
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-gold-400" />
                  Handcrafted Baccarat Table Settings
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Milestone Statistics Counter Bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 p-8 rounded-3xl glass-panel-gold border border-gold-500/30 shadow-2xl">
          {milestones.map((m, idx) => (
            <div key={idx} className="text-center space-y-1 relative">
              {idx > 0 && (
                <div className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 h-12 w-[1px] bg-gradient-to-b from-transparent via-gold-500/30 to-transparent" />
              )}
              <div className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-gold-gradient">
                {m.number}
              </div>
              <div className="text-xs font-semibold uppercase tracking-wider text-cream-100">
                {m.label}
              </div>
              <div className="text-[11px] text-cream-300/60 font-light">
                {m.sub}
              </div>
            </div>
          ))}
        </div>

        {/* Awards Badges Carousel / Bar */}
        <div className="mt-16 pt-10 border-t border-white/10 flex flex-wrap items-center justify-center gap-8 sm:gap-12">
          {AWARDS.map((award, i) => (
            <div key={i} className="flex items-center gap-3 opacity-80 hover:opacity-100 transition-opacity">
              <span className="text-2xl">{award.icon}</span>
              <div>
                <div className="text-xs font-serif font-bold text-cream-100">{award.title}</div>
                <div className="text-[10px] uppercase tracking-wider text-gold-400">{award.org}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
