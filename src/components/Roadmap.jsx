// src/components/Roadmap.jsx
import { motion } from "framer-motion";

function Roadmap() {
  const smoothTransition = { duration: 0.7, ease: [0.16, 1, 0.3, 1] };

  const educationRoadmap = [
    {
      period: "2023 - Sekarang",
      title: "Teknik Informatika (S1)",
      institution: "Universitas Pamulang",
      description: "Aktif mendalami pengembangan web, pemrograman berbasis objek, algoritma, serta struktur basis data.",
      status: "Sedang Berkuliah",
    },
    {
      period: "2020 - 2023",
      title: "Sekolah Menengah Atas / Kejuruan",
      institution: "Pendidikan Menengah",
      description: "Mempelajari dasar-dasar teknologi, logika pemrograman, serta aktif dalam eksplorasi komputer.",
      status: "Lulus",
    },
  ];

  return (
    <section id="roadmap" className="py-24 px-8 md:px-16 lg:px-24 bg-black text-neutral-100 relative overflow-hidden z-10 border-t border-neutral-800">
      <div className="max-w-4xl mx-auto">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={smoothTransition} 
          className="text-center mb-16"
        >
          <span className="px-3 py-1.5 bg-neutral-900 border border-neutral-800 rounded-full text-neutral-300 text-xs font-medium tracking-wider uppercase">
            Jejak Pendidikan
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold mt-4 text-white">
            Roadmap <span className="text-neutral-400">Pendidikan</span>
          </h2>
          <p className="text-neutral-400 text-sm md:text-base mt-2 max-w-lg mx-auto font-light">
            Perjalanan akademik dan institusi di mana saya menimba ilmu serta mengasah keterampilan teknologi.
          </p>
        </motion.div>

        <div className="relative ml-4 md:ml-32 space-y-12">
          
          <div className="absolute left-0 top-3 bottom-3 w-0.5 bg-neutral-800 -ml-[9px]"></div>

          {/* Garis alur gerak roadmap berwarna BIRU */}
          <motion.div 
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            style={{ transformOrigin: "top" }}
            className="absolute left-0 top-3 bottom-3 w-0.5 bg-blue-500 -ml-[9px] shadow-[0_0_12px_rgba(59,130,246,0.8)]"
          />

          {educationRoadmap.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -30 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true }} 
              transition={{ ...smoothTransition, delay: index * 0.2 }} 
              className="relative pl-8 md:pl-10 group"
            >
              <div className="absolute -left-[13px] top-1.5 w-5 h-5 rounded-full bg-neutral-900 border-4 border-white shadow-md flex items-center justify-center">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
              </div>

              <div className="md:absolute md:-left-36 md:top-1 text-xs md:text-sm font-semibold text-neutral-300 bg-neutral-900 md:bg-transparent px-2.5 py-1 rounded-md inline-block mb-1 md:mb-0 border md:border-none border-neutral-800">
                {item.period}
              </div>

              <div className="bg-neutral-900 border border-neutral-800 p-6 rounded-2xl shadow-lg relative transition-all duration-300 hover:border-neutral-700">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-medium px-2.5 py-1 bg-neutral-800 text-neutral-300 rounded-full border border-neutral-700">
                    {item.status}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white">{item.title}</h3>
                <h4 className="text-md font-medium text-neutral-400 mb-2">{item.institution}</h4>
                <p className="text-neutral-400 text-sm leading-relaxed font-light">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Roadmap;