const Voting = artifacts.require("Voting");

module.exports = function (deployer) {
    deployer.deploy(Voting, ["종화", "하양", "찬"]);
};
