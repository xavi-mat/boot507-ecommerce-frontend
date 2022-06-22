import React from 'react'
import { Button, Form, Input } from "antd";
import { Rate } from 'antd';
import axios from 'axios';
const { TextArea } = Input;

function FormReview({ id, getReviews }) {

  const token = JSON.parse(localStorage.getItem("token"));
  const onFinish = async (values) => {
    try {
      values.ProductId = id
      console.log(values)
      const res = await axios.post("http://localhost:8080/reviews/",
        values,
        { headers: { authorization: token } })
      if (res.data) {
        getReviews();
      }
    } catch (error) {
      console.log(error);
    }
  }

  const onFinishFailed = (errorInfo) => {
    // console.log("Failed:", errorInfo);
  }
  return (
    <div>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Stars"
          name="stars"
          rules={[
            { required: true, message: "Please select stars" }
          ]}
        >
          <Rate allowHalf defaultValue={2.5} />
        </Form.Item>

        <Form.Item label="Comment"
          name="content"
          rules={[{ required: true, message: "Please comment product" }]}
        >
          <TextArea rows={4} />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Send
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default FormReview