import React, { useContext, useEffect } from "react";
import { UserContext } from "../../context/UserContext/UserState";
import { Link, useNavigate } from "react-router-dom";

function Profile() {
  const { user, logout } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      return navigate("/login");
    }
  }, [user]);


  const logOutUser = () => {
    logout();
  };

  return (
    <div>
      <div>{user?.avatar}</div>
      <div>
        {user?.username}, {user?.firstName} {user?.lastName}
      </div>
      <div>{user?.email}</div>
      <div>{user?.gender}</div>
      <Link onClick={logOutUser} to={"/"}>
        LogOut
      </Link>
    </div>
  );
}
export default Profile;
