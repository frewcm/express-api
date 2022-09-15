import { useState } from "react";
import { FaUser } from "react-icons/fa";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const onChangeName = (e) => {
    setName(e.target.value);
    console.log(e.target.value);
  };
  const onChangeEmail = (e) => {
    setEmail(e.target.value);
    console.log(e.target.value);
  };
  const onChangePassword = (e) => {
    setPassword(e.target.value);
    console.log(e.target.value);
  };
  const onChangePassword2 = (e) => {
    setPassword2(e.target.value);
    console.log(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <section className="heading">
        <h1>
          <FaUser /> Register
        </h1>
        <p>please create a new account</p>
      </section>
      <section className="form">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <input
              type="text"
              className="form-constol"
              id="name"
              name="name"
              value={name}
              placeholder="enter your name"
              onChange={onChangeName}
            />
          </div>
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
            <input
              type="password2"
              className="form-constol"
              id="password2"
              name="password2"
              value={password2}
              placeholder="conform your password"
              onChange={onChangePassword2}
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

export default Register;
