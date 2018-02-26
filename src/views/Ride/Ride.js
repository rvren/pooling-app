import React, { Component } from "react";
import "./styles.css";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng
} from "react-places-autocomplete";
import SearchBar from "../../components/SearchBar";
import FlatButton from "material-ui/FlatButton";

class Ride extends Component {
  constructor(props) {
    super(props);
    this.state = { address: "" };
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
            <div className="Ride-card-component--wrapper">
              <div>
                <img
                  src="https://cdn1.iconfinder.com/data/icons/business-charts/512/customer-512.png"
                  style={{ width: 40 , marginTop: 8}}
                />
              </div>
              <div>
                <p className="Ride-card-component--details">
                  John Doe<br />
                  <span>Route: Koramangala to Whitefield</span>
                  <br />
                  <span>Car: Polo</span>
                  <span>Seats Available: 3</span>
                </p>
              </div>
              <div>
                <p className="Ride-card-component--details">
                  <span>4.5 | *</span>
                </p>
              </div>
            </div>
            <FlatButton label="CONFIRM RIDE" className="Confirm-ride" />
          </div>
        </div>
      </div>
    );
  }
}

export default Ride;
