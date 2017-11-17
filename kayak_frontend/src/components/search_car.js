import React,{ Component } from 'react';
import {searchcars_action} from "../actions/car_action";
import { connect } from 'react-redux';
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
    return (
              <div>
                    <h1> Search Car Screen</h1>
              </div>
           );
  }
}
function mapStateToProps(data) {
    let cars = [];
    console.log("in component ----- ");
    console.log(data.cars.cars);
    if(data.cars.cars !== undefined) {
        cars.push(data.cars.cars);

    }
    console.log(cars);
    return {cars};
}
function mapDispatchToProps(dispatch) {
    return {
        searchcars_action:(data) => dispatch(searchcars_action(data)),
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(SearchCar);
