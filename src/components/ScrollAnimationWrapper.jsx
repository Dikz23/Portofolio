import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ScrollAnimationWrapper({ children, className = "" }) {
  const ref = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [60, 0, 0, -30]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <motion.div
      ref={ref}
      style={{ y, opacity }}
      className={`w-full relative ${className}`}
    >
      {children}
    </motion.div>
  );
}