'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  Utensils, 
  Calendar, 
  ShoppingBag, 
  Menu, 
  X, 
  MapPin, 
  Phone, 
  Sparkles,
  ChevronDown
} from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { AudioAmbiance } from '@/components/ui/AudioAmbiance';
import { LOCATIONS_DATA } from '@/data/restaurantData';

export const Navbar: React.FC = () => {
  const { cartCount, setIsCartOpen, setIsReservationOpen, currentLocation, setCurrentLocation } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [locationDropdownOpen, setLocationDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Signatures', href: '#signatures' },
    { name: 'Tasting Menu', href: '#tasting-menu' },
    { name: 'Digital Menu', href: '#menu' },
    { name: 'Catering & Galas', href: '#catering' },
    { name: 'Wine Cellar', href: '#wine-cellar' },
    { name: 'Locations', href: '#locations' },
    { name: 'Reviews', href: '#reviews' },
  ];

  return (
    <>
      {/* Top Banner Ticker */}
      <div className="bg-obsidian-950/90 border-b border-gold-500/15 py-1.5 px-4 text-[11px] text-cream-200 tracking-wider hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-gold-400 font-medium">
              <Sparkles className="w-3 h-3 text-gold-400" />
              Michelin Star Guide 2024 Distinction
            </span>
            <span className="text-white/20">•</span>
            <span className="text-cream-200/80">
              Private Dining & Autumn Degustation Reservations Now Open
            </span>
          </div>

          <div className="flex items-center gap-6">
            {/* Location Switcher */}
            <div className="relative">
              <button
                onClick={() => setLocationDropdownOpen(!locationDropdownOpen)}
                className="flex items-center gap-1.5 text-gold-300 hover:text-gold-200 transition-colors"
              >
                <MapPin className="w-3 h-3 text-gold-400" />
                <span>{currentLocation.name}</span>
                <ChevronDown className="w-3 h-3 text-gold-400" />
              </button>

              {locationDropdownOpen && (
                <div 
                  className="absolute right-0 mt-2 w-64 rounded-xl bg-obsidian-900 border border-gold-500/30 p-2 shadow-2xl z-50 backdrop-blur-xl"
                  onMouseLeave={() => setLocationDropdownOpen(false)}
                >
                  <div className="text-[10px] text-cream-300/50 uppercase tracking-widest px-2 py-1">
                    Select Flagship Location
                  </div>
                  {LOCATIONS_DATA.map((loc) => (
                    <button
                      key={loc.id}
                      onClick={() => {
                        setCurrentLocation(loc);
                        setLocationDropdownOpen(false);
                      }}
                      className={`w-full text-left px-3 py-2 rounded-lg text-xs transition-all flex items-center justify-between ${
                        loc.id === currentLocation.id
                          ? 'bg-gold-500/20 text-gold-300 font-medium'
                          : 'text-cream-200 hover:bg-white/5'
                      }`}
                    >
                      <div>
                        <div className="font-serif">{loc.name}</div>
                        <div className="text-[10px] text-cream-300/60">{loc.city} • {'⭐'.repeat(loc.michelinStars)}</div>
                      </div>
                      {loc.id === currentLocation.id && (
                        <span className="w-1.5 h-1.5 rounded-full bg-gold-400" />
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <a
              href={`tel:${currentLocation.phone}`}
              className="flex items-center gap-1.5 hover:text-gold-300 transition-colors"
            >
              <Phone className="w-3 h-3 text-gold-400" />
              <span>{currentLocation.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-500 ${
          isScrolled
            ? 'bg-obsidian-950/85 backdrop-blur-xl border-b border-gold-500/20 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.8)]'
            : 'bg-gradient-to-b from-obsidian-950/90 via-obsidian-950/60 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="group flex items-center gap-3">
            <div className="w-10 h-10 rounded-full border border-gold-500/40 flex items-center justify-center bg-gradient-to-br from-gold-500/20 via-obsidian-900 to-obsidian-950 group-hover:border-gold-400 transition-all shadow-[0_0_15px_rgba(212,175,55,0.15)]">
              <span className="font-serif text-lg font-bold text-gold-400 group-hover:scale-110 transition-transform">D</span>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-2xl font-bold tracking-wider text-gold-gradient uppercase leading-none">
                Delicia
              </span>
              <span className="text-[9px] uppercase tracking-[0.25em] text-cream-200/60 font-light mt-0.5">
                Haute Gastronomie
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs uppercase tracking-widest font-medium text-cream-200/80 hover:text-gold-300 transition-all duration-300 relative group py-1"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-gradient-to-r from-gold-400 to-gold-600 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Audio Ambiance Synthesizer */}
            <div className="hidden sm:block">
              <AudioAmbiance />
            </div>

            {/* Shopping Cart Drawer Trigger */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2.5 rounded-full bg-obsidian-800/80 border border-white/10 hover:border-gold-500/40 text-cream-200 hover:text-gold-300 transition-all"
              aria-label="View Gourmet Order Cart"
            >
              <ShoppingBag className="w-4 h-4" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-gold-500 text-obsidian-950 text-[10px] font-bold flex items-center justify-center shadow-lg animate-pulse">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Table Reservation Button */}
            <button
              onClick={() => setIsReservationOpen(true)}
              className="gold-btn px-4 sm:px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider flex items-center gap-2 shadow-lg"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Reserve Table</span>
              <span className="sm:hidden">Book</span>
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg bg-obsidian-800/60 border border-white/10 text-cream-200 hover:text-gold-300 transition-colors"
              aria-label="Toggle Mobile Navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden fixed inset-x-0 top-[68px] bg-obsidian-950/95 border-b border-gold-500/20 backdrop-blur-2xl px-6 py-8 transition-all z-50 max-h-[85vh] overflow-y-auto">
            <div className="flex flex-col gap-4">
              <div className="pb-4 border-b border-white/10 flex items-center justify-between">
                <span className="text-xs text-cream-300/60 uppercase tracking-widest">Ambient Lounge Sound</span>
                <AudioAmbiance />
              </div>

              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-serif text-cream-100 hover:text-gold-400 py-2 border-b border-white/5 transition-colors flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <span className="text-gold-500/40 text-xs">→</span>
                </a>
              ))}

              <div className="pt-4 flex flex-col gap-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setIsReservationOpen(true);
                  }}
                  className="w-full gold-btn py-3 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  Instant Table Reservation
                </button>

                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setIsCartOpen(true);
                  }}
                  className="w-full py-3 rounded-xl bg-obsidian-800 border border-gold-500/30 text-xs font-semibold text-gold-300 uppercase tracking-wider flex items-center justify-center gap-2"
                >
                  <ShoppingBag className="w-4 h-4" />
                  View Gourmet Order ({cartCount} items)
                </button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
