import {
  LineChartOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PlusSquareOutlined,
  TeamOutlined,
  UnorderedListOutlined,
} from '@ant-design/icons';
import { Button, Col, Menu, Row, Typography } from "antd";
import { useState } from "react";
import ManagerList from './ManagerList/ManagerList';
const { Title } = Typography;

const items = [
  { label: "Products", key: "products", icon: <UnorderedListOutlined /> },
  { label: "Stock", key: "stock", icon: <PlusSquareOutlined /> },
  { label: "Sales", key: "sales", icon: <LineChartOutlined   />},
  { label: "Staff", key: "staff", icon: <TeamOutlined /> },
  // { label: "", key: "" },
];

function Manager() {

  const [collapsed, setCollapsed] = useState(false);
  const [currentPage, setCurrentPage] = useState("");

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const handlePage = (selectedItem) => {
    switch (selectedItem.key) {
      case "products":
      default:
        setCurrentPage(<ManagerList />);
    }
  }

  return (
    <div style={{ margin: "1rem 2rem" }}>
      <Title>Manager</Title>
      <Row>
        <Col span={6}>
          <Button type="primary" onClick={toggleCollapsed} style={{ marginBottom: 16 }}>
            {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          </Button>
          <Menu
            mode="inline"
            theme="dark"
            inlineCollapsed={collapsed}
            items={items}
            onSelect={handlePage}
          />
        </Col>
        <Col span={18}>{currentPage}</Col>
      </Row>
    </div>
  )
}

export default Manager