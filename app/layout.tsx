import type { Metadata } from "next";
import { Inter, Playfair_Display, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Global effects
import CustomCursor from "@/components/effects/CustomCursor";
import GrainOverlay from "@/components/effects/GrainOverlay";
import Preloader from "@/components/effects/Preloader";
import FloatingBeans from "@/components/effects/FloatingBeans";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space" });

export const metadata: Metadata = {
  title: "KÖFI — Specialty Coffee House",
  description: "Seni Dalam Setiap Tegukan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body
        className={`${inter.variable} ${playfair.variable} ${spaceGrotesk.variable} antialiased bg-kofi-dark text-kofi-cream relative`}
      >
        <Preloader />
        <GrainOverlay />
        <CustomCursor />
        <FloatingBeans />
        
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
