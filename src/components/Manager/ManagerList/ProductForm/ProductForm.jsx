import { CloseOutlined, SendOutlined } from '@ant-design/icons';
import { Card, Space, Button, Form, Input, Row, Col, InputNumber, Checkbox, notification } from 'antd';
import axios from 'axios';
import { useContext } from 'react';
import { ProductsContext } from '../../../../context/ProductsContext/ProductsState';
import ProductImage from '../../../Products/ProductImage/ProductImage';
const { TextArea } = Input;

const API_URL = process.env.REACT_APP_API_URL;

function ProductForm({ name, price, description, image, active, id, putInForm }) {

  const { getProducts } = useContext(ProductsContext);

  const handleForm = async (values) => {
    try {
      const token = JSON.parse(localStorage.getItem("token"));
      // Minimal validation
      values.active = values.active && (!!values.description) && (!!values.price);
      if (values.id) {
        const res = await axios.put(
          API_URL + "/products/" + values.id,
          values,
          { headers: { Authorization: token } }
        );
        if (res.status === 200) {
          notification.success({
            placement: "bottomLeft",
            message: `Product #${values.id} updated`
          });
          getProducts();
          putInForm(undefined);
        }
      } else {
        const res = await axios.post(
          API_URL + "/products",
          values,
          { headers: { Authorization: token } }
        );
        if (res.status === 201) {
          notification.success({
            placement: "bottomLeft",
            message: "New product added"
          });
          getProducts();
        }
      }
    } catch (error) {
      console.error(error)
    }
  }

  const handleClose = (() => {
    putInForm(undefined);
  })

  return (
    <Card hoverable style={{ width: "100%" }}>
      <Form
        labelCol={{ span: 0 }}
        wrapperCol={{ span: 24 }}
        onFinish={handleForm}
        initialValues={{ name, price, description, image, active, id }}
      >
        <h2>{id ? null : "New product"}</h2>
        <Row>
          <Col lg={4}>
            <div style={{ maxWidth: "150px", maxHeight: "150px", overflow: "hidden" }}>
              <ProductImage image={image} width={"150px"} />
            </div>
          </Col>
          <Col lg={20}>
            <div style={{ marginLeft: "1rem" }}>
              <Form.Item hidden name="id" value={id} />
              <Form.Item
                name="name"
                rules={[{ required: true, message: 'Please input product name.' }]}
              >
                <Input
                  placeholder="Product name"
                  size="large"
                  showCount
                  maxLength={254}
                  addonBefore={id ? "#" + id : null}
                />
              </Form.Item>
              <Form.Item name="description" >
                <TextArea placeholder="Product description" showCount maxLength={254} />
              </Form.Item>
              <Space size="large">
                <Form.Item name="price" >
                  <InputNumber placeholder="Product price" size="large" addonAfter="€" min={0} />
                </Form.Item>
                <Form.Item name="active" valuePropName="checked">
                  <Checkbox>Active</Checkbox>
                </Form.Item>
              </Space>
              <br />
              <Space size="large" align="top">
                <Form.Item>
                  <Button type='primary' htmlType="submit" icon={<SendOutlined />}>Submit</Button>
                </Form.Item>
                {id ?
                  <Button onClick={handleClose} icon={<CloseOutlined />} >Close</Button> :
                  null
                }
              </Space>
            </div>
          </Col>
        </Row>
      </Form>
    </Card>
  )
}

export default ProductForm