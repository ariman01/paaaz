var statelist = [
"alabama",
"alaska",
"arizona",
"arkansas",
"california",
"colorado",
"connecticut",
"delaware",
"florida",
"georgia",
"hawaii",
"idaho",
"illinois indiana",
"iowa",
"kansas",
"kentucky",
"louisiana",
"maine",
"maryland",
"massachusetts",
"michigan",
"minnesota",
"mississippi",
"missouri",
"montana nebraska",
"nevada",
"new hampshire",
"new jersey",
"new mexico",
"new york",
"north carolina",
"north dakota",
"ohio",
"oklahoma",
"oregon",
"pennsylvania rhode island",
"south carolina",
"south dakota",
"tennessee",
"texas",
"utah",
"vermont",
"virginia",
"washington",
"west virginia",
"wisconsin",
"wyoming"
]

export function checkValidState(statename){
	if(typeof statename === "string"){
		const res = statelist.indexOf(statename.toLowerCase()) > -1;
    if(res){
      return true;
    }
    else{
      alert("enter valid state");
    }
	}
}

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
    if(res){
      return res;
    }
    else{
      alert("Invalid Email");
    }

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
       if(res){
         return res;
       }
       else{
         alert("Pin should only be a 5 digit number");
       }

}


export function validatePhone (phone) {
       var regex = /^(\d{10})?$/;
       var patt = new RegExp(regex);
       var res= patt.test(phone);
       console.log(res);
       if(res){
         return res
       }
       else{
         alert("Phone number can only be 10 digit number");
       }

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
