import { Card, Table, Tag } from "antd";
const { Column } = Table;

function Order({ order }) {

  const data = order.Details.map((d, i) => ({
    key: i,
    name: d.Product.name,
    quantity: d.quantity,
    price: d.price + " €",
    subtotal: d.price * d.quantity + " €",
  }));

  const total = data.reduce((acc, cur) => acc + parseFloat(cur.subtotal), 0);

  const date = new Date(order.date).toLocaleString();

  const TAG_COLOR = {
    open: "purple",
    paid: "geekblue",
    sent: "orange",
    delivered: "green",
    cancelled: "volcano",
  };

  return (
    <Card
      type="inner"
      title={<><strong>Order num: {order.id}</strong></>}
      extra={<><Tag color={TAG_COLOR[order.status]}>{order.status.toUpperCase()}</Tag> {date}</>}
      style={{ marginBottom: "1rem" }}
    >
      <Table dataSource={data}>
        <Column title="Product" dataIndex="name" key="name" render={text => <strong>{text}</strong>} />
        <Column title="Quantity" dataIndex="quantity" key="quantity" />
        <Column title="Price" dataIndex="price" key="price" />
        <Column title="Subtotal" dataIndex="subtotal" key="subtotal" render={text => <strong>{text}</strong>} />
      </Table>
      <h2>TOTAL: {total} €</h2>
    </Card>
  )
}

export default Order