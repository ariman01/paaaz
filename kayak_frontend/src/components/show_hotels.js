import React,{ Component } from 'react';
import HotelTile from './searchbars/hotel_tiles';
import HomePageHeader from './headers/homepage_header';
import { connect } from 'react-redux';
import './../images/home.css';


class ShowHotels extends Component {
constructor(){
  super();
 
}
  
  render() {
    console.log("It will display list of hotels searched by the user");
    return (
              <div>
                <div>
                <HomePageHeader/>
                </div>

              <div className = "hotel-details-body">
                <div className ="hotel-details-body-left-nav">

                </div>
                 <div className ="car-details-body-centre">
                      {this.props.listofdisplayedhotels.length > 0 ?
                          this.props.listofdisplayedhotels.map((hotel) => {
                              return (<div><HotelTile data={hotel} style={{paddingTop: 10}}/></div>);
                          })
                          : ''
                      }
                  </div>
                <div className ="hotel-details-body-right-nav">

                </div>
              </div>

              </div>
           );
  }

}
function mapStateToProps(state) {
     console.log("hiii"+state.hoteldetails_reducer.hotels);
    return {
        listofdisplayedhotels: state.hoteldetails_reducer.listofdisplayedhotels,
        
     };

}

export default connect(mapStateToProps,null)(ShowHotels);
