
exports.up = (knex, Promise) => Promise.all([
  knex.schema.createTableIfNotExists('profiles', (table) => {
    table.increments('id').unsigned().primary();
    table.string('email', 100).notNullable().unique();
    table.string('wallet_address', 255).notNullable().unique();
    table.string('password').notNullable();
  }),
  knex.schema.createTableIfNotExists('projects', (table) => {
    table.increments('id').unsigned().primary();
    table.integer('profile_id');
    table.string('title');
    table.string('description');
    table.integer('goal');
    table.string('image');
  }),
  knex.schema.createTableIfNotExists('donations', (table) => {
    table.increments('id').unsigned().primary();
    table.integer('profile_id');
    table.integer('project_id');
    table.string('txhash');
  }),
]);

exports.down = (knex, Promise) => Promise.all([
  knex.schema.dropTable('donations'),
  knex.schema.dropTable('projects'),
  knex.schema.dropTable('profiles'),
]);
