'use client';

import React, { useState } from 'react';
import { 
  X, 
  Calendar, 
  Clock, 
  Users, 
  MapPin, 
  Sparkles, 
  Check, 
  Wine, 
  ChevronRight, 
  ChevronLeft,
  Download,
  Share2,
  ShieldCheck
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { useCart } from '@/context/CartContext';
import { LOCATIONS_DATA } from '@/data/restaurantData';

export const ReservationModal: React.FC = () => {
  const { isReservationOpen, setIsReservationOpen, currentLocation, setCurrentLocation } = useCart();

  const [step, setStep] = useState(1);
  const [selectedLoc, setSelectedLoc] = useState(currentLocation.id);
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [timeSlot, setTimeSlot] = useState('19:30');
  const [guests, setGuests] = useState(2);
  const [seatingZone, setSeatingZone] = useState<'main-dining' | 'chef-counter' | 'wine-vault' | 'skyline-terrace'>('chef-counter');
  const [occasion, setOccasion] = useState('Romantic Anniversary');
  const [dietaryNotes, setDietaryNotes] = useState('');
  const [guestName, setGuestName] = useState('Alexander Sterling');
  const [email, setEmail] = useState('a.sterling@private.com');
  const [phone, setPhone] = useState('+1 (212) 555-0199');
  const [winePairingAddon, setWinePairingAddon] = useState(true);
  const [confirmedBookingRef, setConfirmedBookingRef] = useState<string | null>(null);

  if (!isReservationOpen) return null;

  const timeSlots = [
    { time: '17:30', status: 'Available' },
    { time: '18:15', status: '2 Tables Left' },
    { time: '19:00', status: 'Few Seats' },
    { time: '19:30', status: 'Prime Time' },
    { time: '20:15', status: 'Available' },
    { time: '21:00', status: 'Available' },
    { time: '21:45', status: 'Late Gastronomie' },
  ];

  const seatingZones = [
    {
      id: 'chef-counter',
      name: "Master Chef's Front Row Counter",
      description: 'Front-row view of Chef Antoine & culinary brigade. Live plating theater.',
      fee: '$0 (Included in Tasting)',
      icon: '🔥'
    },
    {
      id: 'main-dining',
      name: 'Grand Obsidian Dining Sanctuary',
      description: 'Lustrous crystal chandeliers, velvet banquet banquettes, and ambient jazz.',
      fee: 'Standard Experience',
      icon: '✨'
    },
    {
      id: 'wine-vault',
      name: 'Private Subterranean Grand Cru Vault',
      description: 'Ultra-exclusive private room surrounded by 3,400 rare vintage bottles.',
      fee: 'VIP Dedicated Sommelier Included',
      icon: '🍷'
    },
    {
      id: 'skyline-terrace',
      name: 'Glass-Enclosed Skyline Terrace',
      description: 'Panoramic skyline city vistas with heated ambient marble fire pits.',
      fee: 'Subject to Weather & Season',
      icon: '🌃'
    }
  ];

  const handleCompleteReservation = (e: React.FormEvent) => {
    e.preventDefault();
    const refCode = 'DLC-' + Math.floor(100000 + Math.random() * 900000);
    setConfirmedBookingRef(refCode);
    setStep(5);

    // Trigger luxury celebration confetti
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#D4AF37', '#FFF1C5', '#AA820A', '#F7F4EB']
      });
    } catch (err) {
      console.error(err);
    }
  };

  const handleClose = () => {
    setIsReservationOpen(false);
    setTimeout(() => {
      setStep(1);
      setConfirmedBookingRef(null);
    }, 400);
  };

  const activeLocInfo = LOCATIONS_DATA.find((l) => l.id === selectedLoc) || LOCATIONS_DATA[0];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-obsidian-950/85 backdrop-blur-xl animate-fade-in">
      <div 
        className="relative w-full max-w-2xl rounded-3xl glass-panel-gold p-6 sm:p-10 border border-gold-500/40 shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-obsidian-800/80 hover:bg-gold-500/20 text-cream-200 hover:text-gold-300 border border-white/10 transition-colors"
          aria-label="Close Reservation Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Step Progression Bar (if not finished) */}
        {step < 5 && (
          <div className="mb-8">
            <div className="flex items-center justify-between text-xs text-cream-300/60 uppercase tracking-widest font-semibold mb-3">
              <span>Step {step} of 4: {step === 1 ? 'Location' : step === 2 ? 'Date & Time' : step === 3 ? 'Seating Zone' : 'Guest Details'}</span>
              <span className="text-gold-400 font-serif">Table Reservation Suite</span>
            </div>
            <div className="w-full h-1.5 bg-obsidian-800 rounded-full overflow-hidden flex">
              <div
                className="h-full bg-gradient-to-r from-gold-400 to-gold-600 transition-all duration-500"
                style={{ width: `${(step / 4) * 100}%` }}
              />
            </div>
          </div>
        )}

        {/* STEP 1: Location Choice */}
        {step === 1 && (
          <div className="space-y-6">
            <div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-cream-50">
                Select Flagship Destination
              </h3>
              <p className="text-xs text-cream-200/70 mt-1">
                Choose your preferred Delicia culinary sanctuary.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {LOCATIONS_DATA.map((loc) => (
                <button
                  key={loc.id}
                  onClick={() => {
                    setSelectedLoc(loc.id);
                    setCurrentLocation(loc);
                  }}
                  className={`p-4 rounded-2xl text-left transition-all border flex flex-col justify-between ${
                    selectedLoc === loc.id
                      ? 'glass-panel-gold border-gold-400/60 shadow-lg scale-[1.02]'
                      : 'glass-panel border-white/5 hover:border-gold-500/30'
                  }`}
                >
                  <div className="space-y-1">
                    <div className="text-gold-400 text-xs font-serif font-bold">
                      {'⭐'.repeat(loc.michelinStars)} {loc.michelinStars} Stars
                    </div>
                    <div className="font-serif text-lg font-bold text-cream-100">
                      {loc.name}
                    </div>
                    <div className="text-xs text-cream-200/60 font-light truncate">
                      {loc.address}
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-cream-300/70">
                    <span>Chef {loc.headChef.split(' ')[1]}</span>
                    {selectedLoc === loc.id && (
                      <span className="text-gold-400 font-bold">Selected ✓</span>
                    )}
                  </div>
                </button>
              ))}
            </div>

            <div className="pt-4 flex justify-end">
              <button
                onClick={() => setStep(2)}
                className="gold-btn px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-widest flex items-center gap-2"
              >
                <span>Continue to Date & Time</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* STEP 2: Date, Time Slot & Guests */}
        {step === 2 && (
          <div className="space-y-6">
            <div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-cream-50">
                Date & Dining Time
              </h3>
              <p className="text-xs text-cream-200/70 mt-1">
                At <strong className="text-gold-300">{activeLocInfo.name}</strong>
              </p>
            </div>

            {/* Date and Guests Count Selector */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-[11px] uppercase tracking-wider text-cream-300/60 block mb-1.5 font-semibold">
                  Reservation Date
                </label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-obsidian-900 border border-white/10 focus:border-gold-400 text-xs text-cream-100 focus:outline-none"
                />
              </div>

              <div>
                <label className="text-[11px] uppercase tracking-wider text-cream-300/60 block mb-1.5 font-semibold">
                  Party Size
                </label>
                <select
                  value={guests}
                  onChange={(e) => setGuests(parseInt(e.target.value))}
                  className="w-full px-4 py-3 rounded-xl bg-obsidian-900 border border-white/10 focus:border-gold-400 text-xs text-cream-100 focus:outline-none"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8, 10, 12].map((num) => (
                    <option key={num} value={num} className="bg-obsidian-950">
                      {num} {num === 1 ? 'Guest' : 'Guests'} (Dining Seating)
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Time Slots */}
            <div>
              <label className="text-[11px] uppercase tracking-wider text-cream-300/60 block mb-2 font-semibold">
                Available Evening Time Slots
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {timeSlots.map((slot) => (
                  <button
                    key={slot.time}
                    type="button"
                    onClick={() => setTimeSlot(slot.time)}
                    className={`p-3 rounded-xl text-center transition-all border ${
                      timeSlot === slot.time
                        ? 'bg-gold-500 text-obsidian-950 font-bold border-gold-400 shadow-lg'
                        : 'bg-obsidian-900 border-white/10 text-cream-100 hover:border-gold-500/30'
                    }`}
                  >
                    <div className="font-serif text-base font-bold">{slot.time}</div>
                    <div className={`text-[9px] uppercase tracking-wider ${
                      timeSlot === slot.time ? 'text-obsidian-900/80 font-semibold' : 'text-cream-300/50'
                    }`}>
                      {slot.status}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-4 flex items-center justify-between">
              <button
                onClick={() => setStep(1)}
                className="px-6 py-3 rounded-full text-xs text-cream-300 hover:text-white uppercase tracking-wider flex items-center gap-1.5"
              >
                <ChevronLeft className="w-4 h-4" /> Back
              </button>
              <button
                onClick={() => setStep(3)}
                className="gold-btn px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-widest flex items-center gap-2"
              >
                <span>Select Seating Zone</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* STEP 3: Seating Zone Selection */}
        {step === 3 && (
          <div className="space-y-6">
            <div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-cream-50">
                Choose Your Ambiance & Seating
              </h3>
              <p className="text-xs text-cream-200/70 mt-1">
                Customize where you experience Chef Antoine&apos;s creations.
              </p>
            </div>

            <div className="space-y-3">
              {seatingZones.map((zone) => (
                <div
                  key={zone.id}
                  onClick={() => setSeatingZone(zone.id as any)}
                  className={`p-4 rounded-2xl cursor-pointer transition-all border flex items-center justify-between ${
                    seatingZone === zone.id
                      ? 'glass-panel-gold border-gold-400/60 shadow-xl'
                      : 'glass-panel border-white/5 hover:border-gold-500/30'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <span className="text-2xl mt-0.5">{zone.icon}</span>
                    <div className="space-y-0.5">
                      <div className="font-serif text-base font-bold text-cream-100">
                        {zone.name}
                      </div>
                      <div className="text-xs text-cream-200/70 font-light">
                        {zone.description}
                      </div>
                      <div className="text-[10px] text-gold-400/90 font-medium">
                        {zone.fee}
                      </div>
                    </div>
                  </div>

                  <div className="shrink-0 pl-3">
                    <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                      seatingZone === zone.id
                        ? 'border-gold-400 bg-gold-500 text-obsidian-950'
                        : 'border-white/20'
                    }`}>
                      {seatingZone === zone.id && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4 flex items-center justify-between">
              <button
                onClick={() => setStep(2)}
                className="px-6 py-3 rounded-full text-xs text-cream-300 hover:text-white uppercase tracking-wider flex items-center gap-1.5"
              >
                <ChevronLeft className="w-4 h-4" /> Back
              </button>
              <button
                onClick={() => setStep(4)}
                className="gold-btn px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-widest flex items-center gap-2"
              >
                <span>Guest Details</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* STEP 4: Guest Information & Special Requests */}
        {step === 4 && (
          <form onSubmit={handleCompleteReservation} className="space-y-6">
            <div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-cream-50">
                Patron & Celebration Details
              </h3>
              <p className="text-xs text-cream-200/70 mt-1">
                Ensure every nuance of your visit is flawlessly prepared.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div>
                <label className="text-[11px] uppercase tracking-wider text-cream-300/60 block mb-1">
                  Primary Guest Full Name
                </label>
                <input
                  required
                  type="text"
                  value={guestName}
                  onChange={(e) => setGuestName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-obsidian-900 border border-white/10 focus:border-gold-400 text-xs text-cream-100 focus:outline-none"
                />
              </div>

              <div>
                <label className="text-[11px] uppercase tracking-wider text-cream-300/60 block mb-1">
                  Email for Encrypted Confirmation
                </label>
                <input
                  required
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-obsidian-900 border border-white/10 focus:border-gold-400 text-xs text-cream-100 focus:outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div>
                <label className="text-[11px] uppercase tracking-wider text-cream-300/60 block mb-1">
                  Mobile (For Valet & SMS pass)
                </label>
                <input
                  required
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-obsidian-900 border border-white/10 focus:border-gold-400 text-xs text-cream-100 focus:outline-none"
                />
              </div>

              <div>
                <label className="text-[11px] uppercase tracking-wider text-cream-300/60 block mb-1">
                  Occasion Type
                </label>
                <select
                  value={occasion}
                  onChange={(e) => setOccasion(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-obsidian-900 border border-white/10 focus:border-gold-400 text-xs text-cream-100 focus:outline-none"
                >
                  <option value="Romantic Anniversary">Romantic Anniversary</option>
                  <option value="Birthday Celebration">Birthday Celebration</option>
                  <option value="Executive Business Dinner">Executive Business Dinner</option>
                  <option value="Marriage Proposal">Marriage Proposal</option>
                  <option value="Casual Fine Dining">Epicurean Exploration</option>
                </select>
              </div>
            </div>

            <div>
              <label className="text-[11px] uppercase tracking-wider text-cream-300/60 block mb-1">
                Dietary Restrictions / Allergies
              </label>
              <input
                type="text"
                value={dietaryNotes}
                onChange={(e) => setDietaryNotes(e.target.value)}
                placeholder="e.g. Gluten-Free for 1 guest, Shellfish allergy..."
                className="w-full px-3.5 py-2.5 rounded-xl bg-obsidian-900 border border-white/10 focus:border-gold-400 text-xs text-cream-100 placeholder-cream-300/30 focus:outline-none"
              />
            </div>

            {/* Sommelier Add-on Toggle */}
            <label className="flex items-center justify-between p-4 rounded-xl bg-burgundy-950/40 border border-gold-500/30 cursor-pointer">
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={winePairingAddon}
                  onChange={(e) => setWinePairingAddon(e.target.checked)}
                  className="w-4 h-4 rounded text-gold-500 accent-gold-500"
                />
                <div>
                  <div className="text-xs font-semibold text-cream-100 flex items-center gap-1.5">
                    <Wine className="w-3.5 h-3.5 text-gold-400" />
                    Pre-Authorize Sommelier Grand Cru Degustation Pairing
                  </div>
                  <div className="text-[11px] text-cream-300/60">Reserve rare bottle selections before arrival</div>
                </div>
              </div>
            </label>

            <div className="pt-4 flex items-center justify-between">
              <button
                type="button"
                onClick={() => setStep(3)}
                className="px-6 py-3 rounded-full text-xs text-cream-300 hover:text-white uppercase tracking-wider flex items-center gap-1.5"
              >
                <ChevronLeft className="w-4 h-4" /> Back
              </button>
              <button
                type="submit"
                className="gold-btn px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-widest flex items-center gap-2 shadow-xl"
              >
                <Check className="w-4 h-4" />
                Confirm Guaranteed Table
              </button>
            </div>
          </form>
        )}

        {/* STEP 5: Luxury Confirmation Pass */}
        {step === 5 && (
          <div className="space-y-6 text-center animate-scale-up">
            <div className="w-16 h-16 rounded-full bg-gold-500/20 border-2 border-gold-400 text-gold-400 flex items-center justify-center mx-auto shadow-[0_0_30px_rgba(212,175,55,0.3)]">
              <Sparkles className="w-8 h-8 animate-pulse" />
            </div>

            <div className="space-y-2">
              <span className="text-xs uppercase tracking-[0.25em] text-gold-400 font-bold">
                Reservation Confirmed
              </span>
              <h3 className="font-serif text-3xl font-bold text-cream-50">
                We Await Your Arrival, {guestName}
              </h3>
              <p className="text-xs text-cream-200/80 max-w-md mx-auto leading-relaxed">
                Your table at <strong className="text-gold-300">{activeLocInfo.name}</strong> is held exclusively for you.
              </p>
            </div>

            {/* Encrypted Digital Pass Card */}
            <div className="p-6 rounded-2xl bg-obsidian-950 border border-gold-500/40 text-left space-y-4 shadow-xl max-w-lg mx-auto">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-gold-500/20 text-gold-400 font-serif font-bold text-xs flex items-center justify-center">
                    D
                  </div>
                  <span className="font-serif text-sm font-bold text-cream-100 uppercase tracking-wider">
                    VIP Table Pass
                  </span>
                </div>
                <div className="font-mono text-xs font-bold text-gold-300">
                  {confirmedBookingRef}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 text-xs">
                <div>
                  <span className="text-cream-300/50 text-[10px] uppercase tracking-wider block">Date & Time</span>
                  <span className="text-cream-100 font-medium">{date} at {timeSlot}</span>
                </div>
                <div>
                  <span className="text-cream-300/50 text-[10px] uppercase tracking-wider block">Party Size</span>
                  <span className="text-cream-100 font-medium">{guests} Guests ({seatingZone})</span>
                </div>
                <div>
                  <span className="text-cream-300/50 text-[10px] uppercase tracking-wider block">Occasion</span>
                  <span className="text-gold-300 font-medium">{occasion}</span>
                </div>
                <div>
                  <span className="text-cream-300/50 text-[10px] uppercase tracking-wider block">Valet Check-in</span>
                  <span className="text-cream-100 font-medium">Included with Pass</span>
                </div>
              </div>

              <div className="pt-3 border-t border-white/10 text-[11px] text-cream-300/60 flex items-center justify-between">
                <span>Confirmation sent to {email}</span>
                <span className="text-gold-400 font-medium flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" /> Guaranteed Seating
                </span>
              </div>
            </div>

            {/* Pass Actions */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={handleClose}
                className="w-full sm:w-auto gold-btn px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-widest"
              >
                Return to Delicia
              </button>

              <button
                onClick={() => alert(`Table confirmation pass ${confirmedBookingRef} saved to Apple Wallet / Calendar.`)}
                className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-obsidian-800 border border-white/10 hover:border-gold-400 text-xs font-semibold uppercase tracking-wider text-cream-100 flex items-center justify-center gap-2 transition-colors"
              >
                <Download className="w-4 h-4 text-gold-400" />
                Add to Apple Wallet / Calendar
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
