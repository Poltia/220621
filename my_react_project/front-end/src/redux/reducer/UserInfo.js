const init = {
    phone: "",
    email: "",
    package: "",
    air_date: null,
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
                air_date: payload._date,
                air_destination: payload._destination,
                air_seat: payload._seat,
                hotel: payload.hotel,
            };

        default:
            return state;
    }
}

export default reducer;
