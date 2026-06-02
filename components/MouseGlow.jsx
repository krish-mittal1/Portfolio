"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function MouseGlow() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { damping: 26, stiffness: 220, mass: 0.45 });
  const ringY = useSpring(y, { damping: 26, stiffness: 220, mass: 0.45 });
  const dotX = useSpring(x, { damping: 45, stiffness: 520, mass: 0.18 });
  const dotY = useSpring(y, { damping: 45, stiffness: 520, mass: 0.18 });

  useEffect(() => {
    let frame = 0;

    const update = (event) => {
      if (frame) {
        return;
      }

      frame = window.requestAnimationFrame(() => {
        document.documentElement.style.setProperty("--mouse-x", `${event.clientX}px`);
        document.documentElement.style.setProperty("--mouse-y", `${event.clientY}px`);
        x.set(event.clientX);
        y.set(event.clientY);
        frame = 0;
      });
    };

    const setHover = () => document.body.classList.add("cursor-hover");
    const clearHover = () => document.body.classList.remove("cursor-hover");

    window.addEventListener("pointermove", update);
    document.querySelectorAll("a, button").forEach((node) => {
      node.addEventListener("mouseenter", setHover);
      node.addEventListener("mouseleave", clearHover);
    });

    return () => {
      if (frame) {
        window.cancelAnimationFrame(frame);
      }

      window.removeEventListener("pointermove", update);
      document.querySelectorAll("a, button").forEach((node) => {
        node.removeEventListener("mouseenter", setHover);
        node.removeEventListener("mouseleave", clearHover);
      });
    };
  }, [x, y]);

  return (
    <>
      <motion.div
        className="cursor-ring"
        style={{
          translateX: ringX,
          translateY: ringY
        }}
      />
      <motion.div
        className="cursor-dot"
        style={{
          translateX: dotX,
          translateY: dotY
        }}
      />
    </>
  );
}
