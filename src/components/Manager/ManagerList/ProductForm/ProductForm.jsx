import { CloseOutlined, SendOutlined } from '@ant-design/icons';
import { Card, Space, Button, Form, Input, Row, Col, InputNumber } from 'antd';
import axios from 'axios';
import ProductImage from '../../../Products/ProductImage/ProductImage';
const { TextArea } = Input;

function ProductForm({ name, price, description, image, id, putInForm }) {

  const handleForm = async (values) => {
    try {
      if (values.id) {
        console.log("UPDATE:", values)
      } else {
        // const res = await axios.post
        console.log("NEW:", values);
      }
    } catch (error) {

    }
  }

  const onFinishFailed = (errorInfo) => {
    // console.log("Failed:", errorInfo);
  }

  const handleClose = (() => {
    putInForm(undefined);
  })

  return (
    <Card hoverable>
      <Form
        labelCol={{ span: 0 }}
        wrapperCol={{ span: 24 }}
        onFinish={handleForm}
        onFinishFailed={onFinishFailed}
        initialValues={{ name, price, description, image, id }}
      >
        <Row>
          <Col lg={4}>
            <div style={{ maxWidth: "150px", maxHeight: "150px", overflow: "hidden" }}>
              <ProductImage image={image} width={"150px"} />
            </div>
          </Col>
          <Col lg={20}>
            <div style={{ marginLeft: "1rem" }}>
              <Form.Item
                hidden
                name="id"
                value={id}
              />
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
              <Form.Item
                name="description"
              >
                <TextArea placeholder="Product description" showCount maxLength={254} />
              </Form.Item>
              <Form.Item
                name="price"
              >
                <InputNumber placeholder="Product price" size="large" addonAfter="€" min={0} />
              </Form.Item>
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