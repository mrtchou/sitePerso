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
          <li>Email: contact@bepag.fr</li>
          <li>Téléphone: +33 (0)1 23 45 67 89</li>
          <li>Adresse: 123 rue des Exemples, 75000 Paris, France</li>
        </ul>
      </div>
      <div className="footer-content">
        <h4>Liens</h4>
        <ul>
          <li>Accueil</li>
          <li>Portfolio</li>
          <li>Nos Projets</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="footer-content">
        <h4>Réseaux sociaux</h4>
        <ul className="socials">
          <li>Facebook</li>
          <li>Twitter</li>
          <li>LinkedIn</li>
          <li>Instagram</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
