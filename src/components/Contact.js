import React, { useState } from "react";
import "../styles/Contact.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [copySuccess, setCopySuccess] = useState("");

  const emailToCopy = "contact@bepag.fr";

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Name: " + name);
    console.log("Email: " + email);
    console.log("Message: " + message);
  };

  const copyToClipboard = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(emailToCopy);
    setCopySuccess("Copié !");
    setTimeout(() => setCopySuccess(""), 2000);
  };

  return (
    <div className="contact">
      <h1>Contactez-nous</h1>
      <br />
      <p>
        Vous pouvez <a href="mailto:contact@bepag.fr">m'écrire</a> sur cette
        adresse email: <strong>{emailToCopy}</strong>
        {/* Ce lien agira comme un bouton mais ressemblera à un lien normal */}
        <button onClick={copyToClipboard}> Copier</button>
      </p>
      {copySuccess && { copySuccess }}
      <br />
      <br />
      <form onSubmit={handleSubmit}>
        <label>
          Nom:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          Message:
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </label>
        <input type="submit" value="Envoyer" />
      </form>
    </div>
  );
};

export default Contact;
