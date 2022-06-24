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

        case "LOGOUT":
            return {
                ...state,
                user: null,
                token: null,
                message: "",
            };
        case "SET_USER":
            return {
                ...state,
                user: action.payload,
            };
        default:
            return state;
    }
};
export default users;