var Web3 = require('web3');
var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

/*addr is wallet address*/
var balance = (addr) => {
  return web3.fromWei(web3.eth.getBalance(addr), 'ether').toNumber();
}

var sendTransaction = (addr1, addr2) => {
  return web3.eth.sendTransaction({
    from: addr1, to: addr2, value: web3.toWei(10, 'ether'), gasLimit: 21000, gasPrice: 2000000000
  })
}

