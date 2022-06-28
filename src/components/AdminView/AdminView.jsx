import { Card, Typography } from "antd";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/UserContext/UserState";
import AdminReview from "./AdminReview/AdminReview";
const { Title } = Typography;

function AdminView() {

  const { user } = useContext(UserContext);

  if (!(["admin"].includes(user?.role))) {
    return (
      <div className="main-container">
        <Card>
          <Title>Admin Control Panel</Title>
          <h2>Unauthorized</h2>
          <h3>Not enough permissions to access this page.</h3>
          <p>Please, try to <Link to="/login">Log in</Link></p>
        </Card>
      </div>
    )
  }

  return (
    <div className="main-container">
      <Card hoverable>
        <Title>Admin Control Panel</Title>
        <h2>You have the power!</h2>
      </Card>
      <AdminReview />
    </div>
  )
}

export default AdminView