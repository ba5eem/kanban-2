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
app.use(session({
  secret: 'something',
  resave: true,
  saveUninitialized: true
}))

// initialize passport
app.use(passport.initialize());
app.use(passport.session());
//Routes




app.get('/auth/facebook',
  passport.authenticate('facebook',{scope: ['email']}));

app.get('/auth/facebook/callback',
    passport.authenticate('facebook',  { successRedirect: '/profile',failureRedirect : '/failed'}),
    
    // on succes
    function(req,res) {
        // return the token or you would wish otherwise give eg. a succes message
        console.log('i got here which means success')
        res.json('sucess');
    },
    
    // on error; likely to be something FacebookTokenError token invalid or already used token,
    // these errors occur when the user logs in twice with the same token
    function(err,req,res,next) {
        // You could put your own behavior in here, fx: you could force auth again...
        // res.redirect('/auth/facebook/');
        if(err) {
            res.json('error', 'something went wrong - line 59 - user already exists');
        }
    }
);


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

app.get('/profile', (req,res)=>{
  console.log('profile page')
  res.json('profile page');
})

app.get('/failed', (req,res)=>{
    console.log('failed page')
  res.json('failed page');
})

app.get('*', ( req, res ) => {
  res.json('This page does not exist, 404 not found');
});

const server = app.listen(PORT,() => {
  db.sequelize.sync( { force: false } ); //this is to link with your DB defined in the config file - set to true to overwrite, set to false to not overwrite:
  console.log(`Server connected on PORT: ${PORT}`);
});