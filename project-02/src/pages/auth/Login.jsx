import React from 'react'
import {Link} from 'react-router-dom'
import "./Auth.css"

export default function Login() {
  return (
    <div className="login-main">
    <div className="login-logo">
      <img src="https://cdni.iconscout.com/illustration/premium/thumb/login-page-4468581-3783954.png" alt="login logo" />
    </div>
    <div className="login-form">
      <h3>Login Here</h3>
      <form>
        <label>user email</label>
        <input type="email" className="form-control" />
        <label>password</label>
        <input type="password" className="form-control mb-3" />
        <input type="submit" className="btn btn-warning w-100 mb-3" value="login" />
      </form>
        <span>Need an account ? <Link to="/signup">Signup</Link> here ! </span>
    </div>
  </div>
  )
}
