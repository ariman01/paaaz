import React,{ Component } from 'react';
import CarTile from './searchbars/car_tiles';
import HomePageHeader from './headers/homepage_header';

class ShowCars extends Component {
constructor(){
  super();
 this.cars = [{
    name:"Audi",
    type:"Luxury",
    capacity:4,
    no_of_doors:4,
    bags:4,
    rental_agency:"Fox",
    price:100,
    src:"San Francisco",
    des:"San Diego"
  },{
    name:"BMW",
    type:"Economy",
    capacity:4,
    no_of_doors:4,
    bags:4,
    rental_agency:"Fox",
    price:300,
  },{
    name:"Mazda",
    type:"Economy",
    capacity:4,
    no_of_doors:4,
    bags:4,
    rental_agency:"Fox",
    price:1100,
  },{
    name:"Mazda",
    type:"Economy",
    capacity:4,
    no_of_doors:4,
    bags:4,
    rental_agency:"Fox",
    price:180,
  },{
    name:"Mazda",
    type:"Economy",
    capacity:4,
    no_of_doors:4,
    bags:4,
    rental_agency:"Fox",
    price:200,
  },{
    name:"Mazda",
    type:"Economy",
    capacity:4,
    no_of_doors:4,
    bags:4,
    rental_agency:"Fox",
    price:300,
  }]
}

  getCarTile(cars){
    console.log("cars: ", cars);
    return cars.map((car)=>{
      return (<CarTile data={car} style={{paddingTop:10}}/>)
    });
  }

  render() {
    console.log("It will display list of cars searched by the user");
    return (
              <div>
              <div>
              <HomePageHeader/>
              </div>

              <div className = "car-details-body">
                <div className ="car-details-body-left-nav">

                </div>
                <div className ="car-details-body-centre">
                {this.getCarTile(this.cars)}
                </div>
                <div className ="car-details-body-right-nav">

                </div>
              </div>

              </div>
           );
  }
}



export default ShowCars;
