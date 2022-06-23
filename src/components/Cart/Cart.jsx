import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/UserContext/UserState";
import { Link } from "react-router-dom";
import { OrdersContext } from "../../context/OrdersContext/OrdersState";
import { notification } from "antd";
import { ProductsContext } from "../../context/ProductsContext/ProductsState";
import CartItem from "./CartItem/CartItem";

function Cart() {
  const { cart, clearCart } = useContext(ProductsContext);
  const { user } = useContext(UserContext);
  const { createOrder } = useContext(OrdersContext);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart])

  if (cart.length < 1) {
    return (<><h1>My Cart</h1><div>Your cart is empty.</div></>)
  }

  const doPayment = () => {
    createOrder(cart);
    clearCart();
    notification.success({
      message: 'Order sent',
      description:
        (<>Your order has been received by our team.<br />It will be soon prepared for delivery.</>),
    });
  }

  const cartItem = cart.map((p, i) => {
    return (
      <>
        <CartItem key={i} p={p} />
        <hr />
      </>
    );
  });

  return (
    <>
      <h1>My Cart</h1>
      <div>{cartItem}</div>
      {user ?
        <button onClick={doPayment}>Pay now</button> :
        <>
          <Link to="/login">Login</Link> |
          <Link to="/register"> Register</Link>
        </>
      }
    </>
  )
}

export default Cart