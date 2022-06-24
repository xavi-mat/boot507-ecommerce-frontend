import { Col, Row } from "antd";
import { useContext, useEffect } from "react"
import { OrdersContext } from "../../context/OrdersContext/OrdersState"
import Order from "./Order/Order";

function Orders() {
  const { orders, getOrders } = useContext(OrdersContext);

  useEffect(() => {
    getOrders();
  }, []);

  const order = orders.map((o, i) =>
    <Order key={i} order={o} />
  )

  return (
    <div style={{ padding: '1rem 3rem' }}>
      <Row>
        <Col xs={0} lg={4}></Col>
        <Col xs={24} lg={16}><h1>My Orders</h1>
          {order}</Col>
        <Col xs={0} lg={4}></Col>
      </Row>
    </div>
  )
}

export default Orders