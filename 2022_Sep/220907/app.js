/** AWS 사용하기
 * 1. EC2 ubuntu로 인스턴스
 * AWS 페이지에 로그인하고 서비스탭 옆에 EC2 검색
 * 
 * EC2
 * 클라우드의 가상 서버
 * 오른쪽 상단에 아이디옆에 리전(지역)은 최대한 가깝게 설정
 * 한국이 안될때는 주로 일본으로 씀
 * 인스턴스 클릭해서 인스턴스 창으로 이동
 * 인스턴스 시작버튼 클릭
 * 인스턴스 중지, 잠시 꺼둔다.
 * 인스턴스 종료, 인스턴스 삭제
 * 사용할 os 선택. 우분투 선택.
 * 키페어 생성 후 온라인보다는 usb같은 하드웨어에 저장한다.
 * 인스턴스 유형. 프리티어 사용가능 선택
 * 
 * 연결 방법
 * VScode나 터미널에서...
 * ssh -i "cookiecloud.pem" ubuntu@ec2-3-34-95-157.ap-northeast-2.compute.amazonaws.com
 * 입력 해서 볼 수 있다.
 * 웹페이지상에 인스턴스 연결로 볼 수 있다.
 * 
 * mysql을 우분투 인스턴스에 설치
 * mysql 설치 명령어
 * 우분투 서버를 업데이트를 먼저 하고, mysql-server 설치
 * sudo apt-get update
 * sudo apt-get install mysql-server
 * 
 * EC2 우분투 mysql 접속
 * sudo mysql -u root -p
 * 비밀번호 입력창 뜨면 그냥 엔터
 * 
 * 데이터베이스 세팅
 * 1. 사용할 데이터베이스 하나 만들어준다.
 * create databases 이름;
 * 확인)show databases;
 * 
 * 이 데이터베이스를 사용해야하니까 유저를 만들어서 사용하자.
 * 접속할때 유저정보가 있어야 접속이 가능하니까
 * 사용할 유저 생성
 * create user '유저이름'@'%' identified by '비밀번호';
 * ex) create user'admin'@'%' identified by '1234';
 * 
 * 만든 유저에게 데이터베이스 권한을 주자.
 * grant all on 데이터베이스이름.* to '유저이름'@'%';
 * ex) grant all on teamproject.* to 'admin'@'%';
 * 
 * 권한이 주어졌는지 확인
 * show grants for '유저이름';
 * 
 * 인스턴스 페이지에서
 * 하단에 보안탭을 클릭하면.
 * 
 * 보안그룹.
 * 인바운드 규칙 : 네트워크에 들어오는 정보.
 *              클라이언트에서 서버로.
 * 아웃바운드 규칙 : 네트워크에서 나가는 정보.
 *              클라이언트에서 요청으로 하고 서버에서 클라이언트로 다시 보내준다.
 * 
 * 보안규칙 추가에 인바운드, 아웃바운드에
 * HTTP, HTTPS, MYSQL 모두 추가해준다.
 * 
 * 보안그룹 규칙설정을 끝냈으면 우리가 EC2에 설치한 mysql 접속 허용 설정을 하자.
 * sudo vi /etc/mysql/mysql.conf.d/mysqld.cnf;
 * 여기서 수정할 부분은 bind-adress의 127.0.0.1 부분을 0.0.0.0 이렇게 모두로 설정해주면 된다.
 * 수정보드는 i를 눌러서 들어갈수 있다.
 * :wq! >> 저장후 종료
 * :q! >> 종료
 * :w! >> 강제저장
 * 
 * mysql 서버 재실행
 * sudo service mysql restart
 * 
 * -----------외부접속 끝
 * 
 * 로컬에 워크벤치에서
 * connection을 추가
 * connection 옵션은 hostname에 인스턴스 퍼블릭 IPv4 DNS 주소를 입력
 * port는 3306.
 * username은 접속할 유저이름. (권한 부여했던 이름)
 * password는 store in ... 버튼을 눌러서 mysql 비밀번호 입력
 * 잘 되면 mysql 화면이 보인다. 보이는 화면은 우리가 만든 uc2 우분투에 설치한 mysql
 * 
 * 프로젝트 EC2 우분투에 설치하기
 * 프로젝트를 깃허브에 올리고
 * config.js 내용 확인 수정,
 * DB이름, 비밀번호, 유저이름을 EC2 우분투에 설치한 mysql의 접속 옵션과 동일하게 바꿔준다.
 * 인스턴스에 git init하고
 * git remote add origin 깃 저장소 주소
 * pull 해서 갱신
 * 
 * node.js를 설치
 * sudo apt-get update
 * sudo apt-get install -y build-essential
 * sudo apt-get install curl
 * // 원하는 노드 버전을 적어준다
 * curl -sL https://deb.nodesource.com/setup_16.x | sudo -E bash --
 * 
 * sudo apt-get install -y nodejs
 * 
 * node 버전 확인. node -v
 * npm 버전 확인/ npm -v
 * 
 * EC2 포트 포워딩
 * 뒤에 포트번호 안보이게 접속
 * 
 * http 80, https 443 포트
 * 
 * 명령어
 * sudo iptables -t nat -A PREROUTING -i eth0 -p tcp --dport 80 -j REDIRECT --to-port 3010
 * dport 80, --to-port 3010 >> 80번 포트로 접속하면 3010 포트로 재매핑
 * 
 * 포트포워딩을 확인하는 명령어
 * sudo iptables -t nat -L --line-numbers
 * 
 * 포트포워딩 삭제 명령어
 * sudo iptables -t nat -D PREROUTING 인덱스번호
 * 
 * 
/////////////////////////////// 여기서 부터
// pm2 설치 명령어 npm i pm2

// packjson.json에 start 부분을 pm2 start app.js로 변경

// pm2 설치 서버가 종료되어도 노드 서버 실행

// npx pm2 monit : 상태 불러오기. (list, logs, custom metrics, metadata 등이 나옴)

// npx pm2 logs : 모든 로그 불러오기.

// npx pm2 logs --error : 에러 로그 불러오기.

// npx pm2 list : 리스트(npm start 하면 나왔던 표) 불러오기.

// npx pm2 kill : pm2 종료

// npx pm2 start app.js : app.js 실행

// npx pm2 reload all : 서버 재시작
 */