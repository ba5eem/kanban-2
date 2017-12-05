//jshint esversion: 6
const express     = require('express');
const app         = express();
const route  = express.Router();
const _temp       = require('./TempRoute/_temp.js');
const auth       = require('./auth.js');
const face       = require('./face.js');


route.use('/temp', _temp);
route.use('/auth', auth);
route.use('/face', face);

module.exports = route;