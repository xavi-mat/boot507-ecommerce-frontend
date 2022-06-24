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
                product.description = (product.description + " ").repeat(10);
            }
            return product
        } catch (error) {
            console.log(error)
        }
    }

    const addToCart = (product) => {
        // Check if product exists in cart
        const prodInCart = state.cart.find(p => p.id === product.id);
        if (prodInCart) {
            // If it exists, add 1 to quantity
            const newCart = state.cart.map(p=>{
                if (p.id === product.id) {
                    p.quantity++
                }
                return p;
            });
            dispatch({
                type: "RENEW_CART",
                payload: newCart
            })
        } else {
            // If not, add to cart
            product.quantity = 1;
            dispatch({
                type: "ADD_TO_CART",
                payload: product
            });
        }
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