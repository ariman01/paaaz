import React,{ Component } from 'react';
import {searchcars_action} from "../actions/car_action";
import {searchcarsAPI} from "../api/carAPI";

class SearchCar extends Component {

componentWillMount(
){
    searchcars_action("pooja");
    //searchcarsAPI("patel");
}
  render() {
    console.log("Search Car Page");
    return (
              <div>
                    <h1> Search Car Screen</h1>
              </div>
           );
  }
}



export default SearchCar;
