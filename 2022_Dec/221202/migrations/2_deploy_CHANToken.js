const CHANToken = artifacts.require("CHANToken");

module.exports = function(deployer) {
    deployer.deploy(CHANToken, "ChanToken", "CTK", 10000)
}