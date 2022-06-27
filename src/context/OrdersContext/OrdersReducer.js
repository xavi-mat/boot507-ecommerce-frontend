const orders = (state, action) => {
    switch (action.type) {
        case "GET_ORDERS":
            return {
                ...state,
                orders: action.payload,
            }
        default:
            return state;
    }
};

export default orders;