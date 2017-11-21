import React,{ Component } from 'react';
import './../../images/home.css';
import booknow from './../../images/booknow.jpg';

class TermsAndConditions extends Component {


  render() {
    return (
            <div className = "terms-and-conditions">
              <hr/>
              <br></br>

              <strong>Terms and conditions</strong>
              <br></br>
              <br></br>

              <div className="terms-and-conditions-div">
                Cancellation Fee
              </div>
              <br></br>

              <div className="terms-and-conditions-div">
              You will need a credit card to pick up this car.
              </div>
              <br></br>

              <div className="terms-and-conditions-div">
              See <a href="">additional terms</a>
              </div>
              <br></br>

              <div className="terms-and-conditions-div">
              By clicking "Book now" you agree to KAYAKs policies.
              </div>
              <br></br>

              <div className="terms-and-conditions-div" style={{backgroundColor : "#edeff2"}}>
              Please verify this email address is correct:  <a href="">Change</a>
              </div>
              <br></br>

              <input type="checkbox" checked = "true"/>Keep me up-to-date on great email deals and low rates from KAYAK
              <br></br>
              <br></br>
              <input type ="image" src = {booknow} style={{height : 30}}/>

            </div>

           );
  }
}

export default TermsAndConditions;
