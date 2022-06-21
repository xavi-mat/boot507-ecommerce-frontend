import { Menu } from "antd";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/UserContext/UserState";

function Header() {

  const { user } = useContext(UserContext);
  const [current, setCurrent] = useState('home');

  const commonItems = [
    { label: <Link to="/">🏠</Link>, key: 'home' },
    { label: <Link to="/products">Products</Link>, key: 'products' },
  ];
  const unloggedItems = [
    { label: <Link to="/register">Register</Link>, key: 'register' },
    { label: <Link to="/login">Login</Link>, key: 'login' },
  ];
  const loggedInItems = [
    { label: <Link to="/orders">Orders</Link>, key: 'orders' },
    { label: <Link to="/profile">Profile</Link>, key: 'profile' },
    { label: <Link to="/cart">🛒</Link>, key: 'cart' },
  ];

  const items = user ?
    [...commonItems, ...loggedInItems] :
    [...commonItems, ...unloggedItems];

  const onClick = (e) => {
    setCurrent(e.key);
  };

  return (
    <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
  )
}

export default Header