"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="pt-20 px-6 sm:px-12 lg:px-20 pb-10 border-t border-white/5 bg-kofi-dark text-kofi-muted">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-16 lg:gap-16 mb-20">
        
        {/* Brand */}
        <div>
          <div className="font-playfair text-3xl font-black tracking-[6px] text-kofi-cream mb-5">
            KÖFI
          </div>
          <p className="text-sm leading-[1.8] max-w-[320px] mb-6">
            Specialty coffee house yang menghadirkan pengalaman kopi terbaik dari biji pilihan petani lokal Indonesia.
          </p>
          <div className="flex gap-3">
            <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex justify-center items-center text-sm transition-all duration-300 hover:border-kofi-gold hover:text-kofi-gold hover:bg-kofi-gold/10" aria-label="Instagram">
              IG
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex justify-center items-center text-sm transition-all duration-300 hover:border-kofi-gold hover:text-kofi-gold hover:bg-kofi-gold/10" aria-label="Twitter">
              TW
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex justify-center items-center text-sm transition-all duration-300 hover:border-kofi-gold hover:text-kofi-gold hover:bg-kofi-gold/10" aria-label="Facebook">
              FB
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex justify-center items-center text-sm transition-all duration-300 hover:border-kofi-gold hover:text-kofi-gold hover:bg-kofi-gold/10" aria-label="TikTok">
              TK
            </a>
          </div>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="font-space text-xs tracking-[3px] uppercase text-kofi-cream mb-6">Navigasi</h4>
          <ul className="flex flex-col gap-3.5">
            <li><Link href="#about" className="text-sm transition-colors hover:text-kofi-gold">Tentang Kami</Link></li>
            <li><Link href="#menu" className="text-sm transition-colors hover:text-kofi-gold">Menu</Link></li>
            <li><Link href="#process" className="text-sm transition-colors hover:text-kofi-gold">Proses</Link></li>
            <li><Link href="#gallery" className="text-sm transition-colors hover:text-kofi-gold">Galeri</Link></li>
            <li><Link href="#contact" className="text-sm transition-colors hover:text-kofi-gold">Kontak</Link></li>
          </ul>
        </div>

        {/* Popular Menu */}
        <div>
          <h4 className="font-space text-xs tracking-[3px] uppercase text-kofi-cream mb-6">Menu Populer</h4>
          <ul className="flex flex-col gap-3.5">
            <li><Link href="#" className="text-sm transition-colors hover:text-kofi-gold">V60 Pour Over</Link></li>
            <li><Link href="#" className="text-sm transition-colors hover:text-kofi-gold">Flat White</Link></li>
            <li><Link href="#" className="text-sm transition-colors hover:text-kofi-gold">AeroPress</Link></li>
            <li><Link href="#" className="text-sm transition-colors hover:text-kofi-gold">Cold Brew</Link></li>
            <li><Link href="#" className="text-sm transition-colors hover:text-kofi-gold">Affogato</Link></li>
          </ul>
        </div>

        {/* Info */}
        <div>
          <h4 className="font-space text-xs tracking-[3px] uppercase text-kofi-cream mb-6">Informasi</h4>
          <ul className="flex flex-col gap-3.5">
            <li><Link href="#" className="text-sm transition-colors hover:text-kofi-gold">Karir</Link></li>
            <li><Link href="#" className="text-sm transition-colors hover:text-kofi-gold">Partnership</Link></li>
            <li><Link href="#" className="text-sm transition-colors hover:text-kofi-gold">FAQ</Link></li>
            <li><Link href="#" className="text-sm transition-colors hover:text-kofi-gold">Privacy Policy</Link></li>
            <li><Link href="#" className="text-sm transition-colors hover:text-kofi-gold">Terms of Service</Link></li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-center pt-10 border-t border-white/5 text-[13px] gap-3 text-center sm:text-left">
        <span>© {new Date().getFullYear()} KÖFI. All rights reserved.</span>
        <span>Crafted with ♥ & ☕</span>
      </div>
    </footer>
  );
}
