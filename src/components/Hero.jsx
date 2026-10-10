// Hero.jsx
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

function Hero() {
  const words = ["Frontend Developer", "React JS Specialist", "UI/UX Enthusiast"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  // Daftar foto untuk slideshow otomatis / klik
  const images = [
    "foto-profil.jpg.jpeg",
    "foto-dika.jpeg",
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Otomatis ganti foto setiap 4 detik
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [images.length]);

  const bgGiantText = "FRONTEND DEVELOPER • REACT JS SPECIALIST • UI/UX DESIGNER • ";

  useEffect(() => {
    const fullText = words[currentWordIndex];
    const handleTyping = () => {
      if (!isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        if (currentText === fullText) {
          setTimeout(() => setIsDeleting(true), 1500);
          setTypingSpeed(100);
        }
      } else {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        if (currentText === "") {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
          setTypingSpeed(150);
        }
      }
    };
    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex, typingSpeed]);

  const smoothEntrance = { type: "spring", stiffness: 60, damping: 15, mass: 1 };

  return (
    <section id="hero" className="min-h-screen flex flex-col-reverse lg:flex-row justify-center items-center px-6 md:px-16 lg:px-24 bg-black text-neutral-100 relative overflow-hidden py-24 gap-12">
      
      {/* Teks Raksasa Latar Belakang (Warna Biru) */}
      <div className="absolute top-1/2 -translate-y-1/2 w-full overflow-hidden pointer-events-none z-0 select-none opacity-15">
        <motion.div
          className="flex whitespace-nowrap text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-blue-500 uppercase tracking-tight"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          <span>{bgGiantText}</span>
          <span>{bgGiantText}</span>
        </motion.div>
      </div>

      <motion.div 
        className="z-10 lg:w-1/2 text-center lg:text-left flex flex-col items-center lg:items-start" 
        initial={{ opacity: 0, x: -40 }} 
        animate={{ opacity: 1, x: 0 }} 
        transition={{ ...smoothEntrance, delay: 0.2 }}
      >
        <div className="px-4 py-1.5 bg-neutral-900 border border-neutral-800 rounded-full text-neutral-300 text-xs font-medium tracking-wider uppercase mb-6 shadow-sm">
          Selamat Datang di Portofolio Saya
        </div>
        
        {/* Nama dengan Kombinasi Warna Biru, Putih, dan Abu */}
        <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight mb-4">
          Halo, Saya <br/>
          <span className="text-blue-500">ANDIKA</span> <span className="text-white">SEPTA</span> <span className="text-neutral-400">NUGRAHA</span>
        </h2>

        {/* Logo Sosial Media di Bawah Nama */}
        <div className="flex items-center justify-center lg:justify-start gap-3 mb-6">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="p-2.5 bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 rounded-xl text-neutral-300 hover:text-white transition-all shadow-sm">
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="p-2.5 bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 rounded-xl text-neutral-300 hover:text-white transition-all shadow-sm">
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="p-2.5 bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 rounded-xl text-neutral-300 hover:text-white transition-all shadow-sm">
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
          </a>
        </div>

        <h3 className="text-xl md:text-2xl font-semibold text-neutral-400 h-10 mb-6">
          Saya seorang <span className="text-white underline decoration-neutral-500 underline-offset-8">{currentText}</span>
          <span className="animate-pulse text-neutral-400 font-normal">|</span>
        </h3>

        <p className="text-neutral-400 text-base md:text-lg max-w-xl mb-8 leading-relaxed font-light">
          Bersemangat membangun website modern, elegan, dan interaktif dengan performa tinggi menggunakan React dan Tailwind CSS.
        </p>
        
        <div className="flex flex-wrap justify-center lg:justify-start gap-4">
          <a href="#projects" className="px-8 py-3.5 bg-white hover:bg-neutral-200 text-black rounded-xl font-semibold transition-all duration-200 shadow-md text-sm tracking-wide">
            Lihat Karya Saya
          </a>
          <a href="#contact" className="px-8 py-3.5 bg-neutral-900 hover:bg-neutral-800 text-neutral-200 border border-neutral-800 rounded-xl font-semibold transition-all duration-200 text-sm tracking-wide">
            Hubungi Saya
          </a>
        </div>
      </motion.div>

      {/* Area Kanan: Foto Bulat Besar (Tanpa Frame Kotak) + Textbox di Sampingnya */}
      <motion.div 
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ ...smoothEntrance, delay: 0.4 }}
        className="z-10 lg:w-1/2 flex flex-col sm:flex-row items-center justify-center gap-6"
      >
        {/* Foto Besar Bulat (Bisa diklik untuk ganti) */}
        <div 
          onClick={() => setCurrentImageIndex((prev) => (prev + 1) % images.length)}
          className="relative w-64 h-64 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-neutral-800 shadow-[0_0_30px_rgba(59,130,246,0.3)] cursor-pointer group flex-shrink-0 bg-neutral-900"
          title="Klik untuk mengganti foto"
        >
          <AnimatePresence mode="wait">
            <motion.img 
              key={currentImageIndex}
              src={images[currentImageIndex]} 
              alt="Profil Andika" 
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5 }}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-xs font-semibold text-white tracking-widest backdrop-blur-[2px]">
            Ganti Foto 🔄
          </div>
        </div>

        {/* Textbox di Samping Foto */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-neutral-900/90 border border-neutral-800 p-5 rounded-2xl shadow-xl max-w-xs text-left backdrop-blur-md"
        >
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-pulse"></span>
            <h4 className="text-xs font-mono font-bold text-blue-400 uppercase tracking-widest">Status & Fokus</h4>
          </div>
          <p className="text-sm text-neutral-300 font-light leading-relaxed">
            "Fokus pada pengembangan antarmuka web modern, pengalaman pengguna yang intuitif, dan kode yang bersih."
          </p>
          <div className="mt-3 pt-3 border-t border-neutral-800 text-[11px] text-neutral-500 font-mono">
            Universitas Pamulang • S1 Teknik Informatika
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Hero;