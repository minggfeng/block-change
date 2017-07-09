exports.up = (knex, Promise) => Promise.all([
  knex.schema.createTableIfNotExists('project_wallets', (table) => {
    table.string('wallet_address').notNullable();
    table.integer('project_id').notNullable();
  }),
  knex.schema.createTableIfNotExists('user_wallets', (table) => {
    table.string('wallet_address').notNullable();
    table.integer('profile_id').notNullable();
  }),
]);

exports.down = (knex, Promise) => Promise.all([
  knex.schema.dropTable('project_wallets'),
  knex.schema.dropTable('user_wallets'),
]);
