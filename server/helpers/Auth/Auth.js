/*AUTHENTICATION*/
passport.serializeUser((user, done) => {
  console.log('serializing', user);
  return done(null, {
    id: user.id,
    username : user.username
  });
});

passport.deserializeUser((user, done) => {
  console.log('deserializing', user);
  db.users.findOne({ where : { id : user.id} })
    .then(user => {
      return done(null, {
        id: user.id,
        username : user.username
      });
    });
});

passport.use(new LocalStrategy(function(username, password, done) {
  db.users.findOne({ where : { username : username }})
    .then(user => {
      if (user === null) {
        return done(null, false, { message : 'bad username or password' });
      }
      else {
        bcrypt.compare(password, user.password)
          .then(res => {
            // res 'basically' tells you TRUE or FALSE
            if (res) { return done(null, user); }
            else {
              return done(null, false, { message : 'bad username or password'});
            }
          });
      }
    })
    .catch(err => { console.log('error : ', err); });
}));

module exports = passport;
//this might not work - please include in server.js before all GETs - order matters - look at message bored for a working example