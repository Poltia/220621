import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import TxList from "../components/TxList";
import { TxAction } from "../redux/middleware/TxAction";
import { BlockWrap, TD, TxBtn } from "../styles/BlockStyle";

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
        <BlockWrap>
            <h1>{block.number} Block Info.</h1>
            <table>
                <tr>
                    <TD>parentHash</TD>
                    <td>{block.parentHash}</td>
                </tr>
                <tr>
                    <TD>sha3Uncles</TD>
                    <td>{block.sha3Uncles}</td>
                </tr>
                <tr>
                    <TD>miner</TD>
                    <td>{block.miner}</td>
                </tr>
                <tr>
                    <TD>stateRoot</TD>
                    <td>{block.stateRoot}</td>
                </tr>
                <tr>
                    <TD>transactionsRoot</TD>
                    <td>{block.transactionsRoot}</td>
                </tr>
                <tr>
                    <TD>receiptsRoot</TD>
                    <td>{block.receiptsRoot}</td>
                </tr>
                <tr>
                    <TD>difficulty</TD>
                    <td>{block.difficulty}</td>
                </tr>
                <tr>
                    <TD>number</TD>
                    <td>{block.number}</td>
                </tr>
                <tr>
                    <TD>gasLimit</TD>
                    <td>{block.gasLimit}</td>
                </tr>
                <tr>
                    <TD>gasUsed</TD>
                    <td>{block.gasUsed}</td>
                </tr>
                <tr>
                    <TD>timestamp</TD>
                    <td>{block.timestamp}</td>
                </tr>
                <tr>
                    <TD>extraData</TD>
                    <td>{block.extraData}</td>
                </tr>
                <tr>
                    <TD>mixHash</TD>
                    <td>{block.mixHash}</td>
                </tr>
                <tr>
                    <TD>nonce</TD>
                    <td>{block.nonce}</td>
                </tr>
                <tr>
                    <TD>baseFeePerGas</TD>
                    <td>{block.baseFeePerGas == null && "null"}</td>
                </tr>
                <tr>
                    <TD>hash</TD>
                    <td>{block.hash}</td>
                </tr>
                <tr>
                    <TD>size</TD>
                    <td>{block.size == null && "null"}</td>
                </tr>
            </table>

            <TxBtn onClick={TxListCheck}>
                Show No.{block.number} Block's Transactions list
            </TxBtn>
            {!close && txList.length == 0 ? (
                <div>
                    <h2>Transactions List</h2>
                    <div>There's no transactions</div>
                </div>
            ) : close ? (
                <div></div>
            ) : (
                <div>
                    <h2>Transactions List</h2>
                    <div>
                        {txList.map((el, index) => (
                            <TxList key={index} tx={el} index={index} />
                        ))}
                    </div>
                </div>
            )}
        </BlockWrap>
    );
};

export default Block;
