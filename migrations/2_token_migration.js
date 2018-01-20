var TCRToken = artifacts.require("./TCRToken.sol");
//var QuantstampSale = artifacts.require("./QuantstampSale.sol");

module.exports = function(deployer, network, accounts) {
    console.log("Accounts: " + accounts);
    //deployer.deploy(TCRToken, );
    //var time = new Date().getTime() / 1000;
    //var monkey = 1234;
    deployer.deploy(TCRToken, accounts[1]);
    /*deployer.deploy(QuantstampToken, accounts[1]).then(function() {
        return deployer.deploy(QuantstampSale, accounts[1], 10, 20, 1, time, 2, 5000, QuantstampToken.address);
    });*/

};