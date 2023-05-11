import "../styles/Main.css";
import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";

// ...
const Main = () => {
  useEffect(() => {
    ScrollReveal().reveal(".main-content", {
      delay: 555,
      distance: "50px",
      origin: "bottom",
    });
  }, []);

  return (
    <main>
      <div className="main-content">
        <h2>Collaborons</h2>
        <p>
          Faites confiance à BEPAG pour transformer votre vision en réalité et
          donner vie à vos projets les plus ambitieux. Ensemble, créons des
          expériences en ligne exceptionnelles pour vos clients et propulsez
          votre entreprise vers de nouveaux sommets.
        </p>
        <p>
          "Bienvenue chez BEPAG - votre partenaire de confiance pour des
          solutions web sur mesure. En tant que développeur web expérimenté, je
          crée des sites web et des applications modernes et performants qui
          aident les entreprises à se développer. Experte en technologies clés
          telles que HTML, CSS, JavaScript, React, Node.js, PHP, Symfony et
          WordPress, BEPAG est dédiée à transformer vos idées en réalité. Chaque
          projet est unique et mérite une attention particulière - c'est
          pourquoi je propose une gamme complète de services pour répondre à vos
          besoins spécifiques. Visitez www.bepag.fr et découvrez comment je peux
          propulser votre entreprise vers de nouveaux sommets."
        </p>
      </div>
      <div className="main-content">
        <h2>Nos services</h2>
        <p>
          Chez BEPAG, nous comprenons que chaque projet est unique et mérite une
          attention particulière. C'est pourquoi nous proposons une gamme
          complète de services de développement web, allant des sites web
          d'entreprise aux boutiques en ligne, en passant par les applications
          web progressives. Quel que soit votre projet, vous pouvez être sûr
          qu'il sera entre de bonnes mains avec BEPAG.
        </p>
      </div>
      <div className="main-content">
        <h2>Expertise technologique</h2>
        <p>
          Notre expertise en matière de technologies inclut HTML, CSS,
          JavaScript, React, Node.js, PHP, Symfony et WordPress. Grâce à notre
          maîtrise de ces outils, nous sommes en mesure de vous offrir des
          solutions personnalisées et évolutives qui répondent à vos besoins
          spécifiques. De plus, notre approche axée sur les résultats garantit
          que votre site web sera non seulement esthétiquement attrayant, mais
          aussi optimisé pour le référencement et la performance.
        </p>
      </div>
      <div className="main-content">
        <h2>Collaborons</h2>
        <p>
          Faites confiance à BEPAG pour transformer votre vision en réalité et
          donner vie à vos projets les plus ambitieux. Ensemble, créons des
          expériences en ligne exceptionnelles pour vos clients et propulsez
          votre entreprise vers de nouveaux sommets.
        </p>
        <p>
          Faites confiance à BEPAG pour transformer votre vision en réalité et
          donner vie à vos projets les plus ambitieux. Ensemble, créons des
          expériences en ligne exceptionnelles pour vos clients et propulsez
          votre entreprise vers de nouveaux sommets. Lorem500
        </p>
      </div>
    </main>
  );
};

export default Main;
