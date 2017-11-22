import React,{ Component } from 'react';
import clickIcon from './../../images/clickIcon.png';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import DatePicker from 'material-ui/DatePicker';
import {searchflights_action} from './../../actions/flight_action';
class FlightSearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            flightdetails: {
                src_city: '',
                destination_city: '',
                start_date: '',
                end_date: ''
            }
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        const { name, value } = event.target;
        const { flightdetails } = this.state;
        this.setState({
            flightdetails: {
                ...flightdetails,
                [name]: value
            }
        });
    }
    handleSubmit(event) {
        event.preventDefault();
        const { flightdetails } = this.state;
        const { dispatch } = this.props;
        this.props.searchflights_action(flightdetails);
    }

  render() {
      const { flightdetails } = this.state;
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
                          placeholder="From where?" name="src_city" value={flightdetails.src_city} style={{marginLeft:2,height:70,fontSize:17}} onChange={this.handleChange}/>
                          <input type="text"  className="TextField col-sm-2 col-md-2 col-lg-2" id="deslocation"
                          placeholder="To where?" name="destination_city" value={flightdetails.destination_city} style={{marginLeft:2,height:70, fontSize:17}} onChange={this.handleChange}/>
                          <input type="date"  className="TextField col-sm-2 col-md-2 col-lg-2" id="depart"
                          placeholder="Depart" name="start_date" value={flightdetails.start_date} style={{marginLeft:2,height:70, fontSize:17}} onChange={this.handleChange}/>
                          <input type="date"  className="TextField col-sm-2 col-md-2 col-lg-2" id="return"
                          placeholder="Return" name="end_date" value={flightdetails.end_date} style={{marginLeft:2,height:70, fontSize:17}} onChange={this.handleChange}/>

                          <select className="TextField col-sm-3 col-md-3 col-lg-3" id="noOfAdults"
                           style={{marginLeft:2,height:70, fontSize:17}}>
                              <option selected="selected">Adults</option>
                              <option value="One">One</option>
                              <option value="Two">Two</option>
                              <option value="Three">Three</option>
                              <option value="Four">Four</option>
                          </select>
                      </div>
                      <input type="image" src={clickIcon} style={{height:70}} onClick={this.handleSubmit}/>
                  </div>
              </div>
           );
  }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({searchflights_action:searchflights_action},dispatch);
}
export default connect(null,mapDispatchToProps)(FlightSearchBar);
