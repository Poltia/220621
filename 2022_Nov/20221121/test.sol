// 솔리디티 버전
pragma solidity ^0.8.17; // 버전

// HelloWorld 컨트랙트
contract HelloWorld {
    string text;

    constructor() {
        text = "Hello World!";
    }

    function getText() public view returns (string memory) {
        return text;
    }

    function setText(string memory value) public {
        text = value;
    }
}

/*
솔리디티 코드를 컴파일 해주는 라이브러리
설치 명령어
// npm install solc

컴파일 명령어
// npx solc --bin --abi [파일경로]

*/
