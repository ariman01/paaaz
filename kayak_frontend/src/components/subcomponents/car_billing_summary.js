import React,{ Component } from 'react';
import './../../images/subcomponent.css';


class CarBillingSummary extends Component {

  render() {
    return (
      <div className="carr-billing-summary">
            <div className="car-summary" >
                <div className="car-summary-1">
                    <strong ><h4>Summary</h4></strong>
                    <h6>Economy, 5 people/1 bag, Automatic transmission, Air-conditioning Thu 11/23 - Fri 11/24 (1 day)</h6>
                    <hr/>
                </div >
                <div className="car-summary-2">
                    <div>
                    <strong><h4> Charges </h4></strong>
                    <h5>Economy</h5>
                    (1 hr)
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
                    <div>
                    <h6>Rental Car Damage Protection Not Selected</h6>
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

export default CarBillingSummary;
