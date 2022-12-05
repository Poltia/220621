// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract ERC20 {
    // 표준 토큰 규격
    string public name; // 토큰의 이름
    string public symbol; // 토큰의 단위
    uint256 public decimals = 18; // 소수점 자리
    uint256 public totalSupply; // 총 발행량

    // address(40자리 문자열 20byte) 속성명, uint 속성값, balances 변수명 을 가진 객체
    mapping(address => uint256) public balances;
    // 객체 안의 객체
    // 속성명: address, 속성값: {속성명: address, 속성값: uint}, 변수명 allowance 인 객체
    mapping(address => mapping(address => uint256)) public allowance;
    /* 표현해보면 ㄱ
    const allowance = {
        address : {_address: uint}
    } */

    // 잔액을 확인하는 함수
    // external은 외부 호출로만 사용/접근 가능. 정의된 컨트랙트 안에서는 사용할 수 없다.
    function balanceOf(address account) external view returns (uint256) {
        return balances[account];
    }

    // 잔액을 전송하는 함수
    function transfer(address recipient, uint256 amount)
        external
        returns (bool)
    {
        balances[msg.sender] -= amount;
        balances[recipient] += amount;
        emit Transfer(msg.sender, recipient, amount);
        return true;
    }

    // 토큰 권한을 위임하는 함수
    function approve(address spender, uint256 amount) external returns (bool) {
        allowance[msg.sender][spender] = amount;
        emit Approval(msg.sender, spender, amount);
        return true;
    }

    function transferFrom(
        address sender,
        address recipient,
        uint256 amount
    ) external returns (bool) {
        require(allowance[sender][msg.sender] >= amount);
        allowance[sender][msg.sender] -= amount;
        balances[sender] -= amount;
        balances[recipient] += amount;
        emit Transfer(sender, recipient, amount);
        return true;

        // sender: 전송하는 토큰의 소유자 계정
        // msg.sender: transferFrom() 를 호출한 계정으로, 특정 소유자로부터 일정량의 토큰을 위임받은 계정
    }

    // internal: 정의된 컨트랙트 내에서 또는 상속받은 자식 컨트랙트에서만 접근 가능
    // private과 비슷하지만 _상속 받은 자식도 접근 가능_하다는 점이 다르다.

    // 발행량을 늘려주는 함수. CA로 전송한 계정이 발행자일 경우에 사용
    function mint(uint amount) internal {
        balances[msg.sender] += amount;
        totalSupply += amount;
        // address(0) from 값이 필요없기 때문에 null로 넣어줌
        emit Transfer(address(0), msg.sender, amount);
    }

    // 토큰을 제거하는 함수
    function burn(uint amount) external {
        balances[msg.sender] -= amount;
        totalSupply -= amount;
        // address(0) to 값이 필요 없어서 null을 넣어줌
        emit Transfer(msg.sender, address(0), amount);
    }

    // 이벤트 함수 등록
    event Transfer(address from, address to, uint256 value);
    event Approval(address owner, address spender, uint256 value);
}
