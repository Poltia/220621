/*

가나쉬에서 curl을 사용해서 요청을 보내고 확인하는 방법

curl은 Client URL의 약자
클라이언트에서 소스코드를 손쉽게 웹 브라우저처럼 활용할 수 있게 해주는 기술
서버 통신 할 수 있는 커맨드 명령어 툴이다. 웹개발에서 많이 사용되는 기술
다양한 프로토콜을 지원한다는 장점이 있다.

curl에서 지원하는 프로토콜은
DICT, FILE, FTP, FTPS, Gopher, HTTP, HTTPS, IMAP, IMAPS, LDAP, LDAPS, SSL 등등

url을 가지고 할 수 있는건 웬만하면 다 할 수 있다고 보면 된다.
HTTP 프로토콜을 사용해서 페이지의 데이터를 가져온다거나 파일을 다운 받을 수도 있다.
curl [-option] 페이지 주소 를 쓰면 페이지의 소스가 화면에 출력된다.

npx ganache-cli 로 실행
curl -X POST -H "content-type:application/json" --data "{id : yang}" http://localhost:3000

-X _요청 메소드_
-H _요청 헤더 내용_
-data, -d _요청 바디 내용 작성_


가나쉬로 생성한 이더리움 클라이언트에 curl을 사용해서 RPC 요청을 보내보자!
request body의 내용
{
    "id": 1215 // 체인의 아이디. 있어도 되고 없어도 된다.
    "jsonrpc": "2.0" // json으로 인코딩. _필수_
    "method": "eth_accounts" // 이더리움 클라이언트에 구성되어 있는 메소드명. _필수_
    "params": [] // 메소드의 인자 값
}

계정 가져오기
curl -X POST -H "Content-type : application/json" --data '{ "jsonrpc": "2.0", "method": "eth_accounts", "params": [] }' http://localhost:8545

잔액 조회하기
잔액을 조회하는 함수 이름은 "eth_getBalance"
"eth_getBalance" 함수는 params로 매개변수 2개를 전달하고
첫번째 매개변수에는 계정의 주소,
두번째 매개변수에는 몇번째 블록을 조회할 것인지
curl -X POST -H "Content-type:application/json" --data '{ "jsonrpc": "2.0", "method": "eth_getBalance", "params": ["0x33b44eaaa2ee41971434fee0f2e4762f51327850", "latest"] }' http://localhost:8545

ㄴ 이더리움 클라이언트에게 RPC를 요청 보내는 방법이다.

Web3 라이브러리
Web3.js 라는 라이브러리를 제공받아서 이더리움 네트워크와 상호작용을 할 수 있는 다양한 함수를 사용할 수 있다.
(위에서 해본 RPC요청을 쉽게 보낼 수 있게 해주는 라이브러리)


// npm init -y // packjson을 만들고
// npm install -D jest // jest를 설치하고
// npm install web3 // Web3 라이브러리 설치

package.json 에서
"test": "jest" // 이렇게 변경
jest.config.js // jest 설정값을 넣을 파일 생성

ethereumjs-tx 라이브러리 설치
// npm install ethereumjs-tx

*/
