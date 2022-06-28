import { Alert, Button, Form, Input } from "antd";
import axios from "axios";
import { useState } from "react";

function Register() {

  const [alert, setAlert] = useState(null);

  const onFinish = (values) => {
    async function registerUser(data) {
      try {
        const res = await axios.post('http://localhost:8080/users/', data);
        if (res.status === 201) {
          setAlert(<Alert
            message={res.data.message}
            type="success"
            showIcon
            action={<a href={res.data.url}>CLICK HERE TO CONFIRM</a>}
          />)
        } else {
          setAlert(<Alert message="REGISTER ERROR. PLEASE TRY AGAIN" type="error" showIcon />)
        }
      } catch (error) {
        const thereIsMessage = error.response?.data?.messages;
        if (thereIsMessage) {
          setAlert(<Alert message={thereIsMessage} type="error" showIcon />)
        } else {
          throw error;
        }
      }
    }
    registerUser(values);
  }

  return (
    <div style={{ padding: '1rem 3rem' }}>
      <h1>Register</h1>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        autoComplete="off"
        style={{maxWidth:"600px"}}
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please input a username." }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[
            { type: 'email', message: 'Please input a valid email.', },
            { required: true, message: "Please input a valid email." }
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input a password." }]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          name="confirm"
          label="Confirm Password"
          dependencies={['password']}
          hasFeedback
          rules={[
            {
              required: true,
              message: 'Please confirm your password!',
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }

                return Promise.reject(new Error('Passwords do not match.'));
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          label="First name"
          name="firstname"
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Last name"
          name="lastname"
        >
          <Input />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Register
          </Button>
        </Form.Item>
      </Form>
      {alert}
    </div>
  );
};

export default Register
