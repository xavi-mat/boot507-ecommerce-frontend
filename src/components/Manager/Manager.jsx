import { Card, Typography } from "antd";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from '../../context/UserContext/UserState';
import ManagerList from './ManagerList/ManagerList';
const { Title } = Typography;

function Manager() {

  const { user } = useContext(UserContext);

  if (!(["admin", "manager"].includes(user?.role))) {
    return (
      <div className="main-container">
        <Card>
          <Title>Manager</Title>
          <h2>Unauthorized</h2>
          <h3>Not enough permissions to access this page.</h3>
          <p>Please, try to <Link to="/login">Log in</Link></p>
        </Card>
      </div>
    )
  } else {
    return (
      <div className="main-container">
        <Title>Manager</Title>
        <ManagerList />
      </div>
    )
  }
}

export default Manager