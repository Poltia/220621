const init = {
    blockHash: "",
    blockNumber: 0,
    from: "",
    gas: 0,
    gasPrice: "",
    hash: "",
    input: "",
    nonce: 0,
    to: "",
    transactionIndex: 0,
    value: "",
    type: 0,
    chainId: "",
    v: "",
    r: "",
    s: "",
};

function reducer(state = init, action) {
    const { type, payload } = action;
    switch (type) {
        case "TX_INFO":
            return {
                blockHash: payload.blockHash,
                blockNumber: payload.blockNumber,
                from: payload.from,
                gas: payload.gas,
                gasPrice: payload.gasPrice,
                hash: payload.hash,
                input: payload.input,
                nonce: payload.nonce,
                to: payload.to,
                transactionIndex: payload.transactionIndex,
                value: payload.value,
                type: payload.type,
                chainId: payload.chainId,
                v: payload.v,
                r: payload.r,
                s: payload.s,
            };

        default:
            return state;
    }
}

export default reducer;
