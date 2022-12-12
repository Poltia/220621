import React from "react";
import { useSelector } from "react-redux";

const Block = () => {
    const block = useSelector((state) => state.BlockInfo);

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
            <div>
                <button>{block.number}번 블록 트랜잭션 조회하기</button>
            </div>
        </>
    );
};

export default Block;
