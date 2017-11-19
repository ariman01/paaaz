import React,{ Component } from 'react';
import HomePageHeader from './headers/homepage_header';
import CarBillingSummary from './subcomponents/car_billing_summary';
import './../images/subcomponent.css';

class CarBillingPage extends Component {


  render() {
    console.log("It will car billing page:");
    return (
              <div >
                  <div>
                  <HomePageHeader/>
                  </div>

                  <div className = "car-billing-body">
                      <div className ="car-billing-body-left-nav">
                      </div>

                      <div className ="car-billing-body-centre">
                      </div>

                      <div className ="car-billing-body-right-nav">
                      <CarBillingSummary/>
                      </div>
                  </div>

              </div>
           );
  }
}



export default CarBillingPage;
