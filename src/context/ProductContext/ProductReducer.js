const product = (state, action) => {
    switch (action.type) {
        case "SET_PRODUCT":
            return {
                ...state,
                name: action.payload.name,
                price: action.payload.price,
                description: action.payload.description,
                image: action.payload.image,
                id: action.payload.id,
            };
        case "ADD_CART":
            return {
                ...state,
                cart: [action.payload, ...state.cart]
            }
        case "CLEAR_CART":
            return {
                ...state,
                cart: [],
            }
        default:
            return state;
    }
};

export default product;