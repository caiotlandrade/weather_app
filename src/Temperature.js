import React, { Component } from 'react';
import Moment from 'react-moment';
import {Link} from 'react-router';
import {Line} from 'react-chartjs-2';
import './App.css';


class Temperature extends Component {

  render() {
    let temperatureGraph;
    if (Object.keys(this.props.forecastAPI).length === 0) {
      temperatureGraph = (
        <img src="/loading.gif" alt="loading gif" />
      )
    } else {
      temperatureGraph = (
        <div className="col-md-10 align-center">
          <Line
            data={{
              labels: this.props.forecastAPI.list.filter((listItem, i) => {
                return i < 8;
              }).map((listItem, i) => {
                return listItem.dt_txt;
              }),
              datasets: [{
                label: 'Temperature in ºC',
                data: this.props.forecastAPI.list.filter((listItem, i) => {
                  return i < 9;
                }).map((listItem, i) => {
                  return listItem.main.temp;
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
                    beginAtZero: true,
                  }
                }],
                xAxes: [{
                  ticks: {
                    beginAtZero: true,
                    stepSize: 1
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
        <h2>Temperature for the next 24h</h2>
        {temperatureGraph}
      </div>
    );
  }
}

export default Temperature;