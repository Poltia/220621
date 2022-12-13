import axios from "axios";

function TxList(blockNumber) {
    return async (dispatch, getState) => {
        const txList = await axios({
            method: "post",
            url: "http://localhost:4000/txlist",
            data: { blockNumber },
        });
        dispatch({ type: "TX_LIST", payload: txList.data.transactions });
    };
}

function TxInfo(tx, nav) {
    return async (dispatch, getState) => {
        const transaction = await axios({
            method: "post",
            url: "http://localhost:4000/txinfo",
            data: { tx },
        });
        dispatch({ type: "TX_INFO", payload: transaction.data });
        console.log(transaction.data);
        nav("/txinfo");
    };
}

export const TxAction = { TxList, TxInfo };
