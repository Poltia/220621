// 지갑 클래스

import { randomBytes } from "crypto";
import elliptic from "elliptic";
import { SHA256 } from "crypto-js";
import fs from "fs";
import path from "path";

// __dirname: 현재 폴더
const dir = path.join(__dirname, "../data");

// elliptic 인스턴스 생성
const ec = new elliptic.ec("secp256k1");

export class Wallet {
    // 지갑의 주소
    public account: string;
    // 지갑의 개인키
    public privateKey: string;
    // 지갑의 공개키
    public publicKey: string;
    // 암호화폐
    public balance: number;

    constructor(privateKey: string = "") {
        // 개인키 전달
        // 전달된 개인키가 있는지(지갑이 생성되어있는지).
        // 지갑이 없으면 새로 생성할때 getPrivateKey()를 통해서 개인키를 생성해준다.
        this.privateKey = privateKey || this.getPrivateKey();
        // 공개키
        this.publicKey = this.getPublicKey();
        // 지갑의 주소
        this.account = this.getAccount();
        this.balance = 0;

        // fs 모듈을 사용해서 프로그램을 통해 지갑을 만들때 개인키를 안전하게 저장하는게 중요한 이유.
        // 그래서 루트 폴더에 data 폴더를 만들어 준 후 createWallet()를 사용할때 마다 data 폴더에
        // 계정명과 파일명을 가지고 privateKey 값의 내용을 파일로 생성해 줬다.
        Wallet.createWallet(this);
    }

    static createWallet(myWallet: Wallet) {
        // fs 모듈을 이용해서 개인키를 저장할 파일 만들기
        // writeFileSync(파일이름, 파일내용)
        // 지갑의 주소를 파일이름으로 data폴더 경로까지 내용
        const filename = path.join(dir, myWallet.account);
        // 파일의 내용은 해당 지갑의 개인키
        const filecontent = myWallet.privateKey;
        // 파일이름은 지갑의 주소, 내용은 지갑의 개인키
        fs.writeFileSync(filename, filecontent);
    }

    public getPrivateKey(): string {
        return randomBytes(32).toString("hex");
    }

    public getPublicKey(): string {
        // 개인키를 공개키로
        // 현재 개인키의 type은 문자열이고, elliptic으로 해석을 가능하게 변환작업
        // 타원곡선 알고리즘을 사용해서 공개키를 만들어준다.
        const keyPair = ec.keyFromPrivate(this.privateKey);
        return keyPair.getPublic().encode("hex", true);
    }

    // 지갑의 목록 가져오기
    static getWalletList(): string[] {
        const files: string[] = fs.readdirSync(dir);
        // 파일 이름이 담긴 string배열을 반환
        return files;
    }

    // 정보를 받고 개인키를 구해주는 함수
    static getWalletPrivateKey(account: string): string {
        const filepath = path.join(dir, account);
        // 해당 파일을 읽어옴
        // data 폴더에 만들어진 파일을 가져오고
        const filecontent = fs.readFileSync(filepath);
        // 내용(개인키)을 문자열로 반환
        return filecontent.toString();
    }

    // 전자 서명 만드는 함수
    static createSign(obj: any): elliptic.ec.Signature {
        // 객체로 공개키와 주소를 sender에 전달
        const {
            sender: { publicKey, account },
            received, // 보낼 계정
            amount, // 보낼 금액
        } = obj; // server.ts에서 전달받은 값

        // 해싱
        // 합쳐서 해싱 하고 문자열로 저장
        const hash: string = SHA256([publicKey, received, amount].join("")).toString();

        // 개인키
        const privateKey: string = Wallet.getWalletPrivateKey(account);

        // 서명
        const keyPair: elliptic.ec.KeyPair = ec.keyFromPrivate(privateKey);

        // 서명을 만들어서 반환
        return keyPair.sign(hash, "hex");
    }

    // 지감의 주소
    public getAccount(): string {
        // Buffer에 있는 동안 바이너리 데이터를 조작할 수 있기 때문
        return Buffer.from(this.publicKey).slice(26).toString();
    }
}
