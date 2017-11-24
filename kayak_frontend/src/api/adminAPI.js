// Add rest api calls related to admin
import {history} from "../utils/util";
import {updateTotalSales,updateHotelSalesAnalysis} from './../actions/admin_action';
import * as adminActions from './../actions/admin_action'

const server_url = "http://localhost:3010"
const headers = {
    'Accept': 'application/json'
};

export const adminLogin = function(admindetail){
 console.log("userlogin details:",admindetail)
 return (dispatch) => {
   fetch(`${server_url}/admin/adminsignin`, {
       method: 'POST',
       credentials:'include',
       mode: 'cors',
       headers: { ...headers,'Content-Type': 'application/json' },
       body: JSON.stringify(admindetail)
     }).then(res => {
         if(res.status === 201){
           return res.json();
         }else{
           alert((res.message)?res.message:"Admin does not exist !!!");
         }
    }).then(result=>{
        console.log("result",result," token :",result)
        dispatch(updateTotalSales(result.result));
        history.push('/admindashboard');
 }).catch(err => {
         console.log("Error admin login!!!");
         return err;
       });
   };
};


export const getHotelAnalysis = function(data){
 console.log("hotel analysis request data: ",data)
 return (dispatch) => {
   fetch(`${server_url}/analysis/one`, {
       method: 'POST',
       credentials:'include',
       mode: 'cors',
       headers: { ...headers,'Content-Type': 'application/json' },
       body: JSON.stringify(data)
     }).then(res => {
        console.log("get hotel analysis res:",res.status);
         if(res.status === 201){
           return res.json();
         }else{
           alert((res.message)?res.message:"Admin does not exist !!!");
         }
    }).then(result=>{
        console.log("result.finalResult:",result.result.finalResult);
        dispatch(updateHotelSalesAnalysis(result.result.finalResult));
        history.push('/hotelgraphs');
 }).catch(err => {
         console.log("Error while retrieving hotel graph!!!");
         return err;
       });
   };
};


export const addCarAdmin = function(cardetail){
 console.log("add car details:",cardetail)
 return (dispatch) => {
   fetch(`${server_url}/cars/addcar`, {
       method: 'POST',
       credentials:'include',
       mode: 'cors',
       headers: { ...headers,'Content-Type': 'application/json' },
       body: JSON.stringify(cardetail)
     }).then(res => {
         if(res.status === 201){
           alert(" New car with model:"+cardetail.model_no+" is added successfully !!!");
           history.push('/admindashboard');
         }else{
           alert((res.message)?res.message:"Failed to add new car !!!");
         }
    }).catch(err => {
         console.log("Error while retrieving hotel graph!!!");
         return err;
       });
   };
};



export const addFlightAdmin = function(flightdetail){
 console.log("add flight details:",flightdetail)
 return (dispatch) => {
   fetch(`${server_url}/flights/addflight`, {
       method: 'POST',
       credentials:'include',
       mode: 'cors',
       headers: { ...headers,'Content-Type': 'application/json' },
       body: JSON.stringify(flightdetail)
     }).then(res => {
         if(res.status === 201){
           alert(" New flight with carrier:"+flightdetail.carrier_name+" is added successfully !!!");
           history.push('/admindashboard');
         }else{
           alert((res.message)?res.message:"Failed to add new flight !!!");
         }
    }).catch(err => {
         console.log("Error while adding new flight!!!");
         return err;
       });
   };
};

export const addHotelAdmin = function(hoteldetail){
 console.log("add hotel details:",hoteldetail)
 return (dispatch) => {
   fetch(`${server_url}/hotels/addhotel`, {
       method: 'POST',
       credentials:'include',
       mode: 'cors',
       headers: { ...headers,'Content-Type': 'application/json' },
       body: JSON.stringify(hoteldetail)
     }).then(res => {
         if(res.status === 201){
           alert(" New Hotel with id:"+hoteldetail.hotel_id+" is added successfully !!!");
           history.push('/admindashboard');
         }else{
           alert((res.message)?res.message:"Failed to add new Hotel !!!");
         }
    }).catch(err => {
         console.log("Error while adding new Hotel!!!");
         return err;
       });
   };
};

export const getHotelBillingInfo = function(data){
 console.log("getHotelBillingInfo api",data)
 return (dispatch) => {
   fetch(`${server_url}/admin/adminhotelbilling`, {
       method: 'POST',
       credentials:'include',
       mode: 'cors',
       headers: { ...headers,'Content-Type': 'application/json' },
       body: JSON.stringify(data)
     }).then(res => {
         if(res.status === 201){
           return res.json();
         }else{
           alert((res.message)?res.message:"Failed to get billing information !!!");
         }
    }).then(result =>{
        dispatch(adminActions.updateHotelBillingInformation(result.result));
        history.push('/adminhotelbilling');
    }).catch(err => {
         console.log("Error while retrieving billing information!!!");
         return err;
       });
   };
};
