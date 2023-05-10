import React, { useState, useEffect } from "react";
import { Link, Route, Routes } from "react-router-dom";

import "../styles/Header.css";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 200) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header>
      <nav className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
        <div className="logo">
          <h1>BEPAG</h1>
        </div>
        <ul className="menu">
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/portfolio">Portofolio</Link>
          </li>
          <li>
            <Link to="/projects">Nos Projets</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/login">Connexion</Link>
          </li>
          <li>
            <Link to="/register">Inscription</Link>
          </li>
        </ul>
      </nav>

      <div className="header-content">
        <h2>Best in Web Development and Progressive Solutions</h2>
      </div>
    </header>
  );
};

export default Header;
