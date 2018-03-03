import React, { Component } from "react";
import "./styles.css";
import TextField from "material-ui/TextField";
import FlatButton from "material-ui/FlatButton";
import { Link } from "react-router-dom";
import Legend from "../Legend";
import { firebaseApp } from "../../config/firebase";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: undefined,
      email: undefined,
      mobile: undefined,
      password: undefined,
      repassword: undefined,
      model: undefined,
      errorMessage: undefined
    };
    this._handleChange = this._handleChange.bind(this);
  }

  _validateForm() {
    if (
      !this.state.username ||
      this.state.username.length < 4 ||
      !this.state.email ||
      this.state.email.length < 4 ||
      !this.state.mobile ||
      this.state.mobile.length < 10 ||
      this.state.mobile.length > 10 ||
      !this.state.password ||
      !this.state.repassword ||
      this.state.password !== this.state.repassword ||
      !this.state.model ||
      this.state.model.length < 3
    ) {
      this.setState({
        errorMessage: "Field Validation error"
      });
      return false;
    } else {
      let user_details = {
        username: this.state.username,
        email: this.state.email,
        mobile: this.state.mobile,
        password: this.state.password,
        model: this.state.model
      };
      firebaseApp
        .database()
        .ref("/users/" + this.state.mobile)
        .set(user_details);
      this.setState({
        errorMessage: "Registration successfull"
      });
      window.location = "/ride";
    }
  }

  _handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div className="Wrapper">
        <div className="Content-wrapper">
          <div className="Card-container">
            <Legend />
            <div className="Card-content">
              <h6 className="Card-header">REGISTER</h6>
              <h6 className="Card-header--subcontent">
                Secured and Hassle Free mode of commuting!
              </h6>

              <div className="Login-form">
                <TextField
                  hintText="Enter your firstname and lastname"
                  floatingLabelText="Fullname"
                  className="Input-text"
                  name="username"
                  onChange={this._handleChange}
                />
                <TextField
                  hintText="Enter your email ID"
                  floatingLabelText="Email ID"
                  className="Input-text"
                  type="mail"
                  name="email"
                  onChange={this._handleChange}
                />
                <TextField
                  hintText="Enter your 10-digit mobile number"
                  floatingLabelText="Mobile Number"
                  className="Input-text"
                  type="number"
                  name="mobile"
                  onChange={this._handleChange}
                />
                <TextField
                  hintText="Enter your secret password"
                  floatingLabelText="Password"
                  className="Input-text"
                  type="password"
                  name="password"
                  onChange={this._handleChange}
                />
                <TextField
                  hintText="Re-enter your secret password"
                  floatingLabelText="Re-enter Password"
                  className="Input-text"
                  type="password"
                  name="repassword"
                  onChange={this._handleChange}
                />
                <TextField
                  hintText="Name the car you have"
                  floatingLabelText="Car Model"
                  className="Input-text"
                  name="model"
                  onChange={this._handleChange}
                />
                <br />
                <FlatButton
                  label="Register"
                  className="Cta-primary"
                  onClick={() => this._validateForm()}
                />
                <p className="Register-content--text">
                  Already have an account?
                  <Link to="/login" className="Register-content--subtext">
                    <span> LOGIN NOW</span>
                  </Link>
                </p>
                <p className="Register-content--message">
                  {this.state.errorMessage}
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
