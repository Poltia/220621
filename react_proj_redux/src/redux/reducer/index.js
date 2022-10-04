let init = {
    users: [],
    loginis: false,
    login_user: {},
    post_list: [],
    indexNum: 0,
};

function reducer(state = init, action) {
    switch (action.type) {
        // 회원가입하면 users배열에 추가
        case "SIGNUP":
            return { ...state, users: state.users.concat(action.payload) };

        // login 되어 있는지 확인
        case "LOGIN_IS":
            return { ...state, loginis: action.payload };

        // 로그인한 유저 정보
        case "LOGIN_USER":
            return {
                ...state,
                login_user: action.payload,
            };

        // 유저 정보 수정하기
        case "CHANGE_MY_INFO":
            return { ...state, users: action.payload };

        // 게시판 목록 배열에 추가
        case "POSTING":
            return {
                ...state,
                post_list: state.post_list.concat(action.payload),
            };
        case "SET_INDEX":
            return { ...state, indexNum: action.payload };

        default:
            return state;
    }
}

export default reducer;
