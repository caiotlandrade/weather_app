import React, { Component } from 'react';
import {Link} from 'react-router';
import axios from 'axios';
import './App.css';



class Header extends Component {
  constructor() {
    super();
    this.state = {
      city: "Toronto",
      currentAPI: {},
      forecastAPI: {}
    }
    let APIs = [
      axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.city},ca&APPID=5d4711618829ec7ba3da47613164f2e5&units=metric`),
      axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${this.state.city},ca&APPID=5d4711618829ec7ba3da47613164f2e5&units=metric`)
    ]
    let currentRes = {};
    let forecastRes = {};
		axios.all(APIs)
		.then(result => {
      console.log("success");
      
      currentRes = result[0].data;
      forecastRes = result[1].data;

      this.setState({currentAPI: currentRes});
      this.setState({forecastAPI: forecastRes});
		})
		.catch(error => {
			console.log(error);
			console.log("error on the call");
		})
  }

  render() {
    let header;
    if (Object.keys(this.state.currentAPI).length === 0) {
      header = (
        <p>Loading data...</p>
      )
    } else {
      header = (
        <div>
          <p>{this.state.currentAPI.main.temp}º C  |  {this.state.currentAPI.weather[0].description}</p>
        </div>
      )
    }

    return (
      <div className="App">
        <header className="">
          <h2>{this.state.city}</h2>
          {header}
          <Nav />
          {React.cloneElement(this.props.children, 
            {
            currentAPI: this.state.currentAPI,
            forecastAPI: this.state.forecastAPI
            }
          )}
        
        </header>
      </div>
    );
  }
}

class Nav extends Component {
  render(){
    return (
      <nav>
        <p>
          <Link to="/summary"> Summary </Link>  |  
          <Link to="/precipitation"> Precipitation </Link>  |  
          <Link to="/temperature"> Temperature </Link>
        </p>
      </nav>
    );
  }
}            

export default Header;