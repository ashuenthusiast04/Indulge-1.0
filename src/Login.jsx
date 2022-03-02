import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="Ap">
    <img
      className="sahi"
      src="https://i.ibb.co/f2GZHcV/Rectangle.png"
      alt=""
    />
    <p className="over" id="hea">
      One stop portal for students & companies for placements.
    </p>

    <p className="head">Sign-in to IIT ISM Dhanbad Placement Portal</p>
    <div className="log">
      <h3 class="nam">USERNAME</h3>
      <div>
        <input type="text" className="use" />
      </div>
      <h3 className="nam" id="name1">
        PASSWORD
      </h3>
      <div className="nam" id="forgot">
        Forgot your password?
      </div>
      <div>
        <input type="text" className="use" id="user1" />
      </div>

      <div>
        <button className="pr">
        <Link
            style={{ textDecoration: "none", color: "white" }}
            to="/studentpage">
              LOGIN AS Student</Link></button>
        <button className="ps">
        <Link
            style={{ textDecoration: "none", color: "white" }}
            to="/recruiterpage">
              LOGIN AS Recruiter</Link></button>
        <p className="nam" id="reg">
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to="/login1"
          >
            Don't have account?
          </Link>
        </p>
      </div>
    </div>
  </div>
  );
};
export default Login;