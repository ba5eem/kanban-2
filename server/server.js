const express         = require('express');
const session         = require('express-session');
const cookieSession   = require('cookie-session');
const bodyParser      = require('body-parser');
const passport        = require('passport');
const passportSetup   = require('./config/passport-setup');
const bcrypt          = require('bcrypt');

const path            = require('path');
const db               = require('./models');
const {user}           = db;
const keys            = require('./config/env.keys.js');
const Redis           = require('connect-redis')(session);
const cors            = require('cors')
const saltRounds      = 12;
const PORT            = process.env.PORT || 8080;
const app             = express();


//need this for deployment
//app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
//Authentication:
// set up session cookies
app.use(cookieSession({
  maxAge: 24*60*60*1000,
  keys: [keys.session.cookieKey]
}))

// initialize passport
app.use(passport.initialize());
app.use(passport.session());
//Routes




app.get('/auth/facebook',
  passport.authenticate('facebook'));

app.get('/auth/facebook/callback',
  passport.authenticate('facebook', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  });


app.get('/', ( req, res ) =>{
  user.create({
    displayName: 'baseem',
    location: 'hi',
    email:'test@test.io',
    picture:'pic'
  }).then((user)=>{
    res.json(user)
  })

});

app.get('*', ( req, res ) => {
  res.json('This page does not exist, 404 not found');
});

const server = app.listen(PORT,() => {
  db.sequelize.sync( { force: false } ); //this is to link with your DB defined in the config file - set to true to overwrite, set to false to not overwrite:
  console.log(`Server connected on PORT: ${PORT}`);
});