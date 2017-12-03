
export function emptyDate(data, field){
  if(data && data.length>0){
    return true;
  }
  alert("Required field ["+field+"] is missing or not valid !!!");
  return false;
}

export function validateEmail (email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    var patt = new RegExp(re);
    var res= patt.test(email);
    return res;
}

export function validateStartEndDate (start_date , end_date) {
       if ((Date.parse(end_date) >= Date.parse(start_date))) {
           console.log("true");
           return true;
       }else{
        console.log("false");
        alert("End date should be greater than start date");
        return false;
       }
}

export function validatePinCode (pincode) {
       var regex = /^(\d{5})?$/;
       var patt = new RegExp(regex);
       var res= patt.test(pincode);
       console.log(res);
       return res;
}


export function validatePhone (phone) {
       var regex = /^(\d{10})?$/;
       var patt = new RegExp(regex);
       var res= patt.test(phone);
       console.log(res);
       return res
}

export function validateCreditCard (cardno) {
       var regex = /^(\d{16})?$/;
       var patt = new RegExp(regex);
       var res= patt.test(cardno);
       console.log(res);
       return res;
}

export function validateCVV (cvv) {
       var regex = /^(\d{3})?$/;
       var patt = new RegExp(regex);
       var res= patt.test(cvv);
       console.log(res);
       return res;

}


//for name to be greater than 2 characters and less than 30
export function validateName (name) {
       var regex = /^[a-zA-Z ]{2,30}$/
       var patt = new RegExp(regex);
       var res= patt.test(name);
       console.log(res);
       return res;
}

//for numeric fields like no_of_bags, capacity, price etc
export function numericValidation(value, field){
    var regex = /^\d+$/;
    var patt = new RegExp(regex);
    var res= patt.test(value);
    console.log(res);
    if(!res){
      alert("Required field ["+field+"] should be numeric !!!");
    }
    return res;


}
