import React, { useState, useEffect } from "react";

const ChildTasks = () => {
  const [password, setPassword] = useState("");
  const [authenticated, setAuthenticated] = useState(false);
  const [mathExercises, setMathExercises] = useState([]);
  const [wordProblems, setWordProblems] = useState([]);
  const [wordsToCopy, setWordsToCopy] = useState([]);

  // Tous les exercices, problèmes et mots possibles.
  const allMathExercises = [
    [
      "12 + 5",
      "24 - 8",
      "7 + 9",
      "15 - 6",
      "6 x 3",
      "27 ÷ 3",
      "18 + 4",
      "32 - 9",
      "5 x 4",
      "36 ÷ 6",
      "9 + 7",
      "23 - 14",
      "8 x 2",
      "42 ÷ 7",
      "13 + 6",
      "19 - 5",
      "3 x 9",
      "54 ÷ 6",
      "11 + 8",
      "28 - 16",
      "4 x 5",
      "60 ÷ 10",
      "14 + 11",
      "31 - 7",
      "6 x 7",
      "42 ÷ 6",
      "17 + 9",
      "25 - 12",
      "8 x 3",
      "48 ÷ 8",
      "12 + 15",
      "36 - 18",
      "4 x 6",
      "48 ÷ 6",
      "10 + 12",
    ],
    [
      "8 + 4",
      "19 - 7",
      "6 + 12",
      "27 - 9",
      "4 x 3",
      "24 ÷ 3",
      "15 + 6",
      "31 - 5",
      "3 x 4",
      "42 ÷ 6",
      "7 + 11",
      "25 - 13",
      "9 x 2",
      "54 ÷ 6",
      "14 + 5",
      "18 - 7",
      "5 x 5",
      "45 ÷ 5",
      "6 + 9",
      "29 - 17",
      "7 x 4",
      "28 ÷ 4",
      "11 + 7",
      "34 - 9",
      "8 x 6",
      "48 ÷ 6",
      "16 + 8",
      "23 - 11",
      "7 x 3",
      "36 ÷ 6",
      "9 + 13",
      "32 - 17",
      "4 x 8",
      "56 ÷ 7",
      "15 + 16",
    ],
    [
      "6 + 7",
      "16 - 5",
      "5 + 11",
      "23 - 8",
      "3 x 4",
      "18 ÷ 3",
      "14 + 8",
      "29 - 7",
      "2 x 5",
      "36 ÷ 4",
      "8 + 10",
      "21 - 12",
      "6 x 2",
      "42 ÷ 7",
      "11 + 8",
      "25 - 7",
      "4 x 6",
      "48 ÷ 6",
      "9 + 6",
      "27 - 15",
      "3 x 7",
      "21 ÷ 3",
      "10 + 8",
      "35 - 9",
      "5 x 7",
      "42 ÷ 6",
      "12 + 7",
      "24 - 9",
      "4 x 3",
      "36 ÷ 6",
      "7 + 12",
      "33 - 16",
      "5 x 8",
      "56 ÷ 7",
      "13 + 14",
    ],
  ];

  const allWordProblems = [
    [
      "J'ai 5 pommes et j'en donne 2 à mon ami. Combien m'en reste-t-il ?",
      "Jean a 12 billes et en perd 3. Combien lui en reste-t-il ?",
      "Alice a 8 bonbons et elle en mange 4. Combien lui reste-t-il de bonbons ?",
      "Dans une boîte, il y a 15 bonbons. J'en mange 7. Combien en reste-t-il ?",
      "Pierre a 20 euros et il dépense 12 euros. Combien lui reste-t-il d'argent ?",
      "Si tu as 12 jouets et que tu en perds 4, combien t'en reste-t-il ?",
      "Emma a 15 crayons et elle en prête 3 à son ami. Combien lui en reste-t-il ?",
      "Marc a 18 cartes et en donne 4 à son frère. Combien lui en reste-t-il ?",
    ],
    [
      "Marie a 7 bonbons et elle en mange 2. Combien lui reste-t-il de bonbons ?",
      "Lucie a 10 billes et en trouve 3 de plus. Combien en a-t-elle maintenant ?",
      "Pierre a 3 livres et il en achète 2 de plus. Combien a-t-il de livres maintenant ?",
      "Dans une boîte, il y a 20 bonbons. J'en mange 6. Combien en reste-t-il ?",
      "Paul a 22 euros et il dépense 15 euros. Combien lui reste-t-il d'argent ?",
      "Si tu as 16 jouets et que tu en perds 7, combien t'en reste-t-il ?",
      "Sarah a 18 crayons et elle en prête 5 à son ami. Combien lui en reste-t-il ?",
      "Jean a 29 cartes et en donne 6 à son frère. Combien lui en reste-t-il ?",
    ],
    [
      "Marc a 5 pommes et donne 2 pommes à Paul. Combien de pommes lui reste-t-il ?",
      "Lucie a 7 bonbons et elle en mange 2. Combien lui reste-t-il de bonbons ?",
      "Paul a 3 livres et il en achète 2 de plus. Combien a-t-il de livres maintenant ?",
      "J'ai 8 cartes et j'en donne 4 à mon ami. Combien m'en reste-t-il ?",
      "Dans une boîte, il y a 25 bonbons. J'en mange 17. Combien en reste-t-il ?",
      "Si tu as 14 jouets et que tu en perds 6, combien t'en reste-t-il ?",
      "Emma a 21 crayons et elle en prête 4 à son ami. Combien lui en reste-t-il ?",
      "Pierre a 35 cartes et en donne 9 à son frère. Combien lui en reste-t-il ?",
    ],
  ];

  const allWordsToCopy = [
    [
      "Bonjour",
      "Excusez-moi",
      "Merci",
      "Sil vous plaît",
      "Chien",
      "Chat",
      "Maison",
      "Jardin",
      "École",
      "Crayon",
    ],
    [
      "Éléphant",
      "Banane",
      "Lion",
      "Pomme",
      "Montagne",
      "Oiseau",
      "Voiture",
      "Avion",
      "Rire",
      "Jeu",
    ],
    [
      "Bonjour",
      "Au revoir",
      "Maman",
      "Papa",
      "Train",
      "Vélo",
      "Bus",
      "Pleurer",
      "Rire",
      "Dormir",
    ],
  ];

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * 3); // Sélectionne un index aléatoire entre 0 et 2.

    setMathExercises(allMathExercises[randomIndex]);
    setWordProblems(allWordProblems[randomIndex]);
    setWordsToCopy(allWordsToCopy[randomIndex]);
  }, []);

  const handleChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password === "12345" || password === "passage12345") {
      setAuthenticated(true);
    } else {
      alert("Mot de passe incorrect");
    }
  };

  return authenticated ? (
    <div>
      <div>
        <h2>Exercices de mathématiques</h2>
        <ul>
          {mathExercises.map((exercise, index) => (
            <li key={index}>{exercise}</li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Problèmes à résoudre</h2>
        <ul>
          {wordProblems.map((problem, index) => (
            <li key={index}>{problem}</li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Mots en français à recopier</h2>
        <ul>
          {wordsToCopy.map((word, index) => (
            <li key={index}>{word}</li>
          ))}
        </ul>
      </div>
    </div>
  ) : (
    <form onSubmit={handleSubmit}>
      <input
        type="password"
        value={password}
        onChange={handleChange}
        placeholder="Entrer le mot de passe"
      />
      <input type="submit" value="Valider" />
    </form>
  );
};

export default ChildTasks;
