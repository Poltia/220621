// 최초 블록 만들기(제네시스 블록)
const merkle = require("merkle");
const SHA256 = require("crypto-js/sha256");

// 블록 헤더를 만들 클래스
class Header {
    constructor(_height, _previousHash) {
        // 블록의 버전
        this.version = Header.getVersion();
        // 블록의 높이
        this.height = _height;
        // 블록의 생성 시간
        this.timestamp = Header.getTimestamp();
        // 이전 블록의 해시값
        // 최초 블록은 이전 블록의 해시값이 없으니까 값이 없으면 0으로 만들어진 문자열을 넣어준다
        this.previousHash = _previousHash || "0".repeat(64);
    }

    // static으로 만들어서 버전 정보를 전역적으로 볼 수 있게
    static getVersion() {
        return "1.0.0";
    }

    // 블록의 생성 시간
    static getTimestamp() {
        return new Date().getTime();
    }
}

// 블록 class
class Block {
    constructor(_header, _data) {
        // 받아온 헤더의 버전을 블록에게 주고
        this.version = _header.version;
        // 헤더에서 가져온 높이
        this.height = _header.height;
        // 헤더에서 가져온 timestamp
        this.timestamp = _header.timestamp;
        // 헤더에서 가져온 previousHash
        this.previousHash = _header.previousHash;
        this.data = _data;
        this.merkleRoot = Block.getMerkleRoot(_data);
        this.hash = Block.createBlockHash(_header, Block.getMerkleRoot(_data));
    }

    // 머클 루트 가져올 함수
    static getMerkleRoot(_data) {
        const merkleTree = merkle("sha256").sync(_data);
        return merkleTree.root();
    }

    // 해시를 만드는 함수
    static createBlockHash(_header, _merkleRoot) {
        const values = Object.values(_header);
        const data = values.join("") + _merkleRoot;
        return SHA256(data).toString();
    }
}

// 2009년 1월 3일 (제네시스블록) : "더 타임즈, 은행들의 두 번째 구제 금융을 앞두고 있는 U.k. 제무장관"
// 실제 비트코인 트랜잭션에 적혀 있는 코멘트
const data = ["The Times 03/Jan/2009 Chancellor on brink of second bailout for banks"];

// 헤더 만들기
const header = new Header(0);
// 블록 만들기
const block = new Block(header, data);
console.log(block);
/*
Block {
    version: '1.0.0',
    height: 0,
    timestamp: 1667186995506,
    previousHash: '0000000000000000000000000000000000000000000000000000000000000000',
    data: [
      'The Times 03/Jan/2009 Chancellor on brink of second bailout for banks'
    ],
    merkleRoot: 'A6D72BAA3DB900B03E70DF880E503E9164013B4D9A470853EDC115776323A098',
    hash: '61c5d0ad343e0867bb659d66af1d4fbcde343d72ba86006a8f569fc4da0edec3'
}
*/

const header2 = new Header(1, block.hash);
const block2 = new Block(header2, ["두번째 블록"]);
console.log(block2);
/*
Block {
    version: '1.0.0',
    height: 1,
    timestamp: 1667186995511,
    previousHash: '61c5d0ad343e0867bb659d66af1d4fbcde343d72ba86006a8f569fc4da0edec3',
    data: [ '두번째 블록' ],
    merkleRoot: '1FF96747BAF1982B9E7337B781FA3C681086E5218D17DC45E7D38C892551C8D0',
    hash: '88a5b6628d35302daf2e9bc0c3057d66508b862c71b47a38195e4d6972333dc2'
}
*/
