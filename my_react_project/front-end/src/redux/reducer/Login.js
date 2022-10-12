let init = {
    id: "",
    isLogin: false,
};

function reducer(state = init, action) {
    const { type, payload } = action;
    switch (type) {
        case "LOGIN":
            return {
                id: payload.id,
                isLogin: true,
            };
        case "LOGOUT":
            return {
                id: "",
                isLogin: false,
            };
        default:
            return state;
    }
}

export default reducer;
