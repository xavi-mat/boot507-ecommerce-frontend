import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./components/Products/Products"
import Home from "./components/Home/Home";
import { UserProvider } from "./context/UserContext/UserState";
import Login from "./components/Login/Login";


function App() {
  return (
    <>
      <UserProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </UserProvider>
    </>
  );
}

export default App;
