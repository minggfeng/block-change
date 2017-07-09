'use strict';

const express = require('express');
const path = require('path');
const middleware = require('./middleware');

const app = express();

app.use(middleware.morgan('dev'));
app.use(middleware.bodyParser.urlencoded({ extended: false }));
app.use(middleware.bodyParser.json());

app.use(express.static(path.join(__dirname, '../public/dist')));


app.get('/*', (req, res) => {
  res.status(404).send(`Resource not found '${req.params.bad}'`);
});

module.exports = app;
