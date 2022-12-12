const init = {
    numberList: [],
};

function reducer(state = init, action) {
    const { type, payload } = action;
    switch (type) {
        case "NUM_LIST":
            return { ...state, numberList: payload };
        default:
            return state;
    }
}

export default reducer;
