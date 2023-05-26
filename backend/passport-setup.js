const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcryptjs"); // Pour le hachage du mot de passe
const { User } = require("./models");

// Utilisation de la stratégie de connexion locale avec Passport
passport.use(
  new LocalStrategy(function (username, password, done) {
    // Recherche de l'utilisateur dans la base de données
    User.findOne({ where: { username: username } })
      .then((user) => {
        if (!user) {
          return done(null, false, { message: "Incorrect username." });
        }
        // Comparaison du mot de passe entré avec le mot de passe haché stocké dans la base de données
        if (!bcrypt.compareSync(password, user.password)) {
          return done(null, false, { message: "Incorrect password." });
        }
        // Authentification réussie, renvoie l'utilisateur
        return done(null, user);
      })
      .catch(done);
  })
);

// Sérialisation de l'utilisateur dans la session
passport.serializeUser(function (user, done) {
  done(null, user.id);
});

// Désérialisation de l'utilisateur à partir de la session
passport.deserializeUser(function (id, done) {
  // Recherche de l'utilisateur dans la base de données en utilisant l'identifiant
  User.findByPk(id)
    .then((user) => {
      done(null, user);
    })
    .catch(done);
});
