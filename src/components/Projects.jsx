import { motion } from "framer-motion";
import { useState } from "react";

function Projects() {
  const [selectedImage, setSelectedImage] = useState(null);

  const projectsList = [
    { title: "Website Toko Sembako Bunda Vina", category: "React JS & Tailwind CSS", description: "Platrom LandingPage Toko Sembako Bunda Vina.", image: "project1.png" },
    { title: "Web Donasi Kaum Dhuafa", category: "React & Tailwind CSS", description: "Web Bantuan untuk kaum dhuafa dari mahasiswa & mahasiswi universias muhammadiyyah tangerang.", image: "project2.png" },
    { title: "Aplikasi Manajemen Tugas", category: "JavaScript & Tailwind", description: "Aplikasi produktivitas untuk mengorganisasi tugas harian dengan fitur drag-and-drop dan status pengerjaan.", image: "https://via.placeholder.com/800x600/f5f5f4/78350f?text=Preview+Task+App" }
  ];

  const smoothDrop = { duration: 0.7, ease: [0.16, 1, 0.3, 1] };

  return (
    <section id="projects" className="py-20 px-8 md:px-16 lg:px-24 bg-white text-stone-900 relative">
      <div className="max-w-6xl mx-auto">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={smoothDrop} 
          className="text-center mb-16"
        >
          <span className="px-3 py-1 bg-amber-100 border border-amber-900/20 rounded-full text-amber-900 text-xs font-semibold tracking-wider uppercase">
            Portofolio
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold mt-3 text-black">Proyek <span className="text-amber-800">Pilihan</span></h2>
          <p className="text-stone-600 mt-2 max-w-xl mx-auto text-sm md:text-base">
            Beberapa karya terbaik. Klik pada gambar proyek untuk melihat pratinjau ukuran penuh.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projectsList.map((project, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ ...smoothDrop, delay: index * 0.15 }} 
              whileHover={{ y: -5 }} 
              className="bg-stone-50 border border-stone-200 hover:border-amber-800/50 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div 
                  className="overflow-hidden h-48 bg-stone-200 relative group cursor-pointer"
                  onClick={() => setSelectedImage(project.image)}
                >
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-amber-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-xs font-semibold text-white tracking-wider">
                    Perbesar Gambar
                  </div>
                  <div className="absolute top-3 left-3 px-3 py-1 bg-white/90 backdrop-blur-md rounded-lg text-xs font-medium text-amber-900 border border-stone-200">
                    {project.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-black mb-2">{project.title}</h3>
                  <p className="text-stone-600 text-sm leading-relaxed mb-6">{project.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4" onClick={() => setSelectedImage(null)}>
          <div className="relative max-w-4xl w-full">
            <button className="absolute -top-10 right-0 text-white hover:text-amber-200 font-bold text-xl" onClick={() => setSelectedImage(null)}>
              Tutup
            </button>
            <img src={selectedImage} alt="Preview Proyek" className="w-full h-auto rounded-xl border border-stone-200 shadow-2xl" />
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;