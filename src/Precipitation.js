import React, { Component } from 'react';
import {Link} from 'react-router';
import './App.css';


class Precipitation extends Component {

  render() {
    return (
      <div>
        <h2>Hello, Rain!</h2>
        {console.log(this.props.forecastAPI)}
        <h3>One graph for the precipitation forecast</h3>
      </div>
    );
  }
}

export default Precipitation;