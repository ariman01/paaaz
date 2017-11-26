import React,{ Component } from 'react';
import HomePageHeader from './headers/homepage_header';
import './../images/user_profile.css';


class UserProfile extends Component {

handleEdit(){
    console.log("Clicked Edit User profile");
  }


  render() {
    console.log("It will display user profile");
    return (
            <div>
              <div className="user-profile-header">
                <HomePageHeader/>
              </div>

              <div className= "user-profile-body">
                  <div className= "user-profile-body-nav-options">
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
                            <td>{this.props.data[0].first_name}</td>
                          </tr>
                          <tr>
                            <td><strong>Second Name</strong></td>
                            <td>{this.props.data[0].second_name}</td>
                          </tr>
                          <tr>
                            <td><strong>Gender</strong></td>
                            <td>{this.props.data[0].gender}</td>
                          </tr>
                          <tr>
                            <td><strong>Email</strong></td>
                            <td><a href="">{this.props.data[0].email}</a></td>
                          </tr>
                          <tr>
                            <td><strong>Address</strong></td>
                            <td>{this.props.data[0].address}</td>
                          </tr>
                          <tr>
                            <td><strong>City</strong></td>
                            <td>{this.props.data[0].city}</td>
                          </tr>
                          <tr>
                            <td><strong>State</strong></td>
                            <td>{this.props.data[0].state}</td>
                          </tr>
                          <tr>
                            <td><strong>Zip</strong></td>
                            <td>{this.props.data[0].zip}</td>
                          </tr>
                        </tbody>
                      </table>
                      <div style = {{width : "100%", marginLeft: 160}}>
                      <button onClick ={() => this.handleEdit()} style={{align:'center', width:"15%",marginTop:"2%"}}><strong>Edit</strong></button>
                      </div>
                  </div>
              </div>



            </div>
           );
  }
}



export default UserProfile;
