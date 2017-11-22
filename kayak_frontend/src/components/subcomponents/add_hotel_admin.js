import React,{ Component } from 'react';
import AdminDashboardHeader from './../headers/admin_dashboard_header';

import './../../images/admin.css';

class AddHotelAdmin extends Component {


  render() {
    return (
            <div className = "add-hotel-admin">

                <div className="admin-dashboard-header">
                  <AdminDashboardHeader/>
                </div>

                <div className = "add-hotel-admin-body">
                  <h2>Add Hotel</h2>
                  <hr/>

                  <label>Hotel id</label>
                  <input type="text" style={{width:400}} className="form-control" id="hotel_id"  placeholder="Enter hotel id" size="35"/>
                  <br></br>
                  <label>Hotel name</label>
                  <input type="text" style={{width:400}} className="form-control" id="hotel_name"  placeholder="Enter hotel name" size="35"/>
                  <br></br>
                  <label>Hotel address</label>
                  <input type="text" style={{width:400}} className="form-control" id="hotel_address"  placeholder="Enter the hotel address" size="35"/>
                  <br></br>
                  <label>Hotel city</label>
                  <input type="text" style={{width:400}} className="form-control" id="hotel_city"  placeholder="Enter the hotel city" size="35"/>
                  <br></br>
                  <label>Hotel state</label>
                  <input type="text" style={{width:400}} className="form-control" id="price"  placeholder="Enter the hotel state" size="35"/>
                  <br></br>
                  <label>Hotel zip</label>
                  <input type="text" style={{width:400}} className="form-control" id="price"  placeholder="Enter the hotel zip" size="35"/>
                  <br></br>
                  <label>Hotel stars</label>
                  <input type="text" style={{width:400}} className="form-control" id="price"  placeholder="Enter the hotel stars" size="35"/>
                  <br></br>
                  <label>Hotel room types</label>
                  <div className="form-group">
                    <select multiple className="form-control" id="hotel_room_type"  style={{width:400}}>
                      <option>Suite</option>
                      <option>Sudio apartment</option>
                      <option>Cabana</option>
                      <option>Family room</option>
                      <option>Presidential suite</option>
                      <option>Single</option>
                      <option>Double</option>
                      <option>Queen</option>
                      <option>King</option>
                    </select>
                  </div>

                  <br></br>
                  <label>Hotel rating</label>
                  <input type="text" style={{width:400}} className="form-control" id="hotel_rating"  placeholder="Enter the hotel rating" size="35"/>

                  <br></br>
                  <label>Hotel capacity</label>
                  <input type="text" style={{width:400}} className="form-control" id="hotel_capacity"  placeholder="Enter the hotel capacity" size="35"/>

                  <br></br>
                  <label>Hotel base price</label>
                  <input type="text" style={{width:400}} className="form-control" id="hotel_capacity"  placeholder="Enter the base price of hotel" size="35"/>

                  <br></br>

                  <button type="submit" className="btn btn-primary" style={{width:150}}>Add</button>

                </div>



            </div>
           );
  }
}



export default AddHotelAdmin;
