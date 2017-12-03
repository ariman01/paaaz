import React,{ Component } from 'react';
import './../../images/home.css';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import { useraction } from './../../actions/user_action';
import * as UTIL from './../../utils/util';
import {userapi} from './../../api/userAPI';
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
                        {console.log("this.props.userdetails.first_name",this.props.usercarddetails.first_name)}
                            <input type="text" placeholder="First Name" style={{width:350 , height : 35}} defaultValue={this.props.usercarddetails.first_name}/>
                            <br></br>
                            <br></br>
                            <input type="text" placeholder="Postal Code" id="second_name" defaultValue={this.props.usercarddetails.last_name} style={{width:350 , height : 35}}/>
                            <br></br>
                            <br></br>
                          <input type="text" placeholder="Email" id="email" name="email" required="true" defaultValue={this.props.usercarddetails.email}
                           onChange={(eventdata)=>{this.props.setUser_action(eventdata.target.value)}} style={{width:350 , height : 35}}/>
                        <br></br>
                        <br></br>
                            <input type="text" placeholder="Phone Number" id= "phone_number" defaultValue={this.props.usercarddetails.phone} style={{width:350 , height : 35}}/>
                            </div>
                    </div>
                    <hr/>
              </div>
            );
  }
}
function mapStateToProps(state) {
    console.log(" userdetails in flight_travel",state.users.userdetails);
    return  {
      usercarddetails: state.users.usercarddetails,
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({setUser_action:useraction.setUser_action},dispatch);
}
export default connect(mapStateToProps,mapDispatchToProps)(TravelDetails);
