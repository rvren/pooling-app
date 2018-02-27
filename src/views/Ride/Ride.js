import React, { Component } from "react";
import "./styles.css";
import SearchBar from "../../components/SearchBar";
import FlatButton from "material-ui/FlatButton";
import RideCard from "../../components/RideCard";
import { Map, GoogleApiWrapper } from "google-maps-react";

class Ride extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startingPoint: null,
      endingPoint: null,
      availableRoutes: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      isDisabled: true
    };
  }

  _getAddress(item, param) {
    switch (param) {
      case "start":
        this.setState({
          "startingPoint": item
        }, this._enableButton());
        return;
      case "end":
        this.setState({
          "endingPoint": item
        }, this._enableButton());
        return;
      default:
        return;
    }
  }

  _enableButton() {
    if (this.state.startingPoint && this.state.endingPoint) {
      this.setState({
        "isDisabled": false
      });
    }
  }

  render() {
    const inputProps = {
      value: this.state.address,
      onChange: this.onChange
    };
    return (
      <div className="Ride-wrapper">
        <div className="Ride-card-container">
          <div className="Ride-map-wrapper">
            <span className="Ride-result--header">Route planning</span>
            <div className="Ride-destination-container">
              <span className="Ride-destination--title">
                Your starting point
              </span>
              <SearchBar
                placeholder={"Start from"}
                point={"start"}
                getAddress={this._getAddress.bind(this)}
              />
              <span className="Ride-destination--title">Your destination</span>
              <SearchBar
                placeholder={"Destination"}
                point={"end"}
                getAddress={this._getAddress.bind(this)}
              />
            </div>
            <FlatButton
              label="FETCH SEATS"
              className="Fetch-primary"
              disabled={this.state.isDisabled}
            />
          </div>
          <div className="Ride-result-wrapper">
            <span className="Ride-result--header">Trending routes</span>
            <div className="Ride-result-content">
              {this.state.availableRoutes.map((item, index) => {
                return (
                  <RideCard key={index} onPickRide={() => console.log(item)} />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Ride;

// <FlatButton label="CONFIRM RIDE" className="Confirm-ride--disabled" disabled={this.state.isDisabled}/>
