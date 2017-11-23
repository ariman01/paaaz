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
            res.status(201).json(result);
        }
    });
});


// Analysis 2

router.post('/two', function(req, res, next) {



    kafka.make_request('admin_analysis2_hotel', {}, function(err,result){
        if(err){
            console.log(err);
        }else {
            res.status(201).json(result);
        }
    });
});

router.post('/three', function(req, res, next) {



    kafka.make_request('admin_analysis3_hotel', {}, function(err,result){
        if(err){
            console.log(err);
        }else {
            res.status(201).json(result);
        }
    });
});




module.exports = router;
