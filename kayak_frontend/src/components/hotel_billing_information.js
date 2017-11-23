import React,{ Component } from 'react';
import HomePageHeader from './headers/homepage_header';
import FlightDetails from './subcomponents/flight_details'

import './../images/billing.css';

class HotelBillingInfo extends Component {

constructor(){
  super();
  this.bills = [{
    bookingid:"7824",
    userid:"aviralkum@gmail.com",
    hotelname:"Marriot",
    bookingdate:"2017-09-09",
    bookingamount:"489$",
    },{
    bookingid:"7825",
    userid:"akash@gmail.com",
    hotelname:"Marriot",
    bookingdate:"2017-09-09",
    bookingamount:"489$",
   },
   {
    bookingid:"7825",
    userid:"shashnk@gmail.com",
    hotelname:"Hyatt",
    bookingdate:"2017-09-09",
    bookingamount:"564$",
   },
   {
   bookingid:"78245",
    userid:"abhineet@gmail.com",
    hotelname:"AC Hotel",
    bookingdate:"2016-09-09",
    bookingamount:"789$",
   }]


}

getbills(bills)
{

  console.log("Inside Bills");
  return bills.map((bill)=>{
    return (<tr>
          <td style={{width:89}}>{bill.bookingid}</td>
          <td style={{width:65}}>{bill.userid}</td>
          <td>{bill.hotelname}</td>
          <td>{bill.bookingdate}</td>
          <td>{bill.bookingamount}</td></tr>)
});
}

state = {
        date: '',
        month: ''
    };

    
  render() {
    console.log("It will display Hotel Billing Information");
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
                            <input type="date" id="date" name="bill-date" value={this.state.date}
                                onChange={(event) => {
                                    this.setState({
                                        date: event.target.value
                                    });
                                }}/>


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

                            <button type="submit" onClick={this.getBill} id="search" style={{width:150}}>Search</button>
                                
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
                                  

                                  {this.getbills(this.bills)}
                                   
                                  
                                   
                                  </tbody>
                        </table>
          </div>


                      </div>

              
           );
  }
}



export default HotelBillingInfo;
