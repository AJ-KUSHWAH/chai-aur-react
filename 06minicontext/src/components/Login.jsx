import React, { useState, useContext } from "react";
import UserContext from "../context/UserContext";

const Login = () => {
  const { username, setUserName } = useState("");
  const { password, setPassword } = useState("");

  const { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ username, password });
  };
  return (
    <div>
      <input
        type="text"
        placeholder="username"
        value={username}
        onChange={(e) => setUserName(e.target.value)}
      />
      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};

export default Login;
