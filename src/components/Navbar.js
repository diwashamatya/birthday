// components/Navbar.js
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import "./Navbar.css";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: "/", name: "Home" },
    { path: "/gallery", name: "Gallery" },
    { path: "/our-story", name: "Our Story" },
    { path: "/love-letter", name: "Love Letter" },
    { path: "/surprise", name: "Surprise" },
  ];

  return (
    <motion.nav
      className="navbar"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="nav-container">
        {/* UPDATED LOGO */}
        <Link to="/" className="nav-logo">
          <img src="/images/logo1.png" alt="Our Logo" className="logo-img" />
        </Link>

        <div className={`nav-menu ${isOpen ? "active" : ""}`}>
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`nav-link ${
                location.pathname === item.path ? "active" : ""
              }`}
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="nav-toggle" onClick={() => setIsOpen(!isOpen)}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
