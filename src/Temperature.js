import React, { Component } from 'react';
import {Link} from 'react-router';
import './App.css';


class Temperature extends Component {

  render() {
    return (
      <div>
        <h2>Hello, Temperature</h2>
        {console.log(this.props.forecastAPI)}
        <h3>One graph for the temperature forecast</h3>
      </div>
    );
  }
}

export default Temperature;