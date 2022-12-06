// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

// ERC721 토큰 표준 가져오기
import "openzeppelin-solidity/contracts/token/ERC721/extensions/ERC721Enumerable.sol";

contract Minting is ERC721 {
    // ERC721 생성자 함수
    constructor(string memory _name, string memory _symbol)
        ERC721(_name, _symbol)
    {}

    function _minting(uint256 _tokenId) public {
        // msg.sender : 토큰을 받는 계정, _tokenId : 토큰의 고유값
        _mint(msg.sender, _tokenId);
        // _tokenId의 키값을 조회하면 토큰의 소유자 확인 가능
    }

    function tokenURI(uint256) public pure override returns (string memory) {
        // pure : state값을 변경할 수 없다.이 함수 밖에 있는 값을 읽어올 수도 없다.
        // 반환값은 만들어서 넣어줄 json 객체
        return
            "https://gateway.pinata.cloud/ipfs/QmXRE9Pe3mNMMHuLsDxzo9Q2UmX18wArgHdVf7mFiVFeY1";

        /* NFT 객체의 내용 ㄱ
        {
            "name" : "NFT의 이름",
            "description" : "설명",
            "image" : "이미지의 경로",
            "attributes" : ["속성값"]
        } */
    }
}
