/* ERC20 토큰 편하게 만들어보기!
(https://goerlifaucet.com/)

오픈제플린을 사용해서 토큰의 표준 인터페이스를 가져와서 사용할 수 있다.
ERC20을 직접 작성했는데,
직접 작성하는것이 아니고 설치 받아서 편하게 사용해보자.
표준 규격이 있기 때문에 이미 만들어져있는 것을 사용하면 됨

package.json 만들기
// npm init -y

오픈제플린 설치
// npm install openzeppelin-solidity

트러플 초기화
// npx truffle init

truffle-config.js 파일 수정

contracts 폴더에 ChanToken.sol, EthSwap.sol 생성 및 작성

migrations 폴더에 2_deploy_EthSwap.js 생성 및 작성

ganache 실행
// npx ganache-cli --chainId 7722 --networkId 7722
배포 진행
// npx truffle migration

NFT 발행할때 쓸 클라우드
https://www.pinata.cloud/

*/
/*
Ganache CLI v6.12.2 (ganache-core: 2.13.2)

Available Accounts
==================
(0) 0xcEE38dC0c870C0aC833ed6B12390dEFa1DbD49B5 (100 ETH)
(1) 0x0952b44f2e6F54403E2d3bC5Ad09dDfd3429E98c (100 ETH)
(2) 0x22633710Dff544B403C6e015daf9e429C4E28919 (100 ETH)
(3) 0xbdCD1f16C03C4B80116349a0daf751dB1f897E99 (100 ETH)
(4) 0x8388DEabAeb31938677F0F9735a3F336Ca00077c (100 ETH)
(5) 0xf7F065645cc8dbE362519820A0d4Af61F952DA13 (100 ETH)
(6) 0x383C07fC7d036B4B934ac66D06bbaAab893Ae60E (100 ETH)
(7) 0x0396e119BF0F7f3A15F46a25f2e0Ec3Dabfe54c5 (100 ETH)
(8) 0xf441B881F61611D5aC8533f58489cd18F4F98471 (100 ETH)
(9) 0x294F277D0a1B4c369aafee151277Fc968D3F0544 (100 ETH)

Private Keys
==================
(0) 0xee5c02a0a5009253de0d4c1b1762ef830a704be2e70cfe44544b663e18173339
(1) 0x8ff6bd7256ddada4273b39cbb7da4e42f7b14d5b508094b6a830ef18b0d94f3c
(2) 0x033e1003875205c742d9965f41edd942b429fa992799e97334c94751d404e797
(3) 0x3a11f0113ecc6d78da5d605c6fff47ba830d393a6061a2caca92e5691cb97026
(4) 0xd7225a910e7f90422fddceb115bbadcbbd41dbd4569d59d00401f998faa876ed
(5) 0x53f8543468cff820398d94c3e6df54364fd44570f8d5c6ef616f9c49a633c6b1
(6) 0xa302944a59af66927c9191255a27085e71dc6ab0df15a665a6736f167d9e36dc
(7) 0x9ffa329750888a0eb17f055c853b2cd4ab6235a16cf7c279570cea0ace4a21a5
(8) 0xe9c575e84090ddcb6f550e46df697524fc8898e74be2726ac8e97e2fa0e88955
(9) 0x09dab0fa8f01d76b37724f48247730894ad8db6801e56e9fc1a65225232596c9

HD Wallet
==================
Mnemonic:      question menu ketchup summer twenty circle reduce parrot employ exercise style measure
Base HD Path:  m/44'/60'/0'/0/{account_index}

Gas Price
==================
20000000000

Gas Limit
==================
6721975

Call Gas Limit
==================
9007199254740991

Listening on 127.0.0.1:8545

Contract created: 0x9f57843ab0bdf9b4dea14ed2aa41eff268b87119
*/