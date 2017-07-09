'use strict';

const express = require('express');
const path = require('path');
const middleware = require('./middleware');
const db = require('../db');
const routes = require('./routes');
const knex = require('knex')(require('../knexfile'));


const app = express();

app.use(middleware.morgan('dev'));
app.use(middleware.bodyParser.urlencoded({ extended: false }));
app.use(middleware.bodyParser.json());
app.use(middleware.bodyParser({ limit: '50mb' }));

app.use(express.static(path.join(__dirname, '../public/dist')));

app.get('/fetchProjects', (req, res) => {
  db.knex.select().from('projects')
  .then((data) => {
    res.send(data);
  })
  .catch((err) => { console.log(err); });
});

app.use('/projects', routes.projects);
app.use('/user', routes.user);

app.get('/*', (req, res) => {
  res.status(404).send(`Resource not found '${req.params.bad}'`);
});

module.exports = app;
