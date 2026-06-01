"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const menuItems = [
  {
    name: 'V60 Pour Over',
    desc: 'Single origin Toraja, notes of dark chocolate, citrus, and brown sugar',
    price: 'Rp 45K',
    category: 'coffee',
    tag: 'Signature',
    img: 'https://image.qwenlm.ai/public_source/03440135-0924-4818-b53b-0115e59777d4/11474e396-0b02-43d5-a3fc-77fec5132844.png'
  },
  {
    name: 'Flat White',
    desc: 'Double ristretto dengan steamed milk yang silky dan microfoam sempurna',
    price: 'Rp 38K',
    category: 'coffee',
    tag: 'Bestseller',
    img: 'https://image.qwenlm.ai/public_source/03440135-0924-4818-b53b-0115e59777d4/1c426a282-1a08-4cd4-995b-029bd0de72d6.png'
  },
  {
    name: 'Cold Brew Tonic',
    desc: 'Cold brew 18 jam dicampur tonic water dan slice jeruk segar',
    price: 'Rp 42K',
    category: 'coffee',
    tag: 'New',
    img: 'https://image.qwenlm.ai/public_source/03440135-0924-4818-b53b-0115e59777d4/1fd4104a6-8345-4b6b-b388-b0dbfa92db98.png'
  },
  {
    name: 'Matcha Latte',
    desc: 'Premium ceremonial grade matcha dari Uji, Kyoto dengan oat milk',
    price: 'Rp 40K',
    category: 'noncoffee',
    tag: 'Popular',
    img: 'https://image.qwenlm.ai/public_source/03440135-0924-4818-b53b-0115e59777d4/179e57e87-a962-42e0-8710-ec0a9637c2ea.png'
  },
  {
    name: 'Croissant Almond',
    desc: 'Butter croissant renyah dengan taburan almond slice dan honey glaze',
    price: 'Rp 35K',
    category: 'food',
    tag: 'Fresh',
    img: 'https://image.qwenlm.ai/public_source/03440135-0924-4818-b53b-0115e59777d4/179e57e87-a962-42e0-8710-ec0a9637c2ea.png'
  },
  {
    name: 'AeroPress Gayo',
    desc: 'Single origin Gayo Aceh, bold body dengan notes of tobacco and caramel',
    price: 'Rp 48K',
    category: 'coffee',
    tag: 'Limited',
    img: 'https://image.qwenlm.ai/public_source/03440135-0924-4818-b53b-0115e59777d4/1c426a282-1a08-4cd4-995b-029bd0de72d6.png'
  }
];

export default function Section04_ServicesMenu() {
  const [filter, setFilter] = useState('all');

  const filteredMenu = filter === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === filter);

  return (
    <section id="menu" className="py-24 lg:py-40 px-6 sm:px-12 lg:px-20 relative bg-kofi-medium">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-20 gap-8 lg:gap-0">
        <div>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-3 text-[11px] tracking-[4px] uppercase text-kofi-gold mb-6"
          >
            <div className="w-10 h-px bg-kofi-gold" />
            Menu Kami
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-playfair text-4xl sm:text-5xl lg:text-[72px] font-bold leading-none"
          >
            Racikan <em className="text-kofi-gold font-normal italic">Terbaik</em>
          </motion.h2>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-wrap gap-2"
        >
          {['all', 'coffee', 'noncoffee', 'food'].map((tab) => (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              className={`px-7 py-3 border text-xs tracking-[2px] uppercase font-space transition-all duration-300 ${
                filter === tab 
                  ? 'bg-kofi-gold border-kofi-gold text-kofi-dark' 
                  : 'bg-transparent border-white/10 text-kofi-muted hover:bg-kofi-gold hover:border-kofi-gold hover:text-kofi-dark'
              }`}
            >
              {tab === 'all' ? 'Semua' : tab === 'coffee' ? 'Kopi' : tab === 'noncoffee' ? 'Non-Kopi' : 'Makanan'}
            </button>
          ))}
        </motion.div>
      </div>

      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <AnimatePresence>
          {filteredMenu.map((item) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              key={item.name}
              className="bg-kofi-card border border-white/5 overflow-hidden group hover:-translate-y-2 hover:border-kofi-gold/20 hover:shadow-[0_20px_60px_rgba(0,0,0,0.4)] transition-all duration-500 cursor-pointer"
            >
              <div className="relative w-full h-[280px] overflow-hidden">
                <img 
                  src={item.img} 
                  alt={item.name} 
                  className="w-full h-full object-cover saturate-80 group-hover:scale-110 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                />
                <div className="absolute top-4 left-4 px-3.5 py-1.5 bg-[#0a0604]/70 backdrop-blur-md text-[10px] tracking-[2px] uppercase text-kofi-gold border border-kofi-gold/20">
                  {item.tag}
                </div>
              </div>
              <div className="p-7">
                <h3 className="font-playfair text-[22px] font-bold mb-2">{item.name}</h3>
                <p className="text-[13px] leading-[1.7] text-kofi-muted mb-5 min-h-[44px]">{item.desc}</p>
                <div className="flex justify-between items-center">
                  <div className="font-space text-xl font-bold text-kofi-gold">{item.price}</div>
                  <button className="w-10 h-10 rounded-full border border-white/10 bg-transparent text-kofi-cream flex justify-center items-center text-lg transition-all duration-300 group-hover:bg-kofi-gold group-hover:border-kofi-gold group-hover:text-kofi-dark">
                    +
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
