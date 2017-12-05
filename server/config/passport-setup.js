const passport         = require('passport');
const FacebookStrategy = require('passport-facebook');
const keys             = require('./env.keys.js');
const db               = require('../models');
const {user}           = db;

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
    callbackURL: keys.facebook.callback,
    profileFields: ['id', 'displayName', 'location', 'email','picture']
  },
  function(accessToken, refreshToken, profile, cb) {
    console.log(profile);
    console.log(profile.id);
    console.log(profile.username)
    console.log(profile.displayName);
    console.log(profile.email);
    console.log(profile.givenName);
    console.log(profile.middleName);
    let id = parseInt(profile.id);
    console.log(id);
    user.findOne({where: {id:id}}).then((currentUser) =>{
          if(currentUser){
            //already have this user
            console.log('user already exists****************');
            done(null, currentUser);
          }
        })
        db.user.create({
          displayName: profile.displayName,
          location: 'hi',
          email: 'emila',
          picture: 'pic'
        }).then((newUser)=>{
            console.log('new user ****************');
            done(null, newUser);
        })
  }
));