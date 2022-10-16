import { useState, useEffect } from "react";
import "../index.css";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { login } from "../api/Axios";
import ClipLoader from "react-spinners/ClipLoader";
import { atom, useAtom } from "jotai";

const userToken = localStorage.getItem("currentUser")
  ? JSON.parse(localStorage.getItem("currentUser"))
  : undefined;
export const tokenAtom = atom(userToken);

function Login() {
  const [token, setToken] = useAtom(tokenAtom);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const { isLoading, mutate } = useMutation(login, {
    onSuccess: (data) => {
      localStorage.setItem("currentUser", JSON.stringify(data.token));
      setToken(data.token);
      navigate("/");
    },
  });

  if (isLoading) {
    return (
      <div className="cliploader">
        <ClipLoader size={100} />
      </div>
    );
  }

  const handleClick = (e) => {
    e.preventDefault();
    mutate({ email, password });
  };

  return (
    <div className="login">
      <form>
        <label>email</label>
        <input
          onChange={onChangeEmail}
          name="email"
          type="email"
          placeholder="enter email"
        />
        <label>password</label>
        <input
          onChange={onChangePassword}
          name="password"
          type="password"
          placeholder="enter password"
        />
        <button onClick={handleClick} type="submit">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
