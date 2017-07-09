const TestRPC = require('ethereumjs-testrpc');
const Web3 = require('web3');

// Replace with DB data

const PORT = 8545;
const web3 = new Web3(new Web3.providers.HttpProvider(`http://localhost:${PORT}`));

const hexToBytes = (hex) => {
  const bytes = [];
  for (let c = 0; c < hex.length; c += 2) {
    bytes.push(parseInt(hex.substr(c, 2), 16));
  }
  return bytes;
};

const accounts = [
  { balance: 100, secretKey: 'hello' },
  { balance: 200, secretKey: 'hello1' },
  { balance: 10000, secretKey: 'hello2' },
  { balance: 5000, secretKey: 'hello3' },
  { balance: 1000, secretKey: 'hello4' },
  { balance: 1000, secretKey: 'hello5' },
  { balance: 1000, secretKey: 'hello6' },
  { balance: 1000, secretKey: 'hello7' },
  { balance: 1000, secretKey: 'hello8' },
  { balance: 10000, secretKey: 'hello9' },
];

const newAccounts = accounts.map((obj) => {
  const balance = web3.toWei(obj.balance, 'ether');
  const secretKey = web3.sha3(obj.secretKey);
  console.log(' secretKey: ', secretKey);
  console.log(secretKey.length);
  return { balance, secretKey };
});

// const server = TestRPC.server();
const server = TestRPC.server({ accounts: newAccounts });

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

