/* ERC-20 스마트 컨트랙트 토큰 발행

ERC-20은 이더리움 네트워크에서 표준 토큰.
정해진 규격대로 만들어줘야 한다.

규격을 지켜줘야 토큰을 생성할수 있는데, 변수명도 정해진대로 만들어줘야한다.

토큰의 이름은 name
토큰의 단위는 symbol이라는 변수에 담긴 내용은 토큰의 단위 ETH
balances는 잔액의 내용이 들어있다. (UTXO 같은 느낌)

balance {
    address: String;
    amount: Number;
}

token {
    name: String;
    symbol: String;
    balances: balance[];
}

balances = [
    {
        address: "주소",
        amount: "잔액",
    },
    {
        address: "0xcceCaf3ac10abAa2Bf9c0162fAAe99711e5833cF",
        amount: "100",
    },
];

솔리디티의 address 데이터 타입
20byte 짜리 데이터 타입이고 계정이나 주소가 40글자로 만들어진 20byte짜리 문자열
address는 string타입이고 20byte 저장공간을 가지고 있다.

mapping
ex) mapping(string => uint256)
    mapping(속성명 => 속성값)
mapping데이터 타입은 자바스크립트에서 사용한 객체라고 보면 된다.

mapping(string => uint256) 을 표현해보면
{ // string : uint256
    "name" : 50
}

선언해서 사용해보면
mapping(address => uint256) public balance;
데이터의 타입은 _mapping(address => uint256)_ 객체 형식
_public_으로 공개
변수명은 _balance_
balance를 호출하면
{
    "주소" : 1000,
    "주소" : 1000,
    "주소" : 1000,
}

컨트랙트에서 인스턴스를 생성할 때 constructor()에 매개변수를 추가해서 인스턴스 생성을 할 수 있다.
이때 우리가 인스턴스를 생성하는건 배포하기 전에 매개변수를 전달해줘야 한다.

배포를 하고 나서 트러플 콘솔창에
배포한 트랜잭션 해쉬를 조회하면
// web3.eth.getTransaction("트랜잭션 해시") // 0xc0f0117fa71df35950d68bd4e2ab7b5b6cbd469ffc80f434eadd3b5a91266d0c
input값에 우리가 전달해준 매개변수 50이 0을 기준으로 구분값을 준다. //**
50의 인자값을 표시

네트워크에서 컨트랙트를 실행한 사람의 주소를 가져올 수 있는 방법
msg.sender : 예약어. 실행시킨 사람의 주소. 네트워크 안에서 사용할 수 있는 변수

test2.sol 작성 후 컴파일하고 2_deploy_Test.js의 내용 수정 후
Test2로 배포진행 하고 트러플 콘솔창 열기
Test2.deployed().then(its => it = its); 입력 하고 // Test2는 contract 이름
it.owner() 로 조회하면 배포한 사람의 주소가 뜬다.

토큰 발행
응용해서 토큰을 만들어보자!
Token.sol 파일을 생성
2_deploy_Test.js 파일 수정 (Test2 -> Token, depoy의 매개변수에서 50 삭제)
(작성작성작성)
배포 진행하고
인스턴스 조회
// Token.deployed().then(its => it = its);
코인베이스 주소 잔액 확인
// it.balanceOf("코인베이스 주소") //0xf681a985A5231d31c78f095320FE7a7acC881551 //0x7c76af0050414b72eab67eabd6698b5b4525716ac61d115aed9f45824ddae36d
두번째 계정으로 100 토큰 보내기
// it.transfer("두번쨰 계정", 100) //0x0Fef7316c20CE0A9A83FF32Cad92a7537B2CbBC7
// it.balanceOf("두번째 계정") // 잔액 확인

메타마스크에서 토큰 가져오기 할때 _계약 주소_
// it.address

(from to 사용하는 함수 만들어보기)

*/
/*
Available Accounts
==================
(0) 0xCae7556C4d793f77BE404DE697Cf5B15E54E6E85 (100 ETH)
(1) 0xE0EddA7E30b2a1bddDc5585b5c1BA51ADd7045B4 (100 ETH)
(2) 0x3230A0604350b22235B3cCEE8B13C8eA02F591B6 (100 ETH)
(3) 0xA08fDdb6E6Ec95EE5B371e66994Af8422b837b20 (100 ETH)
(4) 0xC59724584C72De8156A742BF7193b31c3e3248f2 (100 ETH)
(5) 0xB8F35789315a0F5F923eF1260C80ade82DE1E508 (100 ETH)
(6) 0xb687BACA10C6cA163392321eAd975D7C6CcFC4B4 (100 ETH)
(7) 0xFB4445749799d394ec7e5d6648c4594B43630139 (100 ETH)
(8) 0xFdf719E19960d263e0B7513D5EfC589983B30b1a (100 ETH)
(9) 0x875D37801d24E9110B4D61D314387BE4CC595456 (100 ETH)

Private Keys
==================
(0) 0xfc6b5f46e7d2241ccaf38212a0deee28c738db3a8f2e3300f1698924985cf7ee
(1) 0xe3e7262b752b08309074a20ca384a93cd6d0df027d3c0f827c8cec9db2065ce8
(2) 0xfcb74853a21fc3022e5a837846bbb43d4cd7fe8e5be16a54d8fab4393efe6c53
(3) 0x41c1b15f9fd4ecc38a4131b2ce2c0b63fdd9c74b55a3df945b4abb225d2cf521
(4) 0x8dbfd181827516f8b3bbbeaedb7cd9752c37f9f59e215651ccb0986b13641a03
(5) 0xc15fd572e8eb04f5b7149194b5f45a6322aaac4a1348bf82e49374e1b99e4907
(6) 0x3c43a6a21e2901fb48e5fea2725b650f967f322836b2fe34357a2f8ee5baa835
(7) 0x6dc66e40b66e0bc3aa9545ba91583eec22f4d0321de34a8d8fcf6b8a09809c74
(8) 0xe6e0abaa3fc76bc21346ecee6603e52e523b42ccf503cd7635d71c5a3099ee53
(9) 0xd0017cc18523d13745e6b182ea2079cd0ba29c3474131339e4bee6a57b55d38b
*/