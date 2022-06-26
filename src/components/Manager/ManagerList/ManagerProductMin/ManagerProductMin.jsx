import { Card, Space, Button, Row, Col, Popconfirm, notification } from 'antd';
import ProductImage from '../../../Products/ProductImage/ProductImage';
import axios from "axios";
import { useContext } from 'react';
import { ProductsContext } from '../../../../context/ProductsContext/ProductsState';

const API_URL = "http://localhost:8080";

function ManagerProductMin({ name, price, description, image, id, putInForm }) {

  const token = JSON.parse(localStorage.getItem("token"));
  const { getProducts } = useContext(ProductsContext);

  const handleEdit = (() => {
    putInForm(id);
  })

  const handleDelete = (async () => {
    try {
      const res = await axios.delete(
        API_URL + "/products/" + id,
        { headers: { Authorization: token } }
      );
      if (res.status == "200") {
        notification.success({ message: "Product deleted" });
        getProducts();
      }
    } catch (error) {
      console.error("ERROR:", error, error.response?.data?.message);
    }
  })

  return (
    <Card hoverable>
      <Row>
        <Col lg={4}>
          <div style={{ maxWidth: "150px", maxHeight: "150px", overflow: "hidden" }}>
            <ProductImage image={image} width={"150px"} />
          </div>
        </Col>
        <Col lg={20}>
          <div style={{ marginLeft: "1rem" }}>
            <h2>#{id}. {name}</h2>
            <div>{description}</div>
            <h3>{price} €</h3>
            <Space size="large">
              <Button type='primary' onClick={handleEdit}>Edit Product</Button>
              <Popconfirm
                title={<>Are you sure? Data will be <strong>permanently</strong> lost.</>}
                onConfirm={handleDelete}
                okText="Delete product"
                okButtonProps={{ danger: true }}
                placement="right"
              >
                <Button type='primary' danger >Delete Product</Button>
              </Popconfirm>
            </Space>
          </div>
        </Col>
      </Row>
    </Card>
  )
}

export default ManagerProductMin