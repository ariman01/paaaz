import React,{ Component } from 'react';
import clickIcon from './../../images/clickIcon.png';
import DatePicker from 'material-ui/DatePicker';

class FlightSearchBar extends Component {


  render() {
    console.log("Search CarSearch Bar Page");
    return (
              <div className="container-fluid" style = {{height:250}}>

                  <div className = "container-fluid "
                  style = {{height:200,backgroundColor:"#f1f1f1", marginLeft:"8%", marginRight:"12%"}}>

                  <div className="container-fluid pull-left" style={{fontSize:13,paddingTop:30,paddingLeft:30}}>
                  <a style={{color:"black",fontWeight:"bold"}}>ROUND-TRIP</a>
                  <a style={{paddingLeft:35,color:"black",fontWeight:"bold"}}>ONE-WAY</a>
                  </div>
                      <div className="form-group" style={{marginTop:"6%"}}>
                          <input type="text"  className="TextField col-sm-2 col-md-2 col-lg-2" id="srclocation"
                          placeholder="From where?" style={{marginLeft:2,height:70,fontSize:17}}/>
                          <input type="text"  className="TextField col-sm-2 col-md-2 col-lg-2" id="deslocation"
                          placeholder="To where?" style={{marginLeft:2,height:70, fontSize:17}}/>
                          <input type="date"  className="TextField col-sm-2 col-md-2 col-lg-2" id="depart"
                          placeholder="Depart" style={{marginLeft:2,height:70, fontSize:17}}/>
                          <input type="date"  className="TextField col-sm-2 col-md-2 col-lg-2" id="return"
                          placeholder="Return" style={{marginLeft:2,height:70, fontSize:17}}/>

                          <select className="TextField col-sm-3 col-md-3 col-lg-3" id="noOfAdults"
                           style={{marginLeft:2,height:70, fontSize:17}}>
                              <option selected="selected">Adults</option>
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

export default FlightSearchBar;
