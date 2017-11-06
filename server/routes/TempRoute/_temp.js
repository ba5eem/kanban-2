//jshint esversion: 6
const express                 = require('express');
const app                     = express();
const passport                = require('passport');
const bcrypt                  = require('bcrypt');
const LocalStrategy           = require('passport-local').Strategy;
const saltRounds              = 12;
const _temp                   = express.Router();
const db                      = require('../../models');
const {ModelName}             = db;

_temp.get('/', ( req, res ) => {
  console.log('_temp route has been requested: GET ');
  res.json("Hello you have reached your temp defined route, your DB is not currently setup so if your check your server iterm window, you will see many errors reflecting that, setup your DB, ensure your config file is setup properly - :) - oh and it took me two hours to setup this starter pack customized the way you like - so your welcome - I just saved you two hours :)");
  ModelName.findAll({raw:true})
  .then((DataCollection) => {
    console.log('_temp route has queried all data from the DB, result: ', DataCollection);
    //res.json(DataCollection); when DB is setup un-comment in mean time:
  });
});

_temp.post('/post', ( req, res ) => {
  console.log('_temp route has been requested: POST ');
  ModelName.create({
    username : req.body.username,
    password : req.body.password,
    email    : req.body.email,
    avatar   : req.body.avatar
  }).then((data) => {
    console.log('_temp route has posted new data to the DB, result: ', data);
    res.json(data);
  });
});

_temp.get('/:id', ( req, res ) => {
  console.log('_temp ID route has been requested: GET ');
  let id = req.params.id;
  console.log('_temp.get/:id :', id);
  ModelName.findById(id)
  .then((data) => {
    console.log('_temp ID route has been requested:, result: ', data);
    res.json(data);
  });
});

_temp.put('/:id', ( req, res ) => {
  console.log('_temp ID route has been requested: PUT ');
  let id = req.params.id;
  console.log('_temp.put/:id :', id);
  let data = req.body;
  console.log('_temp.put/:id data :', data);
  return ModelName.findById(id)
  .then(data => {
    return ModelName.update(data, {
      where     : [{id: id}],
      returning : true,
      plain     : true
    }).then(data => {
      console.log('_temp ID route has been updated:, result: ', data);
      return res.json(data);
    })
  })
});

_temp.delete('/:id', ( req, res ) => {
  console.log('_temp ID route has been requested: DELETE ');
  let id = req.params.id;
  console.log('_temp.delete/:id :', id);
  let data = req.body;
  console.log('_temp.delete/:id data :', data);
  ModelName.destroy({
      where     : [{id: id}],
      returning : true,
      plain     : true
    }).then((data) => {
      console.log('_temp ID route has been updated:, result: ', data);
      return res.json(data);
  })
});

module.exports = _temp;

//Jesses example:
/*route.get('/tasks', (req, res)=>{
  return tasks.findAll({
    include: [{ model: users, as: 'Creator' },
    {model: users, as: 'Dev' }]
  }).then((cards)=>{
    return res.json(cards);
  })*/

  //Jesses example:
/*route.get('/users', (req, res)=>{
  return users.findAll({
    include: [{ model: tasks, as: 'Cards' },
    {model: tasks, as: 'Tasks' }]
  }).then((cards)=>{
    return res.json(cards);
  })*/














