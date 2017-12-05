const passport         = require('passport');
const FacebookStrategy = require('passport-facebook');
const keys             = require('./env.keys.js');
const db               = require('../models');
const {User}           = db;

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    user.findById(id).then((user) => {
        done(null, user);
    });
});


passport.use(new FacebookStrategy({
    clientID: keys.facebook.FACEBOOK_APP_ID,
    clientSecret: keys.facebook.FACEBOOK_APP_SECRET,
    callbackURL: "http://localhost:3000/auth/facebook/callback",
    profileFields: ['id', 'displayName', 'photos', 'email']
  },
  function(accessToken, refreshToken, profile, cb) {
    User.findOrCreate({ facebookId: profile.id }, function (err, user) {
      return cb(err, user);
    });
  }
));