import React,{ Component } from 'react';
import HotelTile from './searchbars/hotel_tiles';
import HomePageHeader from './headers/homepage_header';
import './../images/home.css';


class ShowHotels extends Component {
constructor(){
  super();
 this.hotels = [{
    name:"Sofitel Los Angeles at Beverly Hills",
    stars:4,
    rating:8.5,
    reviews:"Good",
    no_of_reviews:4500,
    address:"Beverly Grove",
    price:249
  },{
    name:"Sofitel San Jose",
    stars:3,
    rating:7.6,
    reviews:"Excellent",
    no_of_reviews:4500,
    address:"The Alameda",
    price:249
  },{
    name:"Sofitel Los Angeles at Beverly Hills",
    stars:4,
    rating:8.5,
    reviews:"Excellent",
    no_of_reviews:4500,
    address:"Beverly Grove",
    price:249
  },{
    name:"Sofitel Los Angeles at Beverly Hills",
    stars:4,
    rating:6.2,
    reviews:"Good",
    no_of_reviews:4500,
    address:"Beverly Grove",
    price:249
  },{
    name:"Sofitel Los Angeles at Beverly Hills",
    stars:4,
    rating:8.5,
    reviews:"excellent",
    no_of_reviews:4500,
    address:"Beverly Grove",
    price:249
  },{
    name:"Sofitel Los Angeles at Beverly Hills",
    stars:4,
    rating:8.5,
    reviews:"excellent",
    no_of_reviews:4500,
    address:"Beverly Grove",
    price:249
  }]
}

  getHotelTile(hotels){
    console.log("Hotels: ", hotels);
    return hotels.map((hotel)=>{
      return (<HotelTile data={hotel} style={{paddingTop:10}}/>)
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
                {this.getHotelTile(this.hotels)}
                </div>
                <div className ="hotel-details-body-right-nav">

                </div>
              </div>

              </div>
           );
  }
}



export default ShowHotels;
