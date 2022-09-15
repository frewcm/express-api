import { useState } from "react";
import { FaSignInAlt } from "react-icons/fa";
import "../index.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
    console.log(e.target.value);
  };
  const onChangePassword = (e) => {
    setPassword(e.target.value);
    console.log(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <section className="heading">
        <h1>
          <FaSignInAlt /> Login
        </h1>
        <p>login and start setting goals</p>
      </section>
      <section className="form">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <input
              type="email"
              className="form-constol"
              id="email"
              name="email"
              value={email}
              placeholder="enter your email"
              onChange={onChangeEmail}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-constol"
              id="password"
              name="password"
              value={password}
              placeholder="enter password"
              onChange={onChangePassword}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-block">
              Submit
            </button>
          </div>
        </form>
      </section>
    </>
  );
}

export default Login;
