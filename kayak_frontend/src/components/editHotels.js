import React,{ Component } from 'react';
import { connect } from 'react-redux';
import EditHotelTile from './searchbars/edithotel_tiles';
import HomePageHeader from './headers/homepage_header';
import './../images/home.css';

class EditHotels extends Component {


 getHotelTile(hotels){
    console.log("Hotels: ", hotels);
    return hotels.map((hotel)=>{
      return (<EditHotelTile data={hotel} style={{paddingTop:10}}/>)
    });
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
                <div className ="hotel-details-body-centre">
                {this.getHotelTile(this.props.listOfSearchedHotel)}
                </div>
                <div className ="hotel-details-body-right-nav">

                </div>
              </div>

              </div>
           );
  }
}



function mapStateToProps(state) {
    console.log("Edit hotels mapStateToProps: "+state.admin_reducer.listOfSearchedHotel);
    return {
        listOfSearchedHotel: state.admin_reducer.listOfSearchedHotel,
      };
}

export default connect(mapStateToProps,null)(EditHotels);
