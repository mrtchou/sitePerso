// On importe les bibliothèques nécessaires : React, le module Link de react-router-dom pour la navigation, et le module useLocation pour accéder à l'emplacement actuel dans l'application.
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";

// On importe le CSS pour le style du Header.
import "../styles/Header.css";

// On définit le composant Header qui prend un objet 'props' en argument, ici nous utilisons la destructuration pour extraire 'small' directement.
const Header = ({ small }) => {
  // On utilise le hook useLocation pour obtenir un objet représentant l'emplacement actuel (URL).
  const location = useLocation();

  // On définit le titre à afficher dans le Header.
  const title = "Best in Web Development and Progressive Solutions";
  const titleBepag = "BEPAG";

  // On sépare le titre en un tableau de lettres pour permettre l'animation de chaque lettre individuellement.
  const letters = title.split("");
  const lettersBepag = titleBepag.split("");

  // On renvoie le JSX pour le Header.
  return (
    // On applique une classe différente au Header en fonction de la route actuelle, pour changer le style du Header sur la page Contact.
    <header className={location.pathname === "/contact" ? "header-small" : ""}>
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
          mesure. Nous créons des{" "}
          <strong>sites web et applications SaaS performants</strong> pour tous
          secteurs, optimisant vos opérations et favorisant votre croissance.
          <br />
          <br />
          Maîtrisant <strong>React, Node.js, PHP, Symfony et WordPress</strong>,
          notre équipe réalise une grande diversité de projets, du site vitrine
          à l'application web complexe.
          <br />
          <br />
          Chez BEPAG, nous transformons vos idées en réalité avec des solutions
          adaptées à vos besoins spécifiques.
        </p>
      </div>
    </header>
  );
};

// On exporte le composant Header pour pouvoir l'utiliser ailleurs dans l'application.
export default Header;
