const init = {
    jeju_package: "",
    yang_package: "",
};

function reducer(state = init, action) {
    const { type, payload } = action;
    switch (type) {
        case "JEJU_PACKAGE":
            return {
                ...state,
                jeju_package: payload.number,
            };

        case "YANG_PACKAGE":
            return {
                ...state,
                yang_package: payload.number,
            };

        default:
            return state;
    }
}

export default reducer;
