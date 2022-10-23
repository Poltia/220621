const init = {
    phone: "",
    email: "",
};

function reducer(state = init, action) {
    const { type, payload } = action;
    switch (type) {
        case "USER":
            return {
                phone: payload.phone,
                email: payload.email,
            };

        default:
            return state;
    }
}

export default reducer;
