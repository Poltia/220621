// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract AppleShop {
    // address 속성명, uint 속성값, myApple 변수명 의 객체
    mapping(address => uint256) myApple;

    // payable 속성이 있을 때 CA는 ETH를 받을 수 있다.
    // 트랜잭션 객체에 value값을 ETH로 전달할 수 있다.
    // 사과 구매 함수
    function buyApple() public payable {
        myApple[msg.sender] += 1;
    }

    // 사과 전체 판매 함수
    function sellApple(uint256 applePrice) public payable {
        uint256 refund = myApple[msg.sender] * applePrice;
        myApple[msg.sender] = 0;
        // payable() 의 매개변수로 주소를 전달해준다.
        // 전달한 주소의 계정에 돈을 보내줌
        payable(msg.sender).transfer(refund);
    }

    // 가지고있는 사과를 확인하는 함수
    function getApple() public view returns (uint256) {
        return myApple[msg.sender];
    }
}
