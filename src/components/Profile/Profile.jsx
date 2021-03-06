import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/UserContext/UserState";
import { Col, Row, Typography, Space, Button, Card, Input } from 'antd';
import { Link } from "react-router-dom";

const { Title, Paragraph } = Typography;
const API_URL = process.env.REACT_APP_API_URL;

function Profile() {

  const { user, logout, updateUser } = useContext(UserContext);
  const [username, setUsername] = useState(user?.username);
  const [firstName, setfirstName] = useState(user?.firstName);
  const [lastName, setlastName] = useState(user?.lastName);
  const [password, setPassword] = useState();
  const token = JSON.parse(localStorage.getItem("token"));

  useEffect(() => {
    setUsername(user?.username);
    setfirstName(user?.firstName);
    setlastName(user?.lastName);
  }, [user]);

  if (!token) {
    return (
      <div className="main_container">
        <Card>
        <Title>My Profile</Title>
        <h2>Unauthorized</h2>
        <h3>Log-in needed to see this page.</h3>
          <p>Please, try to <Link to="/login">Log in</Link></p>
        </Card>
      </div>
    )
  }

  const logOutUser = () => {
    logout();
  };
  const handlePassword = (ev) => {
    setPassword(ev.target.value);
  }
  const handleUpdateUser = () => {
    const updatedUser = { username, firstName, lastName, password };
    updateUser(updatedUser);
  }

  return (
    <div className="main-container">
      <Title>My Profile</Title>
      <Row>
        <Col span={8}>
          <div>
            <img
              src={API_URL + "/users/avatar/" + user?.avatar}
              style={{ width: "100%" }}
              alt=""
            />
          </div>
        </Col>
        <Col span={16} style={{ padding: '0 1rem' }}>
          <Card style={{ marginBottom: '1rem' }}>
            <div>
              <Space align="baseline">
                <div>Username:</div>
                <div><Title level={4} editable={{ onChange: setUsername }}>
                  {username}
                </Title>
                </div>
              </Space>
            </div>
            <div>
              <Space align="baseline">
                <div>First Name:</div>
                <Paragraph editable={{ onChange: setfirstName }} style={{ fontWeight: "bold" }}>{firstName}</Paragraph>
                <div>Last Name:</div>
                <Paragraph editable={{ onChange: setlastName }} style={{ fontWeight: "bold" }}>{lastName}</Paragraph>
              </Space>
            </div>
            <Space size="large">
              <div>Email: <strong>{user?.email}</strong></div>
              <div>Role: <strong>{user?.role}</strong></div>
              <div>
                <Input.Password
                  placeholder="New password"
                  onChange={handlePassword}
                />
              </div>
            </Space>
            <div>
              <Button type="primary" onClick={handleUpdateUser}>Update</Button>
            </div>
          </Card>
          <Button>
            <Link onClick={logOutUser} to={"/"}>Log Out</Link>
          </Button>
        </Col>
      </Row>
    </div>
  );
}

export default Profile;
