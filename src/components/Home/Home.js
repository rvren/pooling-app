import React, { Component } from 'react';
import logo from './logo.svg';
import './styles.css';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  margin: 12,
};


class Home extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <RaisedButton label="Default" style={style} />
      </div>
    );
  }
}

export default Home;
