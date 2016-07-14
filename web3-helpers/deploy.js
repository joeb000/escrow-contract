var _key2 = /* var of type address here */ ;
var _key3 = /* var of type address here */ ;
var _date = /* var of type uint256 here (UNIX TIMESTAMP) */ ;
var escrowContract = web3.eth.contract([{"constant":true,"inputs":[],"name":"key3","outputs":[{"name":"","type":"address"}],"type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"withdrawRequests","outputs":[{"name":"","type":"bool"}],"type":"function"},{"constant":true,"inputs":[],"name":"key2","outputs":[{"name":"","type":"address"}],"type":"function"},{"constant":true,"inputs":[],"name":"key1","outputs":[{"name":"","type":"address"}],"type":"function"},{"constant":true,"inputs":[],"name":"expirationDate","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[],"name":"requestWithdrawl","outputs":[],"type":"function"},{"constant":false,"inputs":[],"name":"expirationWithdraw","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"_requestorAddress","type":"address"}],"name":"confirmWithdraw","outputs":[],"type":"function"},{"inputs":[{"name":"_key2","type":"address"},{"name":"_key3","type":"address"},{"name":"_date","type":"uint256"}],"type":"constructor"}]);
var escrow = escrowContract.new(
   _key2,
   _key3,
   _date,
   {
     from: web3.eth.accounts[0],
     data: '606060405260405160608061068d833981016040528080519060200190919080519060200190919080519060200190919050505b33600060006101000a81548173ffffffffffffffffffffffffffffffffffffffff0219169083021790555082600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff0219169083021790555081600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff02191690830217905550806003600050819055505b5050506105bd806100d06000396000f36060604052361561008a576000357c010000000000000000000000000000000000000000000000000000000090048063513ddfc01461008c57806352df49ec146100c55780636199e3c2146100f357806365bb48ab1461012c5780638f620487146101655780639904caad14610188578063c986ce2b14610197578063d2bfc1c7146101a65761008a565b005b61009960048050506101be565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6100db60048080359060200190919050506101e4565b60405180821515815260200191505060405180910390f35b6101006004805050610209565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b610139600480505061022f565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6101726004805050610255565b6040518082815260200191505060405180910390f35b610195600480505061025e565b005b6101a460048050506103ab565b005b6101bc6004808035906020019091905050610428565b005b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600460005060205280600052604060002060009150909054906101000a900460ff1681565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60036000505481565b600060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614806103075750600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16145b8061035f5750600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16145b156103a8576001600460005060003373ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908302179055505b5b565b60036000505442111561042557600060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1660003073ffffffffffffffffffffffffffffffffffffffff1631604051809050600060405180830381858888f19350505050505b5b565b600060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614806104d15750600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16145b806105295750600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16145b156105b957600460005060008273ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16156105b8578073ffffffffffffffffffffffffffffffffffffffff1660003073ffffffffffffffffffffffffffffffffffffffff1631604051809050600060405180830381858888f19350505050505b5b5b5056',
     gas: 4700000
   }, function (e, contract){
    console.log(e, contract);
    if (typeof contract.address !== 'undefined') {
         console.log('Contract mined! address: ' + contract.address + ' transactionHash: ' + contract.transactionHash);
    }
 })
