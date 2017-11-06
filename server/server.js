const express         = require('express');
const session         = require('express-session');
const bodyParser      = require('body-parser');
const methodOverride  = require('method-override');
const passport        = require('passport');
const bcrypt          = require('bcrypt');
const routes          = require('./routes');
const path            = require('path');
const db              = require('./models');
const {ModelName}     = db;
const Redis           = require('connect-redis')(session);
const LocalStrategy   = require('passport-local').Strategy;
const saltRounds      = 12;
const PORT            = process.env.PORT || 3000;
const app             = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));
app.use(methodOverride('_method'));
//Authentication:
app.use(session({secret: 'keyboard cat', resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());
app.use('/api', routes);

//FOR AUTHENTICATION CODE SEE /HELPERS/AUTH/Auth.js - you can copy and paste it in here: 

app.get('/', ( req, res ) =>{
  console.log('GET request on landing page has been made');
  res.json('Smoke Test');
});

app.get('*', ( req, res ) => {
  console.log('GET request on landing page has been made on * url');
  res.json('This page does not exist, change code to redirect on the request to your preffered landing page');
});

const server = app.listen(PORT,() => {
  //db.sequelize.sync( { force: true } ); //this is to link with your DB defined in the config file - set to true to overwrite, set to false to not overwrite: 
  console.log(`You entered the Matrix on PORT: ${PORT}`);
});









