const merkle = require("merkle");
// Merkle Tree는 Block에 포함된 트랜잭션들을 나무형태로 요약한것

const data = ["data1", "data2", "data3", "data4", "data5", "data6"];

/* 머클트리
머클트리는 비트코인과 다른 암호화폐에 필수적인 요소.
블록헤더에 있는 각 블록들의 필수요소이고 데이터들을 해시화해서 더한 후 해시화를 반복해서 트리처럼 뻗어 마지막 루트 해시값을 구한다.
머클루트가 암호화폐의 마이닝과 트랜잭션 검증을 처리한다. */

const merkleTree = merkle("sha256").sync(data);
const Root = merkleTree.root();
console.log("Root : " + Root);
