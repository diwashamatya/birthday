// pages/LoveLetter.js
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import MusicPlayer from "../components/MusicPlayer";

const LoveLetter = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  const loveLetter = `My Dearest Love Ishitu, 

From the moment you entered my life, everything changed. Your smile brightens my darkest days, your laughter is my favorite melody, and your love is the greatest gift I've ever received.

Every day with you feels like a beautiful dream. You've shown me what true love means - patient, kind, and unconditional. You see the best in me even when I can't see it myself.

On this special day, I want you to know how incredibly loved and cherished you are. You deserve all the happiness in the world, today and every day.

Happy Birthday to the most amazing person in my life. I can't wait to create many more beautiful memories with you.

Forever yours,
Your Loving Partner 💖`;

  useEffect(() => {
    if (currentIndex < loveLetter.length) {
      const timer = setTimeout(() => {
        setDisplayedText((prev) => prev + loveLetter[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, 30);

      return () => clearTimeout(timer);
    } else {
      setIsComplete(true);
    }
  }, [currentIndex, loveLetter]);

  const skipAnimation = () => {
    setDisplayedText(loveLetter);
    setCurrentIndex(loveLetter.length);
    setIsComplete(true);
  };

  return (
    <div className="love-letter-page">
      <MusicPlayer />

      <motion.div
        className="letter-container"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="letter-paper">
          <div className="letter-header">
            <h2>To My Beautiful Girlfriend</h2>
            <div className="heart-separator">💖💖💖</div>
          </div>

          <div className="letter-content">
            <pre className="typewriter-text">
              {displayedText}
              {!isComplete && <span className="cursor">|</span>}
            </pre>
          </div>

          {!isComplete && (
            <button className="skip-btn" onClick={skipAnimation}>
              Read Full Letter
            </button>
          )}

          <div className="letter-footer">
            <div className="signature">
              With all my love,
              <br />
              <span className="signature-name">Diwash</span>
            </div>
            <div className="seal">💝</div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default LoveLetter;
