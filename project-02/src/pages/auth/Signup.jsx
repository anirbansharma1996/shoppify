import React from "react";
import { Link } from "react-router-dom";
import "./Auth.css";

export default function Signup() {
  return (
    <div className="signup-main">
      <div className="signup-logo">
        <img src="https://cdni.iconscout.com/illustration/premium/thumb/sign-up-8694031-6983270.png" alt="signup logo" />
      </div>
      <div className="signup-form">
        <h3>Signup Here</h3>
        <form>
          <label>user name</label>
          <input type="text" className="form-control" />
          <label>user email</label>
          <input type="email" className="form-control" />
          <label>password</label>
          <input type="password" className="form-control mb-3" />
          <input type="submit" className="btn btn-info w-100 mb-3" value="signup" />
        </form>
        <span>Already registered ? <Link to="/login">Login</Link> here ! </span>
      </div>
    </div>
  );
}
