'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { 
  X, 
  Trash2, 
  Plus, 
  Minus, 
  ShoppingBag, 
  Sparkles, 
  Gift, 
  CreditCard, 
  Check, 
  Clock, 
  ShieldCheck,
  Tag
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { useCart } from '@/context/CartContext';

export const CartDrawer: React.FC = () => {
  const { cart, removeFromCart, updateQuantity, clearCart, cartTotal, isCartOpen, setIsCartOpen, currentLocation } = useCart();

  const [orderType, setOrderType] = useState<'delivery' | 'pickup'>('pickup');
  const [giftBox, setGiftBox] = useState(false);
  const [promoCode, setPromoCode] = useState('');
  const [discountApplied, setDiscountApplied] = useState(false);
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [checkoutComplete, setCheckoutComplete] = useState(false);

  if (!isCartOpen) return null;

  const giftBoxFee = giftBox ? 60 : 0;
  const deliveryFee = orderType === 'delivery' ? 40 : 0;
  const discountAmount = discountApplied ? cartTotal * 0.10 : 0;
  const subtotalAfterDiscount = Math.max(0, cartTotal - discountAmount);
  const finalTotal = subtotalAfterDiscount + giftBoxFee + deliveryFee;

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (promoCode.trim().toUpperCase() === 'DELICIA10' || promoCode.trim().toUpperCase() === 'MALABAR' || promoCode.trim().toUpperCase() === 'DELICIAVIP') {
      setDiscountApplied(true);
    } else {
      alert('Invalid coupon. Try "DELICIA10" for 10% discount.');
    }
  };

  const handleCheckout = () => {
    setIsCheckingOut(true);
    setTimeout(() => {
      setIsCheckingOut(false);
      setCheckoutComplete(true);
      clearCart();
      try {
        confetti({
          particleCount: 60,
          spread: 60,
          origin: { y: 0.7 },
          colors: ['#D4AF37', '#FFF1C5', '#F7F4EB']
        });
      } catch (err) {
        console.error(err);
      }
    }, 1500);
  };

  const handleClose = () => {
    setIsCartOpen(false);
    setTimeout(() => {
      setCheckoutComplete(false);
    }, 300);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-obsidian-950/80 backdrop-blur-md animate-fade-in flex justify-end">
      <div 
        className="relative w-full max-w-lg bg-obsidian-950 border-l border-gold-500/30 h-full flex flex-col justify-between shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drawer Header */}
        <div className="p-6 border-b border-white/10 flex items-center justify-between bg-obsidian-900/80 backdrop-blur-xl">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-gold-500/20 text-gold-400">
              <ShoppingBag className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif text-xl font-bold text-cream-50">
                Food Order Cart
              </h3>
              <p className="text-[11px] text-cream-300/60 font-light">
                {currentLocation.city} Branch ({currentLocation.phone})
              </p>
            </div>
          </div>

          <button
            onClick={handleClose}
            className="p-2 rounded-full bg-obsidian-800 hover:bg-gold-500/20 text-cream-200 hover:text-gold-300 border border-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {checkoutComplete ? (
            <div className="py-16 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-gold-500/20 border border-gold-400 text-gold-400 flex items-center justify-center mx-auto">
                <Check className="w-8 h-8" />
              </div>
              <h4 className="font-serif text-2xl font-bold text-cream-50">
                Order Placed Successfully!
              </h4>
              <p className="text-xs text-cream-200/80 max-w-sm mx-auto leading-relaxed">
                The {currentLocation.city} kitchen team is preparing your piping hot food. Our team will contact you on WhatsApp.
              </p>
              <div className="pt-4">
                <button
                  onClick={handleClose}
                  className="gold-btn px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest"
                >
                  Continue Browsing
                </button>
              </div>
            </div>
          ) : cart.length === 0 ? (
            <div className="py-20 text-center space-y-3">
              <ShoppingBag className="w-12 h-12 text-gold-400/40 mx-auto" />
              <h4 className="font-serif text-xl text-cream-100">Your Food Bag is Empty</h4>
              <p className="text-xs text-cream-300/60 max-w-xs mx-auto">
                Explore our Biryanis, Tandoori Platters, and Seafood to add your favorite items.
              </p>
              <button
                onClick={() => {
                  handleClose();
                  window.location.hash = '#menu';
                }}
                className="mt-3 px-6 py-2.5 rounded-full bg-gold-500/20 border border-gold-400/40 text-gold-300 text-xs font-semibold uppercase tracking-wider hover:bg-gold-500/30"
              >
                Browse Menu
              </button>
            </div>
          ) : (
            <>
              {/* Order Mode Toggle */}
              <div className="grid grid-cols-2 gap-2 p-1 rounded-2xl bg-obsidian-900 border border-white/10">
                <button
                  onClick={() => setOrderType('pickup')}
                  className={`py-2 rounded-xl text-xs font-semibold tracking-wider transition-all ${
                    orderType === 'pickup'
                      ? 'bg-gold-500 text-obsidian-950 shadow-md font-bold'
                      : 'text-cream-200 hover:text-white'
                  }`}
                >
                  Branch Takeaway (Free)
                </button>
                <button
                  onClick={() => setOrderType('delivery')}
                  className={`py-2 rounded-xl text-xs font-semibold tracking-wider transition-all ${
                    orderType === 'delivery'
                      ? 'bg-gold-500 text-obsidian-950 shadow-md font-bold'
                      : 'text-cream-200 hover:text-white'
                  }`}
                >
                  Home Delivery (+₹40)
                </button>
              </div>

              {/* Items List */}
              <div className="space-y-4">
                {cart.map((item) => (
                  <div
                    key={item.dish.id}
                    className="p-4 rounded-2xl glass-panel border border-white/10 flex items-center justify-between gap-4"
                  >
                    <div className="relative w-16 h-16 rounded-xl overflow-hidden shrink-0 border border-gold-500/30">
                      <Image
                        src={item.dish.image}
                        alt={item.dish.name}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div className="flex-1 min-w-0 space-y-1">
                      <h5 className="font-serif text-sm font-bold text-cream-100 truncate">
                        {item.dish.name}
                      </h5>
                      <div className="font-serif text-xs font-semibold text-gold-300">
                        ₹{item.dish.price} each
                      </div>
                    </div>

                    {/* Quantity Controls */}
                    <div className="flex items-center gap-2">
                      <div className="flex items-center bg-obsidian-900 rounded-lg border border-white/10">
                        <button
                          onClick={() => updateQuantity(item.dish.id, item.quantity - 1)}
                          className="p-1.5 text-cream-300 hover:text-white"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2 text-xs font-bold text-cream-100 font-mono">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.dish.id, item.quantity + 1)}
                          className="p-1.5 text-cream-300 hover:text-white"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <button
                        onClick={() => removeFromCart(item.dish.id)}
                        className="p-2 text-cream-300/40 hover:text-red-400 transition-colors"
                        aria-label="Remove item"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Thermal Box Packaging Option */}
              <label className="flex items-center justify-between p-4 rounded-xl bg-obsidian-900/80 border border-gold-500/30 cursor-pointer">
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={giftBox}
                    onChange={(e) => setGiftBox(e.target.checked)}
                    className="w-4 h-4 rounded text-gold-500 accent-gold-500"
                  />
                  <div>
                    <div className="text-xs font-semibold text-cream-100 flex items-center gap-1">
                      <Gift className="w-3.5 h-3.5 text-gold-400" />
                      Thermal Hot Seal Box Packaging
                    </div>
                    <div className="text-[10px] text-cream-300/60">Keeps Biryani & Tandoor piping hot for over 2 hours</div>
                  </div>
                </div>
                <span className="text-xs font-serif text-gold-300 font-bold">+₹60</span>
              </label>

              {/* Promo Code Input */}
              <form onSubmit={handleApplyPromo} className="flex gap-2">
                <div className="relative flex-1">
                  <Tag className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gold-400" />
                  <input
                    type="text"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    placeholder="Coupon code (e.g. DELICIA10)..."
                    className="w-full pl-9 pr-3 py-2 rounded-xl bg-obsidian-900 border border-white/10 text-xs text-cream-100 placeholder-cream-300/40 focus:outline-none focus:border-gold-400 uppercase font-mono"
                  />
                </div>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-xl bg-obsidian-800 border border-gold-500/40 text-xs font-semibold text-gold-300 uppercase tracking-wider hover:bg-gold-500/20"
                >
                  Apply
                </button>
              </form>

              {discountApplied && (
                <div className="text-xs text-emerald-400 flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5" /> 10% Discount Applied (-₹{discountAmount.toFixed(0)})
                </div>
              )}
            </>
          )}
        </div>

        {/* Drawer Footer & Checkout Action */}
        {cart.length > 0 && !checkoutComplete && (
          <div className="p-6 border-t border-white/10 bg-obsidian-900/90 backdrop-blur-xl space-y-4">
            <div className="space-y-1.5 text-xs text-cream-200/80">
              <div className="flex justify-between">
                <span>Items Subtotal</span>
                <span className="font-serif text-cream-100">₹{cartTotal.toFixed(0)}</span>
              </div>
              {discountApplied && (
                <div className="flex justify-between text-emerald-400">
                  <span>Special Discount (10%)</span>
                  <span>-₹{discountAmount.toFixed(0)}</span>
                </div>
              )}
              {giftBox && (
                <div className="flex justify-between">
                  <span>Thermal Hot Seal Box</span>
                  <span className="font-serif text-cream-100">₹60</span>
                </div>
              )}
              {orderType === 'delivery' && (
                <div className="flex justify-between">
                  <span>Delivery Charge</span>
                  <span className="font-serif text-cream-100">₹40</span>
                </div>
              )}
              <div className="flex justify-between text-sm font-bold text-cream-50 pt-2 border-t border-white/10">
                <span className="font-serif text-base">Grand Total</span>
                <span className="font-serif text-xl text-gold-gradient">₹{finalTotal.toFixed(0)}</span>
              </div>
            </div>

            <button
              onClick={handleCheckout}
              disabled={isCheckingOut}
              className="w-full gold-btn py-4 rounded-xl text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 shadow-xl"
            >
              {isCheckingOut ? (
                <>
                  <Sparkles className="w-4 h-4 animate-spin" />
                  Sending Order to {currentLocation.city}...
                </>
              ) : (
                <>
                  <CreditCard className="w-4 h-4" />
                  Confirm Order (₹{finalTotal.toFixed(0)})
                </>
              )}
            </button>

            <div className="flex items-center justify-center gap-4 text-[10px] text-cream-300/50">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3 h-3 text-gold-400" /> 100% Halal Certified
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3 text-gold-400" /> Freshly Prepared
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
