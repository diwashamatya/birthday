// components/FloatingHearts.js
import React from "react";
import { motion } from "framer-motion";

const FloatingHearts = ({ count = 10 }) => {
  const hearts = Array.from({ length: count }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 5,
    duration: 3 + Math.random() * 4,
    size: 20 + Math.random() * 30,
  }));

  return (
    <div className="floating-hearts">
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          className="floating-heart"
          style={{
            left: `${heart.left}%`,
            fontSize: `${heart.size}px`,
          }}
          initial={{ y: "100vh", opacity: 0 }}
          animate={{ y: "-100vh", opacity: [0, 1, 1, 0] }}
          transition={{
            duration: heart.duration,
            delay: heart.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {["💖", "💕", "💝", "💗", "💓"][heart.id % 5]}
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingHearts;
