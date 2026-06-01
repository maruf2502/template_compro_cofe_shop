"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Tentang", href: "#about" },
  { name: "Menu", href: "#menu" },
  { name: "Proses", href: "#process" },
  { name: "Galeri", href: "#gallery" },
  { name: "Kontak", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[1000] flex justify-between items-center transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] mix-blend-difference ${
          scrolled ? "py-4 px-6 md:px-12 bg-[#0a0604]/90 backdrop-blur-md mix-blend-normal" : "py-6 px-6 md:px-12 bg-transparent"
        }`}
      >
        <Link 
          href="/" 
          className={`font-playfair text-[28px] font-black tracking-[6px] no-underline transition-colors ${scrolled ? 'text-kofi-cream' : 'text-kofi-cream'}`}
        >
          KÖFI
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-9 list-none m-0 p-0">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className="text-kofi-cream no-underline text-[13px] font-medium tracking-[2px] uppercase relative pb-1 group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-px bg-kofi-gold-light transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:w-full" />
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <button
          className="md:hidden flex flex-col gap-1.5 bg-transparent border-none cursor-pointer z-[1001] w-7"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span className={`w-full h-[1.5px] bg-kofi-cream transition-all duration-300 origin-left ${isOpen ? 'rotate-45 translate-x-1 translate-y-1' : ''}`} />
          <span className={`w-full h-[1.5px] bg-kofi-cream transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
          <span className={`w-full h-[1.5px] bg-kofi-cream transition-all duration-300 origin-left ${isOpen ? '-rotate-45 translate-x-1 -translate-y-1' : ''}`} />
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 bg-kofi-dark z-[999] flex flex-col justify-center items-center gap-8 pointer-events-auto"
          >
            {navLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-kofi-cream no-underline font-playfair text-4xl font-bold"
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
