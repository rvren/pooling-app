import React, { Component } from "react";
import "./styles.css";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng
} from "react-places-autocomplete";
import SearchBar from "../../components/SearchBar";

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
        <div className="Ride-content-wrapper">
          <div className="Ride-card-container">
          <SearchBar placeholder={'Start from'}/>
          <SearchBar placeholder={'Destination'}/>
            <div className="Ride-card-content">
              <h6 className="Ride-card-header">REGISTER</h6>
              <h6 className="Ride-card-header--subcontent">
                Save time and money by logging in to the app
              </h6>
              <div className="Ride-login-form">
              
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Ride;
