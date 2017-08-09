import React, { Component } from 'react';
import {Link} from 'react-router';
import './App.css';

class Summary extends Component {

  render() {
    let data;
    if (Object.keys(this.props.currentAPI).length === 0) {
      data = (
          <p>Loading data...</p>
      )
    } else {
      data = (
        <div>
          <p>Minimum: {this.props.currentAPI.main.temp_min}</p>
          <p>Maximum: {this.props.currentAPI.main.temp_max}</p>
        </div>
      )
    }
    return (
      <div>
        <h2>Hello, Summary!</h2>
        <h3>Random shit on current weather!</h3>
        {console.log(this.props.currentAPI)}
          {data}
      </div>
    );
  }
}

export default Summary;