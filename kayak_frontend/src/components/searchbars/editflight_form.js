import React,{ Component } from 'react';
import AdminDashboardHeader from './../headers/admin_dashboard_header';
import './../../images/admin.css';

class EditFlightForm extends Component {

 handleEdit(){
    console.log("Clicked Edit Flight");
    console.log(this.props.data[0].carrier);
  }
  render() {
    return (
            <div className = "add-hotel-admin">

                <div className="admin-dashboard-header">
                  <AdminDashboardHeader/>
                </div>

                <div className = "add-hotel-admin-body">
                  <h2>Edit Flight</h2>
                  <hr/>
                  

                  <label>Flight Carrier</label>
                  <input type="text" style={{width:400}} className="form-control" id="carrier"  placeholder={this.props.data[0].carrier} size="35"/>
                  <br></br>
                  <label>Operation days</label>
                  <input type="text" style={{width:400}} className="form-control" id="operation_day"  placeholder={this.props.data[0].operation_day} size="35"/>
                  <br></br>
                  <label>Departure Time</label>
                  <input type="text" style={{width:400}} className="form-control" id="dep_time"  placeholder={this.props.data[0].dep_time} size="35"/>
                  <br></br>
                  <label>Duration in minutes</label>
                  <input type="text" style={{width:400}} className="form-control" id="duration"  placeholder={this.props.data[0].duration} size="35"/>
                  <br></br>
                  <label>Source City</label>
                  <input type="text" style={{width:400}} className="form-control" id="src_city"  placeholder={this.props.data[0].src_city} size="35"/>
                  <br></br>
                  <label>Destination City</label>
                  <input type="text" style={{width:400}} className="form-control" id="dest_city"  placeholder={this.props.data[0].dest_city} size="35"/>
                  <br></br>
                 
                  <label>Base price in $</label>
                  <input type="text" style={{width:400}} className="form-control" id="hotel_price"  placeholder= {this.props.data[0].price} size="35"/>

                  <br></br>

                  <button onClick ={() => this.handleEdit()} type="submit" className="btn btn-primary" style={{width:150}}>Edit</button>

                </div>



            </div>
           );
  }
}



export default EditFlightForm;