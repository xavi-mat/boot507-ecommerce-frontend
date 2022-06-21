import { createContext, useReducer } from "react";
import axios from "axios";
import OrdersReducer from "./OrdersReducer";

const API_URL = "http://localhost:8080";
const token = JSON.parse(localStorage.getItem("token"));

const initialOrdersState = {
  orders: [],
}

export const OrdersContext = createContext(initialOrdersState);

export const OrdersProvider = ({ children }) => {

  const [state, dispatch] = useReducer(OrdersReducer, initialOrdersState);

  const getOrders = async () => {
    try {
      if (token) {
        const res = await axios.get(
          API_URL + "/orders",
          { headers: { authorization: token } }
        );

        dispatch({
          type: "GET_ORDERS",
          payload: res.data.order,
        })
        console.log(state.orders)
      }
    } catch (error) {
      console.log(error)
    }

  };

  // const createOrder = async (order) => {
  //   try {
  //     // TODO: Create order and add products to order
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  return (
    <OrdersContext.Provider
      value={{
        orders: state.orders,
        getOrders
      }}
    >
      {children}
    </OrdersContext.Provider>
  );
};
