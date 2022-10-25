const init = {
    phone: "",
    email: "",
    package: "",
    air_date: "",
    air_destination: "",
    air_seat: "",
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
                air_date: payload.air_date,
                air_destination: payload.air_destination,
                air_seat: payload.air_seat,
                hotel: payload.hotel,
            };

        default:
            return state;
    }
}

export default reducer;
