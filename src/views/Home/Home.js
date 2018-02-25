import React, { Component } from "react";
import "./styles.css";
import { Link, withRouter } from "react-router-dom";
import Login from "../../components/Login";
import Register from "../../components/Register";

class Home extends Component {
  render() {
    return (
          <Login />
    );
  }
}

export default Home;
