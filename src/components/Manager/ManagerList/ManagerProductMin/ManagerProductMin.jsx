import { Card, Space, Button, Row, Col, Popconfirm, notification, Checkbox } from 'antd';
import ProductImage from '../../../Products/ProductImage/ProductImage';
import axios from "axios";
import { useContext } from 'react';
import { ProductsContext } from '../../../../context/ProductsContext/ProductsState';
import { CheckSquareTwoTone, CloseSquareOutlined, CloseSquareTwoTone } from '@ant-design/icons';

const API_URL = process.env.REACT_APP_API_URL;

function ManagerProductMin({ name, price, description, image, active, id, putInForm }) {

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
        notification.success({
          placement: "bottomLeft",
          message: "Product deleted"
        });
        getProducts();
      }
    } catch (error) {
      console.error("ERROR:", error, error.response?.data?.message);
    }
  })

  return (
    <Card hoverable style={{ width: "100%" }}>
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
            <div>
              <Space size="large" align='baseline'>
                <h3>{price ? price + " €" : "PRICE NOT DEFINED"}</h3>
                <h3>
                  {active ?
                    <><CheckSquareTwoTone twoToneColor="#00BB00" /> Active</> :
                    <><CloseSquareTwoTone twoToneColor="#FF0000" /> Inactive</>
                  }
                </h3>
              </Space>
            </div>
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