import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex gap-80 border border-cyan-500 shadow-xl p-4">
      <Link to="/">
        <div className="ml-10">React Router</div>
      </Link>

      <div className="flex gap-4 ">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-orange-800" : "text-gray-700"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "text-orange-800" : "text-gray-700"
          }
        >
          About
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "text-orange-800" : "text-gray-700"
          }
        >
          Contact
        </NavLink>
        <NavLink
          to="/github"
          className={({ isActive }) =>
            isActive ? "text-orange-800" : "text-gray-700"
          }
        >
          Github
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
