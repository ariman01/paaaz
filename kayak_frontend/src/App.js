import React, { Component } from 'react';
import './App.css';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import ShowCars from './components/show_cars';
import ShowFlights from './components/show_flights';
import ShowHotels from './components/show_hotels';
import SearchCar from "./components/search_car";
//import Headers from './components/header';

class App extends Component {
  render() {
    return (
      <div className="App">
      <BrowserRouter>

        <Switch>
            {/*<Route  exact path="/cardetails" render ={() => (<Headers/>)}/>*/}
            
            <Route  exact path="/flightdetails" render ={() => (<ShowFlights/>)}/>
            <Route  exact path="/hoteldetails" render ={() => (<ShowHotels/>)}/>
            <Route  exact path="/search_car" render ={() => (<SearchCar/>)}/>

        </Switch>
      </BrowserRouter>
      </div>
    );
  }
}

export default App;
