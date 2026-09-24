// src/components/TechStackFlow.jsx
import { motion } from "framer-motion";

export default function TechStackFlow() {
  const scenicImagesRow1 = [
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1426604966848-d7adacbd02bff?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1511884642898-4c92249e20b6?auto=format&fit=crop&w=600&q=80",
  ];

  const scenicImagesRow2 = [
    "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&w=600&q=80",
  ];

  return (
    <section id="gallery" className="py-24 px-4 bg-stone-50 text-stone-900 overflow-hidden relative border-b border-stone-200">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="px-4 py-1.5 bg-stone-900 text-stone-100 rounded-full text-xs font-semibold tracking-wider uppercase shadow-sm"
        >
          Gallery
        </motion.span>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl md:text-5xl font-serif font-bold text-stone-900 mt-3 mb-4"
        >
        Hasil Potret Saya <span className="text-amber-800"></span>
        </motion.h2>
        <p className="text-stone-600 max-w-xl mx-auto text-sm md:text-base">
        </p>
      </div>

      {/* Baris Pertama: Bergerak ke Kiri */}
      <div className="w-full overflow-hidden mb-6 relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-stone-50 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-stone-50 to-transparent z-10 pointer-events-none" />
        
        <motion.div
          className="flex gap-6 whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        >
          {[...scenicImagesRow1, ...scenicImagesRow1].map((src, index) => (
            <div 
              key={index} 
              className="relative w-72 md:w-96 h-48 md:h-60 rounded-2xl overflow-hidden flex-shrink-0 border border-stone-200 bg-white shadow-lg group"
            >
              <img 
                src={src} 
                alt="Pemandangan Alam" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="text-xs text-stone-100 font-mono tracking-widest uppercase border-l-2 border-amber-600 pl-2">
                  Inspirasi Visual 0{index + 1}
                </span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Baris Kedua: Bergerak ke Kanan */}
      <div className="w-full overflow-hidden relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-stone-50 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-stone-50 to-transparent z-10 pointer-events-none" />
        
        <motion.div
          className="flex gap-6 whitespace-nowrap"
          animate={{ x: ["-50%", "0%"] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          {[...scenicImagesRow2, ...scenicImagesRow2].map((src, index) => (
            <div 
              key={index} 
              className="relative w-72 md:w-96 h-48 md:h-60 rounded-2xl overflow-hidden flex-shrink-0 border border-stone-200 bg-white shadow-lg group"
            >
              <img 
                src={src} 
                alt="Desain Pemandangan" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="text-xs text-stone-100 font-mono tracking-widest uppercase border-l-2 border-amber-600 pl-2">
                  Estetika Alam 0{index + 1}
                </span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}