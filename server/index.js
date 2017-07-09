'use strict';

const app = require('./app');
const db = require('../db');

const PORT = process.env.PORT || 9000;

app.listen(PORT, () => {
  console.log('block-change listening on port 9000!');
});
