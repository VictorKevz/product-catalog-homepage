import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navMenuVariants } from "../../variants";
import logoLight from "../../assets/images/logo-light.svg";
import logoDark from "../../assets/images/logo-dark.svg";
import iconOpen from "../../assets/images/icon-open.svg";
import iconClose from "../../assets/images/icon-close.svg";
import moon from "../../assets/images/icon-moon.svg";
import sun from "../../assets/images/icon-sun.svg";
import "../../css/navbar.css";

function Navbar({ isDark, onChange }) {
  const [isOpen, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!isOpen);
  };
  const resetState = () => {
    setOpen(false);
  };
  return (
    <AnimatePresence mode="wait">
      <motion.header
        id="home"
        className="header wrapper"
        variants={navMenuVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        role="banner"
      >
        <nav className="nav container" role="navigation" aria-label="Main Navigation">
          <a href="#home" className="logo-container">
            <img
              src={isDark ? logoDark : logoLight}
              alt="Company Logo"
              className="logo nav"
            />
          </a>
          <button
            className="theme-container"
            onClick={onChange}
            aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
          >
            <img
              src={isDark ? moon : sun}
              alt={`${isDark ? "Sun Icon" : "Moon Icon"}`}
              className="theme-icon"
            />
          </button>
          <AnimatePresence mode="wait">
            <ul
              className={`nav-links-container ${isOpen && "show"} ${
                isDark && isOpen && "bg-card-dark"
              }`}
              role="menu"
            >
              <li
                className={`nav-link ${isDark && "text-dark"}`}
                onClick={resetState}
              >
                <a href="#home">Home</a>
              </li>
              <li
                className={`nav-link ${isDark && "text-dark"}`}
                onClick={resetState}
              >
                <a href="#category">Categories</a>
              </li>

              <li
                className={`nav-link ${isDark && "text-dark"}`}
                onClick={resetState}
              >
                <a href="#catalog">Catalog</a>
              </li>
              <li
                className={`nav-link ${isDark && "text-dark"}`}
                onClick={resetState}
              >
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </AnimatePresence>
          <button
            className={`toggle-container`}
            onClick={toggleMenu}
            aria-label={`${
              isOpen ? "Close navigation menu" : "Open navigation menu"
            }`}
            aria-expanded={isOpen}
          >
            <img
              src={isOpen ? iconClose : iconOpen}
              alt={`${isOpen ? "Close Menu" : "Open Menu"}`}
              className="menu-icon"
            />
          </button>
        </nav>
        <div className={`mask ${isOpen && "show"}`} aria-hidden={!isOpen}></div>
      </motion.header>
    </AnimatePresence>
  );
}

export default Navbar;
