import { Menu } from "antd";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/UserContext/UserState";
import { CrownOutlined, HomeOutlined, LockOutlined, LoginOutlined, SettingOutlined, ShopOutlined, ShoppingCartOutlined, SolutionOutlined, UserAddOutlined, UserOutlined } from '@ant-design/icons';

function Header() {

  const { user, getUserInfo } = useContext(UserContext);
  const [current, setCurrent] = useState('home');

  useEffect(() => {
    console.log("USER!!!", user)
    if (!user) {
      getUserInfo();
    }
  }, [user]);

  const commonItems = [
    { label: <Link to="/">Home</Link>, key: 'home', icon: <HomeOutlined /> },
    { label: <Link to="/products">Products</Link>, key: 'products', icon: <ShopOutlined /> },
    { label: <Link to="/cart">Cart</Link>, key: 'cart', icon: <ShoppingCartOutlined /> },
  ];
  const unloggedItems = [
    { label: <Link to="/register">Register</Link>, key: 'register', icon: <UserAddOutlined /> },
    { label: <Link to="/login">Login</Link>, key: 'login', icon: <LoginOutlined /> },
  ];
  const loggedInItems = [
    { label: <Link to="/orders">Orders</Link>, key: 'orders', icon: <SolutionOutlined /> },
    { label: <Link to="/profile">Profile</Link>, key: 'profile', icon: <UserOutlined /> },
  ];

  if (user?.role === "premium") {
    loggedInItems.unshift({ label: <Link to="/premium">Premium</Link>, key: 'premium', icon: <CrownOutlined />, danger: true });
  }
  const items = user ?
    [...commonItems, ...loggedInItems] :
    [...commonItems, ...unloggedItems];


  if (["admin", "manager"].includes(user?.role)) {
    items.push({ label: <Link to="/manager">Manager</Link>, key: 'manager', icon: <SettingOutlined /> });
  }
  if (user?.role === "admin") {
    items.push({ label: <Link to="/admin">Admin</Link>, key: 'admin', icon: <LockOutlined />, danger: true });
  }

  const onClick = (e) => {
    setCurrent(e.key);
  };

  return (
    <>
      <div style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
        <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
      </div>
      <div><h1 style={{ color: "#00000000" }}>Blank Space</h1></div>
    </>
  )
}

export default Header