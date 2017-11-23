import React,{ Component } from 'react';
import {connect} from 'react-redux';
import AdminDashboardHeader from './../headers/admin_dashboard_header';
import './../../images/admin.css';
import BarChart from './../graph/bar_chart';

class HotelGraphs extends Component {


  getAdminDashBoardGraph(labels, datasets, label_name, header_text){
    if(labels.length >0 && datasets.length >0){
        var data={
          labels: labels,
          datasets:datasets,
          labelName:label_name,
          header_text:header_text
         }
      return (<BarChart data={data}/>)
    }else{
      return (<h2 style={{color:"red"}}> Analysis data not available </h2>)
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
                    {this.getAdminDashBoardGraph(this.props.hotel_analysis_data[0]['top_ten_hotel_sales'].hotels,this.props.hotel_analysis_data[0]['top_ten_hotel_sales'].sales,
                    " Sales Report"," Top 10 properties in terms of sales")}
                </div>
                <br></br>
                <h3 className="hotel-graph-header">Top 10 sales in terms of city</h3>
                <div className="car-graph-2">
<<<<<<< HEAD
                {this.getAdminDashBoardGraph(this.props.hotel_analysis_data[1].top_ten_hotel_sales_city,
                " Sales Report"," Top 10 properties in terms of sales")}
=======
                {this.getAdminDashBoardGraph(this.props.hotel_analysis_data[1]['top_ten_hotel_sales_city'].city_name,this.props.hotel_analysis_data[1]['top_ten_hotel_sales_city'].sales,
                " Sales Report"," Top 10 cities with maximum revenue")}
>>>>>>> 5abfdc321c918b4a529b67106b337a68b6a2b48e
                </div>

                <br></br>
                <h3 className="hotel-graph-header">Top 10 properties sales in terms of host/hotel owner </h3>
                <div className="car-graph-3">
<<<<<<< HEAD
                {this.getAdminDashBoardGraph(this.props.hotel_analysis_data[2].top_ten_host_sales,
                " Sales Report"," Top 10 properties in terms of sales")}
=======
                {this.getAdminDashBoardGraph(this.props.hotel_analysis_data[2]['top_ten_host_sales'].hotels,this.props.hotel_analysis_data[2]['top_ten_host_sales'].sales,
                " Sales Report"," Top 10 host with maximum sales last month")}
>>>>>>> 5abfdc321c918b4a529b67106b337a68b6a2b48e
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
