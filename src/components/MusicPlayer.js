// components/MusicPlayer.js
import React, { useState, useRef } from "react";
import { motion } from "framer-motion";

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const toggleMusic = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(console.error);
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="music-player">
      <audio
        ref={audioRef}
        loop
        src="/api/placeholder/audio" // Replace with your romantic song
      />
      <motion.button
        className={`music-btn ${isPlaying ? "playing" : ""}`}
        onClick={toggleMusic}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {isPlaying ? "🔊" : "🔈"} Music {isPlaying ? "On" : "Off"}
      </motion.button>
    </div>
  );
};

export default MusicPlayer;
