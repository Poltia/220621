const init = {
    list: [],
    indexNum: 0,
};

function reducer(state = init, action) {
    const { type, payload } = action;
    switch (type) {
        case "LIST":
            return {
                ...state,
                list: payload.list,
            };

        case "SET_INDEX":
            return {
                ...state,
                indexNum: payload,
            };

        default:
            return state;
    }
}

export default reducer;
