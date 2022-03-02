import React from "react";
import "./login1.css";

const Login1 = () => {
  return (
    <div>
       <img
      className="rud"
      src="https://i.ibb.co/fr8fhm2/bg-blue.png"
      alt=""
    />
      <div className="App">
        <h2 id="title">IIT ISM DHANBAD PLACEMENT PORTAL</h2>
        <h3 className="name">EMAIL-ID</h3>
        <div>
          <input type="text" className="user" />
        </div>
        <div className="user" id="cap"></div>
        <div>
          <button className="pro">LOGIN</button>
          <button className="pro" id="btn">
            Back to home
          </button>
        </div>
      </div>
    </div>
  );
};
export default Login1;