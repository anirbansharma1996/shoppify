import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Auth.css";

export default function Login() {

  const [login, setLogin] = useState({
    useremail: "",
    userpassword: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setLogin({ ...login, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = JSON.parse(localStorage.getItem("shoppify-auth"));
    if (
      user.useremail === login.useremail &&
      user.userpassword === login.userpassword
    ) {
      localStorage.setItem("shoppify-auth-status", true);
      toast.success("Login successfull !");
      setTimeout(() => {
        window.location.href="/"
      }, 1200);
    } else {
      toast.error("invalid email or password !");
      setLogin({
        useremail: "",
        userpassword: "",
      });
    }
  };

  return (
    <div className="login-main">
      <div className="login-logo">
        <img
          src="https://cdni.iconscout.com/illustration/premium/thumb/login-page-4468581-3783954.png"
          alt="login logo"
        />
      </div>
      <div className="login-form">
        <h3>Login Here</h3>
        <form onSubmit={handleSubmit}>
          <label>user email</label>
          <input
            type="email"
            className="form-control"
            name="useremail"
            value={login.useremail}
            onChange={handleInput}
            required
          />
          <label>password</label>
          <input
            type="password"
            className="form-control mb-3"
            name="userpassword"
            value={login.userpassword}
            onChange={handleInput}
            required
          />
          <input
            type="submit"
            className="btn btn-warning w-100 mb-3"
            value="login"
          />
        </form>
        <ToastContainer />
        <span>
          Need an account ? <Link to="/signup">Signup</Link> here !{" "}
        </span>
      </div>
    </div>
  );
}
