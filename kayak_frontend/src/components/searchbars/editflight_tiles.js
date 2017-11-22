import React,{ Component } from 'react';
import './../../images/home.css';
import * as Images from './../../utils/images';


class EditFlightTile extends Component {

  handleEdit(){
    console.log("Clicked Edit Hotel");
    console.log(this.props.data.rating);
  }
    handleDelete(){
    console.log("Clicked delete Hotel");
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
              1:54 PM<br/>
            SFO
            </div>
            <div className="flight-tile-div">
              <span style ={{color:"grey",bold:true}}>____________ <br/> non-stop</span>
            </div>
            <div className="flight-tile-div">
            1:54 PM<br/>
            SFO
            </div>
            <div className="flight-tile-div">
              <span style={{marginLeft:"30%"}}>5 hr 33 min</span>
            </div>

          </div>
          <div className="flight-tile2">
              <strong style={{fontSize:25,color:"black",marginTop:20}}>$100</strong>
              <h4>Total</h4>
              <button onClick ={() => this.handleEdit()} style={{width:"80%",marginTop:"2%"}}><strong>Edit</strong></button>
              <button  onClick ={() => this.handleDelete()} style={{width:"80%",marginTop:"2%"}}><strong>Delete</strong></button>
          </div>
      </div>
          );
  }
}

export default EditFlightTile;
