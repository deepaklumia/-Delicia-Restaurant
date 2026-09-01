'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX, Sparkles } from 'lucide-react';

export const AudioAmbiance: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.3);
  const [showTooltip, setShowTooltip] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const masterGainRef = useRef<GainNode | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Soothing warm jazz / luxury dining ambient chord progression frequencies
  const chords = [
    [174.61, 220.00, 261.63, 329.63], // Fmaj7
    [196.00, 246.94, 293.66, 369.99], // Gmaj7
    [164.81, 207.65, 246.94, 311.13], // Em7
    [220.00, 261.63, 329.63, 392.00], // Am7
  ];

  const startAmbiance = () => {
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      const ctx = new AudioCtx();
      audioCtxRef.current = ctx;

      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(volume, ctx.currentTime);
      masterGain.connect(ctx.destination);
      masterGainRef.current = masterGain;

      let chordIndex = 0;

      const playChord = () => {
        if (!audioCtxRef.current || audioCtxRef.current.state === 'closed') return;
        const currentChord = chords[chordIndex % chords.length];
        chordIndex++;

        currentChord.forEach((freq, idx) => {
          const osc = ctx.createOscillator();
          const noteGain = ctx.createGain();
          const filter = ctx.createBiquadFilter();

          // Low-pass filter for smooth, warm Rhodes/mellow jazz tone
          filter.type = 'lowpass';
          filter.frequency.setValueAtTime(450 + idx * 80, ctx.currentTime);

          osc.type = 'sine';
          osc.frequency.setValueAtTime(freq, ctx.currentTime);

          // Gentle fade in and long slow decay
          const now = ctx.currentTime;
          noteGain.gain.setValueAtTime(0.001, now);
          noteGain.gain.linearRampToValueAtTime(0.045 / (idx + 1), now + 1.2);
          noteGain.gain.exponentialRampToValueAtTime(0.0001, now + 5.5);

          osc.connect(filter);
          filter.connect(noteGain);
          noteGain.connect(masterGain);

          osc.start(now + idx * 0.15);
          osc.stop(now + 6.0);
        });
      };

      playChord();
      intervalRef.current = setInterval(playChord, 5000);
      setIsPlaying(true);
    } catch (e) {
      console.error('Audio could not be initialized:', e);
    }
  };

  const stopAmbiance = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    if (audioCtxRef.current && audioCtxRef.current.state !== 'closed') {
      audioCtxRef.current.close();
      audioCtxRef.current = null;
    }
    setIsPlaying(false);
  };

  const toggleSound = () => {
    if (isPlaying) {
      stopAmbiance();
    } else {
      startAmbiance();
    }
  };

  useEffect(() => {
    if (masterGainRef.current && audioCtxRef.current) {
      masterGainRef.current.gain.setValueAtTime(volume, audioCtxRef.current.currentTime);
    }
  }, [volume]);

  useEffect(() => {
    return () => {
      stopAmbiance();
    };
  }, []);

  return (
    <div className="relative flex items-center gap-2">
      <button
        onClick={toggleSound}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        aria-label="Toggle Lounge Audio Ambiance"
        className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium tracking-wider transition-all duration-300 ${
          isPlaying
            ? 'bg-gold-500/20 text-gold-400 border border-gold-500/40 shadow-[0_0_15px_rgba(212,175,55,0.3)]'
            : 'bg-obsidian-800/80 text-cream-200/70 hover:text-gold-300 border border-white/10 hover:border-gold-500/30'
        }`}
      >
        {isPlaying ? (
          <>
            <Volume2 className="w-3.5 h-3.5 text-gold-400 animate-pulse" />
            <span className="hidden sm:inline">Ambiance: ON</span>
            <div className="flex items-center gap-0.5 ml-1">
              <span className="w-0.5 h-3 bg-gold-400 animate-pulse rounded-full" />
              <span className="w-0.5 h-2 bg-gold-400 animate-pulse delay-75 rounded-full" />
              <span className="w-0.5 h-3.5 bg-gold-400 animate-pulse delay-150 rounded-full" />
            </div>
          </>
        ) : (
          <>
            <VolumeX className="w-3.5 h-3.5 text-cream-200/60" />
            <span className="hidden sm:inline">Lounge Audio</span>
          </>
        )}
      </button>

      {isPlaying && (
        <input
          type="range"
          min="0"
          max="0.8"
          step="0.05"
          value={volume}
          onChange={(e) => setVolume(parseFloat(e.target.value))}
          className="hidden md:block w-16 h-1 bg-obsidian-700 rounded-lg appearance-none cursor-pointer accent-gold-500"
          title="Volume Control"
        />
      )}

      {showTooltip && !isPlaying && (
        <div className="absolute right-0 top-10 w-48 p-2 rounded-lg bg-obsidian-900/95 border border-gold-500/30 text-[11px] text-cream-100 shadow-xl backdrop-blur-md z-50 pointer-events-none">
          <div className="flex items-center gap-1.5 text-gold-400 font-medium mb-1">
            <Sparkles className="w-3 h-3" /> Dining Ambiance
          </div>
          Experience our synthesized jazz lounge soundscape while exploring.
        </div>
      )}
    </div>
  );
};
