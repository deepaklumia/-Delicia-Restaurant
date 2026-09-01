'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
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
    { name: 'Royal Feast', href: '#tasting-menu' },
    { name: 'Digital Menu', href: '#menu' },
    { name: 'Catering & Events', href: '#catering' },
    { name: 'Beverage Lounge', href: '#beverages' },
    { name: 'Locations', href: '#locations' },
    { name: 'Reviews', href: '#reviews' },
  ];

  return (
    <>
      {/* Top Banner Ticker with Specific Branch Numbers */}
      <div className="bg-obsidian-950/95 border-b border-gold-500/15 py-2 px-4 text-[11px] text-cream-200 tracking-wider">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 text-gold-400 font-semibold">
              <Sparkles className="w-3 h-3 text-gold-400" />
              100% Halal Certified • Malappuram & Valluvambram, Kerala
            </span>
            <span className="hidden md:inline text-white/20">•</span>
            <span className="hidden md:inline text-cream-200/80">
              AC Family Dining & Grand Wedding Catering Booking Open
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs">
            {/* Location Switcher */}
            <div className="relative">
              <button
                onClick={() => setLocationDropdownOpen(!locationDropdownOpen)}
                className="flex items-center gap-1.5 text-gold-300 hover:text-gold-200 transition-colors font-medium bg-obsidian-900/90 px-2.5 py-1 rounded-lg border border-gold-500/20"
              >
                <MapPin className="w-3.5 h-3.5 text-gold-400" />
                <span>{currentLocation.city}: {currentLocation.phone}</span>
                <ChevronDown className="w-3 h-3 text-gold-400" />
              </button>

              {locationDropdownOpen && (
                <div 
                  className="absolute right-0 mt-2 w-72 rounded-xl bg-obsidian-900 border border-gold-500/30 p-2.5 shadow-2xl z-50 backdrop-blur-xl"
                  onMouseLeave={() => setLocationDropdownOpen(false)}
                >
                  <div className="text-[10px] text-cream-300/50 uppercase tracking-widest px-2 py-1">
                    Select Branch Location
                  </div>
                  {LOCATIONS_DATA.map((loc) => (
                    <button
                      key={loc.id}
                      onClick={() => {
                        setCurrentLocation(loc);
                        setLocationDropdownOpen(false);
                      }}
                      className={`w-full text-left px-3 py-2.5 rounded-lg text-xs transition-all flex items-center justify-between mb-1 ${
                        loc.id === currentLocation.id
                          ? 'bg-gold-500/20 text-gold-300 font-semibold border border-gold-500/30'
                          : 'text-cream-200 hover:bg-white/5'
                      }`}
                    >
                      <div>
                        <div className="font-serif font-bold text-sm text-cream-100">{loc.name}</div>
                        <div className="text-[11px] text-gold-400 mt-0.5">📞 {loc.phone}, {loc.phoneAlt.slice(-2)}</div>
                        <div className="text-[10px] text-cream-300/60 truncate mt-0.5">{loc.address}</div>
                      </div>
                      {loc.id === currentLocation.id && (
                        <span className="w-2 h-2 rounded-full bg-gold-400 shrink-0 ml-2" />
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <a
              href={`tel:${currentLocation.phone.replace(/[^0-9+]/g, '')}`}
              className="flex items-center gap-1.5 text-gold-300 hover:text-gold-200 transition-colors font-semibold"
            >
              <Phone className="w-3.5 h-3.5 text-gold-400" />
              <span>Call: {currentLocation.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-500 ${
          isScrolled
            ? 'bg-obsidian-950/90 backdrop-blur-xl border-b border-gold-500/20 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.8)]'
            : 'bg-gradient-to-b from-obsidian-950/90 via-obsidian-950/60 to-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="group flex items-center gap-3">
            <div className="w-11 h-11 rounded-full border border-gold-500/50 flex items-center justify-center bg-gradient-to-br from-gold-500/30 via-obsidian-900 to-obsidian-950 group-hover:border-gold-400 transition-all shadow-[0_0_15px_rgba(212,175,55,0.2)]">
              <span className="font-serif text-xl font-bold text-gold-400 group-hover:scale-110 transition-transform">D</span>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-2xl sm:text-3xl font-bold tracking-wider text-gold-gradient uppercase leading-none">
                Delicia
              </span>
              <span className="text-[9px] uppercase tracking-[0.25em] text-cream-200/70 font-medium mt-0.5">
                Restaurant • Kerala
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs uppercase tracking-widest font-semibold text-cream-200/80 hover:text-gold-300 transition-all duration-300 relative group py-1"
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
              aria-label="View Food Order Cart"
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
              className="gold-btn px-4 sm:px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-lg"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Book Table</span>
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
          <div className="lg:hidden fixed inset-x-0 top-[100px] bg-obsidian-950/98 border-b border-gold-500/20 backdrop-blur-2xl px-6 py-6 transition-all z-50 max-h-[85vh] overflow-y-auto">
            <div className="flex flex-col gap-3">
              {/* Branch Selector on Mobile */}
              <div className="p-3 rounded-xl bg-obsidian-900 border border-gold-500/30 space-y-2 mb-2">
                <div className="text-[10px] text-gold-400 uppercase tracking-widest font-bold">Select Active Branch:</div>
                <div className="grid grid-cols-2 gap-2">
                  {LOCATIONS_DATA.map((loc) => (
                    <button
                      key={loc.id}
                      onClick={() => {
                        setCurrentLocation(loc);
                        setMobileMenuOpen(false);
                      }}
                      className={`p-2 rounded-lg text-xs font-semibold text-center ${
                        loc.id === currentLocation.id
                          ? 'bg-gold-500 text-obsidian-950'
                          : 'bg-obsidian-800 text-cream-200 border border-white/10'
                      }`}
                    >
                      {loc.city}
                    </button>
                  ))}
                </div>
                <div className="text-[11px] text-cream-200/90 text-center pt-1 font-mono">
                  📞 {currentLocation.phone} | {currentLocation.phoneAlt}
                </div>
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
                  className="w-full gold-btn py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  Instant Family Table Reservation
                </button>

                <a
                  href={`tel:${currentLocation.phone.replace(/[^0-9+]/g, '')}`}
                  className="w-full py-3.5 rounded-xl bg-obsidian-800 border border-gold-500/30 text-xs font-semibold text-gold-300 uppercase tracking-wider flex items-center justify-center gap-2 text-center"
                >
                  <Phone className="w-4 h-4 text-gold-400" />
                  Call {currentLocation.city} ({currentLocation.phone})
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
