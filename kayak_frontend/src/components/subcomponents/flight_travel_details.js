import React,{ Component } from 'react';
import './../../images/home.css';


class TravelDetails extends Component {


  render() {
    return (
              <div className = "travel-details">
                  <br></br>
                  <strong>Enter Traveler Details</strong>
                  <br></br>
                  <br></br>
                  <strong>Traveler 1</strong> (primary contact must be an adult)
                  <br></br>
                  <br></br>
                  <div className="travel1">
                        <div className="travel1-div1">
                            <input type="text" placeholder="First Name*" id="first_name" style={{width:350 , height : 35}}/>
                            <br></br>
                            <br></br>
                            <input type="text" placeholder="Postal Code*" id="second_name" style={{width:350 , height : 35}}/>
                            <br></br>
                            <br></br>
                            <input type="text" placeholder="Email*" id="email" style={{width:350 , height : 35}}/>
                        </div>
                        <div className="travel2-div2">
                            <input type="text" placeholder="Middle Name*" id= "middle_name" style={{width:350 , height : 35}}/>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>

                            <input type="text" placeholder="Phone Number*" id= "phone_number" style={{width:350 , height : 35}}/>

                        </div>
                    </div>

                    <hr/>

              </div>
            );
  }
}

export default TravelDetails;
