import React,{ Component } from 'react';
import CarSearchBar from './searchbars/car_search_bar.js';
import HomeHeader from './headers/homepage_header';
import '../images/home.css';
import HomeScreenButtonPanel from './searchbars/homescreen_button_panel';

class SearchHotel extends Component {


  render() {
    console.log("Search Hotel Page");
    return (
        <div className="hotel-home">
              <HomeHeader/>
              <div style={{paddingTop:"12%"}}>
                  <HomeScreenButtonPanel/>
                  <CarSearchBar/>
              </div>
        </div>
           );
  }
}



export default SearchHotel;
