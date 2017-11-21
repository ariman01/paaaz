import React,{ Component } from 'react';
import clickIcon from './../../images/clickIcon.png';
import DatePicker from 'material-ui/DatePicker';

class HotelSearchBar extends Component {


  render() {
    const options = [
      'one', 'two', 'three'
  ]
    console.log("Search CarSearch Bar Page");
    return (
              <div className="container-fluid" style = {{height:250}}>

                  <div className = "container-fluid "
                  style = {{height:200,backgroundColor:"#f1f1f1", marginLeft:"8%", marginRight:"12%"}}>

                  <div className="container-fluid pull-left" style={{fontSize:13,paddingTop:30,paddingLeft:30}}>
                  </div>
                      <div className="form-group" style={{marginTop:"6%"}}>
                          <input type="text"  className="TextField col-sm-3 col-md-3 col-lg-3" id="location"
                          placeholder="Where" style={{marginLeft:2,height:70,fontSize:17}}/>
                          <input type="date"  className="TextField col-sm-3 col-md-3 col-lg-3" id="checkInDate"
                          placeholder="Check-in" style={{marginLeft:2,height:70, fontSize:17}}/>

                          <DatePicker hintText="Check-out" mode="landscape" container="inline" className="TextField col-sm-2 col-md-3 col-lg-3" id="checkOutDate" style={{marginLeft:2, fontSize:17,backgroundColor:"white",height:70,textAlign:"bottom"}}/>

                          <select className="TextField col-sm-2 col-md-2 col-lg-2" id="noOfGuests"
                           style={{marginLeft:2,height:70, fontSize:17}}>
                              <option selected="selected">No of Guests</option>
                              <option value="One">One</option>
                              <option value="Two">Two</option>
                              <option value="Three">Three</option>
                              <option value="Four">Four</option>
                          </select>

                      </div>
                      <input type="image" src={clickIcon} style={{height:70}}/>

                  </div>
              </div>
           );
  }
}

export default HotelSearchBar;
