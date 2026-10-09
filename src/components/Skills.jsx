// Skills.jsx
import { useState } from "react";
import { motion } from "framer-motion";

function Skills() {
  const [clickedIndex, setClickedIndex] = useState(null);

  const skillsList = [
    { name: "HTML", percentage: 90, level: "Tingkat Lanjut", period: "Fase 1" },
    { name: "CSS", percentage: 75, level: "Menengah", period: "Fase 2" },
    { name: "JavaScript", percentage: 60, level: "Menengah", period: "Fase 3" },
    { name: "React JS", percentage: 50, level: "Menengah", period: "Fase 4" },
    { name: "Tailwind CSS", percentage: 40, level: "Dasar", period: "Fase 5" },
    { name: "UI/UX Design", percentage: 83, level: "Tingkat Lanjut", period: "Fase 6" },
  ];

  const handleCardClick = (index) => {
    setClickedIndex(null);
    setTimeout(() => setClickedIndex(index), 10);
  };

  const smoothTransition = { duration: 0.7, ease: [0.16, 1, 0.3, 1] };

  return (
    <section id="keahlian" className="py-24 px-8 md:px-16 lg:px-24 bg-black text-neutral-100 relative overflow-hidden z-10 border-t border-neutral-800">
      <div className="max-w-4xl mx-auto">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={smoothTransition} 
          className="text-center mb-16"
        >
          <span className="px-3 py-1.5 bg-neutral-900 border border-neutral-800 rounded-full text-neutral-300 text-xs font-medium tracking-wider uppercase">
            Kemampuan Teknis
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold mt-4 text-white">
            My Tech & <span className="text-neutral-400">Keahlian</span>
          </h2>
          <p className="text-neutral-400 text-sm md:text-base mt-2 max-w-lg mx-auto font-light">
            Daftar teknologi dan tingkat penguasaan yang saya miliki dalam pengembangan web.
          </p>
        </motion.div>

        {/* Roadmap Container */}
        <div className="relative ml-4 md:ml-32 space-y-8">
          
          {/* Garis Dasar Timeline */}
          <div className="absolute left-0 top-3 bottom-3 w-0.5 bg-neutral-800 -ml-[9px]"></div>

          {/* Garis Alur Berjalan (Animated Blue Glow Line) */}
          <motion.div 
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            style={{ transformOrigin: "top" }}
            className="absolute left-0 top-3 bottom-3 w-0.5 bg-blue-500 -ml-[9px] shadow-[0_0_12px_rgba(59,130,246,0.8)]"
          />

          {skillsList.map((skill, index) => {
            const isClicked = clickedIndex === index;

            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -30 }} 
                whileInView={{ opacity: 1, x: 0 }} 
                viewport={{ once: true }} 
                transition={{ ...smoothTransition, delay: index * 0.15 }} 
                className="relative pl-8 md:pl-10 group"
              >
                {/* Titik / Bullet Timeline */}
                <div className="absolute -left-[13px] top-1.5 w-5 h-5 rounded-full bg-neutral-900 border-4 border-white shadow-md flex items-center justify-center">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                </div>

                {/* Label Waktu / Periode di Samping (Desktop) */}
                <div className="md:absolute md:-left-36 md:top-1 text-xs md:text-sm font-semibold text-neutral-300 bg-neutral-900 md:bg-transparent px-2.5 py-1 rounded-md inline-block mb-1 md:mb-0 border md:border-none border-neutral-800">
                  {skill.period}
                </div>

                {/* Konten Kartu Keahlian */}
                <div 
                  onClick={() => handleCardClick(index)}
                  className="bg-neutral-900 border border-neutral-800 hover:border-neutral-700 p-6 rounded-2xl shadow-xl transition-all duration-300 cursor-pointer select-none"
                >
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-xl font-bold text-white">
                      {skill.name}
                    </h3>
                    <span className="text-xs font-medium text-neutral-400 bg-neutral-950 border border-neutral-800 px-2.5 py-1 rounded-md">
                      {skill.level}
                    </span>
                  </div>

                  <div className="flex justify-between items-baseline my-3">
                    <span className="text-xs font-medium text-neutral-500 uppercase tracking-wider">
                      Penguasaan
                    </span>
                    <motion.span 
                      animate={isClicked ? { scale: [1, 1.35, 1], y: [0, -6, 0] } : {}}
                      transition={{ duration: 0.4, type: "spring", stiffness: 300 }}
                      className="text-2xl font-black text-emerald-400"
                    >
                      {skill.percentage}%
                    </motion.span>
                  </div>

                  <div className="w-full bg-neutral-950 border border-neutral-800 rounded-full h-2.5 overflow-hidden mt-2 relative">
                    <motion.div
                      key={isClicked ? `active-${index}` : `idle-${index}`}
                      className="h-full rounded-full bg-white"
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.percentage}%` }}
                      transition={{ 
                        duration: isClicked ? 0.7 : 1, 
                        delay: isClicked ? 0 : 0.2 + index * 0.1, 
                        ease: "easeOut" 
                      }}
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default Skills;