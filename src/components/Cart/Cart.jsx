import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/UserContext/UserState";
import { Link } from "react-router-dom";
import { OrdersContext } from "../../context/OrdersContext/OrdersState";
import { notification, Row, Col, Button, Space } from "antd";
import { ProductsContext } from "../../context/ProductsContext/ProductsState";
import CartItem from "./CartItem/CartItem";

function Cart() {
  const { cart, clearCart } = useContext(ProductsContext);
  const { user } = useContext(UserContext);
  const { createOrder } = useContext(OrdersContext);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    let subTotal = 0;
    cart.forEach(p => {
      subTotal += p.price * p.quantity;
    })
    setTotal(subTotal);
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
    return (<CartItem key={i} p={p} />);
  });

  return (
    <Row style={{ marginBottom: "2rem" }}>
      <Col xs={0} sm={2} md={4} lg={6} xl={7}>
      </Col>
      <Col xs={24} sm={20} md={16} lg={12} xl={10}>
        <h1>My Cart</h1>
        <div>{cartItem}</div>
        <h1>Total: {total.toFixed(2)} €</h1>
        {user ?
          <Button type="primary" onClick={doPayment}>Pay now</Button> :
          <Space>
            <Button type="primary"><Link to="/login">Login</Link></Button>
            <Button type="primary"><Link to="/register">Register</Link></Button>
          </Space>
        }
      </Col>
      <Col xs={0} sm={2} md={4} lg={6} xl={7}>
      </Col>
    </Row>
  )
}

export default Cart