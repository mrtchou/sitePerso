import React, { useState } from "react";

const PasswordPage = ({ setPassword }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setPassword(input);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Mot de passe :
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="password"
          />
        </label>
        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
};

export default PasswordPage;
