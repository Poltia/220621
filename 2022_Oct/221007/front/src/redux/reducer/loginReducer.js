let init = {
    id: "",
    password: "",
    isLogin: false,
};

function reducer(state = init, action) {
    const { type, payload } = action;
    switch (type) {
        case "LOGIN":
            return {
                ...state,
                id: payload.id,
                password: payload.password,
                isLogin: true,
            };
        case "LOGOUT":
            return { ...state, id: "", password: "", isLogin: false };
        default:
            return state;
    }
}

export default reducer;
