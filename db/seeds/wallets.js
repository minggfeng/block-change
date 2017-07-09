const Web3 = require('web3');
const EthUtil = require('ethereumjs-util');

const PORT = 8545;
const web3 = new Web3(new Web3.providers.HttpProvider(`http://localhost:${PORT}`));


// Wallet address helper functions

const hexToBytes = (hex) => {
  const bytes = [];
  for (let c = 0; c < hex.length; c += 2) {
    bytes.push(parseInt(hex.substr(c, 2), 16));
  }
  return bytes;
};

const privateKeyToAddress = privateKey =>
  `0x${EthUtil.privateToAddress(hexToBytes(privateKey)).toString('hex')}`;


// SEED FILE

exports.seed = (knex, Promise) => {
  const userWallets = [];
  const projectWallets = [];

  for (let i = 0; i < 100; i += 1) {
    userWallets.push({
      profile_id: -1,
      wallet_address: privateKeyToAddress(web3.sha3(`userPrivateKey${i}`).substr(2, 64)),
    });
    projectWallets.push({
      project_id: -1,
      wallet_address: privateKeyToAddress(web3.sha3(`projectPrivateKey${i}`).substr(2, 64)),
    });
  }

  return knex('user_wallets').del()
    .then(() => knex('project_wallets').del())
    .then(() => knex('user_wallets').insert(userWallets))
    .then(() => knex('project_wallets').insert(projectWallets));
};
