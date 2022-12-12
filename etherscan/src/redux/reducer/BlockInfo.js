const init = {
    parentHash: "",
    sha3Uncles: "",
    miner: "",
    stateRoot: "",
    transactionsRoot: "",
    receiptsRoot: "",
    difficulty: "",
    number: 0,
    gasLimit: 0,
    gasUsed: 0,
    timestamp: 0,
    extraData: "",
    mixHash: "",
    nonce: 0,
    baseFeePerGas: null,
    hash: "",
    size: null,
};

function reducer(state = init, action) {
    const { type, payload } = action;
    switch (type) {
        case "BLOCK":
            return {
                parentHash: payload.parentHash,
                sha3Uncles: payload.sha3Uncles,
                miner: payload.miner,
                stateRoot: payload.stateRoot,
                transactionsRoot: payload.transactionsRoot,
                receiptsRoot: payload.receiptsRoot,
                difficulty: payload.difficulty,
                number: payload.number,
                gasLimit: payload.gasLimit,
                gasUsed: payload.gasUsed,
                timestamp: payload.timestamp,
                extraData: payload.extraData,
                mixHash: payload.mixHash,
                nonce: payload.nonce,
                baseFeePerGas: payload.baseFeePerGas,
                hash: payload.hash,
                size: payload.size,
            };

        default:
            return state;
    }
}

export default reducer;
