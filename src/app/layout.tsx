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
  title: "Delicia Restaurant | Malappuram & Valluvambram | Royal Malabar & Indian Fine Dining",
  description:
    "Delicia Restaurant in Malappuram & Valluvambram, Kerala. Savor authentic Malabar Dum Biryani, Tandoori Charcoal platters, fresh seafood, and royal wedding catering. Call: Malappuram: 8593000014, 15 | Valluvambram: 8593000024, 34.",
  keywords: [
    "Delicia Restaurant Malappuram",
    "Delicia Valluvambram",
    "Best Biryani in Malappuram",
    "Halal Family Restaurant Kerala",
    "Malabar Wedding Catering",
    "Tandoori Restaurant Valluvambram",
    "Kanthari Al Faham Malappuram",
  ],
  authors: [{ name: "Delicia Restaurant Kerala" }],
  openGraph: {
    title: "Delicia Restaurant | Royal Malabar & Indian Gastronomy",
    description: "Authentic Dum Biryani, Tandoor & Wedding Catering in Malappuram & Valluvambram, Kerala.",
    url: "https://deliciarestaurant.in",
    siteName: "Delicia Restaurant",
    images: [
      {
        url: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=1200&q=85",
        width: 1200,
        height: 630,
        alt: "Delicia Restaurant Malabar Biryani & Tandoor",
      },
    ],
    locale: "en_IN",
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
