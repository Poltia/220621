// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import "../node_modules/openzeppelin-solidity/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "../node_modules/openzeppelin-solidity/contracts/access/Ownable.sol";
// ㄴ Ownable.sol파일을 상속받으면 배포를 진행할 때 owner 상태변수에 컨트랙트 배포자의 EOA 계정이 담긴다.
import "../node_modules/openzeppelin-solidity/contracts/utils/Strings.sol";
// ㄴ uint를 형변환 할때 바로 형변환을 할 수 없어서, uint를 바이트로 변환하고 문자열로 변환해주는 함수를 사용할 수 있다.

contract NFTToken is ERC721Enumerable, Ownable {
    // NFT 발행량을 제한할 상태변수
    // 상수를 사용할 예정. 솔리디티에서 상수는 constant 타입에 붙여서 선언
    uint256 public constant MAX_TOKEN_COUNT = 1000;

    // 연산으로 양을 표현하게 될 경우 가스비 소모
    uint256 public mint_price = 1 ether; // 1 ether 는 알아서 10**18으로 표현해준다.
    // mint_price는 NFT 민팅시 지불할 이더. 민팅의 가격을 나타낼 상태 변수

    string public metadataURI;

    constructor(
        string memory _name,
        string memory _symbol,
        string memory _metadataURI
    ) ERC721(_name, _symbol) {
        metadataURI = _metadataURI;
    }

    // token 구조체 생성
    struct TokenData {
        uint256 Rank;
        uint256 Type;
    }

    // uint 키값은 토큰의 ID가 될 예정
    mapping(uint256 => TokenData) public TokenDatas;

    // 어떤 타입의 토큰이 몇개나 발행 되었는지 확인하기 위한 상태 변수
    uint256[4][4] public tokenCount; // [Rank][Type]

    // mintToken을 하면 이더를 지급하게 만들고 CA에게 이더를 보내서 NFT를 구매한다.
    function mintToken() public payable {
        // 본인의 잔액이 mint_price보다 클때
        require(msg.value > mint_price);
        // 총 발행량이 MAX_TOKEN_COUNT 보다 작을때
        require(MAX_TOKEN_COUNT > ERC721Enumerable.totalSupply());

        // 총 발행량에 1을 더해서 토큰 아이디 변수에 할당
        uint256 tokenId = ERC721Enumerable.totalSupply() + 1;

        // tokenId에 맞춰서 Rank, Type을 랜덤 생성해서 TokenData로 저장
        TokenData memory random = getRandomTokenData(msg.sender, tokenId); // 랜덤 함수 생성
        // 총 발행량의 +1 더해진 토큰 아이디
        TokenDatas[tokenId] = random;

        // 랜덤으로 생성한 Rank와 Type을 가진 Token의 갯수가 몇개인지 확인하기 위한 상태 변수
        tokenCount[TokenDatas[tokenId].Rank - 1][
            TokenDatas[tokenId].Type - 1
        ] += 1;

        // CA => 컨트랙트 배포자 계정에 지급받은 이더를 전송 해준다.
        payable(Ownable.owner()).transfer(msg.value);

        // mintToken()를 호출한 계정에 NFT 발행
        _mint(msg.sender, tokenId);
    }

    // TokenData를 랜덤하게 만들어줄 함수
    function getRandomTokenData(address _owner, uint256 _tokenId)
        private
        pure
        returns (TokenData memory)
    {
        /* 솔리디티에는 랜덤 함수가 없기때문에,
        특정한 값을 해싱해서 나머지 연산으로 랜덤값을 구해야 한다.
        abi.encodePacked(_owner, _tokenId); << 타입과 상관없이 합쳐주는 메소드 */
        // 솔리디티에서 랜덤값을 구하는 방법 ㄱ
        uint256 randomNum = uint256(
            keccak256(abi.encodePacked(_owner, _tokenId))
            // keccak256()는 32바이트로 변환 해준다
        ) % 100;

        // 토큰의 데이터를 저장할 변수
        TokenData memory data;

        if (randomNum < 5) {
            if (randomNum == 1) {
                data.Rank = 4;
                data.Type = 4;
            } else if (randomNum == 2) {
                data.Rank = 4;
                data.Type = 3;
            } else if (randomNum == 3) {
                data.Rank = 4;
                data.Type = 2;
            } else {
                data.Rank = 4;
                data.Type = 1;
            }
        } else if (randomNum < 13) {
            if (randomNum < 7) {
                data.Rank = 3;
                data.Type = 4;
            } else if (randomNum < 9) {
                data.Rank = 3;
                data.Type = 3;
            } else if (randomNum < 11) {
                data.Rank = 3;
                data.Type = 2;
            } else {
                data.Rank = 3;
                data.Type = 1;
            }
        } else if (randomNum < 37) {
            if (randomNum < 19) {
                data.Rank = 2;
                data.Type = 4;
            } else if (randomNum < 25) {
                data.Rank = 2;
                data.Type = 3;
            } else if (randomNum < 31) {
                data.Rank = 2;
                data.Type = 2;
            } else {
                data.Rank = 2;
                data.Type = 1;
            }
        } else {
            if (randomNum < 52) {
                data.Rank = 1;
                data.Type = 4;
            } else if (randomNum < 68) {
                data.Rank = 1;
                data.Type = 3;
            } else if (randomNum < 84) {
                data.Rank = 1;
                data.Type = 2;
            } else {
                data.Rank = 1;
                data.Type = 1;
            }
        }

        return data;
    }

    //
    function tokenURI(uint256 _tokenId)
        public
        view
        override
        returns (string memory)
    {
        // Rank와 Type으로 json파일의 경로를 만들자
        // metadataURI: NFT의 토큰 값에 매칭되는 앞부분의 URI를 나타내는 상태 변수
        // ㄴ baseURL이라고 생각하면 된다. 앞부분에 붙는 주소
        // uint에서 바로 문자열로 형변환이 불가능하기 때문에
        // uint -> bytes -> 문자열 로 형변환 해준다.
        string memory Rank = Strings.toString(TokenDatas[_tokenId].Rank);
        string memory Type = Strings.toString(TokenDatas[_tokenId].Type);

        // http://localhost:3000/metadata/1/3.json << 이런 형태로 만들어 줄 예정
        return
            string(
                abi.encodePacked(metadataURI, "/", Rank, "/", Type, ".json")
            );
    }

    // metadataURI를 수정해야 할 때 사용할 함수
    // onlyOwner: 컨트랙트 배포자만 호출할 수 있는 함수
    function setMetadataURI(string memory _uri) public onlyOwner {
        metadataURI = _uri;
    }

    // tokenData의 Rank를 조회하는 함수
    function getTokenRank(uint256 _tokenId) public view returns (uint256) {
        return TokenDatas[_tokenId].Rank;
    }
    // tokenData의 Type을 조회하는 함수
    function getTokenType(uint256 _tokenId) public view returns (uint256) {
        return TokenDatas[_tokenId].Type;
    }
    // 배열 전체 내용을 조회하는 함수
    // 솔리디티에서 배열을 getter로 전체조회를 하는 건 불가능. 요소를 하나만 return 하기 때문
    // 배열 전체를 return해주는 view함수를 만들어주면 된다.
    function getTokenCount() public view returns(uint[4][4] memory) {
        return tokenCount;
    }
}
