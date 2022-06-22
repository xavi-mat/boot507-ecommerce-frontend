import { createContext, useReducer } from "react"
import ProductReducer from "./ProductReducer"

const cart = JSON.parse(localStorage.getItem("cart"));

const initialProductState = {
    name: "",
    price: null,
    description: "",
    image: "",
    id: null,
    cart: cart ?? [],
}

export const ProductContext = createContext(initialProductState);

export const ProductProvider = ({ children }) => {
    const [state, dispatch] = useReducer(ProductReducer, initialProductState)

    const setProduct = (product) => {
        dispatch({
            type: "SET_PRODUCT",
            payload: product,
        })
    }

    const addCart = (productId) => {
        dispatch({
            type: "ADD_CART",
            payload: productId,
        });
    };

    const clearCart = () => {
        dispatch({
            type: "CLEAR_CART",
        })
    };

    return (
        <ProductContext.Provider
            value={{
                name: state.name,
                price: state.price,
                description: state.description,
                image: state.image,
                id: state.id,
                cart: state.cart,
                setProduct,
                addCart,
                clearCart,
            }}
            >
                {children}
            </ProductContext.Provider>
    );
};