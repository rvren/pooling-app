import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import Home from "../views/Home";
import Login from "../components/Login";
import Register from "../components/Register";
import Ride from "../views/Ride";

const muiTheme = getMuiTheme({
  fontFamily: "Trebuchet MS, Lucida Sans Unicode, Lucida Grande, Lucida Sans, Arial, sans-serif",
  palette: {
    textColor: "#000000",
    primary1Color: "#764ba2",
    canvasColor: '#000',
  }
});

class Root extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route path="/ride" component={Ride} />
          </Switch>
        </BrowserRouter>
      </MuiThemeProvider>
    );
  }
}

export default Root;
