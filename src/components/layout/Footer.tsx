'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  Sparkles, 
  Send, 
  Check, 
  Clock, 
  Phone, 
  Mail, 
  MapPin, 
  Instagram, 
  Award,
  Globe
} from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { LOCATIONS_DATA } from '@/data/restaurantData';

export const Footer: React.FC = () => {
  const { setIsReservationOpen } = useCart();
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterJoined, setNewsletterJoined] = useState(false);
  const [times, setTimes] = useState({
    ny: '',
    la: '',
    london: '',
    tokyo: '',
  });

  useEffect(() => {
    const updateTimes = () => {
      const now = new Date();
      setTimes({
        ny: now.toLocaleTimeString('en-US', { timeZone: 'America/New_York', hour: '2-digit', minute: '2-digit' }),
        la: now.toLocaleTimeString('en-US', { timeZone: 'America/Los_Angeles', hour: '2-digit', minute: '2-digit' }),
        london: now.toLocaleTimeString('en-GB', { timeZone: 'Europe/London', hour: '2-digit', minute: '2-digit' }),
        tokyo: now.toLocaleTimeString('ja-JP', { timeZone: 'Asia/Tokyo', hour: '2-digit', minute: '2-digit' }),
      });
    };

    updateTimes();
    const interval = setInterval(updateTimes, 10000);
    return () => clearInterval(interval);
  }, []);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setNewsletterJoined(true);
      setTimeout(() => {
        setNewsletterJoined(false);
        setNewsletterEmail('');
      }, 5000);
    }
  };

  return (
    <footer className="bg-obsidian-950 text-cream-200 border-t border-gold-500/20 relative overflow-hidden">
      {/* Background Subtle Luxury Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-gold-500/5 rounded-full blur-[140px] pointer-events-none" />

      {/* Flagship Global Timezone Clocks Bar */}
      <div className="border-b border-white/5 py-4 px-4 sm:px-8 bg-obsidian-900/60">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-2 text-gold-400 font-medium">
            <Globe className="w-4 h-4 text-gold-400" />
            <span className="uppercase tracking-widest text-[10px]">Flagship Timezones</span>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-cream-200/75">
            <div className="flex items-center gap-1.5">
              <span className="text-gold-300 font-serif">New York:</span>
              <span className="font-mono text-cream-100">{times.ny || '12:00 PM'}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-gold-300 font-serif">Beverly Hills:</span>
              <span className="font-mono text-cream-100">{times.la || '09:00 AM'}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-gold-300 font-serif">London:</span>
              <span className="font-mono text-cream-100">{times.london || '05:00 PM'}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-gold-300 font-serif">Tokyo:</span>
              <span className="font-mono text-cream-100">{times.tokyo || '02:00 AM'}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full border border-gold-400 flex items-center justify-center bg-gradient-to-br from-gold-500/30 to-obsidian-950 shadow-[0_0_15px_rgba(212,175,55,0.2)]">
                <span className="font-serif text-lg font-bold text-gold-400">D</span>
              </div>
              <div>
                <span className="font-serif text-2xl font-bold tracking-wider text-gold-gradient uppercase block leading-none">
                  Delicia
                </span>
                <span className="text-[9px] uppercase tracking-[0.25em] text-cream-300/60 font-light mt-0.5 block">
                  Haute Gastronomie • Est. 1996
                </span>
              </div>
            </div>

            <p className="text-xs text-cream-200/70 font-light leading-relaxed max-w-sm">
              An institution of culinary theatre and rare terroir indulgence. Recognized with 3 Michelin Stars and the Wine Spectator Grand Award.
            </p>

            <div className="pt-2">
              <button
                onClick={() => setIsReservationOpen(true)}
                className="gold-btn px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg"
              >
                Reserve A Table Tonight
              </button>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-serif text-base font-bold text-cream-100 tracking-wide uppercase">
              The Experience
            </h4>
            <ul className="space-y-2.5 text-xs text-cream-200/70">
              <li><a href="#about" className="hover:text-gold-300 transition-colors">The Legacy</a></li>
              <li><a href="#signatures" className="hover:text-gold-300 transition-colors">Signature Dishes</a></li>
              <li><a href="#tasting-menu" className="hover:text-gold-300 transition-colors">7-Course Degustation</a></li>
              <li><a href="#menu" className="hover:text-gold-300 transition-colors">Digital Repertoire</a></li>
              <li><a href="#catering" className="hover:text-gold-300 transition-colors">Catering & Galas</a></li>
              <li><a href="#wine-cellar" className="hover:text-gold-300 transition-colors">Wine Spectator Cellar</a></li>
            </ul>
          </div>

          {/* Locations & Press */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-serif text-base font-bold text-cream-100 tracking-wide uppercase">
              Sanctuaries
            </h4>
            <ul className="space-y-2.5 text-xs text-cream-200/70">
              {LOCATIONS_DATA.map((loc) => (
                <li key={loc.id}>
                  <a href="#locations" className="hover:text-gold-300 transition-colors flex items-center justify-between">
                    <span>{loc.city}</span>
                    <span className="text-[10px] text-gold-400">{'⭐'.repeat(loc.michelinStars)}</span>
                  </a>
                </li>
              ))}
              <li className="pt-2 border-t border-white/5">
                <a href="#reviews" className="text-gold-400 hover:text-gold-300">Press & Accolades →</a>
              </li>
            </ul>
          </div>

          {/* VIP Newsletter & Privilege Club */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-serif text-base font-bold text-cream-100 tracking-wide uppercase">
              The Delicia Privilège Club
            </h4>
            <p className="text-xs text-cream-200/70 font-light leading-relaxed">
              Receive private invitations to seasonal menu previews, rare cellar allocation releases, and a $25 welcome degustation credit.
            </p>

            {newsletterJoined ? (
              <div className="p-4 rounded-xl bg-emerald-950/60 border border-emerald-500/40 text-xs text-emerald-300 flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400" />
                <span>Welcome to the Privilège Club. Your $25 invitation code is dispatched.</span>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="space-y-2">
                <div className="relative">
                  <input
                    required
                    type="email"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="Enter your email address..."
                    className="w-full pl-4 pr-12 py-3 rounded-xl bg-obsidian-900 border border-gold-500/30 text-xs text-cream-100 placeholder-cream-300/30 focus:outline-none focus:border-gold-400"
                  />
                  <button
                    type="submit"
                    className="absolute right-1.5 top-1/2 -translate-y-1/2 p-2 rounded-lg bg-gold-500 text-obsidian-950 hover:bg-gold-400 transition-colors"
                    aria-label="Subscribe"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
                <div className="text-[10px] text-cream-300/40">
                  Strictly confidential. No spam. Unsubscribe at any time.
                </div>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-cream-300/50">
          <div>
            © {new Date().getFullYear()} Delicia Restaurant Group International. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span className="hover:text-gold-300 cursor-pointer">Privacy Charter</span>
            <span className="hover:text-gold-300 cursor-pointer">Sustainability Code</span>
            <span className="hover:text-gold-300 cursor-pointer">Dress Code Policy</span>
            <span className="hover:text-gold-300 cursor-pointer">Press Inquiries</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
