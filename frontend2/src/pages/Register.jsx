import React from "react";

function Register() {
  return (
    <div className="register">
      <form>
        <label>name</label>
        <input type="text" placeholder="enter name" />
        <label>email</label>
        <input type="email" placeholder="enter email" />
        <label>password</label>
        <input type="password" placeholder="enter password" />
        <label>password2</label>
        <input type="password" placeholder="enter password2" />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
