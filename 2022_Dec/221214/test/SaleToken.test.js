const NFTToken = artifacts.require("NFTToken");
const SaleToken = artifacts.require("SaleToken");
let token, saleToken;

describe("SaleToken deployment", () => {
    it("deployed", async () => {
        token = await NFTToken.deployed();
        saleToken = await SaleToken.deployed();

        console.log("token CA :", token.address);
        console.log("saleToken CA :", saleToken.address);
    });
});
