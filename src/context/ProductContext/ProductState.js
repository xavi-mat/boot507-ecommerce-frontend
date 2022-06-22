import { createContext, useReducer } from "react"
import ProductReducer from "./ProductReducer"

const initialProductState = {
    name: "",
    price: null,
    description: "",
    image: "",
    id: null,
    cart: [],
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
            }}
            >
                {children}
            </ProductContext.Provider>
    );
};