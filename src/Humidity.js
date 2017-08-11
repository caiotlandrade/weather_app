import React, { Component } from 'react';
import {Link} from 'react-router';
import {Bar} from 'react-chartjs-2';
import './App.css';


class Humidity extends Component {
  render() {
    let humidityGraph;
    if (Object.keys(this.props.forecastAPI).length === 0) {
      humidityGraph = (
        <img src="/loading.gif" alt="loading gif" />
      )
    } else {
      humidityGraph = (
        <div className="col-md-3">
          <Bar
            data={{
              labels: this.props.forecastAPI.list.filter((listItem, i) => {
                return i < 9;
              }).map((listItem, i) => {
                return listItem.dt_txt;
              }),
              datasets: [{
                label: 'Relative humidity in %',
                data: this.props.forecastAPI.list.map((listItem, i) => {
                  return listItem.main.humidity;
                }),
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
              }]
            }}
            options={{
              legend: {
                display: false,
              },
              scales: {
                yAxes: [{
                  ticks: {
                    beginAtZero: true
                  }
                }]
              },
            }}
          />
        </div>
      )
    }
    return (
      <div>
        <h2>Humidity for the next 24h</h2>
        {humidityGraph}
      </div>
    );
  }
}

export default Humidity;