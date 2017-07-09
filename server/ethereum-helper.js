var Web3 = require('web3');
var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

var balance = (acct) => {
  return web3.fromWei(web3.eth.getBalance(acct), 'ether').toNumber();
}

var sendTransaction = (acct1, acct2) => {
  return web3.eth.sendTransaction({
    from: acct1, to: acct2, value: web3.toWei(10, 'ether'), gasLimit: 21000, gasPrice: 2000000000
  })
}