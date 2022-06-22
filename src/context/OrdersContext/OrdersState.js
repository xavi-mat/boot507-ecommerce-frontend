import { createContext, useReducer } from "react";
import axios from "axios";
import OrdersReducer from "./OrdersReducer";

const API_URL = "http://localhost:8080";

const initialOrdersState = {
  orders: [],
}

export const OrdersContext = createContext(initialOrdersState);

export const OrdersProvider = ({ children }) => {

  const [state, dispatch] = useReducer(OrdersReducer, initialOrdersState);

  const getOrders = async () => {
    try {
      const token = JSON.parse(localStorage.getItem("token"));
      if (token) {
        const res = await axios.get(
          API_URL + "/orders",
          { headers: { authorization: token } }
        );

        dispatch({
          type: "GET_ORDERS",
          payload: res.data.order,
        })
      }
    } catch (error) {
      console.log(error)
    }
  };

  const createOrder = async (cart) => {
    try {
      const token = JSON.parse(localStorage.getItem("token"));
      const res = await axios.post(
        API_URL + "/orders/",
        {},
        { headers: { authorization: token } }
      );
      const OrderId = res.data.OrderId;

      cart.forEach(async ProductId => {
        await axios.post(
          API_URL + "/orders/product/",
          { OrderId, ProductId, quantity: 1 },
          { headers: { authorization: token } }
        );
      });

    } catch (error) {
      console.error(error);
      console.log("ERROR MESSAGE:", error.response.data.message)
    }
  };

  return (
    <OrdersContext.Provider
      value={{
        orders: state.orders,
        getOrders,
        createOrder,
      }}
    >
      {children}
    </OrdersContext.Provider>
  );
};
