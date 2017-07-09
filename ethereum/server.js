const TestRPC = require('ethereumjs-testrpc');
const ethAddresses = require('./db/wallet_addresses');

const PORT = 8545;

const server = TestRPC.server({
  accounts: ethAddresses.userKeys,
  logger: console,
  // db_path: './ethereum/data',
});

server.listen(PORT, (err, blockchain) => {
  if (err) {
    console.warn(err);
  } else {
    const accountsObj = blockchain.accounts;
    for (const account in accountsObj) {
      console.log('------------');
      console.log('account: ', account);
      const fields = ['publicKey', 'secretKey'];
      fields.forEach(field => console.log(field, ': ', accountsObj[account][field].toString('hex')));
      console.log('balance: ', accountsObj[account].account.balance.toString('hex'));
    }
  }
});
