import React, { Component } from "react";
import "./styles.css";
import TextField from "material-ui/TextField";
import { Card, CardActions, CardHeader, CardText } from "material-ui/Card";
import RaisedButton from "material-ui/RaisedButton";
import { orange500, blue500 } from "material-ui/styles/colors";

const style = {
  margin: 12
};

class Legend extends Component {
  render() {
    return (
      <div className="Pool-content">
        <h6 className="Pool-header">WePool</h6>
        <h6 className="Pool-subcontent">
          Pooling made easy.<br />
          Connect
          <span className="Vertical-divider">|</span>
          Travel
          <span className="Vertical-divider">|</span>
          Save
        </h6>
      </div>
    );
  }
}

export default Legend;
