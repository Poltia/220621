import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import TxList from "../components/TxList";
import { TxAction } from "../redux/middleware/TxAction";

const Block = () => {
    const nav = useNavigate();
    const dispatch = useDispatch();

    // 트랜잭션 리스트를 보여줄 변수
    const [close, setClose] = useState(true);

    // 트랜잭션 목록 불러오는 함수
    const TxListCheck = () => {
        dispatch(TxAction.TxList(block.number));
        setClose(false);
    };

    // 블록 정보 가져오기
    const block = useSelector((state) => state.BlockInfo);
    // 해당 블록의 트랜잭션 가져오기
    const txList = useSelector((state) => state.TxList.Tx);

    return (
        <>
            <div>{block.number} Block Info.</div>
            <table>
                <tr>
                    <td>parentHash</td>
                    <td>{block.parentHash}</td>
                </tr>
                <tr>
                    <td>sha3Uncles</td>
                    <td>{block.sha3Uncles}</td>
                </tr>
                <tr>
                    <td>miner</td>
                    <td>{block.miner}</td>
                </tr>
                <tr>
                    <td>stateRoot</td>
                    <td>{block.stateRoot}</td>
                </tr>
                <tr>
                    <td>transactionsRoot</td>
                    <td>{block.transactionsRoot}</td>
                </tr>
                <tr>
                    <td>receiptsRoot</td>
                    <td>{block.receiptsRoot}</td>
                </tr>
                <tr>
                    <td>difficulty</td>
                    <td>{block.difficulty}</td>
                </tr>
                <tr>
                    <td>number</td>
                    <td>{block.number}</td>
                </tr>
                <tr>
                    <td>gasLimit</td>
                    <td>{block.gasLimit}</td>
                </tr>
                <tr>
                    <td>gasUsed</td>
                    <td>{block.gasUsed}</td>
                </tr>
                <tr>
                    <td>timestamp</td>
                    <td>{block.timestamp}</td>
                </tr>
                <tr>
                    <td>extraData</td>
                    <td>{block.extraData}</td>
                </tr>
                <tr>
                    <td>mixHash</td>
                    <td>{block.mixHash}</td>
                </tr>
                <tr>
                    <td>nonce</td>
                    <td>{block.nonce}</td>
                </tr>
                <tr>
                    <td>baseFeePerGas</td>
                    <td>{block.baseFeePerGas == null && "null"}</td>
                </tr>
                <tr>
                    <td>hash</td>
                    <td>{block.hash}</td>
                </tr>
                <tr>
                    <td>size</td>
                    <td>{block.size == null && "null"}</td>
                </tr>
            </table>
            <button onClick={TxListCheck}>{block.number}번 블록 트랜잭션 조회하기</button>
            {!close && txList.length == 0 ? (
                <div>
                    <div>Transactions List</div>
                    <div>There's no transactions</div>
                </div>
            ) : close ? (
                <div></div>
            ) : (
                <div>
                    <div>Transactions List</div>
                    <div>
                        {txList.map((el, index) => (
                            <TxList key={index} tx={el} index={index} />
                        ))}
                    </div>
                </div>
            )}
        </>
    );
};

export default Block;
