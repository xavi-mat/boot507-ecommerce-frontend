import React, { useContext } from "react";
import { UserContext } from "../../context/UserContext/UserState";
import { Link } from "react-router-dom";

function Profile() {
  const { user, logout } = useContext(UserContext);

  const logOutUser = () => {
    logout();
  };
  return (
    <div>
      <div>{user.avatar}</div>
      <div>
        {user.username}, {user.firstName} {user.lastName}
      </div>
      <div>{user.email}</div>
      <div>{user.gender}</div>

      <Link onClick={logOutUser} to={"/"}>
        LogOut
      </Link>
    </div>
  );
}
export default Profile;
