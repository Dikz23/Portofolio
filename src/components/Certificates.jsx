// Certificates.jsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Certificates() {
  const [selectedCert, setSelectedCert] = useState(null);

  const certificatesList = [
    {
      id: 1,
      title: "Safer, Smarter and Scalable with Cloud AI",
      issuer: "Google Developer Group",
      date: "2025",
      image: "cerificate GDG.jpeg",
    },
    {
      id: 2,
      title: "Leadership, Creativity and Digital Personal Branding in the Era Artificial Intelligence",
      issuer: "Seminar Nasional Unpam",
      date: "2024",
      image: "certificate unpam.jpeg",
    },
    {
      id: 3,
      title: "Masa Depan Web Development",
      issuer: "Seminar Nasional Unpam",
      date: "2023",
      image: "]certificate unpam2.jpeg", // Menghapus karakter ']' di awal
    },
  ];

  return (
    <section id="sertifikat" className="py-20 px-6 md:px-16 lg:px-24 bg-white text-stone-900 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="px-3 py-1 bg-amber-100 border border-amber-900/20 rounded-full text-amber-900 text-xs font-semibold tracking-wider uppercase">
            Pencapaian & Lisensi
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold mt-3 text-black">
            Sertifikat <span className="text-amber-800">Saya</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificatesList.map((cert) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              onClick={() => setSelectedCert(cert)}
              className="group cursor-pointer bg-stone-50 border border-stone-200 hover:border-amber-900/40 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              <div className="relative overflow-hidden aspect-[4/3] bg-stone-200">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-stone-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                  <span className="px-4 py-2 bg-white/90 text-stone-900 text-xs font-bold rounded-xl shadow-md transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    Lihat Foto Besar 🔍
                  </span>
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-semibold text-amber-800">{cert.issuer} • {cert.date}</span>
                  <h3 className="text-lg font-bold text-black mt-1 group-hover:text-amber-900 transition-colors">
                    {cert.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
            className="fixed inset-0 z-[120] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 md:p-8 cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl border border-stone-200 cursor-default"
            >
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/60 hover:bg-black text-white rounded-full flex items-center justify-center transition-colors shadow-md"
                aria-label="Tutup"
              >
                ✕
              </button>

              <div className="max-h-[75vh] overflow-hidden flex items-center justify-center bg-stone-900">
                <img
                  src={selectedCert.image}
                  alt={selectedCert.title}
                  className="w-full h-full object-contain max-h-[75vh]"
                />
              </div>

              <div className="p-6 bg-white flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-stone-100">
                <div>
                  <h3 className="text-xl font-bold text-black">{selectedCert.title}</h3>
                  <p className="text-sm text-stone-600 mt-0.5">
                    Diterbitkan oleh: <span className="font-semibold text-amber-900">{selectedCert.issuer}</span> ({selectedCert.date})
                  </p>
                </div>
                <button
                  onClick={() => setSelectedCert(null)}
                  className="px-5 py-2.5 bg-stone-100 hover:bg-stone-200 text-stone-900 text-sm font-bold rounded-xl transition-colors self-start sm:self-auto"
                >
                  Tutup
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Certificates;