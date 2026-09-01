'use client';

import React, { useState } from 'react';
import { 
  Sparkles, 
  Users, 
  Check, 
  Crown, 
  Send, 
  FileText,
  ShieldCheck,
  Phone
} from 'lucide-react';
import { CATERING_PACKAGES, LOCATIONS_DATA } from '@/data/restaurantData';

export const CateringSection: React.FC = () => {
  const [selectedPackage, setSelectedPackage] = useState(CATERING_PACKAGES[0].id);
  const [guestCount, setGuestCount] = useState(250);
  const [includeLiveBiryaniPots, setIncludeLiveBiryaniPots] = useState(true);
  const [includeLiveAlFahamBar, setIncludeLiveAlFahamBar] = useState(true);
  const [includeDessertChaiLounge, setIncludeDessertChaiLounge] = useState(true);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    location: 'Malappuram',
    eventDate: '',
    notes: '',
  });

  const currentPkg = CATERING_PACKAGES.find((p) => p.id === selectedPackage) || CATERING_PACKAGES[0];

  // Pricing calculations in INR
  const basePricePerGuest = currentPkg.pricePerGuest;
  const biryaniAddon = includeLiveBiryaniPots ? 80 : 0;
  const alFahamAddon = includeLiveAlFahamBar ? 75 : 0;
  const dessertChaiAddon = includeDessertChaiLounge ? 45 : 0;

  const totalPerGuest = basePricePerGuest + biryaniAddon + alFahamAddon + dessertChaiAddon;
  const estimatedTotal = totalPerGuest * guestCount;

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', phone: '', location: 'Malappuram', eventDate: '', notes: '' });
    }, 5000);
  };

  return (
    <section id="catering" className="relative py-28 bg-gradient-to-b from-obsidian-950 via-obsidian-900 to-obsidian-950">
      {/* Background Ambience */}
      <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-gold-500/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs uppercase tracking-widest font-semibold">
            <Crown className="w-3.5 h-3.5" />
            Royal Wedding & Grand Event Catering
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-light text-cream-50 leading-tight">
            Grand Malabar Feasts for <span className="font-normal italic text-gold-gradient">Unforgettable Celebrations</span>
          </h2>
          <p className="text-sm sm:text-base text-cream-200/75 font-light leading-relaxed">
            From royal Nikah banquets and housewarmings to executive corporate summits, Delicia brings our master ustads, live tandoor brigade, and authentic dum biryani handis directly to your venue across Kerala.
          </p>
        </div>

        {/* Catering Packages Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {CATERING_PACKAGES.map((pkg) => (
            <div
              key={pkg.id}
              onClick={() => setSelectedPackage(pkg.id)}
              className={`rounded-3xl p-8 cursor-pointer transition-all duration-500 flex flex-col justify-between relative overflow-hidden border ${
                selectedPackage === pkg.id
                  ? 'glass-panel-gold border-gold-400/60 shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_30px_rgba(212,175,55,0.2)] -translate-y-2'
                  : 'glass-panel border-white/10 hover:border-gold-500/30'
              }`}
            >
              {pkg.popular && (
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-gold-500 text-obsidian-950 text-[10px] font-bold uppercase tracking-wider shadow-lg">
                  Most Popular
                </div>
              )}

              <div className="space-y-4">
                <div className="text-[11px] text-gold-400/90 uppercase tracking-widest font-semibold">
                  {pkg.type}
                </div>
                <h3 className="font-serif text-2xl font-bold text-cream-50">
                  {pkg.name}
                </h3>
                <p className="text-xs text-cream-200/70 leading-relaxed">
                  {pkg.description}
                </p>

                <div className="py-3 border-y border-white/10">
                  <span className="font-serif text-3xl font-bold text-gold-gradient">
                    ₹{pkg.pricePerGuest}
                  </span>
                  <span className="text-xs text-cream-300/70 ml-1">/ guest base</span>
                </div>

                <div className="space-y-2.5 pt-2">
                  <div className="text-[11px] uppercase tracking-wider text-cream-300/50 font-semibold">
                    Package Highlights:
                  </div>
                  {pkg.includes.map((inc, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-cream-200/90 leading-tight">
                      <Check className="w-3.5 h-3.5 text-gold-400 shrink-0 mt-0.5" />
                      <span>{inc}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-white/10">
                <button
                  className={`w-full py-3 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all ${
                    selectedPackage === pkg.id
                      ? 'gold-btn'
                      : 'bg-obsidian-800 border border-white/10 text-cream-200 hover:text-gold-300'
                  }`}
                >
                  {selectedPackage === pkg.id ? 'Selected Package' : 'Select Package'}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Real-Time Catering Calculator & Inquiry Suite */}
        <div className="rounded-3xl glass-panel-gold p-8 sm:p-12 border border-gold-500/40 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left: Calculator Controls */}
            <div className="lg:col-span-7 space-y-8">
              <div>
                <div className="inline-flex items-center gap-1.5 text-gold-400 text-xs uppercase tracking-widest font-semibold mb-2">
                  <Sparkles className="w-3.5 h-3.5" />
                  Live Event Cost Estimator
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-cream-50">
                  Plan Your Royal Catering Feast
                </h3>
                <p className="text-xs text-cream-200/70 mt-1">
                  Selected Menu: <strong className="text-gold-300">{currentPkg.name}</strong>
                </p>
              </div>

              {/* Guest Count Slider */}
              <div className="p-6 rounded-2xl bg-obsidian-950/70 border border-white/10 space-y-4">
                <div className="flex items-center justify-between">
                  <label className="text-xs uppercase tracking-wider text-cream-100 font-semibold flex items-center gap-2">
                    <Users className="w-4 h-4 text-gold-400" />
                    Expected Guest Count
                  </label>
                  <span className="font-serif text-2xl font-bold text-gold-400">
                    {guestCount} Guests
                  </span>
                </div>
                <input
                  type="range"
                  min="50"
                  max="2000"
                  step="25"
                  value={guestCount}
                  onChange={(e) => setGuestCount(parseInt(e.target.value))}
                  className="w-full h-2 bg-obsidian-800 rounded-lg appearance-none cursor-pointer accent-gold-500"
                />
                <div className="flex justify-between text-[11px] text-cream-300/50">
                  <span>50 Family</span>
                  <span>250 Reception</span>
                  <span>750 Grand Nikah</span>
                  <span>2,000+ Royal Gala</span>
                </div>
              </div>

              {/* Live Counter Enhancements */}
              <div className="space-y-3">
                <div className="text-xs uppercase tracking-wider text-cream-300/60 font-semibold">
                  Live Cooking Counter Add-ons
                </div>

                <label className="flex items-center justify-between p-4 rounded-xl bg-obsidian-950/60 border border-white/10 hover:border-gold-500/30 cursor-pointer transition-colors">
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={includeLiveBiryaniPots}
                      onChange={(e) => setIncludeLiveBiryaniPots(e.target.checked)}
                      className="w-4 h-4 rounded text-gold-500 accent-gold-500 cursor-pointer"
                    />
                    <div>
                      <div className="text-xs font-semibold text-cream-100">
                        Live Dum Biryani Handi Station with Table-side Carving
                      </div>
                      <div className="text-[11px] text-cream-300/60">Steaming hot Kaima Biryani served directly from sealed handis</div>
                    </div>
                  </div>
                  <span className="text-xs font-serif text-gold-300 font-bold">+₹80 / guest</span>
                </label>

                <label className="flex items-center justify-between p-4 rounded-xl bg-obsidian-950/60 border border-white/10 hover:border-gold-500/30 cursor-pointer transition-colors">
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={includeLiveAlFahamBar}
                      onChange={(e) => setIncludeLiveAlFahamBar(e.target.checked)}
                      className="w-4 h-4 rounded text-gold-500 accent-gold-500 cursor-pointer"
                    />
                    <div>
                      <div className="text-xs font-semibold text-cream-100">
                        Live Charcoal Kanthari Al Faham & Shawarma Grill Bar
                      </div>
                      <div className="text-[11px] text-cream-300/60">Chef-grilled on-site over natural coconut charcoal with dips & kuboos</div>
                    </div>
                  </div>
                  <span className="text-xs font-serif text-gold-300 font-bold">+₹75 / guest</span>
                </label>

                <label className="flex items-center justify-between p-4 rounded-xl bg-obsidian-950/60 border border-white/10 hover:border-gold-500/30 cursor-pointer transition-colors">
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={includeDessertChaiLounge}
                      onChange={(e) => setIncludeDessertChaiLounge(e.target.checked)}
                      className="w-4 h-4 rounded text-gold-500 accent-gold-500 cursor-pointer"
                    />
                    <div>
                      <div className="text-xs font-semibold text-cream-100">
                        Elaneer Payasam, Shahi Tukda & Kashmiri Saffron Qahwa Lounge
                      </div>
                      <div className="text-[11px] text-cream-300/60">Traditional live hot dessert counter and aromatic herbal tea service</div>
                    </div>
                  </div>
                  <span className="text-xs font-serif text-gold-300 font-bold">+₹45 / guest</span>
                </label>
              </div>

              {/* Estimate Summary Box in INR */}
              <div className="p-6 rounded-2xl bg-gradient-to-r from-obsidian-950 via-burgundy-950/30 to-obsidian-950 border border-gold-500/40 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <div className="text-[11px] uppercase tracking-widest text-cream-300/60">
                    Estimated Catering Budget
                  </div>
                  <div className="font-serif text-3xl sm:text-4xl font-bold text-gold-gradient">
                    ₹{estimatedTotal.toLocaleString('en-IN')}
                  </div>
                  <div className="text-[11px] text-cream-200/70 mt-0.5">
                    ₹{totalPerGuest} per guest for {guestCount} guests
                  </div>
                </div>

                <div className="text-[11px] text-cream-300/60 text-right space-y-1">
                  <div className="flex items-center gap-1 text-gold-400">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    100% Halal Guarantee
                  </div>
                  <div>Includes full service crew & setup</div>
                </div>
              </div>
            </div>

            {/* Right: Direct Event Producer Inquiry Form */}
            <div className="lg:col-span-5 p-6 sm:p-8 rounded-2xl bg-obsidian-950/90 border border-white/10 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-serif text-xl font-bold text-cream-50">
                    Catering Booking Request
                  </h4>
                  <FileText className="w-5 h-5 text-gold-400" />
                </div>
                <p className="text-xs text-cream-200/70 mb-6">
                  Our Malappuram / Valluvambram catering manager will call you within 1 hour with a customized menu and tasting session invitation.
                </p>

                {formSubmitted ? (
                  <div className="p-6 rounded-xl bg-emerald-950/60 border border-emerald-500/40 text-center space-y-2 my-8">
                    <div className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                      <Check className="w-5 h-5" />
                    </div>
                    <h5 className="font-serif text-lg text-emerald-300 font-bold">Request Received</h5>
                    <p className="text-xs text-cream-200/80">
                      Thank you. Our Catering Team will contact you shortly regarding your estimate of ₹{estimatedTotal.toLocaleString('en-IN')}.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleInquirySubmit} className="space-y-4">
                    <div>
                      <label className="text-[11px] uppercase tracking-wider text-cream-300/60 block mb-1">
                        Full Name / Family Name
                      </label>
                      <input
                        required
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Mohammed Faisal & Family"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-obsidian-900 border border-white/10 focus:border-gold-400 text-xs text-cream-100 placeholder-cream-300/30 focus:outline-none"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="text-[11px] uppercase tracking-wider text-cream-300/60 block mb-1">
                          Phone Number (WhatsApp)
                        </label>
                        <input
                          required
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+91 98470 00000"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-obsidian-900 border border-white/10 focus:border-gold-400 text-xs text-cream-100 placeholder-cream-300/30 focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="text-[11px] uppercase tracking-wider text-cream-300/60 block mb-1">
                          Preferred Branch
                        </label>
                        <select
                          value={formData.location}
                          onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-obsidian-900 border border-white/10 focus:border-gold-400 text-xs text-cream-100 focus:outline-none"
                        >
                          <option value="Malappuram">Malappuram Branch</option>
                          <option value="Valluvambram">Valluvambram Branch</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="text-[11px] uppercase tracking-wider text-cream-300/60 block mb-1">
                        Proposed Event Date
                      </label>
                      <input
                        required
                        type="date"
                        value={formData.eventDate}
                        onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-obsidian-900 border border-white/10 focus:border-gold-400 text-xs text-cream-100 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="text-[11px] uppercase tracking-wider text-cream-300/60 block mb-1">
                        Auditorium / Venue Details
                      </label>
                      <textarea
                        rows={3}
                        value={formData.notes}
                        onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                        placeholder="Mention your auditorium or venue location (e.g. Malappuram Town Hall, Manjeri, Calicut)..."
                        className="w-full px-3.5 py-2.5 rounded-xl bg-obsidian-900 border border-white/10 focus:border-gold-400 text-xs text-cream-100 placeholder-cream-300/30 focus:outline-none resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full gold-btn py-3.5 rounded-xl text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 shadow-lg"
                    >
                      <Send className="w-4 h-4" />
                      Request Catering Quote & Menu
                    </button>
                  </form>
                )}
              </div>

              <div className="pt-4 border-t border-white/10 space-y-1 text-center text-[11px] text-cream-200/80">
                <div>Direct Catering Hotlines:</div>
                <div className="text-gold-300 font-mono font-semibold">
                  Malappuram: <a href="tel:+918593000014" className="hover:underline">8593000014</a>, <a href="tel:+918593000015" className="hover:underline">15</a> | 
                  Valluvambram: <a href="tel:+918593000024" className="hover:underline">8593000024</a>, <a href="tel:+918593000034" className="hover:underline">34</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
