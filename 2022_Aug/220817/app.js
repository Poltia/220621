
/**
 * crypto 암호화
 * 
 * 단방향, 양방향 암호방식이 있다.
 * 단방향은 복호화해서 원래의 값을 알 수 없고,
 * 양방향은 복호화해서 원래의 값을 알 수 있다.
 * ex) 네이버에서 비밀번호 찾기를 시도할 경우 비밀번호를 알려주지 않고 비밀번호를 변경해준다.
 * 
 * 복호화란, 암호문을 편문으로 변환 하는 과정.
 * 부호화(인코딩)된 데이터를 부호화되기 전 형태로 바꿔서 사람이 읽을 수 있는 형태로 되돌려 놓는 것.
 * 
 * 단방향 암호화가 요즘 사이트들이 비밀번호 찾기를 하면 비밀번호를 직접 알려주지않고 비밀번호를 변경하라고 하는데,
 * 굳이 복호화를 할 필요가 없기 때문이다.
 * 
 * 단방향의 비교 검증 방법
 * 데이터베이스에 저장된 암호화
 * 로그인할때 입력받은 비밀번호를 단방향 암호화를 통해 비교를 하면
 * 기존의 비밀번호는 저장되지 않고, 암호화된 문자열로만 비교한다.
 * 
 * 단방향 암호화는 해쉬 알고리즘을 사용해서 문자열을 고정된 길이의 문자열로 암호화시킨다.
 * (비밀번호의 길이가 계정마다 다르더라도 같은 길이로 암호화시킴)
 */

// crypto 모듈 가져오기
const crypto = require("crypto");

// 임의의 비밀번호
const pw = "880423";

// 단순 해싱으로 비밀번호 해싱
let hashAlgor = crypto.createHash("sha512");
// 사용할 해시 알고리즘은 sha512 암호 알고리즘.

/* 해시 알고리즘의 종류는 (md5, sha1, sha256, sha512 등등)이 있다.
sha-512 알고리즘은 국가안보국(NSA)이 설계한 암호 해쉬함수이다.
sha512는 512비트(64바이트) 해시값을 만들어주는데,
일반적으로 길이가 128자리인 16진수로 랜더링 된다. */

// 선택된 알고리즘으로 해싱한다.
let hashing = hashAlgor.update(pw); //매개변수는 암호화시킬 문자열.

// 보여줄 인코딩 설정
let hasString = hashing.digest("base64");
// 인코딩할 알고리즘을 넣어준것이 base64
// digest()를 사용해서 해싱된 객체를 base64로 문자열로 반환해준다.
console.log(hasString);

/* 이렇게 하는 이유는 알고리즘으로 암호화하면 해커가 뚫기 힘들게 하려고.
지금 이렇게만 해쉬 알고리즘으로 암호화하면 같은 값이 들어가면 암호화된 문자열도 계속 같기 때문에
암호화의 효과가 좋지 않다.

salt 기법
암호화를 강하게 해준다.
복호화를 방해하기 위해서 단방향 암호화 salt를 사용.
해커의 복호화를 힘들게 하기위해서.
비밀번호에 추가 문자열을 덧붙여서 같은 문자열이라도 암호화를 시키면 다른 해쉬 출력값을 가지도록 한다.
salt 값은 항상 비밀번호에 매번 추가시켜서 사용해야해서 salt값을 잘 보관하고 숨겨놔야한다. .env
*/

// salt값을 만들어보자.
// 크립트의 랜덤바이트 생성 함수. 랜덤한 바이트를 생성 시킬 수 있다.
// 32바이트 이상이어야 짐작하기가 어렵다.

// randomBytes() 랜덤한 바이트를 만들어주는 함수
// 매개변수 인자는 첫 매개변수가 바이트의 사이즈
/*
crypto.randomBytes(32, function(err, byte) {
    // 32bit 길이의 랜덤한 byte 생성
    if (err) {
        console.log(err);
    } else {
        console.log(byte);
    }
});*/

// 크립트의 randomBytes()로 salt값을 만들어서 데이터베이스에 저장한 후
// 모든 패스워드가 고유의 salt값을 가지게 할 수도 있다.

// salt기법과 한가지 더 해커를 화나게 할 수 있는 방법~!
/* 키 스트레칭
키 스트레칭은 salt와 패스워드를 해시 함수에 넣는 과정을 반복시켜서 해커가 복호화 하는것을 느리게 하는 방법
계산량을 늘려서 값 출력을 임의적으로 느리게 만드는 방법

암호화 모듈들
pbkdf, scrypto, bcrypto 세가지 방법이 있는데,
bcrypto를 많이 사용하는 편이다.

pbkdf
해시함수의 컨테이너 역할을 하고
해시함수에 salt를 적용해서 해시함수의 반복횟수를 지정해서 암호화 할 수 있고
IOS표준에 적합하며 NIST에서 승인된 알고리즘이다.

scrypto
강력하지만 많은 메모리와 CPU를 사용해 역효과가 날 수 있다. 부하가 걸릴 수 있다.
오프라인 공격(서버로의 직접적인 공격)에 많이 강력하지만 자원을 많이 써서 위험하다.
OpenSSL 1.1 이상을 제공하는 시스템에서만 사용 가능.
주어진 자원에서 공격자가 사용할 수 있는 병렬 처리양이 한정되어 있다.

bcrypto
보안으로 유명한 OpenBSD에서 사용하고
.NET 및 자바를 포함한 많은 플랫폼 언어에서도 사용할 수 있다.
반복횟수를 늘려 연산속도를 늦출 수 있고, 연산능력이 증가해도 공격에 대비를 할 수 있다.
암호화된 string중에서 일부분을 salt로 쓰고 있어서, 그 데이터를 얻어온 후에 pw와 같이 보내서 비교한다.
*/
/*
// pbkdf
crypto.randomBytes(32, function (err, byte) {
    crypto.pbkdf2(
        pw, // 해싱하려고 한 문자열 (password)
        byte.toString("base64"), // 문자열로 변환하는데, 인코딩방식은 base64
        125246, // 반복횟수를 지정. 반복횟수가 많아질수록 복호화하기 어려워지고 시간도 많이 걸린다.
        64, // 길이를 설정
        "sha512", // 암호화 알고리즘 설정
        function(err, hashed){ // 마지막이 콜백함수
            console.log(hashed);
        }
  );
});*/

// salt값을 만들어주는 함수
const createSalt = () => {
    // 암호화를 처리하는데 시간이 걸리기 때문에
    // Promise를 사용해서 비동기 처리를 한다.
    new Promise((resolve, reject) => {
        // 랜덤 바이트 생성. 길이가 64
        crypto.randomBytes(64, (err, byte) => {
            if (err) {
                // 실패시 err값 반환
                reject(err);
            } else {
                // 성공시 resolve()로 반환
                resolve(byte.toString("base64"));
            }
        });
    });
};

// 비밀번호를 해싱 해주는 함수
const pwHashed = (userId, password) => {
    // Promise를 이용해서 비동기 처리
    new Promise((resolve, reject) => {

    })
}

/* 간단 암호화된 로그인을 만들어보자
사용할 모듈
express, fs, mysql2

express열고 데이터베이스 연결까지
데이터베이스 이름은 test8 로
express에서 body객체 사용
*/

const express = require("express");
const mysql = require("mysql2");
const fs = require("fs");

const client = mysql.createConnection({
    user: "root",
    password: "12345678",
    database: "test8",
    multipleStatements: true
});

const app = express();

app.use(express.urlencoded({ extended : false }));

const PORT = 3000;
app.listen(PORT, () => {
    console.log(PORT, "번 포트 열림");
});