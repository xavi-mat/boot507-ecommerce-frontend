import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/UserContext/UserState";
import { Col, Row, Typography, Space, Button, Card, Radio } from 'antd';
import { Link, useNavigate } from "react-router-dom";

const { Title, Paragraph } = Typography;
const API_URL = "http://localhost:8080";

function Profile() {

  const { user, logout, updateUser } = useContext(UserContext);

  const [username, setUsername] = useState(user?.username);
  const [firstName, setfirstName] = useState(user?.firstName);
  const [lastName, setlastName] = useState(user?.lastName);
  const [gender, setGender] = useState(user?.gender);

  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      return navigate("/login");
    }
  }, [user]);


  const logOutUser = () => {
    logout();
  };

  const handleSetGender = (ev) => {
    setGender(ev.target.value)
  }

  const handleUpdateUser = () => {
    const updatedUser = { username, firstName, lastName, gender };
    updateUser(updatedUser);
  }

  // console.info("USUARIO:", user)

  return (
    <>
      <div style={{ padding: '1rem 3rem' }}>
        <Title>My Profile</Title>
        <Row>
          <Col span={8}>
            <img src={API_URL + "/users/avatar/" + user?.avatar} style={{ width: "100%" }} />
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
              <div>
                <span>Gender: </span>
                <Radio.Group defaultValue={gender} buttonStyle="solid" onChange={handleSetGender}>
                  <Radio.Button value={null}>-</Radio.Button>
                  <Radio.Button value="F">F</Radio.Button>
                  <Radio.Button value="M">M</Radio.Button>
                </Radio.Group>
                <div>Email: <strong>{user?.email}</strong></div>
                <div>Role: <strong>{user?.role}</strong></div>
              </div>
              <Button onClick={handleUpdateUser}>Update</Button>
            </Card>
            <Button>
              <Link onClick={logOutUser} to={"/"}>Log Out</Link>
            </Button>
          </Col>
        </Row>
      </div>
    </>

  );
}

export default Profile;


/**

import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { message, Upload } from 'antd';
import { useState } from 'react';

const getBase64 = (img, callback) => {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
};

const beforeUpload = (file) => {
  const isJpg = file.type === 'image/jpeg';

  if (!isJpg) {
    message.error('You can only upload a JPG file!');
  }

  const isLt2M = file.size / 1024 / 1024 < 2;

  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }

  return isJpg && isLt2M;
};

const App = () => {
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState("avatar");

  const handleChange = (info) => {
    if (info.file.status === 'uploading') {
      setLoading(true);
      return;
    }

    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, (url) => {
        setLoading(false);
        setImageUrl(url);
      });
    }
  };

  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </div>
  );

  return (
    <Upload
      name="avatar"
      listType="picture-card"
      className="avatar-uploader"
      showUploadList={false}
      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
      beforeUpload={beforeUpload}
      onChange={handleChange}
    >
    <img
          src={imageUrl}
          alt="avatar"
          style={{
            width: '100%',
          }}
        />
    </Upload>
  );
};

export default App;


 */