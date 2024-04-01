import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Auth.css";

export default function Signup() {
  const navigate = useNavigate();
  const [signup, setSignup] = useState({
    username: "",
    useremail: "",
    userpassword: "",
  });
  const [isVisible, setIsVisible] = useState(false);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setSignup({ ...signup, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("shoppify-auth", JSON.stringify(signup));
    toast.success("Signup successfull !");
    setTimeout(() => {
      navigate("/login");
    }, 1500);
  };

  return (
    <div className="signup-main">
      <div className="signup-logo">
        <img
          src="https://cdni.iconscout.com/illustration/premium/thumb/sign-up-8694031-6983270.png"
          alt="signup logo"
        />
      </div>
      <div className="signup-form">
        <h3>Signup Here</h3>
        <form onSubmit={handleSubmit}>
          <label>
            user name <sup style={{ color: "red" }}>*</sup>{" "}
          </label>
          <input
            type="text"
            name="username"
            value={signup.username}
            className="form-control"
            onChange={handleInput}
            required
          />
          <label>user email</label>
          <input
            type="email"
            className="form-control"
            name="useremail"
            value={signup.useremail}
            onChange={handleInput}
            required
          />
          <label>password</label>
          <div className="input-group">
            <input
              type={isVisible ? "text" : "password"}
              className="form-control"
              name="userpassword"
              value={signup.userpassword}
              onChange={handleInput}
              required
            />
            <div
              class="input-group-text "
              onClick={() => setIsVisible(!isVisible)}
              style={{ cursor: "pointer" }}
            >
              {isVisible ? "HIDE" : "SHOW"}
            </div>
          </div>
          <input
            type="submit"
            className="btn btn-info w-100 mb-3 mt-3"
            value="signup"
          />
        </form>
        <ToastContainer />
        <span>
          Already registered ? <Link to="/login">Login</Link> here !{" "}
        </span>
      </div>
    </div>
  );
}
