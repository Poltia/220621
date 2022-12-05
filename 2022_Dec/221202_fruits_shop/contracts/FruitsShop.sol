//SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract FruitsShop {
    mapping(address => uint256) myBanana;
    mapping(address => uint256) myMango;

    // 바나나 구매 함수
    function buyBanana(uint256 _number) public payable {
        myBanana[msg.sender] += _number;
    }
    // 망고 구매 함수
    function buyMango(uint256 _number) public payable {
        myMango[msg.sender] += _number;
    }

    // 바나나 판매 함수
    function sellBanana(uint256 _price, uint256 _number) public payable {
        require(myBanana[msg.sender] >= _number);
        uint256 refund = _price * _number;
        myBanana[msg.sender] -= _number;
        payable(msg.sender).transfer(refund);
    }
    // 망고 판매 함수
    function sellMango(uint256 _price, uint256 _number) public payable {
        require(myMango[msg.sender] >= _number);
        uint256 refund = _price * _number;
        myMango[msg.sender] -= _number;
        payable(msg.sender).transfer(refund);
    }

    // 소지중인 바나나를 확인하는 함수
    function getBanana() public view returns (uint256) {
        return myBanana[msg.sender];
    }
    // 소지중인 망고를 확인하는 함수
    function getMango() public view returns (uint256) {
        return myMango[msg.sender];
    }
}
