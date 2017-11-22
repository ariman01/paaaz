import React,{ Component } from 'react';
import AdminDashboardHeader from './../headers/admin_dashboard_header';
import './../../images/admin.css';

class EditCarForm extends Component {

 handleEdit(){
    console.log("Clicked Edit Car");
    console.log(this.props.data[0].name);
  }
  render() {
    return (
            <div className = "add-hotel-admin">

                <div className="admin-dashboard-header">
                  <AdminDashboardHeader/>
                </div>

                <div className = "add-hotel-admin-body">
                  <h2>Edit Car</h2>
                  <hr/>
                  

                  <label>Car Name</label>
                  <input type="text" style={{width:400}} className="form-control" id="car_name"  placeholder={this.props.data[0].name} size="35"/>
                  <br></br>
                  <label>Car Capacity</label>
                  <input type="text" style={{width:400}} className="form-control" id="car_capacity"  placeholder={this.props.data[0].capacity} size="35"/>
                  <br></br>
                  <label>Number of Bags</label>
                  <input type="text" style={{width:400}} className="form-control" id="no_of_bags"  placeholder={this.props.data[0].no_of_bags} size="35"/>
                  <br></br>

                  <label>Number of Doors</label>
                  <input type="text" style={{width:400}} className="form-control" id="no_of_doors"  placeholder={this.props.data[0].no_of_doors} size="35"/>
                  <br></br>
                  <label>Source City</label>
                  <input type="text" style={{width:400}} className="form-control" id="src_city"  placeholder={this.props.data[0].src_city} size="35"/>
                  <br></br>
                  <label>Destination City</label>
                  <input type="text" style={{width:400}} className="form-control" id="dest_city"  placeholder={this.props.data[0].dest_city} size="35"/>
                  <br></br>
                 
                  <label>Rental Agency</label>
                  <input type="text" style={{width:400}} className="form-control" id="agency"  placeholder={this.props.data[0].agency} size="35"/>

                  <br></br>
                  <label>Car base price in $</label>
                  <input type="text" style={{width:400}} className="form-control" id="hotel_price"  placeholder= {this.props.data[0].price} size="35"/>

                  <br></br>

                  <button onClick ={() => this.handleEdit()} type="submit" className="btn btn-primary" style={{width:150}}>Edit</button>

                </div>



            </div>
           );
  }
}



export default EditCarForm;