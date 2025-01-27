export class BlockHeader implements IBlockHeader {
    public version: string;
    public height: number;
    public timestamp: number;
    public previousHash: string;
    // 블록을 만들때 블록의 바디와 헤더로 나눠놓은 것은 이해도를 높이기 위함이다.
    // header에 이전 블록의 정보가 필요하기 때문에 생성 단계에서 IBlock의 형태인 _previousBlock을 매개변수로 전달함
    constructor(_previousBlock: IBlock) {
        this.version = BlockHeader.getVersion();
        this.timestamp = BlockHeader.getTimestamp();
        // 이전 블록의 높이에서 1을 증가 시킴
        this.height = _previousBlock.height + 1;
        // 이전 블록의 해시값
        this.previousHash = _previousBlock.hash;
    }
    // static 메서드를 사용하면 인스턴스에 메서드가 포함되지 않아서 인스턴스 생성마다 메서드가 생성되는 비효율적인 일을 방지할 수 있다.
    // 클래스 내에서 함수를 만들어 사용하고 싶을 때 static 메서드를 주로 활용한다.
    public static getVersion() {
        return "1.0.0";
    }

    // 생성 시간
    public static getTimestamp() {
        return new Date().getTime();
    }
}

/* implements는?
extends 와 implements 의 차이
extends: 클래스를 상속 받을 때 사용한다. 클래스를 정의할 때 extends를 사용해서 부모 클래스를 상속받게 되면 자식 클래스는 부모 클래스의 속성과 메서드를 가져올 수 있다. (자식 클래스에서 추가 정의할 필요가 없다!)
implements: 특정 클래스 혹은 미리 정해놓은 인터페이스와 똑같은 형태로 클래스를 정의하고 싶을 때 (extends랑은 다른 것!) */
