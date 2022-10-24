const init = {
    phone: "",
    email: "",
    package: "",
    air: "",
    hotel: "",
};

function reducer(state = init, action) {
    const { type, payload } = action;
    switch (type) {
        case "USER":
            return {
                phone: payload.phone,
                email: payload.email,
                package: payload._package,
                air: payload.air,
                hotel: payload.hotel,
            };

        default:
            return state;
    }
}

export default reducer;
