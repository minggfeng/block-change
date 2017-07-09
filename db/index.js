const knex = require('knex')(require('../knexfile').development);
const db = require('bookshelf')(knex);


module.exports = db;
