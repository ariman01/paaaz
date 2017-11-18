import React, { Component } from 'react';
import './App.css';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import ShowCars from './components/show_cars';
import ShowFlights from './components/show_flights';
import ShowHotels from './components/show_hotels';
import SearchCar from "./components/search_car";
import CarSearchBar from './components/searchbars/car_search_bar';
import SearchFlight from './components/search_flight';
import SearchHotel from './components/search_hotel';
import HomePageHeader from './components/headers/homepage_header';
import HomeScreenButtonPanel from './components/searchbars/homescreen_button_panel';
import CarSearchLeftNav from './components/searchbars/car_search_leftnav';
import CarTile from './components/searchbars/car_tiles';
import FlightTile from './components/searchbars/flight_tiles';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'


class App extends Component {
  render() {
    return (
      <div className="App">
      <BrowserRouter>
          <MuiThemeProvider>
              <Switch>

                    <Route  exact path="/cardetails" render ={() => (<ShowCars/>)}/>
                    <Route  exact path="/flightdetails" render ={() => (<ShowFlights/>)}/>
                    <Route  exact path="/hoteldetails" render ={() => (<ShowHotels/>)}/>
                    <Route  exact path="/cars" render ={() => (<SearchCar/>)}/>
                    <Route  exact path="/flights" render ={() => (<SearchFlight/>)}/>
                    <Route  exact path="/hotels" render ={() => (<SearchHotel/>)}/>
                    <Route  exact path="/" render ={() => (<ShowCars/>)}/>

              </Switch>
          </MuiThemeProvider>
      </BrowserRouter>
      </div>
    );
  }
}

export default App;
