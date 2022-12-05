const FruitsToken = artifacts.require("FruitsToken");

module.exports = function(deployer) {
    deployer.deploy(FruitsToken, "FruitsToken", "FTK", 10000)
}