import React,{ Component } from 'react';
import AdminDashboardHeader from './../headers/admin_dashboard_header';

import './../../images/admin.css';

class AddCarAdmin extends Component {


  render() {
    return (
            <div className = "add-car-admin">

                <div className="admin-dashboard-header">
                  <AdminDashboardHeader/>
                </div>

                <div className = "add-car-admin-body">
                  <h2>Add Car</h2>
                  <hr/>

                  <label>Car Model</label>
                  <input type="text" style={{width:400}} className="form-control" id="car_model"  placeholder="Enter car model" size="35"/>
                  <br></br>
                  <label>Capacity</label>
                  <input type="text" style={{width:400}} className="form-control" id="capacity"  placeholder="Enter capacity" size="35"/>
                  <br></br>
                  <label>No. of doors</label>
                  <input type="text" style={{width:400}} className="form-control" id="no_of_doors"  placeholder="Enter the number of doors" size="35"/>
                  <br></br>
                  <label>Base price</label>
                  <input type="text" style={{width:400}} className="form-control" id="price"  placeholder="Enter the price" size="35"/>
                  <br></br>
                  <label>Enter the source city</label>
                  <input type="text" style={{width:400}} className="form-control" id="price"  placeholder="Enter the cource city" size="35"/>
                  <br></br>
                  <label>Enter the destination city</label>
                  <input type="text" style={{width:400}} className="form-control" id="price"  placeholder="Enter the destination city" size="35"/>
                  <br></br>
                  <label>Select the rental agency</label>
                  <div className="form-group">
                    <select className="form-control" id="rental_agency"  style={{width:400}}>
                      <option>Select an agency</option>
                      <option>Advantage</option>
                      <option>Alamo</option>
                      <option>Avis</option>
                      <option>Budget</option>
                      <option>Dollar</option>
                      <option>Enterprise</option>
                      <option>Fox</option>
                      <option>Hertz</option>
                      <option>National</option>
                      <option>Sixt</option>
                      <option>Fox</option>
                      <option>Special rate</option>
                      <option>Thrifty</option>
                      <option>TravelCar</option>
                    </select>
                  </div>

                  <label>Select the car type</label>
                  <div className="form-group">
                    <select className="form-control" id="car_type"  style={{width:400}}>
                      <option>Select car type</option>
                      <option>Small</option>
                      <option>Large</option>
                      <option>Medium</option>
                      <option>SUV</option>
                      <option>Luxury</option>
                      <option>Van</option>
                      <option>Convertible</option>
                      <option>Pickup truck</option>
                    </select>
                  </div>

                  <button type="submit" className="btn btn-primary" style={{width:150}}>Add</button>

                </div>



            </div>
           );
  }
}



export default AddCarAdmin;
