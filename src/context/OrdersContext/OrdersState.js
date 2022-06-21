import { createContext } from "react";
import axios from "axios";

const API_URL = "http://localhost:8080";

const initialOrdersState = {
  orders: [],
}

export const OrdersContext = createContext();

export const OrdersProvider = ({ children }) => {

  getOrders

  // const createOrder = async (order) => {
  //   const token = JSON.parse(localStorage.getItem("token"));
  //   try {
  //     // TODO: Create order and add products to order
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  return (
    <OrdersContext.Provider
      value={{

      }}
    >
      {children}
    </OrdersContext.Provider>
  )
};
