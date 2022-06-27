import { Card, Typography } from "antd";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext/UserState";
import AdminReview from "./AdminReview/AdminReview";
const { Title } = Typography;

function AdminView() {

  const { user } = useContext(UserContext);

  if (!(["admin"].includes(user?.role))) {
    // TODO: Do this check using React Guards
    return (
      <div style={{ margin: "1rem 2rem" }}>
        <Title>Admin Control Panel</Title>
        <h2>Unauthorized</h2>
        <h3>Not enough permissions to access this page.</h3>
      </div>
    )
  }

  return (
    <div style={{ margin: "1rem 2rem" }}>
      <Card hoverable>
        <Title>Admin Control Panel</Title>
        <h2>You have the power!</h2>
      </Card>
      <AdminReview />
    </div>
  )
}

export default AdminView