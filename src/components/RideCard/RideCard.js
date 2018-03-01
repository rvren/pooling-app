import React, { Component } from "react";
import "./styles.css";
import classNames from "classnames";

class RideCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPressed: false,
      textPressed: false
    };
  }

  _onRideTap() {
    this.setState((prevState, props) => {
      return { 
        isPressed: !prevState.isPressed,
        textPressed: !prevState.textPressed
      };
    });
    this.props.onPickRide();
  }
  render() {
    var btnClass = classNames("Ride-card-component--wrapper", {
      pressed: this.state.isPressed
    });
    var textClass = classNames({
      textPressed: this.state.textPressed
    });
    const iterator = this.props.route;
    return (
      <div className={btnClass} onClick={() => this._onRideTap()}>
        <div>
          <img
            src="https://d30y9cdsu7xlg0.cloudfront.net/png/214280-200.png"
            style={{
              width: 40,
              marginTop: 12,
              background: "#fff",
              borderRadius: 50
            }}
            alt="avatar"
          />
        </div>
        <div className="Ride-card-component--ride-details">
          <p className="Ride-card-component--details">
            <span className="Ride-card-component--name">{iterator.host_name}</span>
            <br />
            <span className="Ride-card-component--route">
              Route: {iterator.start_point} to {iterator.end_point}
            </span>
            <br />
            <span className="Ride-card-component--car">Car: {iterator.car}</span>
            <br />
            <span className="Ride-card-component--seats">
              {" "}
              Seats Available: {iterator.available_seats}
            </span>
          </p>
        </div>
        <div className="Ride-card-component--ride-rating">
          <span className="Ride-card-component--rating">{iterator.rating ? iterator.rating : 'NA'}</span>
        </div>
      </div>
    );
  }
}

export default RideCard;
