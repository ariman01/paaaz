import React,{ Component } from 'react';
import EditHotelTile from './searchbars/edithotel_tiles';
import HomePageHeader from './headers/homepage_header';
import './../images/home.css';

class EditHotels extends Component {

constructor(){
  super();

 this.hotels = [{
    name:"Sofitel Los Angeles at Beverly Hills",
    stars:4,
    rating:8.5,
    reviews:"Good",
    city : "San Jose",
    state : "California",
    zip : 95126,
    capacity : 10,
    address:"Beverly Grove",
    price:249
  },{
    name:"Sofitel San Jose",
    stars:3,
    rating:7.6,
    reviews:"Good",
    city : "San Jose",
    state : "California",
    zip : 95126,
    capacity : 10,
    address:"The Alameda",
    price:249
  },{
    name:"Sofitel Los Angeles at Beverly Hills",
    stars:4,
    rating:8.5,
    reviews:"Excellent",
    reviews:"Good",
    city : "San Jose",
    state : "California",
    zip : 95126,
    capacity : 10,
    address:"Beverly Grove",
    price:249
  },{
   name:"Sofitel Los Angeles at Beverly Hills",
    stars:4,
    rating:8.5,
    reviews:"Excellent",
    reviews:"Good",
    city : "San Jose",
    state : "California",
    zip : 95126,
    capacity : 10,
    address:"Beverly Grove",
    price:249
  },{
    name:"Sofitel Los Angeles at Beverly Hills",
    stars:4,
    rating:8.5,
    reviews:"Excellent",
    reviews:"Good",
    city : "San Jose",
    state : "California",
    zip : 95126,
    capacity : 10,
    address:"Beverly Grove",
    price:249
  },{
    name:"Sofitel Los Angeles at Beverly Hills",
    stars:4,
    rating:8.5,
    reviews:"Excellent",
    reviews:"Good",
    city : "San Jose",
    state : "California",
    zip : 95126,
    capacity : 10,
    address:"Beverly Grove",
    price:249
  }]
}


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
                {this.getHotelTile(this.hotels)}
                </div>
                <div className ="hotel-details-body-right-nav">

                </div>
              </div>

              </div>
           );
  }
}




export default EditHotels;