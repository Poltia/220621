let init = {
    users: [],
    loginis: false,
    login_user: {},
    post_list: [],
};

function reducer(state = init, action) {
    switch (action.type) {
        case "SIGNUP":
            return { ...state, users: state.users.concat(action.payload) };

        case "LOGIN_IS":
            return { ...state, loginis: (state.loginis = action.payload) };

        case "LOGIN_USER":
            return {
                ...state,
                login_user: (state.login_user = action.payload),
            };

        case "CHANGE_INFO":
            return { users: (state.users = action.payload) };

        default:
            return state;
    }
}

export default reducer;
