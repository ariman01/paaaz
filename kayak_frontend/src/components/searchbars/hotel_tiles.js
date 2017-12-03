import React,{ Component } from 'react';
import './../../images/home.css';
import HotelIcon from './../../images/hotelimage.jpg'
import viewDeal from './../../images/viewdeal.png'
import {history} from './../../utils/util.js';
import {bindActionCreators} from 'redux';
import {currenthotel_action,setprice_action} from './../../actions/hotel_action';
import { connect } from 'react-redux';
import { useraction } from './../../actions/user_action';
import * as UTIL from './../../utils/util';
import {userapi} from './../../api/userAPI';
class HotelTile extends Component {


  handleView(data){
    var email= UTIL.getUserDetails();
    if(email){
    this.props.get_user_card_details_action({email:email,data:data});
  }
  else {
    this.props.currenthotel_action(data);
  }

      console.log("handle hotel view :",data);
      var hotel_price=(this.props.data.hotel_price)*(this.props.hotel_days.days);
      var hotel_tax=10*this.props.hotel_days.days;
      var hotel_totalprice = hotel_price+hotel_tax;
      var payload={
          hotel_price:hotel_price,
          hotel_tax:hotel_tax,
          booking_amount:hotel_totalprice
      }
      console.log("payload: ",payload);
      console.log("its payload in hoteltile"+payload.hotel_price+payload.booking_amount);
      this.props.setprice_action(payload);

  }

  render() {
    //const hotel_price=(this.props.current_hotel.hotel_price)*(this.props.hotel_days.days);
    return (
      <div className="tile">
          <div className="tiled1">
                  <div className="tiled1-img-pane" style={{float:"left",width:"100%",height:100}}>
                    <img  className="hotel-img" src={HotelIcon}/>
                  </div>
           </div>

          <div className="tiled2">
              <div style={{marginTop:"5%"}}>
              <span style={{fontSize:20, padding:40}}><b>{this.props.data.hotel_name}</b></span><br/>
              </div>
              <div style={{width:300}}>

                   <span class="glyphicon glyphicon-star" style={{float: "left",marginLeft:45}}>
                 : {this.props.data.hotel_stars}</span><br/>
                 <div style={{marginTop:30}}>
                   <span style={{marginTop:30,marginLeft:50, backgroundColor: "#00B1E1", color: 'white'}}> {this.props.data.hotel_rating} </span>
                   <span style={{marginTop:30,marginLeft:30}}>{this.props.data.hotel_reviews}   </span>
                         <span style={{fontSize:15,marginLeft:50}}>Neighbourhood <br/><div style={{marginLeft:200, fontSize:12,color: 'grey' }}> {this.props.data.hotel_address} </div></span>


                <span style={{marginLeft:170}}></span>
                </div>
               </div>

          </div>

          <div className="tiled3">
              <strong style={{fontSize:25,color:"black"}}>${this.props.data.hotel_price}</strong>
              <h4>Total</h4>
              <h5 style={{color:"grey",marginTop:"15%"}}><span style={{color:"green"}}>Free Cancellation</span></h5>
              <img src={viewDeal} style={{width:"80%",marginTop:"2%"}}
              onClick ={() => this.handleView(this.props.data)}/>
          </div>
      </div>
          );
  }
}
function mapStateToProps(state) {
    console.log("hiii"+state.hoteldetails_reducer.hotel_days.days);
    return {
        hotel_days: state.hoteldetails_reducer.hotel_days,
        current_hotel:state.hoteldetails_reducer.current_hotel,
        hotel_finalamount:state.hoteldetails_reducer.hotel_finalamount
    };

}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({currenthotel_action:currenthotel_action,setprice_action:setprice_action,get_user_card_details_action:useraction.get_user_card_details_action},dispatch);

}
export default connect(mapStateToProps,mapDispatchToProps)(HotelTile);
