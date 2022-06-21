const users = (state, action) => {
    switch (action.type) {
        case "LOGIN":
            return {
                ...state,
                token: action.payload.token,
                user: action.payload.user,
                message: action.payload.message,
            };
        case "SET_MESSAGE":
            return {
                ...state,
                message: action.payload,
            }
        default:
            return state;
    }
};
export default users;