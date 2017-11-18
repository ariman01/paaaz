import React,{ Component } from 'react';
import {searchcars_action} from "../actions/car_action";
import { connect } from 'react-redux';
import CarSearchBar from './searchbars/car_search_bar.js';
import HomeHeader from './headers/homepage_header';
import '../images/home.css';
import HomeScreenButtonPanel from './searchbars/homescreen_button_panel';


class SearchCar extends Component {
    constructor(props) {
        super(props);
}
    componentWillMount()
    {
        this.props.searchcars_action("pooja");

    }
  render(){
    console.log("Search Car Page");
    return  (
            <div className="carhome">
                  <HomeHeader/>
                  <h1 style={{color:"white",marginTop:"4%"}}> Search hundreds of travel sites at once.</h1>
                  <div style={{paddingTop:"3%"}}>
                      <HomeScreenButtonPanel/>
                      <CarSearchBar/>
                  </div>
              </div>
           );
  }
}
function mapStateToProps(data) {
    let cars = [];
    console.log("its cars data in mapstatetoprops"+data.cars.cars);
    if(data.cars.cars !== undefined) {
        cars.push(data.cars.cars);
    }
    console.log("its cars array"+cars);
    return {cars};
}
function mapDispatchToProps(dispatch) {
    return {
        searchcars_action:(data) => dispatch(searchcars_action(data)),
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(SearchCar);
