// Importation des bibliothèques et modules nécessaires
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import "../styles/Header.css";

const Header = ({ small }) => {
  // Obtenez l'emplacement actuel (URL) grâce au hook useLocation
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  // Initialisation d'un état pour gérer la visibilité du contenu de l'en-tête
  const [isVisible, setIsVisible] = useState(false);

  // Les titres sont définis ici
  // const title = "Best in Web Development and Progressive Solutions";
  const titleBepag = "BEPAG";

  // Les titres sont divisés en un tableau de lettres pour permettre l'animation de chaque lettre individuellement.
  // const letters = title.split("");
  const lettersBepag = titleBepag.split("");

  useEffect(() => {
    // Utilisation d'un effet pour définir la visibilité du contenu de l'en-tête après un certain délai
    setTimeout(() => {
      setIsVisible(true);
    }, 130); // Attend 130ms avant de rendre le paragraphe visible
  }, []);

  // Le code JSX pour le Header est retourné ici
  return (
    <header
      className={
        location.pathname === "/contact" ||
        location.pathname === "/about" ||
        location.pathname === "/Nos-Services"
          ? "header-small"
          : ""
      }
    >
      {/* Balises meta pour le SEO */}
      <Helmet>
        <meta
          name="description"
          content="BEPAG est une agence spécialisée en développement web. Nous créons des sites web, des sites e-commerce et applications SaaS, optimisant vos opérations et favorisant votre croissance. Nous maîtrisons React, Node.js, PHP, Symfony et WordPress et réalisons une grande diversité de projets, du site vitrine à l'application web complexe. Chez BEPAG, nous transformons vos idées en réalité avec des solutions adaptées à vos besoins spécifiques."
        />
        <meta
          name="keywords"
          content="développement web, sites web, applications SaaS, React, Node.js, PHP, Symfony, WordPress"
        />
      </Helmet>
      {/* Barre de navigation */}
      <nav className={`navbar ${isMenuOpen ? "open" : ""}`}>
        {" "}
        <div className="logo">
          {/* Le logo est généré lettre par lettre */}
          <h1>
            {lettersBepag.map((lettr, index) => (
              <span key={index} className="hoverable-letter">
                <a href="https://bepag.fr/" className="noStyle">
                  {lettr}
                </a>
              </span>
            ))}
          </h1>
        </div>
        <button
          className={`hamburger ${isMenuOpen ? "open" : ""}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
        <ul className={`menu ${isMenuOpen ? "open" : ""}`}>
          {" "}
          {/* On utilise le composant Link pour la navigation dans l'application. */}
          <li>
            <Link to="/" onClick={handleLinkClick}>
              Accueil
            </Link>
          </li>
          <li>
            <Link to="/about">À propos</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/Nos-Services">Nos Services</Link>
          </li>
        </ul>
      </nav>

      <div className={`header-content ${isVisible ? "visible" : ""}`}>
        <p>
          <strong>BEPAG</strong>, votre partenaire pour des solutions web sur
          mesure.
          <br />
          Nous transformons vos idées en réalité avec des solutions adaptées à
          vos besoins spécifiques.
        </p>
      </div>
    </header>
  );
};

export default Header;
