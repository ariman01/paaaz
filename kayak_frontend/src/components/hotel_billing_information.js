import React,{ Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import HomePageHeader from './headers/homepage_header';
import FlightDetails from './subcomponents/flight_details'
import {getHotelBillingInfo} from './../api/adminAPI';


import './../images/billing.css';

class HotelBillingInfo extends Component {

  constructor(){
    super();
    this.data = {};
  }

  getbills(bills){
    return bills.map((bill)=>{
      return (<tr>
            <td style={{width:89}}>{bill.booking_id}</td>
            <td style={{width:65}}>{bill.user_id}</td>
            <td>{bill.hotel_name}</td>
            <td>{bill.booking_date}</td>
            <td>{bill.booking_amount}</td></tr>
          )
    });
  }

  render() {
    return (
              <div className="Hotel-billing-Info">

                  <div className="flight-billing-page-header">
                  <HomePageHeader/>
                  </div>
                     <div className = "heading">
                      <h1> Hotel Billing Information </h1>
                     </div>

                     <div className ="search-options">
                          Select Date :
                          <input type="date" id="date" name="bill-date"
                            onChange={(dateEvent) => {this.data.date = dateEvent.target.value}}/>


                            <span id="or"> or </span>

                            <select className="dropdown">
                            <option>Select Month</option>
                            <option>Jan</option>
                            <option>Feb</option>
                            <option>Mar</option>
                            <option>Apr</option>
                            <option>Jun</option>
                            <option>Jul</option>
                            <option>Aug</option>
                            <option>Sep</option>
                            <option>Oct</option>
                            <option>Nov</option>
                            <option>Dec</option>
                            </select>

                              </div>

                            <button type="submit"onClick={() => this.props.getHotelBillingInfo(this.data)}id="search" style={{width:150}}>Search</button>

                    <div class="billing-list">
                        </div>
                        <div class="contain" id="table">
                            <table class="table table-hover">
                                <thead>
                                  <tr>
                                  <th style={{width:90}}>Booking ID</th>
                                  <th style={{paddingLeft: 65}}>User ID</th>
                                  <th style={{paddingLeft:210}}>Hotel Name</th>
                                  <th style={{paddingLeft: 170}}>Booking Date</th>
                                  <th >Booking Amount</th>
                                  </tr>
                                </thead>
                                <tbody>
                                    {this.getbills(this.props.hotelBillingInformation)}
                                </tbody>
                            </table>
                        </div>
                    </div>
           );
  }
}

function mapStateToProps(state){
  console.log("maps to props hotel billing:",state.admin_reducer.hotelBillingInformation);
  return {
    hotelBillingInformation:state.admin_reducer.hotelBillingInformation
  };
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({getHotelBillingInfo:getHotelBillingInfo},dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(HotelBillingInfo);
