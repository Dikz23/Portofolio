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
      image: "certificate unpam2.jpeg",
    },
  ];

  return (
    <section id="sertifikat" className="py-24 px-6 md:px-16 lg:px-24 bg-neutral-950 text-neutral-100 relative border-t border-neutral-800">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="px-3 py-1.5 bg-neutral-900 border border-neutral-800 rounded-full text-neutral-300 text-xs font-medium tracking-wider uppercase">
            Pencapaian & Lisensi
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold mt-4 text-white">
            Sertifikat <span className="text-neutral-400">Saya</span>
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
              className="group cursor-pointer bg-neutral-900 border border-neutral-800 hover:border-neutral-700 rounded-2xl overflow-hidden shadow-xl transition-all duration-300 flex flex-col"
            >
              <div className="relative overflow-hidden aspect-[4/3] bg-neutral-950">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="px-4 py-2 bg-neutral-900 text-white text-xs font-semibold rounded-xl border border-neutral-700 shadow-md">
                    Lihat Foto Besar
                  </span>
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-medium text-neutral-400">{cert.issuer} • {cert.date}</span>
                  <h3 className="text-lg font-bold text-white mt-1">
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
            className="fixed inset-0 z-[120] bg-black/85 backdrop-blur-md flex items-center justify-center p-4 md:p-8 cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full bg-neutral-900 rounded-2xl overflow-hidden shadow-2xl border border-neutral-800 cursor-default"
            >
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-neutral-800 hover:bg-neutral-700 text-white rounded-full flex items-center justify-center transition-colors shadow-md"
              >
                ✕
              </button>

              <div className="max-h-[75vh] overflow-hidden flex items-center justify-center bg-black p-4">
                <img
                  src={selectedCert.image}
                  alt={selectedCert.title}
                  className="w-full h-full object-contain max-h-[70vh]"
                />
              </div>

              <div className="p-6 bg-neutral-900 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-neutral-800">
                <div>
                  <h3 className="text-xl font-bold text-white">{selectedCert.title}</h3>
                  <p className="text-sm text-neutral-400 mt-0.5 font-light">
                    Diterbitkan oleh: <span className="font-semibold text-neutral-200">{selectedCert.issuer}</span> ({selectedCert.date})
                  </p>
                </div>
                <button
                  onClick={() => setSelectedCert(null)}
                  className="px-5 py-2.5 bg-neutral-800 hover:bg-neutral-700 text-white text-sm font-semibold rounded-xl transition-colors self-start sm:self-auto border border-neutral-700"
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