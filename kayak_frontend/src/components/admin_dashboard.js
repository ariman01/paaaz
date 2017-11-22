import React,{ Component } from 'react';
import AdminDashboardHeader from './headers/admin_dashboard_header';
import {connect} from 'react-redux';
import './../images/home.css';
import BarChart from './graph/bar_chart';

class AdminDashboard extends Component {

  getAdminDashBoardGraph(){
    var data={
        labels: ["Car Sales", "Flight Sales", "Hotel Sales", "User Booking"],
        datasets:[this.props.total_sales.car_sales,this.props.total_sales.flight_sales,this.props.total_sales.hotel_sales,this.props.total_sales.user_booking],
        labelName:"Sales Overview",
        header_text:"Sales Overview"
    }
    return (<BarChart data={data}/>)
  }
  render() {
    console.log("It will render admin dash board page:");
    return (
            <div>
                    <div className="admin-dashboard-header">
                        <AdminDashboardHeader/>
                    </div>

                    <div className="admin-dashboard-welcome">
                      <h2>Welcome to Admin Dashboard</h2>
                      <hr/>
                    </div>

                    <div className="admin-dashboard-tiles-div">
                        <div className="admin-dashboard-tile-car">
                            <h3>Total cars rented: </h3>
                            <br></br>
                            <br></br>
                            <h1>{this.props.total_sales.car_sales}</h1>
                        </div>

                        <div className="admin-dashboard-tile-flight">
                            <h3>Total flights booked: </h3>
                            <br></br>
                            <br></br>
                            <h1>{this.props.total_sales.flight_sales}</h1>
                        </div>

                        <div className="admin-dashboard-tile-hotel">
                            <h3>Total hotels booked: </h3>
                            <br></br>
                            <br></br>
                            <h1>{this.props.total_sales.hotel_sales}</h1>
                        </div>

                        <div className="admin-dashboard-tile-users">
                            <h3>Total users active: </h3>
                            <br></br>
                            <br></br>
                            <h1>{this.props.total_sales.user_booking}</h1>
                        </div>

                    </div>

                      <div className="admin-dashboard-graph">
                      <div style={{padding:20,margingBottom:100}}>
                      {this.getAdminDashBoardGraph()}
                      </div>

                      </div>

            </div>
           );
  }
}

function mapStateToProps(state){
  console.log("maps to props admin dashboard: state.admin_reducer.total_sales",state.admin_reducer.total_sales);
  return {
    total_sales:state.admin_reducer.total_sales
  };
}

export default connect(mapStateToProps)(AdminDashboard);
