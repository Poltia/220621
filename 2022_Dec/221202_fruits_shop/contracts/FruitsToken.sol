// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

// 컨트랙트 파일 전체 코드 가져오기 import
import "./ERC20.sol";
import "./FruitsShop.sol";

// 컨트랙트 상속 is 로, Token에 ERC20, FruitsShop을 상속
contract FruitsToken is ERC20, FruitsShop {
    address public owner; // 이 컨트랙트의 배포자가 할당될 상태변수
    uint256 public ethCanBuy = 100; // 1ETH 당 100토큰으로 정해줄 상태변수

    constructor(
        string memory _name,
        string memory _symbol,
        uint256 _amount
    ) {
        // ERC20에서 상속 받아 온 것
        owner = msg.sender;
        name = _name;
        symbol = _symbol;

        mint(_amount * (10**uint256(decimals)));
    }

    // 익명 함수
    // receive: 특정 계정에서 CA에 이더를 전송했을 때 실행되는 함수
    receive() external payable {
        require(msg.value != 0);
        uint amount = msg.value * ethCanBuy;

        require(balances[owner] >= amount);
        balances[owner] -= amount;
        balances[msg.sender] += amount;

        // 발행자가 CA로 전송한거면 발행량을 늘려주는 것
        if (msg.sender == owner) {
            mint(amount);
        }

        emit Transfer(owner, msg.sender, amount);
    }

    // 토큰으로 바나나 구매 함수
    function buyBanana_costToken(uint _number) public {
        uint price = 200*(10**uint256(decimals));
        require(balances[msg.sender] >= _number*price);
        myBanana[msg.sender] += _number;
        balances[msg.sender] -= _number*price;
    }
    // 토큰으로 바나나 판매 함수
    function sellBanana_costToken(uint _price, uint _number) public {
        require(myBanana[msg.sender] >= _number);
        uint refund = _price * _number;
        myBanana[msg.sender] -= _number;
        balances[msg.sender] += refund;
    }
    
    // 토큰으로 망고 구매 함수
    function buyMango_costToken(uint _number) public {
        uint price = 100*(10**uint256(decimals));
        require(balances[msg.sender] >= _number*price);
        myMango[msg.sender] += _number;
        balances[msg.sender] -= _number*price;
    }
    // 토큰으로 망고 판매 함수
    function sellMango_costToken(uint _price, uint _number) public {
        require(myMango[msg.sender] >= _number);
        uint refund = _price * _number;
        myMango[msg.sender] -= _number;
        balances[msg.sender] += refund;
    }
}
