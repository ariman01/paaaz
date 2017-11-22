import React,{ Component } from 'react';
import AdminDashboardHeader from './../headers/admin_dashboard_header';

import './../../images/admin.css';

class AddFlightAdmin extends Component {


  render() {
    return (
            <div className = "add-flight-admin">

                <div className="admin-dashboard-header">
                  <AdminDashboardHeader/>
                </div>

                <div className = "add-flight-admin-body">
                  <h2>Add Flight</h2>
                  <hr/>

                  <label>Flight id</label>
                  <input type="text" style={{width:400}} className="form-control" id="flight_id"  placeholder="Enter flight id" size="35"/>
                  <br></br>
                  <label>Carrier Name</label>
                  <input type="text" style={{width:400}} className="form-control" id="carrier_name"  placeholder="Enter carrier name" size="35"/>
                  <br></br>
                  <label>Source city</label>
                  <input type="text" style={{width:400}} className="form-control" id="src_city"  placeholder="Enter the source city" size="35"/>
                  <br></br>
                  <label>Destination city</label>
                  <input type="text" style={{width:400}} className="form-control" id="destination_city"  placeholder="Enter the destination city" size="35"/>
                  <br></br>
                  <label>Flight duration</label>
                  <input type="text" style={{width:400}} className="form-control" id="price"  placeholder="Enter the flight duration" size="35"/>
                  <br></br>
                  <label>Operational day</label>
                  <div className="form-group">
                    <select  className="form-control" id="operational_day"  style={{width:400}}>
                      <option>Select operational day</option>
                      <option>Monday</option>
                      <option>Tuesday</option>
                      <option>Wednesday</option>
                      <option>Thrusday</option>
                      <option>Friday</option>
                      <option>Saturday</option>
                      <option>Sunday</option>
                    </select>
                  </div>
                  <label>Departure time</label>
                  <input type="text" style={{width:400}} className="form-control" id="departure_time"  placeholder="Enter the departure time" size="35"/>
                  <br></br>
                  <label>Price</label>
                  <input type="text" style={{width:400}} className="form-control" id="price"  placeholder="Enter the base price" size="35"/>
                  <br></br>


                  <button type="submit" className="btn btn-primary" style={{width:150}}>Add</button>
                  

                </div>



            </div>
           );
  }
}



export default AddFlightAdmin;
