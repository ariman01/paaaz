import React,{ Component } from 'react';
import './../../images/home.css';

class BookingDetails extends Component {


  render() {
    return (
              <div className="view-booking">
                    <div className = "view-booking-pick-up">
                        <strong>Pick up:</strong> Sun Dec 3 2017 – 12:00PM
                        <br></br><br></br>
                        <strong>Payless</strong><br></br>
                        OAK (off-airport shuttle)<br></br>
                        7600 Earhart Road<br></br>
                        akland, CA<br></br><br></br>
                        Phone: +1 510 638 1000<br></br>
                        Operating hours: Mon - Sun 7:00 am - 10:00 pm

                    </div>

                    <div className = "view-booking-drop-off">
                        <strong>Drop off:</strong> Sun Dec 3 2017 – 12:00PM
                        <br></br><br></br>
                        <strong>Payless</strong><br></br>
                        OAK (off-airport shuttle)<br></br>
                        7600 Earhart Road<br></br>
                        akland, CA<br></br><br></br>
                        Phone: +1 510 638 1000<br></br>
                        Operating hours: Mon - Sun 7:00 am - 10:00 pm

                    </div>

                    <div className = "view-booking-img">
                    </div>
              </div>

           );
  }
}

export default BookingDetails;
