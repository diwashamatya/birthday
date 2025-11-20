import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import FloatingHearts from "../components/FloatingHearts";

const Countdown = () => {
  const [name] = useState("My Love"); // Change to her name
  const [countdown, setCountdown] = useState("");
  const [isBirthdayTime, setIsBirthdayTime] = useState(false);
  const navigate = useNavigate();

  // Set birthday date: December 3rd, 12:00 PM Indian Time
  const birthdayDate = new Date("December 03, 2024 12:00:00 GMT+0530");

  useEffect(() => {
    const checkBirthdayTime = () => {
      const now = new Date();
      const timeDiff = birthdayDate.getTime() - now.getTime();

      if (timeDiff <= 0) {
        // It's birthday time! Redirect to home page
        setIsBirthdayTime(true);
        navigate("/");
      } else {
        // Calculate countdown
        const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

        setCountdown(`${days}d ${hours}h ${minutes}m ${seconds}s`);
      }
    };

    // Check immediately
    checkBirthdayTime();

    // Update every second
    const timer = setInterval(checkBirthdayTime, 1000);

    return () => clearInterval(timer);
  }, [birthdayDate, navigate]);

  return (
    <div className="countdown-page">
      <FloatingHearts count={10} />

      <div className="countdown-container">
        <motion.div
          className="countdown-content"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="countdown-title"
          >
            Getting Ready for Something Special! 💝
          </motion.h1>

          <motion.div
            className="countdown-subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            <h2>Counting down to {name}'s Birthday!</h2>
            <p>December 3rd, 12:00 PM IST</p>
          </motion.div>

          <motion.div
            className="timer-display"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1.5, type: "spring", stiffness: 100 }}
          >
            <div className="timer">{countdown}</div>
            <div className="timer-label">Until the magic begins...</div>
          </motion.div>

          <motion.div
            className="countdown-message"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
          >
            <div className="message-card">
              <h3>✨ The Wait Will Be Worth It ✨</h3>
              <p>
                Something amazing is waiting for you when the timer hits zero!
              </p>
              <div className="sparkle">⭐</div>
            </div>
          </motion.div>

          <motion.div
            className="floating-elements"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5, duration: 1 }}
          >
            <div className="floating-heart">💖</div>
            <div className="floating-gift">🎁</div>
            <div className="floating-cake">🎂</div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Countdown;
