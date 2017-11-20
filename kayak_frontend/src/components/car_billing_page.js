import React,{ Component } from 'react';
import HomePageHeader from './headers/homepage_header';
import CarBillingSummary from './subcomponents/car_billing_summary';
import ViewCar from './subcomponents/view_car';
import BookingDetails from './subcomponents/booking_details';
import RentalCarPrice from './subcomponents/rental_car_price';
import RenderDetails from './subcomponents/render_details';
import RentalCarDamageProtection from './subcomponents/rental_car_damage_protection';
import BookFasterNextTime from './subcomponents/book_faster_next_time';
import TermsAndConditions from './subcomponents/terms_and_conditions';
import './../images/subcomponent.css';

class CarBillingPage extends Component {


  render() {
    console.log("It will car billing page:");
    return (
              <div className="car-billing-page">
                  <div className="car-billing-page-header">
                  <HomePageHeader/>
                  </div>

                  <div className = "car-billing-body">
                      <div className ="car-billing-body-left-nav" >
                      </div>

                      <div className ="car-billing-body-centre">
                        <ViewCar/>
                        <BookingDetails/>
                        <RentalCarPrice/>
                        <RenderDetails/>
                        <RentalCarDamageProtection/>
                        <BookFasterNextTime/>
                        <TermsAndConditions/>
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
