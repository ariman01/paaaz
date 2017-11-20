import React,{ Component } from 'react';
import './../../images/home.css';

class RenderDetails extends Component {


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
                              <input type="text" placeholder="Email Address*" style={{width : "350px" , height : "30px"}}/><br></br><br></br>
                              <select style={{width : "350px" , height : "30px"}}>
                                  <option>Gender*</option>
                                  <option value="male">Male</option>
                                  <option value="female">Female</option>
                              </select>
                          </div>

                          <div className= "render-details-bottom-right-div">
                              <input type="text" placeholder="Last Name*" style={{width : "350px" , height : "30px"}}/><br></br><br></br>
                              <input type="text" placeholder="Phone Number*" style={{width : "350px" , height : "30px"}}/>
                          </div>
                      </div>
              </div>

           );
  }
}

export default RenderDetails;
