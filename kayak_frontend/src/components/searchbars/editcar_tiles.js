import React,{ Component } from 'react';
import './../../images/home.css';
import carIcon from './../../images/audi.png'
import viewDeal from './../../images/viewdeal.png'
import userIcon from './../../images/user1.png';
import baggageIcon from './../../images/car_baggage.png';
import cardoorIcon from './../../images/car_door.png';
import foxIcon from './../../images/fox.png';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import * as adminActions from './../../actions/admin_action';
import {adminCarDelete} from './../../api/adminAPI';
import {history} from "../../utils/util";


class EditCarTile extends Component {

  handleEdit(){
      console.log("Car edit:",this.props.data);
      this.props.editCarAdmin(this.props.data);
      history.push('/editcarform');
  }

  render() {
    console.log("Search leftnav Bar Page");
    return (
      <div className="tile">
          <div className="tiled1">
                  <div className="tiled1-img-pane" style={{float:"left",width:"100%"}}>
                      <h1>{this.props.data.name}</h1>
                      <h5 style={{color:"grey"}}>Audi or similar car</h5>
                      <img src = {userIcon}/> {this.props.data.capacity}
                      <img src = {baggageIcon} style={{padding:10}}/> {this.props.data.no_of_bags}
                      <img src = {cardoorIcon} style={{padding:10}}/> {this.props.data.no_of_doors}
                  </div>
                  <div style={{width:"100%"}}>
                      <div className="car-agency-image">
                        <img src = {foxIcon} />
                      </div>

                      <div className="car-des-name" >

                         <span style={{fontSize:15,marginLeft:8,marginRight:8}}>  &nbsp;{this.props.data.src_city} </span><br/>
                         <span style={{fontSize:15,marginLeft:8,marginRight:8}}>  &nbsp;{this.props.data.destination_city} </span>
                      </div>
                  </div>
           </div>

          <div className="tiled2" style={{float:"left"}}>
              <div style={{marginTop:"10%"}}>
                  <img  className="car-img" src={carIcon}/>
              </div>
          </div>

          <div className="tiled3">
              <strong style={{marginLeft:35,fontSize:25,color:"black"}}>${this.props.data.price}</strong>
              <h4 style={{marginLeft:35}}>Total</h4>
              <button onClick ={() => this.handleEdit()} style={{width:"80%",marginTop:"2%"}}><strong>Edit</strong></button>
              <button  onClick ={() => this.props.adminCarDelete({model_no:this.props.data.model_no},this.props.latest_admin_search_parameter)} style={{width:"80%",marginTop:"2%"}}><strong>Delete</strong></button>
          </div>
      </div>
          );
  }
}

function mapStateToProps(state) {
    return {
        latest_admin_search_parameter: state.cardetails_reducer.latest_admin_search_parameter,
    };

}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({editCarAdmin:adminActions.editCarAdmin,adminCarDelete:adminCarDelete},dispatch);
}
export default connect(mapStateToProps,mapDispatchToProps)(EditCarTile);
