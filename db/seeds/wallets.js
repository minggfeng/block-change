const ethAddresses = require('../../ethereum/db/wallet_addresses');

const projects = require('../example.js');

exports.seed = (knex, Promise) => knex('user_wallets').del()
  .then(() => knex('project_wallets').del())
  .then(() => knex('profiles').del())
  .then(() => knex('projects').del())
  .then(() => knex('user_wallets').insert(ethAddresses.userWallets))
  .then(() => knex('project_wallets').insert(ethAddresses.projectWallets))
  .then(() => {
    const wallets = ethAddresses.userWallets.slice(1, 11);
    const profiles = [];
    wallets.forEach((x, index) => {
      profiles.push({
        id: index,
        email: `f@l${index}`,
        profile_wallet: x.wallet_address,
        password: 'p',
        debit: '100000',
      });
    });
    return knex('profiles').insert(profiles);
  })
  .then(() => {
    const wallets = ethAddresses.projectWallets.slice(1, 11);
    const projectsArray = [];
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
  });
