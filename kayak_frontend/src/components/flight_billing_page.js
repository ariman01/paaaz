import React,{ Component } from 'react';
import HomePageHeader from './headers/homepage_header';
import FlightDetails from './subcomponents/flight_details'

import './../images/subcomponent.css';

class FlightBillingPage extends Component {


  render() {
    console.log("It will render flight billing page:");
    return (
              <div className="flight-billing-page">
                  <div className="flight-billing-page-header">
                  <HomePageHeader/>
                  </div>

                  <div className = "flight-billing-body">
                      <div className ="flight-billing-body-left-nav" >

                      </div>

                      <div className ="flight-billing-body-centre">
                          <FlightDetails/>
                      </div>

                      <div className ="flight-billing-body-right-nav">

                      </div>
                  </div>

              </div>
           );
  }
}



export default FlightBillingPage;
