'use client';

import React, { useState } from 'react';
import { Sparkles, Calendar, ChevronRight, Utensils } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { CHEF_TASTING_MENU } from '@/data/restaurantData';

export const ChefTastingMenu: React.FC = () => {
  const { setIsReservationOpen } = useCart();
  const [activeCourse, setActiveCourse] = useState(0);

  return (
    <section id="tasting-menu" className="relative py-28 bg-gradient-to-b from-obsidian-950 via-obsidian-900 to-obsidian-950 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-burgundy-900/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs uppercase tracking-widest font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            Royal Family Dastarkhwan
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-light text-cream-50 leading-tight">
            The Royal <span className="font-normal italic text-gold-gradient">7-Course</span> Dastarkhwan Feast
          </h2>
          <p className="text-sm sm:text-base text-cream-200/75 font-light leading-relaxed">
            A grand gastronomic journey traversing coastal Malabar sea delicacies, smoky charcoal tandoor platters, and authentic dum-sealed mutton biryani pots.
          </p>
        </div>

        {/* Tasting Menu Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Course List Navigation */}
          <div className="lg:col-span-6 space-y-3">
            {CHEF_TASTING_MENU.map((course, idx) => (
              <div
                key={course.courseNumber}
                onClick={() => setActiveCourse(idx)}
                className={`p-4 sm:p-5 rounded-2xl cursor-pointer transition-all duration-300 border flex items-center justify-between ${
                  activeCourse === idx
                    ? 'glass-panel-gold border-gold-400/50 shadow-xl'
                    : 'glass-panel border-white/5 hover:border-gold-500/30'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`font-serif text-xl font-bold ${
                    activeCourse === idx ? 'text-gold-400' : 'text-cream-300/40'
                  }`}>
                    {course.courseNumber}
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-widest font-semibold text-gold-400/80">
                      {course.courseName}
                    </div>
                    <div className="font-serif text-base sm:text-lg font-medium text-cream-100">
                      {course.title}
                    </div>
                  </div>
                </div>

                <div className={`transition-transform duration-300 ${
                  activeCourse === idx ? 'text-gold-400 translate-x-1' : 'text-cream-300/30'
                }`}>
                  <ChevronRight className="w-5 h-5" />
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Active Course Showcase & Reservation Box */}
          <div className="lg:col-span-6 flex flex-col justify-between rounded-3xl glass-panel-gold p-8 border border-gold-500/40 shadow-2xl relative overflow-hidden">
            {/* Top Course Details */}
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <span className="text-xs uppercase tracking-widest text-gold-400 font-bold">
                    Course {CHEF_TASTING_MENU[activeCourse].courseNumber} of 07
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-cream-50 mt-1">
                    {CHEF_TASTING_MENU[activeCourse].title}
                  </h3>
                  <div className="text-xs italic text-gold-300/80 font-serif">
                    {CHEF_TASTING_MENU[activeCourse].courseName}
                  </div>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-obsidian-950/70 border border-white/10 space-y-3">
                <div className="text-xs text-cream-300/50 uppercase tracking-widest font-semibold">
                  Culinary Essence
                </div>
                <p className="text-sm text-cream-100 font-light leading-relaxed">
                  {CHEF_TASTING_MENU[activeCourse].description}
                </p>
              </div>

              {/* Pairing Highlight */}
              <div className="p-5 rounded-2xl bg-burgundy-950/40 border border-gold-500/30 space-y-2">
                <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-gold-400 font-semibold">
                  <Utensils className="w-4 h-4 text-gold-400" />
                  House Special Refreshment Pairing
                </div>
                <div className="font-serif text-base sm:text-lg text-cream-100 italic">
                  {CHEF_TASTING_MENU[activeCourse].pairing}
                </div>
              </div>
            </div>

            {/* Pricing & Booking Card in INR */}
            <div className="mt-8 pt-6 border-t border-white/10 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-2xl sm:text-3xl font-serif font-bold text-gold-gradient">
                    ₹1,250 <span className="text-xs text-cream-300/70 font-sans font-normal">/ Guest (Complete Feast)</span>
                  </div>
                  <div className="text-[11px] text-cream-300/60 font-light">
                    Special Kids Menu Available at ₹550
                  </div>
                </div>

                <button
                  onClick={() => setIsReservationOpen(true)}
                  className="gold-btn px-6 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-xl"
                >
                  <Calendar className="w-4 h-4" />
                  Book Dastarkhwan
                </button>
              </div>

              <div className="flex items-center justify-between text-[11px] text-cream-300/60 pt-2">
                <span>⚡ Available in Malappuram & Valluvambram</span>
                <span>✨ Private AC Majlis Seating Available</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
