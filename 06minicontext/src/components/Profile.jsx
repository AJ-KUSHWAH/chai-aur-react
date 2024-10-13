import React, { useContext } from "react";
import UserContext from "../context/UserContext";

const Profile = () => {
  const { user } = useContext(UserContext);
  if (!user) return <div>Please Login</div>;
  return (
    <div>
      <h1> User Profile</h1>
      <h3>User Name {user.username}</h3>
    </div>
  );
};

export default Profile;
