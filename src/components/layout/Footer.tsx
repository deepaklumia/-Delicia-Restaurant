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
  Globe
} from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { LOCATIONS_DATA } from '@/data/restaurantData';

export const Footer: React.FC = () => {
  const { setIsReservationOpen } = useCart();
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterJoined, setNewsletterJoined] = useState(false);
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString('en-IN', { timeZone: 'Asia/Kolkata', hour: '2-digit', minute: '2-digit', second: '2-digit' }));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
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

      {/* Local Kerala IST Time & Halal Banner Bar */}
      <div className="border-b border-white/5 py-3 px-4 sm:px-8 bg-obsidian-900/80">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-2 text-gold-400 font-medium">
            <Globe className="w-4 h-4 text-gold-400" />
            <span className="uppercase tracking-widest text-[10px]">Malappuram & Valluvambram, Kerala, India</span>
          </div>

          <div className="flex items-center gap-6 text-cream-200/90 font-mono">
            <div className="flex items-center gap-2">
              <Clock className="w-3.5 h-3.5 text-gold-400" />
              <span className="text-gold-300">IST Time:</span>
              <span className="text-cream-50 font-bold">{currentTime || 'Live Clock'}</span>
            </div>
            <span className="text-emerald-400 font-sans font-semibold">● 100% Halal Verified</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full border border-gold-400 flex items-center justify-center bg-gradient-to-br from-gold-500/30 to-obsidian-950 shadow-[0_0_15px_rgba(212,175,55,0.2)]">
                <span className="font-serif text-xl font-bold text-gold-400">D</span>
              </div>
              <div>
                <span className="font-serif text-2xl font-bold tracking-wider text-gold-gradient uppercase block leading-none">
                  Delicia
                </span>
                <span className="text-[9px] uppercase tracking-[0.25em] text-cream-300/70 font-medium mt-0.5 block">
                  Restaurant • Malappuram & Valluvambram
                </span>
              </div>
            </div>

            <p className="text-xs text-cream-200/70 font-light leading-relaxed max-w-sm">
              The landmark destination for royal Malabar Dum Biryanis, charcoal Tandoor platters, coastal seafood, and grand wedding catering across Kerala.
            </p>

            <div className="pt-2">
              <button
                onClick={() => setIsReservationOpen(true)}
                className="gold-btn px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg"
              >
                Book Family Table Tonight
              </button>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-serif text-base font-bold text-cream-100 tracking-wide uppercase">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs text-cream-200/70">
              <li><a href="#about" className="hover:text-gold-300 transition-colors">Our Legacy</a></li>
              <li><a href="#signatures" className="hover:text-gold-300 transition-colors">Signature Dishes</a></li>
              <li><a href="#tasting-menu" className="hover:text-gold-300 transition-colors">Royal Dastarkhwan</a></li>
              <li><a href="#menu" className="hover:text-gold-300 transition-colors">Full Digital Menu</a></li>
              <li><a href="#catering" className="hover:text-gold-300 transition-colors">Wedding Catering</a></li>
              <li><a href="#beverages" className="hover:text-gold-300 transition-colors">Qahwa & Sharbath</a></li>
            </ul>
          </div>

          {/* Two Specific Flagship Branches */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-serif text-base font-bold text-cream-100 tracking-wide uppercase">
              Our Branches & Contact
            </h4>
            <div className="space-y-4 text-xs text-cream-200/85">
              {/* Malappuram */}
              <div className="p-3 rounded-xl bg-obsidian-900 border border-gold-500/20 space-y-1">
                <div className="font-serif font-bold text-gold-300 text-sm flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-gold-400" /> Malappuram Branch
                </div>
                <div className="text-[11px] text-cream-300/70">Near Civil Station, Calicut Road</div>
                <div className="font-mono text-cream-100 font-bold pt-1">
                  📞 <a href="tel:+918593000014" className="hover:text-gold-300">8593000014</a>, <a href="tel:+918593000015" className="hover:text-gold-300">8593000015</a>
                </div>
              </div>

              {/* Valluvambram */}
              <div className="p-3 rounded-xl bg-obsidian-900 border border-gold-500/20 space-y-1">
                <div className="font-serif font-bold text-gold-300 text-sm flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-gold-400" /> Valluvambram Branch
                </div>
                <div className="text-[11px] text-cream-300/70">Bypass Junction, Calicut - Manjeri Highway</div>
                <div className="font-mono text-cream-100 font-bold pt-1">
                  📞 <a href="tel:+918593000024" className="hover:text-gold-300">8593000024</a>, <a href="tel:+918593000034" className="hover:text-gold-300">8593000034</a>
                </div>
              </div>
            </div>
          </div>

          {/* VIP Family Club & Offers */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-serif text-base font-bold text-cream-100 tracking-wide uppercase">
              Family Club & Offers
            </h4>
            <p className="text-xs text-cream-200/70 font-light leading-relaxed">
              Subscribe for weekend special Biryani announcements, catering offers, and festive discounts.
            </p>

            {newsletterJoined ? (
              <div className="p-3.5 rounded-xl bg-emerald-950/60 border border-emerald-500/40 text-xs text-emerald-300 flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Thank you! You are registered for Delicia Family updates.</span>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="space-y-2">
                <div className="relative">
                  <input
                    required
                    type="email"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="Enter WhatsApp/Email ID..."
                    className="w-full pl-3.5 pr-10 py-2.5 rounded-xl bg-obsidian-900 border border-gold-500/30 text-xs text-cream-100 placeholder-cream-300/30 focus:outline-none focus:border-gold-400"
                  />
                  <button
                    type="submit"
                    className="absolute right-1 top-1/2 -translate-y-1/2 p-2 rounded-lg bg-gold-500 text-obsidian-950 hover:bg-gold-400 transition-colors"
                    aria-label="Subscribe"
                  >
                    <Send className="w-3 h-3" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-cream-300/60">
          <div>
            © {new Date().getFullYear()} Delicia Restaurant (Malappuram & Valluvambram, Kerala). All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span>100% Halal Food</span>
            <span>AC Family Cabins</span>
            <span>Wedding Catering</span>
            <span>Takeaway Available</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
