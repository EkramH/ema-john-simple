import React from "react";
import { Link } from "react-router-dom";
import "./Signup.css";

const Signup = () => {
  return (
    <div className="form-container">
      <div className="form-wraper">
        <div>
          <h1 className="form-title">Sign Up</h1>
          <form>
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" required />
            </div>
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" required />
            </div>
            <div className="input-group">
              <label htmlFor="confirm-password">Confirm Password</label>
              <input type="password" name="confirm-password" required />
            </div>
            <input className="form-submit-btn" type="submit" value="Sign Up" />
          </form>
          <p>
            Already have an account? &nbsp;
            <Link className="form-link" to="/login">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
