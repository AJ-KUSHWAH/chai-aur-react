import React from "react";
import { useParams } from "react-router-dom";

const User = () => {
  const { userid } = useParams();
  return (
    <div className="bg-blue-400 text-2xl">
      <h1>User</h1>
      <p>User ID: {userid}</p>
    </div>
  );
};

export default User;
