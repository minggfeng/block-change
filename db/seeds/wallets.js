const ethAddresses = require('../../ethereum/db/wallet_addresses');

exports.seed = (knex, Promise) => knex('user_wallets').del()
  .then(() => knex('project_wallets').del())
  .then(() => knex('user_wallets').insert(ethAddresses.userWallets))
  .then(() => knex('project_wallets').insert(ethAddresses.projectWallets));
