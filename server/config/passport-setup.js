const passport         = require('passport');
const GoogleStrategy   = require('passport-google-oauth2').Strategy;
const keys             = require('./keys');
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


passport.use(
    new GoogleStrategy({
        // options for google strategy
        clientID: keys.google.clientID,
        clientSecret: keys.google.clientSecret,
        callbackURL: 'http://localhost:8080/auth/google/redirect'
    }, (accessToken, refreshToken , profile, done) => {
        // passport callback function
        user.findOne({where: {googleid:profile.id}}).then((currentUser) =>{
          if(currentUser){
            //already have this user
            console.log('user already exists****************');
            done(null, currentUser);
          }
        })
        db.user.create({
          username: profile.displayName,
          googleid: profile.id,
          phonenumber: "8081234567",
          image: profile._json.image.url
        }).then((newUser)=>{
            console.log('new user ****************');
            done(null, newUser);
        })
    })
);
