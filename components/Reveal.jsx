"use client";

import { motion } from "framer-motion";

const variants = {
  up: { opacity: 0, y: 42, x: 0, rotate: 0, scale: 0.98 },
  down: { opacity: 0, y: -42, x: 0, rotate: 0, scale: 0.98 },
  left: { opacity: 0, x: -58, y: 18, rotate: -2, scale: 0.98 },
  right: { opacity: 0, x: 58, y: 18, rotate: 2, scale: 0.98 },
  pop: { opacity: 0, y: 24, x: 0, scale: 0.94, rotate: -1 },
  tilt: { opacity: 0, y: 46, x: -16, rotate: -3, scale: 0.98 }
};

const visible = {
  opacity: 1,
  x: 0,
  y: 0,
  rotate: 0,
  scale: 1
};

export default function Reveal({ children, delay = 0, className = "", from = "up", amount = 0.2 }) {
  return (
    <motion.div
      className={className}
      initial={variants[from] || variants.up}
      whileInView={visible}
      viewport={{ once: true, amount }}
      transition={{ duration: 0.72, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
