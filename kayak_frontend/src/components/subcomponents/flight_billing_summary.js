import React,{ Component } from 'react';
import './../../images/subcomponent.css';
import {connect} from 'react-redux';

class FlightBillingSummary extends Component {

  render() {
    return (
      <div className="carr-billing-summary">
            <div className="car-summary" >
                <div className="car-summary-1">
                    <strong style={{fontSize : "11pt"}}>Summary</strong>
                    <h6>Depart {this.props.flight_days.flightfromdate}: SFO > DEL 10:30a – 4:15p</h6>
                    <h6>Flight {this.props.current_flight.flight_id}</h6>
                    <hr/>
                </div >
                <div className="car-summary-2">
                    <div>
                    <strong style={{fontSize : "11pt"}}> Charges</strong>
                    <h5>Economy</h5>
                    <hr/>
                    </div>

                    <div>
                    <h5>Tax and Fees</h5>
                    <hr/>
                    </div>

                    <div>
                    <h5>Total cost</h5>
                    <hr/>
                    </div>

                </div>
          </div>

          <div className="car-summary-support">
          <strong>Customer Support </strong><br/>
          Sixt will provide customer support for this reservation.
          </div>
      </div>
          );
  }
}
function mapStateToProps(state) {
    console.log("hiii"+state.flightdetails_reducer.flight_days.days);
    return {
        flight_days: state.flightdetails_reducer.flight_days,
        current_flight:state.flightdetails_reducer.current_flight
    };

}

export default connect(mapStateToProps,null)(FlightBillingSummary);


