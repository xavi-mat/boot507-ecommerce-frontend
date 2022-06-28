import React from 'react'
import { Button, Form, Input, notification } from "antd";
import { Rate } from 'antd';
import axios from 'axios';
const { TextArea } = Input;

function FormReview({ id, getReviews }) {

  const token = JSON.parse(localStorage.getItem("token"));
  const onFinish = async (values) => {
    try {
      values.ProductId = id
      const res = await axios.post("http://localhost:8080/reviews/",
        values,
        { headers: { authorization: token } })
      if (res.data) {
        getReviews();
      }
    } catch (error) {
      console.log(error);
      if (error?.response?.data?.messages) {
        notification.error({
          message: error.response.data.messages,
          placement: "bottomLeft"
         });
      }
    }
  }

  const onFinishFailed = (errorInfo) => {
    // console.log("Failed:", errorInfo);
  }
  return (
    <div>
      <Form
        name="basic"
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 20 }}
        initialValues={{ remember: true, stars: 1 }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Select stars"
          name="stars"
          rules={[
            { required: true, message: "Please select stars" }
          ]}
        >
          <Rate />
        </Form.Item>

        <Form.Item label="Write a comment"
          name="content"
          rules={[{ required: true, message: "Please comment product" }]}
        >
          <TextArea rows={4} showCount maxLength={254} />
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