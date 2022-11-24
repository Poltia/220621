import axios from "axios";

const URL = sessionStorage.getItem("URL");

// 글 등록 //
function write(id, title, text, nav) {
    return async (dispatch, getState) => {
        const write = await axios({
            method: "post",
            url: URL + ":8000/write",
            data: { id, title, text },
        });
        if (write.data === true) {
            alert("글이 등록 되었습니다.");
            nav("/review");
        } else {
            alert("글이 등록되지 않았습니다");
            console.log(write.data);
        }
    };
}

// 글 목록 //
function list() {
    return async (dispatch, getState) => {
        const _list = await axios({
            method: "post",
            url: URL + ":8000/list",
            data: null,
        });
        const list = _list.data;
        dispatch({ type: "LIST", payload: { list } });
    };
}

export const reviewAction = { write, list };
