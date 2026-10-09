// About.jsx
import { motion } from "framer-motion";

function About() {
  const smoothTransition = { duration: 0.7, ease: [0.16, 1, 0.3, 1] };
  const marqueeText = "FRONTEND DEVELOPER • REACT JS • TAILWIND CSS • UI/UX DESIGNER • ";

  const aboutRoadmap = [
    { year: "2023", title: "Mulai Eksplorasi Web Dasar" },
    { year: "2024", title: "Fokus pada Ekosistem React & UI/UX" },
    { year: "2025 - Sekarang", title: "Pengembangan Proyek Skala Penuh & Klien" }
  ];

  return (
    <section id="tentang-saya" className="py-24 px-8 md:px-16 lg:px-24 bg-neutral-950 text-neutral-100 relative overflow-hidden z-10 border-t border-neutral-800">
      <div className="max-w-6xl mx-auto">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={smoothTransition} 
          className="text-center mb-16"
        >
          <span className="px-3 py-1.5 bg-neutral-900 border border-neutral-800 rounded-full text-neutral-300 text-xs font-medium tracking-wider uppercase">
            Mengenal Lebih Jauh
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold mt-4 text-white">
            Tentang <span className="text-neutral-400">Saya</span>
          </h2>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ ...smoothTransition, delay: 0.1 }} 
            className="md:w-1/2 space-y-6 text-neutral-300 leading-relaxed text-base md:text-lg text-center md:text-left font-light"
          >
            <p>
              Halo! Saya <strong className="text-white font-semibold">Andika Septa Nugraha</strong>, seorang pengembang web yang sangat antusias dalam menciptakan antarmuka digital yang fungsional, bersih, dan memberikan pengalaman pengguna yang optimal.
            </p>
            <p>
              Saya memiliki ketertarikan yang besar pada ekosistem JavaScript, khususnya <strong className="text-white font-semibold">React JS</strong>, dan sangat menyukai presisi desain yang ditawarkan oleh <strong className="text-white font-semibold">Tailwind CSS</strong>.
            </p>

            {/* Roadmap Mini di dalam Tentang Saya */}
            <div className="pt-4 border-t border-neutral-800 mt-6 text-left">
              <h4 className="text-xs font-bold text-neutral-400 uppercase tracking-wider mb-4">Milestone Singkat</h4>
              <div className="relative pl-6 space-y-4">
                <div className="absolute left-0 top-1 bottom-1 w-0.5 bg-neutral-800"></div>
                <motion.div 
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1 }}
                  style={{ transformOrigin: "top" }}
                  className="absolute left-0 top-1 bottom-1 w-0.5 bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]"
                />
                {aboutRoadmap.map((step, idx) => (
                  <div key={idx} className="relative">
                    <div className="absolute -left-[27px] top-1 w-3 h-3 rounded-full bg-neutral-900 border-2 border-blue-500"></div>
                    <span className="text-xs font-mono text-blue-400 block">{step.year}</span>
                    <span className="text-sm font-medium text-white">{step.title}</span>
                  </div>
                ))}
              </div>
            </div>

          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ ...smoothTransition, delay: 0.2 }} 
            className="md:w-1/2 flex flex-col items-center justify-center"
          >
            <div className="relative group flex flex-col items-center">
              
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="relative w-64 h-64 md:w-80 md:h-80 rounded-3xl overflow-hidden border border-neutral-800 shadow-2xl z-10 bg-neutral-900"
              >
                <img src="foto-dika.jpeg" alt="Profil Andika" className="w-full h-full object-cover" />
              </motion.div>

              <div className="w-64 md:w-80 overflow-hidden mt-6 bg-neutral-900 border border-neutral-800 py-2.5 rounded-full shadow-inner z-20">
                <motion.div
                  className="flex whitespace-nowrap text-xs font-semibold text-neutral-400 uppercase tracking-widest"
                  animate={{ x: ["0%", "-50%"] }}
                  transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                >
                  <span>{marqueeText}</span>
                  <span>{marqueeText}</span>
                </motion.div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default About;