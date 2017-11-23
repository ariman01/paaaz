var express = require('express');
var router = express.Router();
var kafka = require('./../kafka/client');

router.post('/one', function(req, res, next) {


		 		var date = new Date(req.body.date);
		 		var year = date.getFullYear();
		 		console.log("Year entered is:"+year);

    kafka.make_request('admin_analysis_hotel', {"year" : 2017}, function(err,result){
        console.log("err",err,"result",result.finalResult[0]);
        if(err){
            console.log(err);
        }else {
            res.status(201).json({result:result,message:"Hotel Analysis retrieved succesfully"});
        }
    });
});


router.post('/caranalysis', function(req, res, next) {


		 		var date = new Date(req.body.date);
		 		var year = date.getFullYear();
		 		console.log("Year entered is:"+year);

    kafka.make_request('admin_analysis_car', {"year" : 2017}, function(err,result){
        console.log("err",err,"result",result.finalResult[0]);
        if(err){
            console.log(err);
        }else {
            res.status(201).json({result:result,message:"Hotel Analysis retrieved succesfully"});
        }
    });
});






module.exports = router;
