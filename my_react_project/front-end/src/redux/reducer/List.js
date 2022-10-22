const init = {
    list: [],
};

function reducer(state = init, action) {
    const { type, payload } = action;
    switch (type) {
        case "LIST":
            return {
                ...state,
                list: payload.list,
            };
        default:
            return state;
    }
}

export default reducer;
