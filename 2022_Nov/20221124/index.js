const { Contract } = require("./control/compile");
const { Client } = require("./control/client");

const [abi, bytecode] = Contract.compile("test.sol");

const client = new Client("ws://127.0.0.1:9005");

const contract = new client.web3.eth.Contract(abi);
const txObject = { data: bytecode };

const Address = "0x5a42cf26741f090f48b6db1ddd468e54cf4e58a3";

async function init() {
    // deploy() : 반환값이 promise 객체
    // 트랜잭션이 처리 될때까지 기다린다.
    const instance = await contract.deploy(txObject).send({ from: Address });
}
init();

// 배포하고 메소드나 변수들을 가져올 때 필요한게 contract Address
// instance 객체 안에 options.address 에 contract Address가 들어있다
//const CA = instance.options.address;
const CA = "0xB5cCeb1208Fd6c38140d42b29152D7D378edB7b3";
//console.log(CA);
// 출력 -> 0xB5cCeb1208Fd6c38140d42b29152D7D378edB7b3

// 컨트랙트 조회해서 함수와 변수 가져오기
// 필요한게 abi와 contract address
const deployed = new client.web3.eth.Contract(abi, CA);
deployed.methods
    .value()
    .call()
    .then((data) => {
        console.log(data); // 출력 -> Hi
    });

deployed.methods
    .setValue("white")
    .send({ from: Address })
    .then((data) => {
        console.log(data); // 출력 -> white
    });
