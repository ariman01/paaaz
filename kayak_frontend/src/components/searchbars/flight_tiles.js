import React,{ Component } from 'react';
import './../../images/home.css';
import * as Images from './../../utils/images';
import './../../images/flight.css';


class FlightTile extends Component {

  handleView(data){
    console.log("handle car view");
  }

  render() {
    console.log("Search leftnav Bar Page");
    return (
      <div className="flight-tile">

          <div className="flight-tile1">
            <div className="flight-tile-div">
            <img src={Images.getImages().delta_icon}/><br/>
                {this.props.data.carrier_name}
            </div>
            <div className="flight-tile-div">
                {this.props.data.departure_time} <br/>
                {this.props.data.src_city}
            </div>
            <div className="flight-tile-div">
              <span style ={{color:"grey",bold:true}}>____________ <br/> non-stop</span>
            </div>
            <div className="flight-tile-div">
            1:54 PM<br/>
                {this.props.data.destination_city}
            </div>
            <div className="flight-tile-div">
              <span style={{marginLeft:"30%"}}>5 hr 33 min</span>
            </div>

          </div>
          <div className="flight-tile2">
              <strong style={{fontSize:25,color:"black",marginTop:20}}>$100</strong>
              <h4>Total</h4>
              <h5 style={{color:"grey",marginTop:"8%"}}>Kayak</h5>
              <img src={Images.getImages().view_deal} style={{width:"80%"}}
              onClick ={() => this.handleView(this.props.data)}/>
          </div>
      </div>
          );
  }
}

export default FlightTile;
