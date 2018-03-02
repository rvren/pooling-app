import React, { Component } from "react";
import "./styles.css";
import TextField from "material-ui/TextField";
import { Link } from "react-router-dom";
import Legend from "../Legend";
import { firebaseApp } from "../../config/firebase";
import FlatButton from "material-ui/FlatButton";
import {Redirect} from 'react-router-dom';

let userRef = firebaseApp
  .database()
  .ref("users")
  .limitToLast(100);


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errorMessage: undefined,
      users: undefined
    };
    this._handleChange = this._handleChange.bind(this);
  }

  _handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  _validateForm() {
    if (
      !this.state.username ||
      this.state.username.length < 4 ||
      !this.state.password
    ) {
      this.setState({
        errorMessage: "Field Validation error"
      });
      return false;
    } else {
      this.setState({
        errorMessage: "Autenticating user"
      });
      this._validateUser();
    }
  }

  _validateUser() {
    console.log(this.state.users)
    let result = this.state.users.filter((item) => (item.mobile === this.state.username || item.email === this.state.username) && item.password === this.state.password);
    if (result && result.length > 0) {
      window.location = "/ride";
    } else {
      this.setState({
        errorMessage: "Autentication failed"
      });
    }
  }

  componentDidMount() {
    userRef.on("value", snapshot => {
      this.setState({
        users: Object.values(snapshot.val()),
      });
    });
  }

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
                  floatingLabelFixed={true}
                  className="Input-text"
                  type="text"
                  name="username"
                  onChange={this._handleChange}
                />
                <TextField
                  hintText="Enter your secret password"
                  floatingLabelText="Password"
                  floatingLabelFixed={true}
                  className="Input-text"
                  type="password"
                  name="password"
                  onChange={this._handleChange}
                />
                <br />
                <FlatButton
                  label="LOGIN"
                  className="Cta-primary"
                  onClick={() => this._validateForm()}
                />
                <p className="Register-content--text">
                  Don't have an account?
                  <Link to="/register" className="Register-content--subtext">
                    <span> REGISTER NOW</span>
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

export default Login;
