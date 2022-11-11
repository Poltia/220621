import { Block } from "@core/blockChain/block";
import { DIFFICULTY_ADJUSTMENT_INTERVAL } from "@core/config";

// 블록의 체인
export class Chain {
    // blockchain: Block배열의 타입을 가진 변수
    private blockchain: Block[];

    // 처음에 생성될때, construcrot로 클래스를 동적할당으로 생성
    constructor() {
        // 최초블럭은 거의 하드코딩으로 넣어 준다.
        // 생성 될때 배열에 최초 블록하나 추가. 블록체인에 최초 블록 추가
        this.blockchain = [Block.getGENESIS()];
    }

    // 현재 연결된 블록들 리스트를 확인하기 위해 getChain()로 연결된 노드들을 확인할 수 있는 함수
    public getChain(): Block[] {
        return this.blockchain;
    }

    // 현재 연결된 블록들의 갯수, 길이. 연결된 노드의 갯수
    public getLength(): number {
        return this.blockchain.length;
    }

    // 맨 마지막 블록을 확인하는 함수. 맨 마지막 노드 확인
    public getLatestBlock(): Block {
        return this.blockchain[this.blockchain.length - 1];
    }

    // 블록체인에 블록을 추가하는 함수. 매개변수로는 블록의 내용을 받는다.
    // 반환값으로는 Failable<Block, string> Block타입과 string타입을 반환 할 수 있는 함수
    // 반환 값은 객체이고 { isError: true, value: 여기에 우리가 설정한 타입 }
    // value라는 키값에 Block 타입이나 string 타입을 허용한다.
    public addBlock(data: string[]): Failable<Block, string> {
        // getLatestBlock()로 마지막 블록을 가져오고
        const previousBlock = this.getLatestBlock();
        // getAdjustmentBlock()로 10번째 전 블록을 가져오고
        const adjustmentBlock: Block = this.getAdjustmentBlock();
        // generateBlock()로 마이닝이 끝난 추가할 블록을 가져오고
        const newBlock = Block.generateBlock(previousBlock, data, adjustmentBlock);
        // 새로운 블록을 검증하는데 isvalidNewBlock 이전블록(마지막블록)과 새로운 블록을 매개변수로 전달해서
        // 블록의 높이, 새로운 블록의 이전 블록 해시, 새로운 블록의 해시를 검사
        const isVaild = Block.isValidNewBlock(newBlock, previousBlock);

        // 블록의 검증이 끝나고 에러가 있으면 반환
        if (isVaild.isError) return { isError: true, value: "ERROR" };

        // 다 통과했으면 새로운 블록을 블록체인에 추가
        this.blockchain.push(newBlock);

        // 에러가 없다고 알려주고 value로 Block 타입의 newBlock 반환
        return { isError: false, value: newBlock };
    }

    // 체인 검증 코드
    // 매개변수로 Block타입의 chain배열을 매개변수로 받고
    // 블록체인을 받고
    public isValidChain(chain: Block[]): Failable<undefined, string> {
        // 최초 블록 검사하는 코드
        //const genesis = chain[0];

        // 체인의 유효성 검사
        for (let i = 0; i < chain.length; i++) {
            // 현재index의 블록
            const newBlock = chain[i];
            // 현재index의 이전블록
            const previousBlock = chain[i - 1];
            // 블록 검증 시도
            const isValid = Block.isValidNewBlock(newBlock, previousBlock);
            // 검사 오류시
            if (isValid.isError) return { isError: true, value: isValid.value };
        }

        // 다 통과하면 패스!
        return { isError: false, value: undefined };
    }

    // replaceChain은 본인과 상대방의 체인을 검사하는 함수
    public replaceChain(receivedChain: Block[]): Failable<undefined, string> {
        // 본인 체인과 상대방 체인을 검사
        // 상대방
        const latestReceivedBlock: Block = receivedChain[receivedChain.length - 1];
        // 본인
        const latestBlock: Block = this.getLatestBlock();
        // 높이가 0이면 받은 블록이 최초블록이라 검사할 필요가 없고
        if (latestReceivedBlock.height == 0) {
            return { isError: true, value: "본인의 블록보다 길거나 같은 블록" };
        }
        // 본인의 블록이 더 길거나 같은 블록이면 검사할 필요가 없다
        if (latestReceivedBlock.height <= latestBlock.height) {
            return { isError: true, value: "본인의 블록보다 길거나 같은 블록" };
        }
        // 여러명이 빠르게 추가하다보면 검증단계에서 블록의 길이 차이가 있는데
        // 해시 비교를 해서 이전 블록의 해시가 같다면 블록의 갯수 차이가 있는 것으로
        // 검사에러. 이 문제는 사람들이 빠르게 블록을 추가하다가 여러명이 비슷하게 블록 생성이 됐을때 일어남
        if (latestReceivedBlock.previousHash === latestBlock.hash) {
            return { isError: true, value: "블록이 하나 모자람" };
        }

        // 본인의 체인이 더 짧다면 체인을 갱신해줌
        // 체인을 갱신
        this.blockchain = receivedChain;

        // 다 통과 했으면 반환
        return { isError: false, value: undefined };
    }

    // 생성 시점 기준으로 블록 높이 -10인 블록 구하기
    // 현재 높이 값 < DIFFICULTY_ADJUSTMENT_INTERVAL : 최초 블록을 반환
    // 현재 높이 값 > DIFFICULTY_ADJUSTMENT_INTERVAL : -10번째 블록 반환
    public getAdjustmentBlock() {
        // 자신의 길이를 getLength()로 가져오고
        // 자신의 길이가 10보다 작으면 최초블럭을 반환한다
        // 길이가 10보다 크면 -10번째 블록을 반환해준다
        const currentLength = this.getLength();
        const adjustmentBlock: Block =
            this.getLength() < DIFFICULTY_ADJUSTMENT_INTERVAL
                ? Block.getGENESIS()
                : this.blockchain[currentLength - DIFFICULTY_ADJUSTMENT_INTERVAL];

        return adjustmentBlock; // 최초블록 또는 -10번째 블록 반환
    }
}
