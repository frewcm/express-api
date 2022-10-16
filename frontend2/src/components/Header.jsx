import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../index.css";
import { tokenAtom } from "../pages/Login";
import { useAtom } from "jotai";

function Header() {
  const navigate = useNavigate();
  const [token, setToken] = useAtom(tokenAtom);
  const handleClick = (e) => {
    e.preventDefault();
    localStorage.removeItem("currentUser");
    setToken(undefined);
    navigate("/login");
  };
  return (
    <header>
      <Link className="link" to="/">
        Dashbord
      </Link>
      <Link className="link" to="/login">
        Login
      </Link>
      <Link className="link" to="/register">
        Register
      </Link>
      <Link className="link" to="/test">
        Test
      </Link>
      <button className="link" onClick={handleClick}>
        Logout
      </button>
    </header>
  );
}

export default Header;
