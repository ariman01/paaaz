var express = require('express');
var router = express.Router();
var mysql = require('./mysql');

router.post('/one', function(req, res, next) {

   		          
		console.log("get analysis");
         // Analysis 1 : Below query gets the top 10 hotel names year wise with in order of maximum booking amount
		 // What are the expected values for the analysis 
		 // expected values in the function would be the year 
		 // user will select the date and send it
		 // extract the year from the date and put it in sql query
		 // create date object and get the year
           		console.log(req.body.date);
		 		var date = new Date(req.body.date);
		 		var year = date.getFullYear();
		 		console.log("Year entered is:"+year);


             /// we have the year now in variable year

             // next we get the results based on the year
	var ar="select sum(booking_amount) as Booking_Amount,hotel_name from hotel_transaction where Year(booking_date) = '"+year+"' group by hotel_name order by Booking_Amount desc limit 10";
	let res_result ={};
	res_result.result = {hotel_name:[],sales:[]};
	var hotels,amount="";
	var seq1 = "";
	var seq2 = "";
	mysql.fetchData(function(err,results) {
		
		if(err){
			console.log("error");
			res_result.message = "Error could not find top ten hotels"
			res.status(401).json(res_result);
		     }
		console.log("Results from database:"+JSON.stringify(results));
		for (var key in results)
				{
   				if (results.hasOwnProperty(key))
   				{
           		     var hotel_name = results[key].hotel_name;
      				 var booking_amount = results[key].Booking_Amount;
      				 res_result.result['hotel_name'].push(hotel_name);
      				 res_result.result['sales'].push(booking_amount);
   				}
				}
	
					res.status(201).json(res_result);

	
			
	}, ar);


});




module.exports = router;