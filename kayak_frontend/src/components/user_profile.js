import React,{ Component } from 'react';
import HotelTile from './searchbars/hotel_tiles';
import HomePageHeader from './headers/homepage_header';
import './../images/user_profile.css';


class UserProfile extends Component {


  render() {
    console.log("It will display user profile");
    return (
            <div>
              <div className="user-profile-header">
                <HomePageHeader/>
              </div>

              <div className= "user-profile-body">
                  <div className= "user-profile-body-nav-options">
                    <a href="">Preferences</a>
                    <br></br>
                    <br></br>
                    <a href="">Payment Details</a>
                    <br></br>
                    <br></br>
                    <a href="">History</a>
                  </div>

                  <div className= "user-profile-body-details">
                    <p style={{fontSize : "20pt"}}>Preferences</p>
                    <table className="table">
                        <tbody>
                          <tr>
                            <td><strong>First Name</strong></td>
                            <td>Akash</td>
                          </tr>
                          <tr>
                            <td><strong>Second Name</strong></td>
                            <td>Gupta</td>
                          </tr>
                          <tr>
                            <td><strong>Gender</strong></td>
                            <td>Male</td>
                          </tr>
                          <tr>
                            <td><strong>Email</strong></td>
                            <td><a href="">akashgupta@gmail.com</a></td>
                          </tr>
                          <tr>
                            <td><strong>Address</strong></td>
                            <td>2913 Pescadero Terrace</td>
                          </tr>
                          <tr>
                            <td><strong>City</strong></td>
                            <td>Fremont</td>
                          </tr>
                          <tr>
                            <td><strong>State</strong></td>
                            <td>California</td>
                          </tr>
                          <tr>
                            <td><strong>Zip</strong></td>
                            <td>90909</td>
                          </tr>
                        </tbody>
                      </table>
                  </div>
              </div>



            </div>
           );
  }
}



export default UserProfile;
