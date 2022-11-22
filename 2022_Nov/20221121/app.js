/* private network(가상 사설망)
회사 조직에서 독립적으로 사용하는 네트워크

////////////////
우분투 폴더경로 접속
₩₩wsl$
////////////////

geth 접속

Looking for peers -> 이더리움 네트워크상 다른 노드와 peer를 맺어주기 위해
peer를 맺으면 이더리움 네트워크 상에 있는 데이터들을 로컬에 다운 받을 수 있다.
다운받은 내용은
Mac 는 ~/Library/Ethereum
Linux 는 ~./ethereum
에 들어간다

기본적으로 chaindata 폴더와 keystore 폴더를 확인해보면
chaindata 폴더는 블록의 헤더 내용, 블록의 바디 트랜잭션 내용이 들어있다.
keystore 폴더는 geth에서 관리하는 계정들의 정보가 들어있다.

이런 내용을 geth로 다운 받는 것을 _동기화_라 한다.
full sync: 제네시스 블록부터 현재 블록까지 모든 블록을 동기화
fast sync: 블록 헤더 정보 동기화. 블록 바디 마지막 트랜잭션 기준으로 -1024개의 트랜잭션 데이터만 동기화
light sync: 블록 헤더 정보와 마지막 snapshot 동기화
            ㄴ snapshor: 데이터를 파일이나 이미지로 저장한다고 생각하면 된다.

아무 옵션 없이 geth를 실행할 경우
디폴트값이 fast sync이고, light sync로 실행하고 싶으면
// geth --syncmode light
//

light sync 동기화를 할떄는 lightchaindata 폴더에 값이 저장된다.

//
IPC 프라이빗 네트워크를 구축하면서 IPC 개념을 알고가자~
IPC는 프로세스간 통신
프로세스끼리 서로 데이터를 전송 수신 하는 행위 또는 그 방법을 말한다.

IPC의 종류
메세지 전달, 메모리 공유
메세지 전달은 커널이 제공하는 API를 사용해 커널 공간을 통해서 통신하고 소켓 로컬에서도 통신이 가능하다
메모리 공유는 프로세스끼리 공통의 메모리 영역을 공유하고 상호간 통신 하는 방법.
데이터 자체를 공유하도록 지원한다.

IPC는 실행중인 프로세스 간에 데이터를 주고 받는 것
프로세스는 할당된 메모리 내의 정보에만 접근할 수 있게 해주고, 이를 벗어나서 접근할 경우 오류를 발생 시키는데
안정성을 위해서 운영 체제가 자기 프로세스의 메모리에만 접근하도록 하고 있기 때문에
이런 부분들 때문에 우리가 IPC를 사용해서 다른 프로세스 간에 데이터를 주고 받아야한다.

geth.ipc 파일을 사용해서 geth와 IPC 통신을 할 수 있게 된다.
(geth가 실행되어있어야 생성되는 파일이므로 geth가 실행 되어있어야 한다!)

통신을 하는 명령어
// geth attach ~/Library/Ethereum/geth.ipc
자바스크립트 콘솔창에 접속이 되고 go언어로 만들어 놓았고
자바스크립트로 호출해서 사용할 수 있게끔 만들어 놓은것

personal을 콘솔에 입력 (모듈중 하나)
속성과 메소드 등등이 쭉 보이게 된다
이것들이 자바스크립트로 호출할 수 있게끔 만들어 놓은것

admin
1. admin.nodeinfo: 노드의 정보 조회
2. admin.nodeinfo.enode: enode 값을 이용해서 peer를 맺는다.
3. admin.datadir: admin 관련 데이터의 폴더 경로

personal
personal.newAccount: 계정 생성

eth
1. eth.syncing: 동기화 여부 확인(boolean값으로 구분)
2. eth.chainId: 체인아이디 조회
3. eth.accounts: 노드에 존재하는 계정 목록 확인
3. eth.coinbase: 코인베이스 계정(마이너 계정)

web3
web3.fromWei(eth.getBalance(account), "ether") : 웨이->이더 단위 변환

//
private network 구축

geth를 실행해보면 _Chain ID: 1 (mainnet)_ 구문이 보이는데
geth가 실행되고 있는 이더리움 메인넷 Chain ID: 1 (mainnet)에 연결된 노드로 동기화가 이루어 지고 있다.

private network를 만드는데 geth의 기능은 사용하지만 최초블록을 교체해서 자체적인 프라이빗 네트워크를 구축할 것이다

json으로도 제네시스 블록의 속성값을 지정해줄 수 있다.

const genesis = {
    // nonce값을 발견할 난이도 설정
    "difficulty": "200000",
    // 블록체인의 블록당 가스 제한량
    "gasLimit": "3100000",
    // 제네시스 블록 생성시 지정한 지갑에 할당된 양의 정보
    "alloc": {},
    "config": {
        // 블록체인 네트워크 체인 아이디
        "chainId": 1234,
        // 이더리움 release 버전
        "homesteadBlock": 0,
        // eip는 Ethereum Improvement Proposal을 의미하고
        // 적용할지 여부를 확인할 수 있다. 기본값은 0
        "eip150Block": 0,
        "eip155Block": 0
        // eip는 이더리움 개선안으로,
        // 이더리움 커뮤니티 구성원들이 추진하는 이더리움 암호화폐와 스마트 컨트랙트의 발전을 위해 제안하는 것
    }
}

//
wsl 접속하고
경로를 cd ~/ 루트로 이동 후
geth가 설치되어있는 경로로 이동 .ethereum 폴더로 이동
(geth 폴더 밖에 genesis.json 파일 복사해서 붙여넣기)

제네시스 블록 설정값 적용
// geth --datadir node init genesis.json
실행 명령어
// geth --datadir node

//
Puppeth
이더리움 노드 배포를 쉽게 할 수 있게 도와주는 프로그램
geth를 빌드해서 실행
make geth로 빌드를 했었는데, 이번에는 make all 로 빌드
make all 명령어를 사용하면 geth 이외에 go-ethereum의 모든 파일도 빌드된다.
make all 빌드를 하면 폴더 안에 Puppeth 가 생성 된다

Puppeth를 사용하는 이유는
최초 블록 설정이나 여러가지 유용한 부분이 많기 때문에
초기설정을 도와주는 프로그램으로 생각하면 된다.
(초기 세팅값을 사용하려고 쓰는 것!)

go-ethereum 폴더 경로로 이동해서
make all
(하면 ./build/bin 에 파일들이 생긴다)

puppeth 실행하고
설정값 다 설정하면 설정한 파일명이 "~/Library/Ethereum" 안에 생성됨

json파일을 가지고 geth 생성하기
// geth --datadir node init "json경로"
실행 명령어
// geth --datadir node

web3 통신하고
IPC를 사용해서 로컬에 실행시킨 geth 프라이빗 네트워크를 블록체인 네트워크에서 메타마스크나 다른 pc도 통신하려면 설정이 필요한데
geth를 실행할 때 옵션을 설정해 주면 된다.

설정 명령어
--http.addr"0.0.0.0" : 모든 ip허용
--http.port 8000 : 사용할 포트를 8000으로 설정
--http.corsdomain"*" : cors 설정. 모든 도메인 허용
--http.api"admin,txpool,web3" : 외부에서 어떤 모듈을 사용할수 있게 할것인지 설정
--syncmode full : 동기화 모드 full
--networkId : 체인아이디와 동일한 값 입력 해주면 된다. 네트워크 아이디

실행 명령어
//설정// geth --datadir node --http --http.addr "0.0.0.0" --http.port 9000 --http.corsdomain "*" \ --http.api "admin,miner,txpool,web3,personal,eth,net" --syncmode full --networkid 1234
//실행// geth attach http://127.0.0.1:9000

프라이빗 네트워크에서 통신할 수 있는 상태가 되었고
nodejs나 메타마스크에서 프라이빗 네트워크에 통신하는 것이 가능한 상태

// npm init -y //로 package.json 만들고
테스트코드 작성으로 jest 사용
// npm install jest

통신을 사용하기위해 web3 설치
// npm install web3

*/
