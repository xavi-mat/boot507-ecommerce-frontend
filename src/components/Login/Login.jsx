import { Button, Form, Input } from "antd";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext/UserState";

function Login() {

  const { login, message } = useContext(UserContext);
  const [msg, setMsg] = useState(message);
  const navigate = useNavigate();

  useEffect(() => {
    setMsg(message);
    if (message.startsWith("Welcome")) {
      setTimeout(() => {
        navigate("/");
      }, 500);
    }
  }, [message]);

  const onFinish = (values) => {
    login(values);
  }

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  }

  return (
    <div className="container">
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        // autoComplete="off"
      >
        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: "Please input your email!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
      <div>{msg}</div>
    </div>
  );
};

export default Login
