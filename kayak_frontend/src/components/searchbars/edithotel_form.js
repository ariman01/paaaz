import React,{ Component } from 'react';
import AdminDashboardHeader from './../headers/admin_dashboard_header';
import './../../images/admin.css';

class EditHotelForm extends Component {

 handleEdit(){
    console.log("Clicked Edit Hotel");
    console.log(this.props.data[0].rating);
  }
  render() {
    return (
            <div className = "add-hotel-admin">

                <div className="admin-dashboard-header">
                  <AdminDashboardHeader/>
                </div>

                <div className = "add-hotel-admin-body">
                  <h2>Edit Hotel</h2>
                  <hr/>
                  

                  <label>Hotel name</label>
                  <input type="text" style={{width:400}} className="form-control" id="hotel_name"  placeholder={this.props.data[0].name} size="35"/>
                  <br></br>
                  <label>Hotel address</label>
                  <input type="text" style={{width:400}} className="form-control" id="hotel_address"  placeholder={this.props.data[0].address} size="35"/>
                  <br></br>
                  <label>Hotel city</label>
                  <input type="text" style={{width:400}} className="form-control" id="hotel_city"  placeholder={this.props.data[0].city} size="35"/>
                  <br></br>
                  <label>Hotel state</label>
                  <input type="text" style={{width:400}} className="form-control" id="hotel_state"  placeholder={this.props.data[0].state} size="35"/>
                  <br></br>
                  <label>Hotel zip</label>
                  <input type="text" style={{width:400}} className="form-control" id="hotel_zip"  placeholder={this.props.data[0].zip} size="35"/>
                  <br></br>
                  <label>Hotel stars</label>
                  <input type="text" style={{width:400}} className="form-control" id="hotel_stars"  placeholder={this.props.data[0].stars} size="35"/>
                  <br></br>
                 
                  <label>Hotel rating</label>
                  <input type="text" style={{width:400}} className="form-control" id="hotel_rating"  placeholder={this.props.data[0].rating} size="35"/>

                  <br></br>
                  <label>Hotel capacity</label>
                  <input type="text" style={{width:400}} className="form-control" id="hotel_capacity"  placeholder={this.props.data[0].capacity} size="35"/>

                  <br></br>
                  <label>Hotel base price in $</label>
                  <input type="text" style={{width:400}} className="form-control" id="hotel_price"  placeholder= {this.props.data[0].price} size="35"/>

                  <br></br>

                  <button onClick ={() => this.handleEdit()} type="submit" className="btn btn-primary" style={{width:150}}>Edit</button>

                </div>



            </div>
           );
  }
}



export default EditHotelForm;