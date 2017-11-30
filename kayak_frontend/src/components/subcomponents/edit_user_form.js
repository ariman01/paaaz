import React,{ Component } from 'react';
import AdminDashboardHeader from './../headers/admin_dashboard_header';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import './../../images/admin.css';
import {handleUserUpdate} from './../../api/adminAPI';

class UpdateUserAdmin extends Component {
  constructor(){
    super();
    this.updateduserdetail ={}
  }


  render() {
    this.updateduserdetail = this.props.current_user_edit;
    return (
            <div className = "add-car-admin">

                <div className="admin-dashboard-header">
                  <AdminDashboardHeader/>
                </div>

                <div className = "add-car-admin-body">
                  <h2>Edit User details</h2>
                  <hr/>

                  <label>Email id</label>
                  <input type="text" style={{width:400}} className="form-control" id="email"  defaultValue={this.props.current_user_edit.email}  size="35"
                  onChange={(email) => {this.updateduserdetail.email = email.target.value}}/>
                  <br></br>
                  <label>First Name</label>
                  <input type="text" style={{width:400}} className="form-control" id="first_name"  defaultValue={this.props.current_user_edit.first_name}  size="35"
                  onChange={(first_name) => {this.updateduserdetail.first_name = first_name.target.value}}/>
                  <br></br>
                  <label>Last Name</label>
                  <input type="text" style={{width:400}} className="form-control" id="last_name"  defaultValue={this.props.current_user_edit.last_name}  size="35"
                  onChange={(last_name) => {this.updateduserdetail.last_name = last_name.target.value}}/>
                  <br></br>
                  <label>Address</label>
                  <input type="text" style={{width:400}} className="form-control" id="address"  defaultValue={this.props.current_user_edit.address}  size="35"
                  onChange={(address) => {this.updateduserdetail.address = address.target.value}}/>
                  <br></br>
                  <label>City</label>
                  <input type="text" style={{width:400}} className="form-control" id="city"  defaultValue={this.props.current_user_edit.city}  size="35"
                  onChange={(city) => {this.updateduserdetail.city = city.target.value}}/>
                  <br></br>
                  <label>State</label>
                  <input type="text" style={{width:400}} className="form-control" id="state"  defaultValue={this.props.current_user_edit.state}  size="35"
                  onChange={(state) => {this.updateduserdetail.state = state.target.value}}/>
                  <br></br>
                  <label>Enter zip</label>
                  <input type="text" style={{width:400}} className="form-control" id="zip"  defaultValue={this.props.current_user_edit.zip}  size="35"
                  onChange={(zip) => {this.updateduserdetail.zip = zip.target.value}}/>
                  <br></br>
                  <label>Enter Phone</label>
                  <input type="text" style={{width:400}} className="form-control" id="phone"  defaultValue={this.props.current_user_edit.phone}  size="35"
                  onChange={(phone) => {this.updateduserdetail.phone = phone.target.value}}/>
                  <br></br>

                  <button type="submit" className="btn btn-primary" style={{width:150}}
                  onClick={() => this.props.handleUserUpdate(this.updateduserdetail)}>Update User</button>

                </div>

            </div>
           );
  }
}


function mapStateToProps(state){
  console.log("Update user mapStateToProps: "+state.admin_reducer.current_user_edit);
  return{
      current_user_edit: state.admin_reducer.current_user_edit,
  };
}

function mapDispatchToProps(dispatch) {
    console.log("updated user data : ",this.updateduserdetail );
    return bindActionCreators({handleUserUpdate:handleUserUpdate},dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(UpdateUserAdmin);
