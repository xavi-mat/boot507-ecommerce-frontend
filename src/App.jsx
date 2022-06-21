import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserProvider } from "./context/UserContext/UserState";
import "./App.css"

import Register from "./components/Register/Register";
import Home from "./components/Home/Home";
import Products from "./components/Products/Products"
import Login from "./components/Login/Login";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <UserProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            {/* <Route path="/orders" element={<Orders />} /> */}
            {/* <Route path="/profile" element={<Profile />} /> */}
            {/* <Route path="/cart" element={<Cart />} /> */}
            {/* <Route path="/product/:id" element={<Product />} /> */}
          </Routes>
        </BrowserRouter>
      </UserProvider>
    </>
  );
}

export default App;
