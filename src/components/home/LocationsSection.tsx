'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Award, 
  Car, 
  Sparkles, 
  Calendar,
  ExternalLink,
  ShieldCheck
} from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { LOCATIONS_DATA } from '@/data/restaurantData';
import { LocationInfo } from '@/types';

export const LocationsSection: React.FC = () => {
  const { setCurrentLocation, setIsReservationOpen } = useCart();
  const [activeLocId, setActiveLocId] = useState(LOCATIONS_DATA[0].id);

  const activeLoc = LOCATIONS_DATA.find((l) => l.id === activeLocId) || LOCATIONS_DATA[0];

  const handleBookLocation = (loc: LocationInfo) => {
    setCurrentLocation(loc);
    setIsReservationOpen(true);
  };

  return (
    <section id="locations" className="relative py-28 bg-obsidian-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs uppercase tracking-widest font-semibold">
            <MapPin className="w-3.5 h-3.5" />
            Flagship Sanctuaries
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-light text-cream-50 leading-tight">
            Global <span className="font-normal italic text-gold-gradient">Destinations</span>
          </h2>
          <p className="text-sm sm:text-base text-cream-200/75 font-light leading-relaxed">
            Four iconic dining monuments across the world&apos;s greatest cultural epicenters, each designed by master interior architects.
          </p>
        </div>

        {/* City Switcher Tabs */}
        <div className="flex items-center justify-center gap-3 mb-12 flex-wrap">
          {LOCATIONS_DATA.map((loc) => (
            <button
              key={loc.id}
              onClick={() => setActiveLocId(loc.id)}
              className={`px-6 py-3 rounded-full text-xs uppercase tracking-widest font-semibold transition-all ${
                activeLocId === loc.id
                  ? 'bg-gold-500 text-obsidian-950 font-bold shadow-[0_4px_20px_rgba(212,175,55,0.4)] scale-105'
                  : 'bg-obsidian-800/80 text-cream-200 hover:text-gold-300 border border-white/5'
              }`}
            >
              {loc.city} • {'⭐'.repeat(loc.michelinStars)}
            </button>
          ))}
        </div>

        {/* Active Location Showcase Card */}
        <div className="rounded-3xl glass-panel-gold overflow-hidden border border-gold-500/40 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            {/* Location Photography */}
            <div className="lg:col-span-6 relative min-h-[380px] lg:min-h-[500px]">
              <Image
                src={activeLoc.image}
                alt={activeLoc.name}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-obsidian-950/90 via-obsidian-950/40 to-transparent" />

              <div className="absolute top-6 left-6 px-3.5 py-1.5 rounded-full bg-obsidian-950/80 border border-gold-500/40 text-gold-300 text-xs font-bold uppercase tracking-wider backdrop-blur-md flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                {activeLoc.michelinStars} Michelin Stars Distinction
              </div>

              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-obsidian-950/85 border border-white/10 backdrop-blur-md">
                <div className="text-[10px] uppercase tracking-widest text-cream-300/60">Head Chef & Culinary Director</div>
                <div className="font-serif text-sm font-bold text-cream-100">{activeLoc.headChef}</div>
                <div className="text-[11px] text-gold-400 mt-0.5">Cellar Sommelier: {activeLoc.sommelier}</div>
              </div>
            </div>

            {/* Location Details & Direct Booking */}
            <div className="lg:col-span-6 p-8 sm:p-12 flex flex-col justify-between space-y-6">
              <div className="space-y-6">
                <div>
                  <h3 className="font-serif text-3xl font-bold text-cream-50">
                    {activeLoc.name}
                  </h3>
                  <p className="text-xs text-gold-400 uppercase tracking-widest font-semibold mt-1">
                    {activeLoc.city} Flagship Sanctuary
                  </p>
                </div>

                <div className="space-y-3.5 text-xs text-cream-200/80">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                    <span>{activeLoc.address}</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-gold-400 shrink-0" />
                    <a href={`tel:${activeLoc.phone}`} className="hover:text-gold-300 transition-colors">
                      {activeLoc.phone}
                    </a>
                  </div>

                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-gold-400 shrink-0" />
                    <a href={`mailto:${activeLoc.email}`} className="hover:text-gold-300 transition-colors">
                      {activeLoc.email}
                    </a>
                  </div>
                </div>

                {/* Operating Hours Box */}
                <div className="p-4 rounded-2xl bg-obsidian-950/70 border border-white/10 space-y-2">
                  <div className="text-[11px] uppercase tracking-wider text-gold-400 font-semibold flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    Service & Seating Hours
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-cream-200">
                    <div>
                      <span className="text-cream-300/50 block text-[10px]">Lunch Service</span>
                      {activeLoc.hours.lunch}
                    </div>
                    <div>
                      <span className="text-cream-300/50 block text-[10px]">Dinner Gastronomie</span>
                      {activeLoc.hours.dinner}
                    </div>
                  </div>
                </div>

                {/* Amenities & Dress Code */}
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="p-3 rounded-xl bg-obsidian-950/50 border border-white/5 space-y-0.5">
                    <div className="text-[10px] uppercase text-cream-300/50 flex items-center gap-1">
                      <Car className="w-3 h-3 text-gold-400" /> Valet Parking
                    </div>
                    <div className="text-cream-100 font-medium">Complimentary Valet Available</div>
                  </div>

                  <div className="p-3 rounded-xl bg-obsidian-950/50 border border-white/5 space-y-0.5">
                    <div className="text-[10px] uppercase text-cream-300/50 flex items-center gap-1">
                      <ShieldCheck className="w-3 h-3 text-gold-400" /> Dress Code
                    </div>
                    <div className="text-cream-100 font-medium truncate">{activeLoc.dressCode}</div>
                  </div>
                </div>
              </div>

              {/* Booking Actions */}
              <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center gap-3">
                <button
                  onClick={() => handleBookLocation(activeLoc)}
                  className="w-full sm:flex-1 gold-btn py-3.5 rounded-xl text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 shadow-xl"
                >
                  <Calendar className="w-4 h-4" />
                  Reserve at {activeLoc.city}
                </button>

                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(activeLoc.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-5 py-3.5 rounded-xl bg-obsidian-800 border border-white/10 hover:border-gold-400 text-xs font-semibold uppercase tracking-wider text-cream-100 flex items-center justify-center gap-1.5 transition-colors"
                >
                  <span>Directions</span>
                  <ExternalLink className="w-3.5 h-3.5 text-gold-400" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
