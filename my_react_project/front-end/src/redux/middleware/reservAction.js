import axios from "axios";

// 제주 패키지 예약시
function jeju_package(selected, nav) {
    const id = sessionStorage.getItem("userID");
    if (id === undefined) {
        alert("로그인 후 이용해 주세요.");
        nav("/login");
        return;
    } else {
        return async (dispatch, getState) => {
            const reserv = await axios({
                method: "post",
                url: "http://localhost:8000/jejupackage",
                data: { id, selected },
            });
            if (reserv.data) {
                alert("예약되었습니다.");
                nav("/");
            } else {
                alert("예약이 실패했습니다.");
            }
        };
    }
}

// 제주 패키지 예약 확인
function jeju_package_check(selected) {
    return async (dispatch, getState) => {
        const check = await axios({
            method: "post",
            url: "http://localhost:8000/jejupackagecheck",
            data: { selected },
        });
        const number = check.data.length;
        dispatch({ type: "JEJU_PACKAGE", payload: { number } });
    };
}



// 양양 패키지 예약시
function yang_package(selected, nav) {
    const id = sessionStorage.getItem("userID");
    if (id === undefined) {
        alert("로그인 후 이용해 주세요.");
        nav("/login");
        return;
    }
    return async (dispatch, getState) => {
        const reserv = await axios({
            method: "post",
            url: "http://localhost:8000/yangpackage",
            data: { id, selected },
        });
        if (reserv.data) {
            alert("예약되었습니다.");
            nav("/");
        } else {
            alert("예약이 실패했습니다.");
        }
    };
}

// 양양 패키지 예약 확인
function yang_package_check(selected) {
    return async (dispatch, getState) => {
        const check = await axios({
            method: "post",
            url: "http://localhost:8000/yangpackagecheck",
            data: { selected },
        });
        const number = check.data.length;
        dispatch({ type: "YANG_PACKAGE", payload: { number } });
    };
}


//

export const reservAction = {
    jeju_package,
    jeju_package_check,
    yang_package,
    yang_package_check,
};
