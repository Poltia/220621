import axios from "axios";

const URL = sessionStorage.getItem("URL");

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
                url: URL + ":8000/jejupackage",
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
            url: URL + ":8000/jejupackagecheck",
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
            url: URL + ":8000/yangpackage",
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
            url: URL + ":8000/yangpackagecheck",
            data: { selected },
        });
        const number = check.data.length;
        dispatch({ type: "YANG_PACKAGE", payload: { number } });
    };
}

// 호텔 예약하기
function hotel(id, place, day, nav) {
    return async (dispatch, getState) => {
        const reserve = await axios({
            method: "post",
            url: URL + ":8000/hotelreserve",
            data: { id, place, day },
        });
        if (reserve.data === true) {
            alert("호텔 예약이 되었습니다.");
            nav("/");
        } else {
            alert("호텔 예약에 실패했습니다.");
        }
    };
}
// 호텔 예약 확인하기
function hotel_check(place, day) {
    return async (dispatch, getState) => {
        const check = await axios({
            method: "post",
            url: URL + ":8000/hotelcheck",
            data: { place, day },
        });
        if (!check.data) {
            alert("예약 정보를 불러오는데 실패했습니다.");
        } else {
            const number = check.data.length;
            dispatch({ type: "HOTEL", payload: { number } });
        }
    };
}

// 항공 예약하기
function air(id, destination, date, seat, nav) {
    return async (dispatch, getState) => {
        const reserve = await axios({
            method: "post",
            url: URL + ":8000/air",
            data: { id, destination, date, seat },
        });
        if (reserve.data === true) {
            alert("항공 예약이 되었습니다.");
            nav("/");
        } else {
            alert("항공 예약에 실패했습니다.");
            console.log(reserve.data);
        }
    };
}
// 항공 예약 확인하기
function air_check(destination, date) {
    return async (dispatch, getState) => {
        const check = await axios({
            method: "post",
            url: URL + ":8000/aircheck",
            data: { destination, date },
        });
        if (check.data === false) {
            alert("항공 예약 확인에 실패했습니다.");
        } else {
            const _destination = [];
            const _date = [];
            const _seat = [];
            for (let i = 0; i < check.data.length; i++) {
                _date.push(check.data[i].air_date);
                _destination.push(check.data[i].air_destination);
                _seat.push(check.data[i].air_seat);
            }
            dispatch({ type: "AIR", payload: { _date, _destination, _seat } });
        }
    };
}
//

export const reservAction = {
    jeju_package,
    jeju_package_check,
    yang_package,
    yang_package_check,
    hotel,
    hotel_check,
    air,
    air_check,
};
