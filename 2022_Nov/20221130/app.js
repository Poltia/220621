/* 사과 판매 앱 만들기
스마트 컨트랙트 함수의 payable속성
다른 언어들은 프로그램을 개발하는데 사용하지만, 솔리디티 언어는 코인이나 토큰, 즉 가상화폐를 다루기위해 사용하는 언어

솔리디티로 이더를 전송하는 스마트 컨트랙트를 작성하기 위해서는
payable을 작성한 함수에서만 Ether를 보낼 수 있다.

먼저 트러플 init
// npx truffle init

truffle-config.js 파일 수정
(주석 삭제, network 내부 작성)

contracts 폴더에 AppleShop.sol 파일 생성 및 작성

migrations 폴더에 2_deploy_AppleShop.js 파일 생성 및 작성

리액트 설치
// npx create-react-app 폴더명

hooks 폴더 생성후 useWeb3.js 파일 생성 및 작성
web3 라이브러리 설치
// npm i web3

트러플 컴파일
// npx truffle compile
가나쉬 켜고
// npx ganache-cli
트러플로 마이그레이션
//npx truffle migration

contracts 폴더 생성 후 컴파일된 AppleShop.json 복사하기
components 폴더 생성 후 AppleShop.js 생성 후 작성
App.js 작성

리액트 실행 ㄱㄱ
yeah~~~~

//
다른 과일들도 갯수 정해서 팔고 사고 할 수 있는 앱 만들기~

크립토 좀비 ~~~~~~!!!!!!!!!!!!!!

*/
/*
Available Accounts
==================
(0) 0x456B05C693DE41E6041C60C01a138cb49D69DeD8 (100 ETH)
(1) 0x32bF9F9a134f9106bCf77F2ea18eFaE7FaE03273 (100 ETH)
(2) 0xD16Be73a1C59a286f53EFc39d5a5fb14DDb8150A (100 ETH)
(3) 0x4ba68Bcac229b423D02AD67388F9c2715633AA35 (100 ETH)
(4) 0x31C4ee36843685bbca112617BEd9f86Aa23047CA (100 ETH)
(5) 0x44FEFBa7A968c8B075eC856AD1e3b829c8B3E1D5 (100 ETH)
(6) 0x06897ECd49DdB1e99e17de95b150a4095444B190 (100 ETH)
(7) 0x2Eb476012067cC98fDA0262f76c0D050fdB9C9ac (100 ETH)
(8) 0x341e352df66DA56cfeB29AE7aea6E2FB6049589C (100 ETH)
(9) 0x1fC1f16fB5B9936514E2EFCf9ECC5341140F6f9f (100 ETH)

Private Keys
==================
(0) 0x8a659afce7b76429d1706a0d5d35addd79d272eef23496ed69ee9e3c0715290e
(1) 0x9202b8f09edcb92554ef00c4a386ffd670c4b7a2ff7ced1b5bbc97e75721bbb3
(2) 0x2b6a904af590c21cb41e30da42c775942e3bab6af9d366f73bd6775c2bf0983d
(3) 0x1025ded67aba8647bb8be5556e8fc1fb46bbfa901e8ef06896b67e48d78ac1c5
(4) 0x1c9bfe4860dc309926617c1f96df631f36081e3c53eb3277b5650eeb700a8756
(5) 0x5568ef0f50d5705a51dbd3ad95268cf12c7e47a9b494cf6ad6be5bf2f795427d
(6) 0x0e6f276932457cf7de39ea25a8b31fc3307eb4d785355ac8f87ede175377ca2f
(7) 0x13529bc53273747d486c9e44116f108bedd68f08398877e15c9e2572aa33208c
(8) 0xd8a82db3da6b8dcbff53639e0c356b8a4a944deb3f0ae4419ed1fdc7c3bfb523
(9) 0x9240ea5ac8899266d18ff6a81b8019047dc4cf500019fc589ae68eec09574951
*/