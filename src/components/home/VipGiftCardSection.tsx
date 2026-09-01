'use client';

import React, { useState } from 'react';
import { Gift, Sparkles, CreditCard, Check } from 'lucide-react';

export const VipGiftCardSection: React.FC = () => {
  const [amount, setAmount] = useState<number>(2500);
  const [customAmount, setCustomAmount] = useState('');
  const [recipientName, setRecipientName] = useState('Mohammed Faisal & Family');
  const [senderName, setSenderName] = useState('Abdul Rahman');
  const [giftMessage, setGiftMessage] = useState('Enjoy a grand royal feast at Delicia Restaurant.');
  const [cardPurchased, setCardPurchased] = useState(false);

  const presetAmounts = [1000, 2500, 5000, 10000];

  const handleSelectAmount = (val: number) => {
    setAmount(val);
    setCustomAmount('');
  };

  const handleCustomAmountChange = (val: string) => {
    setCustomAmount(val);
    const num = parseInt(val, 10);
    if (!isNaN(num) && num > 0) {
      setAmount(num);
    }
  };

  const handleBuyCard = (e: React.FormEvent) => {
    e.preventDefault();
    setCardPurchased(true);
    setTimeout(() => setCardPurchased(false), 5000);
  };

  return (
    <section className="relative py-28 bg-gradient-to-b from-obsidian-950 via-obsidian-900 to-obsidian-950 overflow-hidden">
      {/* Background radial gold glow */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-gold-500/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs uppercase tracking-widest font-semibold">
            <Gift className="w-3.5 h-3.5" />
            The Gift of Royal Gastronomy
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-light text-cream-50 leading-tight">
            Delicia Royal <span className="font-normal italic text-gold-gradient">Dining Gift Cards</span>
          </h2>
          <p className="text-sm sm:text-base text-cream-200/75 font-light leading-relaxed">
            Surprise your beloved family, friends, or corporate colleagues with an authentic feast. Valid for dine-in, AC family cabins, and takeaway across both Malappuram & Valluvambram branches.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: 3D Interactive Card Preview */}
          <div className="lg:col-span-6 relative">
            <div className="mx-auto max-w-lg">
              {/* Floating 3D Gold Card */}
              <div className="relative aspect-[1.6/1] rounded-3xl p-8 bg-gradient-to-br from-gold-300 via-gold-500 to-gold-700 text-obsidian-950 shadow-[0_25px_60px_rgba(0,0,0,0.9),0_0_40px_rgba(212,175,55,0.4)] border border-white/40 flex flex-col justify-between overflow-hidden transform hover:scale-[1.02] transition-transform duration-500">
                {/* Gold Foil Pattern Overlay */}
                <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

                {/* Card Header */}
                <div className="flex items-center justify-between relative z-10">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full border border-obsidian-950 flex items-center justify-center font-serif font-bold text-sm">
                      D
                    </div>
                    <span className="font-serif text-xl font-bold tracking-wider uppercase">
                      Delicia
                    </span>
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] px-2.5 py-1 rounded-full bg-obsidian-950/15 border border-obsidian-950/30">
                    Royal Dining Pass
                  </span>
                </div>

                {/* Card Body / Recipient & Message */}
                <div className="space-y-1 relative z-10 my-auto">
                  <div className="text-[10px] uppercase tracking-wider opacity-70">Presented To</div>
                  <div className="font-serif text-2xl font-bold tracking-wide truncate">
                    {recipientName || 'Honored Guest'}
                  </div>
                  <div className="text-xs italic opacity-90 line-clamp-1">
                    &ldquo;{giftMessage || 'An extraordinary culinary gift.'}&rdquo;
                  </div>
                </div>

                {/* Card Footer: Amount and Chip */}
                <div className="flex items-end justify-between relative z-10 border-t border-obsidian-950/20 pt-4">
                  <div>
                    <div className="text-[9px] uppercase tracking-widest opacity-70">From: {senderName || 'Anonymous'}</div>
                    <div className="text-[10px] tracking-widest font-mono font-medium">CARD • • • • 7821</div>
                  </div>
                  <div className="font-serif text-3xl font-bold">
                    ₹{amount.toLocaleString('en-IN')} <span className="text-xs font-sans font-normal">INR</span>
                  </div>
                </div>
              </div>

              {/* Perks Checklist under card */}
              <div className="mt-6 flex items-center justify-around text-xs text-cream-300/70">
                <span className="flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5 text-gold-400" /> Never Expires
                </span>
                <span className="flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5 text-gold-400" /> Valid at Malappuram & Valluvambram
                </span>
                <span className="flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5 text-gold-400" /> WhatsApp Instant Pass
                </span>
              </div>
            </div>
          </div>

          {/* Right: Card Customization Studio */}
          <div className="lg:col-span-6 rounded-3xl glass-panel-gold p-8 sm:p-10 border border-gold-500/40 shadow-2xl">
            <h3 className="font-serif text-2xl font-bold text-cream-50 mb-2">
              Customize Your Digital Gift Card
            </h3>
            <p className="text-xs text-cream-200/70 mb-6">
              Personalize with the recipient&apos;s name and your warm family greeting.
            </p>

            {cardPurchased ? (
              <div className="p-8 rounded-2xl bg-emerald-950/70 border border-emerald-500/50 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="font-serif text-xl text-emerald-300 font-bold">
                  Gift Voucher Generated
                </h4>
                <p className="text-xs text-cream-100">
                  Your ₹{amount.toLocaleString('en-IN')} Delicia dining voucher for {recipientName} has been created. A digital voucher will be sent to your WhatsApp and email.
                </p>
              </div>
            ) : (
              <form onSubmit={handleBuyCard} className="space-y-4">
                {/* Denominations */}
                <div>
                  <label className="text-[11px] uppercase tracking-wider text-cream-300/60 block mb-2 font-semibold">
                    Select Gift Amount (₹ INR)
                  </label>
                  <div className="grid grid-cols-4 gap-2.5">
                    {presetAmounts.map((preset) => (
                      <button
                        type="button"
                        key={preset}
                        onClick={() => handleSelectAmount(preset)}
                        className={`py-2.5 rounded-xl font-serif text-sm font-bold transition-all ${
                          amount === preset && !customAmount
                            ? 'bg-gold-500 text-obsidian-950 shadow-lg'
                            : 'bg-obsidian-800 border border-white/10 text-cream-200 hover:border-gold-500/30'
                        }`}
                      >
                        ₹{preset}
                      </button>
                    ))}
                  </div>
                  <div className="mt-2">
                    <input
                      type="number"
                      value={customAmount}
                      onChange={(e) => handleCustomAmountChange(e.target.value)}
                      placeholder="Or enter custom amount in ₹ (e.g. 7500)..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-obsidian-900 border border-white/10 focus:border-gold-400 text-xs text-cream-100 placeholder-cream-300/30 focus:outline-none"
                    />
                  </div>
                </div>

                {/* Recipient and Sender Details */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-[11px] uppercase tracking-wider text-cream-300/60 block mb-1">
                      Recipient Name
                    </label>
                    <input
                      required
                      type="text"
                      value={recipientName}
                      onChange={(e) => setRecipientName(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-obsidian-900 border border-white/10 focus:border-gold-400 text-xs text-cream-100 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] uppercase tracking-wider text-cream-300/60 block mb-1">
                      Your Name
                    </label>
                    <input
                      required
                      type="text"
                      value={senderName}
                      onChange={(e) => setSenderName(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-obsidian-900 border border-white/10 focus:border-gold-400 text-xs text-cream-100 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[11px] uppercase tracking-wider text-cream-300/60 block mb-1">
                    Personal Greeting Note
                  </label>
                  <textarea
                    rows={2}
                    value={giftMessage}
                    onChange={(e) => setGiftMessage(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-obsidian-900 border border-white/10 focus:border-gold-400 text-xs text-cream-100 focus:outline-none resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full gold-btn py-4 rounded-xl text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 shadow-xl mt-2"
                >
                  <CreditCard className="w-4 h-4" />
                  Generate Gift Card (₹{amount.toLocaleString('en-IN')})
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
