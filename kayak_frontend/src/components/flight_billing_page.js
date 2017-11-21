import React,{ Component } from 'react';
import HomePageHeader from './headers/homepage_header';
import FlightDetails from './subcomponents/flight_details';
import TravelDetails from './subcomponents/flight_travel_details';
import FlightTripProtection from './subcomponents/flight_trip_protection'
import BillingInformation from './subcomponents/billing_information'
import FlightBillingSummary from './subcomponents/flight_billing_summary';
import FlightsTermsAndConditions from './subcomponents/flights_tnc'

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
                          <TravelDetails/>
                          <FlightTripProtection/>
                          <BillingInformation/>
                          <FlightsTermsAndConditions/>
                      </div>

                      <div className ="flight-billing-body-right-nav">
                          <FlightBillingSummary/>
                      </div>
                  </div>

              </div>
           );
  }
}



export default FlightBillingPage;
