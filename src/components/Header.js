// On importe les bibliothèques nécessaires : React, le module Link de react-router-dom pour la navigation, et le module useLocation pour accéder à l'emplacement actuel dans l'application.
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";

// On importe le CSS pour le style du Header.
import "../styles/Header.css";

// On définit le composant Header qui prend un objet 'props' en argument, ici nous utilisons la destructuration pour extraire 'small' directement.
const Header = ({ small }) => {
  // On utilise le hook useLocation pour obtenir un objet représentant l'emplacement actuel (URL).
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(false);

  // On définit le titre à afficher dans le Header.
  const title = "Best in Web Development and Progressive Solutions";
  const titleBepag = "BEPAG";

  // On sépare le titre en un tableau de lettres pour permettre l'animation de chaque lettre individuellement.
  const letters = title.split("");
  const lettersBepag = titleBepag.split("");

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 130); // Attend 1 seconde avant de rendre le paragraphe visible
  }, []);

  // On renvoie le JSX pour le Header.
  return (
    // On applique une classe différente au Header en fonction de la route actuelle, pour changer le style du Header sur la page Contact.
    <header
      className={
        location.pathname === "/contact" || location.pathname === "/about"
          ? "header-small"
          : ""
      }
    >
      <Helmet>
        <meta
          name="description"
          content="BEPAG est une agence spécialisée en développement web. Nous créons des sites web et applications SaaS performants pour tous secteurs, optimisant vos opérations et favorisant votre croissance. Nous maîtrisons React, Node.js, PHP, Symfony et WordPress et réalisons une grande diversité de projets, du site vitrine à l'application web complexe. Chez BEPAG, nous transformons vos idées en réalité avec des solutions adaptées à vos besoins spécifiques."
        />
        <meta
          name="keywords"
          content="développement web, sites web, applications SaaS, React, Node.js, PHP, Symfony, WordPress"
        />
      </Helmet>
      <nav className={`navbar`}>
        <div className="logo">
          <h1>
            {lettersBepag.map((lettr, index) => (
              <span key={index} className="hoverable-letter">
                {lettr}
              </span>
            ))}
          </h1>
        </div>
        <ul className="menu">
          {/* On utilise le composant Link pour la navigation dans l'application. */}
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          {/* <li>
            <Link to="/projects">Nos Projets</Link>
          </li>
          <li>
            <Link to="/login">Connexion</Link>
          </li>
          <li>
            <Link to="/register">Inscription</Link>
          </li> */}
        </ul>
      </nav>

      <div className={`header-content ${isVisible ? "visible" : ""}`}>
        {/* <h2>
          {/* On parcourt le tableau de lettres et on affiche chaque lettre dans une balise span pour pouvoir animer chaque lettre individuellement. }
          {letters.map((letter, index) => (
            <span key={index} className="hoverable-letter">
              {letter}
            </span>
          ))}
        </h2> */}
        <p>
          <strong>BEPAG</strong>, votre partenaire pour des solutions web sur
          mesure.
          <br />
          <br />
          Nous transformons vos idées en réalité avec des solutions adaptées à
          vos besoins spécifiques.
        </p>
      </div>
    </header>
  );
};

// On exporte le composant Header pour pouvoir l'utiliser ailleurs dans l'application.
export default Header;
