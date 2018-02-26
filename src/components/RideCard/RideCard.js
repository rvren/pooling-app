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
    return (
      <div className={btnClass} onClick={() => this._onRideTap()}>
        <div>
          <img
            src="https://d30y9cdsu7xlg0.cloudfront.net/png/214280-200.png"
            style={{
              width: 60,
              marginTop: 8,
              background: "#EEE",
              borderRadius: 50
            }}
            alt="avatar"
          />
        </div>
        <div>
          <p className="Ride-card-component--details">
            <span className="Ride-card-component--name">John Doe</span>
            <br />
            <span className="Ride-card-component--route">
              Route: Koramangala to Whitefield
            </span>
            <br />
            <span className="Ride-card-component--car">Car: Polo</span>
            <br />
            <span className="Ride-card-component--seats">
              {" "}
              Seats Available: 3
            </span>
          </p>
        </div>
        <div>
          <p className="Ride-card-component--details">
            <span className="Ride-card-component--rating">4.5 | *</span>
          </p>
        </div>
      </div>
    );
  }
}

export default RideCard;
