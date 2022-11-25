/* 자바스크립트로 스마트컨트랙트 배포
../node/keystore 폴더에 UTC ... ...  이런 이름을 가진 파일이
우리가 personal.newAccount()로 계정을 생성 했을때 만들어지고
객체의 형태로 되어있고 암호화 되어있는 계정 파일 이라고 보면 된다.
단방향 암호화가 아니고 복호화를 통해서 개인키를 얻어내는게 가능한 내용이다.

keythereum
keystore안에 있는 키파일을 복호화해서 개인키를 구할 수 있게 해주는 라이브러리

package.json 생성
// npm init -y
keythereum 설치
// npm install keythereum
solc 설치
// npm install solc

*/

const keythereum = require("keythereum");
const path = require("path");

// keystore 안에 첫번째 파일의 address. 0x+address
const address = "0x5a42cf26741f090f48b6db1ddd468e54cf4e58a3";

// 키파일이 들어있는 폴더 상위까지의 경로
const dir = path.join(__dirname);

// 키파일의 계정정보 객체 만들기
const keyObject = keythereum.importFromFile(address, dir);
// importFromFile() 계정정보 만들어주는 함수. 매개변수 첫번째는 주소, 두번째는 경로

// recover(비밀번호, keyObject)
const privateKey = keythereum.recover("1234", keyObject).toString("hex");
console.log("0x" + privateKey); // 개인키
// 출력 -> 0x4325e1b3cbdb10a6fbb1c7709c365566f2db9ddef28633e2aa7e6ec78894ffcf
