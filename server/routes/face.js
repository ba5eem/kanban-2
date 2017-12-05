const express          = require('express');
const app              = express();
const route            = express.Router();
const passport         = require('passport');
const passportSetup    = require('../config/passport-setup');



// auth login
route.get('/login', (req, res) => {
    res.json('facebook login');
});

// auth logout
route.get('/logout', (req, res) => {
  //handle with passport
  res.json('logging out');
});

// auth with google+

route.get('/auth/facebook',
  passport.authenticate('facebook'));

route.get('/auth/facebook/callback',
  passport.authenticate('facebook', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  });









module.exports = route;
