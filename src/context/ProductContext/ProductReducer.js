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
            default:
                return state;
    }
};

export default product;