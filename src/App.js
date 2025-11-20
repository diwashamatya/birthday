// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import OurStory from "./pages/OurStory";
import LoveLetter from "./pages/LoveLetter";
import Surprise from "./pages/Surprise";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/our-story" element={<OurStory />} />
            <Route path="/love-letter" element={<LoveLetter />} />
            <Route path="/surprise" element={<Surprise />} />
          </Routes>
        </AnimatePresence>
      </div>
    </Router>
  );
}

export default App;
