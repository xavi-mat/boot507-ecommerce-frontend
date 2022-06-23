import { createContext, useReducer } from "react";
import axios from "axios";
import ProductsReducer from "./ProductsReducer"

const cart = JSON.parse(localStorage.getItem("cart"));

const initialState = {
    products: [],
    cart: cart ? cart : [],
};

const API_URL = "http://localhost:8080";

export const ProductsContext = createContext(initialState);

export const ProductsProvider = ({ children }) => {

    const [state, dispatch] = useReducer(ProductsReducer, initialState);

    const getProducts = async () => {
        const res = await axios.get(API_URL + "/products/list");
        dispatch({
            type: "GET_PRODUCTS",
            payload: res.data.product,
        });
        return res;
    };

    const getProductById = async (id) => {
        try {
            let product = state.products.find(p => p.id == id);
            if (!product) {
                const res = await axios.get(API_URL + "/products/id/" + id);
                product = res.data.product;
            }
            return product
        } catch (error) {
            console.log(error)
        }
    }

    const addToCart = (product) => {
        dispatch({
            type: "ADD_CART",
            payload: product
        });
    };

    const clearCart = () => {
        dispatch({
            type: "CLEAR_CART",
        })
    };
    return (
        <ProductsContext.Provider
            value={{
                products: state.products,
                cart: state.cart,
                getProducts,
                getProductById,
                addToCart,
                clearCart,
            }}
        >
            {children}
        </ProductsContext.Provider>
    );

};