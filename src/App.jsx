import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./components/Products/Products"
import Home from "./components/Home/Home";
import { UserProvider } from "./context/UserContext/UserState";
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
            {/* <Route path="/register" element={<Register />} /> */}
            <Route path="/login" element={<Login />} />
            {/* <Route path="/orders" element={<Orders />} /> */}
            {/* <Route path="/profile" element={<Profile />} /> */}
            {/* <Route path="/cart" element={<Cart />} /> */}
          </Routes>
        </BrowserRouter>
      </UserProvider>
    </>
  );
}

export default App;
