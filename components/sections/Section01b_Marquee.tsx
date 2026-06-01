export default function Section01b_Marquee() {
  const items = [
    "Single Origin", "Hand Brewed", "Artisan Roast", 
    "Premium Beans", "Craft Coffee", "Ethical Sourcing"
  ];

  return (
    <div className="py-[60px] border-y border-white/5 overflow-hidden relative bg-kofi-dark">
      <div className="flex w-max animate-marquee">
        {/* First set */}
        <div className="flex items-center">
          {items.map((item, index) => (
            <div key={`m1-${index}`} className="flex items-center gap-10 px-10 whitespace-nowrap">
              <span className="font-playfair text-[clamp(32px,4vw,64px)] font-bold text-transparent bg-clip-text uppercase tracking-[4px]" style={{ WebkitTextStroke: '1px rgba(245,239,230,0.15)' }}>
                {item}
              </span>
              <div className="w-2 h-2 bg-kofi-gold rounded-full shrink-0" />
            </div>
          ))}
        </div>
        {/* Second set for infinite scroll */}
        <div className="flex items-center">
          {items.map((item, index) => (
            <div key={`m2-${index}`} className="flex items-center gap-10 px-10 whitespace-nowrap">
              <span className="font-playfair text-[clamp(32px,4vw,64px)] font-bold text-transparent bg-clip-text uppercase tracking-[4px]" style={{ WebkitTextStroke: '1px rgba(245,239,230,0.15)' }}>
                {item}
              </span>
              <div className="w-2 h-2 bg-kofi-gold rounded-full shrink-0" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
