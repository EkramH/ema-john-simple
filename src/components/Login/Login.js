import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  return (
    <div className="form-container">
      <div className="form-wraper">
        <div>
          <h1 className="form-title">Login</h1>
          <form>
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" />
            </div>
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" />
            </div>
            <input className="form-submit-btn" type="submit" value="Submit" />
          </form>
          <p>
            New to ema-john? &nbsp;
            <Link className="form-link" to="/signup">
              Create an account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
