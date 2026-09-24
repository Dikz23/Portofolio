// src/components/BookPageTransition.jsx
import { motion } from "framer-motion";

export default function BookPageTransition({ children, id }) {
  // Variasi animasi: Halaman terbuka seperti buku dan terseret ke atas saat keluar
  const bookPageVariants = {
    hidden: {
      opacity: 0,
      rotateX: -45,
      y: 100,
      transformPerspective: 1000,
      transformOrigin: "top",
    },
    visible: {
      opacity: 1,
      rotateX: 0,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1], // Kurva transisi halus ala halaman buku
      },
    },
    exit: {
      opacity: 0,
      y: -150, // Terseret ke atas
      scale: 0.95,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      id={id}
      initial="hidden"
      whileInView="visible"
      exit="exit"
      viewport={{ once: false, amount: 0.2 }}
      variants={bookPageVariants}
      style={{ transformStyle: "preserve-3d" }}
      className="w-full relative"
    >
      {children}
    </motion.div>
  );
}