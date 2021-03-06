import { createContext, useReducer } from "react";
import axios from "axios";
import ProductsReducer from "./ProductsReducer"
import { notification } from "antd";

const cart = JSON.parse(localStorage.getItem("cart"));

const initialState = {
    products: [],
    cart: cart ? cart : [],
};

const API_URL = process.env.REACT_APP_API_URL;

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
            let product = state.products.find(p => p.id === +id);
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
        // Check if product exists in cart
        const prodInCart = state.cart.find(p => p.id === product.id);
        if (prodInCart) {
            // If it exists, add 1 to quantity
            const newCart = state.cart.map(p => {
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
        notification.success({
            placement: "bottomLeft",
            message: "Added to cart",
            description: product.name
        });
    };

    const removeFromCart = (product) => {
        const newCart = state.cart
            .map(p => {
                if (p.id === product.id) {
                    p.quantity--
                }
                return p;
            })
            .filter(p => p.quantity > 0);
        dispatch({
            type: "RENEW_CART",
            payload: newCart
        })
        notification.success({
            placement: "bottomLeft",
            message: "Removed from cart",
            description: product.name
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
                removeFromCart,
            }}
        >
            {children}
        </ProductsContext.Provider>
    );

};