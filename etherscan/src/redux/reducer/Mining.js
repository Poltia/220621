const init = {
    mining: false,
};

function reducer(state = init, action) {
    const { type, payload } = action;
    switch (type) {
        case "MINING":
            return { mining: payload };

        default:
            return state;
    }
}

export default reducer;
