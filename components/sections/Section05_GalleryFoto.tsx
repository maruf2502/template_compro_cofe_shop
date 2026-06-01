"use client";

import { motion } from "framer-motion";

const galleryItems = [
  { img: "https://image.qwenlm.ai/public_source/03440135-0924-4818-b53b-0115e59777d4/179e57e87-a962-42e0-8710-ec0a9637c2ea.png", label: "Interior Kami", colSpan: 2, rowSpan: 2 },
  { img: "https://image.qwenlm.ai/public_source/03440135-0924-4818-b53b-0115e59777d4/1c426a282-1a08-4cd4-995b-029bd0de72d6.png", label: "Latte Art", colSpan: 1, rowSpan: 1 },
  { img: "https://image.qwenlm.ai/public_source/03440135-0924-4818-b53b-0115e59777d4/1fd4104a6-8345-4b6b-b388-b0dbfa92db98.png", label: "Premium Beans", colSpan: 1, rowSpan: 1 },
  { img: "https://image.qwenlm.ai/public_source/03440135-0924-4818-b53b-0115e59777d4/11474e396-0b02-43d5-a3fc-77fec5132844.png", label: "Our Equipment", colSpan: 1, rowSpan: 1 },
];

export default function Section05_GalleryFoto() {
  return (
    <section id="gallery" className="relative bg-kofi-dark">
      <div className="pt-[120px] pb-[60px] px-12 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-3 text-[11px] tracking-[4px] uppercase text-kofi-gold justify-center mb-6"
        >
          <div className="w-10 h-px bg-kofi-gold" />
          Galeri
          <div className="w-10 h-px bg-kofi-gold" />
        </motion.div>

        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-playfair text-4xl sm:text-5xl lg:text-[56px] font-bold"
        >
          Momen di <em className="text-kofi-gold font-normal italic">KÖFI</em>
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:grid-rows-[300px_300px] gap-1">
        {galleryItems.map((item, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 + (index * 0.1) }}
            className="overflow-hidden relative cursor-pointer group"
            style={{ 
              gridColumn: `span ${item.colSpan > 1 ? item.colSpan : 1}`,
              gridRow: `span ${item.rowSpan > 1 ? item.rowSpan : 1}`
            }}
          >
            <img 
              src={item.img} 
              alt={item.label} 
              className="w-full h-full object-cover saturate-70 transition-all duration-600 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105 group-hover:saturate-100"
              style={{ minHeight: item.rowSpan === 1 ? '250px' : 'auto' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-kofi-dark/80 to-transparent opacity-0 transition-opacity duration-400 flex items-end p-6 group-hover:opacity-100">
              <span className="text-[13px] tracking-[2px] uppercase text-kofi-gold">
                {item.label}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
