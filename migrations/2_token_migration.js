var TCRToken = artifacts.require("./TCRToken.sol");
var TCRSale = artifacts.require("./TCRSale.sol");

module.exports = function(deployer, network, accounts) {
    console.log("Accounts: " + accounts);
    //deployer.deploy(TCRToken, );
    //var time = new Date().getTime() / 1000;
    //var monkey = 1234;
    //deployer.deploy(TCRToken, accounts[1]);
    const admin = accounts[1];
    const fundingMin = 1; // In Ether
    const fundingCap = 2800; // 28,000,000 tokens / 10,000 rate = 2800 Ether
    const minContribution = 0.01 * Math.pow(10, 18);
    const rate = 10000;
    // Testing Dates
    const startTime = new Date().getTime() / 1000;
    const endTime =  startTime + (86400 * 15); // 15 days

    // Live dates
    //const startTime = new Date('Wed, 28 Mar 2018 00:00:00 GMT').getUnixTime();
    //const endTime = new Date('Fri, 28 Sep 2018 00:00:00 GMT').getUnixTime();

    deployer.deploy(TCRToken, admin).then(function() {
        return deployer.deploy(TCRSale, admin, fundingMin, fundingCap, minContribution, startTime, endTime, rate, TCRToken.address);
    });

};