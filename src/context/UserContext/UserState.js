import { createContext, useReducer } from "react";
import axios from "axios";
import UserReducer from "./UserReducer";
import { notification } from "antd";

const token = JSON.parse(localStorage.getItem("token"));

const initialUserstate = {
    token: token,
    user: null,
    message: "",
}

const API_URL = process.env.REACT_APP_API_URL;

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
            console.log("FULL ERROR:", error);
            const thereIsMessage = error.response?.data?.message;
            console.warn("ERROR MESSAGE:", thereIsMessage);
            if (thereIsMessage) {
                dispatch({
                    type: "SET_MESSAGE",
                    payload: thereIsMessage,
                })
            } else {
                throw error;
            }
        }
    };

    const getUserInfo = async () => {
        if (!state.token) return;
        try {
            const res = await axios.get(API_URL + "/users/me",
                { headers: { Authorization: state.token } }
            );
            dispatch({
                type: "SET_USER",
                payload: res.data.user,
            });
        } catch (error) {
            console.log("FULL ERROR:", error);
            const thereIsMessage = error.response?.data?.message;
            console.warn("ERROR MESSAGE:", thereIsMessage);
            if (thereIsMessage) {
                dispatch({
                    type: "SET_MESSAGE",
                    payload: thereIsMessage,
                })
            } else {
                throw error;
            }
        }
    };

    const setMessage = async (msg) => {
        dispatch({
            type: "SET_MESSAGE",
            payload: msg,
        })
    };

    const logout = async () => {
        const token = JSON.parse(localStorage.getItem("token"));
        const res = await axios.delete(API_URL + "/users/logout", {
            headers: {
                authorization: token,
            },
        });
        dispatch({
            type: "LOGOUT",
            payload: res.data,
        });
        if (res.data) {
            localStorage.removeItem("token");
        }
    };

    const updateUser = async (user) => {
        try {
            const token = JSON.parse(localStorage.getItem("token"));
            const res = await axios.put(
                API_URL + "/users",
                user,
                { headers: { Authorization: token } }
            )
            if (res.status == 200) {
                notification.success({message: "Data updated"});
            }
        } catch (error) {
            console.log("FULL ERROR:", error);
            const thereIsMessage = error.response?.data?.message;
            console.warn("ERROR MESSAGE:", thereIsMessage);
            if (thereIsMessage) {
                dispatch({
                    type: "SET_MESSAGE",
                    payload: thereIsMessage,
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
                setMessage,
                logout,
                updateUser,
                getUserInfo,
            }}
        >
            {children}
        </UserContext.Provider>
    );


};