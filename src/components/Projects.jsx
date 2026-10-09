// Projects.jsx
import { motion } from "framer-motion";
import { useState } from "react";

function Projects() {
  const [selectedImage, setSelectedImage] = useState(null);

  const projectsList = [
    { title: "Website Toko Sembako Bunda Vina", category: "React JS & Tailwind CSS", description: "Platform Landing Page Toko Sembako Bunda Vina.", image: "project1.png", period: "Proyek 01" },
    { title: "Web Donasi Kaum Dhuafa", category: "React & Tailwind CSS", description: "Web Bantuan untuk kaum dhuafa dari mahasiswa & mahasiswi universitas muhammadiyyah tangerang.", image: "project2.png", period: "Proyek 02" },
    { title: "Aplikasi Manajemen Tugas", category: "JavaScript & Tailwind", description: "Aplikasi produktivitas untuk mengorganisasi tugas harian dengan fitur drag-and-drop dan status pengerjaan.", image: "https://via.placeholder.com/800x600/171717/a3a3a3?text=Preview+Task+App", period: "Proyek 03" }
  ];

  const smoothTransition = { duration: 0.7, ease: [0.16, 1, 0.3, 1] };

  return (
    <section id="projects" className="py-24 px-8 md:px-16 lg:px-24 bg-black text-neutral-100 relative overflow-hidden z-10 border-t border-neutral-800">
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
            Portofolio
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold mt-4 text-white">Proyek <span className="text-neutral-400">Pilihan</span></h2>
          <p className="text-neutral-400 text-sm md:text-base mt-2 max-w-lg mx-auto font-light">
            Beberapa karya terbaik yang telah dikembangkan dengan standar kualitas tinggi.
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

          {projectsList.map((project, index) => (
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

              {/* Label Periode di Samping (Desktop) */}
              <div className="md:absolute md:-left-36 md:top-1 text-xs md:text-sm font-semibold text-neutral-300 bg-neutral-900 md:bg-transparent px-2.5 py-1 rounded-md inline-block mb-1 md:mb-0 border md:border-none border-neutral-800">
                {project.period}
              </div>

              {/* Konten Kartu Proyek */}
              <div className="bg-neutral-900 border border-neutral-800 hover:border-neutral-700 rounded-2xl overflow-hidden shadow-xl transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div 
                    className="overflow-hidden h-48 bg-neutral-950 relative group cursor-pointer"
                    onClick={() => setSelectedImage(project.image)}
                  >
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-xs font-semibold text-white tracking-wider">
                      Perbesar Gambar
                    </div>
                    <div className="absolute top-3 left-3 px-3 py-1 bg-black/80 backdrop-blur-md rounded-lg text-xs font-medium text-neutral-200 border border-neutral-700">
                      {project.category}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-neutral-400 text-sm leading-relaxed font-light">{project.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {selectedImage && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4" onClick={() => setSelectedImage(null)}>
          <div className="relative max-w-4xl w-full">
            <button className="absolute -top-10 right-0 text-white hover:text-neutral-400 font-semibold text-sm" onClick={() => setSelectedImage(null)}>
              Tutup [X]
            </button>
            <img src={selectedImage} alt="Preview Proyek" className="w-full h-auto rounded-xl border border-neutral-800 shadow-2xl bg-neutral-900" />
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;