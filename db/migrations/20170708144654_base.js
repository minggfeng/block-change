
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTableIfNotExists('profiles', function(table) {
      table.increments('id').unsigned().primary();
      table.string('email', 100).notNullable().unique();
      table.string('wallet_address', 255).notNullable().unique();
      table.string('password').notNullable();
    }),
    knex.schema.createTableIfNotExists('projects', function(table) {
      table.increments('id').unsigned().primary();
      table.integer('profile_id');
      table.string('title');
      table.string('description');
      table.integer('goal');
      table.string('image');
    }),
    knex.schema.createTableIfNotExists('donations', function(table) {
      table.increments('id').unsigned().primary();
      table.integer('profile_id');
      table.integer('project_id');
      table.string('txhash');
    }),
  ])

};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('donations'),
    knex.schema.dropTable('projects'),
    knex.schema.dropTable('profiles')
  ]);
};
