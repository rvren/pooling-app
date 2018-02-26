import React, { Component } from "react";
import "./styles.css";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng
} from "react-places-autocomplete";
import SearchBar from "../../components/SearchBar";
import FlatButton from "material-ui/FlatButton";
import RideCard from "../../components/RideCard";
import { Map, GoogleApiWrapper } from "google-maps-react";

class Ride extends Component {
  constructor(props) {
    super(props);
    this.state = {
      address: "",
      numberArray: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    };
    this.onChange = address => this.setState({ address });
  }

  handleFormSubmit = event => {
    event.preventDefault();

    geocodeByAddress(this.state.address)
      .then(results => getLatLng(results[0]))
      .then(latLng => console.log("Success", latLng))
      .catch(error => console.error("Error", error));
  };

  render() {
    const inputProps = {
      value: this.state.address,
      onChange: this.onChange
    };

    return (
      <div className="Ride-wrapper">
        <div className="Ride-card-container">
          <div className="Ride-map-wrapper">
            <div className="Ride-destination-container">
              <SearchBar placeholder={"Start from"} />
              <SearchBar placeholder={"Destination"} />
            </div>
          </div>
          <div className="Ride-result-wrapper">
            {this.state.numberArray.map((item,index) => {
              return <RideCard key={index} onPickRide={() => console.log(item)} />;
            })}
          </div>
          <FlatButton label="CONFIRM RIDE" className="Confirm-ride" />
        </div>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyAMAeuRSqxFZzr8nppVagvLID4Y9yEIoIc"
})(Ride);

// <Map
//   google={this.props.google}
//   zoom={14}
//   style={{ height: "30vh", position: "relative" }}
// />;
