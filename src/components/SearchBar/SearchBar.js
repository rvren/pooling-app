import React, { Component } from "react";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng
} from "react-places-autocomplete";
import "./styles.css";

const renderSuggestion = ({ formattedSuggestion }) => (
  <div className="Demo__suggestion-item">
    <i className="fa fa-map-marker Demo__suggestion-icon" />
    <strong>{formattedSuggestion.mainText}</strong>{" "}
    <small className="text-muted">{formattedSuggestion.secondaryText}</small>
  </div>
);

const renderFooter = () => (
  <div className="Demo__dropdown-footer">
    <div>
      <img
        src="https://raw.githubusercontent.com/kenny-hibino/react-places-autocomplete/master/demo/images/powered_by_google_default.png"
        className="Demo__dropdown-footer-image"
        alt="Powered by google"
      />
    </div>
  </div>
);

const cssClasses = {
  root: "form-group",
  input: "Demo__search-input",
  autocompleteContainer: "Demo__autocomplete-container"
};

const shouldFetchSuggestions = ({ value }) => value.length > 2;

const onError = (status, clearSuggestions) => {
  console.log(
    "Error happened while fetching suggestions from Google Maps API",
    status
  );
  clearSuggestions();
};

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      address: "",
      geocodeResults: null,
      loading: false
    };

    this.handleSelect = this.handleSelect.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSelect(address) {
    this.setState({
      address,
      loading: true
    });
    this.props.getAddress(address, this.props.point);
  }

  handleChange(address) {
    this.setState({
      address,
      geocodeResults: null
    });
  }

  renderGeocodeFailure(err) {
    return (
      <div className="alert alert-danger" role="alert">
        <strong>Error!</strong> {err}
      </div>
    );
  }

  renderGeocodeSuccess(lat, lng) {
    return (
      <div className="alert alert-success" role="alert">
       
      </div>
    );
  }

  render() {
    const inputProps = {
      type: "text",
      value: this.state.address,
      onChange: this.handleChange,
      autoFocus: true,
      placeholder: `${this.props.placeholder}`,
      name: "Demo__input",
      id: "my-input-id"
    };

    return (
      <div>
        <PlacesAutocomplete
          renderSuggestion={renderSuggestion}
          renderFooter={renderFooter}
          inputProps={inputProps}
          classNames={cssClasses}
          onSelect={this.handleSelect}
          onEnterKeyDown={this.handleSelect}
          onError={onError}
          shouldFetchSuggestions={shouldFetchSuggestions}
        />
        {this.state.loading && (
          <div>
            <i className="fa fa-spinner fa-pulse fa-3x fa-fw Demo__spinner" />
          </div>
        )}
        {this.state.geocodeResults && (
          <div className="geocoding-results">{this.state.geocodeResults}</div>
        )}
      </div>
    );
  }
}

export default SearchBar;
