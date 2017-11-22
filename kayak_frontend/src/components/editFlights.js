import React,{ Component } from 'react';
import EditFlightTile from './searchbars/editflight_tiles';
import HomePageHeader from './headers/homepage_header';
import './../images/flight.css';
import './../images/home.css';


class EditFlights extends Component {

  constructor(){
    super();
    this.flights =[
      {
      flight_id: "PVV578",
      carrier_name: "Southwest Airlines",
      src_city: "elizabeth",
      destination_city: "elizabeth",
      flight_duration: "6",
      operational_day: "0",
      departure_time: "16:08:26",
      price: "668"
   },
   {
   flight_id: "PVV578",
   carrier_name: "Southwest Airlines",
   src_city: "elizabeth",
   destination_city: "elizabeth",
   flight_duration: "6",
   operational_day: "0",
   departure_time: "16:08:26",
   price: "668"
},  {
  flight_id: "PVV578",
  carrier_name: "Southwest Airlines",
  src_city: "elizabeth",
  destination_city: "elizabeth",
  flight_duration: "6",
  operational_day: "0",
  departure_time: "16:08:26",
  price: "668"
},  {
  flight_id: "PVV578",
  carrier_name: "Southwest Airlines",
  src_city: "elizabeth",
  destination_city: "elizabeth",
  flight_duration: "6",
  operational_day: "0",
  departure_time: "16:08:26",
  price: "668"
}
    ]
  }


  getFlightTile(flights){

    console.log("flight: ", flights);
    return flights.map((flight)=>{
      return (<EditFlightTile data={flight} />)
    });
  }
  render() {
    console.log("It will display list of flights searched by the user");
    return (
              <div>
              <div>
              <HomePageHeader/>
              </div>

              <div className = "car-details-body">
                    <div className ="car-details-body-left-nav">

                    </div>
                    <div className ="car-details-body-centre">
                    {this.getFlightTile(this.flights)}
                    </div>
                    <div className ="car-details-body-right-nav">

                    </div>
              </div>

              </div>
           );
  }
}



export default EditFlights;
