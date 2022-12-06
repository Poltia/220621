/* ERC721 토큰
NFT를 발행할 때는 ERC721 토큰을 사용해서 민팅 한다.

ERC721 토큰은 대체 불가 토큰이다.
{
    토큰의 고유값 : "계정"
}
토큰에 고유값이 있고 그 토큰의 주인이 누구인지 표현된다.


Remix
스마트 컨트랙트를 쉽게 작성하고 배포를 하게 도와주는 툴

트러플 초기화
// npx truffle init

remix 설치
// npm install -g @remix-project/remixd
(글로벌 설치는 sudo)

터미널 경로부터 remix에 연결됨
contracts 폴더로 경로 이동 후 실행
// remixd -s . --remix-ide https://remix.ethereum.org
https://remix.ethereum.org/

오픈제플린 설치. ERC721 토큰 표준을 사용하기 위해서
// npm install openzeppelin-solidity

*/