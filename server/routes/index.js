//jshint esversion: 6
const express     = require('express');
const app         = express();
const indexRoute  = express.Router();
const _temp       = require('./TempRoute/_temp.js');

indexRoute.use('/temp', _temp);

module.exports = indexRoute;