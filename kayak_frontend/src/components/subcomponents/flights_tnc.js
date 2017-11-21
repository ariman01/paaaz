import React,{ Component } from 'react';
import './../../images/subcomponent.css';
import booknow from './../../images/booknow.jpg';

class FlightsTermsAndConditions extends Component {


  render() {
    return (
            <div className = "flights-terms-and-conditions">
              <strong style={{fontSize: "12pt"}}>Review Policies and Terms & Conditions</strong>

              <div className="flight-cancellation-change-policy">
                <strong>Change Policy</strong>
                <br></br>
                <br></br>
                <p>In addition to increased fares, if allowed, cancellation or changes may be subject to fees/penalties (fees/penalties vary based on factors such as airline, market, and the applicable fare rules), and may be $150 or more for domestic flights and $200 or more for international flights, plus up to $100 fee from Vayama per ticket. All change requests must be initiated at least 48 hours before scheduled departure of the original flight.</p>
                <br></br>
                <br></br>
                <strong>Cancellation Policy</strong>
                <p>Please refer to the Fare Rules for this itinerary cancellation policy</p>
              </div>
              <br></br>
              <div className="flight-policy1">
                <p>You will be issued electronic tickets. Adult passengers must have a valid government-issued photo ID. International travelers must have a valid passport. Additional documentation may be required for travel to and through some of the countries on your itinerary.</p>
              </div>
              <br></br>
              <p style={{fontSize:"9pt"}}>By clicking "Book" you agree to the airline's fare rules and <a href="https://www.kayak.com/terms-of-use">KAYAK's Terms and Conditions</a> and <a href="https://www.kayak.com/privacy">Privacy Policy</a>. Note: To offer this fare, Vayama might need up to one business day to issue the ticket.</p>

              <input type="checkbox" checked = "true"/>Email me KAYAKs deals
              <br></br>
              <br></br>
              <input type ="image" src = {booknow} style={{height : 30}}/>

            </div>

           );
  }
}

export default FlightsTermsAndConditions;
