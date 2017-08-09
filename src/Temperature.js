import React, { Component } from 'react';
import {Link} from 'react-router';
import {Line} from 'react-chartjs-2';
import './App.css';


class Temperature extends Component {

  render() {
    let temperatureGraph;
    if (Object.keys(this.props.forecastAPI).length === 0) {
      temperatureGraph = (
        <p>Loading data...</p>
      )
    } else {
      temperatureGraph = (
        <div>
          <Line
            data={{
              labels: this.props.forecastAPI.list.map((listItem, i) => {
                return listItem.dt_txt;
              }),
              datasets: [{
                label: '# of Votes',
                data: this.props.forecastAPI.list.map((listItem, i) => {
                return listItem.main.temp;
              }),
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
          }]
        }}
            options={{
            title: {
              display: true,
              text: "Motherfuckin' temp!",
              fontSize: 25
            },
            legend: {
              display: false,
              position: "right"
            }
          }}
          />
        </div>
      )
    }
    return (
      <div>
        <h2>Hello, Temperature</h2>
        <h3>One graph for the temperature forecast</h3>
        {temperatureGraph}
      </div>
    );
  }
}

export default Temperature;