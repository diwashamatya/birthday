// pages/Surprise.js
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Confetti from "react-confetti";
import FloatingHearts from "../components/FloatingHearts";

const Surprise = () => {
  const [showSurprise, setShowSurprise] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const handleSurpriseClick = () => {
    setShowConfetti(true);
    setTimeout(() => {
      setShowSurprise(true);
    }, 2000);

    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });

    setTimeout(() => {
      setShowConfetti(false);
    }, 5000);
  };

  return (
    <div className="surprise-page">
      {showConfetti && (
        <Confetti
          width={windowSize.width}
          height={windowSize.height}
          numberOfPieces={200}
          recycle={false}
        />
      )}

      <FloatingHearts count={20} />

      <AnimatePresence>
        {!showSurprise ? (
          <motion.div
            className="surprise-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="surprise-button-container"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 10 }}
            >
              <h2>Ready for your surprise, Ishitu? 💖</h2>
              <motion.button
                className="surprise-btn"
                onClick={handleSurpriseClick}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                💝 Tap for Surprise 💝
              </motion.button>
              <p>
                Click the button above for a magical moment I've created for
                you!
              </p>
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            className="surprise-message-container"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="surprise-card">
              <div className="surprise-header">
                <span className="heart-float">💖</span>
                <h2>To My Ishitu</h2>
                <span className="heart-float">💖</span>
              </div>

              <div className="surprise-content">
                <p className="surprise-text">
                  Ishitu, my love for you grows stronger every single day. You
                  are the most beautiful part of my life, and I feel lucky every
                  moment that I get to call you mine.
                </p>

                <div className="special-message">
                  <h3>My Promise to You:</h3>
                  <p>
                    I promise to love you deeply, support you endlessly, and
                    make you feel valued and special every day. You deserve
                    nothing less. You deserve the world — and I, Diwash, will
                    always try my best to give you everything you dream of.
                  </p>
                </div>

                {/* DRESS IMAGE SECTION */}
                <div className="gift-section">
                  <h3>Your Gift 🎁</h3>
                  <p>
                    I bought something special just for you… I hope you love it!
                    💕
                  </p>

                  <motion.img
                    src="/images/dress.png"
                    alt="Gift Dress"
                    className="gift-image"
                    style={{
                      width: "100px",
                      height: "auto",
                      borderRadius: "12px",
                    }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                  />
                </div>

                <div className="romantic-quote">
                  <em>
                    "I saw that you were perfect, and so I loved you. Then I saw
                    that you were not perfect, and I loved you even more."
                  </em>
                </div>
              </div>

              <div className="surprise-footer">
                <p>Forever yours,</p>
                <p className="signature">Diwash 💕</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Surprise;
