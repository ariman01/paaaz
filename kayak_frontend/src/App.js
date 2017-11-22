import React, { Component } from 'react';
import './App.css';
import {BrowserRouter, Route, Router, Redirect} from 'react-router-dom';
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
import {history} from './utils/util';
import ViewCar from './components/subcomponents/view_car';
import BookingDetails from './components/subcomponents/booking_details';
import RentalCarPrice from './components/subcomponents/rental_car_price';
import FlightBillingPage from './components/flight_billing_page';
import AdminDashboard from './components/admin_dashboard';
import AddCarAdmin from './components/subcomponents/add_car_admin';
import AddHotelAdmin from './components/subcomponents/add_hotel_admin';
import AddFlightAdmin from './components/subcomponents/add_flight_admin';
import CarBillingPage from './components/car_billing_page';
import UserProfile from './components/user_profile';
import SignUp from './components/sign_up';


import CarGraphs from './components/subcomponents/car_graphs';



class App extends Component {

  render() {
    return (
      <div className="App">
      <Router history={history}>
                <MuiThemeProvider>

                    <Route  exact path="/cardetails" render ={() => (<ShowCars/>)}/>
                    <Route  exact path="/flightdetails" render ={() => (<ShowFlights/>)}/>
                    <Route  exact path="/hoteldetails" render ={() => (<ShowHotels/>)}/>
                    <Route  exact path="/cars" render ={() => (<SearchCar/>)}/>
                    <Route  exact path="/flights" render ={() => (<SearchFlight/>)}/>
                    <Route  exact path="/hotels" render ={() => (<SearchHotel/>)}/>
                    <Route  exact path="/" render ={() => (<CarBillingPage/>)}/>
                    <Route  exact path="/flightbillingpage" render ={() => (<FlightBillingPage/>)}/>
                    <Route  exact path="/admindashboard" render ={() => (<AdminDashboard/>)}/>
                    <Route  exact path="/cargraphs" render ={() => (<CarGraphs/>)}/>
                    <Route  exact path="/adminaddcar" render ={() => (<AddCarAdmin/>)}/>
                    <Route  exact path="/addhoteladmin" render ={() => (<AddHotelAdmin/>)}/>
                    <Route  exact path="/addflightadmin" render ={() => (<AddFlightAdmin/>)}/>
                    <Route  exact path="/userprofile" render ={() => (<UserProfile />)}/>

                </MuiThemeProvider>
          </Router>
      </div>
    );
  }
}

export default App;
