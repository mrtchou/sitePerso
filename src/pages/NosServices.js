import React from "react";
import "../styles/NosServices.css";

const ServiceCard = ({ title, description }) => (
  <div className="service-card">
    <h2>{title}</h2>
    <p>{description}</p>
  </div>
);

const Services = () => {
  const services = [
    {
      title: "1. Création de sites web",
      description:
        "Que vous ayez besoin d'un site web corporatif, d'une boutique en ligne ou d'un portfolio personnel, nous avons les compétences et l'expertise nécessaires pour créer un site web qui correspond parfaitement à vos besoins. Nous utilisons une combinaison de HTML, CSS, JavaScript, React, et Node.js pour créer des sites web attrayants et fonctionnels.",
    },
    {
      title: "2. Développement d'applications web",
      description:
        "Si vous cherchez à créer une application web sur mesure, vous êtes au bon endroit. Nous utilisons les dernières technologies, y compris React et Node.js, pour créer des applications web progressives qui sont à la fois puissantes et intuitives.",
    },
    {
      title: "3. E-commerce",
      description:
        "Vendez vos produits en ligne avec une boutique e-commerce sur mesure. Nous créerons une boutique en ligne optimisée pour les conversions, facile à gérer, et sécurisée.",
    },
    {
      title: "4. Référencement (SEO)",
      description:
        "Un beau site web ne sert à rien s'il n'est pas visible. C'est pourquoi nous intégrons le SEO dès le début du processus de conception de votre site web. Nous utilisons les meilleures pratiques de SEO pour aider votre site web à atteindre les premiers rangs sur Google.",
    },
    {
      title: "5. Maintenance et Support",
      description:
        "Votre site web a besoin d'un entretien régulier pour rester en bonne santé. Nous offrons des services de maintenance et de support pour assurer la longévité de votre site web. De plus, nous sommes toujours là pour vous aider avec des problèmes techniques ou des mises à jour du site.",
    },
    {
      title: "6. Formation et Accompagnement",
      description:
        "Nous ne nous contentons pas de créer votre site web et de vous laisser à vous-même. Nous offrons également des formations sur l'utilisation et la gestion de votre nouveau site web. De plus, nous sommes là pour vous accompagner et vous conseiller sur votre présence en ligne.",
    },
    // Ajoutez ici plus de services comme l'exemple ci-dessus
  ];

  return (
    <div className="services">
      <h1>Nos Services</h1>
      <p>
        Nous nous efforçons de fournir une gamme complète de services de
        développement web pour répondre à vos besoins uniques. Nous nous
        spécialisons dans la création de solutions personnalisées qui propulsent
        les entreprises vers l'avenir. Voici un aperçu de ce que nous pouvons
        vous offrir:
      </p>
      <div className="services__content">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
