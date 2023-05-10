import React, { useState, useEffect } from "react";
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
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#portfolio">Portofolio</a>
          </li>
          <li>
            <a href="#projects">Nos Projets</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <a href="#login">Connexion</a>
          </li>
          <li>
            <a href="#register">Inscription</a>
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
