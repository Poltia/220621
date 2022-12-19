const express = require("express");
const session = require("express-session");
const http = require("http");
const Web3 = require("web3");
const cors = require("cors");
const { sequelize, Block } = require("./sequelize");

const app = express();

// sequelize 연결 및 테이블 생성
sequelize
    .sync({ force: false })
    .then(() => {
        console.log("DB Connected");
    })
    .catch((error) => {
        console.log(error);
    });

// 리액트 포트 연결
const options = {
    origin: "http://localhost:3000",
};
app.use(cors(options));
app.use(express.json());

// web3 생성 및 연결
const web3 = new Web3(new Web3.providers.WebsocketProvider("ws://127.0.0.1:9005"));

// 새로운 블록 생성시
web3.eth.subscribe("newBlockHeaders", function (error, result) {
    if (!error) {
        // result에 새로생긴 블록 값이 담김
        console.log(result);

        // 생성된 블록 정보 DB에 저장
        Block.create({
            parentHash: result.parentHash,
            sha3Uncles: result.sha3Uncles,
            miner: result.miner,
            stateRoot: result.stateRoot,
            transactionsRoot: result.transactionsRoot,
            receiptsRoot: result.receiptsRoot,
            difficulty: result.difficulty,
            number: result.number,
            gasLimit: result.gasLimit,
            gasUsed: result.gasUsed,
            timestamp: result.timestamp,
            extraData: result.extraData,
            mixHash: result.mixHash,
            nonce: result.nonce,
            baseFeePerGas: result.baseFeePerGas,
            hash: result.hash,
            size: result.size,
        }).then(() => {
            console.log(result.number + "번 블록 저장");
        });
    }
});

// 블록 번호 DB에서 가져오기
app.post("/blocknumbers", async (req, res) => {
    const blocks = await Block.findAll({
        attributes: [/*"id", */ "number"],
        order: [["number", "DESC"]], // 정렬
        limit: 25, // 가져올 갯수 제한
    });
    res.send(blocks);
});

// 선택한 블럭 정보 DB에서 가져오기
app.post("/block", async (req, res) => {
    const { number } = req.body;
    const block = await Block.findOne({
        where: { number: number },
    }).then((e) => {
        res.send(e);
    });
});

// 트랜잭션 목록 불러오기
app.post("/txlist", async (req, res) => {
    const { blockNumber } = req.body;
    const Tx = await web3.eth.getBlock(blockNumber);
    res.send(Tx);
});

// 해당 트랜잭션 정보 가져오기
app.post("/txinfo", async (req, res) => {
    const { tx } = req.body;
    const transaction = await web3.eth.getTransaction(tx);
    res.send(transaction);
});

// 블록 번호로 조회해서 정보 가져오기
app.post("/lookupblock", async (req, res) => {
    const { number } = req.body;
    const block = await web3.eth.getBlock(number);
    res.send(block);
});

// // // // // // // // // //
app.get("/test", async (req, res) => {
    const accounts = await web3.eth.getAccounts();
    const blockNum = (await web3.eth.getBlockNumber()) - 9;
    const blockHash = await web3.eth.getBlock(blockNum);
    const transactionInfo = await web3.eth.getTransaction(
        "0xf53fe1de424e981f9b0ab20f4290a24a048d1a7c8ce36e3ad8a73cefcfafee26"
    );
    res.send(blockHash);
});
// // // // // // // // // //

app.listen(4000, () => {
    console.log("Server Connected From port 4000");
});
