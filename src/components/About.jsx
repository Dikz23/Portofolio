// About.jsx
import { motion } from "framer-motion";

function About() {
  const smoothTransition = { duration: 0.7, ease: [0.16, 1, 0.3, 1] };

  // Teks yang akan bergerak tanpa henti
  const marqueeText = "FRONTEND DEVELOPER • REACT JS • TAILWIND CSS • UI/UX DESIGNER • ";

  return (
    <section id="tentang-saya" className="py-20 px-8 md:px-16 lg:px-24 bg-stone-50 text-stone-900 relative overflow-hidden z-10">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={smoothTransition} 
          className="text-center mb-16"
        >
          <span className="px-3 py-1 bg-amber-100 border border-amber-900/20 rounded-full text-amber-900 text-xs font-semibold tracking-wider uppercase">
            Mengenal Lebih Jauh
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold mt-3 text-black">
            Tentang <span className="text-amber-800">Saya</span>
          </h2>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          
          {/* Deskripsi Teks */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ ...smoothTransition, delay: 0.1 }} 
            className="md:w-1/2 space-y-6 text-stone-700 leading-relaxed text-base md:text-lg text-center md:text-left"
          >
            <p>
              Halo! Saya <strong className="text-stone-900">Andika Septa Nugraha</strong>, seorang pengembang web yang sangat antusias dalam menciptakan antarmuka digital yang tidak hanya fungsional, tetapi juga memberikan pengalaman visual yang memukau.
            </p>
            <p>
              Saya memiliki ketertarikan yang besar pada ekosistem JavaScript, khususnya <strong className="text-stone-900">React JS</strong>, dan sangat menyukai kebebasan desain yang ditawarkan oleh <strong className="text-stone-900">Tailwind CSS</strong>.
            </p>
            <p>
              Di luar pemrograman, saya senang mempelajari tren UI/UX terbaru, bereksperimen dengan animasi web, dan terus mengasah keterampilan saya untuk memecahkan masalah kompleks menjadi solusi yang sederhana dan elegan.
            </p>
          </motion.div>

          {/* Bagian Foto Bergerak & Running Text */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ ...smoothTransition, delay: 0.2 }} 
            className="md:w-1/2 flex flex-col items-center justify-center"
          >
            <div className="relative group flex flex-col items-center">
              
              {/* Glow Ambient di Belakang Foto */}
              <div className="absolute inset-0 bg-amber-900/10 blur-3xl rounded-full scale-110 pointer-events-none"></div>
              
              {/* Foto Profil dengan Efek Bergerak (Floating) */}
              <motion.div 
                animate={{ 
                  y: [0, -12, 0],
                  rotate: [0, 1.5, 0, -1.5, 0] 
                }}
                transition={{ 
                  duration: 5, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                className="relative w-64 h-64 md:w-80 md:h-80 rounded-3xl overflow-hidden border-4 border-stone-200 shadow-xl z-10 bg-white"
              >
                <img 
                  src="foto-dika.jpeg" 
                  alt="Profil Andika" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
              </motion.div>
              
              {/* Elemen Dekorasi Belakang Foto */}
              <div className="absolute -bottom-2 -right-4 w-24 h-24 bg-white border border-stone-300 rounded-2xl -z-10 rotate-12 shadow-sm"></div>
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-amber-100/60 border border-amber-900/20 rounded-full -z-10"></div>

              {/* Teks Bergerak Kesamping Tanpa Henti (Infinite Running Marquee) */}
              <div className="w-64 md:w-80 overflow-hidden mt-6 bg-amber-100/80 border border-amber-900/20 py-2.5 rounded-full shadow-sm z-20">
                <motion.div
                  className="flex whitespace-nowrap text-xs font-bold text-amber-900 uppercase tracking-widest"
                  animate={{ x: ["0%", "-50%"] }}
                  transition={{ 
                    duration: 10, 
                    repeat: Infinity, 
                    ease: "linear" 
                  }}
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