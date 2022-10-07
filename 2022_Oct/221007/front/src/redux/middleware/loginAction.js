import axios from "axios";

function login(id, password) {
    return async (dispatch, getState) => {
        const user = await axios({
            method: "post",
            url: "http://localhost:8000/login",
            data: { id, password },
        });
        console.log(user);
        if (user.data) {
            dispatch({ type: "LOGIN", payload: { id, password } });
        } else {
            alert("아이디가 없습니다.");
        }
    };
}

function logout() {
    return (dispatch, getState) => {
        if (getState().loginReducer.isLogin) {
            dispatch({ type: "LOGOUT" });
        }
    };
}

function signUp(id, password, setWrap) {
    return async (dispatch, getState) => {
        const user = await axios({
            method: "post",
            url: "http://localhost:8000/signup",
            data: { id, password },
        });
        console.log(user);
        alert(user.data);
        if (user.data === "가입완료") {
            setWrap();
        }
    };
}

export const loginAction = { login, signUp, logout };
