import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import Home from "../components/Home";
import Login from "../components/Home";
import Register from "../components/Home";
import Ride from "../components/Home";

const muiTheme = getMuiTheme({
  palette: {
    textColor: "#333333",
    primary1Color: "#e50914",
    backgroundColor: "#333"
  }
});

class Root extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <BrowserRouter>
          <div>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/ride" component={Ride} />
          </div>
        </BrowserRouter>
      </MuiThemeProvider>
    );
  }
}

export default Root;
