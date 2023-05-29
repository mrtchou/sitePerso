import React from "react";

const MathExercise = () => (
  <div>
    <h2>Exercices de Mathématiques</h2>
    {/* Vous pouvez ajouter ici les vrais exercices */}
    <p>Addition : 5 + 5 = ?</p>
    <p>Soustraction : 10 - 3 = ?</p>
    <p>Multiplication : 2 * 3 = ?</p>
  </div>
);

const ProblemExercise = () => (
  <div>
    <h2>Exercices de Problèmes</h2>
    {/* Vous pouvez ajouter ici les vrais exercices */}
    <p>Si tu as 10 pommes et que tu en manges 2, combien t'en reste-t-il ?</p>
  </div>
);

const WritingExercise = () => (
  <div>
    <h2>Exercices d'Écriture</h2>
    {/* Vous pouvez ajouter ici les vrais exercices */}
    <p>Recopier ce texte : "Le chat est dans la maison."</p>
  </div>
);

const ChildTasks = () => (
  <div>
    <MathExercise />
    <ProblemExercise />
    <WritingExercise />
  </div>
);

export default ChildTasks;
