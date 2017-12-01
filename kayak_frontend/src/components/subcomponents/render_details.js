import React,{ Component } from 'react';
import './../../images/home.css';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import { useraction } from './../../actions/user_action';

class RenderDetails extends Component {
  constructor() {
      super();
  }

  render() {
    return (
              <div className = "render-details">
                      <div className= "render-details-top-div">
                          <strong>Render Details</strong>
                      </div>
                      <br></br><br></br>

                      <div className= "render-details-middle-div">
                          <a href="">Sign in if you have an account </a>to reterieve saved travels and credit cards.
                      </div>

                      <div className= "render-details-bottom-div">
                          <div className= "render-details-bottom-left-div">
                              <input type="text" placeholder="First Name*" style={{width : "350px" , height : "30px"}}/><br></br><br></br>
                              <input type="text" placeholder="Email Address*" name="email" defaultValue="default data" required="true" style={{width : "350px" , height : "30px"}}
                                     onChange={(eventdata)=>{this.props.setUser_action(eventdata.target.value)}}/><br></br><br></br>
                              <select style={{width : "350px" , height : "30px"}}>
                                  <option>Gender*</option>
                                  <option value="male">Male</option>
                                  <option value="female">Female</option>
                              </select>
                          </div>

                          <div className= "render-details-bottom-right-div">
                              <input type="text" placeholder="Last Name*" style={{width : "350px" , height : "30px"}}/><br></br><br></br>
                              <input type="text" placeholder="Phone Number*" style={{width : "350px" , height : "30px"}} />
                          </div>
                      </div>
              </div>

           );
  }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({setUser_action:useraction.setUser_action},dispatch);
}
export default connect(null,mapDispatchToProps)(RenderDetails);
