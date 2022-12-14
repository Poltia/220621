import axios from "axios";

function numberList() {
    return async (dispatch, getState) => {
        const numbers = await axios({
            method: "post",
            url: "http://localhost:4000/blocknumbers",
        });
        dispatch({ type: "NUM_LIST", payload: numbers.data });
    };
}

function BlockInfo(number, nav) {
    return async (dispatch, getState) => {
        const block = await axios({
            method: "post",
            url: "http://localhost:4000/block",
            data: { number },
        });
        dispatch({ type: "BLOCK", payload: block.data });
        nav("/block");
    };
}

function lookupBlock(number, nav) {
    return async (dispatch, getState) => {
        const block = await axios({
            method: "post",
            url: "http://localhost:4000/lookupblock",
            data: { number },
        });
        dispatch({ type: "BLOCK", payload: block.data });
        nav("/block");
    };
}

export const BlockAction = { numberList, BlockInfo, lookupBlock };
