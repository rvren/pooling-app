import React, { Component } from "react";
import logo from "./logo.svg";
import "./styles.css";
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const style = {
  margin: 12
};

class Ride extends Component {
  render() {
    return (
      <Card className="Card-wrapper">
        <CardHeader
          title="Login"
        />
        <CardActions>
          <FlatButton label="Action1" />
          <FlatButton label="Action2" />
        </CardActions>
      </Card>
    );
  }
}

export default Ride;
