import React,{ Component } from 'react';
import HomePageHeader1 from './headers/homepage_header1';
import './../images/user_profile.css';
import PaymentDetailsTile from './searchbars/paymentdetails_tiles';
import { connect } from 'react-redux';
import {history} from "../utils/util";
import * as UTIL from '../utils/util';
import {bindActionCreators} from 'redux';
import {userapi} from './../api/userAPI';

class PaymentDetails extends Component {

    constructor(){
  super();
}

handleEdit(){
    console.log("Clicked Edit Card");
  }
  handleAdd(){
    console.log("Clicked Add Card");
  }
  getHistory()
  {
    console.log("its getCardDetails in user_profile");
    var email= UTIL.getUserDetails();
    if(email){
      this.props.getuserhistoryAPI({email:email});
    }else{
      alert("User not logged in !!!");

    }
  }
  getPaymentDetailsTIle(paymentdetails){
    console.log("PaymentDetails: ", paymentdetails);
    return paymentdetails.map((paymentdetails)=>{
      return (<PaymentDetailsTile data={paymentdetails} style={{paddingTop:10}}/>)
    });
  }
  render() {
    console.log("It will display user payment details");
    return (
            <div>
              <div className="user-profile-header">
                <HomePageHeader1/>
              </div>

              <div className= "user-profile-body">
                  <div className= "user-profile-body-nav-options">
                    <br></br>
                    <a onClick ={() => {history.push('/userdetails')}}>Preference</a>
                    <br></br>
                    <br></br>
                    <a onClick ={() => {this.getHistory()}}>History</a>
                  </div>
                    <p style={{fontSize : "20pt"}}>Payment Details</p>
                    <br></br>
                    <br></br>

                       {this.getPaymentDetailsTIle(this.props.carddetails)}

                        <button onClick ={() => this.handleAdd()} type="submit" className="btn btn-primary" style={{width:150}}>Add</button>
                         <button onClick ={() => this.handleEdit()} type="submit" className="btn btn-primary" style={{width:150}}>Edit</button>

              </div>





            </div>
           );
  }
}
function mapStateToProps(state) {
    console.log("payment details userdetails",state.users.carddetails);
    return  {
        carddetails: state.users.carddetails
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({getcarddetailsAPI:userapi.getcarddetailsAPI,getuserhistoryAPI:userapi.getuserhistoryAPI},dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(PaymentDetails);
