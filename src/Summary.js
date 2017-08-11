import React, { Component } from 'react';
import {Link} from 'react-router';
import './App.css';

class Summary extends Component {

  render() {
    let data;
    if (Object.keys(this.props.currentAPI).length === 0) {
      data = (
        <img src="/loading.gif" alt="loading gif" />
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
        <h2>This is how the weather looks like right now!</h2>
        {console.log(this.props.currentAPI)}
          {data}
      </div>
    );
  }
}

export default Summary;