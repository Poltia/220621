const init = {
    changeInfo: false,
};

function reducer(state = init, action) {
    const { type, payload } = action;
    switch (type) {
        case "CHANGE_INFO":
            return {
                changeInfo: payload,
            };

        default:
            return state;
    }
}

export default reducer;
