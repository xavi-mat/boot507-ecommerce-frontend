import { Card, Col, Row, Typography } from "antd";
import { useContext, useEffect } from "react"
import { Link } from "react-router-dom";
import { OrdersContext } from "../../context/OrdersContext/OrdersState";
import Order from "./Order/Order";
const { Title } = Typography;

function Orders() {
  const { orders, getOrders } = useContext(OrdersContext);
  const token = JSON.parse(localStorage.getItem("token"));

  useEffect(() => {
    getOrders();
    // eslint-disable-next-line
  }, []);

  if (!token) {
    return (
      <div style={{ margin: "1rem 2rem" }}>
        <Card>
          <Title>My Orders</Title>
          <h2>Unauthorized</h2>
          <h3>Log-in needed to see this page.</h3>
          <p>Please, try to <Link to="/login">Log in</Link></p>
        </Card>
      </div>
    )
  }

  const order = orders.map((o, i) =>
    <Order key={i} order={o} />
  )

  return (
    <div style={{ padding: '1rem 3rem' }}>
      <Row>
        <Col xs={0} lg={4}></Col>
        <Col xs={24} lg={16}>
          <Title>My Orders</Title>
          {order}
        </Col>
        <Col xs={0} lg={4}></Col>
      </Row>
    </div>
  )
}

export default Orders