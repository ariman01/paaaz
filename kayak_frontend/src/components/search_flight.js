import React,{ Component } from 'react';
import CarSearchBar from './searchbars/car_search_bar.js';
import HomeHeader from './headers/homepage_header';
import '../images/home.css';
import HomeScreenButtonPanel from './searchbars/homescreen_button_panel';

class SearchFlight extends Component {


  render() {
    console.log("Search Flight Page");
    return (
              <div className="flighthome">
                    <HomeHeader/>
                    <div style={{paddingTop:"12%"}}>
                        <HomeScreenButtonPanel/>
                        <CarSearchBar/>
                    </div>
                </div>

           );
  }
}



export default SearchFlight;
