import React,{ Component } from 'react';
import './../../images/home.css';
import HotelIcon from './../../images/hotelimage.jpg'
import viewDeal from './../../images/viewdeal.png'
import {history} from './../../utils/util.js';
import {bindActionCreators} from 'redux';
import {currenthotel_action} from './../../actions/hotel_action';
import { connect } from 'react-redux';
class HotelTile extends Component {


    handleView(data){
        this.props.currenthotel_action(data);
        history.push('./hotelbillingpage');
    }

  render() {
    console.log("Search leftnav Bar Page");
    return (
      <div className="tile">
          <div className="tiled1">
                  <div className="tiled1-img-pane" style={{float:"left",width:"100%",height:100}}>
                    <img  className="hotel-img" src={HotelIcon}/>
                  </div>
           </div>

          <div className="tiled2">
              <div style={{marginTop:"5%"}}>
              <span style={{fontSize:20, padding:40}}>{this.props.data.name}</span><br/>
              </div>
              <div style={{width:300}}>
                 
                   <span class="glyphicon glyphicon-star" style={{float: "left",marginLeft:45}}>
                 : {this.props.data.stars}</span><br/>
                 <div style={{marginTop:30}}>
                   <span style={{marginTop:30,marginLeft:50, backgroundColor: "#00B1E1", color: 'white'}}> {this.props.data.rating} </span>
                   <span style={{marginTop:30,marginLeft:30}}>{this.props.data.reviews}   </span>
                         <span style={{fontSize:15,marginLeft:50}}>Neighbourhood <br/><div style={{marginLeft:200, fontSize:12,color: 'grey' }}> {this.props.data.address} </div></span>
                  
                
                <span style={{marginLeft:170}}></span>
                </div>
               </div>

          </div>

          <div className="tiled3">
              <strong style={{fontSize:25,color:"black"}}>${this.props.data.price}</strong>
              <h4>Total</h4>
              <h5 style={{color:"grey",marginTop:"15%"}}><span style={{color:"green"}}>Free Cancellation</span></h5>
              <img src={viewDeal} style={{width:"80%",marginTop:"2%"}}
              onClick ={() => this.handleView()}/>
          </div>
      </div>
          );
  }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({currenthotel_action:currenthotel_action},dispatch);
}
export default connect(null,mapDispatchToProps)(HotelTile);
