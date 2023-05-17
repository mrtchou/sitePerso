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
      title: "Création de sites web",
      description:
        "Que vous ayez besoin d'un site web corporatif, d'une boutique en ligne ou d'un portfolio personnel, nous avons les compétences et l'expertise nécessaires pour créer un site web qui correspond parfaitement à vos besoins. Nous utilisons une combinaison de HTML, CSS, JavaScript, React, et Node.js pour créer des sites web attrayants et fonctionnels.",
    },
    // Ajoutez ici plus de services comme l'exemple ci-dessus
  ];

  return (
    <div className="services">
      <h1>Nos Services</h1>
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
