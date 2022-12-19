// 펀딩 컨트랙트 만들어보기
// 이더 스캔 하면서 마이닝 버튼과 마이닝 스탑 만들기

// CMD 관리자로 실행 후 wsl 환경 실행
// geth를 먼저 실행하고
/*
geth --datadir node --http --http.addr "127.0.0.1" --http.port 9000
 --http.corsdomain "*" 
  --http.api "admin,eth,debug,miner,net,txpool,personal,web3"
   --syncmode full --networkid 7722 --port 30300 
   --ws --ws.addr "127.0.0.1" --ws.port 9005 --ws.origins "*" 
    --ws.api "admin,eth,debug,miner,net,txpool,personal,web3" 
     --allow-insecure-unlock --unlock "0,1" --password "./node/password.txt"
*/

// geth attach http://127.0.0.1:9000 접속 후
// 자바스크립트 콘솔창에서 miner.start(1)
// 이렇게 실행을 시켰는데
// miner.stop();
// miner.setEtherbase(eth.coinbase) 설정하고

/* 
    curl -X POST -H "Content-Type: application/json" --data '{ "jsonrpc":"2.0",
    "id" : 1, "method" : "miner_stop", "params" : []}' localhost:9000
*/

// 마이닝 사이트 만들어보기

// 지금까지 만든거에서 접속중인 계정을 가져와서
// 접속중인 계정이 블록 마이닝을해서 채굴하고
// 실시간으로 잔액 보여주는 UI 만들기
// 계정 주소를 직접 입력해서 해도 괜찮고
// 아니면 메타마스크를 이용해서 접속중인 계정으로 세팅해도 괜찮고.

// miner.setEtherbase(계정 주소) 채굴자 세팅
// miner_setEtherbase로 바꿔서 사용하면 채굴자 설정

// 서버에 요청할때 객체의 속성

// 요청할때
/*
    id : 요청 아이디를 지정하고 서버에서 응답받을때 구별하려고 사용
    params : 서버에 전달 객체
*/

// 응답받을때
/*
    id : 요청할때 전달한 id가 들어온다.
    result : 응답 데이터의 배열
*/