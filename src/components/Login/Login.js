import React, { Component } from "react";
import "./styles.css";
import TextField from "material-ui/TextField";
import { Card, CardActions, CardHeader, CardText } from "material-ui/Card";
import RaisedButton from "material-ui/RaisedButton";
import { Link } from "react-router-dom";
import Legend from "../Legend";

const style = {
  margin: 12
};

class Login extends Component {
  render() {
    return (
      <div className="Wrapper">
        <div className="Content-wrapper">
          <div className="Card-container">
            <Legend />
            <div className="Card-content">
              <h6 className="Card-header">LOGIN</h6>
              <h6 className="Card-header--subcontent">
                Save time and money by logging in to the app
              </h6>
              <div className="Login-form">
                <TextField
                  hintText="10-digit mobile number or email ID"
                  floatingLabelText="Username"
                  className="Input-text"
                />
                <TextField
                  hintText="Enter your secret password"
                  floatingLabelText="Password"
                  className="Input-text"
                />
                <br />
                <RaisedButton label="LOGIN" className="Cta-primary" />
                <p className="Register-content--text">
                  Don't have an account?
                  <Link to="/register" className="Register-content--subtext">
                    <span> REGISTER NOW</span>
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

export default Login;
