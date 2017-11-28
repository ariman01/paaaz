import React,{ Component } from 'react';
import './../../images/subcomponent.css';


class hotelBillingSummary extends Component {

  render() {
    return (
      <div className="carr-billing-summary">
            <div className="car-summary" >
                <div className="car-summary-1">
                    <strong style={{fontSize : "11pt"}}>Summary</strong>
                    <h6>3 rooms, 10 adults</h6>
                    <h6>Sun 12/3 - Wed 12/6(3nights)</h6>
                    <hr/>
                </div >
                <div className="car-summary-2">
                    <div>
                    <strong style={{fontSize : "11pt"}}> Charges</strong>
                    <h5>Executive suite</h5>
                    <h5>3 nights</h5>
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

export default hotelBillingSummary;
