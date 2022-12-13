const init = {
    Tx: [],
};

function reducer(state = init, action) {
    const { type, payload } = action;
    switch (type) {
        case "TX_LIST":
            return { Tx: payload };

        default:
            return state;
    }
}

export default reducer;
