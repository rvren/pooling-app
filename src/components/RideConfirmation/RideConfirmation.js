import React, { Component } from "react";
import "./styles.css";
import Lottie from "react-lottie";
import * as confirmation from "../../assets/confirmation";
import FlatButton from "material-ui/FlatButton";

const confirmationOptions = {
  loop: true,
  autoplay: true,
  animationData: confirmation
};

class RideConfirmation extends Component {

  render() {
    const iterator = this.props.host;
    return (
      <div className="Ride-confirmation-component--wrapper">
        <div className="Ride-confirmation-component--ride-details">
          <Lottie
            options={confirmationOptions}
            height={"100%"}
            width={"100%"}
          />
          <p className="Ride-confirmation-component--message">
            Sweet! Your booking is confirmed.<br/>
            Your host for the ride is <b>{iterator.host_name}</b> and is <b>{iterator.eta}</b></p>
        </div>
        <FlatButton label="RETURN" className="Return-primary" onClick={this.props.returnView}/>
      </div>
    );
  }
}

export default RideConfirmation;
