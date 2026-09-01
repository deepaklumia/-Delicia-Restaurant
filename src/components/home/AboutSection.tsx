'use client';

import React from 'react';
import Image from 'next/image';
import { Award, Compass, HeartHandshake, Sparkles, CheckCircle2, Flame, ShieldCheck } from 'lucide-react';
import { AWARDS } from '@/data/restaurantData';

export const AboutSection: React.FC = () => {
  const milestones = [
    { number: '100%', label: 'Certified Halal & Fresh', sub: 'Zero preservatives or frozen meat' },
    { number: '2', label: 'Flagship Locations', sub: 'Malappuram & Valluvambram' },
    { number: '850+', label: 'Weddings & Banquets Catered', sub: 'Across Kerala & GCC families' },
    { number: '4.9★', label: 'Google Guest Score', sub: 'Over 12,000 Verified Diners' },
  ];

  return (
    <section id="about" className="relative py-28 bg-obsidian-900/60 overflow-hidden">
      {/* Background Subtle Luxury Accents */}
      <div className="absolute top-1/2 -left-48 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-burgundy-900/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs uppercase tracking-widest font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            The Delicia Story
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-light text-cream-50 leading-tight">
            The Royal Heritage of <span className="font-normal italic text-gold-gradient">Malabar & Indian</span> Flavors
          </h2>
          <p className="text-sm sm:text-base text-cream-200/75 font-light leading-relaxed">
            Delicia was born to celebrate the authentic culinary traditions of Malabar alongside the royal splendor of Awadhi and Mughal tandoori dining.
          </p>
        </div>

        {/* Story Grid with Chef & Dining Room imagery */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          {/* Left: Master Chef Portrait & Plaque */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg">
              {/* Gold frame offset */}
              <div className="absolute -inset-3 rounded-2xl border border-gold-500/30 -rotate-1 pointer-events-none" />
              
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gold-500/40">
                <Image
                  src="https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=1000&q=85"
                  alt="Executive Master Chef at Delicia"
                  width={600}
                  height={750}
                  className="object-cover w-full h-[520px] filter contrast-[1.05]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-obsidian-950/20 to-transparent" />

                {/* Floating Chef Citation Badge */}
                <div className="absolute bottom-6 left-6 right-6 p-5 rounded-xl bg-obsidian-950/90 border border-gold-500/40 backdrop-blur-xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-serif text-lg font-bold text-cream-50">Ustad Chef Moideen & Team</h4>
                      <p className="text-xs text-gold-400 uppercase tracking-widest font-medium">
                        Culinary Director & Master of Malabar Dum Heritage
                      </p>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-gold-500/20 border border-gold-400 flex items-center justify-center">
                      <Flame className="w-5 h-5 text-gold-400" />
                    </div>
                  </div>
                  <p className="mt-3 text-xs italic text-cream-200/80 leading-relaxed border-t border-white/10 pt-3">
                    &ldquo;Real Malabar and Indian gastronomy is built on patience: hand-ground Wayanad spices, slow coal-simmered dum handis, and the pure joy of family gatherings.&rdquo;
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
                    Authentic Malabar Spice & Ghee Sourcing
                  </h3>
                  <p className="text-xs text-cream-200/75 leading-relaxed">
                    We source Jeerakasala (Kaima) rice directly from selected Wayanad paddy farmers, freshly pressed coconut oil, and small-batch cultured ghee for authentic aroma.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 rounded-2xl glass-panel glass-panel-hover">
                <div className="p-3 rounded-xl bg-gold-500/15 border border-gold-500/30 text-gold-400 shrink-0">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-cream-100 mb-1">
                    Charcoal Clay Tandoor & Banana Leaf Roasts
                  </h3>
                  <p className="text-xs text-cream-200/75 leading-relaxed">
                    Our live coal-fired tandoor produces succulent kebabs, crisp buttery naans, and fiery Kanthari Al Faham, while fresh sea catch is grilled in banana leaf wraps.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 rounded-2xl glass-panel glass-panel-hover">
                <div className="p-3 rounded-xl bg-gold-500/15 border border-gold-500/30 text-gold-400 shrink-0">
                  <HeartHandshake className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-cream-100 mb-1">
                    Family AC Cabins & Royal Wedding Catering
                  </h3>
                  <p className="text-xs text-cream-200/75 leading-relaxed">
                    Private air-conditioned family cabins in Malappuram and Valluvambram, alongside large-scale royal catering capabilities for up to 2,500 guests.
                  </p>
                </div>
              </div>
            </div>

            {/* Accreditations checklist */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-obsidian-950 to-obsidian-900 border border-gold-500/20">
              <div className="text-xs uppercase tracking-widest text-gold-400 font-semibold mb-3">
                Our Gastronomic Guarantees
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-cream-200/90">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-gold-400" />
                  100% Certified Halal Meat
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-gold-400" />
                  No Artificial Food Coloring
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-gold-400" />
                  Fresh Daily Arabian Sea Catch
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-gold-400" />
                  Dedicated AC Family Cabins
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

        {/* Awards Badges Bar */}
        <div className="mt-16 pt-10 border-t border-white/10 flex flex-wrap items-center justify-center gap-8 sm:gap-12">
          {AWARDS.map((award, i) => (
            <div key={i} className="flex items-center gap-3 opacity-85 hover:opacity-100 transition-opacity">
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
