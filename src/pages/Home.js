// pages/Home.js
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import FloatingHearts from "../components/FloatingHearts";
import MusicPlayer from "../components/MusicPlayer";

const Home = () => {
  const [name] = useState("My Love"); // Change to her name
  const [text, setText] = useState("");
  const fullText = `Happy Birthday ${name}! Ishitu 💖`;

  useEffect(() => {
    let i = 0;
    const typing = setInterval(() => {
      if (i < fullText.length) {
        setText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typing);
      }
    }, 100);

    return () => clearInterval(typing);
  }, [fullText]);

  return (
    <div className="home-page">
      <FloatingHearts count={15} />
      <MusicPlayer />

      <div className="hero-section">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="animated-text">
            {text}
            <span className="cursor">|</span>
          </h1>

          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
          >
            Every moment with you is magical ✨
          </motion.p>

          <motion.div
            className="cta-buttons"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
          >
            <Link to="/gallery" className="cta-btn primary">
              View Our Memories 📸
            </Link>
            <Link to="/love-letter" className="cta-btn secondary">
              Read My Letter 💌
            </Link>
            <Link to="/surprise" className="cta-btn special">
              Your Surprise 🎁
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          className="floating-elements"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 2 }}
        >
          {/* Additional decorative elements */}
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
