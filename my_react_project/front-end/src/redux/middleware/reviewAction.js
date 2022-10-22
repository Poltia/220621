import axios from "axios";

function write(id, title, text, nav) {
    return async (dispatch, getState) => {
        const write = await axios({
            method: "post",
            url: "http://localhost:8000/write",
            data: (id, title, text),
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

export const reviewAction = { write };
