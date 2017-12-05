const passport         = require('passport');
const FacebookStrategy = require('passport-facebook');
const keys             = require('./env.keys.js');
const db               = require('../models');
const {user}           = db;

passport.serializeUser((user, done) => {
  console.log('Baseem - step 2 - serializing ')
  console.log(user);
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
  console.log('deserializing shit')
  console.log(id);
    user.findById(id).then((user) => {
      console.log(user)
        done(null, user);
    });
});
const fbOptions = {
    clientID: keys.facebook.FACEBOOK_APP_ID,
    clientSecret: keys.facebook.FACEBOOK_APP_SECRET,
    callbackURL: keys.facebook.callback,
    profileFields: ['id', 'displayName', 'location', 'email','picture']
  };


const fbCallBack = function(accessToken, refreshToken, profile, cb){
    console.log(profile);
    console.log('baseem - step 1')
    let id = profile.id;
    user.findOne({where: {facebookId: id}})
    .then((member) =>{
      if(member === null){
        user.create({
          facebookId: profile.id,
          displayName: profile.displayName,
          email: profile.emails[0].value || 'email not found',
          picture: 'photo uri' //profile.photos[0].value
        },{
        returning: true,
        plain: true
        }).then((member))
        console.log('i created a user, now i will return the callback with the user')
        console.log(member);
        console.log("********************************************************************************************************");
        return cb(null,member);
      }//END OF USER DOESNT EXIST CONDITION
      else{
        console.log("********************************************************************************************************");
        console.log('user already exists, now I will return the cb with the found user')
        console.log(member);
        console.log("********************************************************************************************************");
        return cb(null,member)
      }
    })   
}


passport.use(new FacebookStrategy(fbOptions,fbCallBack));





// const fbCallBack = function(accessToken, refreshToken, profile, cb){
//     console.log(profile);
//     user.findOrCreate({where:{ 
//       facebookId: profile.id,
//       displayName: profile.displayName,
//       email: profile.email }})
//     .then((err,user)=>{
//       return cb(err,user);
//     })  
// }
