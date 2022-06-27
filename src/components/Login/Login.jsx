import { Button, Form, Input, notification } from "antd";
import { useContext, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { UserContext } from "../../context/UserContext/UserState";

function Login() {

  const { login, message, setMessage } = useContext(UserContext);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    if (searchParams.get('confirmed') === "true") {
      notification.info({
        placement: "bottomLeft",
        message: "Email confirmed",
        description: "Please, try to log in."
      })
    }
    // eslint-disable-next-line
  }, [])

  useEffect(() => {
    if (message) {
      const notificationType = message.startsWith("Welcome") ? "success" : "error";
      notification[notificationType]({
        placement: "bottomLeft",
        message: message
      });
      if (message.startsWith("Welcome")) {
        navigate("/");
      } else {
        setMessage("");
      }
    }
    // eslint-disable-next-line
  }, [message]);

  const onFinish = (values) => {
    login(values);
  }

  const onFinishFailed = (errorInfo) => {
    // console.log("Failed:", errorInfo);
  }

  return (
    <div style={{ padding: '1rem 3rem' }}>
      <h1>Login</h1>
      <Form
        name="basic"
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        style={{ maxWidth: "600px" }}
      >
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
          rules={[{ required: true, message: "Please input your password." }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Login
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login
