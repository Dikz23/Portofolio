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
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-stone-50 text-amber-950 select-none"
    >
      <div className="flex flex-col items-center gap-6 px-4">
        {/* Teks Mengetik dengan Font Serif Elegan */}
        <div className="flex items-center font-serif text-2xl md:text-4xl lg:text-5xl font-bold tracking-tight text-center">
          <span>{displayedText}</span>
          <motion.span
            animate={{ opacity: [0, 1] }}
            transition={{
              repeat: Infinity,
              duration: 0.5,
              repeatType: "reverse",
            }}
            className="inline-block w-1 h-7 md:h-10 bg-amber-800 ml-1.5 rounded-full"
          />
        </div>

        {/* Efek Loading Spinner minimalis & Progress Bar */}
        <div className="flex flex-col items-center gap-3 mt-2">
          {/* Circular Spinner */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
            className="w-6 h-6 border-2 border-stone-300 border-t-amber-800 rounded-full"
          />

          {/* Progress Bar yang mengisi sesuai panjang teks */}
          <div className="w-48 h-1 bg-stone-200 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-amber-800"
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