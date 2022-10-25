const init = {
    jeju_package: "",
    yang_package: "",
    hotel: "",
    air_date: [],
    air_destination: [],
    air_seat: [],
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

        case "HOTEL":
            return {
                ...state,
                hotel: payload.number,
            };

        case "AIR":
            return {
                ...state,
                air_date: payload._date,
                air_destination: payload._destination,
                air_seat: payload._seat,
            };

        default:
            return state;
    }
}

export default reducer;
