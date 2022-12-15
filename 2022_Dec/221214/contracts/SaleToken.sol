// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import "./NFTToken.sol";

contract SaleToken {
    // Token와 상호작용을 하기 위해서 만든 상태 변수
    NFTToken public Token;

    // 배포단계에 상호작용을 하기위해 배포한 NFTToken의 CA를 매개변수로 받아서 전달해준다.
    constructor(address _tokenAddress) {
        Token = NFTToken(_tokenAddress);
    }

    // Token.getTokenRank(1) << 이런식으로 상호작용 하면 된다.

    // TokenInfo 구조체
    struct TokenInfo {
        uint256 tokenId;
        uint256 Rank;
        uint256 Type;
        uint256 price;
    }

    // token의 아이디 => price(토큰의 가격)
    mapping(uint256 => uint256) public tokenPrices;

    // 판매중인 NFT의 토큰아이디 값을 담아놓은 상태변수
    uint256[] public SaleTokenList;

    // 판매 등록 함수
    function SalesToken(uint256 _tokenId, uint256 _price) public {
        // 토큰 소유자의 계정
        address tokenOwner = Token.ownerOf(_tokenId);

        // 토큰의 소유자를 가져왔을때 소유자가 맞으면 판매 가능
        require(tokenOwner == msg.sender);

        // 판매 가격이 0보다 큰값인지 확인
        require(_price > 0);

        // this는 이 컨트랙트
        require(Token.isApprovedForAll(msg.sender, address(this)));
        // isAopprovedFroAll(): 첫번째 매개변수 -> 판매자, 두번째 매개변수 -> 현재 컨트랙트
        //  ㄴ> SalesToken()를 실행한 사람이 모든 토큰의 권한을 위임했는지 컨트랙트 CA에 체크해주는 함수

        /* opensea에서는 NFT마켓에 메타마스크를 연결할 때 setApprovedForAll()를 실행해서
        자신이 소유한 모든 NFT 권한을 opensea에 위임하게 된다. */

        // 토큰의 가격을 토큰아이디 인덱스에 가격 추가
        tokenPrices[_tokenId] = _price;

        // 판매 리스트에 토큰 아이디 추가
        SaleTokenList.push(_tokenId);
    }

    // 토큰 구매 함수
    function PurchaseToken(uint256 _tokenId) public payable {
        // 토큰 소유자의 계정
        address tokenOwner = Token.ownerOf(_tokenId);

        // 판매자가 자신의 토큰을 구매하지 못하게 설정
        require(tokenOwner != msg.sender);

        // 판매중인 토큰만 구매할 수 있게 체크
        // 여기서 tokenPrices의 값이 0이상인 경우 판매중으로 인식
        require(tokenPrices[_tokenId] > 0);

        // 구매가자 지불한 이더가 판매 가격 이상인지 체크
        require(tokenPrices[_tokenId] < msg.value);

        // CA가 토큰 판매자에게 이더 전송
        payable(tokenOwner).transfer(msg.value);

        // 토큰을 전달
        Token.transferFrom(tokenOwner, msg.sender, _tokenId);

        // 판매 가격을 0으로 만들면 상품 판매중이지 않게 된다.
        tokenPrices[_tokenId] = 0;
        popSaleToken(_tokenId);
    }

    function popSaleToken(uint256 _tokenId) private returns (bool) {
        for (uint256 i = 0; i < SaleTokenList.length; i++) {
            if (SaleTokenList[i] == _tokenId) {
                SaleTokenList[i] = SaleTokenList[SaleTokenList.length - 1];
                SaleTokenList.pop();
                return true;
            }
        }
        return false;
    }

    // 전체 판매 리스트 확인 (view 사용)
    function getSaleTokenList() public view returns (TokenInfo[] memory) {
        // 리스트에 길이가 있을 때
        require(SaleTokenList.length > 0);

        // SaleTokenList의 길이만큼 빈값을 가지게 배열을 만듬
        TokenInfo[] memory list = new TokenInfo[](SaleTokenList.length);
        // == const array = new Array(SaleTokenList.length);

        for (uint256 i = 0; i < SaleTokenList.length; i++) {
            uint256 tokenId = SaleTokenList[i];
            uint256 Rank = Token.getTokenRank(tokenId);
            uint256 Type = Token.getTokenType(tokenId);
            uint256 price = tokenPrices[tokenId];

            // list 배열에 만들어진 구조체를 담기
            list[i] = TokenInfo(tokenId, Rank, Type, price);
        }
        return list;
        /*
        [
            {tokenId: 20, Rank: 3, Type: 2, price: 10000000},
            {tokenId: 22, Rank: 2, Type: 4, price: 10000000}
        ] */
    }

    // 소유하고 있는 NFT 리스트 view 함수
    function getOwnerToken(address _tokenOwner)
        public
        view
        returns (TokenInfo[] memory)
    {
        uint256 balance = Token.balanceOf(_tokenOwner);
        require(balance != 0);
        // balance크기의 빈배열 만들기 list
        TokenInfo[] memory list = new TokenInfo[](balance);

        for (uint256 i = 0; i < balance; i++) {
            // tokenOfOwnerByIndex(): 토큰 소유자의 토큰 인덱스를 순서대로 가져옴 tokenId
            uint256 tokenId = Token.tokenOfOwnerByIndex(_tokenOwner, i);
            uint256 Rank = Token.getTokenRank(tokenId);
            uint256 Type = Token.getTokenType(tokenId);
            uint256 price = tokenPrices[tokenId];

            list[i] = TokenInfo(tokenId, Rank, Type, price);
        }

        return list;
    }

    // 소유하고 있는 제일 최신 NFT 보여주는 view 함수. (민팅했을때 바로 보여주기 위한 용도로 사용)
    function getLatestToken(address _tokenOwner)
        public
        view
        returns (TokenInfo memory)
    {
        uint256 balance = Token.balanceOf(_tokenOwner);
        uint256 tokenId = Token.tokenOfOwnerByIndex(_tokenOwner, balance - 1);
        uint256 Rank = Token.getTokenRank(tokenId);
        uint256 Type = Token.getTokenType(tokenId);
        uint256 price = tokenPrices[tokenId];

        return TokenInfo(tokenId, Rank, Type, price);
    }
}
