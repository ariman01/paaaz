import React,{ Component } from 'react';
import './../../images/home.css';

class RentalCarPrice extends Component {


  render() {
    return (
              <div className = "rental-car-price">
                    <strong>Rental Car Price</strong>
                    <br></br><br></br>
                    <table className="table table-hover" style ={{padding : 10}}>
                        <thead>
                            <tr>
                              <th></th>
                              <th>Per Day</th>
                              <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                              <tr>
                                <td><strong>Economy</strong>(Hunda Accent or similar)</td>
                                <td>$14</td>
                                <td>$40</td>
                              </tr>
                              <tr>
                                <td>Taxes and fees</td>
                                <td>$8</td>
                                <td>$24</td>
                              </tr>
                              <tr>
                                <td><strong>Rental Car Total</strong></td>
                                <td>$22</td>
                                <td>$64</td>
                              </tr>
                        </tbody>
                    </table>
              </div>

           );
  }
}

export default RentalCarPrice;
