'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Car, 
  Sparkles, 
  Calendar,
  ExternalLink,
  ShieldCheck,
  CheckCircle2
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
            Our Two Flagship Branches
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-light text-cream-50 leading-tight">
            Visit Us in <span className="font-normal italic text-gold-gradient">Malappuram & Valluvambram</span>
          </h2>
          <p className="text-sm sm:text-base text-cream-200/75 font-light leading-relaxed">
            Experience our royal hospitality, grand AC family dining halls, live tandoor kitchens, and ample dedicated parking facilities.
          </p>
        </div>

        {/* Location Switcher Tabs */}
        <div className="flex items-center justify-center gap-4 mb-12 flex-wrap">
          {LOCATIONS_DATA.map((loc) => (
            <button
              key={loc.id}
              onClick={() => setActiveLocId(loc.id)}
              className={`px-8 py-3.5 rounded-full text-xs uppercase tracking-widest font-bold transition-all flex items-center gap-2 ${
                activeLocId === loc.id
                  ? 'bg-gold-500 text-obsidian-950 font-bold shadow-[0_4px_25px_rgba(212,175,55,0.45)] scale-105'
                  : 'bg-obsidian-800/80 text-cream-200 hover:text-gold-300 border border-white/10'
              }`}
            >
              <MapPin className="w-4 h-4" />
              <span>{loc.city} Flagship</span>
            </button>
          ))}
        </div>

        {/* Active Location Showcase Card */}
        <div className="rounded-3xl glass-panel-gold overflow-hidden border border-gold-500/40 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            {/* Location Photography */}
            <div className="lg:col-span-6 relative min-h-[380px] lg:min-h-[520px]">
              <Image
                src={activeLoc.image}
                alt={activeLoc.name}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-obsidian-950/90 via-obsidian-950/40 to-transparent" />

              <div className="absolute top-6 left-6 px-3.5 py-1.5 rounded-full bg-obsidian-950/85 border border-gold-500/50 text-gold-300 text-xs font-bold uppercase tracking-wider backdrop-blur-md flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                100% Halal Certified Family Dining
              </div>

              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-xl bg-obsidian-950/90 border border-white/10 backdrop-blur-md space-y-2">
                <div className="text-[10px] uppercase tracking-widest text-cream-300/60">Branch Facilities:</div>
                <div className="grid grid-cols-2 gap-2 text-xs text-cream-200">
                  {activeLoc.features.map((feat, i) => (
                    <div key={i} className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                      <span className="truncate">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Location Details & Direct Contact */}
            <div className="lg:col-span-6 p-8 sm:p-12 flex flex-col justify-between space-y-6">
              <div className="space-y-6">
                <div>
                  <h3 className="font-serif text-3xl font-bold text-cream-50">
                    {activeLoc.name}
                  </h3>
                  <p className="text-xs text-gold-400 uppercase tracking-widest font-semibold mt-1">
                    {activeLoc.city}, Kerala, India
                  </p>
                </div>

                <div className="space-y-3.5 text-xs text-cream-200/90">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{activeLoc.address}</span>
                  </div>

                  {/* Phone Numbers with direct dial */}
                  <div className="p-4 rounded-2xl bg-obsidian-900 border border-gold-500/30 space-y-2">
                    <div className="text-[10px] uppercase tracking-wider text-gold-400 font-bold flex items-center gap-1.5">
                      <Phone className="w-3.5 h-3.5" />
                      Direct Branch Hotline Numbers
                    </div>
                    <div className="flex flex-wrap items-center gap-4 text-sm font-mono font-bold text-cream-50">
                      <a 
                        href={`tel:${activeLoc.phone.replace(/[^0-9+]/g, '')}`}
                        className="hover:text-gold-300 flex items-center gap-1 bg-gold-500/10 px-3 py-1.5 rounded-lg border border-gold-500/20"
                      >
                        📞 {activeLoc.phone}
                      </a>
                      <a 
                        href={`tel:${activeLoc.phoneAlt.replace(/[^0-9+]/g, '')}`}
                        className="hover:text-gold-300 flex items-center gap-1 bg-gold-500/10 px-3 py-1.5 rounded-lg border border-gold-500/20"
                      >
                        📞 {activeLoc.phoneAlt}
                      </a>
                    </div>
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
                    Dining & Takeaway Hours
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-cream-200">
                    <div>
                      <span className="text-cream-300/50 block text-[10px]">Lunch & Biryani Service</span>
                      {activeLoc.hours.lunch}
                    </div>
                    <div>
                      <span className="text-cream-300/50 block text-[10px]">Dinner & Tandoori Dastarkhwan</span>
                      {activeLoc.hours.dinner}
                    </div>
                  </div>
                  {activeLoc.hours.majlis && (
                    <div className="text-[11px] text-gold-300/90 pt-1 border-t border-white/5">
                      ✨ {activeLoc.hours.majlis}
                    </div>
                  )}
                </div>

                {/* Amenities */}
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="p-3 rounded-xl bg-obsidian-950/50 border border-white/5 space-y-0.5">
                    <div className="text-[10px] uppercase text-cream-300/50 flex items-center gap-1">
                      <Car className="w-3 h-3 text-gold-400" /> Parking Facility
                    </div>
                    <div className="text-cream-100 font-medium">Valet & Ample Highway Parking</div>
                  </div>

                  <div className="p-3 rounded-xl bg-obsidian-950/50 border border-white/5 space-y-0.5">
                    <div className="text-[10px] uppercase text-cream-300/50 flex items-center gap-1">
                      <ShieldCheck className="w-3 h-3 text-gold-400" /> Family Cabins
                    </div>
                    <div className="text-cream-100 font-medium">Dedicated AC Family Rooms</div>
                  </div>
                </div>
              </div>

              {/* Booking & Direction Actions */}
              <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center gap-3">
                <button
                  onClick={() => handleBookLocation(activeLoc)}
                  className="w-full sm:flex-1 gold-btn py-3.5 rounded-xl text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 shadow-xl"
                >
                  <Calendar className="w-4 h-4" />
                  Book Table at {activeLoc.city}
                </button>

                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(activeLoc.name + ' ' + activeLoc.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-5 py-3.5 rounded-xl bg-obsidian-800 border border-white/10 hover:border-gold-400 text-xs font-semibold uppercase tracking-wider text-cream-100 flex items-center justify-center gap-1.5 transition-colors"
                >
                  <span>Google Map</span>
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
