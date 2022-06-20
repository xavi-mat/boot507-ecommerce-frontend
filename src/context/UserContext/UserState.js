import { createContext, useReducer } from "react";
import axios from "axios";
import UserReducer from "./UserReducer";

const token = JSON.parse(localStorage.getItem("token"));

const initialUserstate = {
    token: token ? token : null,
    user: null,
    message: "",
}

const API_URL = "http://localhost:8080";

export const UserContext = createContext(initialUserstate);

export const UserProvider = ({ children }) => {
    const [state, dispatch] = useReducer(UserReducer, initialUserstate);

    const login = async (user) => {
        try {
            const res = await axios.post(API_URL + "/users/login", user);
            dispatch({
                type: "LOGIN",
                payload: res.data,
            });
            if (res.data) {
                localStorage.setItem("token", JSON.stringify(res.data.token));
            }
        } catch (error) {
            console.log("ERROR:", error);
            const thereIsMessage = error.response?.data?.message;
            if (thereIsMessage) {
                console.log(error.response.data.message)
                dispatch({
                    type: "SET_MESSAGE",
                    payload: error.response.data.message,
                })
            } else {
                throw error;
            }
        }
    };

    return (
        <UserContext.Provider
            value={{
                token: state.token,
                user: state.user,
                message: state.message,
                login,
            }}
        >
            {children}
        </UserContext.Provider>
    );
};