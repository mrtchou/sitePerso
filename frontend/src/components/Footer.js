import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer>
      <div className="footer-left">
        <h4>Contact</h4>
        <ul>
          <li>
            Email: <br />
            <a href="mailto:contact@bepag.fr">contact@bepag.fr</a>
          </li>
          <br />
          <br />
          <li>
            Adresse: <br />
            24 rue Edmond Bonte
            <br />
            91130 Ris Orangis
            <br /> France
          </li>
        </ul>
      </div>
      <div className="footer-center">
        <h3>BEPAG</h3>
        <p>
          Business Evolution - Progressive Advancement Group
          <br />
          <br />
          Développement Web
        </p>
      </div>
      <div className="footer-right">
        <div>
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
        <div>
          <h4>Réseaux sociaux</h4>
          <ul className="socials">
            <li>
              <a href="https://twitter.com/leGrandDev">Twitter</a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/bepag/">LinkedIn</a>
            </li>
            <li>
              <a href="https://www.instagram.com">Instagram</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">Copyright BEPAG {year}</div>
    </footer>
  );
};

export default Footer;
