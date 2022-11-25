// 소프트웨어 패키지 구성요소를 전달하기 위한 표준 형식
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract HelloWorld {
    // value 상태변수 선언
    string public value;
    // public으로 상태변수를 만든경우에는 getValue가 자동으로 생성 된다. getter()가 자동으로 생성

    constructor() {
        value = "Hi";
    }

    // 상태변수 set() : 상태변수 변경해주는 함수
    function setValue(string memory v) public {
        value = v;
    }
}