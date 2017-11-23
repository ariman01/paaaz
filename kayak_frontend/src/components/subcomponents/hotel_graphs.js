import React,{ Component } from 'react';
import {connect} from 'react-redux';
import AdminDashboardHeader from './../headers/admin_dashboard_header';
import './../../images/admin.css';
import BarChart from './../graph/bar_chart';

class HotelGraphs extends Component {

  getAdminDashBoardGraph(data, label_name, header_text){
    var data={
        labels: data.hotels,
        datasets:data.sales,
        labelName:label_name,
        header_text:header_text
    }
    return (<BarChart data={data}/>)
  }

  render() {
    return (
            <div>

                <div className="admin-dashboard-header">
                  <AdminDashboardHeader/>
                </div>

                <br></br>
                <h3 className="hotel-graph-header">Top 10 sales of properties </h3>
                <div className="car-graph-1">
                    {this.getAdminDashBoardGraph(this.props.hotel_analysis_data[0].top_ten_hotel_sales,
                    " Sales Report"," Top 10 properties in terms of sales")}
                </div>
                <br></br>
                <h3 className="hotel-graph-header">Top 10 sales in terms of city</h3>
                <div className="car-graph-2">
                {this.getAdminDashBoardGraph(this.props.hotel_analysis_data[0].top_ten_hotel_sales,
                " Sales Report"," Top 10 properties in terms of sales")}
                </div>

                <br></br>
                <h3 className="hotel-graph-header">Top 10 properties sales in terms of host/hotel owner </h3>
                <div className="car-graph-3">
                {this.getAdminDashBoardGraph(this.props.hotel_analysis_data[0].top_ten_hotel_sales,
                " Sales Report"," Top 10 properties in terms of sales")}
                </div>

            </div>
           );
  }
}


function mapStateToProps(state) {
    console.log("Hotel graph mapStateToProps:",state.admin_reducer.hotel_analysis_data);
    return {
        hotel_analysis_data: state.admin_reducer.hotel_analysis_data,
    };

}
export default connect(mapStateToProps,null)(HotelGraphs);
