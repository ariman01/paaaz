
import carIcon from './../images/audi.png'
import viewDeal from './../images/viewdeal.png'
import userIcon from './../images/user1.png';
import baggageIcon from './../images/car_baggage.png';
import cardoorIcon from './../images/car_door.png';
import virginIcon from './../images/virginIcon.jpg';
import deltaIcon from './../images/deltaIcon.png';
import americanairlinesIcon from './../images/flight/american_airlines.jpg';
import alaskaIcon from './../images/flight/alaska_airlines.png';
import defaultAirlineIcon from './../images/flight/default_airline.jpg';
import southwestAirlineIcon from './../images/flight/southwest_airlines.png';
import lufthansaAirlinesIcon from './../images/flight/lufthansa_airlines.png';
import britishAirlinesIcon from './../images/flight/british_airways.jpeg';
import airCanadaIcon from './../images/flight/air_canada.jpg';
import deltaAirlinesIcon from './../images/flight/delta_airlines.png';
import unitedAirlinesIcon from './../images/flight/united_airlines.png';
import jetblueAirlinesIcon from './../images/flight/jetblue_airlines.jpg'

export const getImages = () => {
  return {
    "american airlines":americanairlinesIcon,
    "alaska airlines":americanairlinesIcon,
    "default_airline":defaultAirlineIcon,
    "southwest airlines":southwestAirlineIcon,
    "lufthansa airlines":lufthansaAirlinesIcon,
    "british airlines":britishAirlinesIcon,
    "air canada":airCanadaIcon,
    "delta airlines":deltaAirlinesIcon,
    "united airlines":unitedAirlinesIcon,
    "jetblue airways":jetblueAirlinesIcon,
    view_deal:viewDeal,
    user_icon:userIcon,
    baggage_icon:baggageIcon,
    cardoor_icon:cardoorIcon,
    delta_icon:deltaIcon
  }
};

export const retrieveImages = (name)=>{
  console.log("images ",name);

  var images = getImages();
  console.log("imagesghjk",images);
  return images[name]?images[name]:images["default_airline"];
}
