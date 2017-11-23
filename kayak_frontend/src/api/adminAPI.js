// Add rest api calls related to admin
import {history} from "../utils/util";
import {updateTotalSales,updateHotelSalesAnalysis} from './../actions/admin_action';

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
 console.log("userlogin details:",data)
 return (dispatch) => {
   fetch(`${server_url}/admin/hotelgraphs`, {
       method: 'POST',
       credentials:'include',
       mode: 'cors',
       headers: { ...headers,'Content-Type': 'application/json' },
       body: JSON.stringify(data)
     }).then(res => {
         if(res.status === 201){
           return res.json();
         }else{
           alert((res.message)?res.message:"Admin does not exist !!!");
         }
    }).then(result=>{
        dispatch(updateHotelSalesAnalysis(result.result));
        history.push('/hotelgraphs');
 }).catch(err => {
         console.log("Error while retrieving hotel graph!!!");
         return err;
       });
   };
};
