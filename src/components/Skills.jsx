// Skills.jsx
import { useState } from "react";
import { motion } from "framer-motion";

function Skills() {
  const [clickedIndex, setClickedIndex] = useState(null);

  const skillsList = [
    { name: "HTML", percentage: 90, level: "Tingkat Lanjut" },
    { name: "CSS", percentage: 75, level: "Menengah" },
    { name: "JavaScript", percentage: 60, level: "Menengah" },
    { name: "React JS", percentage: 50, level: "Menengah" },
    { name: "Tailwind CSS", percentage: 40, level: "Dasar" },
    { name: "UI/UX Design", percentage: 83, level: "Tingkat Lanjut" },
  ];

  const handleCardClick = (index) => {
    setClickedIndex(null);
    setTimeout(() => setClickedIndex(index), 10);
  };

  return (
    <section id="keahlian" className="py-20 px-6 md:px-16 lg:px-24 bg-white text-stone-900 relative">
      <div className="max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="px-3 py-1 bg-amber-100 border border-amber-900/20 rounded-full text-amber-900 text-xs font-semibold tracking-wider uppercase">
            Kemampuan Teknis
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold mt-3 text-black">
            My Tech & <span className="text-amber-800">Keahlian</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {skillsList.map((skill, index) => {
            const isClicked = clickedIndex === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -6, scale: 1.02 }}
                whileTap={{ scale: 0.93, rotate: -1 }}
                onClick={() => handleCardClick(index)}
                className="p-6 rounded-2xl border bg-stone-50 border-stone-200 hover:border-stone-400 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between cursor-pointer select-none active:bg-stone-100"
              >
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-lg font-bold text-black">
                      {skill.name}
                    </h3>
                    <span className="text-xs font-medium text-stone-500 bg-stone-200/70 px-2.5 py-1 rounded-md">
                      {skill.level}
                    </span>
                  </div>

                  <div className="flex justify-between items-baseline my-3">
                    <span className="text-xs font-semibold text-stone-400 uppercase tracking-wider">
                      Penguasaan
                    </span>
                    <motion.span 
                      animate={isClicked ? { scale: [1, 1.35, 1], y: [0, -6, 0] } : {}}
                      transition={{ duration: 0.4, type: "spring", stiffness: 300 }}
                      className="text-2xl font-black text-stone-500"
                    >
                      {skill.percentage}%
                    </motion.span>
                  </div>
                </div>

                <div className="w-full bg-stone-200 rounded-full h-2.5 overflow-hidden mt-2 relative">
                  <motion.div
                    key={isClicked ? `active-${index}` : `idle-${index}`}
                    className="h-full rounded-full bg-amber-800"
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.percentage}%` }}
                    transition={{ 
                      duration: isClicked ? 0.7 : 1, 
                      delay: isClicked ? 0 : 0.2 + index * 0.1, 
                      ease: "easeOut" 
                    }}
                  />
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