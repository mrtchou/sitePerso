const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcryptjs"); // Pour le hachage du mot de passe
const { User } = require("./models");

passport.use(
  new LocalStrategy(function (username, password, done) {
    User.findOne({ where: { username: username } })
      .then((user) => {
        if (!user) {
          return done(null, false, { message: "Incorrect username." });
        }
        if (!bcrypt.compareSync(password, user.password)) {
          return done(null, false, { message: "Incorrect password." });
        }
        return done(null, user);
      })
      .catch(done);
  })
);

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  User.findByPk(id)
    .then((user) => {
      done(null, user);
    })
    .catch(done);
});
