import React, { Component } from "react";
import "./styles.css";
import TextField from "material-ui/TextField";
import FlatButton from "material-ui/FlatButton";
import { Link } from "react-router-dom";
import Legend from "../Legend";

class Register extends Component {
  render() {
    return (
      <div className="Wrapper">
        <div className="Content-wrapper">
          <div className="Card-container">
            <Legend />
            <div className="Card-content">
              <h6 className="Card-header">REGISTER</h6>
              <h6 className="Card-header--subcontent">
                Save time and money by logging in to the app
              </h6>
              <div className="Login-form">
                <TextField
                  hintText="Enter your firstname and lastname"
                  floatingLabelText="Fullname"
                  className="Input-text"
                />
                <TextField
                  hintText="Enter your email ID"
                  floatingLabelText="Email ID"
                  className="Input-text"
                />
                <TextField
                  hintText="Enter your 10-digit mobile number"
                  floatingLabelText="Mobile Number"
                  className="Input-text"
                />
                <TextField
                  hintText="Enter your secret password"
                  floatingLabelText="Password"
                  className="Input-text"
                />
                <TextField
                  hintText="Re-enter your secret password"
                  floatingLabelText="Re-enter Password"
                  className="Input-text"
                />
                <TextField
                  hintText="Name the car you have"
                  floatingLabelText="Car Model"
                  className="Input-text"
                />
                <br />
                <FlatButton label="REGISTER" className="Cta-primary" />
                <p className="Register-content--text">
                  Already have an account?
                  <Link to="/login" className="Register-content--subtext">
                    <span> LOGIN NOW</span>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
