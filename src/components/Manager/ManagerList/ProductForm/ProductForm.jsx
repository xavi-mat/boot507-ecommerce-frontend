import { Card, Space, Button, Form, Input, Row, Col } from 'antd';
import ProductImage from '../../../Products/ProductImage/ProductImage';
const { TextArea } = Input;

function ProductForm({ name, price, description, image, id }) {

  const handleForm = (values) => {
    console.log("SUBMIT!", values);
  }

  const onFinishFailed = (errorInfo) => {
    // console.log("Failed:", errorInfo);
  }

  return (
    <Card hoverable>
      <Form
      labelCol={{ span: 0 }}
        wrapperCol={{ span: 24 }}
        onFinish={handleForm}
        onFinishFailed={onFinishFailed}
      >
        {/* <Space align='top'> */}
        <Row>
        <Col span={4}>

          <div style={{ maxWidth: "150px", maxHeight: "150px", overflow: "hidden" }}>
            <ProductImage image={image} width={"150px"} />
          </div>
        </Col>
        <Col span={20}>

          <div>
            <Form.Item
              // label="Product name"
              name="name"
              defaultValue={name}
              rules={[{ required: true, message: 'Please input product name.' }]}
            >
              <Input placeholder="Product name" size="large" />
            </Form.Item>
            <Form.Item
              // label="Product description"
              name="description"
              defaultValue={description}
              rules={[{ required: true, message: 'Please input product description.' }]}
            >
              <TextArea placeholder="Product description" showCount maxLength={254} />
            </Form.Item>
            <Form.Item
              // label="Price"
              name="price"
              defaultValue={price}
            >
              <Input placeholder="Product price" size="large" addonAfter="€"/>
            </Form.Item>
            <Form.Item>
              <Button type='primary' htmlType="submit">Submit</Button>
            </Form.Item>
          </div>
        </Col>
        </Row>
        {/* </Space> */}
      </Form>
    </Card>
  )
}

export default ProductForm