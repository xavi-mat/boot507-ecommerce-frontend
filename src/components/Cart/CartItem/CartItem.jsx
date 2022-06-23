import ProductImage from "../../Products/ProductImage/ProductImage"
import { Card, Col, Row } from 'antd';
import { MinusCircleOutlined, PlusCircleOutlined } from '@ant-design/icons';
import { useContext } from "react";
import { ProductsContext } from "../../../context/ProductsContext/ProductsState";

function CartItem({ p }) {
  const { addToCart } = useContext(ProductsContext);
  return (<>
    <div style={{ marginBottom: "1rem" }}>
      <Card
        type="inner"
        title={<strong>{p.name}</strong>}
        extra={<>
          <MinusCircleOutlined style={{ fontSize: '1.5em', color: '#08c' }} onClick={() => { alert("hey") }} />
          <span style={{ margin: "0 0.5em", fontSize: '1.5em' }}>{p.quantity}</span>
          <PlusCircleOutlined style={{ fontSize: '1.5em', color: '#084' }} onClick={() => { addToCart(p) }} />
        </>}>
        <Col >
          <Row >
            <ProductImage image={p.image} />
            <Col>
              <div>{p.description}</div>
              <h2>{p.price.toFixed(2)} €</h2>
            </Col>
          </Row>
        </Col>
      </Card>
    </div>
  </>
  )
}

export default CartItem;