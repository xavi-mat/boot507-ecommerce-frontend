import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Register from "./components/Register/Register";
import Home from "./components/Home/Home";
import Products from "./components/Products/Products";
import Login from "./components/Login/Login";
import Header from "./components/Header/Header";
import Product from "./components/Product/Product";
import Orders from "./components/Orders/Orders";
import Profile from "./components/Profile/Profile";
import Cart from "./components/Cart/Cart";

import { UserProvider } from "./context/UserContext/UserState";
import { ProductsProvider } from "./context/ProductsContext/ProductsState";
import { OrdersProvider } from "./context/OrdersContext/OrdersState";
import Premium from "./components/Premium/Premium";

function App() {
  return (
    <>
      <UserProvider>
        <ProductsProvider>
          <OrdersProvider>
            <BrowserRouter>
              <Header />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/product/:id" element={<Product />} />
                <Route path="/premium" element={<Premium  />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/orders" element={<Orders />} />
                <Route path="/profile" element={<Profile />} />
                {/* <Route path="/manager" element={<Manager />} /> */}
                {/* <Route path="/admin" element={<Admin />} /> */}
              </Routes>
            </BrowserRouter>
          </OrdersProvider>
        </ProductsProvider>
      </UserProvider>
    </>
  );
}

export default App;
