// Hero.jsx
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

function Hero() {
  const words = ["Frontend Developer", "React JS Specialist", "UI/UX Enthusiast"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

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
    <section id="hero" className="min-h-[calc(100vh-80px)] flex flex-col-reverse md:flex-row justify-center items-center px-6 md:px-16 lg:px-24 bg-white text-stone-900 relative overflow-hidden py-16 gap-12">
      
      {/* Teks Raksasa Bergerak di Background */}
      <div className="absolute top-1/2 -translate-y-1/2 w-full overflow-hidden pointer-events-none z-0 select-none">
        <motion.div
          className="flex whitespace-nowrap text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-amber-900/10 uppercase tracking-tight"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        >
          <span>{bgGiantText}</span>
          <span>{bgGiantText}</span>
        </motion.div>
      </div>

      {/* Glow Ambient Cokelat */}
      <motion.div
        className="absolute w-40 h-40 bg-amber-900/10 rounded-full blur-3xl z-0 pointer-events-none"
        animate={{ x: ["-20vw", "30vw", "-10vw", "20vw", "-20vw"], y: ["-10vh", "30vh", "10vh", "-20vh", "-10vh"], scale: [1, 1.4, 0.9, 1.2, 1] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Konten Utama Kiri */}
      <motion.div 
        className="z-10 md:w-1/2 text-center md:text-left flex flex-col items-center md:items-start" 
        initial={{ opacity: 0, x: -50 }} 
        animate={{ opacity: 1, x: 0 }} 
        transition={{ ...smoothEntrance, delay: 0.2 }}
      >
        {/* Badge Selamat Datang */}
        <div className="px-4 py-1.5 bg-amber-100/80 border border-amber-900/20 rounded-full text-amber-900 text-xs font-semibold tracking-wider uppercase mb-4 shadow-sm backdrop-blur-sm">
          Selamat Datang di Portofolio Saya
        </div>
        
        {/* Nama Utama */}
        <h2 className="text-4xl md:text-6xl font-black text-black tracking-tight leading-none mb-4">
          Halo, Saya <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-stone-900 via-amber-900 to-amber-700">
            ANDIKA SEPTA NUGRAHA
          </span>
        </h2>

        <h3 className="text-xl md:text-2xl font-bold text-amber-900 h-10 mb-6">
          Saya seorang <span className="text-black underline decoration-amber-800 underline-offset-8">{currentText}</span>
          <span className="animate-pulse text-amber-800 font-normal">|</span>
        </h3>

        <p className="text-stone-600 text-base md:text-lg max-w-xl mb-8 leading-relaxed">
          Bersemangat membangun website modern, elegan, dan interaktif dengan performa tinggi menggunakan React dan Tailwind CSS.
        </p>
        
        {/* Tombol Aksi */}
        <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-6">
          <a href="#projects" className="px-8 py-3.5 bg-amber-900 hover:bg-amber-800 text-white rounded-xl font-bold transition-all duration-300 shadow-md text-sm tracking-wide">
            Lihat Karya Saya
          </a>
          <a href="#contact" className="px-8 py-3.5 bg-stone-100 hover:bg-stone-200 text-stone-900 border border-stone-300 rounded-xl font-bold transition-all duration-300 text-sm tracking-wide">
            Hubungi Saya
          </a>
        </div>

        {/* Tautan Sosial Media */}
        <div className="flex items-center justify-center md:justify-start gap-3">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="p-2.5 bg-stone-100 hover:bg-amber-100/80 border border-stone-200 hover:border-amber-900/30 rounded-xl text-stone-700 hover:text-amber-900 transition-all shadow-sm hover:-translate-y-1">
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="p-2.5 bg-stone-100 hover:bg-amber-100/80 border border-stone-200 hover:border-amber-900/30 rounded-xl text-stone-700 hover:text-amber-900 transition-all shadow-sm hover:-translate-y-1">
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="p-2.5 bg-stone-100 hover:bg-amber-100/80 border border-stone-200 hover:border-amber-900/30 rounded-xl text-stone-700 hover:text-amber-900 transition-all shadow-sm hover:-translate-y-1">
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
          </a>
        </div>
      </motion.div>

      {/* Area Kartu Kanan */}
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ ...smoothEntrance, delay: 0.4 }}
        className="z-10 md:w-1/2 flex justify-center items-center h-[420px]"
      >
        <div className="relative w-48 h-64 md:w-56 md:h-80 group cursor-pointer">
          <div className="absolute inset-0 bg-stone-100 p-2 rounded-2xl border border-stone-300 shadow-lg transition-all duration-500 ease-out origin-bottom-left -rotate-12 -translate-x-6 translate-y-4 opacity-80 group-hover:-rotate-24 group-hover:-translate-x-16 group-hover:translate-y-8 z-10">
            <img src="foto-profil.jpg.jpeg" alt="Frontend Card" className="w-full h-full object-cover rounded-xl" />
          </div>
          <div className="absolute inset-0 bg-white p-2 rounded-2xl border-2 border-amber-900/60 shadow-xl transition-all duration-500 ease-out -rotate-2 group-hover:-translate-y-6 group-hover:scale-105 z-20">
            <img src="foto-profil.jpg.jpeg" alt="Saturn Code" className="w-full h-full object-cover rounded-xl" />
          </div>
          <div className="absolute inset-0 bg-stone-100 p-2 rounded-2xl border border-stone-300 shadow-lg transition-all duration-500 ease-out origin-bottom-right rotate-12 translate-x-6 translate-y-4 opacity-80 group-hover:rotate-24 group-hover:translate-x-16 group-hover:translate-y-8 z-30">
            <img src="foto-profil.jpg.jpeg" alt="React Card" className="w-full h-full object-cover rounded-xl" />
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;