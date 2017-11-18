var express = require('express');
var router = express.Router();
var kafka = require('./../kafka/client');

/* GET home page. */
// i am here when the flights are searched 
router.post('/searchflights', function(req, res, next) {

	  console.log("dataiddd"+req.body.src_city+req.body.destination_city+req.body.operational_day);

          console.log("Date is:"+req.body.operational_day);
            var d = new Date(req.body.operational_day);
   
    		var day = d.getDay()
    		console.log("Day is:"+day);
    
 

     var details = { "src_city": req.body.src_city,"destination_city":req.body.destination_city,"operational_day":day};
     console.log("accessing json:"+details.src_city);
     console.log(details);
     kafka.make_request('flight_search',details, function(err,result){
    if(err){
       console.log(err); 
    }
         else {
         res.status(201).json(result);

     }
  });
  

});

module.exports = router;
