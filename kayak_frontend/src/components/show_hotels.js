import React,{ Component } from 'react';
import { connect } from 'react-redux';
import HomePageHeader from './headers/homepage_header';

class ShowHotels extends Component {
  render() {
    console.log("It will display list of hotels searched by the user");
      return (
          <div>
              <div>
                  <HomePageHeader/>
              </div>

              <div className = "car-details-body">
                  <div className ="car-details-body-left-nav">

                  </div>
                  <div className ="car-details-body-centre">
                      {this.props.hotels.length > 0 ?
                          this.props.hotels.map((hotel) => {
                              //return (<div><HotelTile data={hotel} style={{paddingTop: 10}}/></div>);
                          })
                          : ''
                      }
                  </div>
                  <div className ="car-details-body-right-nav">

                  </div>
              </div>

          </div>
      );
  }
}

function mapStateToProps(state) {
    console.log("hiii"+state.hoteldetails_reducer.hotels);
    return {
        hotels: state.hoteldetails_reducer.hotels,
    };

}

export default connect(mapStateToProps,null)(ShowHotels);
