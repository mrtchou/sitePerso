import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <h3>BEPAG</h3>
        <p>
          Business Evolution - Progressive Advancement Group
          <br />
          Développement Web de premier plan
        </p>
      </div>
      <div className="footer-content">
        <h4>Contact</h4>
        <ul>
          <li>
            Email: <a href="mailto:contact@bepag.fr">contact@bepag.fr</a>
          </li>
          <li>Téléphone: +33 (0)1 23 45 67 89</li>
          <li>Adresse: 123 rue des Exemples, 75000 Paris, France</li>
        </ul>
      </div>
      <div className="footer-content">
        <h4>Liens</h4>
        <ul>
          <li>
            <a href="/">Accueil</a>
          </li>
          <li>
            <a href="/portfolio">Portfolio</a>
          </li>
          <li>
            <a href="/projets">Nos Projets</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>
      <div className="footer-content">
        <h4>Réseaux sociaux</h4>
        <ul className="socials">
          <li>
            <a href="https://www.facebook.com">Facebook</a>
          </li>
          <li>
            <a href="https://twitter.com">Twitter</a>
          </li>
          <li>
            <a href="https://www.linkedin.com">LinkedIn</a>
          </li>
          <li>
            <a href="https://www.instagram.com">Instagram</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
