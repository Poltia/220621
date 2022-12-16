import React from "react";
import { useSelector } from "react-redux";
import { TxWrap } from "../styles/TxInfoStyle";

const TxInfo = () => {
    const info = useSelector((state) => state.TxInfo);

    return (
        <TxWrap>
                <h1>Transaction info.</h1>
            <table>
                <tr>
                    <td>blockHash: </td>
                    <td>{info.blockHash}</td>
                </tr>
                <tr>
                    <td>blockNumber: </td>
                    <td>{info.blockNumber}</td>
                </tr>
                <tr>
                    <td>from: </td>
                    <td>{info.from}</td>
                </tr>
                <tr>
                    <td>gas: </td>
                    <td>{info.gas}</td>
                </tr>
                <tr>
                    <td>gasPrice: </td>
                    <td>{info.gasPrice}</td>
                </tr>
                <tr>
                    <td>hash: </td>
                    <td>{info.hash}</td>
                </tr>
                <tr>
                    <td>input: </td>
                    <td>{info.input}</td>
                </tr>
                <tr>
                    <td>nonce: </td>
                    <td>{info.nonce}</td>
                </tr>
                <tr>
                    <td>to: </td>
                    <td>{info.to}</td>
                </tr>
                <tr>
                    <td>transactionIndex: </td>
                    <td>{info.transactionIndex}</td>
                </tr>
                <tr>
                    <td>value: </td>
                    <td>{info.value}</td>
                </tr>
                <tr>
                    <td>type: </td>
                    <td>{info.type}</td>
                </tr>
                <tr>
                    <td>chainId: </td>
                    <td>{info.chainId}</td>
                </tr>
                <tr>
                    <td>v: </td>
                    <td>{info.v}</td>
                </tr>
                <tr>
                    <td>r: </td>
                    <td>{info.r}</td>
                </tr>
                <tr>
                    <td>s: </td>
                    <td>{info.s}</td>
                </tr>
            </table>
        </TxWrap>
    );
};

export default TxInfo;
