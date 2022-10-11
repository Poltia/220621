function login(id, password) {
    return (dispatch, getState) => {
        dispatch({ type: "LOGIN", payload: { id, password } });
    };
}

function logout() {
    return (dispatch, getState) => {
        dispatch({ type: "LOGOUT", payload: { id: "", password: "" } });
    };
}

export const logins = { login, logout };
