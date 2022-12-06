const ChanToken = artifacts.require("ChanToken");
const EthSwap = artifacts.require("EthSwap");

module.exports = async function (deployer) {
    // ChanToken 먼저 배포 진행
    await deployer.deploy(ChanToken);
    // 배포된 인스턴스 가져오기
    const token = await ChanToken.deployed();
    // token.address // 배포된 컨트랙트의 CA값을 가져올 수 있다.

    // 배포한 ChanToken 컨트랙트의 CA값을 매개변수로 전달해서 EthSwap 컨트랙트 배포
    await deployer.deploy(EthSwap, token.address);
    await EthSwap.deployed();
}