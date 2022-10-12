import axios from "axios";

function login(id, password) {
    return async (dispatch, getState) => {
        const user = await axios({
            method: "post",
            url: "http://localhost:8000/login",
            data: { id, password },
        });
        console.log(user.data);
        if (user.data) {
            dispatch({ type: "LOGIN", payload: { id } });
        } else {
            alert("로그인 실패");
        }
    };
}

function logout() {
    return (dispatch, getState) => {
        dispatch({ type: "LOGOUT" });
    };
}

function signup(id, password, phone, email) {
    return async (dispatch, getState) => {
        const user = await axios({
            method: "post",
            url: "http://localhost:8000/signup",
            data: { id, password, phone, email },
        });
        alert(user.data);
    };
}

export const loginAction = { login, logout, signup };
