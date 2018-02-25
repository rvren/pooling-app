import React, { Component } from "react";
import "./styles.css";

class Legend extends Component {
  render() {
    return (
      <div className="Pool-content">
        <h6 className="Pool-header">WePool</h6>
        <h6 className="Pool-subcontent">
          Pooling made easy.<br />
          Connect
          <span className="Vertical-divider">|</span>
          Travel
          <span className="Vertical-divider">|</span>
          Save
        </h6>
      </div>
    );
  }
}

export default Legend;
