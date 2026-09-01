import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        gold: {
          50: "#FAF7EE",
          100: "#F5ECD0",
          200: "#EBD8A3",
          300: "#E0C375",
          400: "#D6B04E",
          500: "#D4AF37", // Primary luxury gold
          600: "#B89222",
          700: "#8C6C11",
          800: "#60490B",
          900: "#382903",
        },
        obsidian: {
          950: "#060608",
          900: "#0B0B0F",
          800: "#13131A",
          700: "#1C1C24",
          600: "#272732",
          500: "#363644",
        },
        cream: {
          50: "#FCFAF6",
          100: "#F7F4EB",
          200: "#EDE7D5",
          300: "#DFD5B9",
        },
        burgundy: {
          900: "#34080D",
          800: "#500C14",
          700: "#70121D",
        },
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Playfair Display", "Georgia", "serif"],
        sans: ["var(--font-montserrat)", "Inter", "system-ui", "sans-serif"],
        display: ["var(--font-cinzel)", "Cinzel", "serif"],
      },
      animation: {
        'shimmer': 'shimmer 2.5s infinite linear',
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.4', filter: 'blur(20px)' },
          '50%': { opacity: '0.8', filter: 'blur(30px)' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
