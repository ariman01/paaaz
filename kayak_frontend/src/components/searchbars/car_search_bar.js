import React,{ Component } from 'react';
import clickIcon from './../../images/clickIcon.png';

class CarSearchBar extends Component {


  render() {
    console.log("Search CarSearch Bar Page");
    return (
              <div className="container-fluid" style = {{height:250}}>

                  <div className = "container-fluid "
                  style = {{height:200,backgroundColor:"#f1f1f1", marginLeft:"8%", marginRight:"12%"}}>

                  <div className="container-fluid pull-left" style={{fontSize:13,paddingTop:30,paddingLeft:30}}>
                      <a style={{color:"black",fontWeight:"bold"}}>SAME DROP-OFF</a>
                      <a style={{paddingLeft:35,color:"black",fontWeight:"bold"}}>DIFFERENT DROP-OFF</a>
                  </div>
                      <div className="form-group" style={{marginTop:"6%"}}>
                          <input type="text"  className="TextField col-sm-3 col-md-3 col-lg-3" id="srclocation"
                          placeholder="Where" style={{marginLeft:2,height:70,fontSize:17}}/>
                          <input type="text"  className="TextField col-sm-3 col-md-3 col-lg-3" id="deslocation"
                          placeholder="To" style={{marginLeft:2,height:70, fontSize:17}}/>
                          <input type="text"  className="TextField col-sm-2 col-md-3 col-lg-3" id="startdate"
                          placeholder="Start Date" style={{marginLeft:2,height:70, fontSize:17}}/>
                          <input type="text"  className="TextField col-sm-2 col-md-2 col-lg-2" id="enddate"
                          placeholder="End Date" style={{marginLeft:2,height:70, fontSize:17}}/>
                      </div>
                      <img src={clickIcon}  alt="Submit" style={{height:70}}/>
                  </div>
              </div>
           );
  }
}

export default CarSearchBar;
