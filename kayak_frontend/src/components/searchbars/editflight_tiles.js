import React,{ Component } from 'react';
import './../../images/home.css';
import * as Images from './../../utils/images';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import * as adminActions from './../../actions/admin_action';
import {history} from "../../utils/util";

class EditFlightTile extends Component {

  handleEdit(){
    console.log("Flight edit:",this.props.data);
    this.props.editFlightAdmin(this.props.data);
    history.push('/editflightform');
  }

  render() {
    console.log("Search leftnav Bar Page");
    return (
      <div className="flight-tile">

          <div className="flight-tile1">
            <div className="flight-tile-div">
            <img src={Images.getImages().delta_icon} />
            </div>
            <div className="flight-tile-div">
            {this.props.data.departure_time}<br/>
            {this.props.data.src_city}
            </div>
            <div className="flight-tile-div">
              <span style ={{color:"grey",bold:true}}>____________ <br/> non-stop</span>
            </div>
            <div className="flight-tile-div">
            <br/>
            {this.props.data.destination_city}
            </div>
            <div className="flight-tile-div">
              <span style={{marginLeft:"30%"}}>{this.props.data.flight_duration}</span>
            </div>

          </div>
          <div className="flight-tile2">
              <strong style={{fontSize:25,color:"black",marginTop:20}}>{this.props.data.price}</strong>
              <h4>Total</h4>
              <button onClick ={() => this.handleEdit()} style={{width:"80%",marginTop:"2%"}}><strong>Edit</strong></button>
              <button  onClick ={() => this.handleDelete()} style={{width:"80%",marginTop:"2%"}}><strong>Delete</strong></button>
          </div>
      </div>
          );
  }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({editFlightAdmin:adminActions.editFlightAdmin},dispatch);
}



export default connect(null,mapDispatchToProps)(EditFlightTile);
