
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
import jetblueAirlinesIcon from './../images/flight/jetblue_airlines.jpg';
import airtranIcon from './../images/flight/airtran_airways.jpg';
import expressjetIcon from './../images/flight/express_jet.png';
import freedomairlinesIcon from './../images/flight/freedom_airlines.png';
import frontierailinesIcon from './../images/flight/frontier_ailines.jpg';
import grandcanyonairlinesIcon from './../images/flight/grand_canyon_airlines.jpg';
import hawaiian_airlinesIcon from './../images/flight/hawaiian_airlines.jpg';
import northwestairlinesIcon from './../images/flight/northwest_airlines.png';
import piedmontairlinesIcon from './../images/flight/piedmont_airlines.png';
import usairwaysIconIcon from './../images/flight/us_airways.jpg';
import victoryairtransportIcon from './../images/flight/victory_air_transport.jpg';
import virginAmericaIcon from './../images/flight/virgin_america.jpg';


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
    "airtran airways":airtranIcon,
    "express jet":expressjetIcon,
    "freedom airlines":freedomairlinesIcon,
    "frontier ailines":frontierailinesIcon,
    "grand canyon airlines":grandcanyonairlinesIcon,
    "hawaiian airlines":hawaiian_airlinesIcon,
    "northwest airlines":northwestairlinesIcon,
    "piedmont airlines":piedmontairlinesIcon,
    "us airways":usairwaysIconIcon,
    "victory air transport":victoryairtransportIcon,
    "virgin america":virginAmericaIcon,
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
