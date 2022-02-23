import React, { Component } from "react";
import "./styles.css";
import Recaptcha from "react-recaptcha";

class App extends Component {
  constructor(props) {
    super(props);

    this.handleSubscribe = this.handleSubscribe.bind(this);
    this.recaptchaLoaded = this.recaptchaLoaded.bind(this);
    this.verifyCallback = this.verifyCallback.bind(this);

    this.state = {
      isVerified: false
    };
  }

  recaptchaLoaded() {
    console.log("capcha successfully loaded");
  }

  handleSubscribe() {
    if (this.state.isVerified) {
      alert("You have successfully subscribed!");
    } else {
      alert("Please verify that you are a human!");
    }
  }

  verifyCallback(response) {
    if (response) {
      this.setState({
        isVerified: true
      });
    }
  }

  render() {
    return (
      <div className="App">
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
          <h3 class="name">USERNAME</h3>
          <div>
            <input type="text" className="user" />
          </div>
          <h3 className="name" id="name1">
            PASSWORD
          </h3>
          <div className="name" id="forgot">
            Forgot your password?
          </div>
          <div>
            <input type="text" className="user" id="user1" />
          </div>
          <div className="user" id="cap">
            <Recaptcha
              sitekey=" 6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
              render="explicit"
              onloadCallback={this.recaptchaLoaded}
              verifyCallback={this.verifyCallback}
            />
          </div>
          <div>
            <button className="pro">LOGIN</button>
            <p className="name" id="reg">
              Don't have account?
            </p>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
