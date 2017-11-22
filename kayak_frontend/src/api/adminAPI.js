// Add rest api calls related to admin


import {history} from "../utils/util";
import {updateTotalSales} from './../actions/admin_action';

const server_url = "http://localhost:3010"
const headers = {
    'Accept': 'application/json'
};
/*export function adminLogin(payload)
{
    console.log("admin login api"+payload);
    const requestOptions = {
        method: 'POST',
        credentials:'include',
        mode: 'cors',
        headers: { ...headers,'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    };
    return fetch('http://localhost:3010/admin/adminsignin', requestOptions)
        .then((response) =>{
          console.log()
        });
}*/

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
           alert((res.message)?res.message:"User Does not exists please sign up  !!!");
           throw "userlogin Failed !!!"
         }
    }).then(result=>{
        console.log("result",result," token :",result)
        dispatch(updateTotalSales(result.result));
        history.push('/admindashboard');
 }).catch(err => {
         console.log("Error while Login!!!");
         return err;
       });
   };
};
