//jshint esversion: 6
const express     = require('express');
const app         = express();
const route  = express.Router();
const _temp       = require('./TempRoute/_temp.js');
const auth       = require('./auth.js');

route.use('/temp', _temp);
route.use('/auth', auth);

module.exports = route;