const ethAddresses = require('../../ethereum/db/wallet_addresses');
const eth = require('../../ethereum/helpers');

const projects = require('../example.js');

const profiles = [];
const projectsArray = [];

exports.seed = (knex, Promise) => knex('user_wallets').del()
  .then(() => knex('project_wallets').del())
  .then(() => knex('profiles').del())
  .then(() => knex('projects').del())
  .then(() => knex('donations').del())
  .then(() => knex('user_wallets').insert(ethAddresses.userWallets))
  .then(() => knex('project_wallets').insert(ethAddresses.projectWallets))
  .then(() => {
    const wallets = ethAddresses.userWallets.slice(1, 11);
    wallets.forEach((x, index) => {
      profiles.push({
        id: index,
        email: `f@l${index}`,
        profile_wallet: x.wallet_address,
        password: 'p',
        debit: '100000',
      });
      eth.fundFromMint(100000, x.wallet_address);
    });
    return knex('profiles').insert(profiles);
  })
  .then(() => {
    const wallets = ethAddresses.projectWallets.slice(0, 10);
    wallets.forEach((x, index) => {
      projectsArray.push({
        id: index,
        profile_id: index + 1,
        title: projects[index % projects.length].title,
        description: projects[index % projects.length].description.substr(0, 255),
        goal: projects[index % projects.length].goal,
        project_wallet: x.wallet_address,
        image: projects[index % projects.length].image,
      });
    });
    return knex('projects').insert(projectsArray);
  })
  .then(() => {
    const txHashes = [];
    for (let i = 0; i < 10; i += 1) {
      const profile_wallet = profiles[i].profile_wallet;
      const project_wallet = projectsArray[i].project_wallet;
      const txhash = eth.sendTransaction(Math.random() * 90000 | 0, profile_wallet, project_wallet);
      txHashes.push({
        id: i,
        profile_id: i + 1,
        project_id: i,
        txhash,
      });
    }
    console.log(txHashes);
    return knex('donations').insert(txHashes);
  });
