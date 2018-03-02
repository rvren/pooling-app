import React, { Component } from "react";
import "./styles.css";
import SearchBar from "../../components/SearchBar";
import FlatButton from "material-ui/FlatButton";
import RideCard from "../../components/RideCard";
import RideConfirmation from "../../components/RideConfirmation";
import { firebaseApp } from "../../config/firebase";
import Dialog from "material-ui/Dialog";
import Lottie from "react-lottie";
import * as loading from "../../assets/loading";
import * as noresults from "../../assets/noresults";

let messagesRef = firebaseApp
  .database()
  .ref("routes")
  .limitToLast(100);

const noresultsOptions = {
  loop: true,
  autoplay: true,
  animationData: noresults
};

const loadingOptions = {
  loop: true,
  autoplay: true,
  animationData: loading
};

const route_text = "Trending routes";
const filter_text = "Personalized routes";

class Ride extends Component {
  constructor(props) {
    super(props);

    let routes = [];
    this.state = {
      startingPoint: null,
      endingPoint: null,
      availableRoutes: [],
      filteredRoutes: [],
      isDisabled: true,
      isFetched: false,
      displayText: route_text,
      selectedHost: null,
      open: false
    };
  }

  componentDidMount() {
    messagesRef.on("value", snapshot => {
      this.setState({
        availableRoutes: Object.values(snapshot.val()),
        filteredRoutes: Object.values(snapshot.val()),
        isFetched: true
      });
    });
  }

  _getAddress(item, param) {
    switch (param) {
      case "start":
        this.setState({
          startingPoint: item.split(",")[0]
        });
        return;
      case "end":
        this.setState({
          endingPoint: item.split(",")[0]
        });
        return;
      default:
        return;
    }
  }

  _enableButton() {
    if (this.state.startingPoint && this.state.endingPoint) {
      console.log("inside");
      this.setState({
        isDisabled: false
      });
    }
  }

  _handleOpen = item => {
    this.setState({
      open: true,
      selectedHost: item
    });
  };

  _handleClose = () => {
    this.setState({ open: false });
  };

  _swicthView = () => {
    this.setState({
      open: false,
      selectedHost: null
    });
  };

  filterResults() {
    if (this.state.startingPoint && this.state.endingPoint) {
      let filteredResult = Object.values(this.state.availableRoutes).filter(
        item =>
          this.state.startingPoint.search(item.start_point) >= 0 &&
          this.state.endingPoint.search(item.end_point) >= 0
      );
      this.setState({
        filteredRoutes: filteredResult,
        displayText: filter_text,
        open: false
      });
    }
  }

  render() {
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
            {this.state.startingPoint && this.state.endingPoint ? (
              <FlatButton
                label="FETCH SEATS"
                className="Fetch-primary"
                onClick={() => this.filterResults()}
              />
            ) : null}
          </div>
          <div className="Ride-result-wrapper">
            <span className="Ride-result--header">
              {this.state.displayText}
            </span>
            <div className="Ride-result-content">
              {this.state.open ? (
                <RideConfirmation
                  host={this.state.selectedHost}
                  returnView={this._swicthView}
                />
              ) : (
                this.state.filteredRoutes.map((item, index) => {
                  return (
                    <RideCard
                      key={index}
                      route={item}
                      onPickRide={this._handleOpen.bind(this, item)}
                    />
                  );
                })
              )}
              {this.state.filteredRoutes.length === 0 &&
                this.state.isFetched && (
                  <div>
                    <Lottie
                      options={noresultsOptions}
                      height={180}
                      width={180}
                    />
                    <p className="Ride-result--error-text">
                      No results to display
                    </p>
                  </div>
                )}
              {!this.state.isFetched && (
                <div>
                  <Lottie
                    options={loadingOptions}
                    height={"30%"}
                    width={"30%"}
                  />
                  <p className="Ride-result--error-text">
                    Fetching results ...
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Ride;
