const NFTToken = artifacts.require("NFTToken");
const SaleToken = artifacts.require("SaleToken");

module.exports = async function (deployer) {
    // 세번째 매개변수가
    // http://localhost:3000/metadata 이런 json 파일이 있는 url
    await deployer.deploy(NFTToken, "MyNFT", "MFT", "/");
    // ㄴ> nftToken 배포를 진행
    const token = await NFTToken.deployed();
    // ㄴ> 배포된 인스턴스 가져오기
    await deployer.deploy(SaleToken, token.address);
    // ㄴ> 배포진행
    const saleToken = await SaleToken.deployed();
    // ㄴ> 배포된 인스턴스 가져오기
};
