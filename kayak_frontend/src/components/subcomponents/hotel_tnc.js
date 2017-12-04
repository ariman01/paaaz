import React,{ Component } from 'react';
import './../../images/home.css';
import booknow from './../../images/booknow.jpg';
import { connect } from 'react-redux';
import {bookhotel_action} from './../../actions/hotel_action';
import {bindActionCreators} from 'redux';
import * as UTIL from './../../utils/util';
class HotelTermsAndConditions extends Component {
  constructor(props) {
      super(props);
      this.handleSubmit = this.handleSubmit.bind(this);

  }
  handleSubmit()
  {
      var today = new Date();
      var dd = today.getDate();
      var mm = today.getMonth()+1;
      var yyyy = today.getFullYear();
      var booking = yyyy+"/"+mm+"/"+dd;
      var email= UTIL.getUserDetails();
      var user_id='';
      if(email){
        user_id = email;
      }else{
        user_id= this.props.user_id.user_id;
      }
      const payload={
          user_id:user_id,
          src_city:this.props.current_hotel.hotel_city,
          hotel_name:this.props.current_hotel.hotel_name,
          hotel_id:this.props.current_hotel.hotel_id,
          start_date:this.props.hotel_days.start_date,
          end_date:this.props.hotel_days.end_date,
          booking_amount:this.props.hotel_finalamount.booking_amount,
          booking_date:booking
      }
      this.props.bookhotel_action(payload);
  }


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
              <input type ="image" src = {booknow} onClick={this.handleSubmit} style={{height : 30}}/>

            </div>

           );
  }
}
function mapStateToProps(state) {
    return {
        current_hotel:state.hoteldetails_reducer.current_hotel,
        hotel_finalamount: state.hoteldetails_reducer.hotel_finalamount,
        hotel_days:state.hoteldetails_reducer.hotel_days,
        user_id:state.users.user_id
    };

}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({bookhotel_action:bookhotel_action},dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(HotelTermsAndConditions);
