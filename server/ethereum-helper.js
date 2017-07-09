var Web3 = require('web3');
var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

var balance = (acct) => {
  return web3.fromWei(web3.eth.getBalance(acct), 'ether').toNumber();
}

