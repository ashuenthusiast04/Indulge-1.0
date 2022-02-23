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
        <h2 id="title">IIT ISM DHANBAD PLACEMENT PORTAL</h2>
        <h3 className="name">EMAIL-ID</h3>
        <div>
          <input type="text" className="user" />
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
          <button className="pro" id="btn">
            Back to home
          </button>
        </div>
      </div>
    );
  }
}
export default App;

