import React,{ Component } from 'react';
import './../../images/home.css';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import { useraction } from './../../actions/user_action';

class TravelDetails extends Component {

    constructor() {
        super();
        this.state = {
            email: '',
        };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        const { name, value } = event.target;
        this.setState({

            [name]: value
        });
        const { email } = this.state;
        console.log("its email in render_details"+email);
        if (email) {
            this.props.setUser_action(email);
        }
    }
  render() {
      const {email} = this.state;
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
                            <input type="text" placeholder="Email*" id="email" name="email" value={this.state.email} onChange={this.handleChange} style={{width:350 , height : 35}}/>
                            {!email &&
                            <div className="help-block">Email required</div>
                            }
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

