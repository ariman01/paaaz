import React,{ Component } from 'react';
import './../../images/hotel.css';


class GuestDetails extends Component {


  render() {
    return (
              <div className = "guest-details">

                  <strong>Guest 1 details :</strong> (must be an adult)
                  <br></br>
                  <br></br>
                  <div className="guest-details1">
                        <div className="guest-details-div1">
                            <input type="text" placeholder="First Name*" id="first_name" style={{width:350 , height : 35}}/>
                            <br></br>
                            <br></br>
                            <input type="text" placeholder="Email*" id="email" style={{width:350 , height : 35}}/>
                        </div>
                        <div className="guest-details-div2">
                            <input type="text" placeholder="Middle Name*" id= "middle_name" style={{width:350 , height : 35}}/>
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

export default GuestDetails;
