import React,{ Component } from 'react';
import './../../images/home.css';
import limitedseats from './../../images/limitedseats.png';
import airline from './../../images/airline.jpeg';

class FlightDetails extends Component {


  render() {
    return (
              <div className = "flight-details">
                <div>
                  <h3>You are flying</h3>
                  <hr/>
                </div>

                <div className = "flight-departure-return">
                    <div className= "flight-departure-return-text">
                        <strong>New Delhi, India (DEL) to San Francisco, CA (SFO)</strong>
                        <br></br>
                        China Southern, round-trip, mixed, 1 adult
                        <br></br>
                        <br></br>
                        Depart: Sun Dec 3 2017
                        <br></br>
                        Return: Wed Dec 6 2017
                        <br></br>
                        <img src={limitedseats} style={{height: 30 }}/>
                        <br></br>
                        <hr/>
                    </div>




                </div>



              </div>



           );
  }
}

export default FlightDetails;
