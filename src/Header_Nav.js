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
    this.changeCity = this.changeCity.bind(this);
    let APIs = [
      axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.city},ca&APPID=5d4711618829ec7ba3da47613164f2e5&units=metric`),
      axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${this.state.city},ca&APPID=5d4711618829ec7ba3da47613164f2e5&units=metric`)
    ]
    let currentRes;
    let forecastRes;
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

  // function to change the state, make new API calls and, then,
  //    change the state with the new responses
  changeCity(anotherCity) {
    this.setState({
      city: "",
      currentAPI: {},
      forecastAPI: {}
    });
    let APIs = [
      axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${anotherCity},ca&APPID=5d4711618829ec7ba3da47613164f2e5&units=metric`),
      axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${anotherCity},ca&APPID=5d4711618829ec7ba3da47613164f2e5&units=metric`)
    ]
    let currentRes;
    let forecastRes;
		axios.all(APIs)
		.then(result => {
      console.log("success");
      
      currentRes = result[0].data;
      forecastRes = result[1].data;
      
      this.setState({city: anotherCity});
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
        <div className="col-md-4">
          <img src="/loading.gif" alt="loading gif" />
        </div>
      )
    } else {
      header = (
        <div className="col-md-4">
          <div className="row">
            <div className="col-md-12">
              <p>{this.state.currentAPI.main.temp}º C</p>
            </div>
            <div className="col-md-12">
              <p>{this.state.currentAPI.weather[0].main}</p>
            </div>
          </div>
        </div>
      )
    }

    return (
      <div className="App">
        <header className="">
          <div className="row App-header">
            <div className="col-md-4">
              <h2>{this.state.city}</h2>
            </div>
            {header}
            <Search changeCity={this.changeCity} />
          </div>
          <div className="row">
            <Nav />
            <div className="col-md-10">
              {React.cloneElement(this.props.children, 
                {
                currentAPI: this.state.currentAPI,
                forecastAPI: this.state.forecastAPI
                }
              )}
            </div>
          </div>
        </header>
      </div>
    );
  }
}

// Nav bar component
class Nav extends Component {
  render(){
    return (
      <nav className="col-md-2">
        <div>
          <div className="col-md-12">
            <Link to="/summary"> Summary </Link>
          </div>
          <div className="col-md-12">
            <Link to="/humidity"> Humidity </Link>
          </div>
          <div className="col-md-12">
            <Link to="/temperature"> Temperature  <i class="fa fa-thermometer-half" aria-hidden="true"></i></Link>
          </div>
        </div>
      </nav>
    );
  }
}

// Search component
class Search extends React.Component {
  constructor (props) {
    super (props)
    this.state = {
      anotherCity: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

	// this monitors the change and listen to the input value
  handleChange(event) {
    this.setState({anotherCity: event.target.value});
  }
	// this triggers addNewTodo() and empties the form
  handleSubmit(event) {
    event.preventDefault();
		// this calls the function on main component to add the new entry
		this.props.changeCity(this.state.anotherCity)
		this.setState({anotherCity: ''}); // this erases the form
  }

	render () {
		return (
			<div className="col-md-4 search_bar">
				<form onSubmit={this.handleSubmit}>
					<div className="input-group">
						<input className="form-control" 
										type="text" placeholder="Another city?" 
										value={this.state.anotherCity} 
										onChange={this.handleChange}  />
						<span className="input-group-btn">
							<button className="btn btn-primary" type="submit">Search</button>
						</span>
					</div>
				</form>
			</div>
		)
	}
}

export default Header;