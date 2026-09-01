import type { Metadata, Viewport } from "next";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import { ParticlesCanvas } from "@/components/ui/ParticlesCanvas";
import { ReservationModal } from "@/components/modals/ReservationModal";
import { CartDrawer } from "@/components/modals/CartDrawer";
import { DishDetailModal } from "@/components/modals/DishDetailModal";

export const viewport: Viewport = {
  themeColor: "#09090C",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Delicia | 3-Star Michelin Haute Gastronomie & Fine Dining",
  description:
    "Experience the pinnacle of culinary artistry at Delicia Restaurant. Featuring A5 Miyazaki Wagyu, Tsar Imperial Caviar, and rare Grand Cru wine pairings by Master Chef Antoine Delicia.",
  keywords: [
    "Delicia Restaurant",
    "Michelin Star Fine Dining",
    "Haute Cuisine",
    "Tasting Menu Degustation",
    "Luxury Catering",
    "Sommelier Wine Cellar",
    "Private Dining Vault",
  ],
  authors: [{ name: "Delicia Restaurant Group" }],
  openGraph: {
    title: "Delicia | 3-Star Michelin Haute Gastronomie",
    description: "An extraordinary fine dining journey crafted by Master Chef Antoine Delicia.",
    url: "https://delicia-dining.com",
    siteName: "Delicia Restaurant",
    images: [
      {
        url: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=85",
        width: 1200,
        height: 630,
        alt: "Delicia Restaurant Signature Cuisine",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700;800&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,600&family=Montserrat:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased bg-obsidian-950 text-cream-100 selection:bg-gold-500 selection:text-obsidian-950 font-sans">
        <CartProvider>
          <ParticlesCanvas />
          {children}
          <ReservationModal />
          <CartDrawer />
          <DishDetailModal />
        </CartProvider>
      </body>
    </html>
  );
}
