import React,{ Component } from 'react';
import './../../images/home.css';
import { connect } from 'react-redux';
import booknow from './../../images/booknow.jpg';
import {bindActionCreators} from 'redux';
import {bookcar_action} from './../../actions/car_action';
class TermsAndConditions extends Component {
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
    const payload={
        user_id:this.props.user_id.user_id,
        src_city:this.props.current_car.src_city,
        destination_city:this.props.current_car.destination_city,
        rental_agency:this.props.current_car.rental_agency,
        name:this.props.current_car.name,
        start_date:this.props.car_days.start_date,
        end_date:this.props.car_days.end_date,
        booking_amount:this.props.car_finalamount.booking_amount,
        booking_date:booking
    }
    this.props.bookcar_action(payload);
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
              <input type ="image" src = {booknow} onClick={this.handleSubmit} style={{height : 30}}/>

            </div>

           );
  }
}
function mapStateToProps(state) {
    return {
        current_car:state.cardetails_reducer.current_car,
        car_finalamount: state.cardetails_reducer.car_finalamount,
        car_days:state.cardetails_reducer.car_days,
        user_id:state.users.user_id
    };

}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({bookcar_action:bookcar_action},dispatch);
}


export default connect(mapStateToProps,mapDispatchToProps)(TermsAndConditions);
