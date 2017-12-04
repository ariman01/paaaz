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
	console.log("data",data);
  if(data && data.length>0){
    return true;
  }
  alert("Required field ["+field+"] is missing or not valid !!!");
  return false;
}

export function validateEmail (email) {
	if(email && email.length >0){
		const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    var patt = new RegExp(re);
    var res= patt.test(email);
    if(res){
      return res;
    }else{
      alert("Invalid Email");
			return false
    }
	}else{
		alert("Required field email is missing or not valid !!!");
	  return false;
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
       }else{
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
				 return false;
       }


}

export function validateCreditCard (cardno) {
			if(cardno && cardno.length >0){
				var regex = /^(\d{16})?$/;
        var patt = new RegExp(regex);
        var res= patt.test(cardno);
 			 if(res){
          return res
        }
        else{
          alert("Invalid Credit Card");
					return false
        }
			}else{
				alert("Required field credit card detail is missing !!!");
			  return false;
			}


}

export function validateCVV (cvv) {
	console.log("cvv check :",cvv);
	if(cvv && cvv.length >0){
       var regex = /^(\d{3})?$/;
       var patt = new RegExp(regex);
       var res= patt.test(cvv);
			 if(res){
         return res
       }
       else{
         alert("Invalid CVV - It has to be of 3 digits");
       }
		 }else{
			 alert("Required field credit card cvv detail is missing !!!");
			 return false;
		 }

}


//for name to be greater than 2 characters and less than 30
export function validateName (name) {
	if(name && name.length >0){
       var regex = /^[a-zA-Z ]{2,30}$/
       var patt = new RegExp(regex);
       var res= patt.test(name);
			 if(res){
         return res
       }
       else{
         alert("Name should be more than 2 characters and less than 30 characters");
       }
		 }else{
			 alert("Required field credit card name on card detail is missing !!!");
			 return false;
		 }
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
