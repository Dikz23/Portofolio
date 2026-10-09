// src/components/Loading.jsx
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Loading({ onComplete }) {
  const fullText = "Welcome To My Portofolio";
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedText((prev) => prev + fullText.charAt(index));
        index++;
      } else {
        clearInterval(interval);
        // Jeda 1,2 detik setelah selesai mengetik sebelum beralih ke halaman utama
        setTimeout(() => {
          if (onComplete) onComplete();
        }, 1200);
      }
    }, 90);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black text-neutral-100 select-none"
    >
      <div className="flex flex-col items-center gap-6 px-4">
        {/* Teks Mengetik dengan Font Elegan (Warna Putih/Abu) */}
        <div className="flex items-center font-serif text-2xl md:text-4xl lg:text-5xl font-bold tracking-tight text-center text-white">
          <span>{displayedText}</span>
          <motion.span
            animate={{ opacity: [0, 1] }}
            transition={{
              repeat: Infinity,
              duration: 0.5,
              repeatType: "reverse",
            }}
            className="inline-block w-1 h-7 md:h-10 bg-blue-500 ml-1.5 rounded-full"
          />
        </div>

        {/* Efek Loading Spinner minimalis & Progress Bar */}
        <div className="flex flex-col items-center gap-3 mt-2">
          {/* Circular Spinner (Border Biru) */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
            className="w-6 h-6 border-2 border-neutral-800 border-t-blue-500 rounded-full"
          />

          {/* Progress Bar (Warna Biru untuk indikator menunggu) */}
          <div className="w-48 h-1 bg-neutral-900 border border-neutral-800 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)]"
              initial={{ width: "0%" }}
              animate={{
                width: `${(displayedText.length / fullText.length) * 100}%`,
              }}
              transition={{ ease: "easeOut", duration: 0.1 }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}