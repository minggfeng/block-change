exports.up = (knex, Promise) => Promise.all([
  knex.schema.createTableIfNotExists('profiles', (table) => {
    table.increments('id').unsigned().primary();
    table.string('email', 100).notNullable().unique();
    table.string('profile_wallet', 255).notNullable().unique();
    table.string('password').notNullable();
  }),
  knex.schema.createTableIfNotExists('projects', (table) => {
    table.increments('id').unsigned().primary();
    table.integer('profile_id').notNullable();
    table.string('title').notNullable();
    table.string('description').notNullable();
    table.integer('goal').notNullable();
    table.string('project_wallet', 255).notNullable();
    table.string('image').nullable();
  }),
  knex.schema.createTableIfNotExists('donations', (table) => {
    table.increments('id').unsigned().primary();
    table.integer('profile_id').notNullable();
    table.integer('project_id').notNullable();
    table.string('txhash').notNullable();
  }),
]);

exports.down = (knex, Promise) => Promise.all([
  knex.schema.dropTable('donations'),
  knex.schema.dropTable('projects'),
  knex.schema.dropTable('profiles'),
]);

