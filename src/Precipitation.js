import React, { Component } from 'react';
import {Link} from 'react-router';
import {Bar} from 'react-chartjs-2';
import './App.css';


class Precipitation extends Component {
  render() {
    let precipitationGraph;
    if (Object.keys(this.props.forecastAPI).length === 0) {
      precipitationGraph = (
        <p>Loading data...</p>
      )
    } else {
      precipitationGraph = (
        <div>
          <Bar
            data={{
              labels: this.props.forecastAPI.list.map((listItem, i) => {
                return listItem.dt_txt;
              }),
              datasets: [{
                label: '# of Votes',
                data: this.props.forecastAPI.list.map((listItem, i) => {
                return listItem.main.humidity;
              }),
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
          }]
        }}
            options={{
            title: {
              display: true,
              text: "Motherfuckin' RAIN!!!",
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
        <h2>Hello, Rain!</h2>
        {console.log(this.props.forecastAPI)}
        <h3>One graph for the precipitation forecast</h3>
        {precipitationGraph}
      </div>
    );
  }
}

export default Precipitation;