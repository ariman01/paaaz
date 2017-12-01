import React,{ Component } from 'react';
import './../../images/home.css';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import { useraction } from './../../actions/user_action';

class TravelDetails extends Component {

    constructor() {
        super();
    }
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
                          <input type="text" placeholder="Email*" id="email" name="email" required="true" onChange={(eventdata)=>{this.props.setUser_action(eventdata.target.value)}} style={{width:350 , height : 35}}/>
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
function mapDispatchToProps(dispatch) {
    return bindActionCreators({setUser_action:useraction.setUser_action},dispatch);
}
export default connect(null,mapDispatchToProps)(TravelDetails);
